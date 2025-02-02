const { deployments, ethers, getNamedAccounts } = require('hardhat');
const { assert, expect } = require('chai');

describe("FundMe", async function () {
    let fundMe;
    let deployer;
    let mockV3Aggregator;
    const sendValue = ethers.utils.parseEther("1"); // 1 ETH

    beforeEach(async function () {
        const accounts = await ethers.getSigners();
        deployer = (await getNamedAccounts()).deployer;
        await deployments.fixture(["all"]);
        fundMe = await ethers.getContract("FundMe", deployer);

        // Get the deployed MockV3Aggregator contract
        mockV3Aggregator = await ethers.getContract("MockV3Aggregator", deployer);
    });

    describe("constructor", async function () {
        it("sets the aggregator addresses correctly", async function () {
            const response = await fundMe.getPriceFeed();
            assert.equal(response, mockV3Aggregator.address);
        });
        it("sets the owner correctly", async function () {
            const response = await fundMe.getOwner();
            assert.equal(response, deployer);
        });
    });

    describe("fund", async function () {
        it("Fails if you don't send enough ETH", async function () {
            await expect(fundMe.fund({ value: ethers.utils.parseEther("0.01") })).to.be.revertedWith(
                "You need to spend more ETH!"
            );
        });

        it("Updates the amount funded data structure", async function () {
            await fundMe.fund({ value: sendValue });
            const response = await fundMe.getAddressToAmountFunded(deployer);
            assert.equal(response.toString(), sendValue.toString());
        });

        it("Adds funder to array of funders", async function () {
            await fundMe.fund({ value: sendValue });
            const funder = await fundMe.getFunder(0);
            assert.equal(funder, deployer);
        });
    });

    describe("withdraw", async function () {
        beforeEach(async function () {
            await fundMe.fund({ value: sendValue });
        });

        it("Withdraw ETH from a single funder", async function () {
            const startingFundMeBalance = await ethers.provider.getBalance(fundMe.address);
            const startingDeployerBalance = await ethers.provider.getBalance(deployer);

            const transactionResponse = await fundMe.withdraw();
            const transactionReceipt = await transactionResponse.wait();
            const { gasUsed, effectiveGasPrice } = transactionReceipt;
            const gasCost = gasUsed.mul(effectiveGasPrice);

            const endingFundMeBalance = await ethers.provider.getBalance(fundMe.address);
            const endingDeployerBalance = await ethers.provider.getBalance(deployer);

            assert.equal(endingFundMeBalance, 0);
            assert.equal(
                startingFundMeBalance.add(startingDeployerBalance).toString(),
                endingDeployerBalance.add(gasCost).toString()
            );
        });

        it("Allows us to withdraw with multiple funders", async function () {
            const accounts = await ethers.getSigners();
            for (let i = 1; i < 6; i++) {
                const fundMeConnectedContract = await fundMe.connect(accounts[i]);
                await fundMeConnectedContract.fund({ value: sendValue });
            }

            const startingFundMeBalance = await ethers.provider.getBalance(fundMe.address);
            const startingDeployerBalance = await ethers.provider.getBalance(deployer);

            const transactionResponse = await fundMe.withdraw();
            const transactionReceipt = await transactionResponse.wait();
            const { gasUsed, effectiveGasPrice } = transactionReceipt;
            const gasCost = gasUsed.mul(effectiveGasPrice);

            const endingFundMeBalance = await ethers.provider.getBalance(fundMe.address);
            const endingDeployerBalance = await ethers.provider.getBalance(deployer);

            assert.equal(endingFundMeBalance, 0);
            assert.equal(
                startingFundMeBalance.add(startingDeployerBalance).toString(),
                endingDeployerBalance.add(gasCost).toString()
            );

            await expect(fundMe.getFunder(0)).to.be.reverted;

            for (let i = 1; i < 6; i++) {
                assert.equal(await fundMe.getAddressToAmountFunded(accounts[i].address), 0);
            }
        });
    });
});

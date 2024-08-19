const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { expect } = require("chai");

describe("FundMe", function () {
  async function deployFundMeFixture() {
    const [owner, otherAccount, thirdAccount] = await ethers.getSigners();

    // Deploy the mock price feed
    const MockV3Aggregator = await ethers.getContractFactory("MockV3Aggregator");
    const DECIMALS = 8;
    const INITIAL_PRICE = ethers.utils.parseUnits("2000", DECIMALS); // ETH/USD price of $2000
    const mockPriceFeed = await MockV3Aggregator.deploy(DECIMALS, INITIAL_PRICE);

    // Deploy the FundMe contract
    const FundMe = await ethers.getContractFactory("FundMe");
    const fundMe = await FundMe.deploy(mockPriceFeed.address);

    return { fundMe, owner, otherAccount, thirdAccount, mockPriceFeed, INITIAL_PRICE };
  }

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      const { fundMe, owner } = await loadFixture(deployFundMeFixture);
      expect(await fundMe.getOwner()).to.equal(owner.address);
    });

    it("Should set the right price feed address", async function () {
      const { fundMe, mockPriceFeed } = await loadFixture(deployFundMeFixture);
      expect(await fundMe.getPriceFeed()).to.equal(mockPriceFeed.address);
    });
  });

  describe("Funding", function () {
    it("Should accept funds", async function () {
      const { fundMe, otherAccount } = await loadFixture(deployFundMeFixture);
      const sendValue = ethers.utils.parseEther("1");

      await fundMe.connect(otherAccount).fund({ value: sendValue });

      expect(await fundMe.getAddressToAmountFunded(otherAccount.address)).to.equal(sendValue);
      expect(await fundMe.getFunder(0)).to.equal(otherAccount.address);
    });

    it("Should revert if the sent amount is less than the minimum USD amount", async function () {
      const { fundMe, otherAccount } = await loadFixture(deployFundMeFixture);
      const sendValue = ethers.utils.parseEther("0.01");

      await expect(fundMe.connect(otherAccount).fund({ value: sendValue })).to.be.revertedWith(
        "You need to spend more ETH!"
      );
    });
  });

  describe("Withdrawals", function () {
    it("Should withdraw funds by owner", async function () {
      const { fundMe, owner, otherAccount } = await loadFixture(deployFundMeFixture);
      const sendValue = ethers.utils.parseEther("1");

      await fundMe.connect(otherAccount).fund({ value: sendValue });

      const initialOwnerBalance = await ethers.provider.getBalance(owner.address);

      const tx = await fundMe.withdraw();
      const receipt = await tx.wait();

      const gasUsed = receipt.gasUsed.mul(receipt.effectiveGasPrice);
      const finalOwnerBalance = await ethers.provider.getBalance(owner.address);

      expect(await ethers.provider.getBalance(fundMe.address)).to.equal(0);
      expect(finalOwnerBalance).to.equal(initialOwnerBalance.add(sendValue).sub(gasUsed));
    });

    it("Should revert withdraw if not called by owner", async function () {
      const { fundMe, otherAccount } = await loadFixture(deployFundMeFixture);

      await expect(fundMe.connect(otherAccount).withdraw()).to.be.revertedWith("FundMe__NotOwner");
    });

    it("Should withdraw funds efficiently using cheaperWithdraw", async function () {
      const { fundMe, owner, otherAccount } = await loadFixture(deployFundMeFixture);
      const sendValue = ethers.utils.parseEther("1");

      await fundMe.connect(otherAccount).fund({ value: sendValue });

      const initialOwnerBalance = await ethers.provider.getBalance(owner.address);

      const tx = await fundMe.cheaperWithdraw();
      const receipt = await tx.wait();

      const gasUsed = receipt.gasUsed.mul(receipt.effectiveGasPrice);
      const finalOwnerBalance = await ethers.provider.getBalance(owner.address);

      expect(await ethers.provider.getBalance(fundMe.address)).to.equal(0);
      expect(finalOwnerBalance).to.equal(initialOwnerBalance.add(sendValue).sub(gasUsed));
    });
  });
});

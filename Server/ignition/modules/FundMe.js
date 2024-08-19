const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
const { getNamedAccounts, deployments, network } = require('hardhat')
const {networkConfig} = require("../../local_libraries/Helper-config-network")

const getNamedAccountsFunc=async() => {
  const {deployer}=await getNamedAccounts()
  return deployer
}

module.exports = buildModule("FundMeModule", (f) => {
  try {
    const deployerAccount = getNamedAccountsFunc()
    const chainId=network.config.chainId
    const ethUsdPriceFeedAddress=networkConfig[chainId]["ethUsdPriceFeed"]
    //const address="0x694AA1769357215DE4FAC081bf1f309aDC325306"
    const { deploy } = deployments;
    const FundMe =  deploy('FundMe', {
      from: deployerAccount,
      args: [ethUsdPriceFeedAddress],
      log: true,
    });

    const fundMe = f.contract("FundMe", {
      from: deployerAccount,
      args: [ethUsdPriceFeedAddress],
      log: true,
      contract: FundMe
    });
    return { fundMe : FundMe };
  } catch (error) {
    console.log(error)
  }
});

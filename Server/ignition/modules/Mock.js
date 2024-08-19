const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
const { getNamedAccounts, deployments, network } = require('hardhat')
const {developementChain,DECIMELS,INITIAL_ANSWER} = require("../../local_libraries/Helper-config-network")

const getNamedAccountsFunc=async() => {
  const {deployer}=await getNamedAccounts()
  return deployer
}

module.exports = buildModule("MockModule", (m) => {
  try {
    const deployer = getNamedAccountsFunc()
    const chainId=network.config.chainId
    console.log(network)
    //console.log(network)
    //const ethUsdPriceFeedAddress=networkConfig[chainId]["ethUsdPriceFeed"]
    //const address="0x694AA1769357215DE4FAC081bf1f309aDC325306"
    const { log } = deployments;
    if (developementChain.includes(network.name)) {
        log("Local network detected ! Deploying mocks ...")
        const mock=m.contract("MockV3Aggregator",{
            from: deployer,
            value:[DECIMELS,INITIAL_ANSWER],
            log: true
        })
        log("Mocks deployed")
        log("--------------------------------------------")
        return {mock}
    }
  } catch (error) {
    console.log(error)
  }
});

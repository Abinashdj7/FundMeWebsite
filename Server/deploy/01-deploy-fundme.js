const { network } = require("hardhat")
const { networkConfig, developmentChains } = require("../Helper-config-network")
const { verify } = require("../utils/verify")

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId

    let ethUsdPriceFeedAddress
   
    if (developmentChains.includes(network.name)){
        const ethUsdAggregator=await deployments.get("MockV3Aggregator")
        ethUsdPriceFeedAddress=ethUsdAggregator.address
    }else{
        ethUsdPriceFeedAddress=networkConfig[chainId]["ethUsdPriceFeed"]
    }
    const fundMe= await deploy("FundMe",{
        from:deployer,
        args:[ethUsdPriceFeedAddress],
        log:true,
        waitConfirmations:network.config.blockConfirmations || 1
    })
    //verify(fundMe.address,ethUsdPriceFeedAddress)
    log("-------------------------------------------------------------")
}

module.exports.tags = ["all", "fundme"]
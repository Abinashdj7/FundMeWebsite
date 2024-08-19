require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy");
//require('@nomiclabs/hardhat-waffle');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  solidity: {
    compilers: [
      { version: "0.8.25" },
      { version: "0.6.6" }
    ]
  },
  networks: {
    hardhat: {
      chainId: 31337,
    },
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/lbcXlV6MWL3SwQp_o0-E-4QJj-LqhSUm",
      accounts: ["f67b6c8ace85e1416b68dce53fb81029edd451ebaf03be7bf1681299b08d5965"],
      chainId: 11155111,
      blockConfirmations: 6,
    },
    localhost: {
      url: "http://127.0.0.1:8545/",
      chainId: 31337,
    },
  },
  etherscan: {
    apiKey: {
      sepolia: "N6FIJUIDNIACEIZE4XRQYTWP55CBCTF117",
    },
  },
  gasReporter: {
    enabled: true,
    currency: "USD",
    outputFile: "gas-report.txt",
    noColors: true,
    coinmarketcap: "b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c",
  },
  namedAccounts: {
    deployer: {
      default: 0, // here this will by default take the first account as deployer
      1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
    },
  },
  mocha: {
    timeout: 500000,
  },
};

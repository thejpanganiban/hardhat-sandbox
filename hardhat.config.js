require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("@openzeppelin/hardhat-upgrades");
require("hardhat-gas-reporter");

require("dotenv").config();

const privateKey = process.env.PRIVATE_KEY;
const etherscanKey = process.env.ETHERSCAN_KEY;
const rinkebyUrl = process.env.RINKEBY_URL;
const mainnetUrl = process.env.MAINNET_URL;

module.exports = {
  solidity: "0.8.8",
  networks: {
    rinkeby: {
      url: rinkebyUrl,
      accounts: [`0x${privateKey}`]
    },
    hardhat: {
      chainId: 1337,
      // forking: {
      //   url: mainnetUrl,
      //   blockNumber: 4043801
      // }
    }
  },
  etherscan: {
    apiKey: etherscanKey
  },
  gasReporter: {
    enabled: true,
    currency: "USD",
    gasPrice: 21,
  }
};

require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
const dotenv = require("dotenv");

dotenv.config();

const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;

const MUMBAI_TESTNET_PRIVATE_KEY = process.env.MUMBAI_TESTNET_PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    polygon_mumbai: {
      url : `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [MUMBAI_TESTNET_PRIVATE_KEY]
    }
  }
};

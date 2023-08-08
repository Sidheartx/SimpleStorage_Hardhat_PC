require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config() 
require("@nomicfoundation/hardhat-verify");

/** @type import('hardhat/config').HardhatUserConfig */

const GOERLI_RPC_URL= process.env.GOERLI_RPC_URL
const SEPOLIA_RPC_URL= process.env.SEPOLIA_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const ETHERSCAN_API_KEY = process.env.ESCAN_API_KEY

module.exports = {
  solidity: "0.8.8",
  networks  : {
      goerli: {
        url: GOERLI_RPC_URL, 
        accounts: [PRIVATE_KEY], 
        chainId: 5, 
        gasPrice: 350000
      }, 
      sepolia: {
        url: SEPOLIA_RPC_URL, 
        accounts: [PRIVATE_KEY], 
        chainId: 11155111, 
        gasPrice: 350000
      }, 

  }, 
  solidity: "0.8.8", 
};

require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
require("hardhat-deploy")
require("@nomicfoundation/hardhat-chai-matchers")
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity:{
    compilers:[
      {version:"0.8.20"},
      {version:"0.6.6"}
    ]
  },
  networks:{
    hardhat:{},
    
  }
};

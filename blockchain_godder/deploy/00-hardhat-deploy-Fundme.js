module.exports = async(hre)=>{
    const { deploy,log } = hre.deployments;
    const { deployer } = await hre.getNamedAccounts()
    const { ethers } = hre;

    // Deploying the contract here
    const my_contract = await deploy("Fund",{
        contract:"Fund",
        from: deployer,
        log: true,
        waitConfirmations:1
    });

    // interaction with the contract
    const contract = await ethers.getContract("Fund", deployer);
    console.log(await contract.get_your_funding())
}
const { ethers, upgrades } = require("hardhat");

async function main() {
    const proxyAddress = "0xd676D631FeA044A72F7606FEA281EA988efc55e7";

    const BoxV2 = await ethers.getContractFactory("BoxV2");
    const boxV2Address = await upgrades.prepareUpgrade(proxyAddress, BoxV2);
    console.log(`BoxV2 at: ${boxV2Address}`);
}

main();
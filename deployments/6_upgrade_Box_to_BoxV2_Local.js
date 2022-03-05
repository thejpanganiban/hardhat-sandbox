const { ethers, upgrades } = require("hardhat");

async function main() {
    const proxyAddress = "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9";
    const BoxV2 = await ethers.getContractFactory("BoxV2");
    const boxV2 = await upgrades.upgradeProxy(proxyAddress, BoxV2);
    console.log(`Box Upgraded to BoxV2: ${proxyAddress}`);
}

main();
const { upgrades } = require("hardhat");

async function main() {
    const gnosisSafe = "0x6833C625e333C4EA100F35eB21a5e0b22aE88786";
    await upgrades.admin.transferProxyAdminOwnership(gnosisSafe);
    console.log(`Transfered ownership of ProxyAdmin to ${gnosisSafe}`);
}

main();
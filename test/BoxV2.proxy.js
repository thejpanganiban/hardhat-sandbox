const { expect } = require("chai");
const { ethers, upgrades } = require("hardhat");

let Box;
let box;
let BoxV2;
let boxV2;

describe("Box V2 (proxy)", () => {
    beforeEach(async () => {
        const Box = await ethers.getContractFactory("Box");
        const BoxV2 = await ethers.getContractFactory("BoxV2");

        box = await upgrades.deployProxy(Box, [42], {initializer: "store"});
        boxV2 = await upgrades.upgradeProxy(box.address, BoxV2);
    });

    it("retrieve() returns a value previously incremented", async () => {
        await boxV2.increment();
        expect((await boxV2.retrieve()).toString()).to.be.equal('43');
    })
});
const { expect } = require("chai");
const { ethers } = require("hardhat");

let Box;
let box;

describe("Box.sol", () => {
    beforeEach(async () => {
        Box = await ethers.getContractFactory("Box");
        box = await Box.deploy();
        await box.deployed();
    });

    it("retrieve() returns a value previously stored", async () => {
        await box.store(42);

        expect((await box.retrieve()).toString()).to.be.equal('42');
    });
});
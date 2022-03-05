const { expect } = require("chai");
const { ethers } = require("hardhat");

let BoxV2;
let boxV2;

describe("BoxV2", () => {
    beforeEach(async () => {
        BoxV2 = await ethers.getContractFactory("BoxV2");
        boxV2 = await BoxV2.deploy();
        await boxV2.deployed();
    });

    it("retrieve() returns the value previously stored", async () => {
        await boxV2.store(42);
        expect((await boxV2.retrieve()).toString()).to.be.equal('42');
    });

    it("retrieve() returns the value previously incremented", async () => {
        await boxV2.increment();
        expect((await boxV2.retrieve()).toString()).to.be.equal('1');
    });
});
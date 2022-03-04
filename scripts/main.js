const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545");

const account0 = new ethers.Wallet("0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80", provider);
const account1 = new ethers.Wallet("0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d", provider);
const account2 = new ethers.Wallet("0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a", provider);
const account19 = new ethers.Wallet("0xdf57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e", provider);

const CONTRACT_ADDRESS = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
const { abi } = require("../artifacts/contracts/Hello.sol/Hello.json");

const balances = async () => {
    const account0Balance = await provider.getBalance(account0.address);
    console.log(`account 0 balance: ${ethers.utils.formatEther(account0Balance)} eth`);
    const account1Balance = await provider.getBalance(account1.address);
    console.log(`account 1 balance: ${ethers.utils.formatEther(account1Balance)} eth`);
    const account19Balance = await provider.getBalance(account19.address);
    console.log(`account 19 balance: ${ethers.utils.formatEther(account19Balance)} eth`);
}

const sendTx = async () => {
    const amount = ethers.utils.parseEther("10") // 10 eth
    await account1.sendTransaction({ to: account19.address, value: amount });
    const account1Balance = await provider.getBalance(account1.address);
    console.log(`account 1 balance: ${ethers.utils.formatEther(account1Balance)} eth`);
    const account19Balance = await provider.getBalance(account19.address);
    console.log(`account 19 balance: ${ethers.utils.formatEther(account19Balance)} eth`);
}

const contractInteraction = async () => {
    const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, provider);
    const result = await contract.hello();
    console.log(`result: ${result}`);
}

const doAll = async () => {
    await balances();
    await sendTx();
    await contractInteraction();
}

doAll();
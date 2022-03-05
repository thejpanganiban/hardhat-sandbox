import { ethers } from "ethers";
import { useEffect, useState } from "react";
import TokenArtifact from "../artifacts/contracts/Token.sol/Token.json";

const TokenAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

export default function TokenPage() {
    const [Contract, setContract] = useState({});
    const [token, setToken] = useState({});

    useEffect(async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = await provider.getSigner();
        const signerAddress = await signer.getAddress();
        const Contract = new ethers.Contract(TokenAddress, TokenArtifact.abi, provider).connect(signer);
        setContract(Contract);
        setToken({
            name: await Contract.name(),
            address: Contract.address,
            totalSupply: ethers.utils.formatEther(await Contract.getTotalSupply()),
            balance: ethers.utils.formatEther(await Contract.balanceOf(signerAddress)),
        })
    }, []);

    async function transferOnSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const to = form.to.value;
        const amount = ethers.utils.parseEther(form.amount.value);
        const tx = await Contract.transfer(amount, to);
        await tx.wait();
    }

    if (!token) return (
        <main>
            <h2>Loading...</h2>
        </main>
    )

    return (
        <div style={{ display: "flex" }}>
            <div style={{ borderRight: "solid 1px", padding: "0 1rem 1rem 0"}}>
                <h2>My Account</h2>
                <p>Token Contract Address: {token.address}</p>
                <p>Total Supply: {token.totalSupply}</p>
                <p>Your Balance: {token.balance}</p>
            </div>
            <div style={{ paddingLeft: "1rem" }}>
                <h2>Transfer {token.name}</h2>
                <form onSubmit={transferOnSubmit}>
                    <p>Wallet: <input type="string" name="to" /></p>
                    <p>Amount: <input type="number" name="amount" /></p>
                    <button>Transfer</button>
                </form>
            </div>
        </div>
    )
};
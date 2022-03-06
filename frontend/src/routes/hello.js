import { ethers } from "ethers";
import { useEffect, useState } from "react";
import HelloArtifact from "../artifacts/contracts/Hello.sol/Hello.json";

const HelloAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

export default function HelloPage() {
    const [hello, setHello] = useState();

    useEffect(async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const Hello = new ethers.Contract(HelloAddress, HelloArtifact.abi, provider);
        setHello(await Hello.hello());
    }, []);

    return (
        <main>
            <h1>Hello</h1>
            <p><code>Hello.hello(): </code>{hello}</p>
            <p>Hello is the first contract in the deployments. It occupies the first address in the local hardhat node.</p>
        </main>
    );
}
import { getNetwork } from "@ethersproject/networks";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import ChainIds from "../lib/chainid.network/chains.json";

function getNetworkFromChainId(chainId) {
    if (chainId === 1337) return {
        "name": "Localhost",
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18
        }
    };
    return ChainIds.find((chain) => chain.chainId === chainId);
}

export default function NetworkPage() {
    const [network, setNetwork] = useState(null);
    const [balance, setBalance] = useState(0);
    const [address, setAddress] = useState("");

    useEffect(async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
        const signer = await provider.getSigner();

        provider.on("network", async (newNetwork, oldNetwork) => {
            setNetwork(getNetworkFromChainId(newNetwork.chainId));
            setAddress(await signer.getAddress());
            setBalance(ethers.utils.formatEther(await signer.getBalance()));
            console.log(getNetworkFromChainId(newNetwork.chainId));
        });
    }, []);

    if (!network) return (
        <main>
            <p>Network Loading...</p>
        </main>
    )

    return (
        <main>
            <h1>Network</h1>
            <p>Network Name: {network.name}</p>
            <p>Your Address: {address}</p>
            <p>Balance: {balance}</p>
        </main>
    )
}
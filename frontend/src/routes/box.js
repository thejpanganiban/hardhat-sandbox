import { ethers } from "ethers";
import { useEffect, useState } from "react";
import BoxV2Artifact from "../artifacts/contracts/BoxV2.sol/BoxV2.json"

const BoxProxyAddress = "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9";

export default function BoxPage() {
    const [boxValue, setBoxValue] = useState(0);
    const [BoxV2, setBoxV2] = useState({});

    useEffect(async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = await provider.getSigner();
        const BoxV2 = new ethers.Contract(BoxProxyAddress, BoxV2Artifact.abi, provider).connect(signer);
        setBoxValue(parseInt(await BoxV2.retrieve()));
        setBoxV2(BoxV2);
        
        provider.on(BoxV2.filters.ValueChanged(), (result) => {
            const newValue = parseInt(result.data);
            console.log(`ValueChanged(${newValue})`);
            setBoxValue(newValue);
        });
    }, []);

    async function formOnSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const newBoxValue = parseInt(form.elements.newBoxValue.value);
        const tx = await BoxV2.store(newBoxValue);
        const receipt = await tx.wait();
        form.reset();
    }

    async function incrementOnClick(event) {
        event.preventDefault();
        const tx = await BoxV2.increment();
        const receipt = await tx.wait();
    }

    return (
        <main>
            <h2>Box Value: {boxValue}</h2>
            <form onSubmit={formOnSubmit}>
                <input type="number" name="newBoxValue" />
                <button>Update Value</button>
                <button onClick={incrementOnClick}>+</button>
            </form>
            <div>
                <p>To run this contract, start from a fresh run of the local hardhat node: <code>$ npx hardhat node</code></p>
                <p>Then run the following deployments in sequence:</p>
                <ul>
                    <li>deployments/1_deploy_Hello.js</li>
                    <li>deployments/2_deploy_Token.js</li>
                    <li>deployments/3_deploy_Box.js</li>
                    <li>deployments/6_upgrade_Box_to_BoxV2_Local.js</li>
                </ul>
                <p>Then reset your account on Metamask</p>
            </div>
        </main>
    );
}
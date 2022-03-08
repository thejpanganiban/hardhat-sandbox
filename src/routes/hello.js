import { ethers } from "ethers";
import { useEffect, useState } from "react";
import HelloArtifact from "../artifacts/contracts/Hello.sol/Hello.json";

const HelloAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

function useContract(contractAddress, contractAbi) {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, contractAbi, signer);
  return {
    provider: provider,
    signer: signer,
    contract: contract,
  }
}

export default function Hello() {
  const { contract } = useContract(HelloAddress, HelloArtifact.abi);
  const [hello, setHello] = useState('');

  useEffect(async () => {
    setHello(await contract.hello());
  });
  return (
    <main>
      <h1>Hello</h1>
      <p><code>hello(): </code>{hello}</p>
    </main>
  )
}
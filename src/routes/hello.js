import { useEffect, useState } from "react";
import useContract from "../lib/useContract";
import HelloArtifact from "../artifacts/contracts/Hello.sol/Hello.json";

const HelloAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

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
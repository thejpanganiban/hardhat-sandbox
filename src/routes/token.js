import { useEffect, useState } from "react";
import { ethers } from "ethers";
import useContract from "../lib/useContract"
import TokenArtifact from "../artifacts/contracts/Token.sol/Token.json"

const TokenAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

export default function Token() {
  const { signer, contract } = useContract(TokenAddress, TokenArtifact.abi);
  const [token, setToken] = useState(null);
  const [signerToken, setSignerToken] = useState(null);

  useEffect(async () => {
    const name = await contract.name();
    const totalSupply = await contract.getTotalSupply();
    setToken({
      name: name,
      totalSupply: ethers.utils.formatEther(totalSupply),
    })
  }, []);

  useEffect(async () => {
    const address = await signer.getAddress();
    const balance = await contract.balanceOf(address);
    setSignerToken({
      address: address,
      balance: ethers.utils.formatEther(balance),
    });
  }, []);

  if (!token) return <main><p>Loading Token Details...</p></main>
  if (!signerToken) return <main><p>Loading Signer Details...</p></main>

  return (
    <main style={{ display: "flex" }}>
      <div style={{ borderRight: "solid 1px", marginRight: "1rem", paddingRight: "1rem" }}>
        <h1>Token Details</h1>
        <p>Name: {token.name}</p>
        <p>Total Supply: {token.totalSupply}</p>
      </div>
      <div style={{ borderRight: "solid 1px", marginRight: "1rem", paddingRight: "1rem" }}>
        <h1>Your Balance</h1>
        <p>{signerToken.address}</p>
        <p>{signerToken.balance} {token.name}</p>
      </div>
    </main>
  )
}
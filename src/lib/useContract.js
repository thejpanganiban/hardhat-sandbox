import { ethers } from "ethers";

export default function useContract(contractAddress, contractAbi) {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, contractAbi, signer);
  return {
    provider: provider,
    signer: signer,
    contract: contract,
  }
}
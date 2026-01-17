import { ethers } from "ethers";
import { getProvider } from "./web3.js";

const airdropAddress = "0xYourAirdropContract";
const abi = [];

export async function sendAirdrop(addresses, amount) {
  const provider = getProvider();
  const signer = await provider.getSigner();
  const contract = new ethers.Contract(airdropAddress, abi, signer);

  const tx = await contract.airdrop(addresses, amount);
  const receipt = await tx.wait();

  return receipt.transactionHash;
}

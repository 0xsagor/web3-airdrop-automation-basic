import { connectWallet } from "./web3.js";
import { sendAirdrop } from "./airdrop.js";

document.getElementById("connectBtn").onclick = async () => {
  await connectWallet();
  document.getElementById("status").innerText = "Wallet connected";
};

document.getElementById("sendBtn").onclick = async () => {
  const list = document.getElementById("listInput").value.split(",");
  const amount = document.getElementById("amountInput").value;

  const hash = await sendAirdrop(list, amount);
  document.getElementById("status").innerText = "Tx Hash: " + hash;
};

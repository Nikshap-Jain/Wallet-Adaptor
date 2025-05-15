import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import React from "react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export default function Airdrop() {
  const wallet = useWallet();
  const { connection } = useConnection();

  async function sendAirdropToUser() {
    const amount = document.getElementById("air").value * LAMPORTS_PER_SOL;
    await connection.requestAirdrop(wallet.publicKey, amount);
    alert(`${amount} LAMPORTS is added to your acccount`);
  }

  return (
    <div>
      <input type="text" id="air" placeholder="amount" />
      <button onClick={sendAirdropToUser}>Request Airdrop</button>
    </div>
  );
}

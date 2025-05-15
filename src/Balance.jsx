import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import React from "react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export default function Balance() {
  const wallet = useWallet();
  const { connection } = useConnection();

  async function getBalance() {
    if (wallet.publicKey) {
      const balance = connection.getBalance(wallet.publicKey);
      console.log(balance);
      document.getElementById("bal").innerHTML = balance / LAMPORTS_PER_SOL;
    }
  }
  return (
    <>
      <p>Balance : </p>
      <div id="bal"></div>
    </>
  );
}

import { useState } from "react";
import "./App.css";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  WalletConnectButton,
  WalletDisconnectButton,
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css";
import Airdrop from "./Airdrop";
import Balance from "./Balance";

function App() {
  return (
    <ConnectionProvider
      endpoint={
        "https://solana-devnet.g.alchemy.com/v2/hSITVzqAjwbmYYjiSL4sMzdTQXuJoF9j"
      }
    >
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <div>
            <WalletMultiButton />
            <WalletDisconnectButton></WalletDisconnectButton>
            <Airdrop />
            <Balance />
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;

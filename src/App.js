import logo from './logo.svg';
import './App.css';
import WalletConnectProvider from "@walletconnect/web3-provider";
import { useEffect } from 'react';
import Web3 from "web3";

//  Create Web3 instance

function App() {



  var accounts;
  useEffect(() => {
        //  Create WalletConnect Provider
      (async()=>{
        const provider = new WalletConnectProvider({
          infuraId: "27e484dcd9e3efcfd25a83a78777cdf1",
        });
        
        
        //  Enable session (triggers QR Code modal)
        await provider.enable();
  
  
        const web3 = new Web3(provider);
  
              // Subscribe to accounts change
        provider.on("accountsChanged", (accounts: string[]) => {
          console.log("hi");
        });
  
        // Subscribe to chainId change
        provider.on("chainChanged", (chainId: number) => {
          console.log(chainId);
        });
  
        // Subscribe to session disconnection
        provider.on("disconnect", (code: number, reason: string) => {
          console.log(code, reason);
        });
  
  
  //   const accounts = await web3.eth.getAccounts();
  
  //  //Get Chain Id
  // const chainId = await web3.eth.chainId();

  // //  Get Network Id
  // const networkId = await web3.eth.net.getId();
  
  // // Send Transaction
  // const txHash = await web3.eth.sendTransaction();
  
  // // Sign Transaction
  // const signedTx = await web3.eth.signTransaction();
  
  // // Sign Message
  // const signedMessage = await web3.eth.sign();
  
  // // Sign Typed Data
  // const signedTypedData = await web3.eth.signTypedData();
  
      })()
  },[])
  return (
    <div className="App">
       React
    </div>
  );
}

export default App;

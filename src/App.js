import abi from "./contract/Transfer.json";
import {useState, useEffect} from 'react';
import {ethers} from "ethers";
import './App.css';
import AnnualTransfer from "./components/AnnualTransfer";

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null
  });

  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0x9a748f24B2ab148A070a85BdBA443D65Bf122382";
      const contractAbi = abi.abi;
      try {
        const {ethereum} = window;

        if (ethereum) {
          const account = await ethereum.request({
            method: "eth_requestAccounts"
          }); 
          console.log(account);
        }

        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          contractAddress,
          contractAbi,
          signer
        );

        setState({provider, signer, contract});
      } catch (error) {
        console.log(error);
      }
    };
    connectWallet();
  }, []);

  console.log(state);

  return <div className="App">
    <AnnualTransfer state={state}></AnnualTransfer>
   

  </div>;
}

export default App;
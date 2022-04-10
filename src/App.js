import { useState } from "react";
import { ethers } from "ethers";

function App() {
  let [text, setText] = useState('');
  let [connected, setConnected] = useState(false);

  return (
    <div className="App">
      <button onClick={() => {
        let { ethereum } = window;
        if (ethereum && !connected) {
          ethereum.request({ method: 'eth_requestAccounts'})
            .then(accounts => {
              setConnected(true);
            })
        }
      }}>{!connected ? 'Connect wallet' : 'Connected' }</button>

      <form onSubmit={(e) => {
        e.preventDefault();
        let { ethereum } = window;
        if (ethereum) {
          let abi = JSON.parse('[{"inputs": [{"internalType": "string","name": "newText","type": "string"}],"name": "changeText","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [],"stateMutability": "nonpayable","type": "constructor"},{"inputs": [],"name": "text","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"}]')
          let address = '0xf4B2e66AdE7e9B7794EBD7F3A306e1bE9De1f7A3';
          let provider = new ethers.providers.Web3Provider(ethereum);
          let signer = provider.getSigner();
          let contract = new ethers.Contract(address, abi, signer);
          contract.changeText(text)
            .then(() => {
              setText("");
            });
        }

      }}>
        <input type="text" placeholder="Enter text" onChange={e => setText(e.currentTarget.value)} value={text} />
        <input type="submit" value="save to contract" />
      </form>
    </div>
  );
}

export default App;

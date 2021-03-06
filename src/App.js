import { useState } from "react";
import { ethers } from "ethers";
 
function App() {
  let [text, setText] = useState("");
  let [savedText, setSavedText] = useState("");
  let [connected, setConnected] = useState(false);
 
  let { ethereum } = window;
  let contract = null;
 
  if (ethereum) {
 
    let abi = JSON.parse('[{"inputs": [{"internalType": "string","name": "newText","type": "string"}],"name": "changeText","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [],"stateMutability": "nonpayable","type": "constructor"},{"inputs": [],"name": "text","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"}]')
 
    let address = "0x2c0d9cc3e4D4eC872d782D7D530D30308AF41ed3";
    let provider = new ethers.providers.Web3Provider(ethereum);
    let signer = provider.getSigner();
    contract = new ethers.Contract(address, abi, signer);
  }
 
  return (
    <div className="App">
 
      <button onClick={() => {
          if (contract && !connected) {
              ethereum.request({ method: 'eth_requestAccounts'})
                  .then(accounts => {
                      setConnected(true);
                  })
          }
      }}>{!connected ? 'Connect wallet' : 'Connected' }</button>
 
      <form onSubmit={(e) => {
        e.preventDefault();
        if (contract && connected) {
          contract.changeText(text)
            .then(() => {
              setText("");
            });
        }
      }}>
          <input type="text" placeholder="Enter text" onChange={e => setText(e.currentTarget.value)} value={text} />
          <input type="submit" value="save to contract" />
      </form>
 
      <button onClick={() => {
        if (contract && connected) {
          contract.text()
            .then(text => {
              setSavedText(text);
            })
        }
      }}>Get Text</button>
 
      <span>{savedText}</span>
    </div>
  );
}
 
export default App;
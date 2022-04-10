# Create a Dapp with Solidity, React and Ethers

Extra packages to install: 
* Ethers.js

The frontend should have the following features:
* A connect wallet button, for connecting the app to the wallet
* A form, for setting the text on a smart contract
* A button, to retrieve the text in the smart contract 

Our solidity contract will have the following features:
* a string variable that stores the text
* a function that changes the string variable

The string variable will be public. Making it public saves the effort of creating a function to returns it.

By default the string varible will be "Hello". Then anyone can change the value to anything. 

We will be creating the smart contract with remix ide. So we do the following:
1. Verify that MetaMask is installed in the browser
2. Create a new Account/Wallet
3. Connect to a test network
4. Fund the account
5. Open remix IDE
6. Create a new Solidity file in the contracts folder
7. Write the described contract in the file
8. Compile the contract
9. Deploy the contract
10. Test the contract
11. Copy the abi and bytecode into a file

The test network we will be using here is Rinkeby
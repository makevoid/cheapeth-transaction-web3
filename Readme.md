# cheapeth-wallet-web3

cheapETH transaction example

This node web3 example uses a local wallet (the private key is saved in a file -`.private-key.txt`), connects to a public JSON RPC node (running a full node is not required), and uses `sendSignedTransaction()` to broadcast the locally signed transaction.


### Features

- sample code
- based on web3
- uses `makevoid/ethereum-keychain` minimalistic library
- light / web client (no full node required)
- the private key is saved on your system as a file
- requires very little code


### Usage

- generate a private key (key needs to be a Bitcoin key in WIF format saved in `.private-key.txt`)

- use metamask or any other ethereum wallet to move some funds (e.g. 1 cTH) to your account (your ethereum address)

- run `node main.js` to send a sample transaction

- customize the code (add a real sender, change the `gasPrice` amount, add `data`, etc...)

- profit! :D

---

@makevoid

process.env.CTH = "1" // select cheapETH as network

const { Keychain } = require('ethereum-keychain')

// load private key file
const { readFileSync } = require('fs')
const pvtKey = readFileSync('./.private-key.txt').toString().trim()
if (!pvtKey) {
  console.error("private key is empty - generate, backup and load a private key first")
  process.exit(1)
}

// initialize keychain
wallet = new Keychain({ store: { "__ethereum-keychain_": pvtKey } })

// prints wallet address
wallet.info()

;(async () => {

  // prints info fetched from the node
  await wallet.netInfo()

  // simplest example - send a test transaction to your address
  // await wallet.sendTXSelf()

  // full tx example:
  const address = wallet.address // your address
  const value = 1000000000000 // value in wei - minimal value that you can send (0.000001 cETH)
  // send transaction
  const txHash = await wallet.send({ to: address, value })
  console.log("TX:", txHash)

  // prints info after transaction
  await wallet.netInfo()

  process.exit()
})()

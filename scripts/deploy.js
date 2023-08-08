/// IMPORTS
const  { ethers, run , network } = require("hardhat")

// asyn 
async function main() {
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
  console.log("Deploying contract...")
  const simpleStorage = await SimpleStorageFactory.deploy()
  console.log(simpleStorage)
  console.log(network.config)
  await simpleStorage.deploymentTransaction().wait(2)
  /*
  if (network.config.chainId === 11155111 && process.env.ESCAN_API_KEY) {
    
    await verify(simpleStorage.address, []) 
  // await simpleStorage.deployed()
  }
 */ 
  const currentValue = await simpleStorage.retrieve()
  console.log(`Current Value is: ${currentValue}`)

  // update the current value
  const transactionResponse = await simpleStorage.store(7)
  await transactionResponse.wait(1)
  const updatedValue = await simpleStorage.retrieve()
  console.log(`Updated Value is: ${updatedValue}`)
}

async function verify(contractAddress, args) { 
  console.log("Verifying contract...")
  try {
  await run("verify:verify", {
    address: contractAddress, 
    constructorArguments : args, 
})
} catch(e) {
  if(e.message.toLowerCase().includes("already verified")) {
    console.log("Already Verified!")
  }
  else {
    console.log(e)
  }
}
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
// main 

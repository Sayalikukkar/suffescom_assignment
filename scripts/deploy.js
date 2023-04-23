const { ethers } = require("hardhat");

async function main() {
  const owner = await ethers.getSigners();
  const deposite = "0x11E31539fCC18De4f9E5F46096D472cB14028CD7";
  console.log(`deploying contract from: ${owner[0].address}`);

  //hardhat helper to get the ethers contractfactory object
  const MyICO = await ethers.getContractFactory('ICO');

  //Deploy the contract
  console.log('Deploying ICO contract');
  const ERC20ICO = await MyICO.deploy();
  await ERC20ICO.deployed(deposite);
  console.log(`ICO contract deployed to: ${ERC20ICO.address}`);
}

main()
 .then(() => process.exit(0))
 .catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

const hre = require('hardhat');
// import {} from ''
async function main() {
  const NFTMarketPlace = await hre.ethers.getContractFactory('NFTMarketPlace');
  const nft = await NFTMarketPlace.deploy();

  await nft.deployed();

  console.log('NFT Marketplace deployed to:', nft.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
}).then(() => process.exit(0));

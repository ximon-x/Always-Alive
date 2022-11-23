import { ethers } from "hardhat";

async function main() {
  const Register = await ethers.getContractFactory("Register");
  const lock = await Register.deploy();

  await lock.deployed();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

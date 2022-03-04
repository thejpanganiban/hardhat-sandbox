# Hardhat Sandbox

## [The Complete Hands-On Hardhat Tutorial](https://betterprogramming.pub/the-complete-hands-on-hardhat-tutorial-9e23728fc8a4)

Started with the leanest project scaffold. Installed a few plugins as they were needed.

### Project 1

Built a pseudo-ERC-20 token. Wrote unit tests. Deployed it on Rinkeby Testnet. Verified the contract Etherscan.

You can find the verified contract [here](https://rinkeby.etherscan.io/address/0xf628A56893Dec782485c9FbB8Bfd93A7BeD0192A#code).

Artifacts: `contracts/Token.sol`, `test/token.js`, `deployments/deployToken.js`

### Project 2

Replicated the infamous "Parity Hack".

Protect functions. Write guards!

Artifacts: `test/parityHack.js`

### Project 3

Built a super simple contract for the purpose of deploying it on the local hardhat node. Wrote real client code (ethers.js) that interacts with the local node.

Artifacts: `contracts/Hello.sol`, `deployments/deployHello.js`
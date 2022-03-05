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

## [OpenZeppelin Upgrades: Step-by-Step Tutorial for Hardhat](https://forum.openzeppelin.com/t/openzeppelin-upgrades-step-by-step-tutorial-for-hardhat/3580)

Followed this guide created by [abcoathup](https://forum.openzeppelin.com/u/abcoathup).

Created a simple contract called `Box`. Deployed it on the Rinkeby network through the hardhat-upgrades extension. Transfered ownership of the contract to a safe in GnosisSafe.

Created a new contract called `BoxV2`. Deployed this contract. Then performed upgrades.

Unit tests were also created for both v1 and v2. In the BoxV2.proxy.js test, you would find that the state is retained even after the contract is upgraded.

### OpenZeppelin Network Files

The folder `.openzeppelin` was also created. That folder keeps track of any openzeppelin deployments and proxy associations. They're called [network files](https://docs.openzeppelin.com/upgrades-plugins/1.x/network-files).

Recommendation is to keep track of the files.

### Artifacts Created

Installed Packages: `@openzeppelin/hardhat-upgrades`, `@openzeppelin/contracts-upgradeable`
Contracts: `Box.sol`, `Box2.sol`
Tests: `Box.js`, `Box.proxy.js`, `BoxV2.js`, `BoxV2.proxy.js`
Deployments: `3_deploy_Box.js`, `4_transfer_Box.js`, `5_upgrade_Box_BoxV2.js`
Network Files: `rinkeby.json`

### Contracts of Interest

- [Box](https://rinkeby.etherscan.io/address/0x78da2fdcbaad3ac68f2eb7532bed30a1d2d72ec9)
- [Initial Proxy Contract](https://rinkeby.etherscan.io/address/0xd676D631FeA044A72F7606FEA281EA988efc55e7)
- [BoxV2](https://rinkeby.etherscan.io/address/0x40CBFdF3BE914C9D879aeC54e9997c1d03bD218b)
# CoolCat04122024

 <p align="center" width="75%">
  <img src="https://github.com/CramerJ1470/CoolCat04122024/blob/master/RedSphere.png" alt="site"/>
</p>

> ## Table of contents
- [Overview](#overview)
- [Core Features Implemented](#core-features-implemented)
- [Technologies](#technologies)
- [Repo Setup](#repo-setup)
- [Requirements](#requirements)
- [Setup the Project](#setup-the-project)
  - [Install Hardhat](#install-hardhat)
  - [Env Setup](#env-setup)
  - [Setup Hardhat.config](#setup-hardhatconfig)
- [Setup the Frontend](#setup-the-frontend)
  - [Install Dependencies](#install-dependencies)
  - [Steps to host the live site on Vercel](#steps-to-host-the-live-site-on-vercel)
- [Testing the Smartcontract](#testing-the-smartcontract)
- [Sporteka-MVP Contract Address](#Nft-factory-contract-address)
- [Live Link](#live-link)
- [Contributors](#contributors)
- [Contributing to the project](#contributing-to-the-project)
#
> ## Overview
<p align="justify">
CoolCat will be a new way to store data at points in basically infinite larger or smaller node addresses. A form of hashing and key pairs to handshake and verify data locations. 
</p>

#
> ## Core Features Implemented

`Deployment on Chain`
- Tokenization of addresses holding selected data.
- Initil Data sizes will allow Sports Clubs: Sporteka facilitates the tokenization of sports clubs, allowing users to invest in and own fractionalized shares of various clubs. The ClubsFactory contract enables the creation of unique ERC-20 tokens representing ownership in specific sports clubs.

- Club Token Marketplace: The platform incorporates a marketplace for buying and selling club tokens. Users can purchase club tokens using the native SportekaToken or other cryptocurrencies, enabling them to participate in sports club ownership and trade these assets.

- Futures Contract Creation: The Futures contract allows users to create and manage positions based on future predictions of sports events. This feature enables users to open, close, modify, and delete positions for specific sports-related outcomes using different tokens.

- Chainlink Oracle Integration: The system integrates Chainlink oracles to obtain external data necessary for various functionalities. This integration enables fetching data from external sources like APIs (e.g., Sportmonkie), updating token prices, and determining price fluctuations based on real-time information.

- ICO Allocation: The SportekaToken contract includes an Initial Coin Offering (ICO) allocation feature, granting a specific amount of tokens to ICO participants. This process is managed to prevent multiple claims from the same address.

- Ownership and Transfer of Tokens: Users can transfer ownership of club tokens, SportekaTokens, or tokens representing positions between addresses. This feature enables trading, staking, or using tokens within the Sporteka platform.

- Admin Functions and Controls: The system includes functionalities limited to admin roles, such as adding new clubs, setting club prices, and managing the platform's core operations. These controls ensure platform integrity and governance.

`Test Coverage`
- Unit testing ensures that all the codes meet the quality standards and the functions return the expected output.
- Test coverage shows us the extent of how much of our codes are covered by tests. We ideally aim for 100% coverage.

`Natspec commenting`
- This documentation provides information about the codebase and their implementation for both technical and non technical people. 


</p>

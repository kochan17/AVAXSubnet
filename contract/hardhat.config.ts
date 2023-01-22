import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv"; // 環境構築時にこのパッケージはインストールしてあります。

// .envファイルから環境変数をロードします。
dotenv.config();

if (process.env.TEST_ACCOUNT_PRIVATE_KEY === undefined) {
  console.log("private key is missing");
}

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    local: {
      url: "http://127.0.0.1:9650/ext/bc/3jz4hDGFoJ1zyGFMWJsK72gG84JeY9fQCwYgdW1CNMgwEe9XC/rpc",
      gasPrice: 225000000000,
      chainId: 321123,
      accounts:
        process.env.TEST_ACCOUNT_PRIVATE_KEY !== undefined
          ? [process.env.TEST_ACCOUNT_PRIVATE_KEY]
          : [],
    },
  },
};

export default config;
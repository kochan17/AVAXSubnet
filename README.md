# AVAXSubnet

## Overview
AVAXSubnetDappは、Avalanche の Subnetを使用して独自のブロックチェーンネットワークを設立し、その上でスマートコントラクトを用いて手形取引を管理するWebアプリケーションを開発するためのリポジトリです。

## Subnetとは何か？
Subnetは独自のルールを定義することができるブロックチェーンネットワークです。Avalancheには3つのビルトインブロックチェーン（P-Chain, C-Chain, X-Chain）があり, これらをプライマリネットネットワークと呼びます。これらに加えて, Subnetにより新たなブロックチェーンを作成することができます。

### Subnetの利用可能な機能
1. 独自のネイティブトークンとそれによる手数料体系を利用した独自のトークンエコノミクスを作成できる
2. バリデーターが特定の国に居住している必要がある」などの独自の規則を設けることができる。
3. バリデータが一定のスペックを持ったハードウェア要件を満たす必要がある」などのアプリ仕様に関する要求を設けることができる。
4. 特定のバリデータのみ情報が見えるようにするプライベートブロックチェーンの作成ができる。
5. バリデータは自分が関心のあるブロックチェーンにのみ検証を行うことができるので, バリデータの負担を軽減することができる。

## Set Up
### Avalanche-CLIのインストール
以下のコマンドを実行します:

```bash
curl -sSfL https://raw.githubusercontent.com/ava-labs/avalanche-cli/main/scripts/install.sh | sh -s
```
インストール後にバージョンを確認します
```
avalanche -v
```
## Subnetの作成
以下のコマンドで新しいSubnetを作成します
```
Copy code
avalanche subnet create mySubnet
```
## Subnetのデプロイ
作成したSubnetをデプロイします。

```
avalanche subnet deploy mySubnet
```
# Subnet Customization
## Genesis File
Subnetの初期設定を含むファイルです。 Subnetを作成する際, Avalancheはパラメータに基づいてジェネシスファイルを自動で生成します。 また, 独自のgenesis fileを作成することもできます。これにより, Subnetの構成をより詳細に制御することができます。

Genesis fileの確認方法は以下のとおりです。
```
cat ~/.avalanche-cli/subnets/mySubnet/genesis.json
```
または

```
avalanche subnet describe mySubnet --genesis
```

## Operations

### 動作確認
```
avalanche network status
```

### ネットワークの削除
```
avalanche network clean
```

### サブネットの削除
```
avalanche subnet delete mySubnet
```

### Genesis fileを指定して起動
```
avalanche subnet create mySubnet --genesis genesis/mygenesis.json
```

## Subnetを作り直す
```
avalanche network clean
avalanche subnet delete mySubnet
avalanche subnet create mySubnet --genesis genesis/mygenesis.json
avalanche subnet deploy mySubnet
```

## Metamask
Metamaskの以前のネットワークを削除し, 新たなネットワークを接続します。

## Contract Deployment
ローカルにデプロイするコントラクトアドレス
```
0xAa363921A48Eac63F802C57658CdEde768B3DAe1
```
再デプロイする場合は、hardhat.configのRPC URLを更新します。

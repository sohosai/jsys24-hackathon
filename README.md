# jsys24-hackathon

## セットアップ

1. 以下のコマンドで`yarn`をインストールする。

```shell
npm install -g yarn
```

2. 以下のコマンドを実行する。

```shell
yarn
```

3. `src/pages/index.astro`に班の名前と呼んでほしい名前を適切な場所に書く。

4. `src/pages/`に1.で書いた呼んでほしい名前のディレクトリを作る。

5. サンプルで用意されているディレクトリ(member1~member5)にある`index.astro`を作成したディレクトリにコピーする。

6. サンプルで用意されているディレクトリ(member1~member5)にある`hinagata.astro`を参考に作成したディレクトリ内でマークダウンファイルを作成する。

7. 以下のコマンドを実行して、ローカルで起動する。

```shell
yarn dev
```

## branch のルール

#### PRs をするブランチ (Default branch)

- develop

### 以下のブランチは、すべて develop ブランチにマージすること

#### 機能を追加する際に作成するブランチ

- feat/feat/#[issue-number]-[issue-summary]

  example) feat/feat/#12-add-card-button-component

#### バグ修正をする際に作成するブランチ

- feat/bugfix/#[issue-number]-[issue-summary]

  example) feat/bugfix/#12-fix-button-function

#### バグ以外の修正や変更をする際に作成するブランチ

- feat/fix/#[issue-number]-[issue-summary]

  example) feat/fix/#12-change-title

#### 設定の変更等をする際に作成するブランチ

- feat/config/#[issue-number]-[issue-summary]

  example) feat/config/#12-add-prettier-config

#### その他、以下の条件の下で勝手に新たな種類のブランチを作成してもよい

- feat/[GitHub の username]/[自由にして良い部分]/#[issue-number]-[issue-summary]

  example) feat/Myxogastria0808/nyoki/#112-add-my-config-file

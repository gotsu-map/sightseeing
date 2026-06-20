# 江津カードトリップ

江津観光カードを選んで日帰り観光コースを作成し、作成したコースに体験レビューを蓄積する静的HTMLサイトです。

## 公開フォルダ

現在は404回避のため、リポジトリ直下と `docs/` の両方に同じサイト一式を置いています。

まずはGitHub Pagesの公開元をリポジトリ直下にするのが一番わかりやすいです。

### 推奨設定: main / root で公開

1. GitHubのリポジトリ画面を開く
2. `Settings` → `Pages` を開く
3. `Build and deployment` の `Source` を `Deploy from a branch` にする
4. `Branch` を `main`、フォルダを `/ (root)` にする
5. `Save` を押す
6. 1分ほど待ってから次を開く

```text
https://gotsu-map.github.io/sightseeing/
https://gotsu-map.github.io/sightseeing/index.html
```

### 別案: GitHub Actionsでdocsを公開

このリポジトリには `.github/workflows/pages.yml` も入れています。GitHub側でPagesのSourceを `GitHub Actions` にすると、`docs/` を公開します。

1. GitHubのリポジトリ画面を開く
2. `Settings` → `Pages` を開く
3. `Build and deployment` の `Source` を `GitHub Actions` にする
4. `main` ブランチへpushする
5. `Actions` タブで `Deploy GitHub Pages` が成功することを確認する

### 別案: main / docs で公開

GitHub Actionsを使わず `docs/` を公開元にする場合は、次の設定にしてください。

1. GitHubのリポジトリ画面を開く
2. `Settings` → `Pages` を開く
3. `Build and deployment` の `Source` を `Deploy from a branch` にする
4. `Branch` を `main`、フォルダを `/docs` にする
5. `Save` を押す

## 404になるときの確認

- `Settings` → `Pages` でSourceが正しく設定されているか
- `main` ブランチに `index.html` が存在するか
- Pagesの反映に1〜3分ほど待ったか
- `Actions` 公開を選んだ場合、Actionsが成功しているか
- URLの大文字小文字が `sightseeing` と一致しているか

リポジトリ名が `sightseeing` の場合、通常の公開URLは次です。

```text
https://gotsu-map.github.io/sightseeing/
https://gotsu-map.github.io/sightseeing/index.html
```

`https://gotsu-map.github.io/sightseeing/docs/index.html` も保険として残しています。

## 主なファイル

| ファイル | 役割 |
|---|---|
| `docs/index.html` | サイト本体 |
| `docs/styles.css` | デザイン |
| `docs/app.js` | コース作成、保存、レビュー投稿の動作 |
| `docs/cards.json` | PDFから抽出した観光カードデータ |
| `docs/assets/` | カード画像などの素材 |

## 更新方法

### サイト文言や画面構成を変える

- `docs/index.html` を編集します。
- 見た目は `docs/styles.css` を編集します。
- 動作は `docs/app.js` を編集します。

### 観光カードPDFが更新された場合

1. PDFからカード一覧を再抽出します。
2. 生成された `gotsu_tourism_cards.json` を `docs/cards.json` にコピーします。
3. GitHubにコミット・プッシュします。

このプロジェクトでは、抽出済みデータとして `outputs/gotsu_tourism_cards.json` も残しています。

### 作成コースとレビューについて

現在の試作では、ユーザーが作成したコースとレビューはブラウザ内の `localStorage` に保存されます。

## 管理画面

サイト内の `管理` セクションから、投稿データの確認・削除・JSONバックアップができます。

試作用の管理コード:

```text
gotsu-admin
```

管理画面でできること:

- ユーザー作成コースの確認
- ユーザー作成コースの削除
- 投稿レビューの確認
- 投稿レビューの削除
- 投稿データのJSONエクスポート
- JSONからの復元
- ユーザー投稿データの全削除

注意: この管理コードは静的HTML上の簡易ロックであり、本当の認証ではありません。GitHub Pagesだけで全ユーザーの投稿を安全に一元管理することはできません。

本番運用で全ユーザーの投稿を共有する場合は、次のいずれかに置き換える想定です。

- Googleフォーム + スプレッドシート
- Supabase
- Firebase
- microCMSなどのCMS

## ローカル確認

`docs/` をローカルサーバーで配信して確認します。

```powershell
python -m http.server 8787 --directory docs
```

ブラウザで次を開きます。

```text
http://127.0.0.1:8787/
```

`file://` で直接開くと、ブラウザの制限で `cards.json` を読み込めない場合があります。GitHub Pages上では問題なく読み込めます。

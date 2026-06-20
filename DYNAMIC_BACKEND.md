# GitHub Pagesで動的更新する方法

GitHub Pagesは静的ホスティングなので、投稿されたコースやレビューを全ユーザーで共有するには外部データベースが必要です。

このサイトはSupabaseに対応しています。Supabase設定を入れると、ユーザーが作成したコースとレビューが全ユーザー共通で保存され、管理画面から削除できます。

## 1. Supabaseプロジェクトを作成

1. Supabaseで新規プロジェクトを作成
2. `SQL Editor` を開く
3. `supabase_schema.sql` の内容を実行

## 2. API情報を設定

Supabaseの `Project Settings` → `API` から以下を確認します。

- Project URL
- anon public key

`config.js` を次のように変更します。

```js
window.GOTSU_BACKEND = {
  provider: "supabase",
  supabaseUrl: "https://YOUR_PROJECT_ID.supabase.co",
  supabaseAnonKey: "YOUR_ANON_PUBLIC_KEY"
};
```

## 3. GitHubに反映

次のファイルをGitHubへアップロードします。

- `index.html`
- `app.js`
- `styles.css`
- `config.js`
- `cards.json`
- `assets/`
- `docs/` 配下も使っている場合は同じ内容

## 注意

この試作では、簡単に動的更新を確認できるように匿名ユーザーによる追加・削除を許可しています。

本番運用では、管理者だけが削除できるようにするため、Supabase AuthやEdge Functionsを使って権限を分けてください。


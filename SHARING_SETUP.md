# コース案・レビューを端末間で共有する設定

このサイトはGitHub Pagesだけでも表示できますが、GitHub Pages単体では投稿データを保存・共有できません。
別ブラウザや別端末でも同じコース案・レビューを表示するには、外部データベースとしてSupabaseを使います。

## 1. Supabase側の準備

1. Supabaseで新しいProjectを作成します。
2. SupabaseのSQL Editorを開きます。
3. このリポジトリの `supabase_schema.sql` の内容をコピーして実行します。
4. Project Settings > API から次の2つを控えます。
   - Project URL
   - anon public key

## 2. サイト側の設定

`config.js` を次のように変更します。

```js
window.GOTSU_BACKEND = {
  provider: "supabase",
  supabaseUrl: "https://YOUR_PROJECT_ID.supabase.co",
  supabaseAnonKey: "YOUR_ANON_PUBLIC_KEY",
  googleMapsEmbedApiKey: ""
};
```

変更後、GitHubにアップロードすると `https://gotsu-map.github.io/sightseeing/` で共有保存が有効になります。

## 3. 既存データの扱い

設定を入れた後にサイトを開くと、そのブラウザ内に残っているコース案・レビューもSupabaseへ同期されます。
その後は、別のブラウザやスマートフォンから開いても同じ投稿データを読み込めます。

## 4. 注意

現在の構成は、GitHub Pagesで動く静的サイト向けの試作運用です。
管理者だけが安全に削除・編集できる本番運用にする場合は、Supabase AuthやEdge Functionsを追加して、削除処理をサーバー側で保護する必要があります。

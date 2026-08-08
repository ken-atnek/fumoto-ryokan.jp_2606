## チェックリスト

作業中の確認:

- [ ] 都度 `npm run build` までは実行しない
- [ ] 通常作業では、必要に応じて対象ファイルのみ `eslint` / `stylelint` を確認する
- [ ] `npm run build` は一区切りついた時、本番反映前、依存やNext設定を触った時に実行する

作業開始前に確認:

- [ ] `next.config.ts` に `output: 'export'` がある
- [ ] page.tsx の params に `Promise` 型を使っていない
- [ ] `generateMetadata` / `generateStaticParams` が同期関数
- [ ] `force-dynamic` を使っていない
- [ ] マスターJSONの型は `src/types/master.ts` からインポートしている
- [ ] コンテンツJSON取得は生 `fetch` + `cache: 'no-store'` + `isError` パターン

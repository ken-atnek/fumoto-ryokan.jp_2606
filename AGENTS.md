# AGENTS.md

## 基本方針

このプロジェクトは旅館サイトのリニューアル案件です。  
現行サイト `https://www.fumotoryokan.com/` を参照元として、まずはページ構成・SEO・共通ルールの `md` を先に揃えます。

---

## 新規スレッド開始時の必須確認

- 新しいスレッドを開いたら、実装や提案の前に必ずこの `AGENTS.md` を読む
- 続けて `docs/PAGE_STRUCTURE.md` を確認し、今回の作業対象ページを把握する
- `tsx` を触る前は `docs/rules/tsx-comment-rules.md` を確認する
- `scss` を触る前は `docs/rules/scss-comment-rules.md` と `docs/rules/coding-style.md` を確認する
- 作業前に該当ルールmdの確認が済んでいない状態で、コード編集を始めない
- 不明点があっても、まずは参照順のmdを見てから判断する

---

## 技術方針

- 既存の参考案件と近い構成をベースに進める
- 現行サイトの情報設計を確認しながら、必要な導線やページを引き継ぐ
- Next.js（App Router）前提で検討する
- TypeScript
- SCSS運用
- 静的書き出しを基本方針として検討する

---

## 作業方針

- いきなり大きく作らない
- まずはトップページ基準で構成を固める
- コンテンツ未確定の間は、空テンプレで進める
- 変更は最小単位で行う
- 旅館サイトとして必要なページを優先して整理する

---

## ドキュメント参照順

1. `AGENTS.md`
2. `docs/PAGE_STRUCTURE.md`
3. `docs/rules/tsx-comment-rules.md`（`tsx` 編集時）
4. `docs/rules/scss-comment-rules.md`（`scss` 編集時）
5. `docs/rules/project-setup.md`
6. `docs/rules/coding-style.md`
7. `docs/rules/nextjs-export.md`
8. `docs/rules/fetch-pattern.md`
9. `docs/rules/ui-interactions.md`
10. `docs/rules/checklist.md`
11. `docs/seo/SEO_SETUP.md`
12. `docs/seo/SEO_AUDIT_REQUEST_TEMPLATE.md`
13. `docs/seo/SEO_FIX_TRACKER_TEMPLATE.md`
14. `docs/rules/lessons.md`
15. `docs/review/CLAUDE_REVIEW_REQUEST.md`（外部レビュー依頼時）
16. `docs/review/REVIEW_FIX_TRACKER.md`（外部レビュー反映時）

---

## 注意点

- コンテンツが未確定でも、SEOの枠は先に用意する
- `title`、`description`、`canonical`、OGPの設計は初期段階で置いておく
- 依頼がない限り、大きな設計変更や全面リファクタはしない
- 現行サイトから引き継ぐ情報と、今回刷新する情報を切り分けて整理する
- 旅館の魅力整理と導線設計を先に固めてから実装へ進む
- Claudeなど外部AIはレビュー用途を基本とし、実装反映はCodex側で判断して行う

/* =======================================
 * ふもと旅館 お知らせ詳細ページ
 * URL: /src/app/news/2026-05-10-renewal/page.tsx
 * Referenced in: /src/components/top/TopNews.tsx
 * Created: 2026-08-15
 * Last updated: 2026-08-15
 * ======================================= */

import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'ホームページをリニューアルいたしました。',
  description:
    '黒川温泉 ふもと旅館のホームページリニューアルについてのお知らせです。',
};

export default function NewsRenewalPage() {
  return (
    <main style={{ padding: '160px 24px 96px' }}>
      <article style={{ maxWidth: 960, margin: '0 auto' }}>
        <p>
          <time dateTime="2026-05-10">2026年5月10日</time>
        </p>
        <h1 style={{ marginTop: 16 }}>
          ホームページをリニューアルいたしました。
        </h1>
        <p style={{ marginTop: 32 }}>
          ふもと旅館のホームページをリニューアルいたしました。
        </p>
        <p style={{ marginTop: 40 }}>
          <Link href="/news/">お知らせ一覧へ戻る</Link>
        </p>
      </article>
    </main>
  );
}

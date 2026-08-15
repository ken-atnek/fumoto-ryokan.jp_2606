/* =======================================
 * ふもと旅館 お知らせ一覧ページ
 * URL: /src/app/news/page.tsx
 * Referenced in: /src/components/top/TopNews.tsx
 * Created: 2026-08-15
 * Last updated: 2026-08-15
 * ======================================= */

import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'お知らせ',
  description: '黒川温泉 ふもと旅館からのお知らせをご案内します。',
};

export default function NewsPage() {
  return (
    <main style={{ padding: '160px 24px 96px' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <h1>お知らせ</h1>
        <article style={{ marginTop: 40 }}>
          <time dateTime="2026-05-10">2026年5月10日</time>
          <h2 style={{ marginTop: 12 }}>
            <Link href="/news/2026-05-10-renewal/">
              ホームページをリニューアルいたしました。
            </Link>
          </h2>
        </article>
      </div>
    </main>
  );
}

/* =======================================
 * ふもと旅館 あゆみページ
 * URL: /src/app/history/page.tsx
 * Referenced in: /src/app/history/page.tsx
 * Created: 2026-08-08
 * Last updated: 2026-08-08
 * ======================================= */

import type { Metadata } from 'next';
import HistoryContent from '@/components/history/HistoryContent';

export const metadata: Metadata = {
  title: 'ふもと旅館のあゆみ',
  description:
    '黒川温泉 ふもと旅館が守り続けてきた湯宿の歩みと、受け継がれていく思いをご紹介します。',
};

export default function HistoryPage() {
  return <HistoryContent />;
}

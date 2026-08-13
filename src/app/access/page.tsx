/* =======================================
 * ふもと旅館 アクセスページ
 * URL: /src/app/access/page.tsx
 * Referenced in: /src/app/access/page.tsx
 * Created: 2026-08-13
 * Last updated: 2026-08-13
 * ======================================= */

import type { Metadata } from 'next';
import AccessContent from '@/components/access/AccessContent';

export const metadata: Metadata = {
  title: 'アクセス',
  description:
    '黒川温泉 ふもと旅館へのアクセス。熊本県阿蘇郡南小国町満願寺6697までの電車・バス、お車での経路をご案内します。',
};

export default function AccessPage() {
  return <AccessContent />;
}

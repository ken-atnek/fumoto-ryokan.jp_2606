/* =======================================
 * ふもと旅館 お部屋ページ
 * URL: /src/app/rooms/page.tsx
 * Referenced in: /src/app/rooms/page.tsx
 * Created: 2026-08-15
 * Last updated: 2026-08-15
 * ======================================= */

import type { Metadata } from 'next';
import RoomsContent from '@/components/rooms/RoomsContent';

export const metadata: Metadata = {
  title: 'お部屋',
  description:
    '黒川温泉 ふもと旅館の本館和室と、別館「麓庵」の露天風呂付き客室をご紹介します。',
};

export default function RoomsPage() {
  return <RoomsContent />;
}

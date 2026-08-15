/* =======================================
 * ふもと旅館 温泉ページ
 * URL: /src/app/onsen/page.tsx
 * Referenced in: /src/app/onsen/page.tsx
 * Created: 2026-08-15
 * Last updated: 2026-08-15
 * ======================================= */

import type { Metadata } from 'next';
import SpringQuality from '@/components/common/SpringQuality';
import OnsenContent from '@/components/onsen/OnsenContent';

export const metadata: Metadata = {
  title: '温泉',
  description:
    '黒川温泉 ふもと旅館の源泉かけ流し温泉。宿泊者専用の11か所の貸切湯と、日帰り入浴で利用できる露天風呂をご紹介します。',
};

export default function OnsenPage() {
  return (
    <>
      <OnsenContent />
      <SpringQuality />
    </>
  );
}

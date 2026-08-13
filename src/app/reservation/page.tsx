/* =======================================
 * ふもと旅館 ご予約ページ
 * URL: /src/app/reservation/page.tsx
 * Referenced in: /src/app/reservation/page.tsx
 * Created: 2026-08-13
 * Last updated: 2026-08-13
 * ======================================= */

import type { Metadata } from 'next';
import ReservationContent from '@/components/reservation/ReservationContent';

export const metadata: Metadata = {
  title: 'ご予約',
  description:
    '黒川温泉 ふもと旅館のご予約案内。公式サイト予約の特典、お電話でのご予約、キャンセル料金についてご案内します。',
};

export default function ReservationPage() {
  return <ReservationContent />;
}

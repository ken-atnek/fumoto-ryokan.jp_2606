/* =======================================
 * ふもと旅館 過ごし方ページ
 * URL: /src/app/stay/page.tsx
 * Referenced in: /src/app/stay/page.tsx
 * Created: 2026-08-14
 * Last updated: 2026-08-14
 * ======================================= */

import type { Metadata } from 'next';
import StayContent from '@/components/stay/StayContent';

export const metadata: Metadata = {
  title: '過ごし方',
  description:
    '黒川温泉 ふもと旅館で過ごす1泊2日の滞在イメージをご紹介します。湯めぐり、お食事、朝湯まで、心ほどける時間をお愉しみください。',
};

export default function StayPage() {
  return <StayContent />;
}

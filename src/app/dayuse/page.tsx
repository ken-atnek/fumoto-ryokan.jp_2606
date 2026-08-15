/* =======================================
 * ふもと旅館 日帰り入浴ページ
 * URL: /src/app/dayuse/page.tsx
 * Referenced in: /src/app/dayuse/page.tsx
 * Created: 2026-08-11
 * Last updated: 2026-08-15
 * ======================================= */

import type { Metadata } from 'next';
import SpringQuality from '@/components/common/SpringQuality';
import DayuseContent from '@/components/dayuse/DayuseContent';
import DayuseHero from '@/components/dayuse/DayuseHero';
import styles from '@/components/dayuse/DayuseContent.module.scss';

export const metadata: Metadata = {
  title: '日帰り入浴',
  description:
    '黒川温泉 ふもと旅館の日帰り入浴。男性専用露天風呂「もみじの湯」と女性専用露天風呂「うえん湯」をご紹介します。',
};

export default function DayusePage() {
  return (
    <main className={styles.dayusePage}>
      <DayuseHero />
      <DayuseContent />
      <SpringQuality />
    </main>
  );
}

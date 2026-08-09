/* =======================================
 * ふもと旅館 お料理ページ
 * URL: /src/app/cuisine/page.tsx
 * Referenced in: /src/app/cuisine/page.tsx
 * Created: 2026-08-09
 * Last updated: 2026-08-09
 * ======================================= */

import type { Metadata } from 'next';
import Image from 'next/image';
import CuisineBreakfast from '@/components/cuisine/CuisineBreakfast';
import CuisineDinner from '@/components/cuisine/CuisineDinner';
import styles from '@/components/cuisine/CuisineContent.module.scss';

export const metadata: Metadata = {
  title: 'お料理',
  description:
    '黒川温泉 ふもと旅館で味わう、熊本・阿蘇の恵みを活かした夕食と、身体にやさしい朝食をご紹介します。',
};

export default function CuisinePage() {
  return (
    <>
      <section className={styles.hero}>
        <h1>
          <span className="sr-only">お食事</span>
          <Image
            src="/images/cuisine/title.svg"
            width={83}
            height={271}
            alt=""
            aria-hidden="true"
            priority
          />
        </h1>
      </section>
      <CuisineDinner />
      <CuisineBreakfast />
    </>
  );
}

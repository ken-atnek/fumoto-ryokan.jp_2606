/* =======================================
 * ふもと旅館 TOP Hero スライド
 * URL: /src/components/top/HeroSlide.tsx
 * Referenced in: /src/components/top/TopHero.tsx
 * Created: 2026-06-30
 * Last updated: 2026-08-08
 * ======================================= */

import Image from 'next/image';
import styles from './HeroSlide.module.scss';

const heroImages = [
  '/images/top/hero01.webp',
  '/images/top/hero02.webp',
  '/images/top/hero03.webp',
  '/images/top/hero04.webp',
  '/images/top/hero05.webp',
] as const;

export default function HeroSlide() {
  return (
    <div className={styles.innerSlide}>
      {heroImages.map((src) => (
        <Image
          key={src}
          src={src}
          width={1200}
          height={800}
          alt="ふもと旅館 TOPイメージ"
          loading="eager"
        />
      ))}
    </div>
  );
}

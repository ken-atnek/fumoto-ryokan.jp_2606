/* =======================================
 * ふもと旅館 TOP Hero スライド
 * URL: /src/components/top/HeroSlide.tsx
 * Referenced in: /src/components/top/TopHero.tsx
 * Created: 2026-06-30
 * Last updated: 2026-07-01
 * ======================================= */

'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './HeroSlide.module.scss';

const heroImages = [
  '/images/top/hero01.webp',
  '/images/top/hero02.webp',
  '/images/top/hero03.webp',
  '/images/top/hero04.webp',
  '/images/top/hero05.webp',
] as const;

type HeroImage = (typeof heroImages)[number];

function shuffle(arr: readonly HeroImage[]): HeroImage[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function HeroSlide() {
  const [images, setImages] = useState<HeroImage[]>([...heroImages]);

  useEffect(() => {
    setImages(shuffle(heroImages));
  }, []);

  return (
    <div className={styles.innerSlide}>
      {images.map((src) => (
        <Image
          key={src}
          src={src}
          width={1200}
          height={800}
          alt="ふもと旅館 TOPイメージ"
        />
      ))}
    </div>
  );
}

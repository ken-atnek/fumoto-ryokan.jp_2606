/* =======================================
 * ふもと旅館 スクロール連動パララックス画像
 * URL: /src/components/common/ScrollParallaxImage.tsx
 * Referenced in: /src/components/top/TopWelcome.tsx
 * Created: 2026-07-01
 * Last updated: 2026-07-01
 * ======================================= */

'use client';

import Image from 'next/image';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import styles from './ScrollParallaxImage.module.scss';

type Props = {
  src: string;
  width: number;
  height: number;
  alt: string;
  /** スクロール速度係数（目安0〜0.5、大きいほど動きが大きい） */
  speed?: number;
  className?: string;
};

export default function ScrollParallaxImage({
  src,
  width,
  height,
  alt,
  speed = 0.2,
  className,
}: Props) {
  const parallaxRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = parallaxRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = parallaxRef.current;
    if (!el) return;

    let rafId = 0;
    let baseTop = 0;
    let elHeight = 0;

    // getBoundingClientRect はリフローを伴うため、スクロール毎ではなく計測時のみ呼ぶ
    const measure = () => {
      const rect = el.getBoundingClientRect();
      baseTop = rect.top + window.scrollY;
      elHeight = rect.height;
    };

    const update = () => {
      const offset =
        baseTop - window.scrollY + elHeight / 2 - window.innerHeight / 2;
      el.style.transform = `translateY(${offset * -speed}px)`;
      rafId = 0;
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(update);
    };

    measure();
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', measure);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', measure);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [speed]);

  return (
    <div ref={parallaxRef} className={styles.itemParallax}>
      <div className={clsx(styles.itemFadeIn, isVisible && styles['is-visible'], className)}>
        <Image src={src} width={width} height={height} alt={alt} />
      </div>
    </div>
  );
}

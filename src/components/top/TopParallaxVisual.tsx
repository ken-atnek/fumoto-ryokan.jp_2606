/* =======================================
 * ふもと旅館 TOP パララックスビジュアル
 * URL: /src/components/top/TopParallaxVisual.tsx
 * Referenced in: /src/app/page.tsx
 * Created: 2026-07-01
 * Last updated: 2026-07-01
 * ======================================= */

import ScrollParallaxImage from '@/components/common/ScrollParallaxImage';
import styles from './TopParallaxVisual.module.scss';

export default function TopParallaxVisual() {
  return (
    <section className={styles.containerTopParallaxVisual}>
      <div className={styles.itemImage}>
        <ScrollParallaxImage
          src="/images/top/parallax-bg.webp"
          width={2480}
          height={1654}
          alt="木漏れ日と旅館の灯り"
          speed={0.16}
        />
      </div>
    </section>
  );
}

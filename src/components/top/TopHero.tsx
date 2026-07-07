/* =======================================
 * ふもと旅館 TOP Hero セクション
 * URL: /src/components/top/TopHero.tsx
 * Referenced in: /src/app/page.tsx
 * Created: 2026-07-01
 * Last updated: 2026-07-01
 * ======================================= */

import HeroSlide from './HeroSlide';
import styles from './TopHero.module.scss';

export default function TopHero() {
  return (
    <section className={styles.topHero}>
      <div className={styles.blockSlide}>
        <HeroSlide />
      </div>
      <div className={styles.boxSvgText}>
        <div className={styles.itemSvg01}>
          <svg aria-label="湯けむりに、">
            <use href="#svgTopHeroText01" />
          </svg>
        </div>
        <div className={styles.itemSvg02}>
          <svg aria-label="日常を">
            <use href="#svgTopHeroText02" />
          </svg>
        </div>
        <div className={styles.itemSvg03}>
          <svg aria-label="置いていく。">
            <use href="#svgTopHeroText03" />
          </svg>
        </div>
      </div>
    </section>
  );
}

/* =======================================
 * ふもと旅館 日帰り入浴ページ Hero
 * URL: /src/components/dayuse/DayuseHero.tsx
 * Referenced in: /src/app/dayuse/page.tsx
 * Created: 2026-08-11
 * Last updated: 2026-08-11
 * ======================================= */

import Image from 'next/image';
import ScrollLink from '@/components/common/ScrollLink';
import styles from './DayuseContent.module.scss';

export default function DayuseHero() {
  return (
    <section className={styles.hero}>
      <h1>
        <span className="sr-only">日帰り入浴</span>
        <Image
          src="/images/dayuse/title.svg"
          width={182}
          height={251}
          alt=""
          aria-hidden="true"
          priority
        />
      </h1>
      <nav className={styles.bathNav} aria-label="日帰り入浴のお風呂">
        <ScrollLink href="#momijinoyu">
          <span className="sr-only">男湯</span>
          <Image
            src="/images/dayuse/otokoyu.svg"
            width={34}
            height={104}
            alt=""
            aria-hidden="true"
          />
        </ScrollLink>
        <ScrollLink href="#uenyu">
          <span className="sr-only">女湯</span>
          <Image
            src="/images/dayuse/onnayu.svg"
            width={34}
            height={104}
            alt=""
            aria-hidden="true"
          />
        </ScrollLink>
      </nav>
    </section>
  );
}

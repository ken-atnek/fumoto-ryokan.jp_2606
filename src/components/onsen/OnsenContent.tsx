/* =======================================
 * ふもと旅館 温泉ページ コンテンツ
 * URL: /src/components/onsen/OnsenContent.tsx
 * Referenced in: /src/app/onsen/page.tsx
 * Created: 2026-08-15
 * Last updated: 2026-08-15
 * ======================================= */

import Image from 'next/image';
import ScrollLink from '@/components/common/ScrollLink';
import OnsenDayuseBaths from './OnsenDayuseBaths';
import OnsenPrivateBaths from './OnsenPrivateBaths';
import styles from './OnsenContent.module.scss';

export default function OnsenContent() {
  return (
    <>
      <section className={styles.hero}>
        <h1>
          <span className="sr-only">温泉</span>
          <Image
            src="/images/onsen/title.svg"
            width={80}
            height={160}
            alt=""
            aria-hidden="true"
            priority
          />
        </h1>
        <nav className={styles.localNav} aria-label="温泉ページ内メニュー">
          <ScrollLink href="#private-bath">
            <span className="sr-only">貸切り温泉</span>
            <Image
              src="/images/onsen/kasikiri.svg"
              width={32}
              height={172}
              alt=""
              aria-hidden="true"
            />
          </ScrollLink>
          <ScrollLink href="#dayuse-bath">
            <span className="sr-only">日帰り入浴</span>
            <Image
              src="/images/onsen/higaeri.svg"
              width={34}
              height={172}
              alt=""
              aria-hidden="true"
            />
          </ScrollLink>
        </nav>
      </section>

      <OnsenPrivateBaths />
      <OnsenDayuseBaths />
    </>
  );
}

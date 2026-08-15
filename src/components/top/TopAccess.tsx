/* =======================================
 * ふもと旅館 TOP アクセスセクション
 * URL: /src/components/top/TopAccess.tsx
 * Referenced in: /src/app/page.tsx
 * Created: 2026-07-07
 * Last updated: 2026-08-15
 * ======================================= */

import Image from 'next/image';
import styles from './TopAccess.module.scss';

import ScrollLink from '@/components/common/ScrollLink';

export default function TopAccess() {
  return (
    <section className={styles.containerTopAccess}>
      <article>
        <div className={styles.boxTitle}>
          <h2 className={styles.itemSvg}>
            <svg aria-label="アクセス">
              <use href="#svgTopTitleAccess" />
            </svg>
          </h2>
          <p className={styles.titleEn}>Access</p>
        </div>
        <div className={styles.boxMap}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d297263.60117643216!2d130.88523867492586!3d33.064507813865845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x354130eacc03fcff%3A0xb41d562ab7035b60!2z44G144KC44Go5peF6aSo!5e0!3m2!1sja!2sjp!4v1783400702624!5m2!1sja!2sjp"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
        <div className={styles.boxAddress}>
          <h3>黒川温泉　ふもと旅館</h3>
          <div className={styles.itemIllust}>
            <Image
              src="/images/top/welcome-illust.webp"
              width={980}
              height={653}
              alt="ふもと旅館の暖簾イメージ"
            />
          </div>
          <address>
            <span>〒869-2402</span>
            <span>熊本県阿蘇郡南小国町満願寺6697</span>
          </address>
        </div>
        <div className={styles.boxIllustMap}>
          <span></span>
        </div>
        <ScrollLink href="/access/" className={styles.itemLink}>
          <span>アクセス</span>
        </ScrollLink>
      </article>
    </section>
  );
}

/* =======================================
 * ふもと旅館 TOP Welcome セクション
 * URL: /src/components/top/TopWelcome.tsx
 * Referenced in: /src/app/page.tsx
 * Created: 2026-07-01
 * Last updated: 2026-07-01
 * ======================================= */

import Image from 'next/image';
import styles from './TopWelcome.module.scss';
import ScrollLink from '@/components/common/ScrollLink';
import ScrollParallaxImage from '@/components/common/ScrollParallaxImage';

export default function TopWelcome() {
  return (
    <section className={styles.containerTopWelcome}>
      <div className={styles.boxTitle}>
        <h2 className={styles.itemSvg}>
          <svg aria-label="ようこそふもと旅館へ。">
            <use href="#svgTopTitleWelcome" />
          </svg>
        </h2>
        <p className={styles.titleEn}>Welcome to Fumoto Ryokan.</p>
      </div>
      <article>
        <div className={styles.boxLeftImage}>
          <div className={styles.parallaxLeft}>
            <ScrollParallaxImage
              src="/images/top/welcome01.webp"
              width={640}
              height={960}
              alt="ふもと旅館の暖簾イメージ"
              speed={0.2}
            />
          </div>
        </div>
        <div className={styles.boxDetails}>
          <div className={styles.itemText}>
            <p>
              黒川温泉の静かな山あいに佇む、ふもと旅館。自家源泉かけ流しの湯を、心ゆくまでお愉しみいただける温泉宿です。
              <br />
              全14室の客室に対して、露天風呂付きの大浴場や貸切風呂、客室露天風呂、足湯など、館内には全部で17の湯舟をご用意しております。
              <br />
              その時々の気分に合わせて、湯めぐりをしながら、ゆったりとした時間をお過ごしください。
              <br />
              お食事は、九州・熊本の旬の食材を大切に、一品一品丁寧に。
              <br />
              季節の移ろいを感じる、やさしい味わいのお料理とともに、心ほどけるひとときをお届けいたします。
            </p>
          </div>
          <div className={styles.itemIllust}>
            <Image
              src="/images/top/welcome-illust.webp"
              width={980}
              height={653}
              alt="ふもと旅館の暖簾イメージ"
            />
          </div>
        </div>
        <div className={styles.boxRightImage}>
          <div className={styles.parallaxRight01}>
            <ScrollParallaxImage
              src="/images/top/welcome02.webp"
              width={980}
              height={653}
              alt="ふもと旅館の暖簾イメージ"
              speed={0.21}
            />
          </div>
          <div className={styles.parallaxRight02}>
            <ScrollParallaxImage
              src="/images/top/welcome03.webp"
              width={980}
              height={653}
              alt="ふもと旅館の暖簾イメージ"
              speed={0.26}
            />
          </div>
          <ScrollLink href="/history/" className={styles.itemLink}>
            <span>ふもと旅館のあゆみ</span>
          </ScrollLink>
        </div>
      </article>
    </section>
  );
}

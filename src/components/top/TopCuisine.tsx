/* =======================================
 * ふもと旅館 TOP 料理セクション
 * URL: /src/components/top/TopCuisine.tsx
 * Referenced in: /src/app/page.tsx
 * Created: 2026-07-06
 * Last updated: 2026-07-06
 * ======================================= */

import styles from './TopCuisine.module.scss';
import Image from 'next/image';
import ScrollLink from '@/components/common/ScrollLink';
import ScrollParallaxImage from '@/components/common/ScrollParallaxImage';
export default function TopCuisine() {
  return (
    <section id="cuisine" className={styles.containerTopCuisine}>
      <h2>
        <Image
          src="/images/top/illust-zen.webp"
          alt="宿"
          width={648}
          height={690}
        />
      </h2>
      <article>
        <div className={styles.boxRightImage}>
          <ScrollParallaxImage
            src="/images/top/food01.webp"
            alt="料理の写真"
            width={980}
            height={653}
            speed={0.3}
          />
        </div>
        <div className={styles.boxDetails}>
          <h3>
            <Image
              src="/images/top/zen-title.svg"
              alt="女将が考え、仕込み、届ける”田舎のごちそう”あの日の忘れない味。"
              width={648}
              height={690}
            />
          </h3>
          <p>
            湯けむりの向こうに広がる、どこか懐かしい田舎のごちそう。
            <br />
            ふもと旅館のお料理は、華やかさを競うのではなく、熊本・阿蘇の恵みを一つひとつ丁寧に味わっていただくための、やさしい手料理です。女将が目利きした馬刺しや、季節の山の幸、土地の味わいを活かした郷土料理が、旅の疲れた心と身体をそっとほどいてくれます。囲炉裏を囲むようなあたたかな時間の中で、大切な人と語らいながら味わう夕餉。気取らず、けれど忘れられない――そんな“ふるさとのような食卓”をご用意して、お待ちしております。
          </p>
        </div>
        <div className={styles.boxLeftImage}>
          <ScrollParallaxImage
            src="/images/top/food03.webp"
            alt="料理の写真"
            width={1600}
            height={1067}
            speed={0.14}
          />
        </div>
      </article>
      <div className={styles.boxBottom}>
        <ScrollLink href="/cuisine/" className={styles.itemLink}>
          <span>お食事</span>
        </ScrollLink>
        <div className={styles.boxBottomImage}>
          <ScrollParallaxImage
            src="/images/top/food02.webp"
            alt="料理の写真"
            width={980}
            height={653}
            speed={0.08}
          />
        </div>
      </div>
    </section>
  );
}

/* =======================================
 * ふもと旅館 TOP 温泉セクション
 * URL: /src/components/top/TopOnsen.tsx
 * Referenced in: /src/app/page.tsx
 * Created: 2026-07-06
 * Last updated: 2026-08-15
 * ======================================= */

import styles from './TopOnsen.module.scss';
import Image from 'next/image';
import ScrollLink from '@/components/common/ScrollLink';
import ExternalLink from '@/components/common/ExternalLink';
import TopOnsenBathGrid from './TopOnsenBathGrid';

const privateBathImages = [
  '/images/top/bathroom01.webp',
  '/images/top/bathroom02.webp',
  '/images/top/bathroom03.webp',
  '/images/top/bathroom04.webp',
  '/images/top/bathroom05.webp',
  '/images/top/bathroom06.webp',
  '/images/top/bathroom07.webp',
  '/images/top/bathroom08.webp',
  '/images/top/bathroom09.webp',
  '/images/top/bathroom10.webp',
  '/images/top/bathroom11.webp',
] as const;

export default function TopOnsen() {
  return (
    <section className={styles.containerTopOnsen}>
      <article className={styles.boxPrivateOnsen}>
        <TopOnsenBathGrid
          images={privateBathImages}
          altPrefix="貸切り温泉イメージ"
          width={979}
          height={551}
          aspectRatio="30 / 35"
          slotCount={6}
          slotDelayStepMs={1600}
          pairDelayMs={1000}
          intervalMs={9200}
          fadeDurationMs={2000}
          className={styles.boxImageGrid}
        />
        <div className={styles.boxDetails}>
          <h2>
            <Image
              src="/images/top/illust-yu.webp"
              alt="湯"
              width={648}
              height={690}
            />
          </h2>
          <h3>
            <svg aria-label="貸切り温泉">
              <use href="#svgTopTitleKashikiri" />
            </svg>
          </h3>
          <div className={styles.boxBottom}>
            <p>
              宿泊専用の貸切風呂は、全部で11湯。
              <br />
              予約なしで入浴できます。ご利用される際は、入口にある木札を「入浴中」に裏返すだけ。極上のプライベート時間をお過ごしください。
            </p>
            <ScrollLink href="/onsen/" className={styles.itemLink}>
              <span>貸切り温泉</span>
            </ScrollLink>
          </div>
        </div>
      </article>
      <article className={styles.boxDayTripOnsen}>
        <div className={styles.boxLead}>
          <h3>
            <svg aria-label="日帰り温泉">
              <use href="#svgTopTitleHigaeri" />
            </svg>
          </h3>
          <div className={styles.boxBottom}>
            <p>
              男性専用の露天風呂「もみじの湯」、
              <br />
              女性専用の露天風呂「うえん湯」。
              <br />
              緑に囲まれた野趣溢れる空間で源泉100％かけ流しの温泉をご堪能くださいませ。
            </p>
            <div className={styles.wrapLink}>
              <ScrollLink href="/dayuse/" className={styles.itemLink}>
                <span>日帰り温泉 大浴場</span>
              </ScrollLink>
              <ExternalLink
                href="https://www.kurokawaonsen.or.jp/nyuyoku/"
                className={styles.itemLinkRealtime}
              >
                <span>混雑状況を確認</span>
              </ExternalLink>
            </div>
          </div>
        </div>
        <div className={styles.boxImageStack}>
          <div className={styles.boxHeadImages}>
            <h4>もみじの湯（男湯）</h4>
            <Image
              src="/images/top/bathroom-type01.webp"
              alt="もみじの湯（男湯）"
              width={900}
              height={350}
            />
          </div>
          <div className={styles.boxFootImages}>
            <h4>うえんの湯（女湯）</h4>
            <Image
              src="/images/top/bathroom-type02.webp"
              alt="うえんの湯（女湯）"
              width={900}
              height={350}
            />
          </div>
        </div>
      </article>
    </section>
  );
}

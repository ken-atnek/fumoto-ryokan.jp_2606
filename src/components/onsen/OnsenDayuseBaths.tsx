/* =======================================
 * ふもと旅館 温泉ページ 日帰り入浴ブロック
 * URL: /src/components/onsen/OnsenDayuseBaths.tsx
 * Referenced in: /src/components/onsen/OnsenContent.tsx
 * Created: 2026-08-15
 * Last updated: 2026-08-15
 * ======================================= */

import Image from 'next/image';
import ExternalLink from '@/components/common/ExternalLink';
import { dayuseBaths } from './onsenContentData';
import styles from './OnsenContent.module.scss';

function TextLines({ lines }: { lines: readonly string[] }) {
  return (
    <>
      {lines.map((line, index) => (
        <span key={`${line}-${index}`}>{line}</span>
      ))}
    </>
  );
}

export default function OnsenDayuseBaths() {
  return (
    <section className={styles.dayuseBathSection} id="dayuse-bath">
      <div className={styles.dayuseHeader}>
        <h2>
          <span className="sr-only">日帰り入浴</span>
          <Image
            src="/images/onsen/higaeri.svg"
            width={34}
            height={172}
            alt=""
            aria-hidden="true"
          />
        </h2>
        <div className={styles.dayuseLead}>
          <p>空と緑に抱かれる、露天の湯時間。</p>
          <p>
            やわらかな風が頬をなで、木々の葉音が静かに響く。
            <br />
            湯けむりの向こうには、黒川温泉ならではの豊かな自然が広がります。
            <br />
            ふもと旅館の露天風呂は、ただ身体を温めるだけではなく、心までゆっくりとほどいてくれる場所。朝は澄んだ空気に包まれ、昼は木漏れ日に癒され、夜は満天の星空を眺めながら、源泉かけ流しの湯を心ゆくまでお愉しみいただけます。
            <br />
            季節ごとに表情を変える景色とともに、日常を忘れる贅沢な湯浴みの時間をお過ごしください。
          </p>
        </div>
      </div>
      <div className={styles.dayuseBathList}>
        {dayuseBaths.map((bath) => (
          <article className={styles.dayuseBathItem} key={bath.title}>
            <div className={styles.dayuseImageBlock}>
              <Image
                src={bath.image.src}
                width={bath.image.width}
                height={bath.image.height}
                alt={bath.image.alt}
              />
              <h3>
                <span className="sr-only">
                  {bath.title}（{bath.subTitle}）
                </span>
                <Image
                  src={bath.label.src}
                  width={bath.label.width}
                  height={bath.label.height}
                  alt=""
                  aria-hidden="true"
                />
              </h3>
            </div>
            <div className={styles.dayuseBody}>
              <div className={styles.dayuseText}>
                <p className={styles.dayuseCatch}>{bath.catch}</p>
                <p>
                  <TextLines lines={bath.body} />
                </p>
              </div>
              <div className={styles.dayuseLinkBlock}>
                <ExternalLink
                  href="https://www.kurokawaonsen.or.jp/nyuyoku/"
                  className={styles.statusLink}
                >
                  <span>混雑状況を確認</span>
                </ExternalLink>
                <ExternalLink
                  href="https://www.kurokawaonsen.or.jp/tegata/"
                  className={styles.passLink}
                >
                  <span>入浴手形について</span>
                </ExternalLink>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

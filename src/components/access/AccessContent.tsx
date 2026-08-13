/* =======================================
 * ふもと旅館 アクセスページ コンテンツ
 * URL: /src/components/access/AccessContent.tsx
 * Referenced in: /src/app/access/page.tsx
 * Created: 2026-08-13
 * Last updated: 2026-08-13
 * ======================================= */

import Image from 'next/image';
import ExternalLink from '@/components/common/ExternalLink';
import styles from './AccessContent.module.scss';

const address = '熊本県阿蘇郡南小国町満願寺6697';

const trainRoutes = [
  {
    title: '博多駅',
    steps: ['高速バス', '黒川温泉バス停'],
  },
  {
    title: '熊本駅',
    steps: ['九州横断観光バス・別府行き', '黒川温泉バス停'],
  },
] as const;

const carRoutes = [
  {
    title: '大分自動車道・日田IC',
    rows: [
      ['国道212号線', '（松原ダム入口）日田街道', '（松原ダム入口）日田街道'],
      ['（小国町付近）県道178号線', '国道387号線', '国道442号線', '満願寺付近'],
    ],
  },
  {
    title: '九重IC',
    rows: [
      [
        '国道210号線',
        '県道681号線（九重町役場入口）',
        '国道387号線（引治三差路）',
      ],
      ['国道442号線（小国町付近）', '満願寺付近'],
    ],
  },
  {
    title: '九州自動車道・熊本IC',
    rows: [
      [
        '県道149号線',
        '国道212号線（阿蘇市付近）',
        '県道40号線（南小国町付近）',
      ],
      ['日田往還', '満願寺付近'],
    ],
  },
] as const;

function RouteSteps({ steps }: { steps: readonly string[] }) {
  return (
    <ol className={styles.routeSteps}>
      {steps.map((step) => (
        <li key={step}>
          <span>{step}</span>
        </li>
      ))}
    </ol>
  );
}

export default function AccessContent() {
  return (
    <section className={styles.accessContent}>
      <div className={styles.hero}>
        <h1>
          <span className="sr-only">アクセス</span>
          <Image
            src="/images/access/title.svg"
            width={74}
            height={367}
            alt=""
            aria-hidden="true"
            priority
          />
        </h1>
        <ExternalLink
          href="https://maps.google.com/?q=%E7%86%8A%E6%9C%AC%E7%9C%8C%E9%98%BF%E8%98%87%E9%83%A1%E5%8D%97%E5%B0%8F%E5%9B%BD%E7%94%BA%E6%BA%80%E9%A1%98%E5%AF%BA6697"
          className={styles.addressLink}
        >
          <span>{address}</span>
        </ExternalLink>
      </div>

      <section className={styles.trainSection}>
        <article className={styles.sectionInner}>
          <h2>電車とバスをご利用の場合</h2>
          <div className={styles.routeGroup}>
            {trainRoutes.map((route) => (
              <div className={styles.routeBlock} key={route.title}>
                <h3>{route.title}</h3>
                <RouteSteps steps={route.steps} />
              </div>
            ))}
          </div>
        </article>
      </section>

      <div className={styles.illustrationBand} aria-hidden="true">
        <Image
          src="/images/access/train.webp"
          width={160}
          height={20}
          alt=""
          className={styles.trainImage}
        />
        <Image
          src="/images/access/bus.webp"
          width={100}
          height={73}
          alt=""
          className={styles.busImage}
        />
        <Image
          src="/images/access/car.webp"
          width={100}
          height={68}
          alt=""
          className={styles.carImage}
        />
      </div>

      <section className={styles.carSection}>
        <article className={styles.sectionInner}>
          <h2>お車をご利用の場合</h2>
          <div className={styles.routeGroup}>
            {carRoutes.map((route) => (
              <div className={styles.routeBlock} key={route.title}>
                <h3>{route.title}</h3>
                <div className={styles.routeRows}>
                  {route.rows.map((row) => (
                    <RouteSteps steps={row} key={row.join('-')} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>

      <aside className={styles.evNotice}>
        <h2>電気自動車用野外コンセントについて</h2>
        <p>
          当館では、電気自動車で旅行の方にも、安心してお越しいただき、快適な旅を楽しんでいただけるよう電気自動車用の充電スタンドをご用意しております。（設置台数は2台）詳しくは、お問い合わせください。
        </p>
      </aside>
    </section>
  );
}

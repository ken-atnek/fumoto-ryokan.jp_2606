/* =======================================
 * ふもと旅館 日帰り入浴ページ コンテンツ
 * URL: /src/components/dayuse/DayuseContent.tsx
 * Referenced in: /src/app/dayuse/page.tsx
 * Created: 2026-08-11
 * Last updated: 2026-08-11
 * ======================================= */

import Image from 'next/image';
import clsx from 'clsx';
import ExternalLink from '@/components/common/ExternalLink';
import styles from './DayuseContent.module.scss';

const bathSections = [
  {
    id: 'uenyu',
    title: 'うえん湯',
    label: {
      src: '/images/dayuse/uenyu.svg',
      width: 123,
      height: 302,
    },
    lead: '湯気にほどける、山あいの湯。',
    body: [
      '湯小屋からの急な石段を登ると、女性専用の露天風呂「うえん湯」に行くことができます。 ',
      '木漏れ日と風の音が心まで癒してくれる特別な湯処です。四季折々の自然を眺めながら、',
      'ゆっくりと流れる時間をご堪能ください。',
      '※入湯手形でもご利用いただけます。',
    ],
    mainImage: {
      src: '/images/dayuse/uenyu01.webp',
      alt: 'うえん湯の露天風呂',
    },
    images: [
      {
        src: '/images/dayuse/uenyu02.webp',
        alt: 'うえん湯の湯船',
      },
      {
        src: '/images/dayuse/uenyu03.webp',
        alt: 'うえん湯へ続く通路',
      },
      {
        src: '/images/dayuse/uenyu04.webp',
        alt: '木立に囲まれたうえん湯',
      },
    ],
  },
  {
    id: 'momijinoyu',
    title: 'もみじの湯',
    label: {
      src: '/images/dayuse/momijinoyu.svg',
      width: 123,
      height: 348,
    },
    lead: '川音にほどける、もみじの湯。',
    body: [
      '川のせせらぎを背に、打たせ湯とともにゆったりと湯浴みを愉しめる露天風呂です。',
      '昼は木々の緑に包まれ、夜は幻想的な静けさに心ほどけるひととき。',
      '時間ごとに移ろう景色とともに、何度でも訪れたくなる湯をご堪能ください。',
      '※入湯手形でもご利用いただけます。',
    ],
    mainImage: {
      src: '/images/dayuse/momijinoyu01.webp',
      alt: 'もみじの湯の露天風呂',
    },
    images: [
      {
        src: '/images/dayuse/momijinoyu03.webp',
        alt: '緑に囲まれたもみじの湯',
      },
      {
        src: '/images/dayuse/momijinoyu04.webp',
        alt: 'もみじの湯を包む緑',
      },
      {
        src: '/images/dayuse/momijinoyu02.webp',
        alt: 'もみじの湯の湯船',
      },
    ],
  },
] as const;

function DayuseLinks() {
  return (
    <div className={styles.linkBlock}>
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
  );
}

function TextLines({ lines }: { lines: readonly string[] }) {
  return (
    <>
      {lines.map((line, index) => (
        <span key={`${line}-${index}`}>{line}</span>
      ))}
    </>
  );
}

export default function DayuseContent() {
  return (
    <>
      {bathSections.map((section, index) => (
        <section
          id={section.id}
          className={clsx(styles.bathSection, styles[section.id])}
          key={section.id}
        >
          <div className={styles.mainVisual}>
            <Image
              src={section.mainImage.src}
              width={900}
              height={350}
              alt={section.mainImage.alt}
              priority={index === 0}
            />
            <h2>
              <span className="sr-only">{section.title}</span>
              <Image
                src={section.label.src}
                width={section.label.width}
                height={section.label.height}
                alt=""
                aria-hidden="true"
              />
            </h2>
          </div>
          <div className={styles.bathBody}>
            <div className={styles.textBlock}>
              <p className={styles.leadText}>{section.lead}</p>
              <p className={styles.bodyText}>
                <TextLines lines={section.body} />
              </p>
              <Image
                src={section.images[2].src}
                width={720}
                height={430}
                alt={section.images[2].alt}
              />
              {section.id === 'uenyu' && <DayuseLinks />}
            </div>
            <div className={styles.sideImages}>
              <Image
                src={section.images[0].src}
                width={520}
                height={650}
                alt={section.images[0].alt}
              />
              <Image
                src={section.images[1].src}
                width={360}
                height={480}
                alt={section.images[1].alt}
              />
              {section.id === 'momijinoyu' && <DayuseLinks />}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

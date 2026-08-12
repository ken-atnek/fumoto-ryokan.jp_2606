/* =======================================
 * ふもと旅館 あゆみページ コンテンツ
 * URL: /src/components/history/HistoryContent.tsx
 * Referenced in: /src/app/history/page.tsx
 * Created: 2026-08-08
 * Last updated: 2026-08-11
 * ======================================= */

'use client';

import Image from 'next/image';
import useAddClassOnInView from '@/hooks/useAddClassOnInView';
import styles from './HistoryContent.module.scss';

const historyBlocks = [
  {
    title: {
      src: '/images/history/catch01.svg',
      width: 362,
      height: 102,
      alt: 'ふもと旅館が守り続けてきたもの。',
    },
    body: [
      '黒川温泉が大切にしてきたものは、自然と寄り添う暮らしと、訪れる人を静かに迎える心。',
      'ふもと旅館もまた、その思いを受け継ぎながら、日々の営みを重ねています。',
    ],
    image: {
      src: '/images/history/block01.webp',
      width: 1440,
      height: 810,
      alt: '緑に囲まれたふもと旅館の外観イメージ',
    },
  },
  {
    title: {
      src: '/images/history/catch02.svg',
      width: 324,
      height: 102,
      alt: 'ふもと旅館を彩る、女将の想い。',
    },
    body: [
      '黒川温泉の小さな湯宿として、この土地に根を張りながら歩んできました。',
      '昔ながらの湯のぬくもり、山あいの静けさ、人を迎えるための心配り。その一つひとつを大切にしながら、ふもと旅館らしい時間を育てています。',
      '変わらないものを守りながら、訪れる方にとって心ほどける場所であり続けること。それが、私たちの思いです。',
    ],
    image: {
      src: '/images/history/block02.webp',
      width: 980,
      height: 653,
      alt: 'ふもと旅館の館内イメージ',
    },
  },
  {
    title: {
      src: '/images/history/catch03.svg',
      width: 321,
      height: 101,
      alt: '受け継がれる想い、つながる未来。',
    },
    body: [
      '長く受け継がれてきた湯宿の空気を、今の時代に合うかたちで整えていく。',
      'ふもと旅館では、昔からの佇まいや人の温度を大切にしながら、これからの滞在にも心地よく寄り添える宿を目指しています。',
      '黒川温泉で過ごすひとときが、旅の記憶にそっと残るように。これからも、この場所らしいおもてなしを重ねていきます。',
    ],
    image: {
      src: '/images/history/block03.webp',
      width: 980,
      height: 653,
      alt: 'ふもと旅館で過ごす時間のイメージ',
    },
  },
  {
    title: {
      src: '/images/history/catch04.svg',
      width: 360,
      height: 102,
      alt: '受け継がれた想いは、湯となる。',
    },
    body: [
      'ふもと旅館に流れる源泉のように、これまでの歩みは静かにこれからへ続いていきます。',
      '湯に身をゆだねる時間の中で、この場所が守ってきたものを感じてください。',
    ],
    image: {
      src: '/images/history/block04.webp',
      width: 979,
      height: 551,
      alt: 'ふもと旅館の温泉イメージ',
    },
  },
] as const;

function FootMarks() {
  const footRef = useAddClassOnInView<HTMLDivElement>(styles.isActive, {
    threshold: 0.45,
  });

  return (
    <div ref={footRef} className={styles.boxFoot} aria-hidden="true">
      <Image
        src="/images/history/foot-right.webp"
        alt=""
        width={100}
        height={242}
        className={styles.footRight}
      />
      <Image
        src="/images/history/foot-left.webp"
        alt=""
        width={100}
        height={242}
        className={styles.footLeft}
      />
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

export default function HistoryContent() {
  return (
    <section className={styles.containerHistory}>
      <div className={styles.pageTitleBlock}>
        <h1 className={styles.pageTitle}>
          <span className="sr-only">ふもと旅館のあゆみ</span>
          <Image
            src="/images/history/title.svg"
            width={315}
            height={246}
            alt=""
            aria-hidden="true"
            className={styles.titleImage}
            priority
          />
        </h1>
        <FootMarks />
      </div>

      {historyBlocks.map((block, index) => (
        <article className={styles.historyBlock} key={block.title.alt}>
          {index > 0 && <FootMarks />}
          <div className={styles.textBlock}>
            <h2>
              <span className="sr-only">{block.title.alt}</span>
              <Image
                src={block.title.src}
                width={block.title.width}
                height={block.title.height}
                alt=""
                aria-hidden="true"
                className={styles.catchImage}
              />
            </h2>
            <p className={styles.bodyText}>
              <TextLines lines={block.body} />
            </p>
          </div>
          <div className={styles.imageBlock}>
            <Image
              src={block.image.src}
              width={block.image.width}
              height={block.image.height}
              alt={block.image.alt}
              priority={index === 0}
            />
          </div>
        </article>
      ))}
    </section>
  );
}

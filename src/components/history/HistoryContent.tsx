/* =======================================
 * ふもと旅館 あゆみページ コンテンツ
 * URL: /src/components/history/HistoryContent.tsx
 * Referenced in: /src/app/history/page.tsx
 * Created: 2026-08-08
 * Last updated: 2026-08-08
 * ======================================= */

import Image from 'next/image';
import ScrollLink from '@/components/common/ScrollLink';
import styles from './HistoryContent.module.scss';

const historyBlocks = [
  {
    title: [
      'ふもと旅館が',
      '守り続けてきたもの。',
      'ふもと旅館が',
      '守り続けていきたいもの。',
    ],
    body: [
      '黒川温泉が大切にしてきたものは、自然と寄り添う暮らしと、訪れる人を静かに迎える心。',
      'ふもと旅館もまた、その思いを受け継ぎながら、日々の営みを重ねています。',
    ],
    image: {
      src: '/images/top/parallax-bg.webp',
      width: 1440,
      height: 810,
      alt: '緑に囲まれたふもと旅館の外観イメージ',
    },
  },
  {
    title: ['ふもと旅館を彩る、', '女将の想い。'],
    body: [
      '黒川温泉の小さな湯宿として、この土地に根を張りながら歩んできました。',
      '昔ながらの湯のぬくもり、山あいの静けさ、人を迎えるための心配り。その一つひとつを大切にしながら、ふもと旅館らしい時間を育てています。',
      '変わらないものを守りながら、訪れる方にとって心ほどける場所であり続けること。それが、私たちの思いです。',
    ],
    image: {
      src: '/images/top/welcome02.webp',
      width: 980,
      height: 653,
      alt: 'ふもと旅館の館内イメージ',
    },
  },
  {
    title: ['受け継がれる想い、', 'つながる未来。'],
    body: [
      '長く受け継がれてきた湯宿の空気を、今の時代に合うかたちで整えていく。',
      'ふもと旅館では、昔からの佇まいや人の温度を大切にしながら、これからの滞在にも心地よく寄り添える宿を目指しています。',
      '黒川温泉で過ごすひとときが、旅の記憶にそっと残るように。これからも、この場所らしいおもてなしを重ねていきます。',
    ],
    image: {
      src: '/images/top/welcome03.webp',
      width: 980,
      height: 653,
      alt: 'ふもと旅館で過ごす時間のイメージ',
    },
  },
  {
    title: ['受け継がれた想いは、', '湯となる。'],
    body: [
      'ふもと旅館に流れる源泉のように、これまでの歩みは静かにこれからへ続いていきます。',
      '湯に身をゆだねる時間の中で、この場所が守ってきたものを感じてください。',
    ],
    image: {
      src: '/images/top/bathroom06.webp',
      width: 979,
      height: 551,
      alt: 'ふもと旅館の温泉イメージ',
    },
    link: {
      href: '/#onsen',
      label: '温泉を見る',
    },
  },
] as const;

export default function HistoryContent() {
  return (
    <section className={styles.containerHistory}>
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

      {historyBlocks.map((block, index) => (
        <article className={styles.historyBlock} key={block.title.join('')}>
          <div className={styles.textBlock}>
            <h2>
              {block.title.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h2>
            <div className={styles.bodyText}>
              {block.body.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>
            {'link' in block && (
              <ScrollLink href={block.link.href} className={styles.itemLink}>
                <span>{block.link.label}</span>
              </ScrollLink>
            )}
          </div>
          <figure className={styles.imageBlock}>
            <Image
              src={block.image.src}
              width={block.image.width}
              height={block.image.height}
              alt={block.image.alt}
              priority={index === 0}
            />
          </figure>
        </article>
      ))}
    </section>
  );
}

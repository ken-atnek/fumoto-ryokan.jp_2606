/* =======================================
 * ふもと旅館 TOPページ
 * URL: /src/app/page.tsx
 * Referenced in: /src/app/page.tsx
 * Created: 2026-06-16
 * Last updated: 2026-06-22
 * ======================================= */

import Footer from '@/components/common/Footer';
import styles from '@/styles/PageTop.module.scss';

const topSections = [
  {
    key: 'hero',
    label: 'Hero',
    title: 'メインビジュアル / キャッチコピー / 予約CTA',
    body: 'TOPデザイン確定内容に合わせて、ここからビジュアルと導線を実装していきます。',
  },
  {
    key: 'intro',
    label: 'Intro',
    title: '旅館の特徴・コンセプト紹介',
    body: 'ふもと旅館の世界観や滞在価値を伝える導入セクションです。',
  },
  {
    key: 'rooms',
    label: 'Rooms Intro',
    title: '客室紹介への導線',
    body: '客室タイプや滞在シーンにつなぐ導線を配置する想定です。',
  },
  {
    key: 'cuisine',
    label: 'Cuisine Intro',
    title: 'お料理紹介への導線',
    body: '食事の魅力や季節感を伝えるセクションをここに展開します。',
  },
  {
    key: 'onsen',
    label: 'Onsen Intro',
    title: '温泉紹介への導線',
    body: '温泉体験の魅力と下層ページへのつながりを整理する領域です。',
  },
  {
    key: 'stay-plan',
    label: 'Stay Plan',
    title: '宿泊プラン / おすすめ導線',
    body: 'プラン訴求や予約導線の見せ方をここで組み立てます。',
  },
  {
    key: 'access',
    label: 'Access',
    title: '所在地・周辺情報・交通案内',
    body: 'アクセス情報や周辺案内の導線をまとめる予定です。',
  },
  {
    key: 'news',
    label: 'News',
    title: 'お知らせ一覧導線',
    body: '更新情報や季節のお知らせを掲載する領域として確保しています。',
  },
  {
    key: 'reservation',
    label: 'Reservation CTA',
    title: '予約・問い合わせ導線',
    body: '予約導線は優先度が高いため、TOP内の配置を早めに固めます。',
  },
];

export default function Home() {
  return (
    <>
      <main className={styles.page}>
        <section className={styles.hero} id='top'>
          <div className={styles.heroInner}>
            <p className={styles.eyebrow}>FUMOTO RYOKAN RENEWAL</p>
            <h1 className={styles.title}>ふもと旅館 TOPページ構成整理</h1>
            <p className={styles.lead}>
              `docs/PAGE_STRUCTURE.md` を基準に、TOPページ実装の土台を整理しています。
              デザイン確定済みのトップから先行実装し、下層は順次追加していく前提です。
            </p>
          </div>
        </section>

        <section className={styles.sectionList} aria-label='トップページ構成メモ'>
          {topSections.map((section, index) => (
            <section className={styles.sectionCard} key={section.key} id={section.key}>
              <p className={styles.sectionNumber}>{String(index + 1).padStart(2, '0')}</p>
              <div className={styles.sectionBody}>
                <p className={styles.sectionLabel}>{section.label}</p>
                <h2 className={styles.sectionTitle}>{section.title}</h2>
                <p className={styles.sectionText}>{section.body}</p>
              </div>
            </section>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}

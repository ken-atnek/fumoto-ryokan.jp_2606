/* =======================================
 * ふもと旅館 お料理ページ 朝食セクション
 * URL: /src/components/cuisine/CuisineBreakfast.tsx
 * Referenced in: /src/app/cuisine/page.tsx
 * Created: 2026-08-09
 * Last updated: 2026-08-09
 * ======================================= */

import Image from 'next/image';
import styles from './CuisineContent.module.scss';

const breakfastMenu = [
  '湯豆腐',
  '自家製柚子orドレッシングで食べるサラダ',
  'お煮しめ',
  'お新香',
  '地元産ごはん',
  '味噌汁',
  '小国ジャージー牛乳',
  '山クラゲの煮物',
  '大根なます',
  'ほうれん草のお浸し',
  '煮豆',
  'きんぴらゴボウ',
  '切り干し大根',
  'ぜんまいの油炒め',
  '卵焼き',
  'ふきの煮物',
  '焼き鮭',
] as const;

export default function CuisineBreakfast() {
  return (
    <>
      <section className={styles.leadSectionBreakfast}>
        <h2>
          <span className="sr-only">朝食</span>
          <Image
            src="/images/cuisine/chousyoku.svg"
            width={51}
            height={110}
            alt=""
            aria-hidden="true"
          />
        </h2>
        <div className={styles.leadText}>
          <p>心も体も目覚める、やさしい一膳。</p>
          <p>
            湯あがりの体にやさしく寄り添う、素朴で滋味深い朝ごはん。炊きたてのご飯を中心に、自家製豆腐の湯豆腐や季節の小鉢など、一日の始まりにうれしい料理を丁寧にご用意しています。派手さではなく、毎日でも食べたくなるような家庭の味。その一膳が、旅先だからこそ感じられる豊かな朝の時間をつくります。
          </p>
        </div>
      </section>
      <section className={styles.breakfastSection}>
        <div className={styles.breakfastMainImage}>
          <Image
            src="/images/cuisine/breakfast01.webp"
            width={1680}
            height={945}
            alt="ふもと旅館の朝食"
          />
        </div>
        <div className={styles.menuBlock}>
          <h3>朝食の一例（7月頃）</h3>
          <ul>
            {breakfastMenu.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className={styles.breakfastImages}>
          <div>
            <Image
              src="/images/cuisine/breakfast02.webp"
              width={980}
              height={733}
              alt="朝食の温物"
            />
          </div>
          <div>
            <p>
              白ごはんは
              <br />
              お米から作っています
            </p>
            <Image
              src="/images/cuisine/breakfast03.webp"
              width={980}
              height={735}
              alt="炊きたてのご飯"
            />
          </div>
        </div>
      </section>
    </>
  );
}

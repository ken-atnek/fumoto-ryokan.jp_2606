/* =======================================
 * ふもと旅館 お料理ページ 夕食セクション
 * URL: /src/components/cuisine/CuisineDinner.tsx
 * Referenced in: /src/app/cuisine/page.tsx
 * Created: 2026-08-09
 * Last updated: 2026-08-09
 * ======================================= */

import Image from 'next/image';
import styles from './CuisineContent.module.scss';

const dinnerMenu = [
  '熟成梅酒',
  '季節の地の物野菜の籠盛り',
  '自家製刺身こんにゃく',
  '熊本名物上馬刺し',
  '茶碗蒸し',
  '県産トマトと蕎麦のサラダ',
  '肥後牛と他野菜の鍬焼き',
  '特製ごま豆腐の揚げ出し',
  '季節の天ぷら三点盛り',
  '野菜の味噌汁',
  '季節野菜の炊き込みご飯',
  '自家製プリントフルーツ',
  'アイスの盛り合わせ',
] as const;

export default function CuisineDinner() {
  return (
    <>
      <section className={styles.leadSection}>
        <h2>
          <span className="sr-only">夕食</span>
          <Image
            src="/images/cuisine/yuushoku.svg"
            width={49}
            height={109}
            alt=""
            aria-hidden="true"
          />
        </h2>
        <div className={styles.leadText}>
          <p>熊本の旬を、一番おいしいかたちで。</p>
          <p>
            一皿ごとに並ぶのは、女将が旬と向き合いながら仕立てた、どこか懐かしく、心まで満たされる田舎のごちそう。熊本名物の馬刺しや肥後牛、採れたての地野菜など、素材本来の美味しさを大切にした料理が、旅の夜をゆっくりと彩ります。豪華さを飾るのではなく、手間を惜しまない温もりでおもてなしする、ふもと旅館ならではの味わいを心ゆくまでお愉しみください。
          </p>
        </div>
      </section>

      <section className={styles.dinnerSection}>
        <div className={styles.mainImage}>
          <p>ふもと旅館名物の鍬焼き</p>
          <Image
            src="/images/cuisine/dinner01.webp"
            width={1680}
            height={1120}
            alt="鉄板で焼かれる肉料理"
            priority
          />
        </div>
        <div className={styles.dinnerGrid}>
          <div className={styles.smallImage}>
            <Image
              src="/images/cuisine/dinner02.webp"
              width={980}
              height={653}
              alt="夕食の小鉢"
            />
          </div>
          <div className={styles.wideImage}>
            <Image
              src="/images/cuisine/dinner03.webp"
              width={980}
              height={653}
              alt="季節の食材を盛り込んだ夕食"
            />
          </div>
        </div>
        <div className={styles.menuBlock}>
          <h3>夕食の一例</h3>
          <ul>
            {dinnerMenu.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className={styles.bottomImages}>
          <div>
            <Image
              src="/images/cuisine/dinner04.webp"
              width={980}
              height={735}
              alt="熊本の馬刺し"
            />
          </div>
          <div>
            <Image
              src="/images/cuisine/dinner05.webp"
              width={980}
              height={734}
              alt="夕食の甘味"
            />
          </div>
        </div>
      </section>
    </>
  );
}

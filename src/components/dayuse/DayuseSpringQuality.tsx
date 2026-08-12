/* =======================================
 * ふもと旅館 日帰り入浴ページ 温質
 * URL: /src/components/dayuse/DayuseSpringQuality.tsx
 * Referenced in: /src/app/dayuse/page.tsx
 * Created: 2026-08-11
 * Last updated: 2026-08-12
 * ======================================= */

import styles from './DayuseContent.module.scss';

const springRows = [
  [
    '泉質名',
    'ナトリウム・カルシウムー炭酸水素塩・硫酸塩・塩化物温泉（低張性 中性 高温泉）',
  ],
  ['pH値', '6.4（中性）'],
  ['泉温', '60.5℃（調査時の気温9.1℃）'],
  [
    '湧出状況',
    '自家源泉の本数1本 地下300mより動力揚湯（ボーリングによって汲み上げる源泉）',
  ],
  ['湯の色', '微弱黄色・澄明'],
  ['におい', '弱硫化水素臭'],
  ['飲用', '不可　※保健所に飲用申請を不提出'],
  [
    '温泉の適応症（浴用）',
    '○泉質別適応症：きりきず　末梢循環障害　冷え性　皮膚乾燥症　うつ状態　○一般的適応症：筋肉若しくは関節の慢性的な痛み又はこわばり、運動麻痺における筋肉のこわばり、冷え性、末梢循環障害、胃腸機能の低下、軽症高血圧、耐糖能異常、軽い高コレステロール血症、軽い喘息又は肺気腫、痔の痛み、自律神経不安定症、ストレスによる諸症状、病後回復期、疲労回復、健康増進',
  ],
  [
    '利用状況',
    'すべてのお風呂で100%源泉かけ流し（加水・加温・循環・消毒一切なし）',
  ],
  ['分析日', '平成28年12月16日（株式会社同仁グローカル）'],
] as const;

export default function DayuseSpringQuality() {
  return (
    <section className={styles.springQuality}>
      <article>
        <h2>温　質</h2>
        <dl>
          {springRows.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </article>
    </section>
  );
}

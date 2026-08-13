/* =======================================
 * ふもと旅館 ご予約ページ コンテンツ
 * URL: /src/components/reservation/ReservationContent.tsx
 * Referenced in: /src/app/reservation/page.tsx
 * Created: 2026-08-13
 * Last updated: 2026-08-13
 * ======================================= */

import Image from 'next/image';
import ExternalLink from '@/components/common/ExternalLink';
import styles from './ReservationContent.module.scss';

const reservationUrl = 'https://go-fumoto6697.reservation.jp/ja/hotels/fumoto';

const leadLines = [
  '24時間インターネット予約が可能です。',
  '下のボタンよりご予約頂きますと、お得な特典が付いてきます。',
  'ぜひご利用くださいませ。',
] as const;

const notes = [
  'ご予約はお電話でもお受けしております。',
  'お問い合わせ、ご不明な点などございましたら、お気軽にお尋ねください。',
  '人数の多いグループ様のご予約は直接お電話でも承ってください。',
  'キャンセル料金は下記の料金で設定させて頂いております。',
] as const;

const cancelFees = [
  '1週間前〜宿泊料金の30%',
  '前日…宿泊料金の50%',
  '当日…宿泊料金の100%',
] as const;

const guideNotes = [
  ...notes.map((text) => ({ text, type: 'note' })),
  ...cancelFees.map((text) => ({ text, type: 'cancel' })),
] as const;

const benefits = [
  {
    number: '1',
    title: 'ご夕食時にワンドリンクサービス',
    body: [
      'お一人様につき700円相当のワンドリンクをプレゼント。',
      'ミニ生ビール / グラスワイン / ウーロン茶 / オレンジ / アップル / コーラ / ジンジャーエール / ホットコーヒー',
    ],
  },
  {
    number: '2',
    title: 'ご予約は最安値。2名様で最大3,400円お得！',
    body: [
      '公式サイト直予約が一番お安くご宿泊いただけます。お一人様最大1,000円もお得に。',
      '',
      'お二人様だと、ドリンク700円×2名と直予約1,000円×2名で3,400円相当の予約特典が受け取れます。',
    ],
  },
] as const;

function TextLines({ lines }: { lines: readonly string[] }) {
  return (
    <>
      {lines.map((line, index) => (
        <span key={`${line}-${index}`}>{line}</span>
      ))}
    </>
  );
}

function ReservationButton({ className }: { className?: string }) {
  return (
    <ExternalLink
      href={reservationUrl}
      className={className ?? styles.mainLink}
    >
      <span>ご予約はこちら</span>
    </ExternalLink>
  );
}

export default function ReservationContent() {
  return (
    <>
      <section className={styles.hero}>
        <h1>
          <span className="sr-only">ご予約</span>
          <Image
            src="/images/reservation/title.svg"
            width={80}
            height={277}
            alt=""
            aria-hidden="true"
            priority
          />
        </h1>
      </section>

      <section className={styles.guideSection}>
        <article>
          <p className={styles.leadText}>
            <TextLines lines={leadLines} />
          </p>
          <ReservationButton />
          <div className={styles.infoBlock}>
            <div className={styles.contactBlock}>
              <ExternalLink
                href="tel:0967440918"
                className={styles.contactLink}
              >
                お電話
              </ExternalLink>
              <p className={styles.reception}>お電話受付時間 / 9:00〜21:00</p>
              <ExternalLink
                href="mailto:info@fumotoryokan.com"
                className={styles.contactLink}
              >
                メール
              </ExternalLink>
            </div>

            <div className={styles.noteBlock}>
              <ul className={styles.notes}>
                {guideNotes.map((item) => (
                  <li
                    className={
                      item.type === 'cancel' ? styles.cancelFee : undefined
                    }
                    key={item.text}
                  >
                    {item.text}
                  </li>
                ))}
              </ul>
              <p className={styles.extraNote}>
                ※上記以外でご不明な点がありましたら、お気軽に宿までお問い合わせ下さい。
              </p>
            </div>
          </div>
        </article>
      </section>

      <section className={styles.benefitSection}>
        <article>
          <div className={styles.benefitTitle}>
            <span>ご予約時の</span>
            <span>特典について</span>
          </div>

          <div className={styles.benefitList}>
            {benefits.map((benefit) => (
              <article className={styles.benefitItem} key={benefit.number}>
                <h2>{benefit.title}</h2>
                <p>
                  <TextLines lines={benefit.body} />
                </p>
              </article>
            ))}
          </div>

          <ReservationButton className={styles.bottomLink} />
        </article>
      </section>
    </>
  );
}

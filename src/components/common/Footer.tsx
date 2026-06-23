/* =======================================
 * ふもと旅館 Footer
 * URL: /src/components/common/Footer.tsx
 * Referenced in: /src/app/page.tsx
 * Created: 2026-06-09
 * Last updated: 2026-06-22
 * ======================================= */

import Image from 'next/image';
import styles from './Footer.module.scss';
import ScrollLink from '@/components/common/ScrollLink';
import ExternalLink from '@/components/common/ExternalLink';

const footerNavItems = [
  {
    href: '/#reservation',
    label: '予約',
    svg: 'svgMenuTextReserve',
    class: 'linkReserve',
  },
  {
    href: '/#access',
    label: 'アクセス',
    svg: 'svgMenuTextAccess',
    class: 'linkAccess',
  },
  {
    href: '/#stay-plan',
    label: '過ごし方',
    svg: 'svgMenuTextSpend',
    class: 'linkSpend',
  },
  {
    href: '/#cuisine',
    label: 'お食事',
    svg: 'svgMenuTextFood',
    class: 'linkFood',
  },
  { href: '/#rooms', label: '客室', svg: 'svgMenuTextRoom', class: 'linkRoom' },
  {
    href: '/#onsen',
    label: '日帰り入浴',
    svg: 'svgMenuTextHigaeri',
    class: 'linkHigaeri',
  },
  {
    href: '/#onsen',
    label: '温泉',
    svg: 'svgMenuTextOnsen',
    class: 'linkOnsen',
  },
  {
    href: '/#intro',
    label: 'ふもと旅館のあゆみ',
    svg: 'svgMenuTextHistory',
    class: 'linkHistory',
  },
  { href: '/#top', label: 'トップ', svg: 'svgMenuTextTop', class: 'linkTop' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <article>
        <div className={styles.infoBlock}>
          <ScrollLink
            href="/#top"
            className={styles.logoLink}
            aria-label="ページ上部へ戻る"
          >
            <Image
              src="/images/common/logo-w.webp"
              alt="ふもと旅館"
              width={578}
              height={215}
              priority={false}
            />
          </ScrollLink>

          <div className={styles.contactBlock}>
            <ScrollLink href="/#reservation" className={styles.itemLink}>
              <span>ご予約はこちら</span>
            </ScrollLink>

            <p className={styles.reception}>お電話受付時間 / 9:00〜21:00</p>

            <div className={styles.contactLinks}>
              <ExternalLink href="tel:0967440918">お電話</ExternalLink>
              <ExternalLink href="mailto:info@fumotoryokan.com">
                メール
              </ExternalLink>
            </div>
          </div>
        </div>

        <div className={styles.navArea}>
          <nav aria-label="フッターナビゲーション">
            {footerNavItems.map((item) => (
              <ScrollLink
                href={item.href}
                className={item.class ? styles[item.class] : undefined}
                key={item.label}
              >
                {item.svg ? (
                  <svg aria-label={item.label}>
                    <use href={`#${item.svg}`} />
                  </svg>
                ) : (
                  item.label
                )}
              </ScrollLink>
            ))}
          </nav>

          <div className={styles.social}>
            <span className={styles.socialLabel}>follow</span>
            <span className={styles.socialLine} aria-hidden="true"></span>

            <ExternalLink>
              <svg aria-label="インスタグラムのアイコン">
                <use href="#svgSnsInsta" />
              </svg>
            </ExternalLink>
          </div>
        </div>
      </article>
    </footer>
  );
}

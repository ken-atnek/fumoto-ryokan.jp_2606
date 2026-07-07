/* =======================================
 * ふもと旅館 TOP News セクション
 * URL: /src/components/top/TopNews.tsx
 * Referenced in: /src/app/page.tsx
 * Created: 2026-07-01
 * Last updated: 2026-07-01
 * ======================================= */

'use client';

import ScrollLink from '@/components/common/ScrollLink';
import { useEffect, useState } from 'react';
import styles from './TopNews.module.scss';

type NewsItem = {
  date: string;
  title: string;
  href: string;
};

function formatDate(date: string) {
  const [year, month, day] = date.split('-');
  return `${year}年${Number(month)}月${Number(day)}日`;
}

export default function TopNews() {
  const [items, setItems] = useState<NewsItem[]>([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const path = '/db/content/top-news-items.json';
    const ts = Date.now();

    fetch(`${path}?t=${ts}`, { cache: 'no-store' })
      .then((res) => {
        if (!res.ok) throw new Error('fetch failed');
        return res.json();
      })
      .then((json) => {
        setItems(json as NewsItem[]);
        setIsError(false);
      })
      .catch(() => {
        setIsError(true);
      });
  }, []);

  return (
    <section className={styles.containerTopNews}>
      <div className={styles.boxTitle}>
        <h2 className={styles.itemSvg}>
          <svg aria-label="おしらせ">
            <use href="#svgTopTitleNews" />
          </svg>
        </h2>
        <p className={styles.titleEn}>News</p>
      </div>
      <article>
        <div className={styles.boxList}>
          {isError ? (
            <p className={styles.itemError}>お知らせの読み込みに失敗しました。</p>
          ) : null}
          {items.map((item, index) => (
            <ScrollLink
              key={`${item.date}-${index}`}
              href={item.href}
              className={styles.itemNews}
            >
              <time className={styles.itemDate} dateTime={item.date}>
                {formatDate(item.date)}
              </time>
              <p className={styles.itemText}>{item.title}</p>
            </ScrollLink>
          ))}
        </div>
        <ScrollLink href="/news/" className={styles.itemLink}>
          <span>お知らせ一覧</span>
        </ScrollLink>
      </article>
    </section>
  );
}

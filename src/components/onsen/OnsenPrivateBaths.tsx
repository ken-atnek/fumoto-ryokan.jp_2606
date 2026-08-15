/* =======================================
 * ふもと旅館 温泉ページ 貸切湯ブロック
 * URL: /src/components/onsen/OnsenPrivateBaths.tsx
 * Referenced in: /src/components/onsen/OnsenContent.tsx
 * Created: 2026-08-15
 * Last updated: 2026-08-15
 * ======================================= */

'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import ScrollLink from '@/components/common/ScrollLink';
import { privateBaths } from './onsenContentData';
import styles from './OnsenContent.module.scss';

function TextLines({ lines }: { lines: readonly string[] }) {
  return (
    <>
      {lines.map((line, index) => (
        <span key={`${line}-${index}`}>{line}</span>
      ))}
    </>
  );
}

type NavState = 'default' | 'fixed' | 'bottom';

export default function OnsenPrivateBaths() {
  const layoutRef = useRef<HTMLDivElement | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);
  const [navState, setNavState] = useState<NavState>('default');

  useEffect(() => {
    const layout = layoutRef.current;
    const nav = navRef.current;

    if (!layout || !nav) return;

    let frameId = 0;

    const updateNavPosition = () => {
      frameId = 0;

      const rootFontSize = parseFloat(
        getComputedStyle(document.documentElement).fontSize,
      );
      const topOffset = rootFontSize * 10;
      const layoutRect = layout.getBoundingClientRect();
      const layoutTop = layoutRect.top + window.scrollY;
      const layoutBottom = layoutTop + layout.offsetHeight;
      const navBaseTop = layoutTop + nav.offsetTop;
      const navHeight = nav.offsetHeight;
      const shouldFix =
        window.scrollY + topOffset >= navBaseTop &&
        window.scrollY + topOffset + navHeight < layoutBottom;
      const shouldBottom = window.scrollY + topOffset + navHeight >= layoutBottom;
      const nextState: NavState = shouldBottom
        ? 'bottom'
        : shouldFix
          ? 'fixed'
          : 'default';

      setNavState((currentState) =>
        currentState === nextState ? currentState : nextState,
      );
    };

    const requestUpdate = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(updateNavPosition);
    };

    updateNavPosition();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
    };
  }, []);

  return (
    <section className={styles.privateBathSection} id="private-bath">
      <div className={styles.privateHeader}>
        <h2>
          <span className="sr-only">貸切り温泉</span>
          <Image
            src="/images/onsen/kasikiri.svg"
            width={32}
            height={172}
            alt=""
            aria-hidden="true"
          />
        </h2>
        <div className={styles.privateLead}>
          <p>趣の異なる11の貸切湯で、心ゆくまで湯めぐり。</p>
          <p>
            <span>
              大きな湯舟も、小さな湯舟も、それぞれに心地よい時間があります。
            </span>
            <span>
              ふもと旅館では、限りある温泉の恵みを大切にしたいという想いから、無理に湯舟を大きくしたり、加水や循環を行ったりすることはありません。
            </span>
            <span>
              源泉100%かけ流しだからこそ出会える、自然そのままのやわらかな湯。ここでしか味わえない贅沢な湯浴みを、心ゆくまでお愉しみください。
            </span>
          </p>
        </div>
      </div>
      <div className={styles.privateBathLayout} ref={layoutRef}>
        <nav className={styles.privateBathNav} aria-label="貸切湯一覧">
          <div
            className={`${styles.privateBathNavInner} ${
              styles[`is-${navState}`]
            }`}
            ref={navRef}
          >
            {privateBaths.map((bath) => (
              <ScrollLink href={`#private-bath-${bath.id}`} key={bath.id}>
                <Image
                  src={bath.image.src}
                  width={bath.image.width}
                  height={bath.image.height}
                  alt=""
                  aria-hidden="true"
                />
                <div className={styles.textBox}>
                  <span className={styles.roomType}>{bath.roomType}</span>
                  <span className={styles.roomName}>{bath.roomName}</span>
                  <i className={styles.button} />
                </div>
              </ScrollLink>
            ))}
          </div>
        </nav>
        <div className={styles.privateBathList}>
          {privateBaths.map((bath, index) => (
            <article
              className={styles.privateBathItem}
              id={`private-bath-${bath.id}`}
              key={bath.title}
            >
              <div className={styles.bathImage}>
                <Image
                  src={bath.image.src}
                  width={bath.image.width}
                  height={bath.image.height}
                  alt={bath.image.alt}
                  priority={index === 0}
                />
                <h3>
                  <span className="sr-only">{bath.title}</span>
                  <Image
                    src={bath.label.src}
                    width={bath.label.width}
                    height={bath.label.height}
                    alt=""
                    aria-hidden="true"
                  />
                </h3>
              </div>
              <p>
                <TextLines lines={bath.body} />
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

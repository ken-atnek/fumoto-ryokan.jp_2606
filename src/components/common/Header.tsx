/* =======================================
 * ふもと旅館 Header
 * URL: /src/components/common/Header.tsx
 * Referenced in: /src/app/layout.tsx
 * Created: 2026-06-09
 * Last updated: 2026-08-11
 * ======================================= */

'use client';

import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import styles from './Header.module.scss';
import ScrollLink from '@/components/common/ScrollLink';
import Image from 'next/image';
import { commonNavItems } from '@/data/commonNavItems';
import ExternalLink from '@/components/common/ExternalLink';
export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const menuId = 'global-header-menu';
  const pageType = pathname === '/' ? 'top' : 'sub';
  const LogoWrapper = pageType === 'top' ? 'h1' : 'div';

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const onToggle = () => {
    setIsOpen((current) => !current);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        isOpen &&
        navRef.current &&
        buttonRef.current &&
        !navRef.current.contains(target) &&
        !buttonRef.current.contains(target)
      ) {
        onClose();
      }
    };
    document.addEventListener('click', handleOutsideClick, true);
    return () =>
      document.removeEventListener('click', handleOutsideClick, true);
  }, [isOpen, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header className={styles.header} data-page-type={pageType}>
      <article>
        <LogoWrapper className={styles.itemLogo}>
          <Image
            src="/images/common/logo-bk.webp"
            width={578}
            height={215}
            alt="ふもと旅館のロゴ"
            priority
          />
        </LogoWrapper>
        <div
          id={menuId}
          ref={navRef}
          className={clsx(styles.boxMenu, isOpen && styles['is-open'])}
        >
          <div className={styles.contactBlock} onClick={onClose}>
            <ScrollLink href="/reservation/" className={styles.itemLink}>
              <span>ご予約はこちら</span>
            </ScrollLink>

            <p className={styles.reception}>お電話受付時間 / 9:00〜21:00</p>

            <div className={styles.contactLinks}>
              <ExternalLink href="tel:0967440918">お電話</ExternalLink>
              <ExternalLink href="mailto:info@fumotoryokan.com">
                メール
              </ExternalLink>
            </div>
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
          <nav aria-label="ナビゲーション" onClick={onClose}>
            {commonNavItems.map((item) => (
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
        </div>
      </article>
      <button
        type="button"
        ref={buttonRef}
        className={clsx(styles.hamburgerButton, isOpen && styles['is-open'])}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={menuId}
        aria-label="メニューを開閉"
      >
        <Image
          src="/images/common/hamburger-open.webp"
          alt=""
          className={styles.isOpen}
          width={64}
          height={50}
        />
        <Image
          src="/images/common/hamburger-close.webp"
          alt=""
          className={styles.isClose}
          width={71}
          height={73}
        />
      </button>
    </header>
  );
}

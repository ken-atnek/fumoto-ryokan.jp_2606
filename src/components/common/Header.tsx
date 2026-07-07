/* =======================================
 * ふもと旅館 Header
 * URL: /src/components/common/Header.tsx
 * Referenced in: /src/app/layout.tsx
 * Created: 2026-06-09
 * Last updated: 2026-06-30
 * ======================================= */

'use client';

import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import styles from './Header.module.scss';
import ScrollLink from '@/components/common/ScrollLink';
import Image from 'next/image';
import { commonNavItems } from '@/data/commonNavItems';

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
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
          />
        </LogoWrapper>
        <nav aria-label="フッターナビゲーション">
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
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}

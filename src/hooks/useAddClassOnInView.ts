/* =======================================
 * ふもと旅館 スクロール到達時クラス付与フック
 * URL: /src/hooks/useAddClassOnInView.ts
 * Referenced in: /src/components/history/HistoryContent.tsx
 * Created: 2026-08-09
 * Last updated: 2026-08-09
 * ======================================= */

import { useCallback, useRef } from 'react';

type Options = {
  threshold?: number;
  once?: boolean;
};

export default function useAddClassOnInView<T extends HTMLElement>(
  className: string,
  defaultOptions: Options = {}
) {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const { threshold = 0.1, once = true } = defaultOptions;

  const ref = useCallback(
    (el: T | null) => {
      observerRef.current?.disconnect();
      if (!el) return;

      observerRef.current = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            requestAnimationFrame(() => el.classList.add(className));
            if (once) {
              observerRef.current?.disconnect();
            }
            return;
          }

          if (!once) {
            requestAnimationFrame(() => el.classList.remove(className));
          }
        },
        { threshold }
      );

      observerRef.current.observe(el);
    },
    [className, once, threshold]
  );

  return ref;
}

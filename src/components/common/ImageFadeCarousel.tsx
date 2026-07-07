/* =======================================
 * ふもと旅館 画像フェードカルーセル
 * URL: /src/components/common/ImageFadeCarousel.tsx
 * Referenced in: /src/components/top/TopRooms.tsx
 * Created: 2026-07-02
 * Last updated: 2026-07-02
 * ======================================= */

'use client';

import Image from 'next/image';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import styles from './ImageFadeCarousel.module.scss';

type BaseProps = {
  /** 画像の代替テキスト */
  alt: string;
  /** 画像の元幅 */
  width: number;
  /** 画像の元高さ */
  height: number;
  /** 表示枠として使いたいアスペクト比。未指定時は width / height を使う */
  aspectRatio?: string;
  /** 初期表示したい画像のインデックス */
  startIndex?: number;
  /** 初回ループ開始までの待機時間。boxごとの開始タイミングをずらしたい時に使う */
  delayMs?: number;
  /** 次の画像へ切り替えるまでの間隔 */
  intervalMs?: number;
  /** クロスフェードにかける時間 */
  fadeDurationMs?: number;
  /** true のときは順送りではなくランダムに次画像を選ぶ */
  isRandom?: boolean;
  /** 呼び出し側で追加クラスを渡したい時に使う */
  className?: string;
};

type SingleImageProps = BaseProps & {
  /** 1枚だけ表示したい時の画像パス */
  src: string;
  images?: never;
};

type MultipleImagesProps = BaseProps & {
  /** 複数画像をクロスフェードで表示したい時の画像パス一覧 */
  images: readonly string[];
  src?: never;
};

type Props = SingleImageProps | MultipleImagesProps;

export default function ImageFadeCarousel({
  src,
  images,
  alt,
  width,
  height,
  aspectRatio,
  startIndex = 0,
  delayMs = 0,
  intervalMs = 5000,
  fadeDurationMs = 1400,
  isRandom = false,
  className,
}: Props) {
  const imageSources = images ?? [src];
  const normalizedStartIndex =
    imageSources.length > 0
      ? ((startIndex % imageSources.length) + imageSources.length) %
        imageSources.length
      : 0;
  const [currentIndex, setCurrentIndex] = useState(normalizedStartIndex);

  useEffect(() => {
    setCurrentIndex(normalizedStartIndex);
  }, [normalizedStartIndex]);

  useEffect(() => {
    if (imageSources.length <= 1) return;

    let intervalId: number | null = null;
    const timeoutId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        setCurrentIndex((current) => {
          if (!isRandom) {
            return (current + 1) % imageSources.length;
          }

          let nextIndex = current;
          while (nextIndex === current) {
            nextIndex = Math.floor(Math.random() * imageSources.length);
          }
          return nextIndex;
        });
      }, intervalMs);
    }, delayMs);

    return () => {
      window.clearTimeout(timeoutId);
      if (intervalId !== null) window.clearInterval(intervalId);
    };
  }, [delayMs, imageSources.length, intervalMs, isRandom]);

  return (
    <div
      className={clsx(styles.imageFadeCarousel, className)}
      style={{
        ['--fade-duration' as string]: `${fadeDurationMs}ms`,
        ['--image-aspect-ratio' as string]: aspectRatio ?? `${width} / ${height}`,
      }}
    >
      {imageSources.map((imageSrc, index) => (
        <Image
          key={imageSrc}
          src={imageSrc}
          alt={alt}
          width={width}
          height={height}
          className={clsx(
            styles.itemImage,
            index === currentIndex && styles['is-active']
          )}
        />
      ))}
    </div>
  );
}

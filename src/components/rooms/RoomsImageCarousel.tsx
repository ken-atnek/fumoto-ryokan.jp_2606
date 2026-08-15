/* =======================================
 * ふもと旅館 お部屋ページ 画像スライド
 * URL: /src/components/rooms/RoomsImageCarousel.tsx
 * Referenced in: /src/components/rooms/RoomsContent.tsx
 * Created: 2026-08-15
 * Last updated: 2026-08-15
 * ======================================= */

'use client';

import Image from 'next/image';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import type { RoomImage } from './roomsContentData';
import styles from './RoomsImageCarousel.module.scss';

type Props = {
  label: string;
  images: readonly RoomImage[];
  priority?: boolean;
};

export default function RoomsImageCarousel({
  label,
  images,
  priority = false,
}: Props) {
  if (images.length === 1) {
    const image = images[0];

    return (
      <div className={styles.staticImage}>
        <Image
          src={image.src}
          width={image.width}
          height={image.height}
          alt={image.alt}
          priority={priority}
        />
      </div>
    );
  }

  return (
    <div className={styles.carousel}>
      <Splide
        aria-label={label}
        options={{
          type: 'loop',
          autoWidth: true,
          gap: '1.2rem',
          arrows: false,
          pagination: true,
          drag: true,
          speed: 900,
        }}
      >
        {images.map((image, index) => (
          <SplideSlide key={image.src} className={styles.slideItem}>
            <Image
              src={image.src}
              width={image.width}
              height={image.height}
              alt={image.alt}
              priority={priority && index === 0}
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

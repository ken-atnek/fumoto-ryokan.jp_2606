/* =======================================
 * ふもと旅館 TOP 客室セクション
 * URL: /src/components/top/TopRooms.tsx
 * Referenced in: /src/app/page.tsx
 * Created: 2026-07-02
 * Last updated: 2026-08-15
 * ======================================= */

import Image from 'next/image';
import styles from './TopRooms.module.scss';
import ScrollLink from '@/components/common/ScrollLink';
import ImageFadeCarousel from '@/components/common/ImageFadeCarousel';

const roomType01Images = [
  '/images/top/room-type01/room01.webp',
  '/images/top/room-type01/room02.webp',
  '/images/top/room-type01/room03.webp',
  '/images/top/room-type01/room04.webp',
] as const;

const roomType02Images = [
  '/images/top/room-type02/room01.webp',
  '/images/top/room-type02/room02.webp',
  '/images/top/room-type02/room03.webp',
] as const;

const roomType03Images = [
  '/images/top/room-type03/room01.webp',
  '/images/top/room-type03/room02.webp',
  '/images/top/room-type03/room03.webp',
  '/images/top/room-type03/room04.webp',
] as const;

export default function TopRooms() {
  return (
    <section className={styles.containerTopRooms}>
      <div className={styles.blockLeftImages}>
        <div className={styles.boxTopImages}>
          <span className={styles.title}>別館 麓庵 露天風呂付き和洋室</span>
          <ImageFadeCarousel
            images={roomType01Images}
            alt="別館 麓庵 露天風呂付き和洋室"
            width={979}
            height={612}
            intervalMs={5800}
            fadeDurationMs={2000}
          />
        </div>
        <div className={styles.boxBottomImages}>
          <span className={styles.title}>別館 麓庵 露天風呂付き和洋室</span>
          <ImageFadeCarousel
            images={roomType02Images}
            alt="別館 麓庵 露天風呂付き和洋室"
            width={979}
            height={612}
            delayMs={1700}
            intervalMs={5800}
            fadeDurationMs={2000}
          />
        </div>
      </div>
      <article>
        <h2>
          <Image
            src="/images/top/illust-yado.webp"
            alt="宿"
            width={648}
            height={690}
          />
        </h2>
        <p>
          ふもと旅館のお部屋は、全部で14室。
          <br />
          本館の趣ある和室、別館「麓庵」の和洋室と洋室（ツイン）の、3つのタイプをご用意しております。
          <br />
          昔ながらの木造建築が残る本館では、どこか懐かしく落ち着いたひとときを。別館「麓庵」では、源泉かけ流しのお風呂を備えた客室で、ゆったりと贅沢な湯浴みをお愉しみいただけます。
          <br />
          それぞれ異なる趣の中で、心ほどける時間をお過ごしください。
        </p>
        <ScrollLink href="/rooms/" className={styles.itemLink}>
          <span>客室</span>
        </ScrollLink>
        <div className={styles.boxRightImages}>
          <span className={styles.title}>本館 和室</span>
          <ImageFadeCarousel
            images={roomType03Images}
            alt="本館 和室"
            width={979}
            height={551}
            delayMs={3200}
            intervalMs={5800}
            fadeDurationMs={2000}
          />
        </div>
      </article>
    </section>
  );
}

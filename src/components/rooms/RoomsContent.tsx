/* =======================================
 * ふもと旅館 お部屋ページ コンテンツ
 * URL: /src/components/rooms/RoomsContent.tsx
 * Referenced in: /src/app/rooms/page.tsx
 * Created: 2026-08-15
 * Last updated: 2026-08-15
 * ======================================= */

import Image from 'next/image';
import clsx from 'clsx';
import ExternalLink from '@/components/common/ExternalLink';
import { roomSections } from './roomsContentData';
import RoomsImageCarousel from './RoomsImageCarousel';
import styles from './RoomsContent.module.scss';

function TextLines({ lines }: { lines: readonly string[] }) {
  return (
    <>
      {lines.map((line, index) => (
        <span key={`${line}-${index}`}>{line}</span>
      ))}
    </>
  );
}

function ReservationLink({
  roomTitle,
  linkText,
  linkUrl,
}: {
  roomTitle: string;
  linkText: string;
  linkUrl: string;
}) {
  return (
    <ExternalLink
      href={linkUrl}
      className={styles.roomLink}
      aria-label={`${roomTitle}の予約ページを開く`}
    >
      <span>{linkText}</span>
    </ExternalLink>
  );
}

export default function RoomsContent() {
  return (
    <>
      <section className={styles.hero}>
        <h1>
          <span className="sr-only">客室</span>
          <Image
            src="/images/rooms/title.svg"
            width={78}
            height={164}
            alt=""
            aria-hidden="true"
            priority
          />
        </h1>
      </section>

      {roomSections.map((section) => (
        <section
          className={clsx(styles.roomSection, styles[section.id])}
          key={section.id}
        >
          <div className={styles.sectionLead}>
            <h2>
              <span className="sr-only">{section.title}</span>
              <Image
                src={section.label.src}
                width={section.label.width}
                height={section.label.height}
                alt=""
                aria-hidden="true"
              />
            </h2>
            <div className={styles.leadText}>
              <p>{section.lead}</p>
              <p>
                <TextLines lines={section.body} />
              </p>
            </div>
          </div>

          <div className={styles.roomList}>
            {section.rooms.map((room, index) => (
              <article
                className={clsx(
                  styles.roomItem,
                  index % 2 === 1 && styles.reverse,
                )}
                key={room.title}
              >
                <div className={styles.roomText}>
                  <p className={styles.roomNumber}>{room.number}</p>
                  <h3>{room.title}</h3>
                  {room.roomName && (
                    <p className={styles.roomName}>{room.roomName}</p>
                  )}
                  <p className={styles.roomBody}>
                    <TextLines lines={room.body} />
                  </p>
                  <ReservationLink
                    roomTitle={room.title}
                    linkText={room.linkText}
                    linkUrl={room.linkUrl}
                  />
                  {room.note && <p className={styles.roomNote}>{room.note}</p>}
                </div>
                <div className={styles.roomImage}>
                  <RoomsImageCarousel
                    label={`${room.title}の写真`}
                    images={room.images}
                    priority={section.id === 'honkan' && index === 0}
                  />
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}

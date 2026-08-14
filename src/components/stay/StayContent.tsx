/* =======================================
 * ふもと旅館 過ごし方ページ コンテンツ
 * URL: /src/components/stay/StayContent.tsx
 * Referenced in: /src/app/stay/page.tsx
 * Created: 2026-08-14
 * Last updated: 2026-08-14
 * ======================================= */
'use client';
import Image from 'next/image';
import useAddClassOnInView from '@/hooks/useAddClassOnInView';
import styles from './StayContent.module.scss';
import {
  breakfast,
  checkIn,
  checkout,
  dinner,
  firstBranch,
  morningBranch,
  nightBranch,
  rest,
  yukata,
  type StayCard,
  type TimeInfo,
} from './stayContentData';

function TextLines({ lines }: { lines: readonly string[] }) {
  return (
    <>
      {lines.map((line, index) => (
        <span key={`${line}-${index}`}>{line}</span>
      ))}
    </>
  );
}

function NoteLine({ line }: { line: string }) {
  const parts = line.split('30');

  if (parts.length === 1) {
    return <span>{line}</span>;
  }

  return (
    <span>
      {parts.map((part, index) => (
        <span key={`${part}-${index}`}>
          {index > 0 && <b className={styles.combineText}>30</b>}
          {part}
        </span>
      ))}
    </span>
  );
}

function TimeBlock({ time }: { time: TimeInfo }) {
  return (
    <div className={styles.timeBlock}>
      <Image
        src={time.clock}
        width={68}
        height={66}
        alt=""
        aria-hidden="true"
      />
      <span>
        {time.label.split('\n').map((line) => (
          <b key={line}>{line}</b>
        ))}
      </span>
      {time.note && (
        <small>
          {time.note.map((line) => (
            <NoteLine line={line} key={line} />
          ))}
        </small>
      )}
    </div>
  );
}

function ChoiceLabels({ labels }: { labels: readonly string[] }) {
  return (
    <div className={styles.choiceLabels} aria-hidden="true">
      {labels.map((label) => (
        <span key={label}>{label}</span>
      ))}
    </div>
  );
}

function Card({ item }: { item: StayCard }) {
  return (
    <article className={styles.card}>
      <div className={styles.textBlock}>
        <h2>{item.title}</h2>
        <p>
          <TextLines lines={item.body} />
        </p>
      </div>
      {item.image && (
        <Image
          src={item.image.src}
          width={item.image.width}
          height={item.image.height}
          alt={item.image.alt}
          className={styles.cardImage}
        />
      )}
      {item.placeholder && (
        <div className={styles.placeholder} aria-hidden="true" />
      )}
      {item.time && <TimeBlock time={item.time} />}
    </article>
  );
}

function StayInnerBlock({ children }: { children: React.ReactNode }) {
  const locusRef = useAddClassOnInView<HTMLElement>(styles.isActive, {
    threshold: 0.45,
  });

  return (
    <article className={styles.innerBlock} ref={locusRef}>
      {children}
    </article>
  );
}

export default function StayContent() {
  return (
    <div className={styles.stayContent}>
      <section className={styles.pageTitleBlock}>
        <h1 className={styles.pageTitle}>
          <span className="sr-only">過ごし方</span>
          <Image
            src="/images/stay/title.svg"
            width={77}
            height={367}
            alt=""
            aria-hidden="true"
            className={styles.titleImage}
            priority
          />
        </h1>
      </section>

      <section className={styles.checkInBlock}>
        <StayInnerBlock>
          <div className={styles.textBlock}>
            <h2>{checkIn.title}</h2>
            <p>
              <TextLines lines={checkIn.body} />
            </p>
          </div>
          <div className={styles.checkInImages}>
            <Image
              src={checkIn.image.src}
              width={checkIn.image.width}
              height={checkIn.image.height}
              alt={checkIn.image.alt}
              priority
            />
            <Image
              src={checkIn.subImage.src}
              width={checkIn.subImage.width}
              height={checkIn.subImage.height}
              alt={checkIn.subImage.alt}
            />
          </div>
          <TimeBlock time={checkIn.time} />
        </StayInnerBlock>
      </section>

      <section className={styles.yukataBlock}>
        <StayInnerBlock>
          <div className={styles.yukataBody}>
            <div className={styles.textBlock}>
              <h2>{yukata.title}</h2>
              <p>
                <TextLines lines={yukata.body} />
              </p>
            </div>
            <Image
              src={yukata.image.src}
              width={yukata.image.width}
              height={yukata.image.height}
              alt={yukata.image.alt}
              className={styles.wideImage}
            />
          </div>
        </StayInnerBlock>
      </section>

      <section className={styles.branchBlock}>
        <StayInnerBlock>
          <ChoiceLabels labels={['湯めぐり？', '散策？']} />
          {firstBranch.map((item) => (
            <Card item={item} key={item.title} />
          ))}
        </StayInnerBlock>
      </section>

      <section className={styles.dinnerBlock}>
        <StayInnerBlock>
          <div className={styles.blankBox} aria-hidden="true"></div>
          <div className={styles.centerInner}>
            <div className={styles.textBlock}>
              <h2>{dinner.title}</h2>
              <p>
                <TextLines lines={dinner.body} />
              </p>
            </div>
            <Image
              src={dinner.image.src}
              width={dinner.image.width}
              height={dinner.image.height}
              alt={dinner.image.alt}
              className={styles.wideImage}
            />
          </div>
          <TimeBlock time={dinner.time} />
        </StayInnerBlock>
      </section>

      <section className={styles.nightBlock}>
        <StayInnerBlock>
          <ChoiceLabels labels={['湯めぐり？', 'お買い物？']} />
          {nightBranch.map((item) => (
            <Card item={item} key={item.title} />
          ))}
        </StayInnerBlock>
      </section>

      <section className={styles.restBlock}>
        <StayInnerBlock>
          <div className={styles.textBlock}>
            <h2>{rest.title}</h2>
            <p>
              <TextLines lines={rest.body} />
            </p>
          </div>
          <div className={styles.restImages}>
            <Image
              src={rest.image.src}
              width={rest.image.width}
              height={rest.image.height}
              alt={rest.image.alt}
            />
            <div className={styles.restSub}>
              <p>
                <TextLines lines={rest.subText} />
              </p>
              <Image
                src={rest.subImage.src}
                width={rest.subImage.width}
                height={rest.subImage.height}
                alt={rest.subImage.alt}
              />
            </div>
          </div>
        </StayInnerBlock>
      </section>

      <section className={styles.morningBlock}>
        <StayInnerBlock>
          <ChoiceLabels labels={['湯めぐり？', '朝カフェ？']} />
          {morningBranch.map((item) => (
            <Card item={item} key={item.title} />
          ))}
        </StayInnerBlock>
      </section>

      <section className={styles.breakfastBlock}>
        <StayInnerBlock>
          <div className={styles.centerInner}>
            <div className={styles.textBlock}>
              <h2>{breakfast.title}</h2>
              <p>
                <TextLines lines={breakfast.body} />
              </p>
            </div>
            <Image
              src={breakfast.image.src}
              width={breakfast.image.width}
              height={breakfast.image.height}
              alt={breakfast.image.alt}
              className={styles.wideImage}
            />
          </div>
          <TimeBlock time={breakfast.time} />
        </StayInnerBlock>
      </section>

      <section className={styles.checkoutBlock}>
        <StayInnerBlock>
          <TimeBlock time={checkout.time} />
          <div className={styles.checkoutInner}>
            <div className={styles.textBlock}>
              <h2>{checkout.title}</h2>
              <p>
                <TextLines lines={checkout.body} />
              </p>
            </div>
            <Image
              src={checkout.image.src}
              width={checkout.image.width}
              height={checkout.image.height}
              alt={checkout.image.alt}
              className={styles.wideImage}
            />
          </div>
        </StayInnerBlock>
      </section>
    </div>
  );
}

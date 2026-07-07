/* =======================================
 * ふもと旅館 TOP 温泉グリッドカルーセル
 * URL: /src/components/top/TopOnsenBathGrid.tsx
 * Referenced in: /src/components/top/TopOnsen.tsx
 * Created: 2026-07-07
 * Last updated: 2026-07-07
 * ======================================= */

'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import styles from './TopOnsenBathGrid.module.scss';

type SlotState = {
  currentIndex: number;
  previousIndex: number | null;
};

type Props = {
  images: readonly string[];
  altPrefix: string;
  width: number;
  height: number;
  aspectRatio?: string;
  slotCount?: number;
  slotDelayStepMs?: number;
  pairDelayMs?: number;
  intervalMs?: number;
  fadeDurationMs?: number;
  className?: string;
};

function createInitialSlots(imageCount: number, slotCount: number): SlotState[] {
  return Array.from({ length: slotCount }, (_, index) => ({
    currentIndex: imageCount > 0 ? index % imageCount : 0,
    previousIndex: null,
  }));
}

function pickNextIndex(
  slots: SlotState[],
  slotIndex: number,
  imageCount: number
): number {
  const currentIndex = slots[slotIndex]?.currentIndex ?? 0;
  const usedByOthers = new Set(
    slots
      .filter((_, index) => index !== slotIndex)
      .map((slot) => slot.currentIndex)
  );
  const availableIndices = Array.from({ length: imageCount }, (_, index) => index)
    .filter((index) => index !== currentIndex)
    .filter((index) => !usedByOthers.has(index));

  if (availableIndices.length > 0) {
    return availableIndices[Math.floor(Math.random() * availableIndices.length)];
  }

  const fallbackIndices = Array.from({ length: imageCount }, (_, index) => index).filter(
    (index) => index !== currentIndex
  );

  if (fallbackIndices.length > 0) {
    return fallbackIndices[Math.floor(Math.random() * fallbackIndices.length)];
  }

  return currentIndex;
}

export default function TopOnsenBathGrid({
  images,
  altPrefix,
  width,
  height,
  aspectRatio = '30 / 35',
  slotCount = 6,
  slotDelayStepMs = 900,
  pairDelayMs = 900,
  intervalMs = 5200,
  fadeDurationMs = 1600,
  className,
}: Props) {
  const normalizedSlotCount = Math.max(1, slotCount);
  const [slots, setSlots] = useState<SlotState[]>(() =>
    createInitialSlots(images.length, normalizedSlotCount)
  );
  const fadeTimeoutIdsRef = useRef<number[]>([]);
  const lastSwitchedSlotRef = useRef<number | null>(null);
  const pairTimeoutIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (images.length <= 1) return;

    let loopTimeoutId: number | null = null;

    const clearFadeTimeout = (slotIndex: number) => {
      const timeoutId = fadeTimeoutIdsRef.current[slotIndex];
      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId);
      }
    };

    const scheduleFadeCleanup = (slotIndex: number) => {
      clearFadeTimeout(slotIndex);
      fadeTimeoutIdsRef.current[slotIndex] = window.setTimeout(() => {
        setSlots((currentSlots) =>
          currentSlots.map((slot, index) =>
            index === slotIndex ? { ...slot, previousIndex: null } : slot
          )
        );
      }, fadeDurationMs);
    };

    const pickNextSlotIndex = (excludedSlotIndices: number[] = []) => {
      const availableSlotIndices = Array.from(
        { length: normalizedSlotCount },
        (_, index) => index
      )
        .filter((index) => index !== lastSwitchedSlotRef.current)
        .filter((index) => !excludedSlotIndices.includes(index));

      const fallbackSlotIndices = Array.from(
        { length: normalizedSlotCount },
        (_, index) => index
      ).filter((index) => !excludedSlotIndices.includes(index));

      if (availableSlotIndices.length === 0) {
        return fallbackSlotIndices[0] ?? 0;
      }

      return availableSlotIndices[
        Math.floor(Math.random() * availableSlotIndices.length)
      ];
    };

    const switchSlotImage = (slotIndex: number) => {
      setSlots((currentSlots) => {
        const nextIndex = pickNextIndex(currentSlots, slotIndex, images.length);
        return currentSlots.map((slot, index) =>
          index === slotIndex
            ? {
                currentIndex: nextIndex,
                previousIndex: slot.currentIndex,
              }
            : slot
        );
      });
      lastSwitchedSlotRef.current = slotIndex;
      scheduleFadeCleanup(slotIndex);
    };

    const runSwitchPair = () => {
      const firstSlotIndex = pickNextSlotIndex();
      switchSlotImage(firstSlotIndex);

      if (normalizedSlotCount <= 1) return;

      pairTimeoutIdRef.current = window.setTimeout(() => {
        const secondSlotIndex = pickNextSlotIndex([firstSlotIndex]);
        switchSlotImage(secondSlotIndex);
      }, pairDelayMs);
    };

    const queueNextSwitch = (delayMs: number) => {
      loopTimeoutId = window.setTimeout(() => {
        runSwitchPair();
        queueNextSwitch(intervalMs);
      }, delayMs);
    };

    queueNextSwitch(slotDelayStepMs);

    return () => {
      if (loopTimeoutId !== null) {
        window.clearTimeout(loopTimeoutId);
      }
      if (pairTimeoutIdRef.current !== null) {
        window.clearTimeout(pairTimeoutIdRef.current);
      }
      fadeTimeoutIdsRef.current.forEach((timeoutId) => window.clearTimeout(timeoutId));
      fadeTimeoutIdsRef.current = [];
      lastSwitchedSlotRef.current = null;
      pairTimeoutIdRef.current = null;
    };
  }, [
    fadeDurationMs,
    images.length,
    intervalMs,
    normalizedSlotCount,
    pairDelayMs,
    slotDelayStepMs,
  ]);

  return (
    <div className={clsx(styles.topOnsenBathGrid, className)}>
      {slots.map((slot, index) => {
        const currentSrc = images[slot.currentIndex];
        const previousSrc =
          slot.previousIndex !== null ? images[slot.previousIndex] : null;

        return (
          <div
            key={`bath-slot-${index}`}
            className={styles.itemImage}
            style={{
              ['--image-aspect-ratio' as string]: aspectRatio,
              ['--fade-duration' as string]: `${fadeDurationMs}ms`,
            }}
          >
            {previousSrc ? (
              <Image
                src={previousSrc}
                alt={`${altPrefix} ${index + 1}`}
                width={width}
                height={height}
                className={styles.itemImagePrevious}
              />
            ) : null}
            {currentSrc ? (
              <Image
                key={currentSrc}
                src={currentSrc}
                alt={`${altPrefix} ${index + 1}`}
                width={width}
                height={height}
                className={clsx(
                  styles.itemImageCurrent,
                  slot.previousIndex !== null && styles['is-fading-in']
                )}
              />
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

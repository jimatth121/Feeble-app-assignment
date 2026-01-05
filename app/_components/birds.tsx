"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";

type BirdMiniIntroProps = {
  className?: string;
  sizePx: number;
};

type FlightBirdProps = {
  className?: string;
  src: string;
  width: number;
  height: number;
  sizes: string;
  durationMs?: number;
  delayMs?: number;
  origin?: "center" | "bottom" | "viewport";
  originPaddingPx?: number;
  originX?: number;
  originY?: number;
  lockX?: boolean;
};

export function FlightBird({
  className,
  src,
  width,
  height,
  sizes,
  durationMs = 1200,
  delayMs = 0,
  origin = "center",
  originPaddingPx = 80,
  originX,
  originY,
  lockX = false,
}: FlightBirdProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isIn, setIsIn] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [from, setFrom] = useState<{ x: number; y: number } | null>(null);

  useLayoutEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const elementCenterX = rect.left + rect.width / 2;
    const elementCenterY = rect.top + rect.height / 2;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    if (origin === "viewport") {
      const x = typeof originX === "number" ? originX : 0.5;
      const y = typeof originY === "number" ? originY : 0.5;
      setFrom({
        x: lockX ? 0 : viewportWidth * x - elementCenterX,
        y: viewportHeight * y - elementCenterY,
      });
      setIsReady(true);
      return;
    }

    if (origin === "bottom") {
      setFrom({
        x: 0,
        y: viewportHeight + originPaddingPx - elementCenterY,
      });
      setIsReady(true);
      return;
    }

    setFrom({
      x: lockX ? 0 : viewportWidth / 2 - elementCenterX,
      y: viewportHeight / 2 - elementCenterY,
    });
    setIsReady(true);
  }, [delayMs, lockX, origin, originPaddingPx, originX, originY]);

  useEffect(() => {
    if (!from || !isReady) return;
    const start = window.setTimeout(() => {
      window.requestAnimationFrame(() => setIsIn(true));
    }, delayMs);
    return () => window.clearTimeout(start);
  }, [delayMs, from, isReady]);

  const style = useMemo(() => {
    if (!from) return undefined;
    return {
      ["--from-x" as never]: `${from.x}px`,
      ["--from-y" as never]: `${from.y}px`,
      ["--flight-ms" as never]: `${durationMs}ms`,
    } as React.CSSProperties;
  }, [durationMs, from]);

  return (
    <div
      ref={containerRef}
      className={[
        className,
        "flight-bird",
        isReady ? "is-ready" : "",
        isIn ? "is-in" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      style={style}
    >
      <Image
        src={src}
        alt=""
        width={width}
        height={height}
        className="h-auto w-full select-none"
        sizes={sizes}
        priority
      />
    </div>
  );
}

export function BirdMiniIntro({ className, sizePx }: BirdMiniIntroProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isIn, setIsIn] = useState(false);
  const [from, setFrom] = useState<{ x: number; y: number } | null>(null);

  useLayoutEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const elementCenterX = rect.left + rect.width / 2;
    const elementCenterY = rect.top + rect.height / 2;
    const viewportCenterX = window.innerWidth / 2;
    const viewportCenterY = window.innerHeight / 2;

    setFrom({
      x: viewportCenterX - elementCenterX,
      y: viewportCenterY - elementCenterY,
    });

    const id = window.requestAnimationFrame(() => setIsIn(true));
    return () => window.cancelAnimationFrame(id);
  }, []);

  const style = useMemo(() => {
    if (!from) return undefined;
    return {
      ["--from-x" as never]: `${from.x}px`,
      ["--from-y" as never]: `${from.y}px`,
    } as React.CSSProperties;
  }, [from]);

  return (
    <div
      ref={containerRef}
      className={[
        className,
        "bird-mini-enter",
        isIn ? "is-in" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      style={style}
    >
      <Image
        src="/images/birdMini.png"
        alt=""
        width={43}
        height={14}
        className="h-auto w-full select-none"
        sizes={`${sizePx}px`}
        priority
      />
    </div>
  );
}

type BirdLargeFlyoutsProps = {
  left: {
    src: string;
    width: number;
    height: number;
    sizes: string;
  };
  right: {
    src: string;
    width: number;
    height: number;
    sizes: string;
  };
};

export function BirdLargeFlyouts({ left, right }: BirdLargeFlyoutsProps) {
  const [doneCount, setDoneCount] = useState(0);
  const isDone = doneCount >= 2;

  if (isDone) return null;

  return (
    <>
      <Image
        src={left.src}
        alt=""
        width={left.width}
        height={left.height}
        className="bird-flyout-left fixed bottom-[10vh] left-0 z-20 hidden h-auto w-[92px] select-none will-change-transform motion-reduce:hidden [--flyout-start:-180px] sm:block sm:w-[118px]"
        sizes={left.sizes}
        onAnimationEnd={() => setDoneCount((c) => c + 1)}
        priority
      />
      <Image
        src={right.src}
        alt=""
        width={right.width}
        height={right.height}
        className="bird-flyout-right fixed bottom-[10vh] right-0 z-20 hidden h-auto w-[92px] select-none will-change-transform motion-reduce:hidden [--flyout-start:180px] sm:block sm:w-[118px]"
        sizes={right.sizes}
        onAnimationEnd={() => setDoneCount((c) => c + 1)}
        priority
      />
    </>
  );
}

"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { usePortfolioMotion } from "@/context/MotionContext";

/** Native-scroll smooth easing; accessible motion settings and anchor navigation. */
export function SmoothScroll() {
  const { reduceMotion } = usePortfolioMotion();
  useEffect(() => {
    if (reduceMotion) return;
    const lenis = new Lenis({
      autoRaf: true,
      anchors: { offset: -80 },
      lerp: 0.09,
      wheelMultiplier: 0.95,
      smoothWheel: true,
      syncTouch: false,
      allowNestedScroll: true,
      respectReducedMotion: true,
    });
    return () => lenis.destroy();
  }, [reduceMotion]);
  return null;
}

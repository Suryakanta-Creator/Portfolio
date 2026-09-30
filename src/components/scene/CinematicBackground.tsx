"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function CinematicBackground() {
  const { scrollYProgress } = useScroll();
  const driftA = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const driftB = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden theme-page" aria-hidden="true">
      <motion.div
        style={{ y: driftA }}
        className="absolute -left-[16vw] top-[-18vh] h-[64vw] w-[64vw] rounded-full bg-[radial-gradient(circle,rgba(114,199,255,0.25),rgba(114,199,255,0)_66%)] blur-3xl"
      />
      <motion.div
        style={{ y: driftB }}
        className="absolute -right-[18vw] top-[28vh] h-[58vw] w-[58vw] rounded-full bg-[radial-gradient(circle,rgba(130,93,255,0.16),rgba(130,93,255,0)_68%)] blur-3xl"
      />
      <div className="soft-grid absolute inset-0 opacity-[0.22]" />
      <div className="grain absolute inset-0 opacity-[0.12]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.08)_55%,transparent)] dark:bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.12)_55%,transparent)]" />
    </div>
  );
}

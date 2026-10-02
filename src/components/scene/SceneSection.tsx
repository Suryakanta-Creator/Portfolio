"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { usePortfolioMotion } from "@/context/MotionContext";

type Accent = "cyan" | "violet" | "emerald" | "amber";

export function SceneSection({
  children,
  accent = "cyan",
  index = 0,
}: {
  children: React.ReactNode;
  accent?: Accent;
  index?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { reduceMotion } = usePortfolioMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 0.5, 1], reduceMotion ? [0, 0, 0] : [70, 0, -70]);
  const haloY = useTransform(scrollYProgress, [0, 1], reduceMotion ? ["0%", "0%"] : ["18%", "-18%"]);

  const halo =
    accent === "violet"
      ? "bg-violet-500/10"
      : accent === "emerald"
      ? "bg-emerald-500/10"
      : accent === "amber"
      ? "bg-amber-500/10"
      : "bg-cyan-500/10";

  return (
    <motion.div ref={ref} style={{ y }} className="relative z-10">
      <motion.div
        style={{ y: haloY }}
        className={`pointer-events-none absolute ${index % 2 === 0 ? "-left-32" : "-right-32"} top-1/3 h-80 w-80 rounded-full blur-[110px] ${halo}`}
        aria-hidden="true"
      />
      {children}
    </motion.div>
  );
}

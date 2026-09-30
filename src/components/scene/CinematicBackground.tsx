"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";

const SpaceCanvas = dynamic(() => import("./SpaceCanvas"), {
  ssr: false,
  loading: () => null,
});

export function CinematicBackground() {
  const { scrollYProgress } = useScroll();
  const farY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const nearY = useTransform(scrollYProgress, [0, 1], ["0%", "-24%"]);
  const glowX = useTransform(scrollYProgress, [0, 0.45, 1], ["4%", "48%", "76%"]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#02050a]" aria-hidden="true">
      <div className="absolute inset-0">
        <SpaceCanvas />
      </div>

      <motion.div
        style={{ y: farY }}
        className="absolute inset-[-12%] bg-[radial-gradient(circle_at_18%_24%,rgba(13,211,238,0.11),transparent_24%),radial-gradient(circle_at_74%_38%,rgba(124,58,237,0.10),transparent_28%)]"
      />

      <motion.div
        style={{ y: nearY }}
        className="absolute -bottom-[24vh] left-[-10vw] h-[54vh] w-[120vw] rotate-[-3deg] bg-[linear-gradient(165deg,transparent_36%,rgba(2,8,16,0.82)_37%,rgba(4,15,28,0.98)_100%)] [clip-path:polygon(0_38%,9%_20%,17%_41%,27%_16%,36%_42%,47%_12%,59%_38%,69%_18%,80%_44%,91%_21%,100%_41%,100%_100%,0_100%)]"
      />

      <motion.div
        style={{ left: glowX }}
        className="absolute top-[58%] h-px w-[28vw] bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent shadow-[0_0_22px_rgba(34,211,238,0.7)]"
      />

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,5,10,0.06),rgba(2,5,10,0.26)_48%,rgba(2,5,10,0.72))]" />
      <div className="space-noise absolute inset-0 opacity-[0.16]" />
      <div className="absolute inset-0 shadow-[inset_0_0_180px_rgba(0,0,0,0.86)]" />
    </div>
  );
}

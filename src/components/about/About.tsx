"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Code2, GraduationCap, Sparkles, Terminal } from "lucide-react";
import { portfolioConfig } from "@/data/portfolio.config";
import { usePortfolioMotion } from "@/context/MotionContext";

export function About() {
  const ref = useRef<HTMLElement>(null);
  const { reduceMotion } = usePortfolioMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const monogramX = useTransform(scrollYProgress, [0.05, 0.55], reduceMotion ? ["0%", "0%"] : ["34%", "-6%"]);
  const monogramRotate = useTransform(scrollYProgress, [0.05, 0.55], reduceMotion ? [0, 0] : [12, -6]);
  const copyY = useTransform(scrollYProgress, [0.1, 0.55], reduceMotion ? [0, 0] : [110, -20]);
  const copyOpacity = useTransform(scrollYProgress, [0.08, 0.28], [0, 1]);

  return (
    <section ref={ref} id="about" className="relative min-h-[135vh] overflow-hidden py-28" aria-label="About Suryakanta Bala">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-12 lg:px-10">
        <motion.div style={{ y: copyY, opacity: copyOpacity }} className="lg:col-span-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-300">
            / 01 / discovery
          </p>
          <h2 className="mt-5 text-5xl font-black uppercase leading-[0.84] tracking-[-0.065em] text-white sm:text-7xl">
            Curious by
            <span className="block text-cyan-300">default.</span>
          </h2>

          <div className="mt-9 max-w-xl space-y-5 text-base leading-7 text-white/60">
            {portfolioConfig.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {[
              { icon: GraduationCap, label: "Learning", value: "B.Tech + hands-on building" },
              { icon: Code2, label: "Focus", value: "Full-stack systems" },
              { icon: Sparkles, label: "Explore", value: "Applied AI + interaction" },
              { icon: Terminal, label: "Method", value: "Ship, inspect, improve" },
            ].map(({ icon: Icon, label, value }, index) => (
              <motion.div
                key={label}
                initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.6 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="border-t border-white/10 py-4"
              >
                <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-white/35">
                  <Icon className="h-3.5 w-3.5 text-cyan-300" />
                  {label}
                </div>
                <p className="mt-2 text-sm font-semibold text-white/75">{value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="relative min-h-[56vh] lg:col-span-6">
          <motion.div
            style={{ x: monogramX, rotate: monogramRotate }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="relative">
              <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[80px]" />
              <div className="select-none text-[46vw] font-black leading-none tracking-[-0.13em] text-transparent [-webkit-text-stroke:1px_rgba(114,245,255,0.22)] sm:text-[32vw] lg:text-[21vw]">
                SB
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 70, y: 50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-0 top-[12%] max-w-[270px] rounded-[1.6rem] border border-white/10 bg-black/35 p-5 backdrop-blur-xl"
          >
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-violet-300">active node</p>
            <p className="mt-3 text-sm leading-6 text-white/65">
              DRIEMS University · Odisha
            </p>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -70, y: -20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-[10%] left-0 max-w-[290px] rounded-[1.6rem] border border-cyan-300/15 bg-[#031018]/65 p-5 backdrop-blur-xl"
          >
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-cyan-300">current signal</p>
            <p className="mt-3 text-sm leading-6 text-white/65">
              {portfolioConfig.personal.status}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight, Github, Sparkles } from "lucide-react";
import { portfolioConfig } from "@/data/portfolio.config";
import { usePortfolioMotion } from "@/context/MotionContext";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { reduceMotion } = usePortfolioMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const titleY = useTransform(scrollYProgress, [0, 0.38], reduceMotion ? [0, 0] : [0, -250]);
  const titleScale = useTransform(scrollYProgress, [0, 0.38], reduceMotion ? [1, 1] : [1, 0.76]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.32, 0.46], [1, 1, 0]);
  const introY = useTransform(scrollYProgress, [0.28, 0.58], reduceMotion ? [0, 0] : [130, 0]);
  const introOpacity = useTransform(scrollYProgress, [0.28, 0.48], [0, 1]);
  const metaOpacity = useTransform(scrollYProgress, [0.46, 0.72], [0, 1]);
  const lineX = useTransform(scrollYProgress, [0, 0.48], reduceMotion ? ["0%", "0%"] : ["-35%", "0%"]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative h-[190vh]"
      aria-label="Introduction and overview"
    >
      <div className="sticky top-0 flex h-screen overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(22,216,241,0.08),transparent_26%)]" />

        <motion.div
          style={{ x: lineX }}
          className="absolute left-0 right-0 top-[18%] h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
        />

        <motion.div
          style={{ y: titleY, scale: titleScale, opacity: titleOpacity }}
          className="absolute inset-x-0 top-[28%] mx-auto flex max-w-[1500px] flex-col items-center px-5 text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.32em] text-cyan-300/80 sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.9)]" />
            Build · Learn · Iterate
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_14px_rgba(167,139,250,0.8)]" />
          </div>

          <h1 className="select-none text-[14vw] font-black uppercase leading-[0.76] tracking-[-0.075em] text-[#f4fbff] sm:text-[11.5vw] lg:text-[9.4vw]">
            <span className="block">Full-Stack</span>
            <span className="block text-transparent [-webkit-text-stroke:1px_rgba(126,249,255,0.75)]">
              Developer
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-white/55 sm:text-base">
            {portfolioConfig.personal.fullName} — building useful software, AI-powered workflows,
            and interactive digital experiences.
          </p>
        </motion.div>

        <motion.div
          style={{ y: introY, opacity: introOpacity }}
          className="absolute bottom-[12vh] left-5 max-w-lg sm:left-10 lg:left-[7vw]"
        >
          <div className="mb-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.24em] text-cyan-300">
            <Sparkles className="h-3.5 w-3.5" />
            System profile
          </div>

          <h2 className="max-w-xl text-3xl font-bold leading-[0.98] tracking-[-0.045em] text-white sm:text-5xl">
            Ideas should feel
            <span className="block text-cyan-300">alive when you use them.</span>
          </h2>

          <p className="mt-5 max-w-md text-sm leading-6 text-white/60">
            {portfolioConfig.personal.shortIntro}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-[#031014] transition hover:scale-[1.03]"
            >
              Explore work
              <ArrowDownRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>

            <a
              href={"https://github.com/" + portfolioConfig.personal.githubUsername}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-5 py-3 text-xs font-semibold text-white/80 backdrop-blur-md transition hover:border-cyan-300/40 hover:text-cyan-200"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </motion.div>

        <motion.div
          style={{ opacity: metaOpacity }}
          className="absolute bottom-8 right-5 hidden max-w-sm text-right sm:right-10 md:block lg:right-[7vw]"
        >
          <p className="font-mono text-[9px] uppercase tracking-[0.28em] text-white/35">
            Current coordinates
          </p>
          <p className="mt-2 text-sm font-semibold text-white/75">
            {portfolioConfig.personal.university}
          </p>
          <p className="mt-1 text-xs text-cyan-300/75">{portfolioConfig.personal.status}</p>
        </motion.div>

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-center">
          <p className="font-mono text-[9px] uppercase tracking-[0.32em] text-white/30">
            Scroll to enter
          </p>
          <div className="mx-auto mt-2 h-9 w-px bg-gradient-to-b from-cyan-300/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}

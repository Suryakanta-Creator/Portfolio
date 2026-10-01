"use client";

import React, { useRef } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Brain,
  FileText,
  Github,
  Orbit,
  Sprout,
  Zap,
} from "lucide-react";
import { portfolioConfig } from "@/data/portfolio.config";
import { usePortfolioMotion } from "@/context/MotionContext";

const MaterialStudio = dynamic(() => import("@/components/scene/SpaceCanvas"), {
  ssr: false,
  loading: () => null,
});

const featuredBuilds = [
  { label: "Krushi Seva", icon: Sprout, tone: "from-emerald-300/65 to-cyan-300/25" },
  { label: "AI Study", icon: Brain, tone: "from-sky-300/65 to-violet-300/25" },
  { label: "PackCheck", icon: Zap, tone: "from-violet-300/65 to-fuchsia-300/25" },
  { label: "Cosmic", icon: Orbit, tone: "from-indigo-300/65 to-cyan-300/25" },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { reduceMotion } = usePortfolioMotion();
  const heroVisible = useInView(ref, { amount: 0.04 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const frameScale = useTransform(scrollYProgress, [0, 0.72], reduceMotion ? [1, 1] : [1, 0.965]);
  const frameY = useTransform(scrollYProgress, [0, 0.72], reduceMotion ? [0, 0] : [0, 52]);
  const copyY = useTransform(scrollYProgress, [0, 0.7], reduceMotion ? [0, 0] : [0, -42]);
  const portraitY = useTransform(scrollYProgress, [0, 0.75], reduceMotion ? [0, 0] : [0, 34]);
  const portraitRotate = useTransform(scrollYProgress, [0, 0.75], reduceMotion ? [0, 0] : [-1, 1.6]);

  return (
    <section ref={ref} id="hero" className="relative h-[145vh] pt-3 sm:pt-4" aria-label="Introduction and about">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden px-3 pt-16 sm:px-5 sm:pt-20">
        <motion.div
          style={{ scale: frameScale, y: frameY }}
          className="relative mx-auto h-[84vh] w-full max-w-[1500px] overflow-hidden rounded-[2rem] border theme-border editorial-shadow sm:rounded-[2.8rem]"
        >
          <div className="absolute inset-0 bg-[linear-gradient(135deg,var(--hero-sky),var(--hero-sky-2))]" />
          <div className="pointer-events-none absolute inset-0 opacity-45 dark:opacity-35">
            <MaterialStudio active={heroVisible} />
          </div>
          <div className="grain pointer-events-none absolute inset-0 opacity-[0.09]" />

          <div className="absolute inset-x-0 top-0 z-30 flex h-12 items-center justify-between border-b border-black/10 px-4 text-[#1b2430]/70 dark:border-white/10 dark:text-white/70 sm:px-6">
            <div className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.16em] sm:text-[9px]">
              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-current/20 font-black">SB</span>
              <span>Suryakanta / Portfolio</span>
            </div>
            <div className="hidden gap-4 font-mono text-[8px] uppercase tracking-[0.14em] md:flex">
              <span>Full-stack</span>
              <span>AI</span>
              <span>Projects</span>
              <span>Open source</span>
            </div>
          </div>

          <motion.div
            style={{ y: copyY }}
            className="absolute left-5 top-[15%] z-30 max-w-[58%] sm:left-10 sm:top-[19%] sm:max-w-xl lg:left-[5.2vw] lg:top-[20%]"
          >
            <p className="font-mono text-[8px] uppercase tracking-[0.22em] text-[#283847]/65 dark:text-white/55 sm:text-[9px]">
              Full-stack developer · AI builder · B.Tech student
            </p>

            <h1 className="balance-text mt-4 text-[12vw] font-semibold leading-[0.86] tracking-[-0.065em] text-[#182029] sm:mt-5 sm:text-[8.5vw] lg:text-[5.5vw] dark:text-white">
              Building useful
              <span className="block">digital products.</span>
            </h1>

            <p className="mt-5 max-w-md text-xs leading-5 text-[#25313d]/72 dark:text-white/65 sm:mt-6 sm:text-base sm:leading-6">
              I&apos;m {portfolioConfig.personal.fullName}, currently pursuing B.Tech at DRIEMS University while building full-stack and AI-powered products.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5 sm:mt-7 sm:gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-[#15202a] px-4 py-2.5 text-[10px] font-semibold text-white transition hover:scale-[1.03] sm:px-5 sm:py-3 sm:text-[11px] dark:bg-white dark:text-[#15161a]"
              >
                Explore projects
                <ArrowDownRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>

              <a
                href="/resume"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#1c2833]/15 bg-white/50 px-4 py-2.5 text-[10px] font-semibold text-[#1a2530] backdrop-blur-md transition hover:bg-white/70 sm:px-5 sm:py-3 sm:text-[11px] dark:border-white/15 dark:bg-black/15 dark:text-white"
              >
                <FileText className="h-4 w-4" />
                View resume
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>

              <a
                href={"https://github.com/" + portfolioConfig.personal.githubUsername}
                target="_blank"
                rel="noreferrer"
                className="hidden items-center gap-2 rounded-full border border-[#1c2833]/15 bg-white/35 px-5 py-3 text-[11px] font-semibold text-[#1a2530] backdrop-blur-md transition hover:bg-white/55 sm:inline-flex dark:border-white/15 dark:bg-black/15 dark:text-white"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
            </div>

            <div className="mt-6 hidden max-w-lg grid-cols-4 gap-2 sm:grid">
              {featuredBuilds.map(({ label, icon: Icon, tone }) => (
                <a
                  key={label}
                  href="#projects"
                  className="group overflow-hidden rounded-xl border border-white/45 bg-white/30 p-2 backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/50 dark:border-white/10 dark:bg-black/15"
                >
                  <div className={`flex h-9 items-center justify-center rounded-lg bg-gradient-to-br ${tone}`}>
                    <Icon className="h-4 w-4 text-[#17222c] dark:text-white" />
                  </div>
                  <p className="mt-2 truncate text-[8px] font-semibold text-[#1e2933] dark:text-white/80">{label}</p>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            style={{ y: portraitY, rotate: portraitRotate }}
            className="absolute bottom-[7%] right-[4%] z-40 h-[48%] w-[40%] min-w-[148px] overflow-hidden rounded-[1.6rem] border border-white/60 bg-white/20 shadow-[0_34px_80px_-36px_rgba(31,43,55,0.45)] sm:h-[64%] sm:w-[35%] sm:min-w-[300px] sm:rounded-[2rem]"
          >
            <Image
              src="/surya-portrait.jpg"
              alt="Portrait of Suryakanta Bala"
              fill
              priority
              unoptimized
              sizes="(min-width: 1024px) 35vw, (min-width: 640px) 38vw, 42vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#182029]/74 via-[#182029]/12 to-transparent px-4 pb-4 pt-14 text-white sm:px-5 sm:pb-5 sm:pt-16">
              <p className="font-mono text-[7px] uppercase tracking-[0.18em] text-white/65 sm:text-[8px]">Currently</p>
              <p className="mt-1 text-[10px] font-medium sm:text-sm">B.Tech · DRIEMS University</p>
            </div>
          </motion.div>

          <div className="absolute bottom-0 left-0 right-0 z-30 flex items-center justify-between border-t border-black/10 px-5 py-3 font-mono text-[7px] uppercase tracking-[0.16em] text-[#25313d]/55 dark:border-white/10 dark:text-white/40 sm:px-7">
            <span>Code · AI · Product engineering</span>
            <span>Scroll to explore ↓</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

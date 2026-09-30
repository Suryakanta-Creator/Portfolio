"use client";

import React, { useRef } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Github } from "lucide-react";
import { portfolioConfig } from "@/data/portfolio.config";
import { usePortfolioMotion } from "@/context/MotionContext";

const MaterialStudio = dynamic(() => import("@/components/scene/SpaceCanvas"), {
  ssr: false,
  loading: () => null,
});

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { reduceMotion } = usePortfolioMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const frameScale = useTransform(scrollYProgress, [0, 0.72], reduceMotion ? [1, 1] : [1, 0.94]);
  const frameY = useTransform(scrollYProgress, [0, 0.72], reduceMotion ? [0, 0] : [0, 80]);
  const copyY = useTransform(scrollYProgress, [0, 0.7], reduceMotion ? [0, 0] : [0, -65]);
  const portraitY = useTransform(scrollYProgress, [0, 0.75], reduceMotion ? [0, 0] : [0, 48]);
  const portraitRotate = useTransform(scrollYProgress, [0, 0.75], reduceMotion ? [0, 0] : [-1.5, 2.5]);
  const noteX = useTransform(scrollYProgress, [0.12, 0.68], reduceMotion ? [0, 0] : [40, -20]);

  return (
    <section ref={ref} id="hero" className="relative h-[155vh] pt-3 sm:pt-4" aria-label="Introduction and about">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden px-3 pt-16 sm:px-5 sm:pt-20">
        <motion.div
          style={{ scale: frameScale, y: frameY }}
          className="relative mx-auto h-[84vh] w-full max-w-[1500px] overflow-hidden rounded-[2rem] border theme-border editorial-shadow sm:rounded-[2.8rem]"
        >
          <div className="absolute inset-0 bg-[linear-gradient(135deg,var(--hero-sky),var(--hero-sky-2))]" />
          <div className="absolute inset-0 opacity-70 dark:opacity-50">
            <MaterialStudio />
          </div>
          <div className="grain absolute inset-0 opacity-[0.12]" />

          <div className="absolute inset-x-0 top-0 z-20 flex h-12 items-center justify-between border-b border-black/10 px-4 text-[#1b2430]/70 dark:border-white/10 dark:text-white/70 sm:px-6">
            <div className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.16em] sm:text-[9px]">
              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-current/20 font-black">SB</span>
              <span>Suryakanta / Portfolio</span>
            </div>
            <div className="hidden gap-4 font-mono text-[8px] uppercase tracking-[0.14em] md:flex">
              <span>About</span>
              <span>Projects</span>
              <span>Technology</span>
              <span>GitHub</span>
            </div>
          </div>

          <motion.div
            style={{ y: copyY }}
            className="absolute left-6 top-[18%] z-20 max-w-xl sm:left-10 lg:left-[5.2vw] lg:top-[21%]"
          >
            <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-[#283847]/65 dark:text-white/55">
              Full-stack developer · AI builder · student
            </p>

            <h1 className="balance-text mt-5 text-[13vw] font-semibold leading-[0.86] tracking-[-0.065em] text-[#182029] sm:text-[9vw] lg:text-[5.7vw] dark:text-white">
              Building useful
              <span className="block">digital products.</span>
            </h1>

            <p className="mt-6 max-w-md text-sm leading-6 text-[#25313d]/70 dark:text-white/65 sm:text-base">
              I&apos;m {portfolioConfig.personal.fullName}, a B.Tech student and full-stack developer
              exploring AI, product engineering, and interactive web experiences.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-[#15202a] px-5 py-3 text-[11px] font-semibold text-white transition hover:scale-[1.03] dark:bg-white dark:text-[#15161a]"
              >
                Explore projects
                <ArrowDownRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>
              <a
                href={"https://github.com/" + portfolioConfig.personal.githubUsername}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#1c2833]/15 bg-white/35 px-5 py-3 text-[11px] font-semibold text-[#1a2530] backdrop-blur-md transition hover:bg-white/55 dark:border-white/15 dark:bg-black/15 dark:text-white"
              >
                <Github className="h-4 w-4" />
                GitHub
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            style={{ y: portraitY, rotate: portraitRotate }}
            className="absolute bottom-[7%] right-[5%] z-20 hidden h-[64%] w-[35%] min-w-[320px] overflow-hidden rounded-[2rem] border border-white/45 bg-white/20 shadow-[0_34px_80px_-36px_rgba(31,43,55,0.45)] backdrop-blur-sm md:block"
          >
            <Image
              src="/surya-portrait.jpg"
              alt="Portrait of Suryakanta Bala"
              fill
              priority
              sizes="(min-width: 1024px) 35vw, 45vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#182029]/70 via-[#182029]/10 to-transparent px-5 pb-5 pt-16 text-white">
              <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/65">Currently</p>
              <p className="mt-1 text-sm font-medium">DRIEMS University · Odisha</p>
            </div>
          </motion.div>

          <motion.div
            style={{ x: noteX }}
            className="absolute right-[3.2%] top-[17%] z-30 hidden w-36 space-y-2 lg:block"
          >
            {["Full-stack", "Applied AI", "Product UI"].map((item, index) => (
              <div
                key={item}
                className="rounded-xl border border-white/45 bg-white/48 px-3 py-2 backdrop-blur-md dark:border-white/12 dark:bg-black/18"
              >
                <p className="font-mono text-[7px] uppercase tracking-[0.15em] text-[#344555]/50 dark:text-white/40">
                  0{index + 1}
                </p>
                <p className="mt-1 text-[10px] font-medium text-[#1e2933] dark:text-white/80">{item}</p>
              </div>
            ))}
          </motion.div>

          <div className="absolute bottom-0 left-0 right-0 z-20 flex items-center justify-between border-t border-black/10 px-5 py-3 font-mono text-[7px] uppercase tracking-[0.16em] text-[#25313d]/55 dark:border-white/10 dark:text-white/40 sm:px-7">
            <span>Designing practical systems with code + curiosity</span>
            <span>Scroll to explore ↓</span>
          </div>

          <div className="absolute bottom-[8%] right-[7%] z-20 h-[44%] w-[54%] overflow-hidden rounded-[1.7rem] border border-white/45 bg-white/15 shadow-xl backdrop-blur-sm md:hidden">
            <Image
              src="/surya-portrait.jpg"
              alt="Portrait of Suryakanta Bala"
              fill
              priority
              sizes="90vw"
              className="object-cover object-center"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

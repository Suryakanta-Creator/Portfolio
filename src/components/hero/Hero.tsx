"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  FileText,
  Github,
  Instagram,
  Linkedin,
  Mail,
} from "lucide-react";
import { portfolioConfig } from "@/data/portfolio.config";
import { usePortfolioMotion } from "@/context/MotionContext";

const socialLinks = [
  {
    label: "LinkedIn",
    sublabel: "Professional network",
    href: "https://www.linkedin.com/in/suryakanta-bala-b820923aa/",
    icon: Linkedin,
  },
  {
    label: "Instagram",
    sublabel: "@ASHR_06",
    href: "https://www.instagram.com/ASHR_06/",
    icon: Instagram,
  },
  {
    label: "Connect",
    sublabel: "Send a message",
    href: "#contact",
    icon: Mail,
  },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { reduceMotion } = usePortfolioMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const frameScale = useTransform(scrollYProgress, [0, 0.72], reduceMotion ? [1, 1] : [1, 0.97]);
  const frameY = useTransform(scrollYProgress, [0, 0.72], reduceMotion ? [0, 0] : [0, 44]);
  const copyY = useTransform(scrollYProgress, [0, 0.7], reduceMotion ? [0, 0] : [0, -34]);
  const portraitY = useTransform(scrollYProgress, [0, 0.75], reduceMotion ? [0, 0] : [0, 28]);
  const portraitRotate = useTransform(scrollYProgress, [0, 0.75], reduceMotion ? [0, 0] : [-0.7, 1.2]);

  return (
    <section ref={ref} id="hero" className="relative h-[140vh] pt-3 sm:pt-4" aria-label="Introduction and about">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden px-3 pt-16 sm:px-5 sm:pt-20">
        <motion.div
          style={{ scale: frameScale, y: frameY }}
          className="relative mx-auto h-[84vh] w-full max-w-[1500px] overflow-hidden rounded-[2rem] border theme-border editorial-shadow sm:rounded-[2.8rem]"
        >
          <div className="absolute inset-0 bg-[linear-gradient(135deg,var(--hero-sky),var(--hero-sky-2))]" />
          <div className="grain pointer-events-none absolute inset-0 opacity-[0.08]" />

          <motion.div
            aria-hidden="true"
            animate={reduceMotion ? undefined : { x: [0, 26, -10, 0], y: [0, -18, 14, 0], rotate: [0, 10, -6, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -right-[5%] top-[10%] h-64 w-64 rounded-[4rem] bg-gradient-to-br from-violet-300/45 to-cyan-200/20 blur-[1px] sm:h-80 sm:w-80"
          />
          <motion.div
            aria-hidden="true"
            animate={reduceMotion ? undefined : { x: [0, -22, 14, 0], y: [0, 20, -12, 0], rotate: [0, -14, 8, 0] }}
            transition={{ duration: 19, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
            className="pointer-events-none absolute right-[28%] top-[14%] h-28 w-28 rounded-full border border-white/45 bg-white/20 backdrop-blur-xl sm:h-36 sm:w-36"
          />
          <motion.div
            aria-hidden="true"
            animate={reduceMotion ? undefined : { y: [0, -16, 10, 0], rotate: [8, -6, 11, 8] }}
            transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
            className="pointer-events-none absolute bottom-[14%] left-[46%] hidden h-24 w-40 rounded-[2rem] bg-gradient-to-br from-emerald-200/35 to-sky-200/20 sm:block"
          />

          <div className="absolute inset-x-0 top-0 z-30 flex h-12 items-center justify-between border-b border-black/10 px-4 text-[#1b2430]/70 dark:border-white/10 dark:text-white/70 sm:px-6">
            <div className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.16em] sm:text-[9px]">
              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-current/20 font-black">SB</span>
              <span>Suryakanta / Portfolio</span>
            </div>
            <div className="hidden gap-4 font-mono text-[8px] uppercase tracking-[0.14em] md:flex">
              <span>Full-stack</span>
              <span>AI</span>
              <span>Open source</span>
              <span>Available</span>
            </div>
          </div>

          <motion.div
            style={{ y: copyY }}
            className="absolute left-5 top-[14%] z-30 max-w-[58%] sm:left-10 sm:top-[18%] sm:max-w-xl lg:left-[5.2vw] lg:top-[19%]"
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
                href="/Suryakanta_Bala_Resume_Final.pdf"
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

            <div className="mt-6 hidden max-w-xl grid-cols-3 gap-2.5 sm:grid">
              {socialLinks.map(({ label, sublabel, href, icon: Icon }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.28 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={reduceMotion ? undefined : { y: -5, scale: 1.02 }}
                  className="group rounded-[1.1rem] border border-white/45 bg-white/34 p-3 backdrop-blur-md transition-colors hover:bg-white/52 dark:border-white/10 dark:bg-black/15 dark:hover:bg-black/25"
                >
                  <div className="flex items-center justify-between">
                    <Icon className="h-4 w-4 text-[#1f2b36] dark:text-white/80" />
                    <ArrowUpRight className="h-3.5 w-3.5 text-[#1f2b36]/45 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 dark:text-white/35" />
                  </div>
                  <p className="mt-3 text-[10px] font-semibold text-[#1e2933] dark:text-white/85">{label}</p>
                  <p className="mt-1 font-mono text-[7px] uppercase tracking-[0.1em] text-[#344555]/50 dark:text-white/40">{sublabel}</p>
                </motion.a>
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

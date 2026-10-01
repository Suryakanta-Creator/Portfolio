"use client";

import React, { useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, GitBranch, Github } from "lucide-react";
import { portfolioConfig, ProjectItem } from "@/data/portfolio.config";
import { usePortfolioMotion } from "@/context/MotionContext";

const repoTones = [
  "from-emerald-300/55 via-cyan-200/25 to-transparent",
  "from-sky-300/55 via-violet-200/25 to-transparent",
  "from-violet-300/55 via-fuchsia-200/25 to-transparent",
  "from-indigo-300/55 via-cyan-200/25 to-transparent",
];

function FloatingRepo({
  project,
  index,
  progress,
  reduceMotion,
}: {
  project: ProjectItem;
  index: number;
  progress: MotionValue<number>;
  reduceMotion: boolean;
}) {
  const starts = [
    { x: 10, y: 12, ex: 58, ey: 58 },
    { x: 67, y: 20, ex: 18, ey: 66 },
    { x: 28, y: 60, ex: 66, ey: 16 },
    { x: 72, y: 67, ex: 38, ey: 30 },
  ][index];

  const left = useTransform(progress, [0.06, 0.48], reduceMotion ? [starts.ex, starts.ex] : [starts.x, starts.ex]);
  const top = useTransform(progress, [0.06, 0.48], reduceMotion ? [starts.ey, starts.ey] : [starts.y, starts.ey]);
  const rotate = useTransform(progress, [0.06, 0.48], reduceMotion ? [0, 0] : [index % 2 ? 4 : -4, 0]);
  const scale = useTransform(progress, [0.04, 0.16, 0.50], reduceMotion ? [1, 1, 1] : [0.84, 1, 0.9]);
  const opacity = useTransform(progress, [0.02, 0.12, 0.50, 0.60], [0, 1, 1, 0]);
  const leftPct = useTransform(left, (value) => value + "%");
  const topPct = useTransform(top, (value) => value + "%");

  return (
    <motion.a
      href={project.repositoryUrl}
      target="_blank"
      rel="noreferrer"
      style={{ left: leftPct, top: topPct, rotate, scale, opacity }}
      className="absolute w-[150px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl border theme-border theme-panel editorial-shadow sm:w-[190px]"
    >
      <div className={`relative h-24 overflow-hidden bg-gradient-to-br ${repoTones[index] ?? repoTones[0]} sm:h-32`}>
        <div className="soft-grid absolute inset-0 opacity-30" />
        <div className="absolute inset-x-3 bottom-3 flex items-end justify-between">
          <span className="font-mono text-[8px] uppercase tracking-[0.12em] theme-muted">repository</span>
          <span className="text-3xl font-semibold text-black/10 dark:text-white/10">0{index + 1}</span>
        </div>
      </div>
      <div className="flex items-center justify-between gap-2 p-3">
        <div>
          <p className="text-[11px] font-semibold theme-text">{project.title}</p>
          <p className="mt-1 font-mono text-[7px] uppercase tracking-[0.12em] theme-muted">{project.category}</p>
        </div>
        <ArrowUpRight className="h-3.5 w-3.5 theme-muted" />
      </div>
    </motion.a>
  );
}

export function GitHubSection() {
  const ref = useRef<HTMLElement>(null);
  const { reduceMotion } = usePortfolioMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const browserScale = useTransform(scrollYProgress, [0, 0.18, 0.82], reduceMotion ? [1, 1, 1] : [0.9, 1, 0.975]);
  const browserY = useTransform(scrollYProgress, [0, 0.22], reduceMotion ? [0, 0] : [70, 0]);
  const galleryOpacity = useTransform(scrollYProgress, [0.54, 0.66, 1], [0, 1, 1]);
  const galleryY = useTransform(scrollYProgress, [0.54, 0.70], reduceMotion ? [0, 0] : [55, 0]);
  const floatsOpacity = useTransform(scrollYProgress, [0.50, 0.62], [1, 0]);
  const watermarkY = useTransform(scrollYProgress, [0.08, 0.5], reduceMotion ? [0, 0] : [48, -8]);

  return (
    <section ref={ref} id="github" className="relative h-[280vh]" aria-label="GitHub activity">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden px-3 py-16 sm:px-6">
        <motion.div
          style={{ scale: browserScale, y: browserY }}
          className="relative mx-auto h-[82vh] w-full max-w-[1320px] overflow-hidden rounded-[2rem] border theme-border theme-surface editorial-shadow sm:rounded-[2.6rem]"
        >
          <div className="absolute inset-x-0 top-0 z-30 flex h-11 items-center justify-between border-b theme-border px-4 sm:px-5">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-red-300" />
              <span className="h-2 w-2 rounded-full bg-amber-300" />
              <span className="h-2 w-2 rounded-full bg-emerald-300" />
            </div>
            <p className="font-mono text-[8px] uppercase tracking-[0.14em] theme-muted">
              github.com/{portfolioConfig.personal.githubUsername}
            </p>
            <Github className="h-3.5 w-3.5 theme-muted" />
          </div>

          <motion.div style={{ opacity: floatsOpacity }} className="absolute inset-0 top-11">
            <motion.div style={{ y: watermarkY }} className="absolute bottom-[7%] left-[5%] z-0">
              <p className="text-[8vw] font-semibold leading-[0.72] tracking-[-0.07em] text-black/[0.055] dark:text-white/[0.055] sm:text-[6vw] lg:text-[4.6vw]">
                suryakanta
                <span className="block">creator</span>
              </p>
            </motion.div>

            <div className="absolute left-[5%] top-[9%] max-w-sm">
              <p className="font-mono text-[8px] uppercase tracking-[0.2em] theme-accent">/ 05 / Git activity</p>
              <h2 className="mt-3 text-3xl font-semibold leading-[0.95] tracking-[-0.045em] theme-text sm:text-5xl">
                Source code in motion.
              </h2>
              <p className="mt-4 text-xs leading-5 theme-muted sm:text-sm">
                A lightweight repository gallery that keeps the reference motion without rendering duplicate project simulations.
              </p>
            </div>

            {portfolioConfig.projects.map((project, index) => (
              <FloatingRepo
                key={project.id}
                project={project}
                index={index}
                progress={scrollYProgress}
                reduceMotion={reduceMotion}
              />
            ))}
          </motion.div>

          <motion.div style={{ opacity: galleryOpacity, y: galleryY }} className="absolute inset-0 top-11 p-4 sm:p-6">
            <div className="grid h-full gap-3 lg:grid-cols-3">
              {portfolioConfig.projects.slice(0, 3).map((project, index) => (
                <a
                  key={project.id}
                  href={project.repositoryUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative overflow-hidden rounded-[1.5rem] border theme-border theme-surface-2"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${repoTones[index] ?? repoTones[0]}`} />
                  <div className="soft-grid absolute inset-0 opacity-25" />
                  <div className="absolute left-5 top-5 font-mono text-[8px] uppercase tracking-[0.15em] theme-muted">0{index + 1} / repository</div>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent p-5 pt-24 text-white">
                    <p className="text-xl font-semibold">{project.title}</p>
                    <p className="mt-2 max-w-sm text-xs leading-5 text-white/60">{project.tagline}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="font-mono text-[7px] uppercase tracking-[0.12em] text-white/55">{project.expandedDetails.status}</span>
                      <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="absolute bottom-8 left-8 right-8 z-20 flex items-center justify-between rounded-full border theme-border theme-panel px-4 py-3">
              <div className="flex items-center gap-2">
                <GitBranch className="h-3.5 w-3.5 theme-accent" />
                <span className="font-mono text-[8px] uppercase tracking-[0.13em] theme-muted">public source · active builds</span>
              </div>
              <a
                href={"https://github.com/" + portfolioConfig.personal.githubUsername}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[10px] font-semibold theme-text"
              >
                View all <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

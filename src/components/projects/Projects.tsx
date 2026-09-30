"use client";

import React, { useRef, useState } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Github, Layers } from "lucide-react";
import { portfolioConfig, ProjectItem } from "@/data/portfolio.config";
import { usePortfolioMotion } from "@/context/MotionContext";
import { ProjectVisual } from "./ProjectVisuals";
import { ProjectModal } from "./ProjectModal";

function ProjectScene({
  project,
  index,
  progress,
  reduceMotion,
  onOpen,
}: {
  project: ProjectItem;
  index: number;
  progress: MotionValue<number>;
  reduceMotion: boolean;
  onOpen: () => void;
}) {
  const starts = [0.02, 0.18, 0.34, 0.50];
  const start = starts[index] ?? 0;
  const end = start + 0.20;

  const opacity = useTransform(progress, [start, start + 0.035, end - 0.035, end], [0, 1, 1, 0]);
  const copyX = useTransform(
    progress,
    [start, start + 0.06, end],
    reduceMotion ? [0, 0, 0] : [index % 2 === 0 ? -120 : 120, 0, index % 2 === 0 ? 55 : -55]
  );
  const visualX = useTransform(
    progress,
    [start, start + 0.07, end],
    reduceMotion ? [0, 0, 0] : [index % 2 === 0 ? 130 : -130, 0, index % 2 === 0 ? -80 : 80]
  );
  const visualY = useTransform(progress, [start, start + 0.08, end], reduceMotion ? [0, 0, 0] : [90, 0, -55]);
  const visualRotate = useTransform(
    progress,
    [start, start + 0.08, end],
    reduceMotion ? [0, 0, 0] : [index % 2 === 0 ? 7 : -7, 0, index % 2 === 0 ? -4 : 4]
  );
  const scale = useTransform(progress, [start, start + 0.07, end], reduceMotion ? [1, 1, 1] : [0.84, 1, 0.94]);

  const alignLeft = index % 2 === 0;

  return (
    <motion.div style={{ opacity }} className="pointer-events-none absolute inset-0">
      <motion.div
        style={{ x: copyX }}
        className={
          "pointer-events-auto absolute top-[15%] z-20 max-w-md " +
          (alignLeft ? "left-[6vw] text-left" : "right-[6vw] text-left lg:text-right")
        }
      >
        <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-white/55">
          {project.number} · {project.category}
        </p>
        <h3 className="mt-4 text-4xl font-semibold leading-[0.94] tracking-[-0.055em] text-white sm:text-6xl">
          {project.title}
        </h3>
        <p className="mt-5 text-sm leading-6 text-white/70 sm:text-base">{project.tagline}</p>
        <p className="mt-4 max-w-sm text-xs leading-6 text-white/52 sm:text-sm">
          {project.description}
        </p>

        <div className={"mt-6 flex flex-wrap gap-2 " + (!alignLeft ? "lg:justify-end" : "")}>
          {project.expandedDetails.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/20 bg-white/[0.08] px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.12em] text-white/70 backdrop-blur-md"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className={"mt-6 flex gap-3 " + (!alignLeft ? "lg:justify-end" : "")}>
          <button
            type="button"
            onClick={onOpen}
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-[10px] font-semibold text-[#5522c9] transition hover:scale-105"
          >
            <Layers className="h-3.5 w-3.5" />
            Case study
          </button>
          <a
            href={project.repositoryUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/10 px-4 py-2.5 text-[10px] font-semibold text-white backdrop-blur-md transition hover:bg-white/10"
          >
            <Github className="h-3.5 w-3.5" />
            Source
          </a>
        </div>
      </motion.div>

      <motion.div
        style={{ x: visualX, y: visualY, rotate: visualRotate, scale }}
        className={
          "absolute bottom-[9%] z-10 w-[52vw] max-w-[680px] min-w-[320px] " +
          (alignLeft ? "right-[5vw]" : "left-[5vw]")
        }
      >
        <div className="rounded-[2rem] border border-white/20 bg-white/[0.11] p-2 shadow-[0_36px_90px_-42px_rgba(23,7,56,0.7)] backdrop-blur-xl">
          <ProjectVisual type={project.placeholderType} reduceMotion={reduceMotion} />
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  const ref = useRef<HTMLElement>(null);
  const { reduceMotion } = usePortfolioMotion();
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const introOpacity = useTransform(scrollYProgress, [0, 0.025, 0.10], [1, 1, 0]);
  const introY = useTransform(scrollYProgress, [0, 0.10], reduceMotion ? [0, 0] : [0, -120]);
  const dashboardOpacity = useTransform(scrollYProgress, [0.67, 0.77, 1], [0, 1, 1]);
  const dashboardY = useTransform(scrollYProgress, [0.67, 0.82], reduceMotion ? [0, 0] : [100, 0]);
  const purpleOpacity = useTransform(scrollYProgress, [0.68, 0.80], [1, 0]);

  return (
    <section ref={ref} id="projects" className="relative h-[540vh]" aria-label="Featured software projects">
      <div className="sticky top-0 h-screen overflow-hidden bg-[#6818e8]">
        <motion.div style={{ opacity: purpleOpacity }} className="absolute inset-0 bg-[radial-gradient(circle_at_62%_48%,rgba(255,255,255,0.10),transparent_22%),linear-gradient(145deg,#7021f0,#5d12dc)]" />
        <div className="grain absolute inset-0 opacity-[0.12]" />

        <motion.div
          style={{ opacity: introOpacity, y: introY }}
          className="absolute inset-x-0 top-[8%] z-30 text-center"
        >
          <p className="font-mono text-[8px] uppercase tracking-[0.26em] text-white/55">Selected builds / real problems</p>
          <h2 className="mx-auto mt-3 max-w-5xl text-[8vw] font-semibold uppercase leading-[0.84] tracking-[-0.06em] text-white sm:text-[6.5vw] lg:text-[5.4vw]">
            Products built to
            <span className="block">learn, solve & ship.</span>
          </h2>
        </motion.div>

        {portfolioConfig.projects.map((project, index) => (
          <ProjectScene
            key={project.id}
            project={project}
            index={index}
            progress={scrollYProgress}
            reduceMotion={reduceMotion}
            onOpen={() => setSelectedProject(project)}
          />
        ))}

        <motion.div
          style={{ opacity: dashboardOpacity, y: dashboardY }}
          className="absolute inset-0 z-40 bg-[#19191a] px-4 py-16 text-white sm:px-8 lg:px-12"
        >
          <div className="mx-auto flex h-full max-w-7xl flex-col">
            <h3 className="text-center text-[12vw] font-serif italic leading-[0.76] tracking-[-0.06em] text-[#f3f0e8] sm:text-[9vw] lg:text-[7vw]">
              PROJECTS
            </h3>

            <div className="mt-7 grid min-h-0 flex-1 gap-4 lg:grid-cols-[0.9fr_2.1fr]">
              <div className="rounded-[1.8rem] border border-white/10 bg-[#202021] p-5">
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/40">Portfolio index</p>
                <div className="mt-5 space-y-2">
                  {portfolioConfig.projects.map((project, index) => (
                    <button
                      key={project.id}
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="group flex w-full items-center justify-between rounded-xl border border-white/0 px-3 py-3 text-left transition hover:border-white/10 hover:bg-white/[0.04]"
                    >
                      <span>
                        <span className="block text-xs font-medium text-white/85">{project.title}</span>
                        <span className="mt-1 block font-mono text-[7px] uppercase tracking-[0.12em] text-white/35">
                          {project.category}
                        </span>
                      </span>
                      <span className="font-mono text-[8px] text-white/25">0{index + 1}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid min-h-0 gap-3 sm:grid-cols-2">
                {portfolioConfig.projects.map((project, index) => (
                  <motion.button
                    key={project.id}
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.45, delay: index * 0.05 }}
                    className="group relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#222223] p-3 text-left transition hover:-translate-y-1 hover:border-white/20"
                  >
                    <div className="h-[54%] overflow-hidden rounded-xl bg-black/25">
                      <ProjectVisual type={project.placeholderType} reduceMotion={true} />
                    </div>
                    <div className="mt-3 flex items-end justify-between gap-3 px-1 pb-1">
                      <div>
                        <p className="text-sm font-semibold text-white">{project.title}</p>
                        <p className="mt-1 font-mono text-[7px] uppercase tracking-[0.12em] text-white/35">
                          {project.expandedDetails.status}
                        </p>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-white/35 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}

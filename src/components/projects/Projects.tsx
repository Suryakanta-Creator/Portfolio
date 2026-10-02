"use client";

import React, { useRef, useState } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { Github, Layers } from "lucide-react";
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
  const starts = [0.04, 0.27, 0.50, 0.73];
  const start = starts[index] ?? 0;
  const end = Math.min(start + 0.23, 0.98);

  const opacity = useTransform(progress, [start, start + 0.035, end - 0.035, end], [0, 1, 1, 0]);
  const copyX = useTransform(
    progress,
    [start, start + 0.06, end],
    reduceMotion ? [0, 0, 0] : [index % 2 === 0 ? -92 : 92, 0, index % 2 === 0 ? 34 : -34]
  );
  const visualX = useTransform(
    progress,
    [start, start + 0.07, end],
    reduceMotion ? [0, 0, 0] : [index % 2 === 0 ? 105 : -105, 0, index % 2 === 0 ? -48 : 48]
  );
  const visualY = useTransform(progress, [start, start + 0.08, end], reduceMotion ? [0, 0, 0] : [64, 0, -34]);
  const visualRotate = useTransform(
    progress,
    [start, start + 0.08, end],
    reduceMotion ? [0, 0, 0] : [index % 2 === 0 ? 4.5 : -4.5, 0, index % 2 === 0 ? -2 : 2]
  );
  const scale = useTransform(progress, [start, start + 0.07, end], reduceMotion ? [1, 1, 1] : [0.91, 1, 0.97]);

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
        <p className="mt-4 max-w-sm text-xs leading-6 text-white/52 sm:text-sm">{project.description}</p>

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
            <Layers className="h-3.5 w-3.5" /> Case study
          </button>
          <a
            href={project.repositoryUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/10 px-4 py-2.5 text-[10px] font-semibold text-white backdrop-blur-md transition hover:bg-white/10"
          >
            <Github className="h-3.5 w-3.5" /> Source
          </a>
        </div>
      </motion.div>

      <motion.div
        style={{ x: visualX, y: visualY, rotate: visualRotate, scale }}
        className={
          "absolute bottom-[9%] z-10 w-[52vw] max-w-[650px] min-w-[300px] " +
          (alignLeft ? "right-[5vw]" : "left-[5vw]")
        }
      >
        <div className="rounded-[2rem] border border-white/20 bg-white/[0.11] p-2 shadow-[0_30px_70px_-38px_rgba(23,7,56,0.65)] backdrop-blur-xl">
          <ProjectVisual type={project.placeholderType} reduceMotion={true} />
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  const ref = useRef<HTMLElement>(null);
  const { reduceMotion } = usePortfolioMotion();
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const introOpacity = useTransform(scrollYProgress, [0, 0.025, 0.09], [1, 1, 0]);
  const introY = useTransform(scrollYProgress, [0, 0.09], reduceMotion ? [0, 0] : [0, -72]);

  return (
    <section ref={ref} id="projects" className="relative h-[380vh]" aria-label="Featured software projects">
      <div className="sticky top-0 h-screen overflow-hidden bg-[#6818e8]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_48%,rgba(255,255,255,0.10),transparent_22%),linear-gradient(145deg,#7021f0,#5d12dc)]" />
        <div className="grain absolute inset-0 opacity-[0.08]" />

        <motion.div style={{ opacity: introOpacity, y: introY }} className="absolute inset-x-0 top-[8%] z-30 text-center">
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
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}

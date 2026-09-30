"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Github, Layers } from "lucide-react";
import { portfolioConfig, ProjectItem } from "@/data/portfolio.config";
import { usePortfolioMotion } from "@/context/MotionContext";
import { ProjectVisual } from "./ProjectVisuals";
import { ProjectModal } from "./ProjectModal";

export function Projects() {
  const ref = useRef<HTMLElement>(null);
  const { reduceMotion } = usePortfolioMotion();
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const titleX = useTransform(
    scrollYProgress,
    [0.02, 0.24],
    reduceMotion ? ["0%", "0%"] : ["8%", "-22%"]
  );
  const titleY = useTransform(
    scrollYProgress,
    [0.02, 0.24],
    reduceMotion ? [0, 0] : [150, -70]
  );
  const titleOpacity = useTransform(scrollYProgress, [0.03, 0.12, 0.27], [0, 1, 0.2]);

  const categories = ["All", "AgriTech", "AI & Learning", "Compliance & OCR", "3D Web"];
  const filteredProjects = portfolioConfig.projects.filter((project) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "AgriTech") return project.id === "krushi-seva";
    if (activeCategory === "AI & Learning") return project.id === "ai-study-assistant";
    if (activeCategory === "Compliance & OCR") return project.id === "packcheck-ai";
    if (activeCategory === "3D Web") return project.id === "cosmos-world";
    return true;
  });

  return (
    <section ref={ref} id="projects" className="relative overflow-hidden pb-28" aria-label="Featured software projects">
      <div className="relative h-[125vh]">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x: titleX, y: titleY, opacity: titleOpacity }} className="whitespace-nowrap">
            <p className="pl-[7vw] font-mono text-[10px] uppercase tracking-[0.32em] text-cyan-300">
              / 04 / selected builds
            </p>
            <h2 className="mt-3 text-[22vw] font-black uppercase leading-[0.72] tracking-[-0.085em] text-cyan-300 sm:text-[17vw] lg:text-[13.5vw]">
              Selected Work
            </h2>
          </motion.div>

          <div className="absolute bottom-[10vh] left-[7vw] right-[7vw] flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <p className="max-w-md text-sm leading-6 text-white/50">
              Four builds, four different problem spaces. Scroll through them like product scenes, not portfolio cards.
            </p>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={
                    "rounded-full border px-3.5 py-2 font-mono text-[9px] uppercase tracking-[0.14em] transition " +
                    (activeCategory === category
                      ? "border-cyan-300/50 bg-cyan-300 text-[#031014]"
                      : "border-white/10 bg-black/20 text-white/55 hover:border-cyan-300/30 hover:text-cyan-200")
                  }
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto -mt-[26vh] max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-32 lg:space-y-44">
          {filteredProjects.map((project, index) => {
            const reverse = index % 2 === 1;
            return (
              <motion.article
                key={project.id}
                initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 110 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.22 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="min-h-[86vh]"
              >
                <div className={"grid items-center gap-10 lg:grid-cols-12 lg:gap-14 " + (reverse ? "lg:[&>*:first-child]:order-2" : "")}>
                  <motion.div
                    initial={reduceMotion ? false : { scale: 0.88, rotate: reverse ? 2 : -2 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: false, amount: 0.35 }}
                    transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
                    className="lg:col-span-7"
                  >
                    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/35 p-2 shadow-2xl shadow-black/50 backdrop-blur-xl sm:p-3">
                      <div className="mb-2 flex items-center justify-between px-3 py-2 font-mono text-[9px] uppercase tracking-[0.15em] text-white/35">
                        <span>project://{project.id}</span>
                        <span>{project.expandedDetails.status}</span>
                      </div>
                      <ProjectVisual type={project.placeholderType} reduceMotion={reduceMotion} />
                    </div>
                  </motion.div>

                  <div className="lg:col-span-5">
                    <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-cyan-300/80">
                      {project.number} · {project.category}
                    </p>
                    <h3 className="mt-4 text-4xl font-black leading-[0.92] tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl">
                      {project.title}
                    </h3>
                    <p className="mt-5 text-lg font-medium leading-7 text-cyan-100/80">
                      {project.tagline}
                    </p>
                    <p className="mt-5 text-sm leading-7 text-white/52">
                      {project.description}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {project.expandedDetails.techStack.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-white/55"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-xs font-bold uppercase tracking-[0.1em] text-[#041014] transition hover:scale-[1.03]"
                      >
                        <Layers className="h-4 w-4" />
                        Case study
                      </button>
                      <a
                        href={project.repositoryUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-5 py-3 text-xs font-semibold text-white/75 backdrop-blur-md transition hover:border-cyan-300/40 hover:text-cyan-200"
                      >
                        <Github className="h-4 w-4" />
                        Source
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}

"use client";

import React, { useState } from "react";
import { portfolioConfig, ProjectItem } from "@/data/portfolio.config";
import { usePortfolioMotion } from "@/context/MotionContext";
import { ProjectVisual } from "./ProjectVisuals";
import { ProjectModal } from "./ProjectModal";
import { ArrowUpRight, Github, Layers3 } from "lucide-react";

export function Projects() {
  const { reduceMotion } = usePortfolioMotion();
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

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
    <section id="projects" className="relative overflow-hidden py-24" aria-label="Featured Software Projects">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-600/5 blur-[150px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col items-start space-y-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-charcoal-850 px-3 py-1 font-mono text-xs text-cyan-400">
              <span>/ 04 /</span>
              <span>SELECTED BUILDS</span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-warmWhite sm:text-4xl">
              Things I built to solve real problems.
            </h2>
            <p className="max-w-2xl text-sm text-mutedWhite sm:text-base">
              Full-stack applications across agriculture, education, compliance automation, AI, and interactive 3D web experiences.
            </p>
          </div>

          <div className="flex w-fit flex-wrap gap-2 rounded-xl border border-white/10 bg-charcoal-900 p-1.5">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${
                  activeCategory === category
                    ? "border border-cyan-500/40 bg-charcoal-800 text-cyan-300"
                    : "text-mutedWhite hover:text-warmWhite"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-charcoal-900/85 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:shadow-2xl hover:shadow-black/50"
            >
              <div className="border-b border-white/10 bg-charcoal-950/60 p-4 sm:p-5">
                <ProjectVisual type={project.placeholderType} reduceMotion={reduceMotion} />
              </div>

              <div className="space-y-5 p-6 sm:p-8">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-xs font-bold text-cyan-400">{project.number}</span>
                  <span className="rounded-md border border-white/10 bg-charcoal-800 px-2.5 py-1 font-mono text-[10px] text-mutedWhite">
                    {project.category}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-warmWhite">{project.title}</h3>
                  <p className="mt-2 text-sm font-medium text-cyan-200/90">{project.tagline}</p>
                  <p className="mt-3 text-sm leading-relaxed text-mutedWhite">{project.description}</p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-aqua-400 px-4 py-2.5 text-xs font-semibold text-charcoal-950 transition hover:opacity-90"
                  >
                    <Layers3 className="h-4 w-4" />
                    Explore project
                  </button>

                  <a
                    href={project.repositoryUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-charcoal-850 px-4 py-2.5 text-xs font-medium text-warmWhite transition hover:border-cyan-400/40 hover:text-cyan-300"
                  >
                    <Github className="h-4 w-4" />
                    Source
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}

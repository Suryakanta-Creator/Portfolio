"use client";

import React, { useState } from "react";
import { portfolioConfig, ProjectItem } from "@/data/portfolio.config";
import { usePortfolioMotion } from "@/context/MotionContext";
import { ProjectVisual } from "./ProjectVisuals";
import { ProjectModal } from "./ProjectModal";
import { ArrowUpRight, Code, Layers, Sparkles } from "lucide-react";

export function Projects() {
  const { reduceMotion } = usePortfolioMotion();
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "AgriTech", "AI Systems", "Interactive Canvas"];

  const filteredProjects = portfolioConfig.projects.filter((p) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "AgriTech") return p.placeholderType === "agritech";
    if (activeCategory === "AI Systems")
      return p.placeholderType === "ai-study" || p.placeholderType === "packcheck";
    if (activeCategory === "Interactive Canvas") return p.placeholderType === "cosmos";
    return true;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden" aria-label="Featured Software Projects">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="flex flex-col items-start space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-charcoal-850 border border-white/10 text-xs font-mono text-cyan-400">
              <span>/ 03 /</span>
              <span>SELECTED WORKS &amp; PROTOTYPES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-warmWhite tracking-tight">
              Featured projects &amp; intelligent tools.
            </h2>
            <p className="text-mutedWhite text-sm sm:text-base max-w-xl">
              Exploring tangible solutions across agricultural advisories, generative learning, luggage validation, and orbital physics.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-charcoal-900 border border-white/10 w-fit">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-charcoal-800 text-cyan-300 border border-cyan-500/40 shadow-sm"
                    : "text-mutedWhite hover:text-warmWhite"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col rounded-2xl bg-charcoal-900/85 border border-white/10 hover:border-white/20 transition-all duration-300 group hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50 overflow-hidden"
            >
              {/* Visual Demo Preview Area */}
              <div className="p-4 sm:p-5 bg-charcoal-950/60 border-b border-white/10">
                <ProjectVisual type={project.placeholderType} reduceMotion={reduceMotion} />
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  {/* Meta tag & Number */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-cyan-400">
                      {project.number}
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-charcoal-800 border border-white/10 text-[11px] font-mono text-mutedWhite">
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-warmWhite group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-cyan-400/80 mt-1">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack & Inspect Action */}
                <div className="space-y-4 pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-1.5">
                    {project.expandedDetails.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-charcoal-800/80 border border-white/5 text-[11px] font-mono text-mutedWhite"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.expandedDetails.techStack.length > 4 && (
                      <span className="px-2 py-1 rounded-md bg-charcoal-800/50 border border-white/5 text-[11px] font-mono text-mutedWhite">
                        +{project.expandedDetails.techStack.length - 4} more
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-charcoal-800 hover:bg-charcoal-700 text-warmWhite border border-white/15 hover:border-cyan-500/40 text-xs font-semibold tracking-wide transition-all focus:outline-none focus:ring-2 focus:ring-aqua-400 group/btn"
                  >
                    <span>Inspect Architecture &amp; Highlights</span>
                    <ArrowUpRight className="w-4 h-4 text-cyan-400 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Expandable Project Details Dialog */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        reduceMotion={reduceMotion}
      />
    </section>
  );
}

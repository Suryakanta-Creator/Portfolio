"use client";

import React, { useEffect } from "react";
import { CheckCircle2, Cpu, Layers, ShieldCheck, X } from "lucide-react";
import { ProjectItem } from "@/data/portfolio.config";
import { ProjectVisual } from "./ProjectVisuals";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  reduceMotion?: boolean;
}

export function ProjectModal({ project, onClose, reduceMotion = false }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-black/40 p-4 backdrop-blur-md sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative z-10 max-h-[90vh] w-full max-w-3xl space-y-6 overflow-y-auto rounded-[2rem] border theme-border theme-panel-strong p-6 editorial-shadow sm:p-8">
        <div className="flex items-start justify-between gap-4 border-b theme-border pb-4">
          <div>
            <div className="mb-1 flex items-center gap-2">
              <span className="font-mono text-[9px] font-bold theme-accent">{project.number}</span>
              <span className="font-mono text-[8px] uppercase tracking-[0.13em] theme-muted">
                {project.category}
              </span>
            </div>
            <h3 id="modal-title" className="text-2xl font-semibold tracking-[-0.035em] theme-text sm:text-3xl">
              {project.title}
            </h3>
            <p className="mt-2 text-sm font-medium theme-accent">{project.tagline}</p>
          </div>

          <button
            onClick={onClose}
            className="rounded-full border theme-border theme-panel p-2 theme-muted transition hover:text-[var(--text)]"
            aria-label="Close project details"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="overflow-hidden rounded-[1.4rem] border theme-border">
          <ProjectVisual type={project.placeholderType} reduceMotion={reduceMotion} />
        </div>

        <div className="space-y-2">
          <h4 className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.14em] theme-accent">
            <Layers className="h-3.5 w-3.5" />
            Architecture & system overview
          </h4>
          <p className="text-sm leading-7 theme-muted sm:text-base">{project.expandedDetails.overview}</p>
        </div>

        <div className="space-y-3">
          <h4 className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-violet-500 dark:text-violet-300">
            <CheckCircle2 className="h-3.5 w-3.5" />
            Key engineering highlights
          </h4>
          <ul className="grid gap-2.5 sm:grid-cols-2">
            {project.expandedDetails.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-2 rounded-xl border theme-border theme-panel p-3 text-xs leading-5 theme-muted"
              >
                <span className="mt-0.5 theme-accent">▪</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-2">
          <h4 className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-emerald-600 dark:text-emerald-300">
            <Cpu className="h-3.5 w-3.5" />
            Integrated stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.expandedDetails.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border theme-border theme-panel px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.1em] theme-text"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t theme-border pt-4">
          <div className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.1em] theme-muted">
            <ShieldCheck className="h-4 w-4 theme-accent" />
            Status: <strong className="theme-text">{project.expandedDetails.status}</strong>
          </div>

          <button
            onClick={onClose}
            className="rounded-full border theme-border theme-panel px-5 py-2.5 text-xs font-semibold theme-text transition hover:border-violet-400/40"
          >
            Close overview
          </button>
        </div>
      </div>
    </div>
  );
}

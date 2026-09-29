"use client";

import React, { useEffect } from "react";
import { ProjectItem } from "@/data/portfolio.config";
import { X, Layers, CheckCircle2, Cpu, ExternalLink, ShieldCheck, Tag } from "lucide-react";
import { ProjectVisual } from "./ProjectVisuals";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  reduceMotion?: boolean;
}

export function ProjectModal({ project, onClose, reduceMotion = false }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-charcoal-950/80 backdrop-blur-xl animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Click outside backdrop */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-charcoal-900 border border-white/15 shadow-2xl shadow-black/80 z-10 p-6 sm:p-8 space-y-6 animate-in zoom-in-95 duration-200">
        {/* Header Bar */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-xs font-bold text-cyan-400">{project.number}</span>
              <span className="text-xs font-mono uppercase tracking-wider text-mutedWhite">
                {project.category}
              </span>
            </div>
            <h3 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-warmWhite">
              {project.title}
            </h3>
            <p className="text-sm text-cyan-300/90 font-medium mt-1">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-charcoal-800 border border-white/10 text-mutedWhite hover:text-warmWhite hover:border-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-aqua-400"
            aria-label="Close Project Details Dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Visual Showcase Preview */}
        <div className="rounded-xl overflow-hidden border border-white/10">
          <ProjectVisual type={project.placeholderType} reduceMotion={reduceMotion} />
        </div>

        {/* Overview Section */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5" />
            <span>Architecture &amp; System Overview</span>
          </h4>
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
            {project.expandedDetails.overview}
          </p>
        </div>

        {/* Key Highlights List */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-violet-400 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Key Engineering Highlights</span>
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.expandedDetails.highlights.map((highlight, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 p-3 rounded-xl bg-charcoal-850/80 border border-white/5 text-xs text-neutral-200"
              >
                <span className="text-cyan-400 font-bold mt-0.5">▪</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technology Stack Grid */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5" />
            <span>Integrated Stack &amp; Dependencies</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.expandedDetails.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg bg-charcoal-800 border border-white/10 text-xs font-mono text-warmWhite"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Status Notice & Action Footer */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
          <div className="flex items-center gap-2 text-xs font-mono text-mutedWhite">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>Status: <strong className="text-warmWhite">{project.expandedDetails.status}</strong></span>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-charcoal-800 hover:bg-charcoal-700 border border-white/15 text-xs font-semibold text-warmWhite transition-all focus:outline-none focus:ring-2 focus:ring-aqua-400"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
}

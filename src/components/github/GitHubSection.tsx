import React from "react";
import { portfolioConfig } from "@/data/portfolio.config";
import { ArrowUpRight, Code2, GitBranch, Github, GitCommitHorizontal } from "lucide-react";

export function GitHubSection() {
  return (
    <section id="github" className="relative overflow-hidden py-24" aria-label="GitHub and source code">
      <div className="pointer-events-none absolute right-0 top-1/4 -z-10 h-96 w-96 rounded-full bg-violet-600/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-charcoal-850 px-3 py-1 font-mono text-xs text-violet-400">
              <span>/ 05 /</span>
              <span>GITHUB TRANSMISSION</span>
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-warmWhite sm:text-4xl">
              Code. Commit. Improve. Repeat.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-mutedWhite">
              The portfolio is the presentation layer. GitHub is where the implementation lives.
              Open any featured repository to inspect the actual code, architecture, and development history.
            </p>

            <a
              href={`https://github.com/${portfolioConfig.personal.githubUsername}`}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-4 py-3 text-sm font-semibold text-cyan-300 transition hover:border-cyan-400/60 hover:bg-cyan-500/15"
            >
              <Github className="h-4 w-4" />
              @{portfolioConfig.personal.githubUsername}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="lg:col-span-8">
            <div className="rounded-2xl border border-white/10 bg-charcoal-900/80 p-5 sm:p-7">
              <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2 font-mono text-xs text-mutedWhite">
                  <GitBranch className="h-4 w-4 text-violet-400" />
                  FEATURED_REPOSITORIES
                </div>
                <div className="flex items-center gap-2 font-mono text-[10px] text-emerald-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  PUBLIC SOURCE
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {portfolioConfig.projects.map((project) => (
                  <a
                    key={project.id}
                    href={project.repositoryUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group rounded-xl border border-white/10 bg-charcoal-950/70 p-4 transition hover:-translate-y-0.5 hover:border-cyan-400/35"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-bold text-warmWhite group-hover:text-cyan-300">
                          {project.title}
                        </p>
                        <p className="mt-1 font-mono text-[9px] text-mutedWhite">{project.category}</p>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-mutedWhite transition group-hover:text-cyan-400" />
                    </div>

                    <div className="mt-4 flex items-center gap-4 font-mono text-[9px] text-mutedWhite">
                      <span className="inline-flex items-center gap-1">
                        <Code2 className="h-3 w-3 text-cyan-400" />
                        source
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <GitCommitHorizontal className="h-3 w-3 text-violet-400" />
                        history
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

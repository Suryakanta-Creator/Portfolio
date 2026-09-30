"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2, GitBranch, Github } from "lucide-react";
import { portfolioConfig } from "@/data/portfolio.config";
import { usePortfolioMotion } from "@/context/MotionContext";

export function GitHubSection() {
  const { reduceMotion } = usePortfolioMotion();

  return (
    <section id="github" className="relative overflow-hidden py-32 lg:py-40" aria-label="GitHub and source code">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-violet-300">
            / 05 / source transmission
          </p>
          <h2 className="mt-5 text-[16vw] font-black uppercase leading-[0.76] tracking-[-0.08em] text-white sm:text-[12vw] lg:text-[8.6vw]">
            GitHub
            <span className="block text-transparent [-webkit-text-stroke:1px_rgba(196,181,253,0.72)]">
              Activity
            </span>
          </h2>
        </motion.div>

        <div className="mt-20 grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-4">
            <p className="max-w-sm text-sm leading-7 text-white/52">
              The portfolio is the presentation layer. The repositories show the implementation,
              architecture, experiments, and iteration behind the interface.
            </p>

            <a
              href={"https://github.com/" + portfolioConfig.personal.githubUsername}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-violet-300 px-5 py-3 text-xs font-bold uppercase tracking-[0.1em] text-[#120820] transition hover:scale-[1.03]"
            >
              <Github className="h-4 w-4" />
              Open profile
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="lg:col-span-8">
            <div className="divide-y divide-white/10 border-y border-white/10">
              {portfolioConfig.projects.map((project, index) => (
                <motion.a
                  key={project.id}
                  href={project.repositoryUrl}
                  target="_blank"
                  rel="noreferrer"
                  initial={reduceMotion ? { opacity: 1 } : { opacity: 0, x: index % 2 === 0 ? 60 : -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.65, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="group grid gap-4 py-7 sm:grid-cols-12 sm:items-center"
                >
                  <div className="sm:col-span-1">
                    <span className="font-mono text-[9px] text-white/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="sm:col-span-6">
                    <p className="text-2xl font-bold tracking-[-0.035em] text-white transition group-hover:text-violet-200">
                      {project.title}
                    </p>
                    <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.15em] text-white/35">
                      {project.category}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-white/35 sm:col-span-4">
                    <span className="inline-flex items-center gap-1 font-mono text-[9px] uppercase tracking-[0.15em]">
                      <Code2 className="h-3 w-3 text-cyan-300" /> source
                    </span>
                    <span className="inline-flex items-center gap-1 font-mono text-[9px] uppercase tracking-[0.15em]">
                      <GitBranch className="h-3 w-3 text-violet-300" /> history
                    </span>
                  </div>
                  <div className="sm:col-span-1 sm:text-right">
                    <ArrowUpRight className="h-5 w-5 text-white/35 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-200 sm:ml-auto" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

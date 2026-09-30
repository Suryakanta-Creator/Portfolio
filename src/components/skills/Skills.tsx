"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { portfolioConfig } from "@/data/portfolio.config";
import { usePortfolioMotion } from "@/context/MotionContext";

export function Skills() {
  const [searchTerm, setSearchTerm] = useState("");
  const { reduceMotion } = usePortfolioMotion();

  const filteredCategories = portfolioConfig.skillCategories.map((category) => ({
    ...category,
    skills: category.skills.filter((skill) =>
      skill.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  }));

  return (
    <section
      id="skills"
      className="relative my-20 overflow-hidden rounded-[2.5rem] border theme-border theme-surface py-28 sm:rounded-[4rem] lg:py-36"
      aria-label="Technical skills and stack"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_88%_8%,rgba(109,53,232,0.10),transparent_22%),radial-gradient(circle_at_18%_78%,rgba(106,200,255,0.13),transparent_26%)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-16 grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="font-mono text-[9px] uppercase tracking-[0.26em] theme-accent">
              / 03 / optimized toolkit
            </p>
            <h2 className="mt-5 max-w-5xl text-[12vw] font-semibold uppercase leading-[0.8] tracking-[-0.065em] theme-text sm:text-[8.5vw] lg:text-[6.7vw]">
              Technology for
              <span className="block theme-accent">real products.</span>
            </h2>
          </div>

          <div className="lg:col-span-4">
            <p className="text-sm leading-6 theme-muted">
              A practical stack shaped by the projects I actually build—not decorative progress bars.
            </p>
          </div>
        </div>

        <div className="mb-10 grid gap-5 md:grid-cols-[1fr_320px] md:items-end">
          <div className="grid grid-cols-3 gap-3">
            {[
              ["4", "featured builds"],
              ["4", "skill domains"],
              ["100%", "learning mode"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-[1.4rem] border theme-border theme-panel p-4">
                <p className="text-2xl font-semibold theme-text">{value}</p>
                <p className="mt-1 font-mono text-[7px] uppercase tracking-[0.12em] theme-muted">{label}</p>
              </div>
            ))}
          </div>

          <label className="relative block">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 theme-muted" />
            <input
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Filter stack..."
              className="w-full rounded-full border theme-border theme-panel py-3 pl-11 pr-4 text-sm theme-text outline-none transition placeholder:text-[var(--muted)] focus:border-violet-500/40"
            />
          </label>
        </div>

        <div className="divide-y theme-border border-y theme-border">
          {filteredCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 55 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.35 }}
              transition={{ duration: 0.65, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
              className="grid gap-8 py-9 md:grid-cols-12 md:py-12"
            >
              <div className="md:col-span-4">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-[9px] theme-accent">/{String(index + 1).padStart(2, "0")}/</span>
                  <h3 className="text-2xl font-semibold tracking-[-0.035em] theme-text sm:text-3xl">{category.title}</h3>
                </div>
                <span className="mt-3 inline-block rounded-full border theme-border px-3 py-1 font-mono text-[8px] uppercase tracking-[0.14em] theme-muted">
                  {category.badge}
                </span>
              </div>

              <div className="md:col-span-8">
                {category.skills.length ? (
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border theme-border theme-panel px-4 py-2 text-sm font-medium theme-text transition hover:-translate-y-0.5 hover:border-violet-400/40 hover:text-[var(--accent)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm theme-muted">No matching technology in this group.</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

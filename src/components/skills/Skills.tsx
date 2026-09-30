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
      className="relative my-20 overflow-hidden rounded-[2.5rem] bg-[#eef2f1] py-28 text-[#071015] sm:rounded-[4rem] lg:py-36"
      aria-label="Technical skills and stack"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_8%,rgba(91,33,182,0.10),transparent_24%),radial-gradient(circle_at_18%_76%,rgba(8,145,178,0.11),transparent_28%)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-20 grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-9">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-violet-700">
              / 03 / technology matrix
            </p>
            <h2 className="mt-5 max-w-6xl text-[12vw] font-black uppercase leading-[0.78] tracking-[-0.075em] sm:text-[9vw] lg:text-[7.1vw]">
              Technology that
              <span className="block text-[#6841d9]">powers the system.</span>
            </h2>
          </div>

          <div className="lg:col-span-3">
            <p className="text-sm leading-6 text-black/55">
              A working stack shaped by real projects rather than decorative progress bars.
            </p>
          </div>
        </div>

        <div className="mb-12 flex justify-end">
          <label className="relative block w-full max-w-sm">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-black/40" />
            <input
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Filter stack..."
              className="w-full rounded-full border border-black/10 bg-white/65 py-3 pl-11 pr-4 text-sm outline-none backdrop-blur-md transition focus:border-violet-500/40"
            />
          </label>
        </div>

        <div className="divide-y divide-black/10 border-y border-black/10">
          {filteredCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 70, scale: 0.985 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.35 }}
              transition={{ duration: 0.72, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
              className="grid gap-8 py-10 md:grid-cols-12 md:py-14"
            >
              <div className="md:col-span-4">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-[10px] text-violet-700">
                    / {String(index + 1).padStart(2, "0")} /
                  </span>
                  <h3 className="text-2xl font-bold tracking-[-0.035em] sm:text-3xl">
                    {category.title}
                  </h3>
                </div>
                <span className="mt-3 inline-block rounded-full border border-black/10 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-black/50">
                  {category.badge}
                </span>
              </div>

              <div className="md:col-span-8">
                {category.skills.length ? (
                  <div className="flex flex-wrap gap-x-3 gap-y-3">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-[#071015] px-4 py-2 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#6841d9]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-black/45">No matching technology in this group.</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

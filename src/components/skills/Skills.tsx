"use client";

import React, { useState } from "react";
import { portfolioConfig } from "@/data/portfolio.config";
import { Wrench, Search, Code, Cpu, Sparkles, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

export function Skills() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategories = portfolioConfig.skillCategories.map((cat) => ({
    ...cat,
    skills: cat.skills.filter((skill) =>
      skill.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  }));

  return (
    <section id="skills" className="py-24 relative overflow-hidden" aria-label="Technical Skills and Stack">
      {/* Background ambient flare */}
      <div
        className="absolute top-1/2 left-10 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="flex flex-col items-start space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-charcoal-850 border border-white/10 text-xs font-mono text-emerald-400">
              <span>/ 04 /</span>
              <span>TECHNICAL DOMAINS &amp; TOOLING</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-warmWhite tracking-tight">
              Skills, frameworks &amp; engineering standards.
            </h2>
            <p className="text-mutedWhite text-sm sm:text-base max-w-xl">
              An organized directory of languages, component libraries, AI integration workflows, and production practices.
            </p>
          </div>

          {/* Quick Skill Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-mutedWhite absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Filter skills (e.g. Next.js)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-charcoal-900 border border-white/10 text-xs text-warmWhite placeholder:text-mutedWhite/60 focus:outline-none focus:ring-2 focus:ring-aqua-400 focus:border-transparent transition-all font-mono"
            />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredCategories.map((category, idx) => {
            const badgeColor =
              idx === 0
                ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/30"
                : idx === 1
                ? "bg-violet-500/10 text-violet-400 border-violet-500/30"
                : idx === 2
                ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                : "bg-amber-500/10 text-amber-400 border-amber-500/30";

            return (
              <div
                key={category.title}
                className="p-6 sm:p-8 rounded-2xl bg-charcoal-900/80 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-black/40 group flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                    <h3 className="text-lg font-bold text-warmWhite group-hover:text-cyan-300 transition-colors">
                      {category.title}
                    </h3>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-mono font-medium border ${badgeColor}`}>
                      {category.badge}
                    </span>
                  </div>

                  {/* Skills Pills / Chips */}
                  {category.skills.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <div
                          key={skill}
                          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-charcoal-850 border border-white/5 hover:border-cyan-400/40 text-xs font-mono text-neutral-200 transition-all hover:scale-[1.02] hover:bg-charcoal-800"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs font-mono text-mutedWhite py-4">
                      No matching skills found in this category.
                    </p>
                  )}
                </div>

                {/* Footer Count */}
                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-mutedWhite">
                  <span>Category Index: {idx + 1} / 4</span>
                  <span>{category.skills.length} Items Listed</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Engineering Philosophy Quality Badges */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-charcoal-900 via-charcoal-850 to-charcoal-900 border border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <Code className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-warmWhite">Strict Typing</h4>
              <p className="text-[11px] text-mutedWhite mt-0.5">Predictable, robust TypeScript models</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-warmWhite">Fast Hydration</h4>
              <p className="text-[11px] text-mutedWhite mt-0.5">Optimized asset bundles &amp; SSR</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-warmWhite">a11y First</h4>
              <p className="text-[11px] text-mutedWhite mt-0.5">WCAG contrast &amp; reduced motion</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-warmWhite">Delightful Motion</h4>
              <p className="text-[11px] text-mutedWhite mt-0.5">Subtle, purposeful micro-animations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { portfolioConfig } from "@/data/portfolio.config";
import { Milestone, Calendar, MapPin, Sparkles, CheckCircle, ArrowRight } from "lucide-react";

export function Journey() {
  return (
    <section id="journey" className="py-24 relative overflow-hidden" aria-label="Academic and Technical Journey">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/3 right-0 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-2 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-charcoal-850 border border-white/10 text-xs font-mono text-violet-400">
            <span>/ 02 /</span>
            <span>TRAJECTORY & MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-warmWhite tracking-tight">
            The learning arc & technical progression.
          </h2>
          <p className="text-mutedWhite text-sm sm:text-base max-w-xl">
            A chronological timeline of academic milestones, self-driven research, and future technical objectives.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Glowing Connector Line (Desktop) */}
          <div
            className="hidden md:block absolute left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500 via-violet-500 to-emerald-500 opacity-30"
            aria-hidden="true"
          />

          <div className="space-y-8 md:space-y-12">
            {portfolioConfig.journey.map((item, index) => {
              const isCurrent = item.period === "Current";
              const isOngoing = item.period === "Ongoing";
              const isNext = item.period === "Next";

              const badgeColor = isCurrent
                ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/30"
                : isOngoing
                ? "bg-violet-500/10 text-violet-400 border-violet-500/30"
                : "bg-emerald-500/10 text-emerald-400 border-emerald-500/30";

              const nodeColor = isCurrent
                ? "border-cyan-400 bg-cyan-950 text-cyan-300 ring-cyan-500/20"
                : isOngoing
                ? "border-violet-400 bg-violet-950 text-violet-300 ring-violet-500/20"
                : "border-emerald-400 bg-emerald-950 text-emerald-300 ring-emerald-500/20";

              return (
                <div
                  key={item.number}
                  className="relative md:pl-20 group"
                >
                  {/* Timeline Node on the connector line (Desktop) */}
                  <div
                    className={`hidden md:flex absolute left-5 top-6 -translate-x-1/2 w-6 h-6 rounded-full border-2 items-center justify-center text-[10px] font-mono font-bold shadow-lg ring-4 transition-all duration-300 group-hover:scale-110 ${nodeColor}`}
                    aria-hidden="true"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                  </div>

                  {/* Card Body */}
                  <div className="p-6 sm:p-8 rounded-2xl bg-charcoal-900/80 border border-white/10 backdrop-blur-md hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-black/40 group-hover:-translate-y-0.5">
                    {/* Card Header */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-white/10">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-sm font-bold text-mutedWhite/80 group-hover:text-cyan-400 transition-colors">
                          {item.number}
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold text-warmWhite">
                          {item.title}
                        </h3>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-mono font-medium border ${badgeColor}`}>
                          {item.period}
                        </span>
                      </div>
                    </div>

                    {/* Institution tag */}
                    <div className="flex items-center gap-2 text-xs font-mono text-mutedWhite mb-3">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{item.institution}</span>
                    </div>

                    {/* Description narrative */}
                    <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Focus Areas Chips */}
                    <div className="space-y-2">
                      <span className="text-xs font-mono uppercase tracking-wider text-mutedWhite block">
                        Core Competencies &amp; Focus:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {item.focusAreas.map((area) => (
                          <span
                            key={area}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-charcoal-800/90 border border-white/10 text-xs font-mono text-neutral-200 group-hover:border-white/20 transition-colors"
                          >
                            <span className="w-1 h-1 rounded-full bg-cyan-400" />
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

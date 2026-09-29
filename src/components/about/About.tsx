"use client";

import React, { useState } from "react";
import { portfolioConfig } from "@/data/portfolio.config";
import { GraduationCap, Code2, Sparkles, Terminal, CheckCircle2, Cpu, Laptop, Compass } from "lucide-react";

export function About() {
  const [activeTab, setActiveTab] = useState<"overview" | "philosophy" | "environment">("overview");

  const statIcons = [
    <GraduationCap key="edu" className="w-5 h-5 text-cyan-400" />,
    <Laptop key="inst" className="w-5 h-5 text-violet-400" />,
    <Cpu key="focus" className="w-5 h-5 text-emerald-400" />,
    <Sparkles key="ethos" className="w-5 h-5 text-amber-400" />,
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden" aria-label="About Suryakanta Bala">
      {/* Subtle background ambient flare */}
      <div
        className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-charcoal-850 border border-white/10 text-xs font-mono text-cyan-400">
            <span>/ 01 /</span>
            <span>DISCOVERY & BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-warmWhite tracking-tight">
            Engineering with curiosity & purpose.
          </h2>
          <p className="text-mutedWhite text-sm sm:text-base max-w-xl">
            Bridging foundational computing concepts with modern web architecture and practical AI tools.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Narrative & Interactive Explorer */}
          <div className="lg:col-span-7 space-y-6">
            {/* Tab Navigation */}
            <div className="flex items-center gap-2 p-1.5 rounded-xl bg-charcoal-900 border border-white/10 w-fit">
              <button
                onClick={() => setActiveTab("overview")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeTab === "overview"
                    ? "bg-charcoal-800 text-cyan-300 border border-cyan-500/30 shadow-sm"
                    : "text-mutedWhite hover:text-warmWhite"
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab("philosophy")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeTab === "philosophy"
                    ? "bg-charcoal-800 text-cyan-300 border border-cyan-500/30 shadow-sm"
                    : "text-mutedWhite hover:text-warmWhite"
                }`}
              >
                Engineering Ethos
              </button>
              <button
                onClick={() => setActiveTab("environment")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeTab === "environment"
                    ? "bg-charcoal-800 text-cyan-300 border border-cyan-500/30 shadow-sm"
                    : "text-mutedWhite hover:text-warmWhite"
                }`}
              >
                Academic Context
              </button>
            </div>

            {/* Tab Panels */}
            {activeTab === "overview" && (
              <div className="space-y-4 text-neutral-300 leading-relaxed text-base animate-in fade-in duration-300">
                {portfolioConfig.about.paragraphs.map((para, index) => (
                  <p key={index} className="text-sm sm:text-base leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            )}

            {activeTab === "philosophy" && (
              <div className="p-6 rounded-2xl bg-charcoal-900/80 border border-white/10 space-y-4 animate-in fade-in duration-300">
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs">
                  <Terminal className="w-4 h-4" />
                  <span>CORE PRINCIPLES</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-3.5 rounded-xl bg-charcoal-850 border border-white/5 space-y-1.5">
                    <span className="text-xs font-semibold text-warmWhite flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                      Type-Safe Rigor
                    </span>
                    <p className="text-xs text-mutedWhite leading-normal">
                      Writing strictly typed contracts in TypeScript to ensure runtime stability and maintainability.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-charcoal-850 border border-white/5 space-y-1.5">
                    <span className="text-xs font-semibold text-warmWhite flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-violet-400" />
                      Fluid Micro-Interactions
                    </span>
                    <p className="text-xs text-mutedWhite leading-normal">
                      Designing deliberate transitions and animations that respect user preferences and reduce cognitive load.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-charcoal-850 border border-white/5 space-y-1.5">
                    <span className="text-xs font-semibold text-warmWhite flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      Practical AI Integration
                    </span>
                    <p className="text-xs text-mutedWhite leading-normal">
                      Applying LLMs and computer vision to solve real tasks like agricultural advisories and automated recall.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-charcoal-850 border border-white/5 space-y-1.5">
                    <span className="text-xs font-semibold text-warmWhite flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                      Performance First
                    </span>
                    <p className="text-xs text-mutedWhite leading-normal">
                      Optimizing bundle sizes, tree-shaking assets, and ensuring 60fps rendering across both mobile and desktop.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "environment" && (
              <div className="p-6 rounded-2xl bg-charcoal-900/80 border border-white/10 space-y-4 animate-in fade-in duration-300">
                <div className="flex items-center gap-2 text-violet-400 font-mono text-xs">
                  <GraduationCap className="w-4 h-4" />
                  <span>ACADEMIC FOUNDATIONS</span>
                </div>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  Currently pursuing a <span className="text-warmWhite font-medium">B.Tech in Computer Science / Engineering</span> at <span className="text-warmWhite font-medium">DRIEMS University</span>. 
                  My coursework combines deep theoretical grounding (Data Structures, Algorithms, Discrete Mathematics, Database Management) with self-directed hands-on software development.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {["Data Structures", "Algorithms", "Object-Oriented Design", "DBMS & SQL", "Computer Networks", "Web Technologies"].map((item) => (
                    <span key={item} className="px-2.5 py-1 rounded-md bg-charcoal-850 border border-white/10 text-xs text-mutedWhite font-mono">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Live Terminal Preview Box */}
            <div className="rounded-xl bg-charcoal-950 border border-white/10 p-4 font-mono text-xs shadow-inner">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-mutedWhite">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="text-[11px] text-mutedWhite/80 pl-2">surya@driems:~$</span>
                </div>
                <span className="text-[10px] text-cyan-400/80">status: active</span>
              </div>
              <div className="pt-3 space-y-1.5 text-neutral-300 text-[11px] leading-relaxed">
                <p>
                  <span className="text-cyan-400">$</span> whoami
                </p>
                <p className="text-warmWhite pl-4">
                  &gt; Suryakanta Bala [Undergraduate Developer & AI Builder]
                </p>
                <p>
                  <span className="text-cyan-400">$</span> cat interests.json
                </p>
                <p className="text-mutedWhite pl-4">
                  &gt; &#123; &quot;stack&quot;: [&quot;React&quot;, &quot;Next.js&quot;, &quot;TypeScript&quot;, &quot;Tailwind&quot;], &quot;domains&quot;: [&quot;AgriTech&quot;, &quot;AI UX&quot;, &quot;Interactive Visuals&quot;] &#125;
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Stats Cards Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {portfolioConfig.about.quickStats.map((stat, idx) => (
              <div
                key={stat.label}
                className="p-5 rounded-2xl bg-charcoal-900/90 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/5 relative overflow-hidden"
              >
                {/* Background glow on hover */}
                <div
                  className="absolute -right-8 -bottom-8 w-24 h-24 bg-cyan-500/5 rounded-full group-hover:bg-cyan-500/10 transition-colors pointer-events-none"
                  aria-hidden="true"
                />

                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-mutedWhite">
                    {stat.label}
                  </span>
                  <div className="p-2 rounded-xl bg-charcoal-800 border border-white/10 group-hover:border-white/20 transition-colors">
                    {statIcons[idx % statIcons.length]}
                  </div>
                </div>

                <div className="text-lg sm:text-xl font-bold text-warmWhite group-hover:text-cyan-300 transition-colors">
                  {stat.value}
                </div>

                <div className="mt-2 text-xs text-mutedWhite">
                  {idx === 0 && "Currently active coursework & development"}
                  {idx === 1 && "Reputed university in Odisha, India"}
                  {idx === 2 && "Building scalable web & intelligent apps"}
                  {idx === 3 && "Fast, clean, typed, user-centric interfaces"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useEffect, useState } from "react";
import { portfolioConfig } from "@/data/portfolio.config";
import { usePortfolioMotion } from "@/context/MotionContext";
import { ArrowDownRight, Compass, Sparkles } from "lucide-react";

export function Hero() {
  const { reduceMotion } = usePortfolioMotion();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  // Pointer tilt tracking for fine pointers
  useEffect(() => {
    if (reduceMotion) return;

    const handlePointerMove = (e: PointerEvent) => {
      // Normalize between -1 and 1
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [reduceMotion]);

  // Compute transform matrices based on tilt and scroll
  const diamondTransform = reduceMotion
    ? "none"
    : `perspective(1000px) rotateX(${mousePos.y * -14}deg) rotateY(${mousePos.x * 16}deg) translateY(${scrollY * 0.15}px)`;

  const ringTransform = reduceMotion
    ? "none"
    : `perspective(1000px) rotateX(${mousePos.y * 12 + 60}deg) rotateY(${mousePos.x * -10}deg) translateY(${scrollY * 0.08}px)`;

  const secondaryShapeTransform = reduceMotion
    ? "none"
    : `perspective(1000px) rotateX(${mousePos.y * -8}deg) rotateY(${mousePos.x * 12}deg) translateY(${scrollY * 0.2}px)`;

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden"
      aria-label="Introduction and Overview"
    >
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-[380px] h-[380px] bg-violet-600/10 rounded-full blur-[100px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            {/* Supporting Role Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-charcoal-850/80 border border-white/10 text-xs font-mono text-cyan-300 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
              </span>
              <span>{portfolioConfig.personal.role}</span>
            </div>

            {/* Name and Monolithic Headline */}
            <div className="space-y-2">
              <h2 className="text-sm uppercase tracking-widest text-mutedWhite font-mono font-medium">
                {portfolioConfig.personal.fullName}
              </h2>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-warmWhite leading-[1.08]">
                Turning ideas into{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-aqua-400 to-violet-400 bg-clip-text text-transparent">
                  interactive experiences.
                </span>
              </h1>
            </div>

            {/* Short Intro */}
            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl leading-relaxed font-normal">
              {portfolioConfig.personal.shortIntro}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-aqua-400 text-charcoal-950 font-semibold text-sm hover:opacity-95 transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-aqua-400"
              >
                <span>Explore Projects</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>

              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-charcoal-850/90 text-warmWhite border border-white/15 font-medium text-sm hover:bg-white/10 hover:border-white/25 transition-all backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-aqua-400"
              >
                <span>About Me</span>
                <Compass className="w-4 h-4 text-mutedWhite" />
              </a>
            </div>

            {/* Micro Metadata tags */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-4 text-xs font-mono text-mutedWhite border-t border-white/10 w-full">
              <div className="flex items-center gap-1.5">
                <span className="text-cyan-400">❖</span>
                <span>{portfolioConfig.personal.university}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-violet-400">❖</span>
                <span>{portfolioConfig.personal.degree}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-emerald-400">●</span>
                <span>{portfolioConfig.personal.status}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Original 3D Floating Geometry Composition */}
          <div className="lg:col-span-5 flex items-center justify-center relative min-h-[360px] sm:min-h-[440px] select-none">
            {/* Ambient Core Glow */}
            <div
              className="absolute w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            {/* Container with dynamic tilt transform */}
            <div
              className="relative w-72 h-72 sm:w-88 sm:h-88 flex items-center justify-center transition-transform duration-200 ease-out"
              style={{ transform: diamondTransform }}
            >
              {/* Layer 1: Orbital Elliptical Gyro Ring */}
              <div
                className={`absolute inset-0 flex items-center justify-center ${
                  reduceMotion ? "" : "animate-spin-slow"
                }`}
                style={{ transform: ringTransform }}
              >
                <svg
                  viewBox="0 0 320 320"
                  className="w-full h-full drop-shadow-[0_0_15px_rgba(6,182,212,0.35)]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="160"
                    cy="160"
                    rx="140"
                    ry="60"
                    stroke="url(#ringGrad)"
                    strokeWidth="2.5"
                    strokeDasharray="6 8"
                  />
                  {/* Orbiting celestial bead */}
                  <circle cx="300" cy="160" r="5" fill="#38e1ff" filter="url(#glow)" />
                  <circle cx="20" cy="160" r="4" fill="#a855f7" />
                  <defs>
                    <linearGradient id="ringGrad" x1="20" y1="160" x2="300" y2="160" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#06b6d4" stopOpacity="0.8" />
                      <stop offset="0.5" stopColor="#a855f7" stopOpacity="0.6" />
                      <stop offset="1" stopColor="#06b6d4" stopOpacity="0.2" />
                    </linearGradient>
                    <filter id="glow" x="290" y="150" width="20" height="20" filterUnits="userSpaceOnUse">
                      <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#38e1ff" />
                    </filter>
                  </defs>
                </svg>
              </div>

              {/* Layer 2: Main Faceted Polyhedral Diamond (Central SVG Artwork) */}
              <div
                className={`relative w-48 h-48 sm:w-56 sm:h-56 z-20 ${
                  reduceMotion ? "" : "animate-float-slow"
                }`}
              >
                <svg
                  viewBox="0 0 200 200"
                  className="w-full h-full drop-shadow-[0_12px_32px_rgba(0,0,0,0.6)]"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    {/* Gradients for multifaceted dimensional polyhedron */}
                    <linearGradient id="facetTopLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#38e1ff" stopOpacity="0.95" />
                      <stop offset="100%" stopColor="#0891b2" stopOpacity="0.7" />
                    </linearGradient>

                    <linearGradient id="facetTopRight" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#a855f7" stopOpacity="0.95" />
                      <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.75" />
                    </linearGradient>

                    <linearGradient id="facetBottomLeft" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0e7490" stopOpacity="0.85" />
                      <stop offset="100%" stopColor="#155e75" stopOpacity="0.95" />
                    </linearGradient>

                    <linearGradient id="facetBottomRight" x1="100%" y1="100%" x2="0%" y2="0%">
                      <stop offset="0%" stopColor="#6b21a8" stopOpacity="0.85" />
                      <stop offset="100%" stopColor="#3b0764" stopOpacity="0.95" />
                    </linearGradient>

                    <linearGradient id="facetCore" x1="50%" y1="0%" x2="50%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                      <stop offset="50%" stopColor="#38e1ff" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#a855f7" stopOpacity="0.8" />
                    </linearGradient>

                    <filter id="diamondGlow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="8" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* Backdrop glowing silhouette */}
                  <polygon
                    points="100,15 185,100 100,185 15,100"
                    fill="url(#facetCore)"
                    opacity="0.15"
                    filter="url(#diamondGlow)"
                  />

                  {/* Top Crown Facet */}
                  <polygon
                    points="100,20 145,75 100,100 55,75"
                    fill="url(#facetCore)"
                    stroke="#ffffff"
                    strokeWidth="1"
                    strokeOpacity="0.6"
                  />

                  {/* Top-Left Facet */}
                  <polygon
                    points="100,20 55,75 20,100"
                    fill="url(#facetTopLeft)"
                    stroke="#38e1ff"
                    strokeWidth="1"
                    strokeOpacity="0.4"
                  />

                  {/* Top-Right Facet */}
                  <polygon
                    points="100,20 145,75 180,100"
                    fill="url(#facetTopRight)"
                    stroke="#c084fc"
                    strokeWidth="1"
                    strokeOpacity="0.4"
                  />

                  {/* Bottom-Left Facet */}
                  <polygon
                    points="55,75 100,100 100,180 20,100"
                    fill="url(#facetBottomLeft)"
                    stroke="#06b6d4"
                    strokeWidth="1"
                    strokeOpacity="0.5"
                  />

                  {/* Bottom-Right Facet */}
                  <polygon
                    points="145,75 100,100 100,180 180,100"
                    fill="url(#facetBottomRight)"
                    stroke="#9333ea"
                    strokeWidth="1"
                    strokeOpacity="0.5"
                  />

                  {/* Specular Edge Highlights */}
                  <line x1="100" y1="20" x2="100" y2="180" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.5" />
                  <line x1="20" y1="100" x2="180" y2="100" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.4" />
                </svg>
              </div>

              {/* Layer 3: Supporting Floating Geometric Shard 1 (Top Right) */}
              <div
                className={`absolute -top-3 -right-2 w-14 h-14 z-30 ${
                  reduceMotion ? "" : "animate-float-reverse"
                }`}
                style={{ transform: secondaryShapeTransform }}
              >
                <div className="w-full h-full rounded-2xl bg-gradient-to-tr from-violet-600/60 to-violet-400/20 border border-violet-400/40 backdrop-blur-md rotate-12 shadow-lg shadow-violet-900/30 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-violet-300" />
                </div>
              </div>

              {/* Layer 4: Supporting Floating Geometric Shard 2 (Bottom Left) */}
              <div
                className={`absolute -bottom-4 -left-4 w-16 h-10 z-10 ${
                  reduceMotion ? "" : "animate-float-medium"
                }`}
              >
                <div className="w-full h-full rounded-xl bg-gradient-to-br from-cyan-900/60 to-charcoal-900/80 border border-cyan-500/30 backdrop-blur-md -rotate-6 shadow-lg shadow-black/40 flex items-center justify-center">
                  <div className="w-6 h-1 rounded-full bg-cyan-400/60" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

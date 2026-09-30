"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Sparkles, X } from "lucide-react";
import { portfolioConfig } from "@/data/portfolio.config";
import { usePortfolioMotion } from "@/context/MotionContext";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { reduceMotion, toggleReduceMotion } = usePortfolioMotion();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div
        className={
          "pointer-events-auto mx-auto flex max-w-7xl items-center justify-between rounded-full border px-3 py-2 transition-all duration-500 sm:px-4 " +
          (scrolled
            ? "border-white/10 bg-[#03070b]/72 shadow-2xl shadow-black/30 backdrop-blur-2xl"
            : "border-transparent bg-transparent")
        }
      >
        <Link
          href="#hero"
          className="flex items-center gap-3 rounded-full px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-cyan-300/50"
          aria-label="Back to top"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-300/10 font-mono text-[10px] font-black text-cyan-200">
            {portfolioConfig.personal.monogram}
          </span>
          <span className="hidden font-mono text-[9px] uppercase tracking-[0.18em] text-white/55 sm:block">
            portfolio / 2026
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main navigation">
          {portfolioConfig.navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-full px-3 py-2 text-[11px] font-medium text-white/48 transition hover:bg-white/[0.05] hover:text-cyan-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleReduceMotion}
            className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 font-mono text-[9px] uppercase tracking-[0.12em] text-white/45 transition hover:border-cyan-300/30 hover:text-cyan-200 sm:flex"
            aria-label={reduceMotion ? "Enable full animations" : "Reduce motion"}
            title={reduceMotion ? "Enable full animations" : "Reduce motion"}
          >
            <Sparkles className="h-3 w-3" />
            {reduceMotion ? "motion low" : "motion on"}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((value) => !value)}
            className="rounded-full border border-white/10 bg-black/20 p-2.5 text-white/70 backdrop-blur-md lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="pointer-events-auto mx-auto mt-2 max-w-7xl rounded-[1.7rem] border border-white/10 bg-[#03070b]/92 p-3 shadow-2xl shadow-black/50 backdrop-blur-2xl lg:hidden">
          <nav className="grid gap-1" aria-label="Mobile navigation">
            {portfolioConfig.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm text-white/65 transition hover:bg-white/[0.05] hover:text-cyan-200"
              >
                {item.label}
              </a>
            ))}
            <button
              type="button"
              onClick={toggleReduceMotion}
              className="mt-1 rounded-xl border-t border-white/10 px-4 py-3 text-left font-mono text-[10px] uppercase tracking-[0.14em] text-cyan-200"
            >
              {reduceMotion ? "Enable full motion" : "Use reduced motion"}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

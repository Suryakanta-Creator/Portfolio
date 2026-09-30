"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Moon, Sparkles, Sun, X } from "lucide-react";
import { portfolioConfig } from "@/data/portfolio.config";
import { usePortfolioMotion } from "@/context/MotionContext";
import { usePortfolioTheme } from "@/context/ThemeContext";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { reduceMotion, toggleReduceMotion } = usePortfolioMotion();
  const { theme, mounted, toggleTheme } = usePortfolioTheme();

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
          "pointer-events-auto mx-auto flex max-w-7xl items-center justify-between rounded-full border px-3 py-2 transition-all duration-500 sm:px-4 theme-border " +
          (scrolled ? "theme-panel editorial-shadow" : "bg-transparent")
        }
      >
        <Link
          href="#hero"
          className="flex items-center gap-3 rounded-full px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-violet-400/40"
          aria-label="Back to top"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full border theme-border theme-accent-soft font-mono text-[10px] font-black theme-accent">
            {portfolioConfig.personal.monogram}
          </span>
          <span className="hidden font-mono text-[9px] uppercase tracking-[0.18em] theme-muted sm:block">
            portfolio / 2026
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main navigation">
          {portfolioConfig.navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-full px-3 py-2 text-[11px] font-medium theme-muted transition hover:bg-black/[0.04] hover:theme-text dark:hover:bg-white/[0.05]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleReduceMotion}
            className="hidden items-center gap-2 rounded-full border theme-border px-3 py-2 font-mono text-[9px] uppercase tracking-[0.12em] theme-muted transition hover:theme-text sm:flex"
            aria-label={reduceMotion ? "Enable full animations" : "Reduce motion"}
            title={reduceMotion ? "Enable full animations" : "Reduce motion"}
          >
            <Sparkles className="h-3 w-3" />
            {reduceMotion ? "motion low" : "motion on"}
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-full border theme-border theme-panel transition hover:scale-105"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {mounted && theme === "dark" ? (
              <Sun className="h-4 w-4 text-amber-300" />
            ) : (
              <Moon className="h-4 w-4 theme-accent" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((value) => !value)}
            className="rounded-full border theme-border theme-panel p-2.5 theme-text lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="pointer-events-auto mx-auto mt-2 max-w-7xl rounded-[1.7rem] border theme-border theme-panel-strong p-3 editorial-shadow lg:hidden">
          <nav className="grid gap-1" aria-label="Mobile navigation">
            {portfolioConfig.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm theme-muted transition hover:bg-black/[0.04] hover:theme-text dark:hover:bg-white/[0.05]"
              >
                {item.label}
              </a>
            ))}
            <button
              type="button"
              onClick={toggleReduceMotion}
              className="mt-1 rounded-xl border-t theme-border px-4 py-3 text-left font-mono text-[10px] uppercase tracking-[0.14em] theme-accent"
            >
              {reduceMotion ? "Enable full motion" : "Use reduced motion"}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

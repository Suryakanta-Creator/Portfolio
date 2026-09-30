"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { portfolioConfig } from "@/data/portfolio.config";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden border-t theme-border theme-page py-10" aria-label="Site footer">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-7 border-b theme-border pb-7 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border theme-border theme-accent-soft font-mono text-[10px] font-black theme-accent">
              {portfolioConfig.personal.monogram}
            </div>
            <div>
              <span className="block text-sm font-semibold theme-text">{portfolioConfig.personal.fullName}</span>
              <span className="block font-mono text-[8px] uppercase tracking-[0.12em] theme-muted">
                {portfolioConfig.personal.role}
              </span>
            </div>
          </div>

          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2" aria-label="Footer navigation">
            {portfolioConfig.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-mono text-[8px] uppercase tracking-[0.12em] theme-muted transition hover:text-[var(--accent)]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            onClick={scrollToTop}
            className="inline-flex w-fit items-center gap-2 rounded-full border theme-border theme-panel px-4 py-2.5 font-mono text-[8px] uppercase tracking-[0.12em] theme-muted transition hover:text-[var(--text)]"
            aria-label="Back to top"
          >
            Top <ArrowUp className="h-3.5 w-3.5 theme-accent" />
          </button>
        </div>

        <div className="flex flex-col gap-3 pt-7 font-mono text-[8px] uppercase tracking-[0.1em] theme-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {portfolioConfig.personal.fullName}</p>
          <p>Next.js · TypeScript · Motion · R3F</p>
        </div>
      </div>
    </footer>
  );
}

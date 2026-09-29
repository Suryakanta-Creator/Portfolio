"use client";

import React from "react";
import Link from "next/link";
import { portfolioConfig } from "@/data/portfolio.config";
import { ArrowUp, Heart, Sparkles, Terminal } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-charcoal-950/90 py-12 relative overflow-hidden" aria-label="Site Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-white/10">
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-charcoal-850 border border-white/15 flex items-center justify-center font-mono font-bold text-sm text-cyan-400">
              {portfolioConfig.personal.monogram}
            </div>
            <div>
              <span className="block text-sm font-semibold text-warmWhite">
                {portfolioConfig.personal.fullName}
              </span>
              <span className="block text-xs font-mono text-mutedWhite">
                {portfolioConfig.personal.role}
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6" aria-label="Footer Navigation">
            {portfolioConfig.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs font-mono text-mutedWhite hover:text-cyan-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-charcoal-900 border border-white/10 text-xs font-mono text-mutedWhite hover:text-warmWhite hover:border-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-aqua-400"
            aria-label="Back to Top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>

        {/* Bottom meta row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-mutedWhite/70">
          <p>
            © {new Date().getFullYear()} {portfolioConfig.personal.fullName}. Designed &amp; engineered with precision.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Built with Next.js, TypeScript &amp; Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

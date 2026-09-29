"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { portfolioConfig } from "@/data/portfolio.config";
import { usePortfolioMotion } from "@/context/MotionContext";
import { Menu, X, Sparkles, EyeOff } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { reduceMotion, toggleReduceMotion } = usePortfolioMotion();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-charcoal-950/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand / Monogram */}
          <Link
            href="#"
            className="group flex items-center gap-3 rounded-lg py-1 px-2 focus:outline-none focus:ring-2 focus:ring-aqua-400"
            aria-label="Suryakanta Bala - Back to Top"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-charcoal-800 to-charcoal-900 border border-white/15 flex items-center justify-center shadow-inner group-hover:border-aqua-400/50 transition-colors">
              <span className="font-mono font-bold text-lg tracking-wider text-warmWhite group-hover:text-aqua-400 transition-colors">
                {portfolioConfig.personal.monogram}
              </span>
            </div>
            <div className="hidden sm:block">
              <span className="block text-sm font-semibold text-warmWhite tracking-tight">
                {portfolioConfig.personal.fullName}
              </span>
              <span className="block text-xs font-mono text-mutedWhite">
                Portfolio
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
            {portfolioConfig.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-mutedWhite hover:text-warmWhite rounded-lg hover:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-aqua-400"
              >
                {item.label}
              </a>
            ))}

            <div className="h-4 w-px bg-white/15 mx-2" aria-hidden="true" />

            {/* Motion Preference Toggle */}
            <button
              onClick={toggleReduceMotion}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono transition-all border ${
                reduceMotion
                  ? "bg-violet-950/50 border-violet-500/40 text-violet-300"
                  : "bg-charcoal-850 border-white/10 text-mutedWhite hover:text-warmWhite hover:border-white/20"
              } focus:outline-none focus:ring-2 focus:ring-aqua-400`}
              title={reduceMotion ? "Reduced motion active" : "Full motion active"}
              aria-label={reduceMotion ? "Enable full animations" : "Reduce motion"}
            >
              {reduceMotion ? (
                <>
                  <EyeOff className="w-3.5 h-3.5 text-violet-400" />
                  <span>Motion: Low</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5 text-aqua-400" />
                  <span>Motion: On</span>
                </>
              )}
            </button>
          </nav>

          {/* Mobile Menu & Motion Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleReduceMotion}
              className={`p-2 rounded-lg border text-xs ${
                reduceMotion
                  ? "bg-violet-950/60 border-violet-500/40 text-violet-300"
                  : "bg-charcoal-850 border-white/10 text-mutedWhite"
              }`}
              aria-label={reduceMotion ? "Enable animations" : "Reduce motion"}
              title="Toggle animation motion"
            >
              {reduceMotion ? <EyeOff className="w-4 h-4" /> : <Sparkles className="w-4 h-4 text-aqua-400" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-mutedWhite hover:text-warmWhite rounded-lg hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-aqua-400"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-charcoal-950/95 border-b border-white/10 backdrop-blur-xl px-4 pt-2 pb-6 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200">
          {portfolioConfig.navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 text-base font-medium text-mutedWhite hover:text-warmWhite hover:bg-white/5 rounded-lg transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2 border-t border-white/10 flex justify-between items-center text-xs text-mutedWhite px-4">
            <span>Animation Preference</span>
            <button
              onClick={toggleReduceMotion}
              className="text-aqua-400 underline font-mono"
            >
              {reduceMotion ? "Switch to Full Motion" : "Switch to Reduced Motion"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

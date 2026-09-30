"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2, GraduationCap, Sparkles, Terminal } from "lucide-react";
import { portfolioConfig } from "@/data/portfolio.config";
import { usePortfolioMotion } from "@/context/MotionContext";

export function About() {
  const { reduceMotion } = usePortfolioMotion();

  const facts = [
    { icon: GraduationCap, label: "Education", value: "B.Tech · DRIEMS University" },
    { icon: Code2, label: "Focus", value: "Full-stack product engineering" },
    { icon: Sparkles, label: "Exploring", value: "Applied AI + interactive systems" },
    { icon: Terminal, label: "Approach", value: "Build → inspect → improve" },
  ];

  return (
    <section id="about" className="relative py-28 lg:py-36" aria-label="About Suryakanta Bala">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-start">
          <motion.div
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <p className="font-mono text-[9px] uppercase tracking-[0.26em] theme-accent">
              / 01 / about
            </p>
            <h2 className="balance-text mt-5 max-w-4xl text-5xl font-semibold leading-[0.92] tracking-[-0.055em] theme-text sm:text-7xl">
              I learn fastest when an idea has to become a real product.
            </h2>

            <div className="mt-10 max-w-2xl space-y-5 text-base leading-7 theme-muted">
              {portfolioConfig.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <a
              href="#journey"
              className="mt-9 inline-flex items-center gap-2 text-sm font-semibold theme-text transition hover:theme-accent"
            >
              Follow my learning journey
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>

          <div className="lg:col-span-5">
            <div className="divide-y theme-border border-y theme-border">
              {facts.map(({ icon: Icon, label, value }, index) => (
                <motion.div
                  key={label}
                  initial={reduceMotion ? { opacity: 1 } : { opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.55 }}
                  transition={{ duration: 0.6, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="grid grid-cols-[42px_1fr] gap-4 py-6"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full theme-accent-soft theme-accent">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-mono text-[8px] uppercase tracking-[0.18em] theme-muted">{label}</p>
                    <p className="mt-2 text-lg font-medium theme-text">{value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

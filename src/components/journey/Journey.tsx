"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { portfolioConfig } from "@/data/portfolio.config";
import { usePortfolioMotion } from "@/context/MotionContext";

export function Journey() {
  const { reduceMotion } = usePortfolioMotion();

  return (
    <section id="journey" className="relative mx-3 my-20 overflow-hidden rounded-[2.8rem] bg-[#181819] py-28 text-white sm:mx-6 sm:rounded-[4rem] lg:mx-8 lg:py-36" aria-label="Academic and technical journey">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_22%,rgba(164,255,98,0.08),transparent_24%),radial-gradient(circle_at_18%_78%,rgba(111,54,231,0.13),transparent_28%)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-20 grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="font-mono text-[9px] uppercase tracking-[0.26em] text-[#b8ff6b]">
              / 02 / choose your track
            </p>
            <h2 className="mt-5 text-[13vw] font-semibold uppercase leading-[0.8] tracking-[-0.065em] sm:text-[9vw] lg:text-[7vw]">
              How I
              <span className="block text-[#b8ff6b]">learn & build.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-white/52 lg:col-span-4">
            Fundamentals first, then product building, applied AI, and finally production-ready systems.
          </p>
        </div>

        <div className="space-y-5">
          {portfolioConfig.journey.map((item, index) => (
            <motion.article
              key={item.number}
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 70, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.32 }}
              transition={{ duration: 0.72, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
              className="grid gap-5 rounded-[1.8rem] border border-white/10 bg-white/[0.035] p-5 sm:p-7 md:grid-cols-12 md:items-center"
            >
              <div className="md:col-span-1">
                <span className="font-mono text-[9px] text-white/30">/{String(index + 1).padStart(2, "0")}/</span>
              </div>

              <div className="md:col-span-4">
                <p className="font-mono text-[8px] uppercase tracking-[0.17em] text-[#b8ff6b]/70">{item.period}</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-white">{item.title}</h3>
                <div className="mt-3 flex items-center gap-2 text-xs text-white/38">
                  <MapPin className="h-3.5 w-3.5 text-violet-300" />
                  {item.institution}
                </div>
              </div>

              <div className="md:col-span-5">
                <p className="text-sm leading-6 text-white/55">{item.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.focusAreas.map((area) => (
                    <span
                      key={area}
                      className="rounded-full border border-white/10 bg-black/10 px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.11em] text-white/48"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              <div className="md:col-span-2 md:text-right">
                <span className="inline-flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.14em] text-white/35">
                  continue <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { portfolioConfig } from "@/data/portfolio.config";
import { usePortfolioMotion } from "@/context/MotionContext";

export function Journey() {
  const ref = useRef<HTMLElement>(null);
  const { reduceMotion } = usePortfolioMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const titleX = useTransform(
    scrollYProgress,
    [0.05, 0.34],
    reduceMotion ? ["0%", "0%"] : ["7%", "-18%"]
  );
  const titleY = useTransform(
    scrollYProgress,
    [0.05, 0.34],
    reduceMotion ? [0, 0] : [120, -40]
  );
  const titleOpacity = useTransform(scrollYProgress, [0.05, 0.18, 0.35], [0, 1, 0.16]);

  return (
    <section ref={ref} id="journey" className="relative overflow-hidden pb-28" aria-label="Academic and technical journey">
      <div className="relative h-[125vh]">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x: titleX, y: titleY, opacity: titleOpacity }} className="whitespace-nowrap">
            <p className="pl-[7vw] font-mono text-[10px] uppercase tracking-[0.32em] text-violet-300">
              / 02 / trajectory
            </p>
            <h2 className="mt-3 text-[21vw] font-black uppercase leading-[0.72] tracking-[-0.08em] text-violet-300 sm:text-[16vw] lg:text-[13vw]">
              How I Learn
            </h2>
          </motion.div>

          <div className="absolute bottom-[13vh] right-[7vw] max-w-sm text-right">
            <p className="font-mono text-[9px] uppercase tracking-[0.28em] text-white/35">
              Scroll chapter
            </p>
            <p className="mt-3 text-sm leading-6 text-white/55">
              Each stage adds another layer: fundamentals, product building, applied AI, then production systems.
            </p>
          </div>
        </div>
      </div>

      <div className="relative mx-auto -mt-[28vh] max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-24 md:space-y-36">
          {portfolioConfig.journey.map((item, index) => {
            const fromLeft = index % 2 === 0;
            return (
              <motion.article
                key={item.number}
                initial={reduceMotion ? { opacity: 1 } : { opacity: 0, x: fromLeft ? -110 : 110, scale: 0.94 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.35 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={"grid min-h-[46vh] items-center gap-8 md:grid-cols-12 " + (fromLeft ? "" : "md:[&>*:first-child]:order-2")}
              >
                <div className="md:col-span-5">
                  <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/30 p-8 backdrop-blur-xl sm:p-10">
                    <div className="absolute -right-10 -top-14 text-[9rem] font-black leading-none text-white/[0.035]">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-cyan-300/80">
                      {item.period}
                    </p>
                    <h3 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.04em] text-white sm:text-4xl">
                      {item.title}
                    </h3>
                    <div className="mt-5 flex items-center gap-2 text-xs text-white/45">
                      <MapPin className="h-3.5 w-3.5 text-violet-300" />
                      {item.institution}
                    </div>
                  </div>
                </div>

                <div className="md:col-span-7">
                  <p className="max-w-2xl text-lg leading-8 text-white/64 sm:text-xl">
                    {item.description}
                  </p>
                  <div className="mt-7 flex flex-wrap gap-2.5">
                    {item.focusAreas.map((area) => (
                      <span
                        key={area}
                        className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-white/65 backdrop-blur-md"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-300/65">
                    Continue trajectory <ArrowUpRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

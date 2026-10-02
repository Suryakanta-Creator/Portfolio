"use client";

import React, { useMemo, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Check, Code2, RotateCcw, Terminal, X } from "lucide-react";
import { usePortfolioMotion } from "@/context/MotionContext";

const challenges = [
  {
    prompt: "A React list renders unstable UI after reordering. What should each item have?",
    options: ["A random key", "A stable unique key", "No key", "The array index in every case"],
    answer: 1,
  },
  {
    prompt: "Which choice keeps an API secret out of a browser bundle?",
    options: ["Put it in localStorage", "Expose it with NEXT_PUBLIC_", "Call it from a server route", "Hide it in CSS"],
    answer: 2,
  },
  {
    prompt: "A heavy animation should respect accessibility preferences. What should the UI check?",
    options: ["prefers-reduced-motion", "screen width only", "battery percentage only", "browser history"],
    answer: 0,
  },
];

export function Playground() {
  const ref = useRef<HTMLElement>(null);
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const { reduceMotion } = usePortfolioMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const leftTopX = useTransform(scrollYProgress, [0, 0.5, 1], reduceMotion ? [0, 0, 0] : [-160, 0, 120]);
  const leftTopY = useTransform(scrollYProgress, [0, 0.5, 1], reduceMotion ? [0, 0, 0] : [90, -40, -130]);
  const rightTopX = useTransform(scrollYProgress, [0, 0.5, 1], reduceMotion ? [0, 0, 0] : [160, 0, -130]);
  const rightTopY = useTransform(scrollYProgress, [0, 0.5, 1], reduceMotion ? [0, 0, 0] : [70, -55, -120]);
  const lowerX = useTransform(scrollYProgress, [0, 0.5, 1], reduceMotion ? [0, 0, 0] : [-100, 40, 150]);
  const lowerY = useTransform(scrollYProgress, [0, 0.5, 1], reduceMotion ? [0, 0, 0] : [-80, 35, 120]);

  const complete = step >= challenges.length;
  const current = challenges[Math.min(step, challenges.length - 1)];

  const systemState = useMemo(() => {
    if (complete) return score === challenges.length ? "SYSTEM STABLE" : "PATCH COMPLETE";
    if (selected === null) return "AWAITING INPUT";
    return selected === current.answer ? "PATCH ACCEPTED" : "BUG DETECTED";
  }, [complete, current.answer, score, selected]);

  const choose = (index: number) => {
    if (selected !== null || complete) return;
    setSelected(index);
    if (index === current.answer) setScore((value) => value + 1);
  };

  const next = () => {
    setStep((value) => value + 1);
    setSelected(null);
  };

  const reset = () => {
    setStep(0);
    setSelected(null);
    setScore(0);
  };

  return (
    <section ref={ref} id="playground" className="relative min-h-[120vh] overflow-hidden py-32" aria-label="Developer playground">
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        <motion.div
          style={{ x: leftTopX, y: leftTopY, rotate: -7 }}
          className="absolute left-[7%] top-[14%] w-56 rounded-2xl border theme-border theme-panel p-4 editorial-shadow"
        >
          <Code2 className="h-4 w-4 text-cyan-300" />
          <p className="mt-4 font-mono text-[10px] theme-muted">const curiosity = true;</p>
          <p className="mt-1 font-mono text-[10px] theme-accent">ship(iterate(build()));</p>
        </motion.div>

        <motion.div
          style={{ x: rightTopX, y: rightTopY, rotate: 8 }}
          className="absolute right-[8%] top-[19%] w-48 rounded-2xl border theme-border theme-panel p-4 editorial-shadow"
        >
          <p className="font-mono text-[9px] uppercase tracking-[0.18em] theme-accent">runtime</p>
          <p className="mt-3 text-3xl font-semibold theme-text">60 FPS</p>
          <p className="mt-1 text-[10px] theme-muted">motion target</p>
        </motion.div>

        <motion.div
          style={{ x: lowerX, y: lowerY, rotate: -4 }}
          className="absolute bottom-[14%] left-[14%] w-52 rounded-2xl border theme-border theme-panel p-4 editorial-shadow"
        >
          <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-emerald-300">status</p>
          <p className="mt-3 text-sm font-semibold theme-text">BUILD → TEST → DEPLOY</p>
        </motion.div>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-20 text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] theme-accent">
            / 06 / developer playground
          </p>
          <h2 className="mx-auto mt-5 max-w-5xl text-[14vw] font-semibold uppercase leading-[0.78] tracking-[-0.07em] theme-text sm:text-[10vw] lg:text-[7.5vw]">
            Debug
            <span className="block theme-accent">
              the system.
            </span>
          </h2>
        </div>

        <motion.div
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.88, y: 90 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-3xl overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-[#03070b]/90 shadow-2xl shadow-black/60 backdrop-blur-xl"
        >
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div className="flex items-center gap-2 font-mono text-xs text-white/45">
              <Terminal className="h-4 w-4 text-cyan-300" />
              debug_protocol.exe
            </div>
            <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-cyan-300">
              {systemState}
            </span>
          </div>

          <div className="p-6 sm:p-9">
            {complete ? (
              <div className="py-8 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-400/10">
                  <Check className="h-7 w-7 text-emerald-300" />
                </div>
                <h3 className="mt-5 text-3xl font-black tracking-[-0.04em] text-white">{systemState}</h3>
                <p className="mt-2 font-mono text-xs text-cyan-300">score: {score}/{challenges.length}</p>
                <button
                  onClick={reset}
                  className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-xs font-semibold text-white transition hover:border-cyan-300/35"
                >
                  <RotateCcw className="h-4 w-4" />
                  Run again
                </button>
              </div>
            ) : (
              <>
                <div className="mb-6 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.16em] text-white/35">
                  <span>patch {step + 1}/{challenges.length}</span>
                  <span>score {score}</span>
                </div>

                <p className="text-xl font-bold leading-8 tracking-[-0.025em] text-white">{current.prompt}</p>

                <div className="mt-6 grid gap-3">
                  {current.options.map((option, index) => {
                    const answered = selected !== null;
                    const correct = index === current.answer;
                    const picked = selected === index;

                    let stateClass = "border-white/10 bg-white/[0.025] hover:border-cyan-300/35";
                    if (answered && correct) stateClass = "border-emerald-400/40 bg-emerald-400/10";
                    if (answered && picked && !correct) stateClass = "border-red-400/40 bg-red-400/10";

                    return (
                      <button
                        key={option}
                        onClick={() => choose(index)}
                        disabled={answered}
                        className={"flex items-center justify-between rounded-xl border p-4 text-left text-sm text-white/72 transition " + stateClass}
                      >
                        <span>{option}</span>
                        {answered && correct && <Check className="h-4 w-4 text-emerald-300" />}
                        {answered && picked && !correct && <X className="h-4 w-4 text-red-300" />}
                      </button>
                    );
                  })}
                </div>

                {selected !== null && (
                  <div className="mt-6 flex justify-end">
                    <button
                      onClick={next}
                      className="rounded-full bg-cyan-300 px-5 py-3 text-xs font-bold uppercase tracking-[0.1em] text-[#031014]"
                    >
                      Next patch →
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

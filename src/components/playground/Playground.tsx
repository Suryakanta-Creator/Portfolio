"use client";

import React, { useMemo, useState } from "react";
import { Check, RotateCcw, Terminal, X } from "lucide-react";

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
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);

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
    <section id="playground" className="relative overflow-hidden py-24" aria-label="Developer playground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-charcoal-850 px-3 py-1 font-mono text-xs text-cyan-400">
              <span>/ 06 /</span>
              <span>DEVELOPER PLAYGROUND</span>
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-warmWhite sm:text-4xl">
              Don&apos;t just scroll. Debug something.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-mutedWhite">
              A tiny browser-only debugging challenge hidden inside the portfolio. No login,
              no score tracking, no backend — just a small interactive Easter egg for curious visitors.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-2xl border border-cyan-500/20 bg-[#05070a] shadow-2xl shadow-black/50">
              <div className="flex items-center justify-between border-b border-white/10 bg-charcoal-900/90 px-4 py-3">
                <div className="flex items-center gap-2 font-mono text-xs text-mutedWhite">
                  <Terminal className="h-4 w-4 text-cyan-400" />
                  debug_protocol.exe
                </div>
                <span className="font-mono text-[10px] text-cyan-300">{systemState}</span>
              </div>

              <div className="p-5 sm:p-7">
                {complete ? (
                  <div className="py-6 text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10">
                      <Check className="h-6 w-6 text-emerald-400" />
                    </div>
                    <h3 className="mt-4 text-2xl font-bold text-warmWhite">{systemState}</h3>
                    <p className="mt-2 font-mono text-sm text-cyan-300">
                      score: {score}/{challenges.length}
                    </p>
                    <button
                      onClick={reset}
                      className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-charcoal-850 px-4 py-2.5 text-xs font-medium text-warmWhite transition hover:border-cyan-400/40"
                    >
                      <RotateCcw className="h-4 w-4" />
                      Run again
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mb-5 flex items-center justify-between font-mono text-[10px] text-mutedWhite">
                      <span>PATCH {step + 1}/{challenges.length}</span>
                      <span>SCORE {score}</span>
                    </div>

                    <p className="text-base font-semibold leading-relaxed text-warmWhite">{current.prompt}</p>

                    <div className="mt-5 grid gap-3">
                      {current.options.map((option, index) => {
                        const answered = selected !== null;
                        const correct = index === current.answer;
                        const picked = selected === index;

                        let stateClass = "border-white/10 bg-charcoal-900/70 hover:border-cyan-400/35";
                        if (answered && correct) stateClass = "border-emerald-500/40 bg-emerald-500/10";
                        if (answered && picked && !correct) stateClass = "border-red-500/40 bg-red-500/10";

                        return (
                          <button
                            key={option}
                            onClick={() => choose(index)}
                            disabled={answered}
                            className={`flex items-center justify-between rounded-xl border p-3 text-left text-sm text-neutral-200 transition ${stateClass}`}
                          >
                            <span>{option}</span>
                            {answered && correct && <Check className="h-4 w-4 text-emerald-400" />}
                            {answered && picked && !correct && <X className="h-4 w-4 text-red-400" />}
                          </button>
                        );
                      })}
                    </div>

                    {selected !== null && (
                      <div className="mt-5 flex justify-end">
                        <button
                          onClick={next}
                          className="rounded-xl bg-gradient-to-r from-cyan-500 to-aqua-400 px-4 py-2.5 text-xs font-semibold text-charcoal-950"
                        >
                          Next patch →
                        </button>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import {
  Sprout,
  CloudSun,
  ShieldCheck,
  Brain,
  BookOpenCheck,
  Database,
  ScanLine,
  FileCheck2,
  AlertTriangle,
  Orbit,
  Sparkles,
} from "lucide-react";

interface VisualProps {
  type: "agritech" | "ai-study" | "packcheck" | "cosmos";
  reduceMotion?: boolean;
}

export function ProjectVisual({ type, reduceMotion = false }: VisualProps) {
  if (type === "agritech") return <AgritechVisual />;
  if (type === "ai-study") return <StudyVisual />;
  if (type === "packcheck") return <PackCheckVisual />;
  return <CosmosVisual reduceMotion={reduceMotion} />;
}

function Shell({
  children,
  accent = "cyan",
}: {
  children: React.ReactNode;
  accent?: "cyan" | "emerald" | "violet";
}) {
  const border =
    accent === "emerald"
      ? "border-emerald-500/25"
      : accent === "violet"
      ? "border-violet-500/25"
      : "border-cyan-500/25";

  return (
    <div className={`relative h-56 sm:h-64 overflow-hidden rounded-xl border ${border} bg-charcoal-950/95 p-4`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(56,225,255,0.08),transparent_35%)]" />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}

function AgritechVisual() {
  const [mode, setMode] = useState<"scan" | "risk">("scan");

  return (
    <Shell accent="emerald">
      <div className="flex h-full flex-col justify-between">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-2">
              <Sprout className="h-4 w-4 text-emerald-400" />
            </div>
            <div>
              <p className="text-xs font-bold text-warmWhite">Krushi Seva</p>
              <p className="font-mono text-[10px] text-emerald-400">FIELD INTELLIGENCE</p>
            </div>
          </div>
          <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-1 font-mono text-[9px] text-emerald-300">
            AI + WEATHER
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => setMode("scan")}
            className={`rounded-lg border p-3 text-left transition ${
              mode === "scan"
                ? "border-emerald-400/50 bg-emerald-500/10"
                : "border-white/10 bg-white/[0.02]"
            }`}
          >
            <ShieldCheck className="mb-2 h-4 w-4 text-emerald-400" />
            <p className="text-[11px] font-semibold text-warmWhite">Crop diagnosis</p>
            <p className="mt-1 text-[9px] text-mutedWhite">Image → structured findings</p>
          </button>

          <button
            onClick={() => setMode("risk")}
            className={`rounded-lg border p-3 text-left transition ${
              mode === "risk"
                ? "border-cyan-400/50 bg-cyan-500/10"
                : "border-white/10 bg-white/[0.02]"
            }`}
          >
            <CloudSun className="mb-2 h-4 w-4 text-cyan-400" />
            <p className="text-[11px] font-semibold text-warmWhite">Risk context</p>
            <p className="mt-1 text-[9px] text-mutedWhite">Microclimate-assisted scoring</p>
          </button>
        </div>

        <div className="rounded-lg border border-white/10 bg-charcoal-900/80 p-3 font-mono text-[10px] text-mutedWhite">
          {mode === "scan"
            ? "QUEUE → AI DIAGNOSIS → OFFICIAL REVIEW → FOLLOW-UP"
            : "TEMP + HUMIDITY + RAINFALL → EXPLAINABLE RISK"}
        </div>
      </div>
    </Shell>
  );
}

function StudyVisual() {
  const [active, setActive] = useState<"chat" | "cards" | "quiz">("chat");

  return (
    <Shell>
      <div className="flex h-full flex-col justify-between">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="rounded-lg border border-cyan-500/30 bg-cyan-500/10 p-2">
              <Brain className="h-4 w-4 text-cyan-400" />
            </div>
            <div>
              <p className="text-xs font-bold text-warmWhite">AI Study Assistant</p>
              <p className="font-mono text-[10px] text-cyan-400">GROUND YOUR STUDY</p>
            </div>
          </div>
          <Database className="h-4 w-4 text-violet-400" />
        </div>

        <div className="grid grid-cols-3 gap-2">
          {(["chat", "cards", "quiz"] as const).map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`rounded-lg border px-2 py-2 text-[10px] font-mono uppercase transition ${
                active === item
                  ? "border-cyan-400/50 bg-cyan-500/10 text-cyan-300"
                  : "border-white/10 text-mutedWhite"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="rounded-xl border border-white/10 bg-charcoal-900/80 p-3">
          <BookOpenCheck className="mb-2 h-4 w-4 text-cyan-400" />
          <p className="text-[11px] font-semibold text-warmWhite">
            {active === "chat"
              ? "Ask questions grounded in uploaded notes."
              : active === "cards"
              ? "Generate review decks from source material."
              : "Create quizzes, score attempts, and review results."}
          </p>
          <p className="mt-1 font-mono text-[9px] text-mutedWhite">
            PDF → CHUNKS → EMBEDDINGS → RETRIEVAL → AI
          </p>
        </div>
      </div>
    </Shell>
  );
}

function PackCheckVisual() {
  return (
    <Shell accent="violet">
      <div className="flex h-full flex-col justify-between">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="rounded-lg border border-violet-500/30 bg-violet-500/10 p-2">
              <ScanLine className="h-4 w-4 text-violet-400" />
            </div>
            <div>
              <p className="text-xs font-bold text-warmWhite">PackCheck AI</p>
              <p className="font-mono text-[10px] text-violet-400">LABEL COMPLIANCE SCAN</p>
            </div>
          </div>
          <span className="font-mono text-[9px] text-mutedWhite">OCR PIPELINE</span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-lg border border-white/10 bg-white/[0.02] p-3">
            <FileCheck2 className="mb-2 h-4 w-4 text-emerald-400" />
            <p className="text-[10px] text-warmWhite">MRP declaration</p>
            <p className="mt-1 font-mono text-[9px] text-emerald-400">DETECTED</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.02] p-3">
            <AlertTriangle className="mb-2 h-4 w-4 text-amber-400" />
            <p className="text-[10px] text-warmWhite">Net quantity</p>
            <p className="mt-1 font-mono text-[9px] text-amber-400">MANUAL REVIEW</p>
          </div>
        </div>

        <div className="rounded-lg border border-violet-500/20 bg-violet-500/[0.06] p-3 font-mono text-[9px] text-mutedWhite">
          IMAGE → OCR → DECLARATIONS → RULE ENGINE → OFFICER REVIEW
        </div>
      </div>
    </Shell>
  );
}

function CosmosVisual({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <Shell>
      <div className="relative flex h-full items-center justify-center">
        <div className="absolute left-0 top-0">
          <div className="flex items-center gap-2">
            <Orbit className="h-4 w-4 text-cyan-400" />
            <div>
              <p className="text-xs font-bold text-warmWhite">Cosmic World</p>
              <p className="font-mono text-[10px] text-cyan-400">INTERACTIVE 3D WEB</p>
            </div>
          </div>
        </div>

        <div className="relative h-36 w-36">
          <div
            className={`absolute inset-0 rounded-full border border-cyan-500/30 ${
              reduceMotion ? "" : "animate-spin-slow"
            }`}
          >
            <div className="absolute left-1/2 top-[-5px] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(56,225,255,0.9)]" />
          </div>
          <div
            className={`absolute inset-5 rounded-full border border-violet-500/25 ${
              reduceMotion ? "" : "animate-spin-slow"
            }`}
            style={{ animationDirection: "reverse", animationDuration: "18s" }}
          >
            <div className="absolute right-[-4px] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-violet-400" />
          </div>
          <div className="absolute inset-[52px] rounded-full bg-gradient-to-br from-cyan-300 to-violet-500 shadow-[0_0_35px_rgba(56,225,255,0.45)]" />
        </div>

        <div className="absolute bottom-0 right-0 flex items-center gap-1 font-mono text-[9px] text-mutedWhite">
          <Sparkles className="h-3 w-3 text-violet-400" />
          R3F + GEMINI
        </div>
      </div>
    </Shell>
  );
}

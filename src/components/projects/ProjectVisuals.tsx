"use client";

import React, { useState, useEffect } from "react";
import { Sprout, CloudRain, Sun, Zap, Brain, Sparkles, CheckCircle2, AlertCircle, Luggage, Orbit, Globe, Compass } from "lucide-react";

interface VisualProps {
  type: "agritech" | "ai-study" | "packcheck" | "cosmos";
  reduceMotion?: boolean;
}

export function ProjectVisual({ type, reduceMotion = false }: VisualProps) {
  switch (type) {
    case "agritech":
      return <AgritechVisual reduceMotion={reduceMotion} />;
    case "ai-study":
      return <AIStudyVisual reduceMotion={reduceMotion} />;
    case "packcheck":
      return <PackCheckVisual reduceMotion={reduceMotion} />;
    case "cosmos":
      return <CosmosVisual reduceMotion={reduceMotion} />;
    default:
      return null;
  }
}

// 1. Krushi Seva AgriTech Interactive Visual
function AgritechVisual({ reduceMotion }: { reduceMotion: boolean }) {
  const [selectedCrop, setSelectedCrop] = useState<"Rice" | "Wheat" | "Mustard">("Rice");

  return (
    <div className="w-full h-56 sm:h-64 rounded-xl bg-gradient-to-br from-emerald-950/60 via-charcoal-900 to-charcoal-950 p-4 border border-emerald-500/20 flex flex-col justify-between select-none relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

      {/* Header bar */}
      <div className="flex items-center justify-between z-10">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-emerald-900/60 border border-emerald-500/30 text-emerald-400">
            <Sprout className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-bold text-warmWhite block">Krushi Seva Portal</span>
            <span className="text-[10px] font-mono text-emerald-400/90">Regional Agro Advisory</span>
          </div>
        </div>

        {/* Live Weather Widget */}
        <div className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-charcoal-850/90 border border-white/10 text-[11px] font-mono text-mutedWhite">
          <Sun className="w-3.5 h-3.5 text-amber-400" />
          <span>28°C · Hum: 64%</span>
        </div>
      </div>

      {/* Interactive Crop Selector */}
      <div className="grid grid-cols-3 gap-2 z-10">
        {(["Rice", "Wheat", "Mustard"] as const).map((crop) => (
          <button
            key={crop}
            type="button"
            onClick={() => setSelectedCrop(crop)}
            className={`px-2 py-1.5 rounded-lg text-xs font-mono transition-all text-center border ${
              selectedCrop === crop
                ? "bg-emerald-500/20 border-emerald-400/60 text-emerald-300 font-semibold"
                : "bg-charcoal-850/60 border-white/5 text-mutedWhite hover:text-warmWhite"
            }`}
          >
            {crop}
          </button>
        ))}
      </div>

      {/* Dynamic Telemetry Metrics */}
      <div className="grid grid-cols-2 gap-2 z-10">
        <div className="p-2.5 rounded-lg bg-charcoal-850/80 border border-emerald-500/15">
          <span className="text-[10px] font-mono text-mutedWhite block">Soil Moisture Index</span>
          <div className="flex items-center justify-between mt-1">
            <span className="text-xs font-bold text-emerald-300">
              {selectedCrop === "Rice" ? "82% (Optimal)" : selectedCrop === "Wheat" ? "54% (Good)" : "60% (Moderate)"}
            </span>
            <span className="text-[10px] text-emerald-400">● Live</span>
          </div>
        </div>

        <div className="p-2.5 rounded-lg bg-charcoal-850/80 border border-emerald-500/15">
          <span className="text-[10px] font-mono text-mutedWhite block">Pest Risk Advisory</span>
          <div className="flex items-center justify-between mt-1">
            <span className="text-xs font-bold text-warmWhite">
              {selectedCrop === "Rice" ? "Low Risk" : "Normal"}
            </span>
            <span className="text-[10px] text-emerald-400 font-mono">Verified</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// 2. AI Study Assistant Interactive Visual
function AIStudyVisual({ reduceMotion }: { reduceMotion: boolean }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="w-full h-56 sm:h-64 rounded-xl bg-gradient-to-br from-cyan-950/60 via-charcoal-900 to-charcoal-950 p-4 border border-cyan-500/20 flex flex-col justify-between select-none relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-0 w-36 h-36 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

      {/* Header bar */}
      <div className="flex items-center justify-between z-10">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-cyan-900/60 border border-cyan-500/30 text-cyan-400">
            <Brain className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-bold text-warmWhite block">AI Study Engine</span>
            <span className="text-[10px] font-mono text-cyan-400/90">Cognitive Synthesis Node</span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-charcoal-850/90 border border-cyan-500/20 text-[10px] font-mono text-cyan-300">
          <Sparkles className="w-3 h-3 text-cyan-400 animate-pulse" />
          <span>LLM Parser Ready</span>
        </div>
      </div>

      {/* Interactive Active-Recall Card */}
      <div
        onClick={() => setFlipped(!flipped)}
        className="cursor-pointer p-3.5 rounded-xl bg-charcoal-850/90 border border-cyan-400/30 hover:border-cyan-400/60 transition-all shadow-inner group z-10"
      >
        <div className="flex items-center justify-between text-[10px] font-mono text-mutedWhite mb-1.5">
          <span>{flipped ? "EXPLANATION / ANSWER" : "ACTIVE RECALL PROMPT (CLICK TO REVEAL)"}</span>
          <span className="text-cyan-400 group-hover:underline">Flip ⟳</span>
        </div>

        {flipped ? (
          <p className="text-xs font-medium text-cyan-200 leading-snug">
            &quot;Time complexity of quicksort is O(n log n) average, O(n²) worst case with balanced partitioning optimizing tree depth.&quot;
          </p>
        ) : (
          <p className="text-xs font-medium text-warmWhite leading-snug">
            &quot;What is the average and worst-case time complexity of randomized Quicksort?&quot;
          </p>
        )}
      </div>

      {/* Synthesis Progress Indicator */}
      <div className="flex items-center justify-between text-[10px] font-mono text-mutedWhite z-10 pt-1">
        <span>Retention Score: <strong className="text-cyan-400 font-bold">94%</strong></span>
        <span>Chapters Ingested: <strong className="text-warmWhite">12 / 12</strong></span>
      </div>
    </div>
  );
}

// 3. PackCheck AI Computer Vision Visual
function PackCheckVisual({ reduceMotion }: { reduceMotion: boolean }) {
  const items = [
    { name: "Travel Passport", status: "Verified", color: "text-emerald-400" },
    { name: "Power Adapter", status: "Verified", color: "text-emerald-400" },
    { name: "Rain Jacket", status: "Flagged (Missing)", color: "text-amber-400" },
  ];

  return (
    <div className="w-full h-56 sm:h-64 rounded-xl bg-gradient-to-br from-violet-950/60 via-charcoal-900 to-charcoal-950 p-4 border border-violet-500/20 flex flex-col justify-between select-none relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-violet-600/10 rounded-full blur-2xl pointer-events-none" />

      {/* Header bar */}
      <div className="flex items-center justify-between z-10">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-violet-900/60 border border-violet-500/30 text-violet-400">
            <Luggage className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-bold text-warmWhite block">PackCheck Vision</span>
            <span className="text-[10px] font-mono text-violet-400/90">Baggage Verification</span>
          </div>
        </div>

        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-violet-500/20 text-violet-300 border border-violet-500/30">
          CV SCAN: LIVE
        </span>
      </div>

      {/* Bounding Box Item List */}
      <div className="space-y-1.5 z-10">
        {items.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between p-2 rounded-lg bg-charcoal-850/80 border border-white/5 text-xs font-mono"
          >
            <div className="flex items-center gap-2">
              {item.status === "Verified" ? (
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
              )}
              <span className="text-warmWhite">{item.name}</span>
            </div>
            <span className={`text-[10px] font-bold ${item.color}`}>{item.status}</span>
          </div>
        ))}
      </div>

      {/* Baggage Weight Bar */}
      <div className="space-y-1 z-10">
        <div className="flex justify-between text-[10px] font-mono text-mutedWhite">
          <span>Luggage Allowance: 18.2 / 23.0 kg</span>
          <span className="text-emerald-400">79% (Allowed)</span>
        </div>
        <div className="w-full h-1.5 rounded-full bg-charcoal-800 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full w-[79%]" />
        </div>
      </div>
    </div>
  );
}

// 4. Cosmos World Interactive Visual
function CosmosVisual({ reduceMotion }: { reduceMotion: boolean }) {
  const [speed, setSpeed] = useState<number>(1);

  return (
    <div className="w-full h-56 sm:h-64 rounded-xl bg-gradient-to-br from-charcoal-950 via-cyan-950/40 to-charcoal-950 p-4 border border-cyan-500/20 flex flex-col justify-between select-none relative overflow-hidden">
      {/* Dynamic Solar Canvas Simulation */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-80">
        {/* Star Backdrop */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff20_1px,transparent_1px)] [background-size:16px_16px]" />

        {/* Orbit Ring 1 */}
        <div
          className={`absolute w-32 h-32 rounded-full border border-cyan-500/30 ${
            reduceMotion ? "" : "animate-spin-slow"
          }`}
          style={{ animationDuration: `${20 / speed}s` }}
        >
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 absolute -top-1 left-1/2 -translate-x-1/2 shadow-lg shadow-cyan-400" />
        </div>

        {/* Orbit Ring 2 */}
        <div
          className={`absolute w-44 h-44 rounded-full border border-violet-500/20 ${
            reduceMotion ? "" : "animate-spin-slow"
          }`}
          style={{ animationDuration: `${35 / speed}s`, animationDirection: "reverse" }}
        >
          <div className="w-3.5 h-3.5 rounded-full bg-violet-400 absolute top-1/2 -right-1.5 -translate-y-1/2 shadow-lg shadow-violet-400" />
        </div>

        {/* Core Star / Sun */}
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-400 to-cyan-300 shadow-[0_0_24px_rgba(56,225,255,0.8)]" />
      </div>

      {/* Header bar */}
      <div className="flex items-center justify-between z-10">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-charcoal-850/80 border border-cyan-500/30 text-cyan-400">
            <Orbit className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-bold text-warmWhite block">Cosmos Visualizer</span>
            <span className="text-[10px] font-mono text-cyan-400/90">Orbital Telemetry</span>
          </div>
        </div>

        {/* Orbit Speed Controller */}
        <div className="flex items-center gap-1 z-10">
          <button
            type="button"
            onClick={() => setSpeed(speed === 1 ? 2 : speed === 2 ? 0.5 : 1)}
            className="px-2 py-1 rounded bg-charcoal-850/90 border border-white/15 text-[10px] font-mono text-cyan-300 hover:border-cyan-400 transition-colors"
          >
            Speed: {speed}x
          </button>
        </div>
      </div>

      {/* Telemetry Metrics */}
      <div className="flex items-center justify-between p-2 rounded-lg bg-charcoal-900/80 border border-white/10 text-[10px] font-mono text-mutedWhite z-10 backdrop-blur-md">
        <span>G-Force: <strong className="text-cyan-400">9.807 m/s²</strong></span>
        <span>Stellar Bodies: <strong className="text-violet-400">8 Primary</strong></span>
        <span>Simulation: <strong className="text-emerald-400">60 FPS</strong></span>
      </div>
    </div>
  );
}

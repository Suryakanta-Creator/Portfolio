"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  BriefcaseBusiness,
  Code2,
  Contact,
  Github,
  GraduationCap,
  Keyboard,
  Search,
  Sparkles,
  UserRound,
  Wrench,
  X,
} from "lucide-react";

const items = [
  { label: "About me", hint: "about", target: "#about", icon: UserRound },
  { label: "Journey", hint: "journey", target: "#journey", icon: GraduationCap },
  { label: "Skills", hint: "skills", target: "#skills", icon: Wrench },
  { label: "Projects", hint: "projects", target: "#projects", icon: BriefcaseBusiness },
  { label: "GitHub", hint: "github", target: "#github", icon: Github },
  { label: "Developer Playground", hint: "play", target: "#playground", icon: Code2 },
  { label: "Contact", hint: "contact", target: "#contact", icon: Contact },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
      }
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (open) {
      setQuery("");
      window.setTimeout(() => inputRef.current?.focus(), 20);
    }
  }, [open]);

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return items;
    return items.filter(
      (item) =>
        item.label.toLowerCase().includes(normalized) ||
        item.hint.toLowerCase().includes(normalized)
    );
  }, [query]);

  const go = (target: string) => {
    setOpen(false);
    document.querySelector(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-40 hidden items-center gap-2 rounded-full border border-white/10 bg-charcoal-900/85 px-3 py-2 font-mono text-[10px] text-mutedWhite shadow-xl shadow-black/40 backdrop-blur-xl transition hover:border-cyan-400/35 hover:text-cyan-300 sm:flex"
        aria-label="Open command palette"
      >
        <Keyboard className="h-3.5 w-3.5" />
        CTRL K
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center bg-black/65 px-4 pt-[14vh] backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Portfolio command palette"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) setOpen(false);
          }}
        >
          <div className="w-full max-w-xl overflow-hidden rounded-2xl border border-cyan-500/20 bg-[#080b10] shadow-2xl shadow-black/70">
            <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
              <Search className="h-4 w-4 text-cyan-400" />
              <input
                ref={inputRef}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Jump to a section..."
                className="flex-1 bg-transparent text-sm text-warmWhite outline-none placeholder:text-mutedWhite/60"
              />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg p-1.5 text-mutedWhite hover:bg-white/5 hover:text-warmWhite"
                aria-label="Close command palette"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="p-2">
              {filtered.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.target}
                    type="button"
                    onClick={() => go(item.target)}
                    className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left transition hover:bg-white/[0.05]"
                  >
                    <span className="flex items-center gap-3">
                      <span className="rounded-lg border border-white/10 bg-charcoal-900 p-2 text-cyan-400">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="text-sm font-medium text-warmWhite">{item.label}</span>
                    </span>
                    <span className="font-mono text-[10px] text-mutedWhite">/{item.hint}</span>
                  </button>
                );
              })}

              {filtered.length === 0 && (
                <div className="px-4 py-10 text-center text-sm text-mutedWhite">
                  No command found.
                </div>
              )}
            </div>

            <div className="flex items-center justify-between border-t border-white/10 px-4 py-3 font-mono text-[9px] text-mutedWhite">
              <span className="inline-flex items-center gap-1">
                <Sparkles className="h-3 w-3 text-violet-400" />
                SURYA_COMMAND_CENTER
              </span>
              <span>ESC to close</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

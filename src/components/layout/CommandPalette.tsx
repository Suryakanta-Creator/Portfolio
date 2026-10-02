"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Layers,
  Code2,
  Mail,
  Github,
  GraduationCap,
  Keyboard,
  Search,
  Sparkles,
  User,
  Wrench,
  X,
} from "lucide-react";

const items = [
  { label: "About me", hint: "about", target: "#about", icon: User },
  { label: "Journey", hint: "journey", target: "#journey", icon: GraduationCap },
  { label: "Skills", hint: "skills", target: "#skills", icon: Wrench },
  { label: "Projects", hint: "projects", target: "#projects", icon: Layers },
  { label: "GitHub", hint: "github", target: "#github", icon: Github },
  { label: "Developer Playground", hint: "play", target: "#playground", icon: Code2 },
  { label: "Contact", hint: "contact", target: "#contact", icon: Mail },
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
        className="fixed bottom-5 right-5 z-40 hidden items-center gap-2 rounded-full border theme-border theme-panel px-3 py-2 font-mono text-[9px] uppercase tracking-[0.11em] theme-muted editorial-shadow transition hover:text-[var(--accent)] sm:flex"
        aria-label="Open command palette"
      >
        <Keyboard className="h-3.5 w-3.5" />
        Ctrl K
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center bg-black/35 px-4 pt-[14vh] backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Portfolio command palette"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) setOpen(false);
          }}
        >
          <div className="w-full max-w-xl overflow-hidden rounded-[1.7rem] border theme-border theme-panel-strong editorial-shadow">
            <div className="flex items-center gap-3 border-b theme-border px-4 py-3">
              <Search className="h-4 w-4 theme-accent" />
              <input
                ref={inputRef}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Jump to a section..."
                className="flex-1 bg-transparent text-sm theme-text outline-none placeholder:text-[var(--muted)]"
              />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg p-1.5 theme-muted transition hover:bg-black/[0.04] hover:text-[var(--text)] dark:hover:bg-white/[0.05]"
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
                    className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left transition hover:bg-black/[0.04] dark:hover:bg-white/[0.05]"
                  >
                    <span className="flex items-center gap-3">
                      <span className="rounded-lg border theme-border theme-accent-soft p-2 theme-accent">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="text-sm font-medium theme-text">{item.label}</span>
                    </span>
                    <span className="font-mono text-[9px] theme-muted">/{item.hint}</span>
                  </button>
                );
              })}

              {filtered.length === 0 && (
                <div className="px-4 py-10 text-center text-sm theme-muted">No command found.</div>
              )}
            </div>

            <div className="flex items-center justify-between border-t theme-border px-4 py-3 font-mono text-[8px] uppercase tracking-[0.12em] theme-muted">
              <span className="inline-flex items-center gap-1">
                <Sparkles className="h-3 w-3 theme-accent" />
                Surya command center
              </span>
              <span>Esc to close</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

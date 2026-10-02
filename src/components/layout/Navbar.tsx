"use client";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { usePortfolioMotion } from "@/context/MotionContext";
const links = ["About", "Journey", "Projects", "Skills", "Contact"];
export function Navbar() {
  const [open, setOpen] = useState(false);
  const { reduceMotion, toggleReduceMotion } = usePortfolioMotion();
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        trigger.current?.focus();
      }
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);
  return (
    <header className="future-nav">
      <a className="wordmark" href="#hero" aria-label="Surya — back to top">
        sb<span>↗</span>
      </a>
      <nav className="desktop-links" aria-label="Main navigation">
        {links.map((name) => (
          <a href={`#${name.toLowerCase()}`} key={name}>
            {name}
          </a>
        ))}
      </nav>
      <div className="nav-actions">
        <button
          className="motion-control"
          onClick={toggleReduceMotion}
          aria-pressed={reduceMotion}
        >
          Motion: {reduceMotion ? "Low" : "On"}
        </button>
        <button
          ref={trigger}
          className="menu-control"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          className="mobile-links"
          aria-label="Mobile navigation"
        >
          {links.map((name) => (
            <a
              key={name}
              href={`#${name.toLowerCase()}`}
              onClick={() => setOpen(false)}
            >
              {name}
              <span>↗</span>
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { usePortfolioMotion } from "@/context/MotionContext";

const links = [
  { label: "Approach", href: "#approach" },
  { label: "Explore", href: "#explore" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { reduceMotion, toggleReduceMotion } = usePortfolioMotion();
  const trigger = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        trigger.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="future-nav">
      <a className="wordmark" href="#hero" aria-label="Surya — back to top">
        SB<span aria-hidden="true">✳</span>
      </a>
      <nav className="desktop-links" aria-label="Main navigation">
        {links.map((link) => (
          <a key={link.href} href={link.href}>{link.label}</a>
        ))}
      </nav>
      <div className="nav-actions">
        <a href="#contact" className="editorial-nav-contact">
          LET&apos;S TALK <ArrowUpRight size={14} />
        </a>
        <button className="motion-control" type="button" onClick={toggleReduceMotion} aria-pressed={reduceMotion}>
          Motion: {reduceMotion ? "Low" : "On"}
        </button>
        <button
          ref={trigger}
          className="menu-control"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
          type="button"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" className="mobile-links" aria-label="Mobile navigation">
          {[...links, { label: "Journey", href: "#journey" }, { label: "Contact", href: "#contact" }].map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}<span aria-hidden="true">↗</span>
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

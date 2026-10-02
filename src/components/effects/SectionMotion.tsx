"use client";
import { useEffect } from "react";
import { usePortfolioMotion } from "@/context/MotionContext";

// One observer, no scroll listener. Reveals run once; decorative motion pauses offscreen.
export function SectionMotion() {
  const { reduceMotion } = usePortfolioMotion();
  useEffect(() => {
    if (reduceMotion || !("IntersectionObserver" in window)) return;
    const sections = document.querySelectorAll<HTMLElement>("#about, #journey, #skills, #contact, #play");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(({ target, isIntersecting }) => {
        target.classList.toggle("section-in-view", isIntersecting);
        if (isIntersecting) target.classList.add("section-entered");
      });
    }, { threshold: 0.08 });
    sections.forEach(section => { section.classList.add("section-motion"); observer.observe(section); });
    return () => {
      observer.disconnect();
      sections.forEach(section => section.classList.remove("section-motion", "section-in-view"));
    };
  }, [reduceMotion]);
  return null;
}

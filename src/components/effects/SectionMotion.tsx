"use client";
import { useEffect } from "react";
import { usePortfolioMotion } from "@/context/MotionContext";

const SECTION_SELECTOR = "#about, #journey, #projects, #skills, #play, #contact";

export function SectionMotion() {
  const { reduceMotion } = usePortfolioMotion();

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>(SECTION_SELECTOR));

    if (reduceMotion || !("IntersectionObserver" in window)) {
      sections.forEach((section) => section.classList.add("section-entered", "section-in-view"));
      return;
    }

    sections.forEach((section, index) => {
      section.classList.add("section-motion");
      section.dataset.motionDirection = index % 2 === 0 ? "left" : "right";

      const children = section.querySelectorAll<HTMLElement>(
        ":scope > *, :scope > div > .eyebrow, :scope > div > h2, :scope > div > p, :scope .editorial-project"
      );
      children.forEach((child, childIndex) => {
        child.classList.add("scroll-reveal-item");
        child.style.setProperty("--reveal-index", String(Math.min(childIndex, 8)));
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          const section = target as HTMLElement;
          section.classList.toggle("section-in-view", isIntersecting);
          if (isIntersecting) section.classList.add("section-entered");
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      sections.forEach((section) => {
        section.classList.remove("section-motion", "section-in-view");
        delete section.dataset.motionDirection;
      });
    };
  }, [reduceMotion]);

  return null;
}

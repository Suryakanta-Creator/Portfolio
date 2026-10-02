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

    const compact = window.matchMedia("(max-width: 700px)").matches;
    const distance = compact ? 34 : 88;

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

    const animateEntry = (section: HTMLElement) => {
      const direction = section.dataset.motionDirection === "right" ? 1 : -1;
      const children = Array.from(
        section.querySelectorAll<HTMLElement>(
          ":scope > *, :scope > div > .eyebrow, :scope > div > h2, :scope > div > p, :scope .editorial-project"
        )
      ).slice(0, 12);

      section.animate(
        [
          {
            opacity: 0.82,
            transform: `translate3d(${direction * distance}px, 34px, 0) scale(.975)`,
          },
          {
            opacity: 1,
            transform: "translate3d(0, 0, 0) scale(1)",
          },
        ],
        {
          duration: compact ? 620 : 900,
          easing: "cubic-bezier(.16,1,.3,1)",
          fill: "both",
        }
      );

      children.forEach((child, childIndex) => {
        child.animate(
          [
            {
              opacity: 0.08,
              transform: `translate3d(${direction * (compact ? 22 : 52)}px, ${compact ? 22 : 42}px, 0) scale(.955)`,
              filter: compact ? "none" : "blur(4px)",
            },
            {
              opacity: 1,
              transform: "translate3d(0,0,0) scale(1)",
              filter: "blur(0px)",
            },
          ],
          {
            duration: compact ? 560 : 820,
            delay: childIndex * (compact ? 34 : 58),
            easing: "cubic-bezier(.16,1,.3,1)",
            fill: "both",
          }
        );
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          const section = target as HTMLElement;
          const wasVisible = section.classList.contains("section-in-view");

          section.classList.toggle("section-in-view", isIntersecting);

          if (isIntersecting) {
            section.classList.add("section-entered");
            if (!wasVisible) animateEntry(section);
          }
        });
      },
      { threshold: compact ? 0.1 : 0.16, rootMargin: "0px 0px -7% 0px" }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      sections.forEach((section) => {
        section.getAnimations().forEach((animation) => animation.cancel());
        section.classList.remove("section-motion", "section-in-view");
        delete section.dataset.motionDirection;
      });
    };
  }, [reduceMotion]);

  return null;
}

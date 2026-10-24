"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ArrowDownRight, Code2, Film, BrainCircuit } from "lucide-react";
import { usePortfolioMotion } from "@/context/MotionContext";

const chapters = [
  {
    index: "01",
    theme: "BUILD",
    lead: "Make it",
    accent: "work.",
    caption: "DEVELOPMENT / FULL STACK",
    body: "Useful software deserves unforgettable interfaces. I build end-to-end web products, prototypes and playful experiments.",
    Icon: Code2,
    href: "#projects",
    cta: "EXPLORE PROJECTS",
  },
  {
    index: "02",
    theme: "THINK",
    lead: "Make it",
    accent: "smarter.",
    caption: "AI / CREATIVE ENGINEERING",
    body: "I turn machine intelligence into tools that help people learn, create and solve meaningful problems.",
    Icon: BrainCircuit,
    href: "#skills",
    cta: "SEE MY TOOLKIT",
  },
  {
    index: "03",
    theme: "FEEL",
    lead: "Make it",
    accent: "move.",
    caption: "MOTION / VISUAL STORYTELLING",
    body: "Because interaction is a story in motion. Every scroll, transition and tiny detail should have a reason.",
    Icon: Film,
    href: "#contact",
    cta: "LET'S MAKE SOMETHING",
  },
] as const;

export function ScrollGallery() {
  const ref = useRef<HTMLElement>(null);
  const { reduceMotion } = usePortfolioMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.6667%"]);
  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 260]);

  return (
    <section ref={ref} id="process" className={reduceMotion ? "sg-section sg-static" : "sg-section"} aria-labelledby="sg-title">
      <div className="sg-sticky">
        <div className="sg-rail">
          <span className="sg-eyebrow">SURYA BALA / CREATIVE PRACTICE</span>
          <span className="sg-rail-right">AN IDEA IN THREE ACTS <span aria-hidden="true">↗</span></span>
        </div>
        <h2 id="sg-title" className="sr-only">My process: build, think and move</h2>
        <motion.div className="sg-panels" style={reduceMotion ? undefined : { x }}>
          {chapters.map(({ index, theme, lead, accent, caption, body, Icon, href, cta }) => (
            <article className={"sg-panel sg-panel-" + index} key={index}>
              <div className="sg-signal" aria-hidden="true"><span className="sg-ring sg-ring-one" /><span className="sg-ring sg-ring-two" /><Icon className="sg-icon" strokeWidth={0.75} /></div>
              <div className="sg-panel-heading">
                <span className="sg-number">({index}) / {caption}</span>
                <p className="sg-theme">{theme}<span className="sg-flower" aria-hidden="true">✳</span></p>
                <div className="sg-phrase">{lead}<br /><em>{accent}</em></div>
              </div>
              <div className="sg-panel-footer">
                <p>{body}</p>
                <a href={href} className="sg-link">{cta} <ArrowUpRight aria-hidden="true" size={22} /></a>
              </div>
              <span className="sg-watermark" aria-hidden="true">{index}</span>
            </article>
          ))}
        </motion.div>
        <div className="sg-bottom-rail">
          <span>KEEP EXPLORING <ArrowDownRight size={18} aria-hidden="true" /></span>
          <div className="sg-track" aria-hidden="true"><motion.div style={reduceMotion ? { width: "100%" } : { width: progress }} /></div>
          <motion.span className="sg-scroll-star" style={reduceMotion ? undefined : { rotate }} aria-hidden="true">✳</motion.span>
          <span>01 — 03</span>
        </div>
      </div>
    </section>
  );
}

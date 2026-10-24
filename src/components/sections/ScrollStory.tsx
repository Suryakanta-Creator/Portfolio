"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Braces, Clapperboard, Sparkles } from "lucide-react";
import { usePortfolioMotion } from "@/context/MotionContext";

const disciplines = [
  {
    number: "01",
    title: "ENGINEERING",
    caption: "Interfaces with intention.",
    description: "Full-stack experiences designed to work beautifully, not just look beautiful.",
    icon: Braces,
    tags: "NEXT.JS  /  REACT  /  TYPESCRIPT",
  },
  {
    number: "02",
    title: "INTELLIGENCE",
    caption: "Make technology useful.",
    description: "Thoughtful AI-powered tools that solve real problems for real people.",
    icon: Sparkles,
    tags: "AI  /  GEMINI  /  AUTOMATION",
  },
  {
    number: "03",
    title: "MOVEMENT",
    caption: "Make every frame count.",
    description: "Motion design, visual storytelling and interactions that give ideas a pulse.",
    icon: Clapperboard,
    tags: "MOTION  /  INTERACTION  /  EDITING",
  },
];

export function KineticMarquee() {
  const { reduceMotion } = usePortfolioMotion();
  return (
    <div className={"kinetic-marquee " + (reduceMotion ? "kinetic-paused" : "")} aria-label="Design, development, motion and AI">
      <div className="kinetic-marquee-track" aria-hidden="true">
        {Array.from({ length: 4 }, (_, index) => (
          <span key={index}>
            DESIGN <b>✳</b> DEVELOPMENT <b>✳</b> MOTION <b>✳</b> INTELLIGENCE <b>✳</b>
          </span>
        ))}
      </div>
    </div>
  );
}

export function ScrollStory() {
  const ref = useRef<HTMLElement>(null);
  const { reduceMotion } = usePortfolioMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const firstX = useTransform(scrollYProgress, [0, 0.65, 1], ["-10vw", "0vw", "6vw"]);
  const secondX = useTransform(scrollYProgress, [0, 0.65, 1], ["9vw", "0vw", "-5vw"]);
  const lineReveal = useTransform(scrollYProgress, [0.08, 0.45], [0.18, 1]);
  const bloom = useTransform(scrollYProgress, [0, 1], [0.75, 1.3]);
  const copyY = useTransform(scrollYProgress, [0.05, 0.7], [66, 0]);
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="approach" ref={ref} className="lenis-story" aria-labelledby="lenis-story-heading">
      <div className="lenis-story-sticky">
        <div className="lenis-story-ambient" aria-hidden="true">
          <motion.div className="lenis-story-ellipse" style={reduceMotion ? undefined : { scale: bloom }} />
        </div>
        <div className="lenis-story-heading-top">
          <span className="lenis-section-index">01 / A DIFFERENT POINT OF VIEW</span>
          <span>AN IDEA IS ONLY THE BEGINNING ↗</span>
        </div>
        <div className="lenis-story-main">
          <motion.h2 id="lenis-story-heading" className="lenis-story-headline" style={reduceMotion ? undefined : { opacity: lineReveal }}>
            <motion.span className="lenis-story-line" style={reduceMotion ? undefined : { x: firstX }}>GOOD WORK</motion.span>
            <motion.span className="lenis-story-line lenis-story-line-secondary" style={reduceMotion ? undefined : { x: secondX }}>SHOULD MOVE</motion.span>
            <span className="lenis-story-line"><i>PEOPLE.</i><span className="lenis-asterisk" aria-hidden="true">✳</span></span>
          </motion.h2>
        </div>
        <motion.div className="lenis-story-foot" style={reduceMotion ? undefined : { y: copyY }}>
          <p>Technology can be useful.<br />Design can be memorable.<br /><strong>I like it when they meet.</strong></p>
          <a href="#explore" className="lenis-text-link">SEE WHAT I MAKE <ArrowDownRight size={20} /></a>
        </motion.div>
        <div className="lenis-story-progress" aria-hidden="true">
          <motion.div style={reduceMotion ? { scaleX: 1 } : { scaleX: progressScale }} />
        </div>
      </div>
    </section>
  );
}

export function WhatIDo() {
  const { reduceMotion } = usePortfolioMotion();

  return (
    <section className="lenis-capabilities" aria-labelledby="lenis-capabilities-heading">
      <div className="lenis-cap-intro">
        <div>
          <span className="lenis-section-index">03 / HOW I MAKE THINGS</span>
          <h2 id="lenis-capabilities-heading">ONE MIND.<br /><em>THREE MODES.</em></h2>
        </div>
        <p>Somewhere between engineering and imagination is where my favorite work happens. These are the three lenses I bring to every idea.</p>
      </div>
      <div className="lenis-cap-list">
        {disciplines.map((item) => {
          const Icon = item.icon;
          return (
            <motion.article
              className="lenis-cap-row"
              key={item.number}
              initial={reduceMotion ? false : { opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="lenis-cap-number">/{item.number}</span>
              <div className="lenis-cap-copy">
                <h3>{item.title}</h3>
                <span className="lenis-cap-caption">{item.caption}</span>
              </div>
              <div className="lenis-cap-detail"><p>{item.description}</p><span>{item.tags}</span></div>
              <span className="lenis-cap-icon"><Icon strokeWidth={1.2} size={32} aria-hidden="true" /></span>
            </motion.article>
          );
        })}
      </div>
      <a href="#projects" className="lenis-end-link">TAKE A LOOK AT THE WORK <ArrowUpRight size={19} /></a>
    </section>
  );
}

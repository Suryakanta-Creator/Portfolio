"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, FileDown } from "lucide-react";
import SculptureHero from "@/components/ui/liquid-sculpture-hero";
import { socialLinks } from "@/data/portfolio.config";
import { usePortfolioMotion } from "@/context/MotionContext";

/**
 * Editorial, art-directed introduction.
 * The WebGL sculpture remains a progressive enhancement behind accessible HTML text.
 */
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { reduceMotion } = usePortfolioMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const upperX = useTransform(scrollYProgress, [0, 1], ["0vw", "-12vw"]);
  const lowerX = useTransform(scrollYProgress, [0, 1], ["0vw", "9vw"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0vh", "-15vh"]);
  const fade = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.95, 0.22]);

  return (
    <section ref={ref} id="hero" className="lenis-inspired-hero" aria-label="Surya creative developer introduction">
      <div className="lenis-hero-grid" aria-hidden="true" />
      <div className="lenis-art-field">
        <SculptureHero
          src="/portrait.png"
          darkSrc="/portrait.png"
          mobileSrc="/portrait.png"
          mobileDarkSrc="/portrait.png"
          imageAlt="Interactive particle portrait of Suryakanta Bala"
          showNav={false}
          themeToggle={false}
          theme="dark"
          showCredit={true}
          height="100%"
          background="#101a1b"
          darkBackground="#101a1b"
          textColor="#e9f2ee"
          accentColor="#a9e4c8"
          headingFont="var(--font-inter), system-ui, sans-serif"
          bodyFont="var(--font-inter), system-ui, sans-serif"
          loadFonts={false}
          backdropText=""
          eyebrow=""
          headline=""
          headlineAccent=""
          body=""
          primaryCta={{label:"",href:"#projects"}}
          secondaryCta={{label:"",href:"#contact"}}
          hint=""
          hintTouch=""
          sculptureScale={0.86}
          mobileSculptureScale={0.9}
          sculptureX={6}
          sculptureY={-1}
          particleDensity={reduceMotion ? 0.15 : 0.42}
          radius={190}
          strength={0.94}
          liquid={1}
          intro={!reduceMotion}
          ambient={false}
          interactive={!reduceMotion}
        />
      </div>

      <div className="lenis-hero-top" aria-hidden="true">
        <span><i className="lenis-live-dot" /> Independent creative developer</span>
        <span>Odisha, India <span className="lenis-separator">/</span> Est. 2026</span>
      </div>

      <motion.div
        className="lenis-hero-center"
        style={reduceMotion ? undefined : { y: textY, opacity: fade }}
      >
        <span className="lenis-hero-kicker">01 — Code, visual craft & a little curiosity</span>
        <h1 className="lenis-hero-title">
          <motion.span className="lenis-hero-line lenis-solid" style={reduceMotion ? undefined : { x: upperX }}>
            SURYA<span className="lenis-title-star" aria-hidden="true">✳</span>
          </motion.span>
          <motion.span className="lenis-hero-line lenis-outline" style={reduceMotion ? undefined : { x: lowerX }}>
            IN MOTION.
          </motion.span>
        </h1>
      </motion.div>

      <div className="lenis-hero-bottom">
        <div className="lenis-hero-intro">
          <span className="lenis-mini-label">DEVELOPER / MOTION DESIGNER / AI BUILDER</span>
          <p>I turn big ideas into <em>digital experiences</em> you can feel.</p>
        </div>
        <div className="lenis-hero-actions">
          <a href="#explore" className="lenis-round-cta" aria-label="Explore selected work">
            <ArrowDownRight size={27} strokeWidth={1.5} />
          </a>
          <a href="/Suryakanta_Bala_Resume_Final.pdf" target="_blank" rel="noopener noreferrer" className="lenis-hero-action">
            Resume <FileDown size={14} />
          </a>
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="Visit GitHub profile" className="lenis-hero-action">
            GitHub <Github size={14} />
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Visit LinkedIn profile" className="lenis-hero-action">
            LinkedIn <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      <a className="lenis-edge-scroll" href="#approach" aria-label="Scroll to my approach">
        SCROLL TO FEEL THE FLOW <ArrowDownRight size={17} />
      </a>
    </section>
  );
}

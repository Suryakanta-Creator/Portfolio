"use client";

import Image from "next/image";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { ArrowDown, ArrowUpRight, FileText, Linkedin, Mail, Instagram } from "lucide-react";
import { socialLinks } from "@/data/portfolio.config";
import { BubbleField } from "@/components/effects/BubbleField";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref);
  return (
    <section ref={ref} id="hero" className={`future-hero ${inView ? "is-visible" : ""}`}>
      <BubbleField />
      <div className="hero-topline"><span>INDEPENDENT DEVELOPER</span><span>CUTTACK, INDIA ↗</span></div>
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" /> A LITTLE CURIOUS. ALWAYS BUILDING.</p>
        <h1><span>Suryakanta</span><span className="hero-lastname">Bala<span className="hero-period">.</span></span></h1>
        <div className="hero-intro"><p>I turn ideas into<br /><strong>experiences you can feel.</strong></p><a href="#projects" className="round-link" aria-label="Explore selected projects"><ArrowDown size={26} /></a></div>
        <a className="resume-button" href="/Suryakanta_Bala_Resume_Final.pdf" target="_blank" rel="noopener noreferrer"><FileText size={17} /> View my resume <ArrowUpRight size={17} /></a>
        <div className="hero-socials" aria-label="Connect with Surya">
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={18} /><span>LinkedIn</span><ArrowUpRight size={14} /></a>
          {socialLinks.instagram && <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer"><Instagram size={18} /><span>Instagram</span><ArrowUpRight size={14} /></a>}
          <a href="#contact"><Mail size={18} /><span>Let’s connect</span><ArrowUpRight size={14} /></a>
        </div>
      </div>
      <div className="hero-portrait-scene">
        <div className="portrait-orbit" aria-hidden="true" />
        <div className="portrait-diamond" aria-hidden="true" />
        <div className="portrait-frame"><Image src="/portrait.png" alt="Suryakanta Bala" fill priority sizes="(max-width: 700px) 80vw, (max-width: 1100px) 42vw, 420px" /></div>
        <div className="portrait-caption"><span className="status-dot" /> LEARNING. BUILDING. EVOLVING.</div>
      </div>
      <div className="hero-bottom"><span>FULL-STACK DEVELOPMENT<br />& AI-POWERED APPLICATIONS</span><a href={socialLinks.github} target="_blank" rel="noopener noreferrer">GITHUB <ArrowUpRight size={15} /></a><span className="hero-scroll-note">SCROLL TO EXPLORE ↓</span></div>
    </section>
  );
}

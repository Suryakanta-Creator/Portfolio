"use client";

import SculptureHero from "@/components/ui/liquid-sculpture-hero";
import { ArrowDownRight, FileDown, Github, Linkedin } from "lucide-react";
import { socialLinks } from "@/data/portfolio.config";
import { usePortfolioMotion } from "@/context/MotionContext";

export function Hero() {
  const { reduceMotion } = usePortfolioMotion();
  return (
    <section id="hero" aria-label="Introduction" className="relative isolate overflow-hidden bg-[#090d14]">
      <SculptureHero
        src="/portrait.png" darkSrc="/portrait.png" mobileSrc="/portrait.png" mobileDarkSrc="/portrait.png"
        imageAlt="Interactive particle portrait of Suryakanta Bala"
        theme="dark" themeToggle={false} showNav={false} showCredit
        height="100svh" background="#eef5ef" darkBackground="#090d14"
        textColor="#f4f6f4" accentColor="#8af3cc"
        headingFont="var(--font-inter), system-ui, sans-serif"
        accentFont="Georgia, serif"
        bodyFont="var(--font-inter), system-ui, sans-serif"
        loadFonts={false} backdropText="SURYA"
        eyebrow="CREATIVE DEVELOPER / ODISHA, INDIA"
        headline={"Hi, I'm Surya.\nIdeas in motion."}
        headlineAccent="Ideas in motion."
        body="I blend full-stack engineering, practical AI and motion design to create digital experiences that feel alive."
        primaryCta={{ label: "Explore my work", href: "#explore" }}
        secondaryCta={{ label: "Let's collaborate", href: "#contact" }}
        hint="Move to reshape the portrait" hintTouch="Touch the portrait"
        sculptureScale={0.83} mobileSculptureScale={0.94}
        particleDensity={reduceMotion ? 0.18 : 0.45} dotSize={1.1}
        radius={185} strength={0.9} returnSpeed={1.1}
        interactive={!reduceMotion} ambient={false} intro={!reduceMotion}
      />
      <div className="pointer-events-none absolute left-5 right-5 top-[88px] z-[5] flex flex-wrap items-center justify-between gap-3 text-[10px] font-medium uppercase tracking-[0.23em] text-white/60 md:left-12 md:right-12">
        <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#8af3cc] shadow-[0_0_18px_#8af3cc]" /> Building thoughtful digital experiences</span>
        <span className="hidden md:inline">DESIGN × CODE × AI</span>
      </div>
      <div className="absolute bottom-4 left-5 z-[6] flex flex-wrap items-center gap-2 md:bottom-5 md:left-12">
        <a href={socialLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" className="grid h-9 w-9 place-items-center rounded-full border border-white/25 bg-[#090d14]/70 text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:border-[#8af3cc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#8af3cc]"><Github size={16} /></a>
        <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="grid h-9 w-9 place-items-center rounded-full border border-white/25 bg-[#090d14]/70 text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:border-[#8af3cc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#8af3cc]"><Linkedin size={16} /></a>
        <a href="/Suryakanta_Bala_Resume_Final.pdf" target="_blank" rel="noreferrer" className="inline-flex h-9 items-center gap-2 rounded-full border border-white/25 bg-[#090d14]/70 px-4 text-xs text-white backdrop-blur-md transition hover:border-[#8af3cc]">Resume <FileDown size={15} /></a>
      </div>
      <a href="#explore" aria-label="Scroll to featured work" className="absolute bottom-6 right-6 z-[6] hidden items-center gap-2 text-[11px] uppercase tracking-[0.17em] text-white/75 transition hover:text-[#8af3cc] md:flex md:right-12">
        Scroll to explore <ArrowDownRight size={18} />
      </a>
    </section>
  );
}

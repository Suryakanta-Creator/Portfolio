import React from "react";
import { MemoryGarden } from "@/components/game/MemoryGarden";
import { SectionMotion } from "@/components/effects/SectionMotion";
import { CursorEffect } from "@/components/effects/CursorEffect";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { Journey } from "@/components/journey/Journey";
import { Projects } from "@/components/projects/Projects";
import { Skills } from "@/components/skills/Skills";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-charcoal-950 text-warmWhite selection:bg-cyan-500/20 selection:text-white">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      {/* Fixed Sticky Header Navigation */}
      <Navbar />
      <CursorEffect />
      <SectionMotion />

      {/* Main Content Sections */}
      <main className="flex-1" id="main-content">
        <Hero />
        <About />
        <Journey />
        <Projects />
        <Skills />
        <MemoryGarden />
        <Contact />
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}

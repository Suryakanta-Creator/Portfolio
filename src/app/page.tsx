import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { CommandPalette } from "@/components/layout/CommandPalette";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { Journey } from "@/components/journey/Journey";
import { Skills } from "@/components/skills/Skills";
import { Projects } from "@/components/projects/Projects";
import { GitHubSection } from "@/components/github/GitHubSection";
import { Playground } from "@/components/playground/Playground";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-charcoal-950 text-warmWhite selection:bg-cyan-500/20 selection:text-white">
      <Navbar />
      <CommandPalette />

      <main className="flex-1" id="main-content">
        <Hero />
        <About />
        <Journey />
        <Skills />
        <Projects />
        <GitHubSection />
        <Playground />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { CommandPalette } from "@/components/layout/CommandPalette";
import { CinematicBackground } from "@/components/scene/CinematicBackground";
import { SceneSection } from "@/components/scene/SceneSection";
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
    <div className="relative min-h-screen overflow-clip theme-page">
      <CinematicBackground />
      <Navbar />
      <CommandPalette />

      <main className="relative z-10" id="main-content">
        <Hero />
        <SceneSection accent="cyan" index={0}><About /></SceneSection>
        <Journey />
        <SceneSection accent="violet" index={1}><Skills /></SceneSection>
        <Projects />
        <GitHubSection />
        <SceneSection accent="amber" index={2}><Playground /></SceneSection>
        <Contact />
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}

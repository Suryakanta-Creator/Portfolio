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
    <div className="relative min-h-screen overflow-clip bg-[#02050a] text-warmWhite selection:bg-cyan-500/20 selection:text-white">
      <CinematicBackground />
      <Navbar />
      <CommandPalette />

      <main className="relative z-10" id="main-content">
        <Hero />
        <SceneSection accent="cyan" index={0}><About /></SceneSection>
        <SceneSection accent="violet" index={1}><Journey /></SceneSection>
        <SceneSection accent="emerald" index={2}><Skills /></SceneSection>
        <SceneSection accent="cyan" index={3}><Projects /></SceneSection>
        <SceneSection accent="violet" index={4}><GitHubSection /></SceneSection>
        <SceneSection accent="amber" index={5}><Playground /></SceneSection>
        <SceneSection accent="cyan" index={6}><Contact /></SceneSection>
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}

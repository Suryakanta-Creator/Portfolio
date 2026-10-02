"use client";

import { motion } from "framer-motion";
import { Braces, Code2, Database, Sparkles, GitBranch, Cpu, Layers3, TerminalSquare } from "lucide-react";
import { usePortfolioMotion } from "@/context/MotionContext";

const tools = [
  { label: "Java", mark: "J", Icon: Braces },
  { label: "TypeScript", mark: "TS", Icon: Code2 },
  { label: "React", mark: "R", Icon: Layers3 },
  { label: "Next.js", mark: "N", Icon: TerminalSquare },
  { label: "Supabase", mark: "S", Icon: Database },
  { label: "GitHub", mark: "G", Icon: GitBranch },
  { label: "AI / Gemini", mark: "AI", Icon: Sparkles },
  { label: "APIs", mark: "API", Icon: Cpu },
];

export function Skills() {
  const { reduceMotion } = usePortfolioMotion();

  return (
    <section id="skills" className="skills-editorial toolbox-stage">
      <div className="toolbox-heading">
        <span className="eyebrow">04 / MY TOOLBOX</span>
        <h2>Things I use to turn<br /><em>ideas into interfaces.</em></h2>
        <p>Languages, frameworks, data tools and AI—kept close, mixed often.</p>
      </div>

      <div className="tool-orbit" aria-label="Technology toolbox">
        <div className="tool-orbit-core" aria-hidden="true">
          <span>BUILD</span><strong>+</strong><span>LEARN</span>
        </div>
        {tools.map((tool, index) => (
          <motion.article
            className="tool-tile"
            key={tool.label}
            initial={reduceMotion ? false : { opacity: 0, scale: .72, y: 32, rotate: index % 2 ? 5 : -5 }}
            whileInView={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, amount: .35 }}
            transition={{ duration: .58, delay: index * .055, ease: [0.16, 1, 0.3, 1] }}
            whileHover={reduceMotion ? undefined : { y: -8, scale: 1.035, rotate: index % 2 ? 1 : -1 }}
          >
            <span className="tool-glyph" aria-hidden="true"><tool.Icon size={23} strokeWidth={1.45} /></span>
            <strong>{tool.mark}</strong>
            <span>{tool.label}</span>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

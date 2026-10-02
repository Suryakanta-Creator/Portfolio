"use client";

import { Braces, Code2, Database, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { usePortfolioMotion } from "@/context/MotionContext";

const groups = [
  { name: "Languages", items: "Java / TypeScript / JavaScript / SQL", Icon: Braces },
  { name: "Interfaces", items: "React / Next.js / HTML / CSS / Tailwind", Icon: Code2 },
  { name: "Data & tools", items: "Supabase / Git / GitHub / REST APIs", Icon: Database },
  { name: "Exploring", items: "AI integrations / Motion / Accessible interfaces", Icon: Sparkles },
];

export function Skills() {
  const { reduceMotion } = usePortfolioMotion();
  return (
    <section id="skills" className="skills-editorial">
      <span className="eyebrow">04 / MY TOOLBOX</span>
      <h2>The tools change.<br />The <em>curiosity</em> stays.</h2>
      <div>
        {groups.map((g, i) => (
          <motion.article key={g.name} initial={reduceMotion ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.45 }} transition={{ duration: 0.45, delay: i * 0.06 }}>
            <span className="eyebrow">0{i + 1}</span>
            <span className="tool-icon" aria-hidden="true"><g.Icon size={24} strokeWidth={1.5} /></span>
            <div className="tool-copy"><h3>{g.name}</h3><p>{g.items}</p></div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

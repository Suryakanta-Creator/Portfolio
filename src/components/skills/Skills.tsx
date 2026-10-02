"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { usePortfolioMotion } from "@/context/MotionContext";

type Brand =
  | "java"
  | "typescript"
  | "react"
  | "nextjs"
  | "supabase"
  | "github"
  | "gemini"
  | "tailwind";

const tools: Array<{ name: string; brand: Brand; color: string; note: string }> = [
  { name: "Java", brand: "java", color: "#F89820", note: "Core programming" },
  { name: "TypeScript", brand: "typescript", color: "#3178C6", note: "Typed web apps" },
  { name: "React", brand: "react", color: "#61DAFB", note: "Interactive interfaces" },
  { name: "Next.js", brand: "nextjs", color: "#F4F4F4", note: "Full-stack React" },
  { name: "Supabase", brand: "supabase", color: "#3ECF8E", note: "Data + auth" },
  { name: "GitHub", brand: "github", color: "#FFFFFF", note: "Ship + collaborate" },
  { name: "Gemini", brand: "gemini", color: "#9B72F7", note: "AI integrations" },
  { name: "Tailwind", brand: "tailwind", color: "#38BDF8", note: "Fast UI styling" },
];

function BrandMark({ brand }: { brand: Brand }) {
  if (brand === "react") {
    return (
      <svg viewBox="0 0 64 64" role="img" aria-label="React logo" fill="none" stroke="currentColor" strokeWidth="2.7">
        <circle cx="32" cy="32" r="5.2" fill="currentColor" stroke="none" />
        <ellipse cx="32" cy="32" rx="25" ry="9.5" />
        <ellipse cx="32" cy="32" rx="25" ry="9.5" transform="rotate(60 32 32)" />
        <ellipse cx="32" cy="32" rx="25" ry="9.5" transform="rotate(120 32 32)" />
      </svg>
    );
  }

  if (brand === "typescript") {
    return (
      <svg viewBox="0 0 64 64" role="img" aria-label="TypeScript logo">
        <rect x="5" y="5" width="54" height="54" rx="9" fill="currentColor" />
        <path d="M16 31h27v6H32v20h-7V37h-9zm30-.5c4.2 0 7.2 1.4 9.2 3.6l-4 4.1c-1.5-1.4-3-2-5.2-2-1.8 0-3 .7-3 1.8 0 1.4 1.2 1.8 4.5 2.8 5.4 1.6 8.6 3.8 8.6 8.7 0 5.2-4.3 8.4-10.6 8.4-5.1 0-9-1.7-11.5-4.4l4-4.2c1.9 1.8 4.1 2.8 7 2.8 2.3 0 3.8-.8 3.8-2.2 0-1.5-1.3-2.1-4.8-3.1-5.2-1.5-8.1-3.8-8.1-8.4 0-4.9 4.1-7.9 10.1-7.9z" fill="#fff" />
      </svg>
    );
  }

  if (brand === "nextjs") {
    return (
      <svg viewBox="0 0 64 64" role="img" aria-label="Next.js logo">
        <circle cx="32" cy="32" r="27" fill="currentColor" />
        <path d="M21 45V20h5l17 25h-6L27 30v15zm21-25h4v16l-4-6z" fill="#0b1511" />
      </svg>
    );
  }

  if (brand === "supabase") {
    return (
      <svg viewBox="0 0 64 64" role="img" aria-label="Supabase logo" fill="currentColor">
        <path d="M35 5 13 35h20l-4 24 22-32H32z" />
        <path d="M13 35 31 10l-3 25z" opacity=".48" />
      </svg>
    );
  }

  if (brand === "github") {
    return (
      <svg viewBox="0 0 24 24" role="img" aria-label="GitHub logo" fill="currentColor">
        <path d="M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56v-2.2c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.78 1.2 1.78 1.2 1.04 1.77 2.72 1.26 3.38.96.1-.75.4-1.26.74-1.55-2.57-.29-5.28-1.29-5.28-5.73 0-1.27.45-2.3 1.2-3.12-.12-.3-.52-1.48.11-3.08 0 0 .98-.31 3.16 1.19a10.9 10.9 0 0 1 5.75 0c2.18-1.5 3.16-1.19 3.16-1.19.63 1.6.23 2.78.11 3.08.75.82 1.2 1.85 1.2 3.12 0 4.45-2.72 5.43-5.3 5.72.42.36.79 1.07.79 2.16v3.2c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" />
      </svg>
    );
  }

  if (brand === "gemini") {
    return (
      <svg viewBox="0 0 64 64" role="img" aria-label="Gemini logo" fill="currentColor">
        <path d="M32 5c2.7 16.5 10.5 24.3 27 27-16.5 2.7-24.3 10.5-27 27-2.7-16.5-10.5-24.3-27-27C21.5 29.3 29.3 21.5 32 5Z" />
      </svg>
    );
  }

  if (brand === "tailwind") {
    return (
      <svg viewBox="0 0 64 64" role="img" aria-label="Tailwind CSS logo" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round">
        <path d="M8 28c6-10 13-15 22-15 13 0 14 10 21 10 4 0 7-2 10-6-4 10-11 15-21 15-12 0-14-10-21-10-4 0-7 2-11 6Z" />
        <path d="M8 47c6-10 13-15 22-15 13 0 14 10 21 10 4 0 7-2 10-6-4 10-11 15-21 15-12 0-14-10-21-10-4 0-7 2-11 6Z" opacity=".75" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 64 64" role="img" aria-label="Java logo" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 13c8 5-8 9 3 15M34 8c10 7-10 11 2 19" strokeWidth="3.1" />
      <path d="M18 33h27c0 8-6 14-14 14s-13-5-13-14Z" strokeWidth="3.4" />
      <path d="M45 36h4c7 0 7 8 0 10h-7M17 52c11 4 24 4 34 0" strokeWidth="3" />
    </svg>
  );
}

export function Skills() {
  const { reduceMotion } = usePortfolioMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { amount: 0.18 });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headingX = useTransform(scrollYProgress, [0, 0.45, 1], [-55, 0, 42]);
  const gridY = useTransform(scrollYProgress, [0, 0.5, 1], [90, 0, -80]);
  const ringRotate = useTransform(scrollYProgress, [0, 1], [-18, 28]);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="skills-editorial toolbox-stage relative overflow-hidden"
    >
      <motion.div
        className="toolbox-heading relative z-[2]"
        style={reduceMotion ? undefined : { x: headingX }}
      >
        <span className="eyebrow">04 / MY TOOLBOX</span>
        <h2>
          Real tools.
          <br />
          <em>Real builds.</em>
        </h2>
        <p>
          The technologies I actually use—shown as living SVG stickers instead
          of generic interface icons.
        </p>
      </motion.div>

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[58%] z-0 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-100/10 md:h-[720px] md:w-[720px]"
        style={reduceMotion ? undefined : { rotate: ringRotate }}
      >
        <div className="absolute inset-[14%] rounded-full border border-dashed border-emerald-100/10" />
        <div className="absolute inset-[31%] rounded-full border border-emerald-100/10" />
      </motion.div>

      <motion.div
        className="relative z-[2] mt-14 grid grid-cols-2 gap-3 sm:grid-cols-2 md:mt-20 md:grid-cols-4 md:gap-5"
        style={reduceMotion ? undefined : { y: gridY }}
      >
        {tools.map((tool, index) => (
          <motion.article
            key={tool.name}
            className="group relative min-h-[170px] overflow-hidden rounded-[24px] border bg-[#12251f]/90 p-4 shadow-[0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur-md md:min-h-[205px] md:p-5"
            style={{ borderColor: `${tool.color}38` }}
            initial={reduceMotion ? false : { opacity: 0, y: 58, scale: 0.86, rotate: index % 2 === 0 ? -7 : 7 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.28 }}
            transition={{ duration: 0.72, delay: index * 0.065, ease: [0.16, 1, 0.3, 1] }}
            whileHover={reduceMotion ? undefined : { y: -12, scale: 1.035 }}
          >
            <span className="pointer-events-none absolute -left-16 top-0 h-full w-12 -skew-x-12 bg-white/10 transition-transform duration-700 group-hover:translate-x-[320px]" />

            <motion.div
              className="mb-8 flex h-[76px] w-[76px] items-center justify-center rounded-[22px] border bg-black/20 p-4 shadow-[0_12px_35px_rgba(0,0,0,0.25)] md:h-[92px] md:w-[92px] md:p-5"
              style={{ color: tool.color, borderColor: `${tool.color}40` }}
              animate={
                reduceMotion || !inView
                  ? { y: 0, rotate: 0, scale: 1 }
                  : {
                      y: [0, -11, 0],
                      rotate: [0, index % 2 === 0 ? -3.5 : 3.5, 0],
                      scale: [1, 1.045, 1],
                    }
              }
              transition={{
                duration: 3.2 + (index % 3) * 0.45,
                repeat: reduceMotion ? 0 : Infinity,
                ease: "easeInOut",
                delay: index * 0.12,
              }}
            >
              <BrandMark brand={tool.brand} />
            </motion.div>

            <div className="relative z-[2]">
              <h3 className="text-[20px] font-medium tracking-[-0.035em] text-[#edf7f0] md:text-[24px]">
                {tool.name}
              </h3>
              <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.12em] text-[#91ac9d] md:text-[10px]">
                {tool.note}
              </p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

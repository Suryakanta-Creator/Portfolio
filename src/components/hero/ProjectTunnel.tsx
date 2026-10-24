"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform, type MotionValue } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { portfolioConfig, type ProjectItem } from "@/data/portfolio.config";
import { ProjectVisual } from "@/components/projects/ProjectVisuals";
import { usePortfolioMotion } from "@/context/MotionContext";

const projects = portfolioConfig.projects;
type Stage = { width: number; height: number; mobile: boolean };
const spring = { stiffness: 65, damping: 28, mass: 0.65 };

function usePointerParallax(active: boolean) {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, spring);
  const y = useSpring(rawY, spring);
  useEffect(() => {
    if (!active) return;
    const move = (event: PointerEvent) => {
      rawX.set((event.clientX / window.innerWidth - 0.5) * 2);
      rawY.set((event.clientY / window.innerHeight - 0.5) * 2);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [active, rawX, rawY]);
  return { x, y };
}

function TunnelCard({ project, index, progress, pointer, stage }: {
  project: ProjectItem;
  index: number;
  progress: MotionValue<number>;
  pointer: { x: MotionValue<number>; y: MotionValue<number> };
  stage: Stage;
}) {
  const start = 0.02 + (index / projects.length) * 0.40;
  const local = useTransform(progress, [start, start + 0.58], [0, 1]);
  const z = useTransform(local, [0, 1], [stage.mobile ? -900 : -1450, stage.mobile ? 190 : 550]);
  const opacity = useTransform(local, [0, 0.18, 0.78, 0.98], [0, 1, 1, 0]);
  const angle = index * 2.399963229728653;
  const baseX = Math.cos(angle) * stage.width * (0.24 + (index % 2) * 0.1);
  const baseY = Math.sin(angle) * stage.height * (0.20 + (index % 3) * 0.035);
  const tilt = (index % 2 ? -1 : 1) * (5 + index * 2);
  const transform = useTransform([z, pointer.x, pointer.y], ([depth, mx, my]: number[]) =>
    `translate3d(calc(-50% + ${baseX - mx * 32}px), calc(-50% + ${baseY - my * 24}px), ${depth}px) rotate(${tilt}deg)`
  );
  const width = stage.mobile ? Math.min(200, stage.width * 0.52) : Math.min(350, Math.max(235, stage.width * 0.255));
  return (
    <motion.a
      href={project.liveUrl}
      target="_blank" rel="noopener noreferrer"
      aria-label={`Explore ${project.title} live project (opens in a new tab)`}
      style={{ width, transform, opacity, zIndex: index + 2 }}
      className="group pointer-events-auto absolute left-1/2 top-1/2 block aspect-[4/5] select-none will-change-transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#8af3cc]"
    >
      <div className="relative h-full w-full overflow-hidden rounded-[22px] border border-white/20 bg-[#152126] shadow-[0_34px_100px_rgba(0,0,0,.58)] transition-transform duration-500 group-hover:scale-[1.045] group-hover:border-[#8af3cc]/70">
        <div className="absolute inset-0 [&_.project-art]:!h-full [&_.project-art]:!min-h-0 [&_.project-art]:!rounded-none [&_.project-art]:!border-0 [&_.art-caption]:!text-[8px] [&_.art-title]:!text-[clamp(20px,3vw,35px)]">
          <ProjectVisual type={project.placeholderType} />
        </div>
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-[#071116]/95 via-[#071116]/70 to-transparent p-5 pt-20 text-white">
          <div>
            <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-[#8af3cc]">0{index + 1} / {project.category}</span>
            <h3 className="mt-2 font-sans text-xl font-semibold tracking-tight">{project.title}</h3>
          </div>
          <ArrowUpRight size={20} className="shrink-0" />
        </div>
      </div>
    </motion.a>
  );
}

export function ProjectTunnel() {
  const sectionRef = useRef<HTMLElement>(null);
  const { reduceMotion } = usePortfolioMotion();
  const [stage, setStage] = useState<Stage>({ width: 1440, height: 900, mobile: false });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const progress = useSpring(scrollYProgress, { stiffness: 70, damping: 26, restDelta: 0.001 });
  const pointer = usePointerParallax(!reduceMotion && !stage.mobile);
  const titleScale = useTransform(progress, [0, 0.5, 1], [0.85, 1.05, 1.25]);
  const titleOpacity = useTransform(progress, [0, 0.17, 0.78, 1], [0.55, 1, 1, 0.25]);
  const hintOpacity = useTransform(progress, [0, 0.2], [1, 0]);

  useEffect(() => {
    const resize = () => setStage({ width: window.innerWidth, height: window.innerHeight, mobile: window.innerWidth < 768 });
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  if (reduceMotion) {
    return (
      <section id="explore" aria-labelledby="explore-title" className="bg-[#0d161b] px-6 py-24 text-[#edf7f0] md:px-12">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#8af3cc]">02 / Selected explorations</p>
        <h2 id="explore-title" className="my-6 text-5xl font-semibold tracking-[-0.06em] md:text-7xl">Projects in perspective.</h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {projects.map(project => (
            <a key={project.id} href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="group overflow-hidden rounded-2xl border border-white/15 bg-[#132227] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#8af3cc]">
              <div className="aspect-[4/3] overflow-hidden"><ProjectVisual type={project.placeholderType} /></div>
              <div className="flex items-center justify-between gap-2 p-5"><span>{project.title}</span><ArrowUpRight size={18} /></div>
            </a>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} id="explore" aria-labelledby="explore-title" className="relative h-[225svh] bg-[#0d161b] text-[#eef6f1]">
      <div className="sticky top-0 isolate flex h-[100svh] w-full items-center justify-center overflow-hidden" style={{ perspective: stage.mobile ? "900px" : "1200px" }}>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(100,227,185,.11),transparent_58%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(rgba(166,225,204,.35)_1px,transparent_1px)] [background-size:30px_30px] [mask-image:radial-gradient(ellipse_70%_70%_at_center,black,transparent)]" />
        <div aria-hidden="true" className="pointer-events-none absolute h-[45vmin] w-[45vmin] rounded-full border border-[#8af3cc]/15" />
        <div aria-hidden="true" className="pointer-events-none absolute h-[75vmin] w-[75vmin] rounded-full border border-dashed border-white/10" />
        <motion.div className="pointer-events-none relative z-0 max-w-4xl px-6 text-center" style={{ scale: titleScale, opacity: titleOpacity }}>
          <span className="font-mono text-[10px] uppercase tracking-[0.34em] text-[#8af3cc]">02 / Selected explorations</span>
          <h2 id="explore-title" className="mt-4 text-[clamp(3.5rem,9vw,9.3rem)] font-semibold leading-[0.89] tracking-[-0.085em]">
            PROJECTS<br /><span className="font-light italic text-[#9be4c9]">IN MOTION.</span>
          </h2>
          <p className="mx-auto mt-7 max-w-sm text-sm leading-relaxed text-[#f1f8f4]/65 md:text-base">A closer look at what I build. Follow the scroll to travel through my work.</p>
        </motion.div>
        <div className="pointer-events-none absolute inset-0 z-10" style={{ transformStyle: "preserve-3d" }}>
          {projects.map((project, index) => <TunnelCard key={project.id} project={project} index={index} progress={progress} pointer={pointer} stage={stage} />)}
        </div>
        <div className="pointer-events-none absolute left-6 top-24 z-20 font-mono text-[10px] uppercase tracking-[0.22em] text-white/55 md:left-12">Work / 2026</div>
        <motion.p className="pointer-events-none absolute bottom-10 z-20 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.23em] text-white/60" style={{ opacity: hintOpacity }}>
          Scroll to travel <ArrowDownRight size={16} />
        </motion.p>
        <a href="#projects" className="absolute bottom-10 right-6 z-30 hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[0.17em] text-[#8af3cc] hover:underline md:flex md:right-12">All projects <ArrowUpRight size={17} /></a>
      </div>
    </section>
  );
}

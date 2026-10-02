"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { portfolioConfig, ProjectItem } from "@/data/portfolio.config";
import { usePortfolioMotion } from "@/context/MotionContext";
import { ProjectVisual } from "./ProjectVisuals";
import { ProjectModal } from "./ProjectModal";
function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: ProjectItem;
  index: number;
  onOpen: (element: HTMLButtonElement) => void;
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.12 });
  const { reduceMotion } = usePortfolioMotion();
  return (
    <motion.article ref={ref} className={`editorial-project project-${index}`} initial={false} animate={reduceMotion || inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }} transition={{ duration: 0.6 }}>
      <button
        className="project-cover-button"
        onClick={(e) => onOpen(e.currentTarget)}
        aria-label={`View ${project.title} details`}
      >
        <div className="project-cover-motion">
          <ProjectVisual type={project.placeholderType} />
        </div>
        <span className="project-open">
          <ArrowUpRight size={26} />
        </span>
      </button>
      <div className="project-caption">
        <div>
          <span className="eyebrow">
            0{index + 1} / {project.category}
          </span>
          <h3>{project.title}</h3>
        </div>
        <span className="project-caption-arrow" aria-hidden="true">
          ↗
        </span>
      </div>
      <p className="project-summary">{project.description}</p>
    </motion.article>
  );
}
export function Projects() {
  const { reduceMotion } = usePortfolioMotion();
  const origin = useRef<DOMRect | null>(null);
  const [selected, setSelected] = useState<ProjectItem | null>(null);
  return (
    <section id="projects" className="selected-work">
      <div className="work-heading">
        <span className="eyebrow">03 / SELECTED EXPLORATIONS</span>
        <h2>
          Made with
          <br />
          <em>curiosity.</em>
          <span className="work-count">(04)</span>
        </h2>
        <p>
          Real problems. Different perspectives.
          <br />A few things I’ve been building.
        </p>
      </div>
      <div className="editorial-grid">
        {portfolioConfig.projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onOpen={(element) => {
              origin.current = element.getBoundingClientRect();
              setSelected(project);
            }}
          />
        ))}
      </div>
      <a
        className="all-work-link"
        href="https://github.com/Suryakanta-Creator"
        target="_blank"
        rel="noreferrer"
      >
        MORE EXPERIMENTS ON GITHUB <ArrowUpRight size={20} />
      </a>
      <ProjectModal
        project={selected}
        onClose={() => setSelected(null)}
        reduceMotion={reduceMotion}
        origin={origin.current}
      />
    </section>
  );
}

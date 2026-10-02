"use client";
import { useEffect, useRef } from "react";
import { ProjectItem } from "@/data/portfolio.config";
import { X, ArrowUpRight } from "lucide-react";
export function ProjectModal({
  project,
  onClose,
  reduceMotion = false,
  origin,
}: {
  project: ProjectItem | null;
  onClose: () => void;
  reduceMotion?: boolean;
  origin?: DOMRect | null;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const closeRef = useRef(onClose);
  closeRef.current = onClose;
  useEffect(() => {
    const dialog = ref.current;
    if (!project || !dialog) return;
    const trigger = document.activeElement as HTMLElement | null;
    const previous = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    if (!reduceMotion && origin && window.innerWidth > 700) {
      const destination = dialog.getBoundingClientRect();
      const dx =
        origin.x + origin.width / 2 - destination.x - destination.width / 2;
      const dy =
        origin.y + origin.height / 2 - destination.y - destination.height / 2;
      dialog.animate(
        [
          {
            transform: `translate(${dx}px, ${dy}px) scale(${origin.width / destination.width}, ${origin.height / destination.height})`,
            opacity: 0.4,
          },
          { transform: "none", opacity: 1 },
        ],
        { duration: 520, easing: "cubic-bezier(.2,.8,.2,1)" },
      );
    }
    return () => {
      dialog.close();
      document.body.style.overflow = previous;
      trigger?.focus();
    };
  }, [project, reduceMotion, origin]);
  return (
    <dialog
      ref={ref}
      className={`project-dialog ${reduceMotion ? "no-motion" : ""}`}
      aria-labelledby="project-dialog-title"
      onCancel={(e) => {
        e.preventDefault();
        closeRef.current();
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeRef.current();
      }}
    >
      {project && (
        <div className="dialog-content">
          <button
            autoFocus
            className="dialog-close"
            aria-label="Close project details"
            onClick={onClose}
          >
            <X />
          </button>
          <div className="dialog-copy">
            <span className="eyebrow">{project.category}</span>
            <h2 id="project-dialog-title">{project.title}</h2>
            <p>{project.expandedDetails.overview}</p>
            <ul>
              {project.expandedDetails.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {project.expandedDetails.techStack.length > 0 && (
              <div className="dialog-tags">
                {project.expandedDetails.techStack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            )}
            <a href={project.repositoryUrl} target="_blank" rel="noreferrer">
              Explore repository <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      )}
    </dialog>
  );
}

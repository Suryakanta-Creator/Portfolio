import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { portfolioConfig } from "@/data/portfolio.config";

export const metadata = {
  title: `Resume — ${portfolioConfig.personal.fullName}`,
  description: `Resume and portfolio profile for ${portfolioConfig.personal.fullName}.`,
};

export default function ResumePage() {
  return (
    <main className="min-h-screen theme-page px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex items-center justify-between gap-4 print:hidden">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border theme-border theme-panel px-4 py-2.5 text-sm font-medium theme-text"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to portfolio
          </Link>

          <a
            href={`https://github.com/${portfolioConfig.personal.githubUsername}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border theme-border theme-panel px-4 py-2.5 text-sm font-medium theme-text"
          >
            <Github className="h-4 w-4" />
            GitHub
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <article className="overflow-hidden rounded-[2rem] border theme-border theme-surface editorial-shadow">
          <header className="border-b theme-border px-6 py-9 sm:px-10 sm:py-12">
            <p className="font-mono text-[9px] uppercase tracking-[0.22em] theme-accent">Resume / Portfolio Profile</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] theme-text sm:text-6xl">
              {portfolioConfig.personal.fullName}
            </h1>
            <p className="mt-3 text-lg font-medium theme-text">{portfolioConfig.personal.role}</p>
            <p className="mt-5 max-w-3xl text-sm leading-7 theme-muted sm:text-base">
              {portfolioConfig.personal.shortIntro}
            </p>
          </header>

          <div className="grid gap-0 lg:grid-cols-[0.85fr_1.55fr]">
            <aside className="border-b theme-border p-6 sm:p-10 lg:border-b-0 lg:border-r">
              <section>
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] theme-accent">Education</p>
                <div className="mt-5 space-y-6">
                  {portfolioConfig.journey.map((item) => (
                    <div key={item.number}>
                      <p className="text-sm font-semibold theme-text">{item.title}</p>
                      <p className="mt-1 text-sm theme-muted">{item.institution}</p>
                      <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.12em] theme-accent">{item.period}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mt-10">
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] theme-accent">Core Skills</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {portfolioConfig.skillCategories.flatMap((category) => category.skills).slice(0, 18).map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border theme-border theme-panel px-3 py-1.5 text-xs theme-text"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </section>
            </aside>

            <div className="p-6 sm:p-10">
              <section>
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] theme-accent">Selected Projects</p>
                <div className="mt-5 divide-y theme-border border-y theme-border">
                  {portfolioConfig.projects.map((project) => (
                    <div key={project.id} className="py-6">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <h2 className="text-xl font-semibold tracking-[-0.03em] theme-text">{project.title}</h2>
                          <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.12em] theme-accent">
                            {project.category}
                          </p>
                        </div>
                        <a
                          href={project.repositoryUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-medium theme-text"
                        >
                          Source <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      </div>
                      <p className="mt-3 text-sm leading-6 theme-muted">{project.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.expandedDetails.techStack.slice(0, 6).map((tech) => (
                          <span key={tech} className="font-mono text-[8px] uppercase tracking-[0.1em] theme-muted">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mt-10">
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] theme-accent">Profile</p>
                <div className="mt-4 space-y-4 text-sm leading-7 theme-muted">
                  {portfolioConfig.about.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}

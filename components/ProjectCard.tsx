"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { useState } from "react";
import type { Project } from "@/data/projects";

export default function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: (index % 2) * 0.08 }}
      className="group relative flex flex-col overflow-hidden rounded-lg border border-border bg-surface transition-colors duration-300 hover:border-accent/50"
    >
      <button
        onClick={() => onOpen(project)}
        className="relative aspect-[16/10] w-full overflow-hidden border-b border-border bg-bg text-left"
        aria-label={`Open ${project.title} details`}
      >
        {!imgError ? (
          // eslint-disable-next-line @next/next/no-img-element -- optional local placeholder, may not exist yet
          <img
            src={project.image}
            alt={`${project.title} preview`}
            onError={() => setImgError(true)}
            className="h-full w-full origin-center object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-[radial-gradient(circle_at_30%_20%,rgba(198,255,61,0.08),transparent_60%)]">
            <div className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-border" />
              <span className="h-2 w-2 rounded-full bg-border" />
              <span className="h-2 w-2 rounded-full bg-border" />
            </div>
            <span className="font-display text-xl text-border">
              {project.title}
            </span>
            <span className="text-xs text-muted">Preview coming soon</span>
          </div>
        )}
      </button>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-wide text-muted">
              {project.category}
            </p>
            <h3 className="mt-1 font-display text-xl font-medium">
              {project.title}
            </h3>
          </div>
          <ArrowUpRight
            size={18}
            className="mt-1 shrink-0 text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent"
          />
        </div>

        <p className="mb-5 text-sm leading-relaxed text-muted">
          {project.summary}
        </p>

        <div className="mb-6 mt-auto flex flex-wrap gap-2">
          {project.stack.map((t) => (
            <span
              key={t}
              className="rounded border border-border px-2.5 py-1 text-xs text-muted"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 border-t border-border pt-4 text-sm">
          <button
            onClick={() => onOpen(project)}
            className="text-text transition-colors hover:text-accent"
          >
            View details
          </button>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-accent"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={14} />
              Code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="text-muted transition-colors hover:text-accent"
              onClick={(e) => e.stopPropagation()}
            >
              Live demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Github, X } from "lucide-react";
import { useEffect } from "react";
import type { Project } from "@/data/projects";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = "hidden";
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-bg/80 p-4 backdrop-blur-sm sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} project details`}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="my-8 w-full max-w-2xl rounded-lg border border-border bg-surface"
          >
            <div className="flex items-start justify-between gap-4 border-b border-border p-6">
              <div>
                <p className="text-xs uppercase tracking-wide text-muted">
                  {project.category}
                </p>
                <h3 className="mt-1 font-display text-2xl font-medium">
                  {project.title}
                </h3>
              </div>
              <button
                onClick={onClose}
                aria-label="Close project details"
                className="shrink-0 rounded-md border border-border p-2 text-muted transition-colors hover:border-accent/50 hover:text-accent"
              >
                <X size={16} />
              </button>
            </div>

            <div className="max-h-[65vh] overflow-y-auto p-6">
              <div className="mb-6 flex flex-wrap gap-2">
                {project.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded border border-border px-2.5 py-1 text-xs text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <Field label="Overview" text={project.summary} />
              {project.problem && (
                <Field label="Problem" text={project.problem} />
              )}
              {project.solution && (
                <Field label="Solution" text={project.solution} />
              )}
              {project.features && project.features.length > 0 && (
                <div className="mb-6">
                  <h4 className="mb-3 text-sm text-muted">Key Features</h4>
                  <ul className="flex flex-col gap-2">
                    {project.features.map((f) => (
                      <li
                        key={f}
                        className="flex gap-3 text-sm leading-relaxed text-text"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {project.architecture && (
                <Field label="Architecture" text={project.architecture} />
              )}
            </div>

            <div className="flex items-center gap-4 border-t border-border p-6">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm text-text transition-colors hover:border-accent/50 hover:text-accent"
                >
                  <Github size={15} />
                  View on GitHub
                </a>
              )}
              {project.live ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-bg"
                >
                  Live Demo
                </a>
              ) : (
                <span className="text-sm text-muted">
                  No live demo deployed yet
                </span>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Field({ label, text }: { label: string; text: string }) {
  return (
    <div className="mb-6">
      <h4 className="mb-2 text-sm text-muted">{label}</h4>
      <p className="text-sm leading-relaxed text-text">{text}</p>
    </div>
  );
}

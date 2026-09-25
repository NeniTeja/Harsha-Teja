"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/data/projects";

const repos = projects.filter((p) => p.github);

export default function GithubSection() {
  return (
    <section id="github" className="border-b border-border py-28 md:py-36">
      <div className="container-edit">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-4 block text-sm text-muted"
            >
              05 / GitHub
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="max-w-lg font-display text-3xl font-medium tracking-tight sm:text-4xl"
            >
              Selected repositories, straight from the source.
            </motion.h2>
          </div>

          <motion.a
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            href="https://github.com/NeniTeja"
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm transition-colors hover:border-accent/50 hover:text-accent"
          >
            <Github size={15} />
            github.com/NeniTeja
          </motion.a>
        </div>

        <div className="grid grid-cols-1 divide-y divide-border border-y border-border sm:grid-cols-2 sm:divide-x sm:divide-y-0">
          {repos.map((repo, i) => (
            <motion.a
              key={repo.slug}
              href={repo.github}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.06 }}
              className="group flex flex-col gap-3 p-8 transition-colors hover:bg-surface"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-medium">
                  {repo.title}
                </h3>
                <ArrowUpRight
                  size={16}
                  className="text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent"
                />
              </div>
              <p className="text-sm leading-relaxed text-muted">
                {repo.summary}
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {repo.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded border border-border px-2 py-0.5 text-xs text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

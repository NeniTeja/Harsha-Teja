"use client";

import { motion } from "framer-motion";
import { techStack } from "@/data/technologies";

export default function TechStack() {
  return (
    <section id="stack" className="border-b border-border py-28 md:py-36">
      <div className="container-edit">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4 block text-sm text-muted"
        >
          02 / Stack
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mb-16 max-w-lg font-display text-3xl font-medium tracking-tight sm:text-4xl"
        >
          Tools I reach for to take an idea from schema to screen.
        </motion.h2>

        <div className="grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {techStack.map((category, ci) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: ci * 0.06 }}
            >
              <h3 className="mb-5 border-b border-border pb-3 text-sm text-muted">
                {category.label}
              </h3>
              <ul className="flex flex-col gap-3">
                {category.items.map((tech) => (
                  <li
                    key={tech}
                    className="group flex items-center gap-3 text-base text-text transition-colors"
                  >
                    <span className="h-1 w-1 shrink-0 rounded-full bg-border transition-colors duration-200 group-hover:bg-accent" />
                    <span className="transition-colors duration-200 group-hover:text-accent">
                      {tech}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

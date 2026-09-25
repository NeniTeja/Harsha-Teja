"use client";

import { motion } from "framer-motion";
import { timeline } from "@/data/technologies";

export default function Experience() {
  return (
    <section id="experience" className="border-b border-border py-28 md:py-36">
      <div className="container-edit">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4 block text-sm text-muted"
        >
          04 / Journey
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mb-16 max-w-lg font-display text-3xl font-medium tracking-tight sm:text-4xl"
        >
          Where the skillset has come from so far.
        </motion.h2>

        <div className="flex flex-col">
          {timeline.map((entry, i) => (
            <motion.div
              key={entry.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="grid grid-cols-1 gap-2 border-t border-border py-8 last:border-b sm:grid-cols-[160px_1fr]"
            >
              <span className="text-sm text-muted">{entry.period}</span>
              <div>
                <h3 className="font-display text-xl font-medium">
                  {entry.title}
                </h3>
                <p className="mt-1 text-sm text-accent/90">{entry.place}</p>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                  {entry.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

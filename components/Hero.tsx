"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

const ParticleField = dynamic(() => import("./ParticleField"), {
  ssr: false,
});

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Hero({
  resumeAvailable = false,
}: {
  resumeAvailable?: boolean;
}) {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden border-b border-border pt-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <ParticleField />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container-edit relative z-10 py-24"
      >
        <motion.p
          variants={item}
          className="mb-6 text-sm text-muted"
        >
          Java Full Stack Developer
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display text-[13vw] font-medium leading-[0.92] tracking-tight text-text sm:text-[9vw] lg:text-[6.4vw]"
        >
          Harshateja
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-8 max-w-xl text-lg leading-relaxed text-muted sm:text-xl"
        >
          I build practical full-stack applications with Java, Spring Boot
          and React.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-medium text-bg transition-transform duration-200 hover:-translate-y-0.5"
          >
            View Projects
            <ArrowUpRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
          <a
            href="https://github.com/NeniTeja"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-medium text-text transition-colors duration-200 hover:border-accent/60 hover:text-accent"
          >
            <Github size={16} />
            GitHub
          </a>
          {resumeAvailable ? (
            <a
              href="/resume/Harsha_Teja_Resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-medium text-text transition-colors duration-200 hover:border-accent/60 hover:text-accent"
            >
              Resume
            </a>
          ) : (
            <span
              aria-disabled="true"
              title="Add public/resume/Harsha_Teja_Resume.pdf to enable this button"
              className="inline-flex cursor-not-allowed items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-medium text-muted opacity-50"
            >
              Resume
            </span>
          )}
        </motion.div>

        <motion.div variants={item} className="mt-14 flex items-center gap-5">
          <a
            href="https://github.com/NeniTeja"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-muted transition-colors hover:text-accent"
          >
            <Github size={19} />
          </a>
          <a
            href="https://linkedin.com/in/neni-harshateja"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-muted transition-colors hover:text-accent"
          >
            <Linkedin size={19} />
          </a>
          <a
            href="mailto:tejakesamneni@gmail.com"
            aria-label="Email"
            className="text-muted transition-colors hover:text-accent"
          >
            <Mail size={19} />
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted sm:flex"
      >
        <span className="text-xs">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown size={14} />
        </motion.span>
      </motion.div>
    </section>
  );
}

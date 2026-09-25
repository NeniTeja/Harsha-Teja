"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function About() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="border-b border-border py-28 md:py-36">
      <div className="container-edit">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-[1fr_1.4fr] md:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="mb-6 block text-sm text-muted">01 / About</span>
            <div className="relative aspect-[4/5] w-full max-w-xs overflow-hidden rounded-md border border-border bg-surface">
              {!imgError ? (
                <Image
                  src="/images/profile.jpg"
                  alt="Portrait of Harsha Teja"
                  fill
                  sizes="320px"
                  className="object-cover"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-center">
                  <span className="font-display text-3xl text-border">HT</span>
                  <span className="px-6 text-xs text-muted">
                    Add /public/images/profile.jpg
                  </span>
                </div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <h2 className="font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl md:text-5xl">
              I am a Computer Science graduate and Java Full Stack Developer
              focused on building practical web applications using Java,
              Spring Boot, React and SQL.
            </h2>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted">
              I enjoy turning ideas into functional applications — going from
              a rough problem statement to a working product across the
              frontend, backend and database. Alongside project work, I keep
              improving my problem-solving skills through data structures
              and algorithms.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-border pt-8 sm:grid-cols-3">
              <div>
                <div className="font-display text-2xl">2022–26</div>
                <div className="mt-1 text-sm text-muted">B.Tech CSE</div>
              </div>
              <div>
                <div className="font-display text-2xl">VIT-AP</div>
                <div className="mt-1 text-sm text-muted">Amaravathi</div>
              </div>
              <div>
                <div className="font-display text-2xl">Full Stack</div>
                <div className="mt-1 text-sm text-muted">Java + React</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

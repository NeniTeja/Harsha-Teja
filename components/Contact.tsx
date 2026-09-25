"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

const CONTACT = {
  email: "tejakesamneni@gmail.com",
  github: "https://github.com/NeniTeja",
  linkedin: "https://linkedin.com/in/neni-harshateja",
};

const links = [
  {
    label: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/NeniTeja",
    href: CONTACT.github,
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/neni-harshateja",
    href: CONTACT.linkedin,
    icon: Linkedin,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 md:py-36">
      <div className="container-edit">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4 block text-sm text-muted"
        >
          06 / Contact
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="max-w-2xl font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl md:text-6xl"
        >
          Let&apos;s build something useful.
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 divide-y divide-border border-y border-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.label === "Email" ? undefined : "_blank"}
              rel={link.label === "Email" ? undefined : "noreferrer"}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group flex flex-col justify-between gap-8 p-8 transition-colors hover:bg-surface"
            >
              <div className="flex items-center justify-between">
                <link.icon size={18} className="text-muted" />
                <ArrowUpRight
                  size={16}
                  className="text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent"
                />
              </div>
              <div>
                <p className="text-sm text-muted">{link.label}</p>
                <p className="mt-1 break-all text-base text-text group-hover:text-accent">
                  {link.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

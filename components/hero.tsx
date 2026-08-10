"use client";

import { motion } from "framer-motion";
import { IconArrowRight, IconBolt } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/scroll";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-24 pt-40 md:pb-32">
      <div
        className="pointer-events-none absolute -right-32 -top-40 h-[520px] w-[520px] rounded-full bg-primary/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="container relative grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="pill"
          >
            <span className="pill-dot" aria-hidden="true" />
            👋 WELCOME TO KEDROXWRLD
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="mt-7 text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl md:text-6xl xl:text-7xl"
          >
            I'm Kabiito Kevin,
            <br />
            <span className="text-gradient">Full-Stack Developer</span>
            <br />
            Based In <span className="text-gradient">Uganda</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="mt-6 max-w-[46ch] text-lg text-muted-foreground"
          >
            I design and build modern websites, dashboards and mobile
            experiences that are fast, accessible and built to convert — from
            clean UI/UX to robust full-stack engineering.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Button
              variant="liquid"
              size="lg"
              onClick={() => scrollToSection("projects")}
            >
              VIEW MY WORK <IconArrowRight className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="lg"
              onClick={() => scrollToSection("contact")}
            >
              Let's Talk
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.25 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="blob relative aspect-[1/1.04] overflow-hidden">
            <img
              src="/assets/Kevin.jpg"
              alt="Portrait of Kabiito Kevin"
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          </div>

          <div className="glass float-badge left-[-4%] top-[8%] px-4 py-2.5">
            <span className="dot-purple" aria-hidden="true" />
            UI/UX Designer
          </div>
          <div className="glass float-badge bottom-[7%] left-[4%] px-4 py-2.5 [animation-delay:2.4s]">
            Full-Stack Developer
          </div>

          <IconBolt
            className="absolute -top-4 right-2 h-14 w-14 animate-float text-yellow-400 drop-shadow-[0_10px_20px_rgba(255,192,72,0.5)]"
            aria-hidden="true"
          />
          <svg
            className="absolute -right-6 bottom-[16%] w-[120px] animate-float opacity-80 [animation-delay:1.8s]"
            viewBox="0 0 120 60"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M8 44C32 6 84 6 112 40"
              stroke="#6C5CE7"
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray="2 12"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}

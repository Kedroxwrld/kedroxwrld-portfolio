"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconArrowUp } from "@tabler/icons-react";
import Reveal from "@/components/reveal";
import CountUp from "@/components/count-up";
import { Button } from "@/components/ui/button";
import { basePath } from "@/lib/base-path";

const stats = [
  { value: 100, suffix: "+", label: "Clients" },
  { value: 90, suffix: "+", label: "Projects" },
  { value: 3, suffix: "+", label: "Years Experience" },
];

export default function About() {
  const [open, setOpen] = useState(false);

  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <div className="relative mx-auto w-full max-w-sm">
            <div className="blob relative aspect-square overflow-hidden">
              <img
                src={`${basePath}/assets/Kevin.jpg`}
                alt="Portrait of Kabiito Kevin"
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
            </div>
            <span className="glass float-tag left-0 top-[12%]">
              Dashboard
            </span>
            <span className="glass float-tag dark-tag right-[-2%] top-[38%] [animation-delay:1.2s]">
              Wireframe
            </span>
            <span className="glass float-tag bottom-[16%] left-[-4%] [animation-delay:2.2s]">
              Web Designer
            </span>
            <span className="glass float-tag bottom-[-2%] right-[8%] [animation-delay:3.2s]">
              UI/UX Design
            </span>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="pill pill-outline">• ABOUT ME •</span>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              Who's Behind All This <span className="text-gradient">Great Work?</span>
            </h2>
            <p className="mt-4 max-w-[54ch] text-muted-foreground">
              <b>Mission:</b> To engineer robust, scalable web and mobile applications while crafting intuitive, visually stunning user experiences. 
              By bridging the gap between front-end aesthetics and backend logic, I transform complex problems into seamless, end-to-end digital solutions.
              <BR></BR>

              <b> Vision:</b>To empower businesses and brands through digital innovation, becoming a leading creative technologist who delivers pixel-perfect, 
              high-performing applications that drive real-world impact across web and mobile platforms.
              <BR></BR>

            </p>
            <p className="mt-4 max-w-[54ch] text-muted-foreground">
              When I'm not designing or developing, I'm researching new tools,
              teaching what I learn, and finding smarter ways to make the web
              feel good.
            </p>

            <AnimatePresence initial={false}>
              {open && (
                <motion.p
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="overflow-hidden text-muted-foreground"
                >
                  <span className="block max-w-[54ch] pt-4">
                    I partner with you from first concept to final deploy —
                    running design sprints, prototyping, building scalable
                    front-ends and robust APIs, and polishing every interaction
                    until it feels effortless. My goal is simple: ship products
                    that people love to use and businesses love to measure.
                  </span>
                </motion.p>
              )}
            </AnimatePresence>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-wrap gap-8 border-y border-border py-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <CountUp value={stat.value} suffix={stat.suffix} />
                  <span className="mt-1 block text-sm font-semibold text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <Button
              variant="primary"
              size="lg"
              className="mt-8"
              onClick={() => setOpen((o) => !o)}
            >
              {open ? "SHOW LESS" : "READ MORE"}
              <IconArrowUp
                className={`h-5 w-5 transition-transform duration-300 ${
                  open ? "rotate-180" : ""
                }`}
              />
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

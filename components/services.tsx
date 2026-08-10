"use client";

import {
  IconArrowUpRight,
  IconDeviceLaptop,
  IconPalette,
  IconRocket,
} from "@tabler/icons-react";
import Reveal from "@/components/reveal";
import { scrollToSection } from "@/lib/scroll";

const services = [
  {
    icon: IconPalette,
    title: "UI/UX Design",
    desc: "User-centered interfaces & delightful product flows that keep people engaged.",
  },
  {
    icon: IconDeviceLaptop,
    title: "Web Design",
    desc: "Responsive, high-performance websites engineered for speed and conversions.",
  },
  {
    icon: IconRocket,
    title: "Product Design",
    desc: "End-to-end digital product thinking — research, strategy, and polished builds.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="pill pill-outline">• MY SERVICES •</span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Solution We Provide For Your{" "}
            <span className="text-gradient">Works</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            From first sketch to final deploy — a full spectrum of design and
            development services that move your business forward.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.12} className="h-full">
              <div className="glass group relative flex h-full flex-col items-start gap-6 rounded-[28px] p-8 transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_24px_50px_rgba(91,50,232,0.16)]">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-purple-deep text-white shadow-[0_10px_24px_rgba(91,50,232,0.35)]">
                  <service.icon className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold">{service.title}</h3>
                  <p className="mt-2 text-muted-foreground">{service.desc}</p>
                </div>
                <button
                  type="button"
                  onClick={() => scrollToSection("projects")}
                  aria-label={`${service.title} — view My Projects`}
                  className="mt-auto flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white shadow-[0_8px_20px_rgba(91,50,232,0.32)] transition-all duration-300 hover:bg-purple-deep group-hover:rotate-45"
                >
                  <IconArrowUpRight className="h-5 w-5" />
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

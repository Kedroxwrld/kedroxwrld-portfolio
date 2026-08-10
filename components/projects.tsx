import { AnimatedProjects } from "@/components/ui/animated-projects";
import Reveal from "@/components/reveal";

const projects = [
  {
    title: "Dashboard Application",
    category: "Web Application",
    description:
      "A comprehensive analytics dashboard designed to track key performance indicators and streamline data visualization for enterprise teams.",
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "E-Commerce Website",
    category: "Web Design",
    description:
      "A modern, high-conversion online store featuring seamless checkout flows and a responsive product gallery for tech gadgets.",
    src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Portfolio Website",
    category: "Web Design",
    description:
      "A personal branding website for a full-stack developer based in Uganda, complete with case studies and interactive elements.",
    src: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Travel Website",
    category: "Web Design",
    description:
      "An immersive travel platform featuring captivating spaces, destination guides, and seamless booking integrations.",
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden py-24 md:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-secondary/60 to-background"
        aria-hidden="true"
      />
      <div className="container relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="pill pill-outline">• MY PROJECTS •</span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            A curated selection of products I've designed, developed and shipped
            across web and mobile.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <AnimatedProjects projects={projects} />
        </Reveal>
      </div>
    </section>
  );
}

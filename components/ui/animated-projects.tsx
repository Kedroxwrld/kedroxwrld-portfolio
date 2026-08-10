"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Project = {
  description: string;
  title: string;
  category: string;
  src: string;
};

export const AnimatedProjects = ({
  projects,
  autoplay = true,
}: {
  projects: Project[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const isActive = (index: number) => index === active;

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
    <div className="mx-auto max-w-sm px-2 py-8 antialiased md:max-w-5xl md:px-4">
      <div className="relative grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-20">
        <div>
          <div className="relative h-80 w-full md:h-[26rem]">
            <AnimatePresence>
              {projects.map((project, index) => (
                <motion.div
                  key={project.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index) ? 999 : projects.length - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0 origin-bottom"
                >
                  <img
                    src={project.src}
                    alt={project.title}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center shadow-[0_30px_70px_rgba(91,50,232,0.25)]"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex flex-col justify-between py-4">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <h3 className="text-2xl font-bold text-foreground">
              {projects[active].title}
            </h3>
            <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-purple-deep">
              {projects[active].category}
            </p>
            <motion.p className="mt-8 text-lg text-muted-foreground">
              {projects[active].description.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                  animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                >
                  {word}{" "}
                </motion.span>
              ))}
            </motion.p>
          </motion.div>

          <div className="mt-6 flex gap-4">
            <button
              onClick={handlePrev}
              className="group/btn flex h-12 w-12 items-center justify-center rounded-full border border-border bg-white/70 text-foreground shadow-sm backdrop-blur transition hover:bg-primary hover:text-white"
              aria-label="Previous project"
            >
              <IconArrowLeft className="h-5 w-5 transition-transform duration-300 group-hover/btn:rotate-12" />
            </button>
            <button
              onClick={handleNext}
              className="group/btn flex h-12 w-12 items-center justify-center rounded-full border border-border bg-white/70 text-foreground shadow-sm backdrop-blur transition hover:bg-primary hover:text-white"
              aria-label="Next project"
            >
              <IconArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/btn:-rotate-12" />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-center gap-3">
        {projects.map((project, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            aria-label={`Go to ${project.title}`}
            className={cn(
              "h-12 w-12 overflow-hidden rounded-full border-2 transition-all duration-300",
              index === active
                ? "scale-110 border-primary shadow-[0_0_20px_rgba(108,92,231,0.4)]"
                : "border-neutral-300 opacity-60 hover:opacity-100"
            )}
          >
            <img
              src={project.src}
              alt={project.title}
              className="h-full w-full object-cover object-center"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

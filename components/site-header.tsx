"use client";

import { useEffect, useState } from "react";
import type { ElementType } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  IconArrowRight,
  IconBrandGithub,
  IconBrandTiktok,
  IconBrandWhatsapp,
  IconBrandYoutube,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { scrollToSection } from "@/lib/scroll";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "projects", label: "My Projects" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(
      (el): el is HTMLElement => el !== null
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <>
      <div
        className="fixed inset-x-0 top-0 z-[1400] h-[3px] bg-gradient-to-r from-primary to-purple-deep transition-[width] duration-150"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />
      <header
        id="site-header"
        className={cn(
          "fixed left-1/2 top-[14px] z-[1000] w-[94%] max-w-[1200px] -translate-x-1/2 rounded-full border border-white/60 bg-white/70 shadow-[0_14px_40px_rgba(31,29,43,0.08)] backdrop-blur-xl transition-all duration-300",
          scrolled && "top-[10px] shadow-[0_18px_50px_rgba(91,50,232,0.16)]"
        )}
      >
        <div className="flex h-[76px] items-center justify-between gap-5 px-5 md:px-7">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              go("home");
            }}
            className="flex items-center gap-2.5 font-extrabold tracking-wide"
            aria-label="KEDROXWRLD home"
          >
            <Logo />
            <span className="text-lg">
              KEDROX<span className="text-primary">WRLD</span>
            </span>
          </a>

          <nav
            className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1.5 lg:flex"
            aria-label="Primary"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  go(link.id);
                }}
                className={cn(
                  "relative rounded-full px-4 py-2 text-[0.92rem] font-semibold text-muted-foreground transition-colors hover:text-purple-deep",
                  active === link.id && "bg-accent text-purple-deep"
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              variant="liquid"
              size="sm"
              className="hidden md:inline-flex"
              onClick={() => go("contact")}
            >
              HIRE ME <IconArrowRight className="h-4 w-4" />
            </Button>
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="flex h-11 w-11 items-center justify-center rounded-full text-foreground transition hover:bg-accent lg:hidden"
            >
              {open ? (
                <IconX className="h-5 w-5" />
              ) : (
                <IconMenu2 className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-[1100] bg-ink/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="fixed inset-y-0 right-0 z-[1200] flex w-[min(320px,86vw)] flex-col gap-6 overflow-y-auto border-l border-white/60 bg-white/85 p-6 shadow-[0_0_60px_rgba(18,17,26,0.25)] backdrop-blur-2xl"
              initial={{ x: "105%" }}
              animate={{ x: 0 }}
              exit={{ x: "105%" }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              aria-label="Mobile menu"
            >
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2.5 font-extrabold">
                  <Logo />
                  <span className="text-base">
                    KEDROX<span className="text-primary">WRLD</span>
                  </span>
                </span>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="flex h-11 w-11 items-center justify-center rounded-full transition hover:bg-accent"
                >
                  <IconX className="h-5 w-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-1.5" aria-label="Mobile">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      go(link.id);
                    }}
                    className={cn(
                      "rounded-xl px-4 py-3.5 text-base font-semibold text-foreground transition-all hover:bg-accent hover:pl-5 hover:text-purple-deep",
                      active === link.id &&
                        "bg-accent text-purple-deep"
                    )}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <Button
                variant="liquid"
                size="lg"
                className="w-full"
                onClick={() => go("contact")}
              >
                HIRE ME <IconArrowRight className="h-5 w-5" />
              </Button>

              <div className="mt-auto flex gap-3">
                <Social icon={IconBrandWhatsapp} label="WhatsApp" />
                <Social icon={IconBrandGithub} label="GitHub" />
                <Social icon={IconBrandTiktok} label="TikTok" />
                <Social icon={IconBrandYoutube} label="YouTube" />
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function Logo() {
  return (
    <span className="inline-flex h-[38px] w-[38px] shrink-0 items-center justify-center">
      <svg viewBox="0 0 48 48" fill="none" className="h-full w-full" aria-hidden="true">
        <path
          d="M24 3 42 14.2v19.6L24 45 6 33.8V14.2L24 3Z"
          fill="url(#lgHeader)"
        />
        <path
          d="M24 12.5 34 18.25v11.5L24 35.5l-10-5.75v-11.5L24 12.5Z"
          fill="#fff"
          opacity=".95"
        />
        <defs>
          <linearGradient
            id="lgHeader"
            x1="6"
            y1="3"
            x2="42"
            y2="45"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6C5CE7" />
            <stop offset="1" stopColor="#5B32E8" />
          </linearGradient>
        </defs>
      </svg>
    </span>
  );
}

function Social({
  icon: Icon,
  label,
}: {
  icon: ElementType;
  label: string;
}) {
  return (
    <a
      href="#"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-purple-deep transition hover:-translate-y-0.5 hover:bg-primary hover:text-white"
    >
      <Icon className="h-[19px] w-[19px]" />
    </a>
  );
}

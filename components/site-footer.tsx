"use client";

import type { ReactNode } from "react";
import { scrollToSection } from "@/lib/scroll";

const quickLinks = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "projects", label: "My Projects" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

const serviceLinks = [
  { id: "services", label: "UI/UX Design" },
  { id: "services", label: "Web Design" },
  { id: "services", label: "Product Design" },
  { id: "services", label: "Dashboard Design" },
];

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-ink-deep pt-20 text-white/70">
      <div
        className="pointer-events-none absolute -top-[200px] left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="container relative grid grid-cols-1 gap-10 border-b border-white/10 pb-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr]">
        <div>
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
            className="flex items-center gap-2.5 font-extrabold tracking-wide text-white"
          >
            <Logo />
            <span className="text-lg">
              KEDROX<span className="text-primary">WRLD</span>
            </span>
          </a>
          <p className="mt-5 max-w-[34ch] text-sm leading-relaxed">
            Crafting modern digital experiences — websites, dashboards and apps
            that look great and perform even better.
          </p>
        </div>

        <FooterCol title="Quick Links">
          {quickLinks.map((link) => (
            <li key={link.label}>
              <a
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.id);
                }}
                className="transition hover:pl-1.5 hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </FooterCol>

        <FooterCol title="Services">
          {serviceLinks.map((link) => (
            <li key={link.label}>
              <a
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.id);
                }}
                className="transition hover:pl-1.5 hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </FooterCol>

        <FooterCol title="Contact Info">
          <li>
            <a href="tel:+256778698188" className="inline-flex transition hover:text-white">
              +256 778 698 188
            </a>
          </li>
          <li>
            <a href="mailto:kedroxwrld33@gmail.com" className="inline-flex transition hover:text-white">
              kedroxwrld33@gmail.com
            </a>
          </li>
          <li className="inline-flex">Kampala, Uganda</li>
        </FooterCol>
      </div>

      <div className="container relative flex flex-col items-center justify-between gap-3 py-6 text-sm text-white/50 md:flex-row">
        <p>© 2024 KEDROXWRLD. All rights reserved.</p>
        <p>Designed &amp; built by Kabiito Kevin</p>
      </div>
    </footer>
  );
}

function Logo() {
  return (
    <span className="inline-flex h-[38px] w-[38px] shrink-0 items-center justify-center">
      <svg viewBox="0 0 48 48" fill="none" className="h-full w-full" aria-hidden="true">
        <path
          d="M24 3 42 14.2v19.6L24 45 6 33.8V14.2L24 3Z"
          fill="url(#lgFooter)"
        />
        <path
          d="M24 12.5 34 18.25v11.5L24 35.5l-10-5.75v-11.5L24 12.5Z"
          fill="#fff"
          opacity=".95"
        />
        <defs>
          <linearGradient
            id="lgFooter"
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

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <nav className="flex flex-col gap-4">
      <h4 className="text-base font-extrabold text-white">{title}</h4>
      <ul className="flex flex-col gap-3 text-sm">{children}</ul>
    </nav>
  );
}

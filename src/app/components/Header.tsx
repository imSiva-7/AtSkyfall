"use client";

import { RefObject, useEffect, useState } from "react";
import WhatsAppLink from "./WhatsAppLink";

type Refs = {
  about: RefObject<HTMLElement | null>;
  services: RefObject<HTMLElement | null>;
  work: RefObject<HTMLElement | null>;
  timeline: RefObject<HTMLElement | null>;
  contact: RefObject<HTMLElement | null>;
};

type Props = {
  scrollToTop: () => void;
  scrollTo: (ref: RefObject<HTMLElement | null>) => void;
  refs: Refs;
};

export default function Header({ scrollToTop, scrollTo, refs }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { label: "ABOUT", ref: refs.about },
    { label: "SKILLS", ref: refs.services },
    { label: "PROJECTS", ref: refs.work },
    { label: "EDUCATION", ref: refs.timeline },
  ];

  return (
    <>
      <header
        className={`
          fixed top-0 inset-x-0 z-50
          transition-all duration-300 ease-in-out
          ${
            scrolled
              ? "bg-[#111111]/95 backdrop-blur-md shadow-md py-4"
              : "bg-transparent py-6"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-3 text-3xl flex items-center justify-between">
          {/* Left — phone icon only on mobile, icon + number on desktop */}
          <div className="flex items-center gap-2 lg:gap-4">
          <a
            href="tel:+91 9094688533"
            aria-label="Call Siva"
            className="flex items-center gap-3 text-lg font-semibold tracking-wide text-white transition-colors duration-300"
          >
            {/* Circle phone icon — matches reference */}
            <span className="flex items-center justify-center w-11 h-11 rounded-full border-2 border-[var(--accent)] text-[var(--accent)] shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            {/* Number hidden on mobile */}
            <span className="hidden lg:inline">+91 9094688533</span>
          </a>
          <WhatsAppLink compact />
          </div>

          {/* Center — logo */}
          <button
            onClick={scrollToTop}
            className="absolute left-1/2 -translate-x-1/2 text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--accent)] hover:opacity-80 transition-opacity"
          >
            S I V A
          </button>

          {/* Right — menu toggle */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            className="flex items-center gap-4 text-lg font-semibold tracking-widest uppercase text-white transition-colors duration-300"
          >
            {/* "menu" label — desktop only */}
            <span className="hidden md:inline">menu</span>
            {/* Hamburger lines */}
            <span className="flex flex-col gap-1.5 w-8">
              <span
                className={`
                  block h-[3px] rounded-3xl bg-current transition-all duration-300 origin-center
                  ${menuOpen ? "rotate-45 translate-y-[9px]" : ""}
                `}
              />
              <span
                className={`
                  block h-[3px] rounded-3xl bg-current transition-all duration-300
                  ${menuOpen ? "opacity-0" : ""}
                `}
              />
              <span
                className={`
                  block h-[3px] rounded-3xl bg-current transition-all duration-300 origin-center
                  ${menuOpen ? "-rotate-45 -translate-y-[9px]" : ""}
                `}
              />
            </span>
          </button>
        </div>
      </header>

      {/* Full-screen nav overlay */}
      <div
        className={`
          fixed inset-0 z-40 bg-[#111111] flex flex-col justify-center overflow-hidden
          transition-all duration-500
          ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        {/* Decorative lime slash in background */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full"
          >
            <polygon
              points="0,70 40,30 44,30 4,70"
              fill="#a8c400"
              opacity="0.12"
            />
            <polygon
              points="0,78 40,38 42,38 2,78"
              fill="#a8c400"
              opacity="0.07"
            />
          </svg>
        </div>

        <nav className="relative px-6 flex flex-col items-center gap-3 text-center">
          {[...nav, { label: "CONNECT", ref: refs.contact }].map((item, i) => (
            <button
              key={item.label}
              onClick={() => {
                scrollTo(item.ref);
                setMenuOpen(false);
              }}
              style={{
                transitionDelay: menuOpen ? `${i * 60}ms` : "0ms",
                transitionProperty: "transform, opacity",
                transitionDuration: "420ms",
                transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(20px)",
              }}
              className={`
                group relative font-extrabold tracking-tighter leading-none uppercase
                text-5xl gap-5 md:text-5xl lg:text-5xl
                ${
                  item.label === "CONNECT"
                    ? "text-[var(--accent)] mt-6"
                    : "text-white hover:text-[var(--accent)]"
                }
                transition-colors duration-200
              `}
            >
              {/* underline that slides in on hover */}
              <span
                className="absolute left-1/2 -translate-x-1/2 -bottom-1 h-[3px] w-0 bg-[var(--accent)]
                           group-hover:w-full transition-all duration-300"
              />
              {item.label}
            </button>
          ))}
        </nav>

        {/* Bottom row */}
        <div
          className="absolute bottom-8 inset-x-0 flex items-center justify-center gap-6"
          style={{
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? "translateY(0)" : "translateY(10px)",
            transition: "opacity 400ms 380ms, transform 400ms 380ms",
          }}
        >
          <a
            href="tel:+9094688533"
            className="text-white/40 text-sm font-semibold hover:text-white transition-colors"
          >
            9094688533
          </a>
          <span className="text-white/20">·</span>
          <span className="text-white/40 text-sm">© 2026 SIVA</span>
        </div>
      </div>
    </>
  );
}

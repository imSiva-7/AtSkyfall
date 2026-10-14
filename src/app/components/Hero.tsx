"use client";

import { forwardRef } from "react";
import HeroMedia from "./HeroMedia";

// ─── Swap this ID for any YouTube video ───────────────────
const YT_ID = "xvT1jH8B9AM";

type Props = {
  onViewWork: () => void;
  onConnect: () => void;
};

const Hero = forwardRef<HTMLElement, Props>(
  ({ onViewWork, onConnect }, ref) => (
    <section
      ref={ref}
      className="relative min-h-[80svh] w-full overflow-hidden flex items-center justify-center pb-28 pt-36 sm:min-h-screen sm:py-28"
    >
      <HeroMedia videoId={YT_ID} />

      {/* ── Blur layer ── */}
      <div className="absolute inset-0 backdrop-blur-lg" />

      {/* ── Dark overlay ── */}
      <div className="absolute inset-0 bg-black/55" />
      {/* bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />

      {/* ── Hero content ── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
        <p className="mb-4 sm:mb-5 text-[10px] font-semibold tracking-[0.3em] text-white/65 sm:text-xs">
          FULL STACK DEVELOPER
        </p>
        <h1
          className="text-white font-extrabold leading-none tracking-tighter uppercase"
          style={{ fontSize: "clamp(2.75rem, 10vw, 8rem)" }}
        >
          Siva.
          <br />
          <span className="text-[var(--accent)]">Developer.</span>
        </h1>

        {/* Sub-headline */}
        <p className="mt-5 sm:mt-6 text-white/80 text-base sm:text-lg md:text-2xl max-w-xl leading-snug">
          I build responsive web applications with React, Next.js, and
          TypeScript. Explore my projects, skills, and education.
        </p>

        <div className="mt-7 sm:mt-9 flex flex-wrap justify-center gap-3">
          <button
            onClick={onViewWork}
            className="rounded-full bg-[var(--accent)] px-5 sm:px-7 py-4 text-sm font-extrabold tracking-wide text-black transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            View projects <span aria-hidden>↗</span>
          </button>
          <button
            onClick={onConnect}
            className="rounded-full border border-white/30 px-5 sm:px-7 py-4 text-sm font-semibold text-white transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
          >
            Contact me
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-[10px] tracking-[0.5em] animate-bounce">
        SCROLL
      </div>
    </section>
  ),
);

Hero.displayName = "Hero";
export default Hero;

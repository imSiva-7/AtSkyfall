"use client";

import { forwardRef, useEffect, useRef, useState } from "react";

type YouTubePlayer = { mute: () => void; unMute: () => void; isMuted: () => boolean };
type YouTubeWindow = Window & {
  YT?: { Player?: new (element: HTMLIFrameElement, options: { events: { onReady: (event: { target: YouTubePlayer }) => void } }) => YouTubePlayer };
};

type Props = {
  onViewWork: () => void;
  onConnect: () => void;
};

const Hero = forwardRef<HTMLElement, Props>(
  ({ onViewWork, onConnect }, ref) => {
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const playerRef = useRef<YouTubePlayer | null>(null);
    const [muted, setMuted] = useState(true);
    const [ready, setReady] = useState(false);

    useEffect(() => {
      let active = true;
      if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
        const script = document.createElement("script");
        script.src = "https://www.youtube.com/iframe_api";
        script.async = true;
        document.head.appendChild(script);
      }
      const timer = window.setInterval(() => {
        const Player = (window as YouTubeWindow).YT?.Player;
        if (!Player || !iframeRef.current) return;
        window.clearInterval(timer);
        new Player(iframeRef.current, {
          events: { onReady: ({ target }) => {
            if (!active) return;
            target.mute();
            playerRef.current = target;
            setReady(true);
          } },
        });
      }, 100);
      return () => {
        active = false;
        window.clearInterval(timer);
        playerRef.current = null;
      };
    }, []);

    const toggleMute = () => {
      const player = playerRef.current;
      if (!player) return;
      const nextMuted = !player.isMuted();
      if (nextMuted) player.mute();
      else player.unMute();
      setMuted(nextMuted);
    };

    return (
    <section
      ref={ref}
      className="relative min-h-[80svh] w-full overflow-hidden flex items-center justify-center pb-28 pt-36 sm:min-h-screen sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden bg-black [container-type:size]" aria-hidden="true">
        <iframe
          ref={iframeRef}
          src="https://www.youtube.com/embed/xvT1jH8B9AM?autoplay=1&mute=1&loop=1&playlist=xvT1jH8B9AM&controls=0&playsinline=1&rel=0&enablejsapi=1"
          title="Background video"
          allow="autoplay; encrypted-media"
          referrerPolicy="strict-origin-when-cross-origin"
          tabIndex={-1}
          className="absolute left-1/2 top-1/2 h-[max(100cqh,56.25cqw)] w-[max(100cqw,177.78cqh)] max-w-none -translate-x-1/2 -translate-y-1/2 scale-105 border-0 blur-sm"
        />
      </div>

      {/* ── Dark overlay ── */}
      <div className="pointer-events-none absolute inset-0 bg-black/50" />
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
      <button
        type="button"
        disabled={!ready}
        onClick={toggleMute}
        aria-label={muted ? "Unmute background video" : "Mute background video"}
        aria-pressed={!muted}
        className="absolute bottom-7 right-5 z-20 grid size-11 place-items-center rounded-full border border-white/30 bg-black/30 text-white transition-colors hover:text-[var(--accent)] disabled:opacity-40 sm:right-8"
      >
        <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M11 5 6 9H3v6h3l5 4V5Z" />
          {muted ? <path d="m16 9 6 6m0-6-6 6" /> : <><path d="M15 9a4 4 0 0 1 0 6" /><path d="M18 6a8 8 0 0 1 0 12" /></>}
        </svg>
      </button>
      <div className="hero-scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-[10px] tracking-[0.5em] animate-bounce">
        SCROLL
      </div>
    </section>
    );
  },
);

Hero.displayName = "Hero";
export default Hero;

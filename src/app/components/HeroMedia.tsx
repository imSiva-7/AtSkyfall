"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function HeroMedia() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canAnimate, setCanAnimate] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    let visible = false;
    const update = () => {
      const active = visible && !document.hidden && !motionPreference.matches && !connection?.saveData;
      setCanAnimate(active);
      container.closest("section")?.setAttribute("data-visible", String(active));
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      update();
    });
    observer.observe(container);
    motionPreference.addEventListener("change", update);
    document.addEventListener("visibilitychange", update);
    return () => {
      observer.disconnect();
      motionPreference.removeEventListener("change", update);
      document.removeEventListener("visibilitychange", update);
      container.closest("section")?.removeAttribute("data-visible");
    };
  }, []);

  return (
    <>
      <div ref={containerRef} className="pointer-events-none absolute inset-0 overflow-hidden bg-[#0b1210]" aria-hidden="true">
        <Image src={canAnimate && !paused ? "/hero/ambient.gif" : "/hero/ambient-poster.webp"} alt="" fill unoptimized loading="eager" sizes="100vw" className="object-cover" />
      </div>
      {canAnimate && (
        <button type="button" onClick={() => setPaused(value => !value)} aria-pressed={paused} aria-label={paused ? "Play background animation" : "Pause background animation"} className="absolute bottom-7 right-5 z-20 rounded-full border border-white/25 bg-black/30 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-white/70 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] sm:right-8">
          {paused ? "Play motion" : "Pause motion"}
        </button>
      )}
    </>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function HeroMedia() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [canAnimate, setCanAnimate] = useState(false);
  const [paused, setPaused] = useState(false);
  const [muted, setMuted] = useState(true);
  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const playing = canAnimate && !paused;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (playing) void video.play().catch(() => {
      video.muted = true;
      setMuted(true);
      void video.play().catch(() => {});
    });
    else video.pause();
  }, [playing, canAnimate, videoFailed]);

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
        <Image src={playing && (!videoReady || videoFailed) ? "/hero/ambient.gif" : "/hero/ambient-poster.webp"} alt="" fill unoptimized loading="eager" sizes="100vw" className="object-cover" />
        {(canAnimate || videoReady) && !videoFailed && (
          <video
            ref={videoRef}
            src="/hero/kalyani.mp4"
            autoPlay={playing}
            loop
            muted={muted}
            playsInline
            preload="metadata"
            onPlaying={() => setVideoReady(true)}
            onError={() => setVideoFailed(true)}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${videoReady ? "opacity-100" : "opacity-0"}`}
          />
        )}
      </div>
      {canAnimate && videoReady && !videoFailed && (
        <button
          type="button"
          aria-label={muted ? "Unmute Kalyani video" : "Mute Kalyani video"}
          aria-pressed={!muted}
          onClick={() => {
            if (videoRef.current) videoRef.current.muted = !muted;
            setMuted(!muted);
          }}
          className="absolute bottom-7 left-5 z-20 grid size-10 place-items-center rounded-full border border-white/25 bg-black/30 text-white transition-colors hover:text-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] sm:left-8"
        >
          <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M11 5 6 9H3v6h3l5 4V5Z" />
            {muted ? <path d="m16 9 6 6m0-6-6 6" /> : <><path d="M15 9a4 4 0 0 1 0 6" /><path d="M18 6a8 8 0 0 1 0 12" /></>}
          </svg>
        </button>
      )}
      {canAnimate && (
        <button type="button" onClick={() => setPaused(value => !value)} aria-pressed={paused} aria-label={paused ? "Play background animation" : "Pause background animation"} className="absolute bottom-7 right-5 z-20 rounded-full border border-white/25 bg-black/30 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-white/70 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] sm:right-8">
          {paused ? "Play motion" : "Pause motion"}
        </button>
      )}
    </>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

const VIDEO_ID = "xvT1jH8B9AM";

export default function HeroMusic() {
  const [enabled, setEnabled] = useState(false);
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enabled || !playerRef.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) setEnabled(false);
    });
    observer.observe(playerRef.current);
    const onVisibilityChange = () => {
      if (document.hidden) setEnabled(false);
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [enabled]);

  return (
    <div className="mt-5 flex w-full flex-col items-center gap-3">
      <button
        type="button"
        aria-pressed={enabled}
        onClick={() => setEnabled(value => !value)}
        className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/30 px-4 py-2 text-xs font-semibold text-white/80 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
      >
        <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M11 5 6 9H3v6h3l5 4V5Z" />
          {enabled ? <><path d="M15 9a4 4 0 0 1 0 6" /><path d="M18 6a8 8 0 0 1 0 12" /></> : <path d="m16 9 6 6m0-6-6 6" />}
        </svg>
        {enabled ? "Sound on" : "Sound off"} · Kalyani
      </button>
      {enabled && (
        <div ref={playerRef} className="w-full max-w-[360px]">
          <iframe
            title="Kalyani (with Shreya Ghoshal) – official music video"
            src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&loop=1&playlist=${VIDEO_ID}&playsinline=1`}
            className="h-[205px] w-full rounded-xl border-0"
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
}

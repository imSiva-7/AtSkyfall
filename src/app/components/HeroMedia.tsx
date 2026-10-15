"use client";

import { useEffect, useRef, useState } from "react";

type Player = {
  mute: () => void;
  unMute: () => void;
  isMuted: () => boolean;
  setVolume: (volume: number) => void;
  playVideo: () => void;
  destroy: () => void;
};
type PlayerEvent = { target: Player; data?: number };
type YouTubeApi = {
  Player: new (
    element: HTMLElement,
    options: {
      host: string;
      width: string;
      height: string;
      videoId: string;
      playerVars: Record<string, string | number>;
      events: Record<string, (event: PlayerEvent) => void>;
    },
  ) => Player;
};
type YouTubeWindow = Window & {
  YT?: YouTubeApi;
  onYouTubeIframeAPIReady?: () => void;
};

let apiPromise: Promise<YouTubeApi> | undefined;

function loadPlayerApi() {
  const youtubeWindow = window as YouTubeWindow;
  if (youtubeWindow.YT?.Player) return Promise.resolve(youtubeWindow.YT);
  if (!apiPromise) {
    apiPromise = new Promise<YouTubeApi>((resolve, reject) => {
      const previousCallback = youtubeWindow.onYouTubeIframeAPIReady;
      youtubeWindow.onYouTubeIframeAPIReady = () => {
        previousCallback?.();
        if (youtubeWindow.YT) resolve(youtubeWindow.YT);
      };
      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      script.async = true;
      script.onerror = () => {
        apiPromise = undefined;
        reject(new Error("Music player unavailable"));
      };
      document.head.appendChild(script);
    });
  }
  return apiPromise;
}

export default function HeroMedia({ videoId }: { videoId: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<Player | null>(null);
  const wantsMusicRef = useRef(false);
  const [enabled, setEnabled] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "ready" | "unavailable">(
    "idle",
  );
  const [musicOn, setMusicOn] = useState(false);

  useEffect(() => {
    // Keep third-party video off the initial rendering path. Phones and
    // data-saving connections only load it after a tap on the music button.
    if (enabled) return;
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    if (!window.matchMedia("(min-width: 768px) and (hover: hover)").matches ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches || connection?.saveData) return;
    let timer: ReturnType<typeof setTimeout>;
    let idle: number | undefined;
    const schedule = () => {
      timer = setTimeout(() => {
        const start = () => { setStatus("loading"); setEnabled(true); };
        if ("requestIdleCallback" in window) idle = window.requestIdleCallback(start, { timeout: 4000 });
        else start();
      }, 2500);
    };
    if (document.readyState === "complete") schedule();
    else window.addEventListener("load", schedule, { once: true });
    return () => {
      clearTimeout(timer);
      if (idle !== undefined) window.cancelIdleCallback(idle);
      window.removeEventListener("load", schedule);
    };
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;
    let active = true;
    let player: Player | undefined;
    loadPlayerApi()
      .then((api) => {
        if (!active || !containerRef.current) return;
        const mount = document.createElement("div");
        containerRef.current.appendChild(mount);
        player = new api.Player(mount, {
          host: "https://www.youtube-nocookie.com",
          width: "100%",
          height: "100%",
          videoId,
          playerVars: {
            autoplay: 1,
            mute: 1,
            loop: 1,
            playlist: videoId,
            controls: 0,
            rel: 0,
            playsinline: 1,
            origin: window.location.origin,
          },
          events: {
            onReady: ({ target }) => {
              if (!active) return;
              playerRef.current = target;
              if (wantsMusicRef.current) target.unMute();
              else target.mute();
              target.setVolume(35);
              target.playVideo();
              setStatus("ready");
            },
            onStateChange: ({ target, data }) => {
              if (active && data === 1) setMusicOn(!target.isMuted());
            },
            onAutoplayBlocked: () => {
              if (active) setMusicOn(false);
            },
            onError: () => {
              if (active) {
                setStatus("unavailable");
                setMusicOn(false);
              }
            },
          },
        });
      })
      .catch(() => {
        if (active) setStatus("unavailable");
      });

    return () => {
      active = false;
      playerRef.current = null;
      player?.destroy();
    };
  }, [videoId, enabled]);

  const toggleMusic = () => {
    if (!enabled) {
      wantsMusicRef.current = true;
      setStatus("loading");
      setEnabled(true);
      return;
    }
    const player = playerRef.current;
    if (!player || status !== "ready") return;
    if (musicOn) player.mute();
    else {
      player.unMute();
      player.playVideo();
    }
    setMusicOn(!musicOn);
  };

  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden bg-[radial-gradient(ellipse_at_70%_25%,#35420e_0%,#172018_40%,#080b09_85%)]"
        aria-hidden="true"
      >
        <div
          ref={containerRef}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 [&_iframe]:h-full [&_iframe]:w-full [&_iframe]:border-0"
          style={{
            width: "max(200vw, calc(200vh * 16 / 9))",
            height: "max(200vh, calc(200vw * 9 / 16))",
          }}
        />
      </div>
      <button
        type="button"
        onClick={toggleMusic}
        disabled={status === "loading" || status === "unavailable"}
        aria-pressed={musicOn}
        aria-label={
          status === "unavailable"
            ? "Music unavailable"
            : musicOn
              ? "Turn music off"
              : "Turn music on"
        }
        title={status === "loading" ? "Loading music" : undefined}
        className="absolute bottom-7 right-5 z-20 flex items-center gap-2 rounded-full border border-white/25 bg-black/30 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-white backdrop-blur-sm transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] disabled:opacity-40 sm:right-8 sm:px-4 sm:text-xs"
      >
        <svg
          className="h-3.5 w-3.5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M11 5L6 9H3v6h3l5 4V5z" />
          {musicOn ? (
            <>
              <path d="M15 8a6 6 0 010 8" />
              <path d="M18 5a10 10 0 010 14" />
            </>
          ) : (
            <path d="M16 9l5 6m0-6l-5 6" />
          )}
        </svg>
        {status === "loading" ? "Loading…" : status === "unavailable"
          ? "Unavailable"
          : `Music ${musicOn ? "on" : "off"}`}
      </button>
    </>
  );
}

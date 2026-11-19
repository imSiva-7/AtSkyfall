"use client";

import { forwardRef, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const CARD_BACKGROUNDS = [
  "radial-gradient(ellipse at 80% 20%, #548496 0%, #244b61 65%)",
  "radial-gradient(ellipse at 20% 0%, #a6b880 0%, #52673b 70%)",
  "radial-gradient(ellipse at 80% 0%, #e7ab55 0%, #a45627 70%)",
  "radial-gradient(ellipse at 20% 10%, #9c85c0 0%, #53406f 70%)",
];

const TEAM_CARD_BACKGROUNDS = [
  "radial-gradient(ellipse at 20% 0%, #845a42, #3e2920 80%)",
  "radial-gradient(ellipse at 80% 0%, #456a96, #243a5c 80%)",
  "radial-gradient(ellipse at 20% 0%, #43877e, #204e48 80%)",
  "radial-gradient(ellipse at 80% 0%, #94687c, #542c43 80%)",
  "radial-gradient(ellipse at 20% 0%, #a78a3d, #4d3715 80%)",
  "radial-gradient(ellipse at 80% 0%, #6963a1, #302b59 80%)",
];

const PROJECTS = [
  {
    id: "magizhairy",
    title: "Magizh Production",
    url: "https://magizhdairy.vercel.app",
    display: "magizhdairy.app",
    tag: "Full-stack Application",
    desc: "Dairy operations application with production records, suppliers, customers, payments, and analytics.",
    thumb: "/project-previews/magizh-production-refresh-2026-10-14.webp",
    mobileThumb: "/project-previews/magizh-production-mobile-v2.webp",
  },
  {
    id: "magizhdairy",
    title: "Magizh Dairy",
    url: "https://magizhdairy.com",
    display: "magizhdairy.com",
    tag: "E-commerce",
    desc: "Production dairy brand website with product catalog, SEO, and responsive design.",
    thumb: "/project-previews/magizh-dairy-refresh-2026-10-14.webp",
    mobileThumb: "/project-previews/magizh-dairy-mobile-v2.jpg",
  },
  {
    id: "nilapureoil",
    title: "Nila Pure",
    url: "https://nilapureoils.vercel.app",
    display: "nilapureoil.app",
    tag: "E-Commerce",
    desc: "Pure oil brand storefront with product listings, brand storytelling, and clean checkout.",
    thumb: "/project-previews/nila-pure-oils-refresh-2026-10-14.webp",
    mobileThumb: "/project-previews/nila-pure-oil-mobile-v2.webp",
  },
  {
    id: "formadesignstudio",
    title: "FormaDesign Studio",
    url: "https://formadesignstudio.vercel.app",
    display: "formadesignstudio.vercel.app",
    tag: "Portfolio Website",
    desc: "Creative design agency portfolio with bold typography, project showcases, and contact flows.",
    thumb: "/project-previews/forma-design-desktop.webp",
    mobileThumb: "/project-previews/forma-design-mobile-v2.webp",
  },
];

const TEAM_PROJECTS = [
  {
    id: "carromel",
    title: "Carromel",
    url: "https://carromel.com",
    display: "carromel.com",
    tag: "Team Project",
    desc: "A website I worked on as part of a team.",
    thumb: "/project-previews/carromel-team-2026-10-14.webp",
    mobileThumb: "/project-previews/carromel-mobile-v2.webp",
  },
  {
    id: "weboin",
    title: "Weboin",
    url: "https://dev.weboin.com",
    display: "dev.weboin.com",
    tag: "Team Project",
    desc: "A website I worked on as part of a team.",
    thumb: "/project-previews/weboin-dev-desktop.webp",
    mobileThumb: "/project-previews/weboin-dev-mobile-v2.webp",
  },
  {
    id: "aivida",
    title: "Aivida",
    url: "https://aivida.in",
    display: "aivida.in",
    tag: "Team Project",
    desc: "A website I worked on as part of a team.",
    thumb: "/project-previews/aivida-team-2026-10-14.webp",
    mobileThumb: "/project-previews/aivida-mobile-v2.webp",
  },
  {
    id: "dupattastic",
    title: "Dupattastic",
    url: "https://dupattastic.com",
    display: "dupattastic.com",
    tag: "Team Project",
    desc: "A website I worked on as part of a team.",
    thumb: "/project-previews/dupattastic-team-2026-10-14.webp",
    mobileThumb: "/project-previews/dupattastic-mobile-v2.webp",
  },
  {
    id: "maxgold",
    title: "Max Gold",
    url: "https://www.maxgold.cash",
    display: "maxgold.cash",
    tag: "Team Project",
    desc: "The Max Gold website, which I worked on as part of a team.",
    thumb: "/project-previews/max-gold-desktop.webp",
    mobileThumb: "/project-previews/max-gold-mobile.webp",
  },
  {
    id: "wipfin",
    title: "Wipfin",
    url: "https://wipfin.com",
    display: "wipfin.com",
    tag: "Team Project",
    desc: "The Wipfin website, which I worked on as part of a team.",
    thumb: "/project-previews/wipfin-desktop.webp",
    mobileThumb: "/project-previews/wipfin-mobile.webp",
  },
];

function ProjectCard({
  project,
  index,
  reduceMotion,
  team = false,
  duplicate = false,
}: {
  project: (typeof PROJECTS)[0];
  index: number;
  reduceMotion: boolean;
  team?: boolean;
  duplicate?: boolean;
}) {
  const [previewFailed, setPreviewFailed] = useState(false);
  const [mobileFailed, setMobileFailed] = useState(false);
  const backgrounds = team ? TEAM_CARD_BACKGROUNDS : CARD_BACKGROUNDS;

  return (
    <motion.article
      initial={reduceMotion || duplicate ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      aria-hidden={duplicate || undefined}
      className="w-[86vw] max-w-[390px] shrink-0 snap-center sm:w-[390px] sm:max-w-none lg:w-[420px]"
    >
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={duplicate ? -1 : undefined}
        aria-label={`Visit ${project.title} (opens in a new tab)`}
        className="work-project-card group relative flex h-[520px] flex-col overflow-hidden rounded-[32px] border border-white/20 p-6 text-white shadow-[0_24px_50px_#00000030] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] sm:h-[560px] sm:p-8"
        style={{ background: backgrounds[index % backgrounds.length] }}
      >
        <div
          className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full border border-white/20 bg-white/5"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute right-8 top-9 h-12 w-12 rounded-full bg-[#d9ee84] opacity-90"
          aria-hidden="true"
        />
        <div className="relative z-10">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">
            {team ? "In collaboration" : project.tag}
          </p>
          <h3 className="max-w-[230px] text-3xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-[34px]">
            {project.title}
          </h3>
        </div>
        <div className="relative min-h-0 flex-1" aria-hidden="true">
          <div className="absolute bottom-6 left-4 right-4 h-7 rounded-[50%] bg-black/25 blur-xl" />
          <div
            className={`work-desktop ${reduceMotion ? "" : "work-device-motion work-desktop-motion"}`}
          >
            <div className="work-desktop-screen">
              {previewFailed ? (
                <div className="flex h-full items-center justify-center bg-[#f0f0ed] px-4 text-center text-sm font-bold text-black">
                  {project.title}
                </div>
              ) : (
                <Image
                  src={project.thumb}
                  alt=""
                  fill
                  sizes="(max-width: 639px) 70vw, 340px"
                  loading="lazy"
                  onError={() => setPreviewFailed(true)}
                  className="object-cover object-top"
                />
              )}
            </div>
            <div className="work-desktop-chin" />
            <div className="work-desktop-stand" />
            <div className="work-desktop-foot" />
          </div>
          <div
            className={`work-phone ${reduceMotion ? "" : "work-device-motion work-phone-motion"}`}
          >
            <div className="work-phone-screen">
              {mobileFailed ? (
                <div className="flex h-full items-center justify-center p-2 text-center text-[10px] font-bold text-black">
                  {project.title}
                </div>
              ) : (
                <Image
                  src={project.mobileThumb}
                  alt=""
                  fill
                  sizes="120px"
                  loading="lazy"
                  onError={() => setMobileFailed(true)}
                  className="object-cover object-top"
                />
              )}
            </div>
            <div className="work-phone-speaker" />
          </div>
        </div>
        <div className="relative z-10 flex items-end justify-between gap-4 border-t border-[#d9ee84]/60 pt-4">
          <div className="min-w-0">
            <p className="mb-1 text-[10px] text-white/65">
              {String(index + 1).padStart(2, "0")} / PROJECT
            </p>
            <p className="truncate text-xs font-semibold">{project.display}</p>
          </div>
          <span
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#d9ee84] bg-black/20 text-[#d9ee84] transition-colors group-hover:bg-[#d9ee84] group-hover:text-black"
            aria-hidden="true"
          >
            ↗
          </span>
        </div>
        <span className="sr-only">{project.desc}</span>
      </a>
    </motion.article>
  );
}

const Work = forwardRef<HTMLElement, { team?: boolean }>(
  ({ team = false }, ref) => {
    const projects = team ? TEAM_PROJECTS : PROJECTS;
    const showcaseLabel = team ? "Team project showcase" : "Project showcase";
    const reduceMotion = useReducedMotion() ?? false;
    const trackRef = useRef<HTMLDivElement>(null);
    const [paused, setPaused] = useState(false);
    const resumeAtRef = useRef(0);

    useEffect(() => {
      const section = trackRef.current?.closest("section");
      if (!section) return;
      let inView = false;
      const update = () => {
        section.dataset.visible = String(inView && !document.hidden);
      };
      const observer = new IntersectionObserver(([entry]) => {
        inView = entry.isIntersecting;
        update();
      });
      section.dataset.visible = "false";
      observer.observe(section);
      document.addEventListener("visibilitychange", update);
      return () => {
        observer.disconnect();
        document.removeEventListener("visibilitychange", update);
        delete section.dataset.visible;
      };
    }, []);

    useEffect(() => {
      const track = trackRef.current;
      if (!track || reduceMotion || paused) return;
      let frame = 0;
      let previousTime = 0;
      // Use layout widths so card hover effects do not affect scroll distances.
      const initialLoopWidth =
        (track.firstElementChild as HTMLElement | null)?.offsetWidth ?? 0;
      if (track.scrollLeft === 0) track.scrollLeft = initialLoopWidth;
      let scrollPosition = track.scrollLeft;
      let lastAppliedPosition = scrollPosition;
      let dragging = false;
      let visible = false;
      const pointerDown = () => {
        dragging = true;
      };
      const pointerUp = () => {
        dragging = false;
        resumeAtRef.current = performance.now() + 3000;
      };
      track.addEventListener("pointerdown", pointerDown);
      const userScroll = () => {
        if (Math.abs(track.scrollLeft - lastAppliedPosition) > 1) {
          scrollPosition = track.scrollLeft;
          resumeAtRef.current = performance.now() + 3000;
        }
      };
      track.addEventListener("scroll", userScroll, { passive: true });
      window.addEventListener("pointerup", pointerUp);
      window.addEventListener("pointercancel", pointerUp);

      const animate = (time: number) => {
        const elapsed = previousTime ? Math.min(time - previousTime, 64) : 0;
        previousTime = time;
        const hovering =
          window.matchMedia("(hover: hover)").matches &&
          track.matches(":hover");
        const focused = track.contains(document.activeElement);
        if (
          visible &&
          !document.hidden &&
          !dragging &&
          !hovering &&
          !focused &&
          time >= resumeAtRef.current
        ) {
          const loopWidth =
            (track.firstElementChild as HTMLElement | null)?.offsetWidth ?? 0;
          if (loopWidth > 0) {
            if (Math.abs(track.scrollLeft - lastAppliedPosition) > 1)
              scrollPosition = track.scrollLeft;
            scrollPosition += elapsed * 0.035 * (team ? -1 : 1);
            if (scrollPosition < 0) scrollPosition += loopWidth;
            if (scrollPosition >= loopWidth * 2) scrollPosition -= loopWidth;
            track.scrollLeft = scrollPosition;
            lastAppliedPosition = track.scrollLeft;
          }
        }
        frame = visible && !document.hidden ? requestAnimationFrame(animate) : 0;
      };
      const updateVisibility = () => {
        if (visible && !document.hidden) {
          if (!frame) {
            previousTime = 0;
            frame = requestAnimationFrame(animate);
          }
        } else {
          cancelAnimationFrame(frame);
          frame = 0;
        }
      };
      const observer = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        updateVisibility();
      });
      observer.observe(track);
      document.addEventListener("visibilitychange", updateVisibility);
      return () => {
        cancelAnimationFrame(frame);
        observer.disconnect();
        document.removeEventListener("visibilitychange", updateVisibility);
        track.removeEventListener("pointerdown", pointerDown);
        track.removeEventListener("scroll", userScroll);
        window.removeEventListener("pointerup", pointerUp);
        window.removeEventListener("pointercancel", pointerUp);
      };
    }, [reduceMotion, paused, team]);

    const move = (direction: number) => {
      const track = trackRef.current;
      const group = track?.firstElementChild as HTMLElement | null;
      const card = group?.firstElementChild as HTMLElement | null;
      if (track && card) {
        resumeAtRef.current = performance.now() + 2500;
        if (!reduceMotion && direction < 0 && track.scrollLeft < 4)
          track.scrollLeft += group?.offsetWidth ?? 0;
        track.scrollBy({
          left: direction * (card.offsetWidth + 20),
          behavior: reduceMotion ? "instant" : "smooth",
        });
      }
    };

    return (
      <section
        ref={ref}
        id={team ? "team-projects" : undefined}
        data-motion={paused || reduceMotion ? "paused" : "running"}
        aria-label={
          team ? "Projects worked on with a team" : "Individual projects"
        }
        className={`work-showcase relative scroll-mt-20 overflow-hidden pb-12 pt-16 text-white sm:pb-16 sm:pt-20 ${team ? "bg-[#171e19]" : "bg-[#242424]"}`}
      >
        <div
          className={`pointer-events-none absolute inset-0 overflow-hidden ${team ? "work-orbit-135" : "work-orbit-45"}`}
          aria-hidden="true"
        >
          <span className="work-orbit-sphere work-orbit-sphere-one" />
          <span className="work-orbit-sphere work-orbit-sphere-two" />
        </div>
        <div className="relative z-10 mx-auto mb-10 max-w-5xl px-5 text-center sm:mb-14">
          <p className="mb-5 text-[10px] tracking-[0.4em] text-white/50 sm:text-xs">
            {team ? "// COLLABORATIVE WORK" : "// 03 — SELECTED PROJECTS"}
          </p>
          <h2 className="text-4xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            {team ? "Projects worked on" : "My projects."}
            <br />
            <span className="text-[var(--accent)]">
              {team ? "with a team." : "Skills in action."}
            </span>
          </h2>
          {team && (
            <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">
              Websites I contributed to as part of a team.
            </p>
          )}
        </div>

        <div
          ref={trackRef}
          role="region"
          aria-label={showcaseLabel}
          tabIndex={0}
          className="relative z-10 flex overflow-x-auto overscroll-x-contain px-5 py-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[var(--accent)] sm:px-8 lg:px-12"
        >
          {(reduceMotion ? [1] : [0, 1, 2]).map((copy) => (
            <div key={copy} className="flex shrink-0 gap-5 pr-5">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  reduceMotion={reduceMotion}
                  team={team}
                  duplicate={copy !== 1}
                />
              ))}
            </div>
          ))}
        </div>

        <div className="mx-auto mt-5 flex max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">
            Swipe or explore a project ↗
          </p>
          <div className="flex gap-2">
            {!reduceMotion && (
              <button
                type="button"
                aria-label={
                  paused
                    ? `Play ${team ? "team " : ""}project scrolling`
                    : `Pause ${team ? "team " : ""}project scrolling`
                }
                aria-pressed={paused}
                onClick={() => setPaused(!paused)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-sm transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
              >
                {paused ? "▶" : "Ⅱ"}
              </button>
            )}
            <button
              type="button"
              aria-label={team ? "Previous team projects" : "Previous projects"}
              onClick={() => move(-1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-lg transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
            >
              ←
            </button>
            <button
              type="button"
              aria-label={team ? "Next team projects" : "Next projects"}
              onClick={() => move(1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-lg transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
            >
              →
            </button>
          </div>
        </div>
        {!team && (
          <div className="mt-10 px-5 text-center sm:mt-12">
            <a
              href="#contact"
              className="inline-flex w-full max-w-md items-center justify-center gap-3 rounded-xl bg-[var(--accent)] px-7 py-5 text-base font-extrabold uppercase tracking-tight text-black transition-colors hover:bg-[#bedb20] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:text-xl"
            >
              Discuss Growth <span aria-hidden="true">↗</span>
            </a>
          </div>
        )}

        <style jsx global>{`
          .work-showcase[data-visible="true"][data-motion="running"]
            .work-orbit-sphere {
            animation-play-state: running;
          }
          .work-orbit-sphere {
            position: absolute;
            display: block;
            border-radius: 50%;
            background: radial-gradient(
              circle at 32% 28%,
              #f2ffb4,
              #b7d744 44%,
              #456524 78%
            );
            box-shadow: inset -10px -12px 20px #24341488;
          }
          .work-orbit-sphere-one {
            width: clamp(80px, 10vw, 160px);
            aspect-ratio: 1;
            top: 20%;
            left: 9%;
            opacity: 0.5;
          }
          .work-orbit-sphere-two {
            width: clamp(36px, 5vw, 74px);
            aspect-ratio: 1;
            right: 13%;
            bottom: 14%;
            opacity: 0.45;
          }
          .work-orbit-45 .work-orbit-sphere-one,
          .work-orbit-135 .work-orbit-sphere-two {
            animation: work-sphere-45 16s ease-in-out infinite alternate paused;
          }
          .work-orbit-135 .work-orbit-sphere-one,
          .work-orbit-45 .work-orbit-sphere-two {
            animation: work-sphere-135 13s ease-in-out infinite alternate paused;
          }
          @keyframes work-sphere-45 {
            to {
              transform: translate(16vw, -16vw);
            }
          }
          @keyframes work-sphere-135 {
            to {
              transform: translate(-16vw, -16vw);
            }
          }
          .work-desktop {
            position: absolute;
            top: 18%;
            left: 2%;
            width: 88%;
            transform: rotate(-7deg);
            filter: drop-shadow(0 16px 16px #0005);
          }
          .work-desktop-screen {
            position: relative;
            aspect-ratio: 16 / 10;
            overflow: hidden;
            border: 8px solid #171918;
            border-bottom-width: 5px;
            border-radius: 13px 13px 2px 2px;
            background: #f0f0ed;
          }
          .work-desktop-chin {
            height: 19px;
            border-radius: 0 0 10px 10px;
            background: linear-gradient(110deg, #999b96, #e1e1dc 45%, #898b85);
          }
          .work-desktop-stand {
            width: 18%;
            height: 31px;
            margin: auto;
            background: linear-gradient(90deg, #676963, #d7d7d0 50%, #6e706a);
            clip-path: polygon(15% 0, 85% 0, 100% 100%, 0 100%);
          }
          .work-desktop-foot {
            width: 43%;
            height: 8px;
            margin: auto;
            border-radius: 50%;
            background: linear-gradient(#d3d4ce, #6e706a);
          }
          .work-phone {
            position: absolute;
            z-index: 2;
            right: 0;
            bottom: 7%;
            width: 29%;
            aspect-ratio: 390 / 844;
            padding: 4px;
            transform: rotate(8deg);
            border: 2px solid #a6a8a0;
            border-radius: 18px;
            background: #171918;
            box-shadow:
              0 16px 20px #0008,
              inset 0 0 0 1px #555;
          }
          .work-phone-screen {
            position: relative;
            height: 100%;
            overflow: hidden;
            border-radius: 12px;
            background: #f0f0ed;
          }
          .work-phone-speaker {
            position: absolute;
            top: 7px;
            left: 39%;
            width: 22%;
            height: 3px;
            border-radius: 4px;
            background: #171918;
          }
          .work-device-motion {
            will-change: transform;
          }
          .work-desktop-motion {
            animation: work-desktop-float 7s ease-in-out infinite;
            transform-origin: 55% 65%;
          }
          .work-phone-motion {
            animation: work-phone-float 5.8s ease-in-out infinite;
            transform-origin: 50% 70%;
          }
          .work-showcase .work-desktop-motion,
          .work-showcase .work-phone-motion {
            animation-play-state: paused;
          }
          .work-showcase[data-visible="true"][data-motion="running"]
            .work-desktop-motion,
          .work-showcase[data-visible="true"][data-motion="running"]
            .work-phone-motion {
            animation-play-state: running;
          }
          .work-showcase[data-visible="true"] .work-project-card:hover .work-desktop-motion,
          .work-showcase[data-visible="true"] .work-project-card:focus-visible .work-desktop-motion {
            animation-play-state: paused;
            transform: rotate(-3deg) translate3d(0, -9px, 0) scale(1.015);
          }
          .work-showcase[data-visible="true"] .work-project-card:hover .work-phone-motion,
          .work-showcase[data-visible="true"] .work-project-card:focus-visible .work-phone-motion {
            animation-play-state: paused;
            transform: rotate(3deg) translate3d(0, -12px, 0) scale(1.035);
          }
          @keyframes work-desktop-float {
            0%,
            100% {
              transform: rotate(-7deg) translate3d(0, 0, 0);
            }
            50% {
              transform: rotate(-5.5deg) translate3d(0, -6px, 0);
            }
          }
          @keyframes work-phone-float {
            0%,
            100% {
              transform: rotate(8deg) translate3d(0, 0, 0);
            }
            50% {
              transform: rotate(6deg) translate3d(0, -9px, 0);
            }
          }
          @media (prefers-reduced-motion: reduce) {
            .work-project-card,
            .work-orbit-sphere {
              animation: none !important;
            }
          }
        `}</style>
      </section>
    );
  },
);

Work.displayName = "Work";
export default Work;

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

const PROJECTS = [
  {
    id: "magizhairy",
    title: "Magizh Production",
    url: "https://magizhdairy.vercel.app",
    display: "magizhdairy.app",
    tag: "Full-stack Application",
    desc: "Dairy operations application with production records, suppliers, customers, payments, and analytics.",
    thumb: "/project-previews/magizh-production-refresh-2026-10-14.webp",
  },
  {
    id: "magizhdairy",
    title: "Magizh Dairy .com",
    url: "https://magizhdairy.com",
    display: "magizhdairy.com",
    tag: "Responsive Website",
    desc: "Production dairy brand website with product catalog, SEO, and responsive design.",
    thumb: "/project-previews/magizh-dairy-refresh-2026-10-14.webp",
  },
  {
    id: "nilapureoil",
    title: "Nila Pure Oil",
    url: "https://nilapureoils.vercel.app",
    display: "nilapureoil.app",
    tag: "E-Commerce",
    desc: "Pure oil brand storefront with product listings, brand storytelling, and clean checkout.",
    thumb: "/project-previews/nila-pure-oils-refresh-2026-10-14.webp",
  },
  {
    id: "dreamworksdesign",
    title: "Dreamworks Design",
    url: "https://dreamworksdesign.vercel.app",
    display: "dreamworksdesign.app",
    tag: "Portfolio Website",
    desc: "Creative design agency portfolio with bold typography, project showcases, and contact flows.",
    thumb: "/project-previews/dreamworks-refresh-2026-10-14.webp",
  },
];

const TEAM_PROJECTS = [
  { id: "carromel", title: "Carromel", url: "https://carromel.com", display: "carromel.com", tag: "Team Project", desc: "A website I worked on as part of a team.", thumb: "/project-previews/carromel-team-2026-10-14.webp" },
  { id: "weboin", title: "Weboin", url: "https://weboin.com", display: "weboin.com", tag: "Team Project", desc: "A website I worked on as part of a team.", thumb: "/project-previews/weboin-team-2026-10-14.webp" },
  { id: "aivida", title: "Aivida", url: "https://aivida.in", display: "aivida.in", tag: "Team Project", desc: "A website I worked on as part of a team.", thumb: "/project-previews/aivida-team-2026-10-14.webp" },
  { id: "dupattastic", title: "Dupattastic", url: "https://dupattastic.com", display: "dupattastic.com", tag: "Team Project", desc: "A website I worked on as part of a team.", thumb: "/project-previews/dupattastic-team-2026-10-14.webp" },
];

function ProjectCard({ project, index, reduceMotion, duplicate = false }: {
  project: (typeof PROJECTS)[0]; index: number; reduceMotion: boolean; duplicate?: boolean;
}) {
  const [previewFailed, setPreviewFailed] = useState(false);

  return (
    <motion.article initial={reduceMotion || duplicate ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}
      aria-hidden={duplicate || undefined}
      className="w-[82vw] max-w-[340px] shrink-0 snap-center sm:w-[340px] sm:max-w-none lg:w-[360px]">
      <a href={project.url} target="_blank" rel="noopener noreferrer" tabIndex={duplicate ? -1 : undefined} aria-label={`Visit ${project.title} (opens in a new tab)`}
        className="group relative flex h-[460px] flex-col overflow-hidden rounded-2xl p-6 text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] sm:h-[490px] sm:p-7"
        style={{ background: CARD_BACKGROUNDS[index] }}>
        <div className="relative z-10">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">{project.tag}</p>
          <h3 className="max-w-[240px] text-3xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-[34px]">{project.title}</h3>
        </div>

        <div className="relative flex min-h-0 flex-1 items-center justify-center py-6" aria-hidden="true">
          <div className="absolute bottom-8 left-8 right-8 h-8 rounded-[50%] bg-black/25 blur-xl" />
          <div className={`work-device work-device-laptop ${reduceMotion ? "" : "work-device-motion"}`}>
            <div className="overflow-hidden border-[#171717] bg-[#171717] shadow-2xl aspect-[16/10] rounded-t-lg rounded-b-sm border-[6px]">
              {previewFailed ? (
                <div className="flex h-full flex-col items-center justify-center gap-3 bg-[#f0f0ed] px-4 text-center text-black">
                  <span className="text-xl font-extrabold tracking-tight">{project.title}</span>
                  <span className="text-[10px] text-black/50">Explore the project ↗</span>
                </div>
              ) : (
                <Image src={project.thumb} alt="" width={800} height={500} sizes="(max-width: 639px) 82vw, 380px" loading="lazy" onError={() => setPreviewFailed(true)} className="h-full w-full object-cover object-top" />
              )}
            </div>
            <div className="work-laptop-base" />
          </div>
        </div>

        <div className="relative z-10 flex items-end justify-between gap-4 border-t border-white/20 pt-4">
          <div className="min-w-0">
            <p className="mb-1 text-[10px] text-white/65">{String(index + 1).padStart(2, "0")} / PROJECT</p>
            <p className="truncate text-xs font-semibold">{project.display}</p>
          </div>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--accent)] bg-black/20 text-[var(--accent)] transition-colors group-hover:bg-[var(--accent)] group-hover:text-black" aria-hidden="true">↗</span>
        </div>
        <span className="sr-only">{project.desc}</span>
      </a>
    </motion.article>
  );
}

const Work = forwardRef<HTMLElement, { team?: boolean }>(({ team = false }, ref) => {
  const projects = team ? TEAM_PROJECTS : PROJECTS;
  const showcaseLabel = team ? "Team project showcase" : "Project showcase";
  const reduceMotion = useReducedMotion() ?? false;
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const resumeAtRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || reduceMotion || paused) return;
    let frame = 0;
    let previousTime = 0;
    const initialLoopWidth = track.firstElementChild?.getBoundingClientRect().width ?? 0;
    if (team && track.scrollLeft === 0) track.scrollLeft = initialLoopWidth;
    let scrollPosition = track.scrollLeft;
    let lastAppliedPosition = scrollPosition;
    let dragging = false;
    let visible = false;
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
    observer.observe(track);
    const pointerDown = () => { dragging = true; };
    const pointerUp = () => { dragging = false; resumeAtRef.current = performance.now() + 2000; };
    track.addEventListener("pointerdown", pointerDown);
    window.addEventListener("pointerup", pointerUp);
    window.addEventListener("pointercancel", pointerUp);

    const animate = (time: number) => {
      const elapsed = previousTime ? Math.min(time - previousTime, 64) : 0;
      previousTime = time;
      const hovering = window.matchMedia("(hover: hover)").matches && track.matches(":hover");
      const focused = track.contains(document.activeElement);
      if (visible && !dragging && !hovering && !focused && time >= resumeAtRef.current) {
        const loopWidth = track.firstElementChild?.getBoundingClientRect().width ?? 0;
        if (loopWidth > 0) {
          if (Math.abs(track.scrollLeft - lastAppliedPosition) > 1) scrollPosition = track.scrollLeft;
          scrollPosition = ((scrollPosition + elapsed * 0.05 * (team ? -1 : 1)) % loopWidth + loopWidth) % loopWidth;
          track.scrollLeft = scrollPosition;
          lastAppliedPosition = track.scrollLeft;
        }
      }
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      track.removeEventListener("pointerdown", pointerDown);
      window.removeEventListener("pointerup", pointerUp);
      window.removeEventListener("pointercancel", pointerUp);
    };
  }, [reduceMotion, paused, team]);

  const move = (direction: number) => {
    const track = trackRef.current;
    const card = track?.firstElementChild?.firstElementChild;
    if (track && card) {
      resumeAtRef.current = performance.now() + 2500;
      if (!reduceMotion && direction < 0 && track.scrollLeft < 4) track.scrollLeft += track.firstElementChild!.getBoundingClientRect().width;
      track.scrollBy({ left: direction * (card.getBoundingClientRect().width + 20), behavior: reduceMotion ? "instant" : "smooth" });
    }
  };

  return (
    <section ref={ref} id={team ? "team-projects" : undefined} aria-label={team ? "Projects worked on with a team" : "Individual projects"} className="relative scroll-mt-20 overflow-hidden bg-[#242424] pb-12 pt-16 text-white sm:pb-16 sm:pt-20">
      <div className="mx-auto mb-10 max-w-5xl px-5 text-center sm:mb-14">
        <p className="mb-5 text-[10px] tracking-[0.4em] text-white/50 sm:text-xs">{team ? "// COLLABORATIVE WORK" : "// 03 — SELECTED PROJECTS"}</p>
        <h2 className="text-4xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">{team ? "Projects worked on" : "My projects."}<br /><span className="text-[var(--accent)]">{team ? "with a team." : "Skills in action."}</span></h2>
        {team && <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">Websites I contributed to as part of a team.</p>}
      </div>

      <div ref={trackRef} role="region" aria-label={showcaseLabel} tabIndex={0}
        className="flex overflow-x-auto px-5 pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[var(--accent)] sm:px-8 lg:px-12">
        {(reduceMotion ? [0] : [0, 1, 2]).map(copy => (
          <div key={copy} className="flex shrink-0 gap-5 pr-5">
            {projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} reduceMotion={reduceMotion} duplicate={copy > 0} />)}
          </div>
        ))}
      </div>

      <div className="mx-auto mt-5 flex max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">Swipe or explore a project ↗</p>
        <div className="flex gap-2">
          {!reduceMotion && <button type="button" aria-label={paused ? `Play ${team ? "team " : ""}project scrolling` : `Pause ${team ? "team " : ""}project scrolling`} aria-pressed={paused} onClick={() => setPaused(!paused)} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-sm transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:outline-2 focus-visible:outline-[var(--accent)]">{paused ? "▶" : "Ⅱ"}</button>}
          <button type="button" aria-label={team ? "Previous team projects" : "Previous projects"} onClick={() => move(-1)} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-lg transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:outline-2 focus-visible:outline-[var(--accent)]">←</button>
          <button type="button" aria-label={team ? "Next team projects" : "Next projects"} onClick={() => move(1)} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-lg transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:outline-2 focus-visible:outline-[var(--accent)]">→</button>
        </div>
      </div>
      {!team && <div className="mt-10 px-5 text-center sm:mt-12">
        <a href="#contact" className="inline-flex w-full max-w-md items-center justify-center gap-3 rounded-xl bg-[var(--accent)] px-7 py-5 text-base font-extrabold uppercase tracking-tight text-black transition-colors hover:bg-[#bedb20] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:text-xl">Discuss a development role <span aria-hidden="true">↗</span></a>
      </div>}

      <style jsx global>{`
        .work-device { position: relative; }
        .work-device-laptop { width: 112%; flex-shrink: 0; transform: rotate(-7deg); }
        .work-device-motion { transition: transform 400ms ease; }
        .group:hover .work-device-laptop.work-device-motion { transform: rotate(-3deg) translateY(-6px); }
        .work-laptop-base { height: 12px; width: 116%; margin-left: -8%; border-radius: 2px 2px 50% 50%; background: linear-gradient(#c9c9c9, #777); box-shadow: 0 10px 12px #00000030; }
        .work-laptop-base::before { content: ''; display: block; width: 22%; height: 4px; margin: auto; border-radius: 0 0 5px 5px; background: #666; }
      `}</style>
    </section>
  );
});

Work.displayName = "Work";
export default Work;


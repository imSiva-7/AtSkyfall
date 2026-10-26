"use client";

import { forwardRef } from "react";

const EVENTS = [
  { y: "Oct 2026–Present", t: "Full Stack Developer Intern", d: "Weboin Technologies, Chennai · Shared UI and custom React components in a Next.js monorepo, CI/CD deployments, and UI/UX design reviews.", icon: "M8 6l-6 6 6 6M16 6l6 6-6 6M14 3l-4 18" },
  { y: "Jun–Aug 2026", t: "Full Stack Developer Intern", d: "Aivida Healthcare Technologies, Chennai · Feature documentation, Git and GitHub collaboration, and code reviews and automated testing in an Agile/Scrum team using Docker and Kubernetes.", icon: "M8 6l-6 6 6 6M16 6l6 6-6 6M14 3l-4 18" },
  { y: "2025–Present", t: "Freelance Web Development", d: "Magizh Production · A dairy operations application for production records, customers, suppliers, payments, and analytics.", icon: "M8 6l-6 6 6 6M16 6l6 6-6 6M14 3l-4 18" },
  { y: "2024–2026", t: "M.Sc. Information Technology", d: "D.G. Vaishnav College · Postgraduate studies in information technology.", icon: "M12 3L2 8l10 5 10-5-10-5zM6 10v7c4 3 8 3 12 0v-7M22 8v8" },
  { y: "2021–2024", t: "B.Sc. Computer Science", d: "Loyola College · Undergraduate studies in computer science.", icon: "M12 3L2 8l10 5 10-5-10-5zM6 10v7c4 3 8 3 12 0v-7M22 8v8" },
];

const Timeline = forwardRef<HTMLElement>((_, ref) => (
  <section ref={ref} className="scroll-mt-20 bg-[var(--background)] py-20 sm:py-28 md:py-32">
    <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-12">
      <div className="mb-12 border-b border-black/15 pb-8 sm:flex sm:items-end sm:justify-between sm:gap-8">
        <div>
          <p className="mb-4 text-[10px] tracking-[0.5em] text-black/50 sm:text-xs">{"// 04 — EDUCATION & EXPERIENCE"}</p>
          <h2 className="text-4xl font-extrabold leading-none tracking-tight sm:text-5xl md:text-6xl">MY JOURNEY<span className="text-[var(--accent)]">.</span></h2>
        </div>
        <p className="mt-5 max-w-xs text-sm leading-relaxed text-black/60 sm:mt-0">Full stack internships, freelance development, and the education behind my work.</p>
      </div>

      <div className="relative">
        <svg viewBox="0 0 1000 1200" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block" aria-hidden="true">
          <path d="M500 0 Q440 60 500 120 Q560 180 500 240 Q440 300 500 360 Q560 420 500 480 Q440 540 500 600 Q560 660 500 720 Q440 780 500 840 Q560 900 500 960 Q440 1020 500 1080 Q560 1140 500 1200" fill="none" stroke="white" strokeWidth="24" strokeLinecap="round" />
        </svg>
        <svg viewBox="0 0 52 100" preserveAspectRatio="none" className="pointer-events-none absolute left-0 top-0 h-full w-[52px] lg:hidden" aria-hidden="true">
          <path d="M26 0V100" fill="none" stroke="white" strokeWidth="18" strokeLinecap="round" />
        </svg>
        <ol className="relative space-y-8 lg:space-y-0">
          {EVENTS.map((event, index) => (
            <li key={`${event.y}-${event.t}`} className={`relative min-h-[190px] pl-24 lg:flex lg:h-[240px] lg:items-center lg:pl-0 ${index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"}`}>
              <span className="absolute left-[10px] top-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#111111] lg:left-[calc(50%-16px)] lg:top-1/2 lg:-translate-y-1/2" aria-hidden="true"><span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" /></span>
              <div className="max-w-sm lg:w-[44%]">
              <div className="mb-3 flex items-center gap-3">
                <svg className="h-7 w-7 shrink-0 text-black/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={event.icon} /></svg>
                <span className="text-[10px] font-bold tracking-[0.2em] text-black/45">MILESTONE {String(index + 1).padStart(2, "0")}</span>
              </div>
              <p className="mb-2 text-xl font-black leading-none tracking-tight text-[var(--accent)] lg:text-2xl">{event.y}</p>
              <h3 className="mb-2 text-lg font-extrabold leading-tight tracking-tight lg:text-xl">{event.t}</h3>
              <p className="max-w-xs text-sm leading-relaxed text-black/60">{event.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>
));

Timeline.displayName = "Timeline";
export default Timeline;

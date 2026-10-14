"use client";

import { forwardRef, type CSSProperties } from "react";

const EVENTS = [
  { y: "2021–2024", t: "B.Sc. Computer Science", d: "Loyola College", x: 120, yPos: 220, labelTop: "4%", icon: "M12 3L2 8l10 5 10-5-10-5zM6 10v7c4 3 8 3 12 0v-7M22 8v8" },
  { y: "2024–2026", t: "M.Sc. Information Technology", d: "D.G. Vaishnav College", x: 610, yPos: 200, labelTop: "0%", icon: "M12 3L2 8l10 5 10-5-10-5zM6 10v7c4 3 8 3 12 0v-7M22 8v8" },
  { y: "2025–Present", t: "Freelance Development", d: "magizhdairy.app", x: 860, yPos: 340, labelTop: "65%", icon: "M8 6l-6 6 6 6M16 6l6 6-6 6M14 3l-4 18" },
];

const Timeline = forwardRef<HTMLElement>((_, ref) => (
  <section ref={ref} className="scroll-mt-20 bg-[var(--background)] py-20 sm:py-28 md:py-32">
    <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-12">
      <div className="mb-12 border-b border-black/15 pb-8 sm:flex sm:items-end sm:justify-between sm:gap-8">
        <div>
          <p className="mb-4 text-[10px] tracking-[0.5em] text-black/50 sm:text-xs">// 04 — EDUCATION & EXPERIENCE</p>
          <h2 className="text-4xl font-extrabold leading-none tracking-tight sm:text-5xl md:text-6xl">MY JOURNEY<span className="text-[var(--accent)]">.</span></h2>
        </div>
        {/* <p className="mt-5 max-w-xs text-sm leading-relaxed text-black/60 sm:mt-0">A winding path through design, development, and independent work.</p> */}
      </div>

      <div className="relative lg:aspect-[1000/600]">
        <svg viewBox="0 0 1000 600" className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block" aria-hidden="true">
          <path d="M-20 220H120C235 220 220 380 360 380S460 200 610 200S730 340 860 340S950 250 1020 250" fill="none" stroke="white" strokeWidth="32" strokeLinecap="round" />
          {EVENTS.map(event => (
            <g key={event.y}>
              <circle cx={event.x} cy={event.yPos} r="19" fill="#111111" />
              <circle cx={event.x} cy={event.yPos} r="6" fill="var(--accent)" />
            </g>
          ))}
        </svg>

        <svg viewBox="0 0 80 540" preserveAspectRatio="none" className="pointer-events-none absolute left-0 top-0 h-full w-16 lg:hidden" aria-hidden="true">
          <path d="M32 0V20C32 70 66 70 66 110S32 150 32 200C32 250 10 250 10 290S32 330 32 380C32 430 66 430 66 470S32 510 32 540" fill="none" stroke="white" strokeWidth="18" />
        </svg>

        <ol className="relative lg:static">
          {EVENTS.map((event, index) => (
            <li key={event.y}
              style={{ "--milestone-left": `${event.x / 10 - 10}%`, "--milestone-top": `calc(${event.yPos / 6}% ${index < 2 ? "-" : "+"} 32px)` } as CSSProperties}
              className={`relative min-h-[180px] pb-10 pl-24 last:pb-0 lg:absolute lg:left-[var(--milestone-left)] lg:top-[var(--milestone-top)] lg:min-h-0 lg:w-[23%] lg:p-0 ${index < 2 ? "lg:-translate-y-full" : ""}`}>
              <span className="absolute left-[10px] top-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#111111] lg:hidden" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
              </span>
              <div className="mb-3 flex items-center gap-3">
                <svg className="h-7 w-7 shrink-0 text-black/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={event.icon} /></svg>
                <span className="text-[10px] font-bold tracking-[0.2em] text-black/45">MILESTONE {String(index + 1).padStart(2, "0")}</span>
              </div>
              <p className="mb-2 text-xl font-black leading-none tracking-tight text-[var(--accent)] lg:text-2xl">{event.y}</p>
              <h3 className="mb-2 text-lg font-extrabold leading-tight tracking-tight lg:text-xl">{event.t}</h3>
              <p className="max-w-xs text-sm leading-relaxed text-black/60">{event.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>
));

Timeline.displayName = "Timeline";
export default Timeline;

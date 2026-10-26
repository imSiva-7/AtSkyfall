"use client";

import { forwardRef, useId, useState } from "react";
import ServiceFaq from "./ServiceFaq";

const SERVICES = [
  {
    title: "Front-end Development",
    description: "Building shared UI and custom React components in a Next.js monorepo at Weboin Technologies, using TypeScript, JavaScript, HTML, and CSS.",
    deliverables: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Back-end & Data",
    description: "Building REST API routes with Node.js and MongoDB for the Magizh Dairy business management system, supporting operational dashboards and tracking tools.",
    deliverables: ["Node.js", "MongoDB", "REST APIs"],
  },
  {
    title: "UI/UX & Collaboration",
    description: "Presenting UI/UX designs to the project lead and applying feedback at Weboin. Collaborating through Git and GitHub, feature documentation, code reviews, and automated testing in an Agile/Scrum team at Aivida.",
    deliverables: ["UI/UX", "Git", "GitHub", "Agile/Scrum", "Code review", "Documentation"],
  },
  {
    title: "Deployment & Development Tools",
    description: "Working with Git-based CI/CD pipelines and Python scripts to ship revisions and catch build errors before production. Internship tools include Docker, Kubernetes, Visual Studio, and VS Code.",
    deliverables: ["CI/CD", "Python", "Docker", "Kubernetes", "Visual Studio", "VS Code"],
  },
  {
    title: "AI-assisted Development",
    description: "Using Cursor and Claude Code at Weboin for feature planning, bug identification, and autocomplete while developing with TypeScript and Next.js.",
    deliverables: ["Cursor", "Claude Code", "Feature planning", "Debugging"],
  },
];

const Services = forwardRef<HTMLElement>((_, ref) => {
  const [activeService, setActiveService] = useState<number | null>(null);
  const sectionId = useId();

  return (
    <section ref={ref} className="scroll-mt-20 bg-white py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-12">
        <div className="mb-8 border-b border-black/15 pb-8 sm:mb-12 sm:flex sm:items-end sm:justify-between sm:gap-8">
          <div>
            <p className="mb-4 text-[10px] tracking-[0.5em] text-black/50 sm:text-xs">{"// 02 — TECHNICAL SKILLS"}</p>
            <h2 className="text-4xl font-extrabold leading-none tracking-tight sm:text-5xl md:text-6xl">TECHNOLOGIES<br />I WORK WITH<span className="text-[var(--accent)]">.</span></h2>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-black/60 sm:mt-0">My tools and focus areas across interfaces, application data, content management, and deployment.</p>
        </div>
        <div className="grid items-start gap-8 lg:grid-cols-[5fr_7fr] lg:gap-14">
          <div className="relative overflow-hidden rounded-2xl bg-[#111111] p-7 text-white sm:p-10 lg:sticky lg:top-28">
            <svg className="pointer-events-none absolute right-0 top-0 h-32 w-44 opacity-30" viewBox="0 0 180 130" aria-hidden="true">
              <polygon points="60,0 180,0 180,28 0,62 0,34" fill="var(--accent)" />
              <polygon points="90,50 180,33 180,56 90,73" fill="var(--accent-soft, #eaf3b9)" />
              <polygon points="130,87 180,77 180,103 130,113" fill="none" stroke="var(--accent)" />
            </svg>
            <p className="relative mb-8 text-[10px] tracking-[0.3em] text-[var(--accent)]">THOUGHTFUL DESIGN. SOLID CODE.</p>
            <h3 className="relative max-w-sm text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">Learning by<br /><span className="text-[var(--accent)]">building.</span></h3>
            {/* <p className="relative mt-5 max-w-sm text-sm leading-relaxed text-white/60">One person across design and development. Fewer handoffs, a clearer direction, and care at every step.</p> */}
            <div className="relative mt-8 flex items-center gap-3 border-t border-white/15 pt-6 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/70 sm:mt-12">
              <span>Learn</span><span className="text-[var(--accent)]" aria-hidden="true">→</span><span>Build</span><span className="text-[var(--accent)]" aria-hidden="true">→</span><span>Improve</span>
            </div>
          </div>
          <div className="border-t border-black/15">
            {SERVICES.map((service, index) => {
              const expanded = activeService === index;
              const panelId = `${sectionId}-panel-${index}`;
              const buttonId = `${sectionId}-button-${index}`;
              return (
                <div key={service.title} className="border-b border-black/15">
                  <h3>
                    <button id={buttonId} type="button" aria-expanded={expanded} aria-controls={panelId}
                      onClick={() => setActiveService(expanded ? null : index)}
                      className="group flex w-full items-center gap-3 py-6 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] sm:gap-5 sm:py-7">
                      <span className={`shrink-0 text-xs font-semibold tracking-widest ${expanded ? "text-black" : "text-black/40"}`}>{String(index + 1).padStart(2, "0")}</span>
                      <span className="flex-1 text-xl font-extrabold leading-tight tracking-tight sm:text-2xl">{service.title}</span>
                      <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors ${expanded ? "border-[var(--accent)] bg-[var(--accent)]" : "border-black/15 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)]/10"}`} aria-hidden="true">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M1 6h10" />{!expanded && <path d="M6 1v10" />}
                        </svg>
                      </span>
                    </button>
                  </h3>
                  <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!expanded} className="pb-7 sm:pl-10">
                    <p className="max-w-lg text-sm leading-relaxed text-black/65 sm:text-base">{service.description}</p>
                    <p className="mb-3 mt-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-black/45">Technologies & focus areas</p>
                    <ul className="flex flex-wrap gap-2">
                      {service.deliverables.map((deliverable) => (
                        <li key={deliverable} className="rounded-full border border-black/10 bg-white/70 px-3 py-1.5 text-xs text-black/70">{deliverable}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <ServiceFaq />
      </div>
    </section>
  );
});

Services.displayName = "Services";
export default Services;

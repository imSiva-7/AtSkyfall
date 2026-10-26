"use client";

import { forwardRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

const About = forwardRef<HTMLElement>((_, ref) => {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section ref={ref} className="relative scroll-mt-20 bg-[var(--background)] py-20 sm:py-28 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-12">
        <p className="mb-8 text-[10px] tracking-[0.5em] text-black/50 sm:mb-12 sm:text-xs">// 01 — A LITTLE ABOUT ME</p>
        <div className="grid items-center gap-12 lg:grid-cols-[7fr_5fr] lg:gap-16">
          <motion.div initial={reduceMotion ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-[clamp(2.4rem,5vw,4.4rem)] font-extrabold uppercase leading-[0.98] tracking-tight">A designer&apos;s eye.<br /><span className="text-[var(--accent)]">A developer&apos;s mind.</span></h2>
            <p className="mt-7 max-w-xl text-lg font-semibold leading-relaxed sm:text-xl">I&apos;m Siva, a full stack developer seeking opportunities to contribute to a software development team.</p>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-black/60 sm:text-base">My background combines a B.Sc. in Computer Science and an M.Sc. in Information Technology with full stack internships at Weboin Technologies and Aivida Healthcare Technologies, hands-on web projects, and freelance work. I focus on responsive interfaces, clear code, and practical problem-solving.</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {["React & Next.js", "TypeScript", "Full stack development"].map(skill => <span key={skill} className="rounded-full border border-black/15 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-black/65">{skill}</span>)}
            </div>
            <a href="#contact" className="mt-8 inline-flex items-center gap-3 border-b border-black pb-2 text-sm font-bold transition-colors hover:border-[var(--accent)] hover:text-black/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]">Discuss an opportunity <span className="text-lg" aria-hidden="true">↗</span></a>
          </motion.div>

          <motion.div initial={reduceMotion ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="relative mx-auto w-full max-w-lg">
            <div className="relative overflow-hidden rounded-3xl bg-[#111111] p-6 text-white sm:p-8">
              <div className="flex items-center justify-between gap-4 border-b border-white/15 pb-5">
                <span className="text-sm font-extrabold tracking-[0.3em]">S I V A</span>
                <span className="text-[9px] uppercase tracking-[0.15em] text-white/50">Design × development</span>
              </div>
              <svg viewBox="0 0 400 340" className="my-5 w-full" aria-hidden="true" focusable="false">
                <defs>
                  <pattern id="about-canvas-grid" width="24" height="24" patternUnits="userSpaceOnUse"><path d="M24 0H0V24" fill="none" stroke="white" strokeOpacity="0.06" /></pattern>
                </defs>
                <rect width="400" height="340" fill="url(#about-canvas-grid)" />
                <g transform="translate(42 48) rotate(-6 150 115)">
                  <rect x="0" y="0" width="300" height="230" rx="12" fill="#252525" stroke="#4a4a4a" />
                  <path d="M0 30h300" stroke="#4a4a4a" />
                  <circle cx="16" cy="15" r="3" fill="var(--accent)" /><circle cx="27" cy="15" r="3" fill="#666" /><circle cx="38" cy="15" r="3" fill="#666" />
                  <rect x="20" y="52" width="260" height="156" rx="6" fill="#f0f0ed" />
                  <rect x="36" y="70" width="25" height="7" rx="2" fill="#111" />
                  <path d="M203 74h20m10 0h20" stroke="#aaa" strokeWidth="3" />
                  <rect x="36" y="98" width="121" height="10" rx="3" fill="#111" /><rect x="36" y="115" width="90" height="10" rx="3" fill="#111" />
                  <path d="M36 142h109m-109 8h83" stroke="#aaa" strokeWidth="3" />
                  <rect x="36" y="169" width="69" height="22" rx="4" fill="var(--accent)" />
                  <rect x="180" y="97" width="82" height="94" rx="6" fill="#dee3cf" />
                  <circle cx="221" cy="132" r="22" fill="var(--accent)" /><path d="M192 174l20-20 15 14 17-27" fill="none" stroke="#111" strokeWidth="3" />
                </g>
                <g transform="translate(278 207) rotate(9)">
                  <rect width="101" height="70" rx="9" fill="var(--accent)" />
                  <path d="M33 24l-12 11 12 11m35-22l12 11-12 11M57 17L45 53" fill="none" stroke="#111" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <path d="M92 244l7 43 10-14 16 0-33-29z" fill="white" stroke="#111" strokeWidth="2" />
              </svg>
              <div className="flex items-center justify-between border-t border-white/15 pt-5 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/60">
                <span>Thoughtful by design</span><span className="text-[var(--accent)]" aria-hidden="true">↗</span>
              </div>
            </div>
            <div className="absolute -bottom-4 right-5 rounded-full border border-black/10 bg-white px-5 py-3 text-[10px] font-bold uppercase tracking-[0.15em] shadow-sm sm:right-8">Built with care<span className="ml-3 inline-block h-2 w-2 rounded-full bg-[var(--accent)]" aria-hidden="true" /></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

About.displayName = "About";
export default About;

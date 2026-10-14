"use client";

import { forwardRef, type CSSProperties } from "react";
import Image from "next/image";
import { SKILL_LOGOS } from "./skillLogos";
import WhatsAppLink from "./WhatsAppLink";

const POSITIONS = [
  { left: "4%", top: "27%", tilt: "-14deg" },
  { left: "26%", top: "3%", tilt: "9deg" },
  { left: "66%", top: "8%", tilt: "-11deg" },
  { left: "88%", top: "32%", tilt: "16deg" },
  { left: "8%", top: "68%", tilt: "-6deg" },
  { left: "90%", top: "62%", tilt: "12deg" },
  { left: "18%", top: "87%", tilt: "-17deg" },
  { left: "43%", top: "83%", tilt: "7deg" },
  { left: "70%", top: "89%", tilt: "-9deg" },
  { left: "82%", top: "12%", tilt: "13deg" },
];

const Contact = forwardRef<HTMLElement>((_, ref) => (
  <section
    ref={ref}
    id="contact"
    className="relative isolate scroll-mt-16 overflow-hidden bg-[#0b0b0b] px-5 py-32 text-center text-white sm:px-10 sm:py-44 lg:py-48"
  >
    <div
      className="pointer-events-none absolute inset-0 -z-10"
      aria-hidden="true"
    >
      {SKILL_LOGOS.map((skill, index) => (
        <div
          key={skill.id}
          className="floating-skill"
          style={
            {
              "--skill-left": POSITIONS[index].left,
              "--skill-top": POSITIONS[index].top,
              "--skill-tilt": POSITIONS[index].tilt,
              "--skill-delay": `${-index * 1.3}s`,
              "--skill-duration": `${7 + (index % 5)}s`,
              "--skill-drift": `${index % 2 ? -8 : 8}px`,
              "--skill-rise": `${10 + (index % 4) * 4}px`,
              "--skill-scale": [
                1.1, 0.85, 1.15, 0.9, 1, 1.1, 0.9, 1.05, 0.85, 1,
              ][index],
            } as CSSProperties
          }
        >
          <div className="flex h-full w-full items-center justify-center">
            <Image
              src={skill.src}
              alt=""
              width={44}
              height={44}
              className="h-8 w-8 object-contain sm:h-11 sm:w-11"
            />
          </div>
        </div>
      ))}
    </div>
    <div className="mx-auto flex max-w-4xl flex-col items-center">
      <p className="mb-6 text-[10px] font-semibold tracking-[0.4em] text-white/50 sm:text-xs">
        // 05 — CONNECT
      </p>
      <h2 className="text-[clamp(2rem,6.5vw,5.5rem)] font-extrabold uppercase leading-[0.98] tracking-tight">
        Let&apos;s talk
        <br />
        <span className="text-[var(--accent)]">opportunities.</span>
      </h2>
      <p className="mb-8 mt-6 max-w-lg text-sm leading-relaxed text-white/65 sm:text-lg">
        Hiring for a development role? I&apos;d love to discuss how my skills
        and projects could contribute to your team.
      </p>
      <a
        href="mailto:sivabxng@gmail.com"
        className="flex max-w-full items-center justify-center gap-3 rounded-2xl bg-[var(--accent)] px-6 py-5 text-lg font-extrabold text-black transition-colors hover:bg-[#bedb20] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:px-12 sm:py-6 sm:text-2xl"
      >
        <span className="break-all">sivabxng@gmail.com</span>
        <span aria-hidden="true">↗</span>
      </a>
      <div className="mt-4">
        <WhatsAppLink />
      </div>
      <div className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-3 text-[11px] tracking-[0.2em] text-white/60 sm:mt-8 sm:text-xs">
        <a
          href="https://github.com/imSiva-7"
          className="hover:opacity-100 hover:text-[var(--accent)] transition"
        >
          GITHUB
        </a>
        <a
          href="https://www.linkedin.com/in/siva-rama-krishnan-oo7/#"
          className="hover:opacity-100 hover:text-[var(--accent)] transition"
        >
          LINKEDIN
        </a>
      </div>
    </div>
    <style jsx global>{`
      .floating-skill {
        position: absolute;
        left: var(--skill-left);
        top: var(--skill-top);
        width: 72px;
        height: 84px;
        animation: contact-skill-float var(--skill-duration) ease-in-out
          infinite;
        animation-delay: var(--skill-delay);
      }
      @keyframes contact-skill-float {
        0%,
        100% {
          transform: translate(0, 0) rotate(var(--skill-tilt))
            scale(var(--skill-scale));
        }
        50% {
          transform: translate(var(--skill-drift), calc(-1 * var(--skill-rise)))
            rotate(var(--skill-tilt)) scale(var(--skill-scale));
        }
      }
      @media (max-width: 639px) {
        .floating-skill {
          width: 48px;
          height: 56px;
          opacity: 0.7;
        }
        .floating-skill:nth-child(n + 5) {
          display: none;
        }
        .floating-skill:nth-child(1) {
          left: 5%;
          top: 3%;
        }
        .floating-skill:nth-child(2) {
          left: auto;
          right: 11%;
          top: 8%;
        }
        .floating-skill:nth-child(3) {
          left: 18%;
          top: auto;
          bottom: 3%;
        }
        .floating-skill:nth-child(4) {
          left: auto;
          right: 4%;
          top: auto;
          bottom: 9%;
        }
      }
      @media (prefers-reduced-motion: reduce) {
        .floating-skill {
          animation: none;
          transform: rotate(var(--skill-tilt)) scale(var(--skill-scale));
        }
      }
    `}</style>
  </section>
));

Contact.displayName = "Contact";
export default Contact;

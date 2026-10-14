"use client";

import Image from "next/image";
import { SKILL_LOGOS } from "./skillLogos";

export default function Awards() {
  return (
    <section aria-label="Skills and tech stack" className="overflow-hidden py-8 sm:py-12">
      <div className="skill-logo-strip flex w-max">
        {[0, 1].map((copy) => (
          <ul key={copy} aria-hidden={copy === 1 ? true : undefined} className={`flex shrink-0 items-center ${copy === 1 ? "skill-logo-copy" : ""}`}>
            {SKILL_LOGOS.map((skill) => (
              <li key={skill.id} className="flex h-16 w-24 shrink-0 items-center justify-center sm:h-20 sm:w-32">
                <Image
                  src={skill.src}
                  alt={copy === 0 ? skill.label : ""}
                  width={48}
                  height={48}
                  className={`h-9 w-9 object-contain sm:h-12 sm:w-12 ${skill.id === "nextjs" || skill.id === "wix" ? "brightness-0" : ""}`}
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
      <style jsx global>{`
        .skill-logo-strip { animation: skill-logo-scroll 35s linear infinite; }
        @keyframes skill-logo-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .skill-logo-strip { animation: none; width: 100%; }
          .skill-logo-strip > ul { flex-wrap: wrap; justify-content: center; }
          .skill-logo-copy { display: none; }
        }
      `}</style>
    </section>
  );
}

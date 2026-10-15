"use client";

import { useId, useState } from "react";

const QUESTIONS = [
  {
    question: "What kind of role are you looking for?",
    answer:
      "I'm looking for software development opportunities, particularly in full stack or front-end development, where I can contribute to a team and continue developing my technical skills.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "My web development stack includes React, Next.js, TypeScript, and Tailwind CSS, alongside PostgreSQL, MongoDB, and Strapi. I also include AWS, REST API integration, and web deployment in my technical skill set.",
  },
  {
    question: "What is your education and project background?",
    answer:
      "I studied B.Sc. Computer Science at Loyola College from 2021 to 2024 and M.Sc. Information Technology at D.G. Vaishnav College from 2024 to 2026. My practical experience includes freelance work on magizhdairy.app from 2025 to present and the web projects featured here.",
  },
  {
    question: "How can I contact you about an opportunity?",
    answer:
      "Email me at sivabxng@gmail.com or connect through the LinkedIn link in the contact section. Share the role and what your team is working on, and we can discuss how my background fits.",
  },
];

export default function ServiceFaq() {
  const [openItem, setOpenItem] = useState<number | null>(null);
  const faqId = useId();

  return (
    <div className="mt-20  border-black/15 pt-12 sm:mt-24 sm:pt-16">
      <div className="grid items-start gap-10 lg:grid-cols-[7fr_5fr] lg:gap-16">
        <div className="order-2 space-y-6 lg:order-1">
          {QUESTIONS.map((item, index) => {
            const expanded = openItem === index;
            const questionId = `${faqId}-question-${index}`;
            const answerId = `${faqId}-answer-${index}`;

            return (
              <div key={item.question}>
                <h4>
                  <button
                    id={questionId}
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={answerId}
                    onClick={() => setOpenItem(expanded ? null : index)}
                    className="group flex w-full items-start gap-3 text-left focus-visible:rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] sm:gap-4"
                  >
                    <span className="flex-1 rounded-3xl rounded-tl-md bg-[#111111] px-5 py-4 text-sm font-semibold leading-relaxed text-white transition-colors group-hover:bg-[#262626] sm:px-7 sm:py-5 sm:text-base">
                      {item.question}
                    </span>
                    <span
                      className={`mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors sm:h-11 sm:w-11 ${expanded ? "border-[var(--accent)] bg-[var(--accent)]" : "border-black/10 bg-[var(--background)] group-hover:border-[var(--accent)]"}`}
                      aria-hidden="true"
                    >
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" d="M4 12h16" />
                        {!expanded && (
                          <path strokeLinecap="round" d="M12 4v16" />
                        )}
                      </svg>
                    </span>
                  </button>
                </h4>
                <div
                  id={answerId}
                  role="region"
                  aria-labelledby={questionId}
                  hidden={!expanded}
                  className="mt-4"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--accent-soft,#eaf3b9)] text-xs font-extrabold sm:h-10 sm:w-10"
                      aria-hidden="true"
                    >
                      S
                    </span>
                    <p className="flex-1 rounded-3xl rounded-tl-md border border-black/10 bg-[var(--background)] px-5 py-5 text-sm leading-relaxed text-black/70 sm:px-7 sm:py-6">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="order-1 lg:order-2 lg:sticky lg:top-28">
          <span className="mb-5 inline-block rounded-full border border-[var(--accent)]/40 bg-[var(--accent)]/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em]">
            For recruiters
          </span>
          <h3 className="mb-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Your questions.
            <br />
            <span className="text-[var(--accent)]">Answered.</span>
          </h3>
          <p className="max-w-sm text-sm leading-relaxed text-black/60 sm:text-base">
            A quick overview of my skills, education, projects, and the
            opportunities I&apos;m looking for.
          </p>
        </div>
      </div>
    </div>
  );
}

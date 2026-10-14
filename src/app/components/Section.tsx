"use client";

import { forwardRef } from "react";

type Props = {
  index: string;
  title: string;
  titleClassName?: string;
  children: React.ReactNode;
};

const Section = forwardRef<HTMLElement, Props>(
  ({ index, title, titleClassName = "", children }, ref) => (
    <section
      ref={ref}
      className="relative max-w-7xl mx-auto px-6 md:px-12 py-28 md:py-36"
    >
      <p className="text-xs tracking-[0.5em] opacity-60 mb-4">// {index}</p>
      <h2
        className={`font-extrabold mb-12 tracking-tight leading-none ${
          titleClassName || "text-4xl md:text-6xl"
        }`}
      >
        {title}
      </h2>
      {children}
    </section>
  ),
);

Section.displayName = "Section";
export default Section;
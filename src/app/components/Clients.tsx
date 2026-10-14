"use client";

import { forwardRef } from "react";
import Section from "./Section";

const CLIENTS = ["ACME", "NOVA", "ORBIT", "HELIX", "VERTEX", "PRISM", "KILO", "ECHO"];

const Clients = forwardRef<HTMLElement>((_, ref) => (
  <Section ref={ref} index="04" title="CLIENTS">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {CLIENTS.map((c) => (
        <div
          key={c}
          className="flex items-center justify-center py-8 border border-[var(--accent)]/15
                     rounded-xl text-sm tracking-[0.3em] opacity-70 hover:opacity-100
                     hover:border-[var(--accent)]/60 transition"
        >
          {c}
        </div>
      ))}
    </div>
  </Section>
));

Clients.displayName = "Clients";
export default Clients;
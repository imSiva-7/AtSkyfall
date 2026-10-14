"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [dayName, setDayName] = useState("day");

  useEffect(() => {
    setDayName(new Date().toLocaleDateString("en-US", { weekday: "long" }));
  }, []);

  return (
    <footer className="bg-[#0b0b0b] px-5 pb-8 text-center text-xs text-white/55 sm:pb-10 sm:text-sm">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 border-t border-white/10 pt-8">
        <p className="text-xs font-bold tracking-[0.35em] text-[var(--accent)]">
          S I V A
        </p>
        <p>Enjoy the rest of your {dayName}</p>
      </div>
    </footer>
  );
}

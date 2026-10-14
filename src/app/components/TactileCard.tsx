"use client";

import { useRef, MouseEvent, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  intensity?: number; // tilt degrees, default 8
};

export default function TactileCard({ children, className = "", intensity = 8 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width  - 0.5;  // -0.5 → 0.5
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    el.style.transform = `
      perspective(800px)
      rotateY(${x * intensity}deg)
      rotateX(${-y * intensity}deg)
      scale(1.02)
    `;
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) scale(1)";
    el.style.transition = "transform 0.5s cubic-bezier(0.23,1,0.32,1)";
  };

  const handleEnter = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transition = "transform 0.1s ease";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onMouseEnter={handleEnter}
      className={className}
      style={{ willChange: "transform", transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
}

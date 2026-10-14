"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Ring lags behind with a spring — gives the "trailing" feel
  const springConfig = { damping: 30, stiffness: 450, mass: 0.35 };
  const ringX = useSpring(cursorX, springConfig);
  const ringY = useSpring(cursorY, springConfig);

  const [hovered, setHovered] = useState(false);   // over a link/button
  const [clicked, setClicked] = useState(false);    // pressed down
  const [hidden, setHidden] = useState(false);      // left window

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const down  = () => setClicked(true);
    const up    = () => setClicked(false);
    const enter = () => setHidden(false);
    const leave = () => setHidden(true);

    // Track hoverable elements
    const addHover = () => setHovered(true);
    const removeHover = () => setHovered(false);

    const attachHover = () => {
      document
        .querySelectorAll("a, button, [data-cursor-hover]")
        .forEach((el) => {
          el.addEventListener("mouseenter", addHover);
          el.addEventListener("mouseleave", removeHover);
        });
    };

    // Re-attach on DOM mutations (for dynamic content)
    const observer = new MutationObserver(attachHover);
    observer.observe(document.body, { childList: true, subtree: true });
    attachHover();

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.documentElement.addEventListener("mouseleave", leave);
    document.documentElement.addEventListener("mouseenter", enter);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.documentElement.removeEventListener("mouseleave", leave);
      document.documentElement.removeEventListener("mouseenter", enter);
      observer.disconnect();
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* ── Dot — snaps instantly ── */}
      <motion.div
        className="fixed top-0 left-0 z-[99999] pointer-events-none"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: clicked ? 0.7 : hovered ? 1.2 : 1,
          opacity: hidden ? 0 : 1,
        }}
        transition={{ duration: 0.1 }}
      >
        <div className="w-1 h-1 rounded-full bg-[var(--accent)]" />
      </motion.div>

      {/* ── Ring — spring-follows with lag ── */}
      <motion.div
        className="fixed top-0 left-0 z-[99998] pointer-events-none"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: clicked ? 0.85 : hovered ? 1.35 : 1,
          opacity: hidden ? 0 : 1,
        }}
        transition={{ duration: 0.2 }}
      >
        <div
          className="w-5 h-5 rounded-full border border-black"
        />
      </motion.div>
    </>
  );
}

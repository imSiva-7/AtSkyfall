"use client";

import { useEffect, type RefObject } from "react";

export default function useSectionVisibility(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const section = ref.current;
    if (!section) return;

    let inView = false;
    const update = () => {
      section.dataset.visible = String(inView && !document.hidden);
    };
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      update();
    });

    section.dataset.visible = "false";
    observer.observe(section);
    document.addEventListener("visibilitychange", update);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", update);
      delete section.dataset.visible;
    };
  }, [ref]);
}

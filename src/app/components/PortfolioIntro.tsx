"use client";

import Header from "./Header";
import Hero from "./Hero";

export default function PortfolioIntro() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <>
      <Header scrollTo={scrollTo} scrollToTop={() => window.scrollTo({ top: 0, behavior: "smooth" })} />
      <Hero onViewWork={() => scrollTo("projects")} onConnect={() => scrollTo("contact")} />
    </>
  );
}

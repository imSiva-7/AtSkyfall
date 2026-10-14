"use client";

import { useRef } from "react";
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Awards from "@/app/components/Awards";
import About from "@/app/components/About";
import Services from "@/app/components/Services";
import Work from "@/app/components/Work";
import Timeline from "@/app/components/Timeline";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import DiagonalDivider from "@/app/components/DiagonalDivider";

export default function Page() {
  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const workRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLElement | null>) =>
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <main className="relative">
      <Header
        scrollToTop={scrollToTop}
        scrollTo={scrollTo}
        refs={{
          about: aboutRef,
          services: servicesRef,
          work: workRef,
          timeline: timelineRef,
          contact: contactRef,
        }}
      />
      <Hero
        ref={heroRef}
        onViewWork={() => scrollTo(workRef)}
        onConnect={() => scrollTo(contactRef)}
      />
      <DiagonalDivider showUpdated />
      <About ref={aboutRef} />
      <Awards />
      <DiagonalDivider from="var(--background)" to="#ffffff" compact reverse />
      <Services ref={servicesRef} />
      <DiagonalDivider from="#ffffff" to="#242424" compact />
      <Work ref={workRef} />
      <DiagonalDivider from="#242424" to="var(--background)" reverse />
      <Timeline ref={timelineRef} />
      <div className="bg-[var(--foreground)] text-[var(--background)]">
        <Contact ref={contactRef} />
        <Footer />
      </div>
    </main>
  );
}

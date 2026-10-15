import PortfolioIntro from "./components/PortfolioIntro";
import { AboutSection, SkillsSection, ProjectSection, EducationSection, ContactSection } from "./components/PortfolioSections";
import Awards from "./components/Awards";
import Footer from "./components/Footer";
import DiagonalDivider from "./components/DiagonalDivider";

export default function Page() {
  return (
    <main className="relative">
      <PortfolioIntro />
      <DiagonalDivider showUpdated />
      <div id="about" className="scroll-mt-20"><AboutSection /></div>
      <Awards />
      <DiagonalDivider from="var(--background)" to="#ffffff" compact reverse />
      <div id="skills" className="scroll-mt-20"><SkillsSection /></div>
      <DiagonalDivider from="#ffffff" to="#242424" compact />
      <div id="projects" className="scroll-mt-20"><ProjectSection /></div>
      <ProjectSection team />
      <DiagonalDivider from="#242424" to="var(--background)" reverse />
      <div id="education" className="scroll-mt-20"><EducationSection /></div>
      <div className="bg-[var(--foreground)] text-[var(--background)]">
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}

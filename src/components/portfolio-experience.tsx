"use client";

import { useSyncExternalStore } from "react";
import { LazyMotion, MotionConfig, domAnimation } from "motion/react";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ContactSection } from "@/components/sections/contact-section";
import { CredentialsSection } from "@/components/sections/credentials-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ImpactSection } from "@/components/sections/impact-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { GlobalCursor } from "@/components/shared/global-cursor";
import type { PortfolioLens } from "@/types/portfolio";

const STORAGE_KEY = "vigneshwaran-portfolio-lens";
const LENS_EVENT = "portfolio-lens-change";

function readStoredLens(): PortfolioLens {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "systems" || stored === "ai" ? stored : "systems";
}

function subscribeToLens(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(LENS_EVENT, callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(LENS_EVENT, callback);
  };
}

export function PortfolioExperience() {
  const lens = useSyncExternalStore<PortfolioLens>(
    subscribeToLens,
    readStoredLens,
    () => "systems",
  );

  const updateLens = (nextLens: PortfolioLens) => {
    window.localStorage.setItem(STORAGE_KEY, nextLens);
    document.documentElement.dataset.lens = nextLens;
    window.dispatchEvent(new Event(LENS_EVENT));
  };

  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <GlobalCursor />
        <Navbar lens={lens} onLensChange={updateLens} />
        <main>
          <HeroSection lens={lens} />
          <ImpactSection />
          <ProjectsSection />
          <ExperienceSection />
          <SkillsSection lens={lens} />
          <CredentialsSection />
          <ContactSection />
        </main>
        <Footer />
      </MotionConfig>
    </LazyMotion>
  );
}

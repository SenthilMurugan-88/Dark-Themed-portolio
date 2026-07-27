"use client";

import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { AnimatePresence, m } from "motion/react";

import { SectionContainer } from "@/components/layout/section-container";
import { HeroVisual } from "@/components/shared/hero-visual";
import { InteractiveSurface } from "@/components/shared/interactive-surface";
import { RollText } from "@/components/shared/roll-text";
import { WordStage } from "@/components/shared/word-stage";
import { portfolioConfig } from "@/config/portfolio";
import type { PortfolioLens } from "@/types/portfolio";

interface HeroSectionProps {
  lens: PortfolioLens;
}

const socialIcons = {
  linkedin: Linkedin,
  github: Github,
  email: Mail,
};

export function HeroSection({ lens }: HeroSectionProps) {
  const content = portfolioConfig.lenses[lens];

  return (
    <InteractiveSurface
      id="home"
      className="noise relative min-h-screen overflow-hidden pb-16 pt-28 sm:pt-32 lg:pb-20"
    >
      <SectionContainer>
        <div className="hero-layout">
          <div className="hero-copy">
            <AnimatePresence mode="wait">
              <m.div
                key={lens}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.28 }}
              >
                <p className="eyebrow mb-8">{content.eyebrow}</p>
                <h1 className="display text-balance">{content.headline}</h1>
                <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted-foreground)] sm:text-xl sm:leading-9">
                  {content.summary}
                </p>
              </m.div>
            </AnimatePresence>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#projects"
                className="roll-trigger group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[var(--foreground)] px-6 text-sm font-semibold text-[var(--background)] transition-transform hover:-translate-y-0.5"
              >
                <RollText>Explore my work</RollText>
                <ArrowDownRight
                  aria-hidden="true"
                  className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                />
              </a>
              <a
                href="#contact"
                className="roll-trigger inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-[var(--border)] bg-[var(--card)]/80 px-6 text-sm font-semibold transition-colors hover:border-[var(--lilac-dark)] hover:bg-[var(--lilac-light)]"
              >
                <RollText>Start a conversation</RollText>
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </a>
            </div>

            <div className="mt-12 flex items-center gap-3">
              {portfolioConfig.socials.map((social) => {
                const Icon = socialIcons[social.kind];
                const external = social.kind !== "email";
                return (
                  <a
                    key={social.kind}
                    href={social.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                    aria-label={`${social.label}${external ? " (opens in a new tab)" : ""}`}
                    className="grid size-11 place-items-center rounded-full border border-[var(--border)] bg-[var(--card)]/75 text-[var(--graphite)] transition-colors hover:border-[var(--lilac-dark)] hover:bg-[var(--lilac-light)] hover:text-[var(--foreground)]"
                  >
                    <Icon aria-hidden="true" className="size-4.5" />
                  </a>
                );
              })}
              <span className="mono ml-2 hidden text-[0.65rem] uppercase tracking-[0.12em] text-[var(--muted-foreground)] sm:inline">
                Open to meaningful engineering conversations
              </span>
            </div>
          </div>

          <HeroVisual lens={lens} />
        </div>

        <WordStage
          text={lens === "systems" ? "systems" : "intelligence"}
          align="start"
        />
      </SectionContainer>
    </InteractiveSurface>
  );
}

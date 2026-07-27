import {
  ArrowUpRight,
  BookOpen,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
} from "lucide-react";

import { SectionContainer } from "@/components/layout/section-container";
import { InteractiveSurface } from "@/components/shared/interactive-surface";
import { Reveal } from "@/components/shared/reveal";
import { RollText } from "@/components/shared/roll-text";
import { WordStage } from "@/components/shared/word-stage";
import { portfolioConfig } from "@/config/portfolio";

const socialIcons = {
  linkedin: Linkedin,
  github: Github,
  email: Mail,
};

export function ContactSection() {
  return (
    <InteractiveSurface
      id="contact"
      className="noise relative overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      <SectionContainer className="relative z-10">
        <div className="section-rule mb-10" />
        <Reveal>
          <div className="flex items-center justify-between">
            <p className="eyebrow">Contact</p>
            <span className="mono text-xs text-[var(--graphite)]">/07</span>
          </div>
          <h2 className="mt-12 max-w-[12ch] text-[clamp(3rem,8.5vw,8.5rem)] font-semibold leading-[0.88] tracking-[-0.065em]">
            Let&apos;s build the reliable part first.
          </h2>
        </Reveal>
        <WordStage text="connect" align="start" />

        <div className="contact-grid">
          <Reveal className="contact-primary">
            <p className="max-w-2xl text-lg leading-8 text-[var(--muted-foreground)]">
              I&apos;m always interested in thoughtful conversations about
              distributed systems, backend engineering, production reliability,
              and practical AI.
            </p>
            <a
              href={`mailto:${portfolioConfig.identity.email}`}
              className="roll-trigger group mt-12 inline-flex max-w-full items-center gap-3 text-xl font-semibold tracking-[-0.03em] text-[var(--color-accent)] sm:text-2xl"
            >
              <RollText className="max-w-full">
                {portfolioConfig.identity.email}
              </RollText>
              <ArrowUpRight
                aria-hidden="true"
                className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
            <div className="mt-12 flex flex-wrap gap-3">
              {portfolioConfig.socials.map((social) => {
                const Icon = socialIcons[social.kind];
                const external = social.kind !== "email";
                return (
                  <a
                    key={social.kind}
                    href={social.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                    className="roll-trigger inline-flex min-h-11 items-center gap-2 rounded-full border border-[var(--border)] px-4 text-sm font-semibold text-[var(--foreground)]/75 transition-colors hover:border-[var(--color-accent)] hover:text-[var(--foreground)]"
                  >
                    <Icon aria-hidden="true" className="size-4" />
                    <RollText>{social.label}</RollText>
                  </a>
                );
              })}
              <a
                href={portfolioConfig.identity.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="roll-trigger inline-flex min-h-11 items-center gap-2 rounded-full bg-[var(--color-accent)] px-4 text-sm font-semibold text-[var(--color-on-accent)]"
              >
                <BookOpen aria-hidden="true" className="size-4" />
                <RollText>Resume</RollText>
              </a>
            </div>
          </Reveal>

          <Reveal
            delay={0.08}
            className="contact-education"
          >
            <span className="grid size-12 place-items-center rounded-2xl bg-[var(--color-accent)] text-[var(--color-on-accent)]">
              <GraduationCap aria-hidden="true" className="size-5" />
            </span>
            <p className="mono mt-10 text-[0.62rem] uppercase tracking-[0.12em] text-[var(--graphite)]">
              Education
            </p>
            <h3 className="mt-4 text-xl font-semibold tracking-[-0.035em]">
              {portfolioConfig.education.institution}
            </h3>
            <p className="mt-3 text-sm leading-6 text-[var(--muted-foreground)]">
              {portfolioConfig.education.degree}
            </p>
            <div className="mt-auto flex items-end justify-between gap-4 pt-10">
              <span className="mono text-xs text-[var(--graphite)]">
                {portfolioConfig.education.period}
              </span>
              <span className="text-sm font-semibold">
                {portfolioConfig.education.score}
              </span>
            </div>
          </Reveal>
        </div>
      </SectionContainer>
    </InteractiveSurface>
  );
}

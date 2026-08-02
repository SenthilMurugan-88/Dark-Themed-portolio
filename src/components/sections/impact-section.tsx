import { ArrowUpRight, GitPullRequestArrow } from "lucide-react";

import { SectionContainer } from "@/components/layout/section-container";
import { InteractiveSurface } from "@/components/shared/interactive-surface";
import { Reveal } from "@/components/shared/reveal";
import { RollText } from "@/components/shared/roll-text";
import { SectionHeading } from "@/components/shared/section-heading";
import { WordStage } from "@/components/shared/word-stage";
import { portfolioConfig } from "@/config/portfolio";

export function ImpactSection() {
  return (
    <InteractiveSurface
      id="impact"
      className="py-16 sm:py-20 lg:py-24"
    >
      <SectionContainer>
        <div className="section-rule mb-10" />
        <SectionHeading
          eyebrow="Selected impact"
          number="02"
          title="Outcomes, not ornamental metrics."
          description="A concise record of production work drawn directly from my experience - reliability, operational leverage, and systems that scale."
        />
        <WordStage text="impact" align="end" />

        <div className="metric-grid">
          {portfolioConfig.impact.map((metric, index) => (
            <Reveal
              key={metric.label}
              delay={index * 0.06}
              className="metric-item"
            >
              <p className="metric-item__value">
                {metric.value}
              </p>
              <p className="metric-item__label">{metric.label}</p>
              <p className="metric-item__detail">
                {metric.detail}
              </p>
              <p className="metric-item__index mono">
                Impact / 0{index + 1}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="open-source-row">
          <span className="open-source-row__icon">
            <GitPullRequestArrow aria-hidden="true" className="size-6" />
          </span>
          <div>
            <p className="eyebrow">Open source signal</p>
            <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
              {portfolioConfig.openSource.title}
            </h3>
            <p className="mt-3 max-w-3xl leading-7 text-[var(--muted-foreground)]">
              {portfolioConfig.openSource.description}
            </p>
          </div>
          {portfolioConfig.openSource.href ? (
            <a
              href={portfolioConfig.openSource.href}
              target="_blank"
              rel="noreferrer"
              className="roll-trigger inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)]"
            >
              <RollText>View contribution</RollText>
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          ) : (
            <span className="mono text-[0.62rem] uppercase tracking-[0.12em] text-[var(--muted-foreground)]">
              Merged upstream
            </span>
          )}
        </Reveal>
      </SectionContainer>
    </InteractiveSurface>
  );
}

import { SectionContainer } from "@/components/layout/section-container";
import { InteractiveSurface } from "@/components/shared/interactive-surface";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { WordStage } from "@/components/shared/word-stage";
import { portfolioConfig } from "@/config/portfolio";

export function ExperienceSection() {
  return (
    <InteractiveSurface
      id="experience"
      className="py-16 sm:py-20 lg:py-24"
    >
      <SectionContainer>
        <div className="section-rule" />
        <div className="pt-10">
          <SectionHeading
            eyebrow="Experience"
            number="04"
            title="Production is where the details matter."
            description="Engineering across streaming, APIs, release automation, security, monitoring, and high-volume data systems."
          />
        </div>
        <WordStage text="experience" align="end" />

        <div className="experience-list">
          <div
            className="experience-list__line"
            aria-hidden="true"
          />
          {portfolioConfig.experience.map((entry, index) => (
            <Reveal
              key={`${entry.role}-${entry.period}`}
              className="experience-entry"
            >
              <span
                className="experience-entry__node"
                aria-hidden="true"
              />
              <div>
                <p className="mono text-xs uppercase tracking-[0.1em] text-[var(--color-accent)]">
                  {entry.period}
                </p>
                <p className="mono mt-2 text-[0.62rem] uppercase tracking-[0.12em] text-[var(--muted-foreground)]">
                  0{index + 1} / 02
                </p>
              </div>
              <article>
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--muted-foreground)]">
                  {entry.company}
                </p>
                <h3 className="mt-3 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
                  {entry.role}
                </h3>
                <p className="mt-5 max-w-3xl text-base leading-7 text-[var(--muted-foreground)]">
                  {entry.summary}
                </p>
                <ul className="mt-8 grid gap-4">
                  {entry.achievements.map((achievement) => (
                    <li
                      key={achievement}
                      className="grid max-w-4xl grid-cols-[auto_1fr] gap-4 text-sm leading-7 text-[var(--foreground)]/80 sm:text-base"
                    >
                      <span className="mt-3 size-1.5 rounded-full bg-[var(--color-accent)]" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-2">
                  {entry.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="tech-pill mono"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </SectionContainer>
    </InteractiveSurface>
  );
}

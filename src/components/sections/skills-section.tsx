"use client";

import { AnimatePresence, m } from "motion/react";

import { SectionContainer } from "@/components/layout/section-container";
import { InteractiveSurface } from "@/components/shared/interactive-surface";
import { SectionHeading } from "@/components/shared/section-heading";
import { SkillIcon } from "@/components/shared/skill-icon";
import { WordStage } from "@/components/shared/word-stage";
import { portfolioConfig } from "@/config/portfolio";
import { cn } from "@/lib/utils";
import type { PortfolioLens } from "@/types/portfolio";

interface SkillsSectionProps {
  lens: PortfolioLens;
}

export function SkillsSection({ lens }: SkillsSectionProps) {
  const sortedSkills = [...portfolioConfig.skills].sort((a, b) => {
    const aActive = a.lenses.includes(lens) ? 0 : 1;
    const bActive = b.lenses.includes(lens) ? 0 : 1;
    return aActive - bActive;
  });
  const groups = Array.from(new Set(sortedSkills.map((skill) => skill.group)));

  return (
    <InteractiveSurface
      id="skills"
      className="py-16 sm:py-20 lg:py-24"
    >
      <SectionContainer>
        <div className="section-rule mb-10" />
        <SectionHeading
          eyebrow={`${lens === "systems" ? "Systems" : "AI"} toolkit`}
          number="05"
          title="The tools are nodes. The system is the skill."
          description="A production-centered toolkit spanning code, architecture, data, cloud, quality, and emerging AI workflows. Switch lenses to change the emphasis."
        />
        <WordStage text="toolkit" align="start" />

        <AnimatePresence mode="popLayout">
          <m.div
            key={lens}
            className="skill-groups"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
          >
            {groups.map((group, groupIndex) => (
              <m.section
                layout
                key={group}
                className="skill-group"
                transition={{ type: "spring", stiffness: 270, damping: 26 }}
              >
                <div className="skill-group__heading">
                  <p className="mono text-xs uppercase tracking-[0.12em] text-[var(--color-accent)]">
                    {group}
                  </p>
                  <span className="mono text-[0.62rem] text-[var(--muted-foreground)]">
                    /0{groupIndex + 1}
                  </span>
                </div>
                <div className="skill-group__items">
                  {sortedSkills
                    .filter((skill) => skill.group === group)
                    .map((skill) => {
                      const active = skill.lenses.includes(lens);
                      return (
                        <m.article
                          layout
                          key={skill.name}
                          className={cn(
                            "skill-chip",
                            active && "skill-chip--active",
                          )}
                        >
                          <span className="skill-chip__icon">
                            <SkillIcon icon={skill.icon} className="size-5" />
                          </span>
                          <h3>{skill.name}</h3>
                        </m.article>
                      );
                    })}
                </div>
              </m.section>
            ))}
          </m.div>
        </AnimatePresence>
      </SectionContainer>
    </InteractiveSurface>
  );
}

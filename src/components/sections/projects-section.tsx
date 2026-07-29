"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  Braces,
  Github,
  Sparkles,
} from "lucide-react";

import { SectionContainer } from "@/components/layout/section-container";
import { ComingSoonBanner } from "@/components/shared/coming-soon-banner";
import { InteractiveSurface } from "@/components/shared/interactive-surface";
import { Reveal } from "@/components/shared/reveal";
import { RollText } from "@/components/shared/roll-text";
import { SectionHeading } from "@/components/shared/section-heading";
import { WordStage } from "@/components/shared/word-stage";
import { portfolioConfig } from "@/config/portfolio";

export function ProjectsSection() {
  const showcaseRef = useRef<HTMLDivElement>(null);
  const comingSoon = portfolioConfig.comingSoon?.projects;

  const scrollShowcase = (direction: -1 | 1) => {
    const showcase = showcaseRef.current;

    if (!showcase) {
      return;
    }

    const firstSlide = showcase.querySelector<HTMLElement>(".project-slide");
    const gap = Number.parseFloat(getComputedStyle(showcase).rowGap) || 0;
    const distance = (firstSlide?.offsetHeight ?? showcase.clientHeight) + gap;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    showcase.scrollBy({
      top: distance * direction,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <InteractiveSurface
      id="projects"
      className="py-16 sm:py-20 lg:py-24"
    >
      <SectionContainer>
        <div className="section-rule mb-10" />
        <SectionHeading
          eyebrow="Selected projects"
          number="03"
          title="A home for the work behind the systems."
          description="Project case studies will live here with the problem, contribution, architecture, and outcome. The structure is ready for the details you share next."
        />
        <WordStage text="projects" align="start" />

        {comingSoon ? (
          <ComingSoonBanner {...comingSoon} className="mb-8" />
        ) : null}

        <div className="project-showcase">
          <div className="project-showcase__toolbar">
            <p className="mono text-[0.62rem] uppercase tracking-[0.1em] text-[var(--color-muted)]">
              Scroll, swipe, or use controls
            </p>
            {portfolioConfig.projects.length > 1 ? (
              <div
                className="flex shrink-0 items-center gap-2"
                aria-label="Project showcase controls"
              >
                <button
                  type="button"
                  aria-label="Show previous project"
                  aria-controls="project-showcase-track"
                  onClick={() => scrollShowcase(-1)}
                  className="project-showcase__button"
                >
                  <ArrowUp aria-hidden="true" className="size-4" />
                </button>
                <button
                  type="button"
                  aria-label="Show next project"
                  aria-controls="project-showcase-track"
                  onClick={() => scrollShowcase(1)}
                  className="project-showcase__button"
                >
                  <ArrowDown aria-hidden="true" className="size-4" />
                </button>
              </div>
            ) : null}
          </div>

          <div
            id="project-showcase-track"
            ref={showcaseRef}
            className="project-list"
            role="region"
            aria-roledescription="carousel"
            aria-label="Selected projects"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "ArrowUp") {
                event.preventDefault();
                scrollShowcase(-1);
              }
              if (event.key === "ArrowDown") {
                event.preventDefault();
                scrollShowcase(1);
              }
            }}
          >
            {portfolioConfig.projects.map((project, index) => (
              <Reveal
                key={project.title}
                className="project-slide"
                delay={index * 0.06}
              >
                <article
                  className="project-row group"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${portfolioConfig.projects.length}: ${project.title}`}
                >
                  <div className="project-row__visual">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={`${project.title} project preview`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 52vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="project-placeholder absolute inset-0 p-6 sm:p-8">
                        <div className="flex h-full flex-col justify-between">
                          <span className="project-row__visual-icon">
                            <Braces aria-hidden="true" className="size-5" />
                          </span>
                          <div
                            className="grid grid-cols-5 gap-2"
                            aria-hidden="true"
                          >
                            {[0, 1, 2, 3, 4].map((column) => (
                              <span
                                key={column}
                                className="rounded-full bg-white/12"
                                style={{ height: `${30 + column * 11}px` }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="project-row__content">
                    <div className="flex items-center justify-between gap-4">
                      <p className="mono text-[0.62rem] uppercase tracking-[0.12em] text-[var(--color-accent)]">
                        {project.category}
                      </p>
                      <span className="mono text-[0.62rem] text-[var(--muted-foreground)]">
                        /0{index + 1}
                      </span>
                    </div>

                    <h3 className="mt-6 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
                      {project.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[var(--muted-foreground)]">
                      {project.description}
                    </p>

                    {project.technologies.length > 0 ? (
                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.technologies.map((technology) => (
                          <span key={technology} className="tech-pill mono">
                            {technology}
                          </span>
                        ))}
                      </div>
                    ) : null}

                    <div className="mt-auto flex items-center gap-3 pt-9">
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="roll-trigger inline-flex items-center gap-2 text-sm font-semibold"
                        >
                          <RollText>View project</RollText>
                          <ArrowUpRight aria-hidden="true" className="size-4" />
                        </a>
                      ) : null}
                      {project.repositoryUrl ? (
                        <a
                          href={project.repositoryUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`View ${project.title} repository`}
                          className="icon-button"
                        >
                          <Github aria-hidden="true" className="size-4" />
                        </a>
                      ) : null}
                      {project.status === "coming-soon" ? (
                        <span className="project-row__status">
                          <Sparkles aria-hidden="true" className="size-3.5" />
                          Details coming soon
                        </span>
                      ) : null}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </SectionContainer>
    </InteractiveSurface>
  );
}

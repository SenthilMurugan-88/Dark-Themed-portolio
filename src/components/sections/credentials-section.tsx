"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowUpRight, Award, Expand, X } from "lucide-react";

import { SectionContainer } from "@/components/layout/section-container";
import { InteractiveSurface } from "@/components/shared/interactive-surface";
import { Reveal } from "@/components/shared/reveal";
import { RollText } from "@/components/shared/roll-text";
import { SectionHeading } from "@/components/shared/section-heading";
import { WordStage } from "@/components/shared/word-stage";
import { portfolioConfig } from "@/config/portfolio";
import { cn } from "@/lib/utils";

export function CredentialsSection() {
  const categories = useMemo(
    () => [
      "All",
      ...Array.from(
        new Set(
          portfolioConfig.certifications.map(
            (certification) => certification.category,
          ),
        ),
      ),
    ],
    [],
  );
  const [activeCategory, setActiveCategory] = useState("All");
  const visibleCertifications =
    activeCategory === "All"
      ? portfolioConfig.certifications
      : portfolioConfig.certifications.filter(
          (certification) => certification.category === activeCategory,
        );

  return (
    <InteractiveSurface
      id="credentials"
      className="py-16 sm:py-20 lg:py-24"
    >
      <SectionContainer>
        <div className="section-rule mb-10" />
        <SectionHeading
          eyebrow="Credential vault"
          number="06"
          title="Structured learning, kept in motion."
          description="Toggle between credential tracks as the vault grows. Add a category, image, or verification URL in the configuration and the interface adapts automatically."
        />
        <WordStage text="credentials" align="end" />

        <div
          className="credential-filters"
          role="group"
          aria-label="Filter credentials by category"
        >
          {categories.map((category) => {
            const active = category === activeCategory;
            const count =
              category === "All"
                ? portfolioConfig.certifications.length
                : portfolioConfig.certifications.filter(
                    (certification) => certification.category === category,
                  ).length;

            return (
              <button
                key={category}
                type="button"
                aria-pressed={active}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "roll-trigger mono inline-flex min-h-11 shrink-0 items-center gap-3 rounded-full border px-4 text-[0.65rem] uppercase tracking-[0.1em] transition-colors",
                  active
                    ? "border-[var(--foreground)] bg-[var(--foreground)] text-[var(--background)]"
                    : "border-[var(--border)] bg-[var(--card)]/70 text-[var(--graphite)] hover:border-[var(--lilac-dark)] hover:text-[var(--foreground)]",
                )}
              >
                <RollText>{category}</RollText>
                <span
                  className={cn(
                    "grid size-5 place-items-center rounded-full text-[0.55rem]",
                    active
                      ? "bg-[var(--lilac)] text-[var(--background)]"
                      : "bg-[var(--muted)]",
                  )}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <div className="credential-grid">
          {visibleCertifications.map((certification, index) => {
            const card = (
              <article className="credential-card group">
                <div className="flex items-start justify-between gap-4">
                  <span className="credential-card__icon">
                    <Award aria-hidden="true" className="size-6" />
                  </span>
                  <span className="mono text-[0.62rem] uppercase tracking-[0.12em] text-[var(--muted-foreground)]">
                    Certificate / 0{index + 1}
                  </span>
                </div>

                {certification.image ? (
                  <div className="relative mt-7 aspect-[4/3] overflow-hidden rounded-2xl border border-[var(--border)]">
                    <Image
                      src={certification.image}
                      alt={`${certification.title} certificate`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div
                    className="mt-8 flex h-24 items-center gap-2"
                    aria-hidden="true"
                  >
                    {[0, 1, 2, 3, 4, 5].map((bar) => (
                      <span
                        key={bar}
                        className="w-1.5 rounded-full bg-[var(--lilac)]"
                        style={{ height: `${28 + ((bar * 17) % 56)}%` }}
                      />
                    ))}
                  </div>
                )}

                <div className="mt-auto pt-8">
                  <p className="mono text-xs uppercase tracking-[0.1em] text-[var(--lilac-dark)]">
                    {certification.category} / {certification.year}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em]">
                    {certification.title}
                  </h3>
                  {certification.issuer ? (
                    <p className="mt-3 text-sm text-[var(--muted-foreground)]">
                      {certification.issuer}
                    </p>
                  ) : null}
                  {certification.image ? (
                    <p className="mt-5 flex items-center gap-2 text-sm font-semibold text-[var(--foreground)]">
                      Inspect credential
                      <Expand aria-hidden="true" className="size-4" />
                    </p>
                  ) : null}
                </div>
              </article>
            );

            return (
              <Reveal key={certification.title} delay={index * 0.06}>
                {certification.image ? (
                  <Dialog.Root>
                    <Dialog.Trigger asChild>
                      <button type="button" className="block w-full">
                        {card}
                      </button>
                    </Dialog.Trigger>
                    <Dialog.Portal>
                      <Dialog.Overlay className="fixed inset-0 z-[var(--z-dialog-backdrop)] bg-[var(--graphite-dark)]/80 backdrop-blur-sm" />
                      <Dialog.Content className="fixed left-1/2 top-1/2 z-[var(--z-dialog)] w-[min(92vw,64rem)] -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-4 shadow-2xl sm:p-6">
                        <div className="mb-4 flex items-center justify-between gap-4">
                          <Dialog.Title className="text-lg font-semibold">
                            {certification.title}
                          </Dialog.Title>
                          <Dialog.Close
                            aria-label="Close certificate"
                            className="grid size-10 place-items-center rounded-full border border-[var(--border)]"
                          >
                            <X aria-hidden="true" className="size-4" />
                          </Dialog.Close>
                        </div>
                        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[var(--muted)]">
                          <Image
                            src={certification.image}
                            alt={`${certification.title} certificate`}
                            fill
                            sizes="92vw"
                            className="object-contain"
                          />
                        </div>
                      </Dialog.Content>
                    </Dialog.Portal>
                  </Dialog.Root>
                ) : (
                  card
                )}
                {certification.verificationUrl ? (
                  <a
                    href={certification.verificationUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="roll-trigger mt-3 inline-flex items-center gap-2 px-2 text-xs font-semibold text-[var(--graphite)]"
                  >
                    <RollText>Verify online</RollText>
                    <ArrowUpRight aria-hidden="true" className="size-3.5" />
                  </a>
                ) : null}
              </Reveal>
            );
          })}
        </div>
      </SectionContainer>
    </InteractiveSurface>
  );
}

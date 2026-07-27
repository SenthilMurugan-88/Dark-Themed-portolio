"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

import { portfolioConfig } from "@/config/portfolio";
import { cn } from "@/lib/utils";
import type { PortfolioLens } from "@/types/portfolio";
import { LensToggle } from "@/components/shared/lens-toggle";
import { RollText } from "@/components/shared/roll-text";
import { SectionContainer } from "@/components/layout/section-container";

interface NavbarProps {
  lens: PortfolioLens;
  onLensChange: (lens: PortfolioLens) => void;
}

export function Navbar({ lens, onLensChange }: NavbarProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  return (
    <header className="glass-nav fixed inset-x-0 top-0 z-[var(--z-nav)] border-b border-[var(--border)]">
      <SectionContainer className="flex h-[4.5rem] items-center justify-between gap-4">
        <a
          href="#home"
          className="flex items-center gap-3 font-semibold tracking-[-0.03em]"
          aria-label="Vigneshwaran N, back to home"
        >
          <span className="grid size-9 place-items-center rounded-xl border border-[var(--border)] bg-[var(--card)] text-sm text-[var(--lilac)]">
            {portfolioConfig.identity.shortName}
          </span>
          <span className="hidden sm:inline">Vigneshwaran N</span>
        </a>

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Primary">
          {portfolioConfig.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="roll-trigger mono text-[0.7rem] uppercase tracking-[0.1em] text-[var(--graphite)] transition-colors hover:text-[var(--foreground)]"
            >
              <RollText>{item.label}</RollText>
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LensToggle lens={lens} onChange={onLensChange} compact />
          <a
            href={portfolioConfig.identity.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="roll-trigger flex min-h-10 items-center gap-2 rounded-full bg-[var(--lilac)] px-4 text-xs font-semibold text-[var(--background)] transition-transform hover:-translate-y-0.5"
          >
            <RollText>Resume</RollText>
            <ArrowUpRight aria-hidden="true" className="size-3.5" />
          </a>
        </div>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-full border border-[var(--border)] bg-[var(--card)] md:hidden"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? (
            <X aria-hidden="true" className="size-5" />
          ) : (
            <Menu aria-hidden="true" className="size-5" />
          )}
        </button>
      </SectionContainer>

      <div
        className={cn(
          "overflow-hidden border-t border-[var(--border)] bg-[var(--background)] transition-[max-height,opacity] duration-300 md:hidden",
          open ? "max-h-[36rem] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <SectionContainer className="py-5">
          <nav className="grid" aria-label="Mobile">
            {portfolioConfig.navigation.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="roll-trigger flex items-center justify-between border-b border-[var(--border)] py-4 text-lg font-medium"
              >
                <RollText>{item.label}</RollText>
                <span className="mono text-xs text-[var(--muted-foreground)]">
                  0{index + 1}
                </span>
              </a>
            ))}
          </nav>
          <div className="mt-5 flex items-center justify-between gap-3">
            <LensToggle lens={lens} onChange={onLensChange} />
            <a
              href={portfolioConfig.identity.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="roll-trigger rounded-full bg-[var(--lilac)] px-4 py-3 text-sm font-semibold text-[var(--background)]"
            >
              <RollText>View resume</RollText>
            </a>
          </div>
        </SectionContainer>
      </div>
    </header>
  );
}

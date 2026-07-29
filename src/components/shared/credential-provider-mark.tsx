import {
  Braces,
  ChartNoAxesCombined,
  Layers3,
  Linkedin,
} from "lucide-react";
import { siCisco } from "simple-icons";

import { cn } from "@/lib/utils";
import type { CredentialProvider } from "@/types/portfolio";

interface CredentialProviderMarkProps {
  provider: CredentialProvider;
  compact?: boolean;
}

interface ProviderDetails {
  label: string;
  monogram: string;
  glyph: "linkedin" | "academy" | "kodekloud" | "cisco" | "inlustro";
}

const providerDetails: Record<CredentialProvider, ProviderDetails> = {
  linkedin: {
    label: "LinkedIn Learning",
    monogram: "in",
    glyph: "linkedin",
  },
  "master-of-project-academy": {
    label: "Master of Project Academy",
    monogram: "MPA",
    glyph: "academy",
  },
  kodekloud: {
    label: "KodeKloud",
    monogram: "KK",
    glyph: "kodekloud",
  },
  cisco: {
    label: "Cisco",
    monogram: "CS",
    glyph: "cisco",
  },
  inlustro: {
    label: "Inlustro",
    monogram: "IL",
    glyph: "inlustro",
  },
};

function ProviderGlyph({ glyph }: Pick<ProviderDetails, "glyph">) {
  switch (glyph) {
    case "linkedin":
      return <Linkedin aria-hidden="true" className="size-full" />;
    case "academy":
      return <Layers3 aria-hidden="true" className="size-full" />;
    case "kodekloud":
      return <Braces aria-hidden="true" className="size-full" />;
    case "cisco":
      return (
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="size-full"
        >
          <path d={siCisco.path} fill="currentColor" />
        </svg>
      );
    case "inlustro":
      return (
        <ChartNoAxesCombined aria-hidden="true" className="size-full" />
      );
  }
}

export function CredentialProviderMark({
  provider,
  compact = false,
}: CredentialProviderMarkProps) {
  const details = providerDetails[provider];

  if (compact) {
    return (
      <span
        role="img"
        aria-label={`${details.label} logo`}
        className="grid size-14 shrink-0 place-items-center rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-3 text-[var(--color-accent)]"
      >
        <ProviderGlyph glyph={details.glyph} />
      </span>
    );
  }

  return (
    <div
      role="img"
      aria-label={`${details.label} brand mark`}
      className="relative mt-7 grid min-h-40 overflow-hidden rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-5"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,color-mix(in_srgb,var(--color-accent)_16%,transparent),transparent_48%)]"
      />
      <span className="relative grid size-16 place-items-center rounded-2xl border border-[var(--color-border)] bg-[var(--color-canvas)] p-3.5 text-[var(--color-accent)]">
        <ProviderGlyph glyph={details.glyph} />
      </span>
      <div className="relative mt-8 flex items-end justify-between gap-4">
        <span className="max-w-[15rem] text-lg font-semibold tracking-[-0.035em] text-[var(--color-foreground)]">
          {details.label}
        </span>
        <span
          className={cn(
            "mono text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-[var(--color-muted)]",
            details.monogram.length <= 2 && "text-sm",
          )}
        >
          {details.monogram}
        </span>
      </div>
    </div>
  );
}

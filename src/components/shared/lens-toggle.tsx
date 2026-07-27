"use client";

import { BrainCircuit, Network } from "lucide-react";

import { RollText } from "@/components/shared/roll-text";
import { cn } from "@/lib/utils";
import type { PortfolioLens } from "@/types/portfolio";

interface LensToggleProps {
  lens: PortfolioLens;
  onChange: (lens: PortfolioLens) => void;
  compact?: boolean;
}

const options = [
  { value: "systems" as const, label: "Systems", icon: Network },
  { value: "ai" as const, label: "AI", icon: BrainCircuit },
];

export function LensToggle({
  lens,
  onChange,
  compact = false,
}: LensToggleProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--card)]/85 p-1",
        compact ? "gap-0" : "gap-1",
      )}
      aria-label="Choose portfolio emphasis"
      role="group"
    >
      {options.map((option) => {
        const Icon = option.icon;
        const active = lens === option.value;

        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={active}
            aria-label={`Switch to ${option.label} view`}
            onClick={() => onChange(option.value)}
            className={cn(
              "roll-trigger flex min-h-9 items-center gap-2 rounded-full px-3 text-xs font-semibold transition-colors",
              active
                ? "bg-[var(--foreground)] text-[var(--background)]"
                : "text-[var(--graphite)] hover:bg-[var(--lilac-light)] hover:text-[var(--foreground)]",
              compact && "px-2.5",
            )}
          >
            <Icon aria-hidden="true" className="size-3.5" />
            <RollText>{option.label}</RollText>
          </button>
        );
      })}
    </div>
  );
}

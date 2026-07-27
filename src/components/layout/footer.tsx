import { ArrowUp } from "lucide-react";

import { SectionContainer } from "@/components/layout/section-container";
import { RollText } from "@/components/shared/roll-text";
import { portfolioConfig } from "@/config/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)] py-7">
      <SectionContainer className="flex flex-col gap-4 text-sm text-[var(--muted-foreground)] sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {portfolioConfig.identity.name}. Built
          with care for performance and clarity.
        </p>
        <a
          href="#home"
          className="roll-trigger inline-flex items-center gap-2 font-semibold text-[var(--graphite)] hover:text-[var(--foreground)]"
        >
          <RollText>Back to top</RollText>
          <ArrowUp aria-hidden="true" className="size-4" />
        </a>
      </SectionContainer>
    </footer>
  );
}

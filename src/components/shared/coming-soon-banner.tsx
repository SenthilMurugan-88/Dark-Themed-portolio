import { Clock3, Sparkles } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";
import type { ComingSoonContent } from "@/types/portfolio";

interface ComingSoonBannerProps extends ComingSoonContent {
  className?: string;
}

export function ComingSoonBanner({
  eyebrow,
  title,
  description,
  className,
}: ComingSoonBannerProps) {
  return (
    <Reveal className={cn("coming-soon-banner-shell", className)}>
      <aside className="coming-soon-banner" aria-label={`${title} notice`}>
        <span className="coming-soon-banner__icon">
          <Clock3 aria-hidden="true" className="size-5" />
        </span>

        <div className="coming-soon-banner__content">
          <p className="mono text-[0.62rem] uppercase tracking-[0.12em] text-[var(--color-accent)]">
            {eyebrow}
          </p>
          <h3 className="mt-2 text-xl font-semibold tracking-[-0.035em] sm:text-2xl">
            {title}
          </h3>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-[var(--color-muted)]">
            {description}
          </p>
        </div>

        <span className="coming-soon-banner__badge mono">
          <Sparkles aria-hidden="true" className="size-3.5" />
          Coming soon
        </span>
      </aside>
    </Reveal>
  );
}

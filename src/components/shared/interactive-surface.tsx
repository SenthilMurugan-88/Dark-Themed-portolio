import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface InteractiveSurfaceProps {
  children: ReactNode;
  className?: string;
  id: string;
}

export function InteractiveSurface({
  children,
  className,
  id,
}: InteractiveSurfaceProps) {
  return (
    <section id={id} className={cn("interactive-surface", className)}>
      <div className="interactive-surface__atmosphere" aria-hidden="true" />
      <div className="interactive-surface__content">{children}</div>
    </section>
  );
}

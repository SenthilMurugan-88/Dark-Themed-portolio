import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface RollTextProps {
  children: ReactNode;
  className?: string;
}

export function RollText({ children, className }: RollTextProps) {
  return (
    <span className={cn("text-roll", className)}>
      <span className="text-roll__track">
        <span>{children}</span>
        <span aria-hidden="true">{children}</span>
      </span>
    </span>
  );
}

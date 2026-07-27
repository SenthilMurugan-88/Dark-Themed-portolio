"use client";

import type { PointerEvent } from "react";

import { cn } from "@/lib/utils";

interface WordStageProps {
  text: string;
  align?: "start" | "center" | "end";
  className?: string;
}

export function WordStage({
  text,
  align = "center",
  className,
}: WordStageProps) {
  const revealAtPointer = (
    element: HTMLElement,
    event: PointerEvent<HTMLElement>,
  ) => {
    const bounds = element.getBoundingClientRect();
    element.style.setProperty("--word-x", `${event.clientX - bounds.left}px`);
    element.style.setProperty("--word-y", `${event.clientY - bounds.top}px`);
    element.style.setProperty("--word-reveal-opacity", "1");
  };

  return (
    <div className={cn("word-stage", `word-stage--${align}`, className)}>
      <span
        className="word-stage__text"
        aria-hidden="true"
        onPointerMove={(event) => {
          if (event.pointerType === "mouse") {
            revealAtPointer(event.currentTarget, event);
          }
        }}
        onPointerDown={(event) => revealAtPointer(event.currentTarget, event)}
        onPointerLeave={(event) => {
          event.currentTarget.style.setProperty("--word-reveal-opacity", "0");
        }}
      >
        <span className="word-stage__word word-stage__word--base">{text}</span>
        <span className="word-stage__word word-stage__word--reveal">
          {text}
        </span>
      </span>
    </div>
  );
}

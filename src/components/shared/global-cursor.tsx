"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE_SELECTOR =
  "a, button, [role='button'], input, textarea, select, summary, label";

export function GlobalCursor() {
  const dotRef = useRef<HTMLSpanElement>(null);
  const ringRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!finePointer.matches) {
      return;
    }

    const root = document.documentElement;
    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!dot || !ring) {
      return;
    }

    root.classList.add("custom-cursor-ready");

    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight / 2;
    let ringX = pointerX;
    let ringY = pointerY;
    let frame = 0;

    const place = (element: HTMLElement, x: number, y: number) => {
      element.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    const animate = () => {
      const easing = reducedMotion.matches ? 1 : 0.16;
      ringX += (pointerX - ringX) * easing;
      ringY += (pointerY - ringY) * easing;
      place(ring, ringX, ringY);
      frame = window.requestAnimationFrame(animate);
    };

    const onPointerMove = (event: PointerEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      place(dot, pointerX, pointerY);
      root.dataset.cursorVisible = "true";

      const target = event.target;
      if (target instanceof Element && target.closest(INTERACTIVE_SELECTOR)) {
        root.dataset.cursorInteractive = "true";
      } else {
        delete root.dataset.cursorInteractive;
      }
    };

    const onPointerOver = (event: PointerEvent) => {
      const target = event.target;
      if (target instanceof Element && target.closest(INTERACTIVE_SELECTOR)) {
        root.dataset.cursorInteractive = "true";
      }
    };

    const onPointerOut = (event: PointerEvent) => {
      const nextTarget = event.relatedTarget;
      if (
        !(nextTarget instanceof Element) ||
        !nextTarget.closest(INTERACTIVE_SELECTOR)
      ) {
        delete root.dataset.cursorInteractive;
      }
    };

    const onPointerDown = () => {
      root.dataset.cursorPressed = "true";
    };

    const onPointerUp = () => {
      delete root.dataset.cursorPressed;
    };

    const onWindowLeave = () => {
      delete root.dataset.cursorVisible;
    };

    const onWindowEnter = () => {
      root.dataset.cursorVisible = "true";
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerover", onPointerOver, { passive: true });
    window.addEventListener("pointerout", onPointerOut, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    window.addEventListener("pointerup", onPointerUp, { passive: true });
    document.documentElement.addEventListener("mouseleave", onWindowLeave);
    document.documentElement.addEventListener("mouseenter", onWindowEnter);
    frame = window.requestAnimationFrame(animate);

    return () => {
      root.classList.remove("custom-cursor-ready");
      delete root.dataset.cursorVisible;
      delete root.dataset.cursorInteractive;
      delete root.dataset.cursorPressed;
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerover", onPointerOver);
      window.removeEventListener("pointerout", onPointerOut);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      document.documentElement.removeEventListener("mouseleave", onWindowLeave);
      document.documentElement.removeEventListener("mouseenter", onWindowEnter);
    };
  }, []);

  return (
    <div className="global-cursor" aria-hidden="true">
      <span ref={ringRef} className="global-cursor__ring" />
      <span ref={dotRef} className="global-cursor__dot" />
    </div>
  );
}

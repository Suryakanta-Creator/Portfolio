"use client";
import { useEffect, useRef } from "react";
import { usePortfolioMotion } from "@/context/MotionContext";

export function CursorEffect() {
  const ref = useRef<HTMLDivElement>(null);
  const { reduceMotion } = usePortfolioMotion();
  useEffect(() => {
    const cursor = ref.current;
    if (!cursor || reduceMotion) return;
    const finePointer = matchMedia("(hover: hover) and (pointer: fine)");
    let frame = 0;
    let x = 0, y = 0;
    const hide = () => { cancelAnimationFrame(frame); frame = 0; cursor.style.opacity = "0"; };
    const move = (event: PointerEvent) => {
      if (!finePointer.matches || event.pointerType === "touch" || document.hidden) { hide(); return; }
      x = event.clientX; y = event.clientY;
      const interactive = (event.target as Element).closest("a, button, input, textarea");
      cursor.dataset.interactive = String(Boolean(interactive));
      if (!frame) frame = requestAnimationFrame(() => {
        cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        cursor.style.opacity = "1";
        frame = 0;
      });
    };
    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("pointerleave", hide);
    window.addEventListener("blur", hide);
    document.addEventListener("visibilitychange", hide);
    finePointer.addEventListener("change", hide);
    return () => {
      hide();
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("pointerleave", hide);
      window.removeEventListener("blur", hide);
      document.removeEventListener("visibilitychange", hide);
      finePointer.removeEventListener("change", hide);
    };
  }, [reduceMotion]);
  return <div ref={ref} className="cursor-bubble" aria-hidden="true"><span /></div>;
}

"use client";

import { useEffect, useState } from "react";
import { usePortfolioMotion } from "@/context/MotionContext";

const text = "Thanks for exploring. Keep building something great.";

export function TypingNote() {
  const { reduceMotion } = usePortfolioMotion();
  const [shown, setShown] = useState(reduceMotion ? text : "");
  useEffect(() => {
    if (reduceMotion) { setShown(text); return; }
    let index = 0;
    const timer = window.setInterval(() => {
      index += 1;
      setShown(text.slice(0, index));
      if (index >= text.length) window.clearInterval(timer);
    }, 42);
    return () => window.clearInterval(timer);
  }, [reduceMotion]);
  return <p className="typing-note" aria-label={text}>{shown}<span aria-hidden="true">▌</span></p>;
}

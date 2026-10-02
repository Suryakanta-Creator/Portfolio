"use client";
import { createContext, useContext, useEffect, useState } from "react";
const MotionContext = createContext({
  reduceMotion: true,
  toggleReduceMotion: () => {},
});
export function MotionProvider({ children }: { children: React.ReactNode }) {
  const [manual, setManual] = useState(false);
  const [system, setSystem] = useState(true);
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setSystem(query.matches);
    update();
    try {
      setManual(localStorage.getItem("sb_portfolio_reduce_motion") === "true");
    } catch {}
    query.addEventListener("change", update);
    const visibility = () =>
      document.documentElement.classList.toggle("tab-hidden", document.hidden);
    document.addEventListener("visibilitychange", visibility);
    return () => {
      query.removeEventListener("change", update);
      document.removeEventListener("visibilitychange", visibility);
    };
  }, []);
  const reduceMotion = system || manual;
  useEffect(() => {
    document.documentElement.dataset.reduceMotion = String(reduceMotion);
  }, [reduceMotion]);
  const toggleReduceMotion = () => {
    setManual((value) => {
      const next = !value;
      try {
        localStorage.setItem("sb_portfolio_reduce_motion", String(next));
      } catch {}
      return next;
    });
  };
  return (
    <MotionContext.Provider value={{ reduceMotion, toggleReduceMotion }}>
      {children}
    </MotionContext.Provider>
  );
}
export const usePortfolioMotion = () => useContext(MotionContext);

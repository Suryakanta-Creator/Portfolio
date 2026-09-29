"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface MotionContextType {
  reduceMotion: boolean;
  toggleReduceMotion: () => void;
}

const MotionContext = createContext<MotionContextType>({
  reduceMotion: false,
  toggleReduceMotion: () => {},
});

export function MotionProvider({ children }: { children: React.ReactNode }) {
  const [reduceMotion, setReduceMotion] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check localStorage or system prefers-reduced-motion
    const stored = localStorage.getItem("sb_portfolio_reduce_motion");
    if (stored !== null) {
      setReduceMotion(stored === "true");
    } else {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setReduceMotion(mediaQuery.matches);

      const handleChange = (e: MediaQueryListEvent) => {
        setReduceMotion(e.matches);
      };
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, []);

  const toggleReduceMotion = () => {
    const nextVal = !reduceMotion;
    setReduceMotion(nextVal);
    localStorage.setItem("sb_portfolio_reduce_motion", String(nextVal));
  };

  return (
    <MotionContext.Provider value={{ reduceMotion: mounted ? reduceMotion : false, toggleReduceMotion }}>
      {children}
    </MotionContext.Provider>
  );
}

export function usePortfolioMotion() {
  return useContext(MotionContext);
}

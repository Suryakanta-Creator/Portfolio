"use client";

import type { CSSProperties } from "react";
import { useState } from "react";

const particles = [
  [7, 18, 32, -5], [19, 70, 25, -18], [34, 38, 40, -11], [49, 82, 30, -22],
  [63, 24, 36, -8], [77, 62, 28, -15], [91, 42, 34, -25],
];

export function SiteAtmosphere() {
  const [popped, setPopped] = useState<number[]>([]);
  return (
    <div className="site-atmosphere" aria-hidden="true">
      {particles.map(([left, top, size, delay], index) => (
        <button
          type="button"
          tabIndex={-1}
          key={index}
          className={`site-bubble ${popped.includes(index) ? "is-popped" : ""}`}
          onPointerDown={() => {
            setPopped((current) => current.includes(index) ? current : [...current, index]);
            window.setTimeout(() => setPopped((current) => current.filter((item) => item !== index)), 800);
          }}
          style={{ left: `${left}%`, top: `${top}%`, width: size, height: size, "--site-delay": `${delay}s` } as CSSProperties}
        />
      ))}
      <span className="site-diamond site-diamond-a" />
      <span className="site-diamond site-diamond-b" />
      <span className="site-diamond site-diamond-c" />
    </div>
  );
}

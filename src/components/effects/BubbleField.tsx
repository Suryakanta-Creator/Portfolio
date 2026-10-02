"use client";

import type { CSSProperties } from "react";
import { useState } from "react";

const bubbles = [
  [4, 26, 30, 0], [13, 42, 35, -12], [23, 30, 27, -7], [34, 54, 40, -20],
  [45, 34, 32, -14], [56, 46, 38, -24], [67, 28, 29, -9], [76, 52, 43, -30],
  [85, 36, 34, -17], [94, 44, 39, -26],
];

export function BubbleField() {
  const [popped, setPopped] = useState<number[]>([]);
  return (
    <div className="bubble-field" aria-hidden="true">
      <div className="ambient-halo" />
      <div className="ambient-diamond diamond-one" />
      <div className="ambient-diamond diamond-two" />
      <div className="ambient-diamond diamond-three" />
      {bubbles.map(([left, size, duration, delay], index) => (
        <button
          type="button"
          tabIndex={-1}
          key={index}
          className={`ambient-bubble ${popped.includes(index) ? "is-popped" : ""}`}
          onPointerDown={() => {
            setPopped((current) => current.includes(index) ? current : [...current, index]);
            window.setTimeout(() => setPopped((current) => current.filter((item) => item !== index)), 900);
          }}
          style={{ left: `${left}%`, width: size, height: size, "--duration": `${duration}s`, "--delay": `${delay}s`, "--drift": `${index % 2 ? 32 : -32}px` } as CSSProperties}
        />
      ))}
    </div>
  );
}

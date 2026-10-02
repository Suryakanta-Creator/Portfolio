import type { CSSProperties } from "react";

// Fixed values keep server/client output identical. Only transforms and opacity animate.
const bubbles = [
  [5, 18, 34, 0], [16, 52, 26, -14], [31, 22, 40, -8],
  [46, 72, 32, -24], [59, 28, 38, -16], [70, 94, 42, -31],
  [82, 42, 30, -12], [94, 20, 36, -28],
];
export function BubbleField() {
  return <div className="bubble-field" aria-hidden="true">
    <div className="ambient-halo" />
    {bubbles.map(([left, size, duration, delay], index) => <span key={index} className="ambient-bubble" style={{ left: `${left}%`, width: size, height: size, "--duration": `${duration}s`, "--delay": `${delay}s`, "--drift": `${index % 2 ? 35 : -35}px` } as CSSProperties} />)}
  </div>;
}

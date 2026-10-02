import { ArrowUpRight, ScanLine, Sprout, BookOpen, Orbit } from "lucide-react";
const artworks = {
  agritech: {
    name: "KRUSHI",
    sub: "SEVA",
    label: "AGRICULTURE, WITH INTELLIGENCE.",
    icon: Sprout,
  },
  "ai-study": {
    name: "A little",
    sub: "more clarity.",
    label: "YOUR NOTES. NEW POSSIBILITIES.",
    icon: BookOpen,
  },
  packcheck: {
    name: "Read between",
    sub: "the labels.",
    label: "PACKCHECK AI / PACKAGED COMMODITIES",
    icon: ScanLine,
  },
  cosmos: {
    name: "COSMOS",
    sub: "WORLD",
    label: "A SPACE FOR EXPLORATION.",
    icon: Orbit,
  },
};
export function ProjectVisual({
  type,
}: {
  type: keyof typeof artworks;
  reduceMotion?: boolean;
}) {
  const art = artworks[type];
  const Icon = art.icon;
  return (
    <div
      className={`project-art art-${type}`}
      aria-label={`${art.name} ${art.sub} — conceptual cover artwork`}
    >
      <span className="art-caption">{art.label}</span>
      <div className="art-object" aria-hidden="true">
        <div className="art-object-inner" />
        <Icon strokeWidth={0.8} />
      </div>
      <div className="art-title">
        {art.name}
        <br />
        <em>{art.sub}</em>
      </div>
      <span className="art-foot">
        CONCEPT COVER <ArrowUpRight size={15} />
      </span>
    </div>
  );
}

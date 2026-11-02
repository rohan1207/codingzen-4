"use client";

import { CREAM, INK, RED } from "@/lib/tokens";

const words = [
  "CodingZen",
  "Live Mentors",
  "AI & ML",
  "Python",
  "Scratch",
  "Web Development",
  "Ages 6–16",
  "Real Projects",
  "Machine Learning",
  "Build & Ship",
  "Online Classes",
  "Delhi NCR",
  "Smart Kids",
  "Code with Mentors",
];

function RibbonTrack({ ariaHidden = false }) {
  return (
    <ul
      className="flex shrink-0 items-center gap-12 pr-12 sm:gap-16 sm:pr-16"
      aria-hidden={ariaHidden || undefined}
    >
      {words.map((word, i) => {
        const accent = i % 2 === 1;
        return (
          <li key={word} className="flex shrink-0 items-center gap-12 sm:gap-16">
            <span
              className={
                accent
                  ? "font-serif text-[clamp(1.35rem,2.6vw,2rem)] italic tracking-[-0.02em]"
                  : "font-display text-[clamp(1.2rem,2.3vw,1.75rem)] font-medium tracking-[-0.03em]"
              }
              style={{ color: accent ? RED : INK }}
            >
              {word}
            </span>
            <span
              aria-hidden
              className="h-1.5 w-1.5 shrink-0 rounded-full"
              style={{ backgroundColor: RED }}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default function WordRibbon() {
  return (
    <section
      aria-label="CodingZen highlights"
      className="relative w-full overflow-x-clip overflow-y-hidden py-4 sm:py-5"
      style={{ backgroundColor: CREAM }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-16 sm:w-24"
        style={{
          background: `linear-gradient(to right, ${CREAM}, transparent)`,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-16 sm:w-24"
        style={{
          background: `linear-gradient(to left, ${CREAM}, transparent)`,
        }}
      />

      <div className="cz-ribbon-track flex w-max items-center">
        <RibbonTrack />
        <RibbonTrack ariaHidden />
      </div>
    </section>
  );
}

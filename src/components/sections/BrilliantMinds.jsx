"use client";

import FuzzyText from "@/components/FuzzyText";
import { CREAM, INK } from "@/lib/tokens";

export default function BrilliantMinds() {
  return (
    <section
      className="relative flex min-h-[220px] w-full items-center justify-center overflow-hidden py-20 sm:min-h-[280px] sm:py-24 lg:min-h-[340px] lg:py-28"
      style={{
        backgroundColor: CREAM,
        backgroundImage:
          "radial-gradient(ellipse 70% 55% at 50% 50%, rgba(232,68,56,0.1), transparent 65%)",
      }}
    >
      <div className="relative z-[1] flex w-full items-center justify-center px-4 sm:px-6 lg:px-12">
        <h2 className="sr-only">Think Create Apply</h2>
        <FuzzyText
          fontSize="clamp(2rem, 10vw, 8.5rem)"
          fontWeight={500}
          fontFamily="var(--font-display), Outfit, system-ui, sans-serif"
          color={INK}
          baseIntensity={0.2}
          hoverIntensity={0.5}
          enableHover
          fuzzRange={30}
          className="max-w-full"
        >
          Think Create Apply
        </FuzzyText>
      </div>
    </section>
  );
}

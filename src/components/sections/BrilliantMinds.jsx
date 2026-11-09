"use client";

import FuzzyText from "@/components/FuzzyText";
import { CREAM, INK } from "@/lib/tokens";

export default function BrilliantMinds() {
  return (
    <section
      className="relative flex min-h-0 w-full items-center justify-center overflow-x-clip py-6 sm:py-8 lg:py-10"
      style={{
        backgroundColor: CREAM,
        backgroundImage:
          "radial-gradient(ellipse 70% 55% at 50% 50%, rgba(232,68,56,0.1), transparent 65%)",
      }}
    >
      <div className="relative z-[1] flex w-full max-w-full items-center justify-center overflow-x-clip px-4 sm:px-6 lg:px-12">
        <h2 className="sr-only">Think Create Apply</h2>
        <FuzzyText
          fontSize="clamp(1.35rem, 8vw, 8.5rem)"
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

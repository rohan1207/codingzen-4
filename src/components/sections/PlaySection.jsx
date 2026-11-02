"use client";

import CodingQuiz from "@/components/sections/CodingQuiz";
import Em from "@/components/ui/Em";
import { CREAM } from "@/lib/tokens";

export default function PlaySection() {
  return (
    <section
      id="play"
      className="relative flex min-h-0 scroll-mt-28 flex-col overflow-hidden py-8 sm:py-10 md:min-h-[100svh]"
      style={{ backgroundColor: CREAM }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.035) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse at 50% 30%, black 20%, transparent 72%)",
        }}
      />

      <div className="relative z-[1] mx-auto flex min-h-0 w-full flex-1 flex-col px-4 sm:px-6 lg:px-12">
        <div className="mb-4 flex shrink-0 flex-wrap items-end justify-between gap-3 sm:mb-5">
          <div className="max-w-2xl">
            <p className="lab">Interactive</p>
            <h2 className="mt-1.5 font-display text-[clamp(1.45rem,4vw,2.5rem)] font-medium tracking-[-0.03em] text-ink">
              Code is meant to be <Em>played</Em> with
            </h2>
            <p className="mt-1.5 max-w-lg text-[14px] leading-relaxed text-txt sm:text-[15px]">
              A tiny coding quiz — pick an answer, earn points, and learn
              something new every try.
            </p>
          </div>
          <p className="font-display text-[11px] font-medium uppercase tracking-[0.18em] text-[#aaa]">
            kids play · parents smile
          </p>
        </div>
        <div className="min-h-0 flex-1">
          <CodingQuiz />
        </div>
      </div>
    </section>
  );
}

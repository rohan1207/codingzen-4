"use client";

import { motion } from "framer-motion";
import Em from "@/components/ui/Em";
import { aboutStory } from "@/data/about";
import { CREAM, INK, LINE, RED, TXT } from "@/lib/tokens";

export default function AboutHero() {
  return (
    <section
      className="relative overflow-hidden pt-24 pb-10 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20"
      style={{ backgroundColor: CREAM }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(ellipse 55% 45% at 85% 15%, ${RED}1a, transparent 55%)`,
        }}
      />

      <div className="relative mx-auto w-full max-w-[1180px] px-4 sm:px-10 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="lab mb-4 sm:mb-5">
            {aboutStory.eyebrow} · Est. {aboutStory.founded}
          </p>

          <h1
            className="font-display text-[clamp(2.1rem,6.5vw,4.25rem)] font-medium leading-[1.05] tracking-[-0.04em]"
            style={{ color: INK }}
          >
            CodingZen builds <Em>future-ready</Em> young minds.
          </h1>

          <p
            className="mt-5 max-w-xl text-[15px] leading-relaxed sm:mt-6 sm:text-[19px]"
            style={{ color: TXT }}
          >
            {aboutStory.lead}
          </p>

          <div className="mt-7 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-3">
            <a
              href="/#trial"
              className="cz-btn cz-btn-red !py-3 !text-[14px] font-medium"
            >
              Book a free class
            </a>
            <a
              href="/#portfolio"
              className="cz-btn cz-btn-white !border !py-3 !text-[14px] font-medium"
              style={{ borderColor: LINE }}
            >
              See student work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

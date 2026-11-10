"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Box, Code2, Sparkles } from "lucide-react";
import Em from "@/components/ui/Em";
import { aboutStory } from "@/data/about";
import { CREAM, INK, LINE, RED, TXT } from "@/lib/tokens";

const float = (delay = 0) => ({
  y: [0, -8, 0],
  transition: {
    duration: 3.6,
    repeat: Infinity,
    ease: "easeInOut",
    delay,
  },
});

function FloatPill({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      animate={float(delay)}
      className={`pointer-events-none absolute z-[3] inline-flex items-center gap-1.5 rounded-full border border-white/80 bg-white px-3 py-1.5 shadow-[0_12px_28px_-14px_rgba(0,0,0,0.35)] ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function AboutHero() {
  return (
    <section
      id="our-story"
      className="relative scroll-mt-28 overflow-x-clip pt-24 pb-6 sm:pt-28 sm:pb-8 lg:pt-32 lg:pb-9"
      style={{ backgroundColor: CREAM }}
    >
      <div className="relative mx-auto grid w-full max-w-[1360px] grid-cols-1 items-center gap-6 px-4 sm:gap-8 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-8">
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-[1] max-w-xl"
        >
          <span
            className="inline-flex rounded-md px-2.5 py-1 font-display text-[10px] font-medium uppercase tracking-[0.14em] text-white"
            style={{ backgroundColor: RED }}
          >
            {aboutStory.eyebrow}
          </span>

          <h1 className="mt-4 font-display text-[clamp(2.35rem,7vw,4.35rem)] font-medium leading-[1.05] tracking-[-0.04em] text-ink sm:mt-5">
            <span className="block">{aboutStory.title}</span>
            <span className="mt-1 block text-[clamp(1.55rem,4.2vw,2.65rem)] font-medium tracking-[-0.03em]">
              {aboutStory.headline} <Em>{aboutStory.accent}</Em>
            </span>
          </h1>

          <p
            className="mt-4 max-w-md text-[14px] leading-relaxed sm:mt-5 sm:text-[15px]"
            style={{ color: TXT }}
          >
            {aboutStory.lead}
          </p>

          <div className="mt-6 flex flex-col gap-2.5 sm:mt-7 sm:flex-row sm:flex-wrap sm:gap-3">
            <a
              href="/#programs"
              className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full px-5 py-3 font-display text-[14px] font-medium text-white transition hover:brightness-110"
              style={{ backgroundColor: INK }}
            >
              Browse courses
              <ArrowUpRight size={15} strokeWidth={2.5} />
            </a>
            <a
              href="#team"
              className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full border bg-white px-5 py-3 font-display text-[14px] font-medium text-ink transition hover:border-black/20"
              style={{ borderColor: LINE }}
            >
              Meet our team
              <ArrowUpRight size={15} strokeWidth={2.5} />
            </a>
          </div>
        </motion.div>

        {/* Single hero visual + floating pills */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="relative mx-auto aspect-[5/4] w-full max-w-[560px] lg:max-w-none"
        >
          <div className="absolute inset-0">
            <Image
              src="/images/about/hero-duo.png"
              alt="CodingZen students learning together on a laptop"
              fill
              unoptimized
              priority
              className="object-contain object-center"
              sizes="(max-width: 1024px) 90vw, 520px"
            />
          </div>

          <FloatPill
            delay={0}
            className="left-[2%] top-[42%] sm:left-0 sm:top-[40%]"
          >
            <span className="grid h-6 w-6 place-items-center rounded-full bg-[#EDE4FB] text-[#7C5CBF]">
              <Code2 size={12} strokeWidth={2.4} />
            </span>
            <span className="font-display text-[12px] font-medium tracking-[-0.02em] text-ink">
              Coding
            </span>
          </FloatPill>

          <FloatPill
            delay={0.45}
            className="right-[4%] top-[12%] sm:right-[2%] sm:top-[10%]"
          >
            <span className="grid h-6 w-6 place-items-center rounded-full bg-[#FCE4EC] text-[#E84438]">
              <Sparkles size={12} strokeWidth={2.4} />
            </span>
            <span className="font-display text-[12px] font-medium tracking-[-0.02em] text-ink">
              AI
            </span>
          </FloatPill>

          <FloatPill
            delay={0.9}
            className="bottom-[10%] right-[2%] sm:bottom-[12%] sm:right-0"
          >
            <span className="grid h-6 w-6 place-items-center rounded-full bg-[#FFE8D6] text-[#EA580C]">
              <Box size={12} strokeWidth={2.4} />
            </span>
            <span className="font-display text-[12px] font-medium tracking-[-0.02em] text-ink">
              Projects
            </span>
          </FloatPill>
        </motion.div>
      </div>
    </section>
  );
}

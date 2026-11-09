"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Box, Code2, Gamepad2, Sparkles } from "lucide-react";
import Em from "@/components/ui/Em";
import { programsHero } from "@/data/programsPage";
import { CREAM, INK, LINE, RED, TXT } from "@/lib/tokens";

const float = (delay = 0) => ({
  y: [0, -7, 0],
  transition: { duration: 3.6, repeat: Infinity, ease: "easeInOut", delay },
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

export default function ProgramsHero() {
  return (
    <section
      className="relative overflow-x-clip pt-24 pb-8 sm:pt-28 sm:pb-10 lg:pt-32 lg:pb-12"
      style={{ backgroundColor: CREAM }}
    >
      <div className="relative mx-auto grid w-full max-w-[1180px] grid-cols-1 items-center gap-8 px-4 sm:gap-10 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="relative z-[1] max-w-xl"
        >
          <span
            className="inline-flex rounded-full px-3 py-1 font-display text-[10px] font-medium uppercase tracking-[0.14em] text-white"
            style={{ backgroundColor: RED }}
          >
            {programsHero.eyebrow}
          </span>

          <h1 className="mt-4 font-display text-[clamp(2rem,5.8vw,3.55rem)] font-medium leading-[1.08] tracking-[-0.04em] text-ink">
            {programsHero.title}
          </h1>
          <p className="mt-2 font-display text-[clamp(1.25rem,3.2vw,1.85rem)] font-medium tracking-[-0.03em]">
            <Em>{programsHero.accent}</Em>
          </p>

          <p
            className="mt-4 max-w-md text-[14px] leading-relaxed sm:text-[15px]"
            style={{ color: TXT }}
          >
            {programsHero.lead}
          </p>

          <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3">
            <a
              href="/#trial"
              className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full px-5 py-3 font-display text-[14px] font-medium text-white transition hover:brightness-110"
              style={{ backgroundColor: INK }}
            >
              Request a trial class
              <ArrowUpRight size={15} strokeWidth={2.5} />
            </a>
            <a
              href="/#trial"
              className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full border bg-white px-5 py-3 font-display text-[14px] font-medium text-ink transition hover:border-black/20"
              style={{ borderColor: LINE }}
            >
              Schedule a consultation
              <ArrowUpRight size={15} strokeWidth={2.5} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="relative mx-auto aspect-[5/4] w-full max-w-[520px] lg:max-w-none"
        >
          <div
            aria-hidden
            className="absolute left-[6%] top-[4%] h-[90%] w-[88%] rounded-[46%_54%_48%_52%/50%_42%_58%_50%] bg-[#D9C8F0]"
          />
          <div className="absolute inset-x-[8%] bottom-0 top-[6%] overflow-hidden">
            <Image
              src="/images/programs-page/hero-boy.jpg"
              alt="Student learning coding at CodingZen"
              fill
              unoptimized
              priority
              className="object-contain object-bottom"
              sizes="(max-width: 1024px) 90vw, 520px"
            />
          </div>

          <FloatPill delay={0} className="left-0 top-[18%] sm:-left-1">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-[#EDE4FB] text-[#7C5CBF]">
              <Sparkles size={12} strokeWidth={2.4} />
            </span>
            <span className="font-display text-[12px] font-medium text-ink">AI</span>
          </FloatPill>

          <FloatPill delay={0.35} className="left-[2%] top-[48%]">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-[#EDE4FB] text-[#7C5CBF]">
              <Code2 size={12} strokeWidth={2.4} />
            </span>
            <span className="font-display text-[12px] font-medium text-ink">
              Coding
            </span>
          </FloatPill>

          <FloatPill delay={0.7} className="right-0 top-[14%] sm:-right-1">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-[#FFF3D6] text-[#D97706]">
              <Gamepad2 size={12} strokeWidth={2.4} />
            </span>
            <span className="font-display text-[12px] font-medium text-ink">
              Games
            </span>
          </FloatPill>

          <FloatPill delay={1} className="bottom-[10%] right-0 sm:-right-1">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-[#FFF3D6] text-[#D97706]">
              <Box size={12} strokeWidth={2.4} />
            </span>
            <span className="font-display text-[12px] font-medium text-ink">
              Projects
            </span>
          </FloatPill>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { programs } from "@/data/site";
import Em from "@/components/ui/Em";
import { CREAM, INK, TXT } from "@/lib/tokens";

const cards = [
  {
    ...programs[0],
    art: "/images/programs/junior.png",
    tint: "from-[#fff3f1] to-[#ffe8e4]",
    cta: "Explore Junior courses",
  },
  {
    ...programs[1],
    art: "/images/programs/learner.png",
    tint: "from-[#f7f4fb] to-[#eee8f6]",
    cta: "Explore Learner courses",
  },
  {
    ...programs[2],
    art: "/images/programs/explorer.png",
    tint: "from-[#f3f8f2] to-[#e7f1e5]",
    cta: "Explore Explorer courses",
  },
  {
    ...programs[3],
    art: "/images/programs/creator.png",
    tint: "from-[#f2f5f8] to-[#e8eef4]",
    cta: "Explore Creator courses",
  },
];

function ProgramCard({ program, className = "" }) {
  return (
    <motion.a
      href="#trial"
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 380, damping: 28 }}
      className={`group relative flex flex-col self-start overflow-hidden rounded-[1.5rem] bg-gradient-to-b p-5 shadow-[0_18px_40px_-28px_rgba(0,0,0,0.28)] sm:rounded-[1.75rem] sm:p-5 ${program.tint} ${className}`}
    >
      <span className="inline-flex w-fit rounded-full bg-white/80 px-3 py-1 font-display text-[11px] font-medium tracking-[-0.02em] text-[#555] shadow-sm backdrop-blur-sm">
        {program.ages}
      </span>

      <div className="relative mx-auto mt-3 flex h-[112px] w-full items-center justify-center sm:mt-4 sm:h-[128px]">
        <Image
          src={program.art}
          alt=""
          width={240}
          height={240}
          unoptimized
          className="h-full w-auto max-w-[180px] object-contain object-center transition duration-500 group-hover:scale-105"
        />
      </div>

      <h3 className="mt-3 font-display text-[clamp(1.2rem,5vw,1.4rem)] font-medium tracking-[-0.035em] text-ink sm:mt-4">
        {program.name}
      </h3>
      <p className="mt-1.5 text-[14px] leading-relaxed text-mute">
        {program.outcome}. {program.focus}.
      </p>
      <span className="mt-3.5 inline-flex items-center gap-1.5 text-sm font-medium text-ink transition group-hover:text-ember">
        {program.cta}
        <ArrowRight
          size={15}
          strokeWidth={2.25}
          className="transition group-hover:translate-x-0.5"
        />
      </span>
    </motion.a>
  );
}

export default function Programs() {
  const [a, b, c, d] = cards;

  return (
    <section
      id="programs"
      className="relative scroll-mt-28 overflow-x-clip py-7 sm:py-9 lg:py-12"
      style={{ backgroundColor: CREAM }}
    >
      <div className="relative mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-12">
        <div className="mb-5 flex flex-col gap-3 sm:mb-7 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <h2
              className="font-display text-[clamp(1.5rem,7vw,3rem)] font-medium tracking-[-0.03em]"
              style={{ color: INK }}
            >
              Most sought-after <Em>courses</Em>
            </h2>
            <p
              className="mt-2.5 max-w-lg text-[15px] leading-relaxed sm:text-base"
              style={{ color: TXT }}
            >
              From first Scratch sprites to Unity worlds — a ladder that grows
              with your child.
            </p>
          </div>
          <a
            href="#trial"
            className="inline-flex min-h-[44px] w-full items-center justify-center gap-1.5 rounded-full border border-line bg-white px-4 text-sm font-medium transition hover:text-ember sm:w-auto sm:justify-start sm:border-0 sm:bg-transparent sm:px-0 sm:min-h-0"
            style={{ color: INK }}
          >
            Find the right fit
            <ArrowUpRight size={15} />
          </a>
        </div>

        {/* Bento: 1-col phone → 2-col md → 3-col lg */}
        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          <ProgramCard program={a} />
          <ProgramCard program={b} />
          <ProgramCard program={c} />
          <ProgramCard program={d} />

          {/* Wide CTA — same role as reference banner */}
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 380, damping: 28 }}
            className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-ember via-[#e84848] to-[#c62828] p-5 text-white shadow-[0_22px_48px_-24px_rgba(232,68,56,0.55)] sm:rounded-[1.75rem] sm:p-6 md:col-span-2 lg:col-span-2"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-8 -top-10 hidden h-40 w-40 rounded-full bg-white/15 blur-2xl sm:block"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute bottom-0 left-1/3 hidden h-32 w-48 rounded-full bg-black/10 blur-2xl sm:block"
            />

            <div className="relative z-[1] grid grid-cols-1 items-center gap-5 sm:grid-cols-[1.15fr_0.85fr] sm:gap-4">
              <div>
                <h3 className="font-display text-[clamp(1.35rem,5.5vw,2rem)] font-medium leading-[1.15] tracking-[-0.035em]">
                  Want to find a perfect course for your kid?
                </h3>
                <p className="mt-2.5 max-w-md text-[15px] leading-relaxed text-white/80">
                  Book a free trial — we&apos;ll match the right age band and
                  path after a quick fitment chat.
                </p>
                <a
                  href="#trial"
                  className="mt-5 inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-2xl bg-black px-5 py-3.5 text-sm font-medium text-white transition hover:bg-ink sm:w-auto"
                >
                  Book a free trial
                  <ArrowRight size={16} strokeWidth={2.25} />
                </a>
              </div>

              <div className="relative mx-auto flex h-[160px] w-full max-w-[220px] items-end justify-center sm:h-[190px] sm:max-w-[250px] sm:justify-self-end">
                <div
                  aria-hidden
                  className="absolute inset-x-[10%] bottom-0 top-[18%] rounded-[1.5rem] bg-white/15 shadow-inner"
                />
                <Image
                  src="/images/hero-project-win.png"
                  alt="Student celebrating a CodingZen project"
                  width={400}
                  height={480}
                  unoptimized
                  className="relative z-[1] h-full w-auto max-w-full object-contain object-bottom drop-shadow-[0_18px_28px_rgba(0,0,0,0.25)]"
                />
                <span
                  aria-hidden
                  className="absolute -left-1 top-4 z-[2] hidden h-10 w-10 rounded-full border-[3px] border-white/70 bg-transparent sm:block"
                />
                <span
                  aria-hidden
                  className="absolute -right-2 bottom-8 z-[2] hidden h-7 w-7 rounded-full bg-white/35 sm:block"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

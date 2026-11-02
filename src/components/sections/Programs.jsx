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
      className={`group relative flex h-full min-h-[320px] flex-col overflow-hidden rounded-[1.75rem] bg-gradient-to-b p-5 shadow-[0_18px_40px_-28px_rgba(0,0,0,0.28)] sm:min-h-[340px] sm:p-6 ${program.tint} ${className}`}
    >
      <span className="inline-flex w-fit rounded-full bg-white/80 px-3 py-1 font-display text-[11px] font-medium tracking-[-0.02em] text-[#555] shadow-sm backdrop-blur-sm">
        {program.ages}
      </span>

      <div className="relative mx-auto mt-5 flex h-[148px] w-full items-center justify-center sm:h-[168px]">
        <Image
          src={program.art}
          alt=""
          width={280}
          height={280}
          unoptimized
          className="h-full w-auto max-w-[200px] object-contain object-center transition duration-500 group-hover:scale-105 sm:max-w-[220px]"
        />
      </div>

      <div className="mt-5 flex flex-1 flex-col">
        <h3 className="font-display text-[1.35rem] font-medium tracking-[-0.035em] text-ink sm:text-[1.45rem]">
          {program.name}
        </h3>
        <p className="mt-1.5 min-h-[2.6rem] text-[13px] leading-relaxed text-mute sm:text-[14px]">
          {program.outcome}. {program.focus}.
        </p>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-medium text-ink transition group-hover:text-ember">
          {program.cta}
          <ArrowRight
            size={15}
            strokeWidth={2.25}
            className="transition group-hover:translate-x-0.5"
          />
        </span>
      </div>
    </motion.a>
  );
}

export default function Programs() {
  const [a, b, c, d] = cards;

  return (
    <section
      id="programs"
      className="relative scroll-mt-28 overflow-hidden py-14 sm:py-16 lg:py-20"
      style={{ backgroundColor: CREAM }}
    >
      <div className="relative mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-12">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4 sm:mb-10">
          <div className="max-w-2xl">
            <h2
              className="font-display text-[clamp(1.65rem,4vw,3rem)] font-medium tracking-[-0.03em]"
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
            className="inline-flex items-center gap-1.5 text-sm font-medium transition hover:text-ember"
            style={{ color: INK }}
          >
            Find the right fit
            <ArrowUpRight size={15} />
          </a>
        </div>

        {/* Bento: 3 on top, 1 + CTA below */}
        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          <ProgramCard program={a} />
          <ProgramCard program={b} />
          <ProgramCard program={c} />
          <ProgramCard program={d} />

          {/* Wide CTA — same role as reference banner */}
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 380, damping: 28 }}
            className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-ember via-[#e84848] to-[#c62828] p-6 text-white shadow-[0_22px_48px_-24px_rgba(232,68,56,0.55)] sm:p-8 md:col-span-2 lg:col-span-2"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-8 -top-10 h-40 w-40 rounded-full bg-white/15 blur-2xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute bottom-0 left-1/3 h-32 w-48 rounded-full bg-black/10 blur-2xl"
            />

            <div className="relative z-[1] grid items-center gap-6 sm:grid-cols-[1.1fr_0.9fr] sm:gap-4">
              <div>
                <h3 className="font-display text-[clamp(1.45rem,2.6vw,2.1rem)] font-medium leading-[1.12] tracking-[-0.035em]">
                  Want to find a perfect course for your kid?
                </h3>
                <p className="mt-2.5 max-w-md text-[15px] leading-relaxed text-white/80 sm:text-base">
                  Book a free trial — we&apos;ll match the right age band and
                  path after a quick fitment chat.
                </p>
                <a
                  href="#trial"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-black px-5 py-3.5 text-sm font-medium text-white transition hover:bg-ink sm:w-auto"
                >
                  Book a free trial
                  <ArrowRight size={16} strokeWidth={2.25} />
                </a>
              </div>

              <div className="relative mx-auto flex h-[200px] w-full max-w-[260px] items-end justify-center sm:h-[230px] sm:max-w-[280px] sm:justify-self-end">
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
                  className="absolute -left-1 top-4 z-[2] h-10 w-10 rounded-full border-[3px] border-white/70 bg-transparent"
                />
                <span
                  aria-hidden
                  className="absolute -right-2 bottom-8 z-[2] h-7 w-7 rounded-full bg-white/35"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

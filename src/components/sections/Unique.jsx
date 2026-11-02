"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Em from "@/components/ui/Em";
import {
  GraduationCap,
  Layers,
  ShieldCheck,
  Headphones,
  Code2,
  ArrowUpRight,
  Check,
} from "lucide-react";
import { uniquePoints } from "@/data/unique";

const icons = {
  mentors: Code2,
  curriculum: Layers,
  pedigree: GraduationCap,
  service: Headphones,
  practical: ShieldCheck,
};

const CYCLE_MS = 5500;

export default function Unique() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const current = uniquePoints[active];
  const Icon = icons[current.id] ?? Code2;

  useEffect(() => {
    if (paused) return undefined;
    const id = setInterval(() => {
      setActive((v) => (v + 1) % uniquePoints.length);
    }, CYCLE_MS);
    return () => clearInterval(id);
  }, [paused, active]);

  function pick(i) {
    setActive(i);
  }

  return (
    <section
      id="unique"
      className="relative flex min-h-0 scroll-mt-24 items-center overflow-hidden bg-cream py-10 sm:py-12 lg:h-[100svh] lg:max-h-[100svh] lg:py-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative mx-auto flex h-full w-full max-h-full flex-col justify-center px-4 sm:px-6 lg:px-12 lg:py-8">
        <div className="mb-4 flex shrink-0 flex-wrap items-end justify-between gap-3 sm:mb-5">
          <div className="max-w-2xl">
            <p className="lab">
              Why CodingZen
            </p>
            <h2 className="mt-1.5 font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-medium tracking-[-0.03em] text-ink">
              What makes us <Em>unique</Em>
            </h2>
            <p className="mt-1.5 max-w-lg text-[15px] leading-relaxed text-txt">
              Five clear reasons. Tap one — or watch them play.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative grid h-10 w-10 place-items-center">
              <svg className="absolute inset-0 -rotate-90" viewBox="0 0 44 44" aria-hidden>
                <circle cx="22" cy="22" r="18" fill="none" stroke="#ececec" strokeWidth="2.5" />
                <motion.circle
                  key={`${active}-${paused}`}
                  cx="22"
                  cy="22"
                  r="18"
                  fill="none"
                  stroke="#e84438"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray={2 * Math.PI * 18}
                  initial={{ strokeDashoffset: 0 }}
                  animate={{ strokeDashoffset: paused ? 0 : 2 * Math.PI * 18 }}
                  transition={{ duration: paused ? 0 : CYCLE_MS / 1000, ease: "linear" }}
                />
              </svg>
              <span className="font-display font-medium text-[10px] text-[#888]">
                {String(active + 1).padStart(2, "0")}
              </span>
            </div>
            <span className="font-display font-medium text-[10px] uppercase tracking-[0.18em] text-[#888]">
              {paused ? "Paused" : "Auto"}
            </span>
          </div>
        </div>

        <div className="mb-4 flex shrink-0 gap-2 overflow-x-auto pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:flex-wrap sm:overflow-visible">
          {uniquePoints.map((point, i) => {
            const on = i === active;
            const TabIcon = icons[point.id] ?? Code2;
            return (
              <button
                key={point.id}
                type="button"
                onClick={() => pick(i)}
                onMouseEnter={() => pick(i)}
                className={`inline-flex shrink-0 items-center gap-2 rounded-full px-3.5 py-2 font-display text-sm font-medium tracking-[-0.04em] transition ${
                  on
                    ? "bg-black text-white"
                    : "bg-transparent text-[#555] hover:bg-black/[0.04] hover:text-ink"
                }`}
              >
                <TabIcon
                  size={14}
                  strokeWidth={2}
                  className={on ? "text-ember" : "text-[#bbb]"}
                />
                <span className={`font-display font-medium text-[10px] ${on ? "text-ember" : "text-[#bbb]"}`}>
                  {point.tag}
                </span>
                {point.short}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="grid min-h-0 flex-1 items-center gap-6 lg:grid-cols-[1.2fr_0.9fr] lg:gap-10 xl:gap-12"
          >
            <div className="min-w-0">
              <p className="font-display font-medium text-[11px] uppercase tracking-[0.22em] text-ember">
                signal.{current.id}
              </p>
              <h3 className="mt-2 max-w-2xl font-display text-[clamp(1.55rem,2.8vw,2.55rem)] font-medium leading-[1.08] tracking-[-0.035em] text-ink">
                {current.title}
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#555] sm:text-[15px]">
                {current.body}
              </p>

              <ul className="mt-5 grid gap-2.5">
                {current.highlights.map((line) => (
                  <li
                    key={line}
                    className="flex items-start gap-2.5 text-sm leading-snug text-[#333] sm:text-[15px]"
                  >
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-ember/10 text-ember">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    {line}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <p className="font-display font-medium text-sm text-[#444]">
                  <span className="text-ember">&gt;</span> {current.cue}
                  <span className="ml-1 inline-block h-3.5 w-1.5 animate-pulse bg-ember align-middle" />
                </p>
                <div className="flex gap-1.5">
                  {uniquePoints.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      aria-label={`Show point ${i + 1}`}
                      onClick={() => pick(i)}
                      className={`h-1.5 rounded-full transition-all ${
                        i === active ? "w-8 bg-ember" : "w-1.5 bg-[#ddd] hover:bg-[#bbb]"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="flex min-h-0 flex-col justify-center gap-3">
              <div className="flex items-start justify-between gap-4 rounded-2xl bg-black p-4 text-white sm:p-5">
                <div>
                  <p className="font-display font-medium text-[10px] uppercase tracking-[0.2em] text-white/45">
                    At a glance
                  </p>
                  <p className="mt-2 font-display text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
                    {current.metric.value}
                  </p>
                  <p className="mt-1 text-sm text-white/65">{current.metric.label}</p>
                </div>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/10 text-white">
                  <Icon size={22} strokeWidth={1.6} />
                </span>
              </div>

              <div className="rounded-2xl border border-[#ececec] bg-white/60 px-4 py-4 sm:px-5">
                <p className="font-display font-medium text-[10px] uppercase tracking-[0.18em] text-[#aaa]">
                  Why it matters
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-[#444]">
                  {current.proof}
                </p>
                <a
                  href="#trial"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-ink transition hover:text-ember"
                >
                  Book a trial
                  <ArrowUpRight size={15} />
                </a>
              </div>

              <div className="grid grid-cols-5 gap-2">
                {uniquePoints.map((point, i) => {
                  const MiniIcon = icons[point.id] ?? Code2;
                  const on = i === active;
                  return (
                    <button
                      key={point.id}
                      type="button"
                      onClick={() => pick(i)}
                      onMouseEnter={() => pick(i)}
                      aria-label={point.short}
                      className={`grid aspect-square max-h-14 place-items-center rounded-xl transition ${
                        on
                          ? "bg-ember text-white"
                          : "bg-[#f3f3f3] text-[#888] hover:bg-[#ebebeb] hover:text-ink"
                      }`}
                    >
                      <MiniIcon size={16} strokeWidth={1.75} />
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

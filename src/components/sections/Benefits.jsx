"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  ClipboardCheck,
  Rocket,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { benefits } from "@/data/site";
import Em from "@/components/ui/Em";

const icons = {
  fitment: ClipboardCheck,
  cognitive: Brain,
  founder: Rocket,
};

/* white · red · black */
const tileTone = [
  {
    bg: "bg-white border border-line",
    text: "text-ink",
    muted: "text-mute",
    icon: "bg-cream-2 text-ink",
  },
  {
    bg: "bg-ember",
    text: "text-white",
    muted: "text-white/70",
    icon: "bg-white/20 text-white",
  },
  {
    bg: "bg-black",
    text: "text-white",
    muted: "text-white/55",
    icon: "bg-white/10 text-white",
  },
];

export default function Benefits() {
  const [active, setActive] = useState(0);
  const current = benefits[active] ?? benefits[0];
  const ActiveIcon = icons[current.id] ?? Sparkles;

  return (
    <section
      id="parents"
      className="relative flex min-h-0 scroll-mt-24 items-center overflow-x-clip bg-cream py-10 text-ink sm:py-12 lg:h-[100svh] lg:max-h-[100svh] lg:py-0"
    >
      <div className="relative mx-auto flex h-full w-full max-h-full items-center px-4 sm:px-6 lg:px-12">
        <div className="grid w-full items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 xl:gap-12">
          {/* Left copy */}
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-1.5 font-display text-sm font-medium tracking-[-0.02em] text-ink shadow-sm">
              <Sparkles size={14} className="text-ember" />
              For students & parents
            </span>

            <h2 className="mt-5 font-display text-[clamp(1.85rem,3.8vw,3.25rem)] font-medium leading-[1.06] tracking-[-0.03em] text-ink lg:mt-6">
              How we benefit <Em>every learner</Em>
            </h2>

            <p className="mt-3 max-w-md text-sm leading-relaxed text-txt sm:text-[15px]">
              Clear gains you can feel — fitment before class one, sharper
              thinking, and a founder mindset that lasts.
            </p>

            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.28 }}
                className="mt-5 rounded-2xl border border-[#e8e8e8] bg-white p-4 shadow-sm sm:p-5"
              >
                <p className="font-display font-medium text-[11px] uppercase tracking-[0.2em] text-ember">
                  0{active + 1} · {current.cue}
                </p>
                <p className="mt-1.5 font-display text-lg font-medium text-ink sm:text-xl">
                  {current.title}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-[#666]">
                  {current.body}
                </p>
              </motion.div>
            </AnimatePresence>

            <a
              href="#trial"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-ember"
            >
              Book a trial class
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Right grid — hero + tiles with pop-out cutouts */}
          <div className="grid min-h-0 gap-5 lg:h-[min(68svh,560px)] lg:grid-rows-[1.35fr_0.95fr] lg:gap-6 lg:pt-10">
            <motion.div
              layout
              className="relative isolate min-h-[220px] sm:min-h-[260px] lg:min-h-0"
            >
              {/* Card body (clipped) */}
              <div className="absolute inset-0 overflow-hidden rounded-[1.5rem] bg-black shadow-[0_24px_48px_-28px_rgba(0,0,0,0.55)] sm:rounded-[1.75rem]">
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-br from-[#222] via-[#151515] to-ember/45"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                    backgroundSize: "22px 22px",
                    maskImage:
                      "radial-gradient(ellipse at 50% 40%, black 20%, transparent 75%)",
                  }}
                />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 22, scale: 0.94 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 12, scale: 0.97 }}
                  transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                  className="pointer-events-none absolute inset-x-0 -top-[18%] bottom-0 z-[2] flex items-end justify-center"
                >
                  <Image
                    src={current.art}
                    alt={current.artAlt || "CodingZen student"}
                    width={640}
                    height={860}
                    unoptimized
                    priority
                    className="h-full w-auto max-w-[96%] origin-bottom object-contain object-bottom drop-shadow-[0_32px_48px_rgba(0,0,0,0.55)]"
                  />
                </motion.div>
              </AnimatePresence>

              <div className="absolute bottom-3 left-3 z-[3] m-0 flex max-w-[min(100%,280px)] items-center gap-3 rounded-2xl border border-white/10 bg-black/55 px-3.5 py-2.5 backdrop-blur-md sm:bottom-4 sm:left-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-ember text-white">
                  <ActiveIcon size={16} />
                </span>
                <div className="min-w-0">
                  <p className="font-display font-medium text-[10px] uppercase tracking-[0.16em] text-white/50">
                    live gain
                  </p>
                  <p className="truncate font-display text-sm font-medium text-white">
                    {current.title}
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="grid min-h-[150px] grid-cols-3 gap-3 sm:gap-4 lg:min-h-0 lg:pt-5">
              {benefits.map((item, i) => {
                const Icon = icons[item.id] ?? Sparkles;
                const on = i === active;
                const tone = tileTone[i];
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    className={`group relative isolate overflow-visible rounded-[1.25rem] text-left transition sm:rounded-[1.4rem] ${
                      on
                        ? "z-[3] ring-2 ring-[#111] ring-offset-2 ring-offset-[var(--cream)]"
                        : "z-[1]"
                    }`}
                  >
                    {/* clipped tile surface */}
                    <span
                      aria-hidden
                      className={`absolute inset-0 rounded-[inherit] shadow-[0_14px_28px_-18px_rgba(0,0,0,0.35)] ${tone.bg}`}
                    />

                    {/* pop-out figure — breaks above the tile */}
                    <span className="pointer-events-none absolute inset-x-[-10%] -top-[28%] bottom-0 z-[1] flex items-end justify-center transition duration-300 group-hover:-translate-y-1 group-hover:scale-[1.05]">
                      <Image
                        src={item.art}
                        alt=""
                        width={320}
                        height={420}
                        unoptimized
                        className={`h-full w-auto max-w-none origin-bottom object-contain object-bottom drop-shadow-[0_18px_28px_rgba(0,0,0,0.32)] ${
                          on ? "opacity-100" : "opacity-92"
                        }`}
                      />
                    </span>

                    <span className="relative z-[2] flex h-full min-h-[120px] flex-col justify-between p-3 sm:min-h-0 sm:p-3.5 lg:p-4">
                      <span
                        className={`grid h-8 w-8 place-items-center rounded-lg backdrop-blur-sm ${tone.icon}`}
                      >
                        <Icon size={14} />
                      </span>
                      <span>
                        <p
                          className={`font-display font-medium text-[9px] uppercase tracking-[0.16em] ${tone.muted}`}
                        >
                          0{i + 1}
                        </p>
                        <p
                          className={`mt-1 font-display text-xs font-medium leading-snug sm:text-sm ${tone.text}`}
                        >
                          {item.title}
                        </p>
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

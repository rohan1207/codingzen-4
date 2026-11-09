"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Award,
  Layers,
  GraduationCap,
  Headphones,
  Code2,
  Check,
} from "lucide-react";
import { featuresUnique } from "@/data/featuresUnique";
import Em from "@/components/ui/Em";

const CYCLE_MS = 3500;

const icons = {
  award: Award,
  layers: Layers,
  graduation: GraduationCap,
  headset: Headphones,
  code: Code2,
};

export default function FeaturesUnique() {
  const [active, setActive] = useState(0);
  const [userDriven, setUserDriven] = useState(false);
  const current = featuresUnique[active] ?? featuresUnique[0];
  const ActiveIcon = icons[current.icon] ?? Award;

  useEffect(() => {
    if (userDriven) return undefined;
    const id = setInterval(() => {
      setActive((v) => (v + 1) % featuresUnique.length);
    }, CYCLE_MS);
    return () => clearInterval(id);
  }, [userDriven, active]);

  function pick(i) {
    setUserDriven(true);
    setActive(i);
  }

  return (
    <section
      id="unique"
      className="relative flex min-h-0 scroll-mt-24 items-center overflow-x-clip bg-cream py-7 sm:py-9 lg:py-12"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 75% 40%, rgba(232,68,56,0.06), transparent 58%)",
        }}
      />

      <div className="relative z-[1] mx-auto flex h-full w-full max-w-[1240px] flex-col justify-center overflow-x-clip px-4 sm:px-6 lg:px-12">
        <div className="mx-auto max-w-2xl shrink-0 text-center">
          <h2 className="font-display text-[clamp(1.55rem,6.5vw,3rem)] font-medium tracking-[-0.03em] text-ink">
            What makes us <Em>unique</Em>
          </h2>
          <p className="mt-2.5 text-[14px] leading-relaxed text-txt sm:text-base">
            Five clear reasons families trust CodingZen — explore each one.
          </p>
        </div>

        {/* Phone: tabs above panel; lg+: side-by-side */}
        <div className="mt-5 grid min-h-0 shrink grid-cols-1 items-stretch gap-3 sm:mt-6 lg:mt-7 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.28fr)] lg:gap-4">
          <ul
            className="flex flex-col justify-center gap-1.5 sm:gap-2"
            role="tablist"
            aria-label="Unique strengths"
          >
            {featuresUnique.map((item, i) => {
              const on = i === active;
              const Icon = icons[item.icon] ?? Award;
              return (
                <li key={item.id} className="shrink-0">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={on}
                    onClick={() => pick(i)}
                    className={`flex min-h-[48px] w-full items-start gap-3 rounded-2xl px-3.5 py-3 text-left transition sm:min-h-0 sm:gap-3.5 sm:px-4 sm:py-3 ${
                      on
                        ? "bg-black text-white shadow-[0_12px_28px_-18px_rgba(0,0,0,0.45)]"
                        : "bg-cream text-mute hover:bg-cream-2 hover:text-ink"
                    }`}
                  >
                    <span
                      className={`mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-xl sm:h-9 sm:w-9 ${
                        on ? "bg-ember text-white" : "bg-white text-mute"
                      }`}
                    >
                      <Icon size={16} strokeWidth={1.75} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span
                        className={`block font-display text-[13px] font-medium tracking-[-0.02em] sm:text-[15px] ${
                          on ? "text-white" : "text-ink"
                        }`}
                      >
                        {item.tab}
                      </span>
                      <span
                        className={`mt-0.5 block text-[11px] leading-snug sm:text-[12px] ${
                          on ? "text-white/55" : "text-mute"
                        }`}
                      >
                        {item.blurb}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="relative flex min-h-0 flex-col rounded-[1.5rem] border border-line bg-cream p-5 sm:rounded-[1.75rem] sm:p-7 lg:p-8">
            {!userDriven && (
              <div className="absolute inset-x-5 top-0 h-0.5 overflow-hidden rounded-full bg-line sm:inset-x-7">
                <motion.div
                  key={active}
                  className="h-full origin-left bg-ember"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: CYCLE_MS / 1000, ease: "linear" }}
                />
              </div>
            )}

            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                role="tabpanel"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
                className="flex min-h-0 flex-1 flex-col"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-ember text-white sm:h-11 sm:w-11">
                  <ActiveIcon size={20} strokeWidth={1.75} />
                </span>

                <h3 className="mt-4 font-display text-[clamp(1.25rem,5.5vw,1.95rem)] font-medium leading-[1.15] tracking-[-0.035em] text-ink">
                  {current.title}
                </h3>
                <p className="mt-2.5 text-[13px] leading-relaxed text-txt sm:text-[15px]">
                  {current.body}
                </p>

                <ul className="mt-5 flex flex-col gap-2 sm:mt-6 sm:gap-2.5">
                  {current.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-3 rounded-full border border-line bg-white px-3.5 py-2.5 sm:px-4 sm:py-3"
                    >
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-black text-white">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      <span className="min-w-0 text-[12px] leading-snug text-txt sm:text-[14px]">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

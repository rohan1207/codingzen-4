"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Em from "@/components/ui/Em";
import { aboutPeople } from "@/data/about";
import { CREAM, INK, LINE, TXT } from "@/lib/tokens";

export default function AboutPeople() {
  const [active, setActive] = useState(0);
  const current = aboutPeople[active];

  return (
    <section
      className="relative overflow-hidden py-12 sm:py-20 lg:py-24"
      style={{ backgroundColor: CREAM }}
    >
      <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-10 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <p className="lab">The team</p>
          <h2 className="mt-3 font-display text-[clamp(1.7rem,5vw,3rem)] font-medium leading-[1.1] tracking-[-0.03em] text-ink">
            Mentors, operators, <Em>advisors</Em>
          </h2>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
          <ul className="flex flex-row gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] lg:flex-col lg:overflow-visible lg:pb-0 [&::-webkit-scrollbar]:hidden">
            {aboutPeople.map((item, i) => {
              const on = active === i;
              return (
                <li key={item.id} className="shrink-0">
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    className={`w-full rounded-2xl border px-3.5 py-3 text-left transition sm:px-4 sm:py-3.5 lg:px-5 lg:py-4 ${
                      on
                        ? "border-ink bg-ink text-white"
                        : "bg-white/60 hover:border-black/15"
                    }`}
                    style={
                      on
                        ? undefined
                        : { borderColor: LINE, color: TXT }
                    }
                  >
                    <span
                      className={`font-mono text-[10px] font-medium uppercase tracking-[0.16em] sm:text-[11px] ${
                        on ? "text-white/60" : "text-mute"
                      }`}
                    >
                      {item.label}
                    </span>
                    <span className="mt-1 block font-display text-[14px] font-medium tracking-[-0.02em] sm:text-[15px]">
                      {item.title}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          <div
            className="relative min-h-[200px] overflow-hidden rounded-[1.35rem] p-5 text-white sm:min-h-[220px] sm:rounded-[1.75rem] sm:p-9 lg:min-h-[280px]"
            style={{ backgroundColor: INK }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="flex h-full flex-col justify-between"
              >
                <div>
                  <p className="lab !text-ember">{current.label}</p>
                  <h3 className="mt-3 font-display text-[clamp(1.3rem,3.5vw,2rem)] font-medium tracking-[-0.03em]">
                    {current.title}
                  </h3>
                  <p className="mt-4 max-w-md text-[14px] leading-relaxed text-white/55 sm:text-[15px]">
                    {current.body}
                  </p>
                </div>
                <a
                  href="/#trial"
                  className="mt-7 inline-flex w-fit items-center rounded-full bg-white px-5 py-3 font-display text-[13px] font-medium text-ink transition hover:bg-[#f3f3f3] sm:mt-8"
                >
                  Meet us in a trial class
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

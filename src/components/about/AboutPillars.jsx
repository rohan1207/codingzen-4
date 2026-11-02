"use client";

import { motion } from "framer-motion";
import Em from "@/components/ui/Em";
import { aboutPillars, aboutStats } from "@/data/about";
import { CREAM, INK, LINE, MUTE, TXT } from "@/lib/tokens";

export default function AboutPillars() {
  return (
    <section
      className="relative overflow-hidden py-12 sm:py-20 lg:py-24"
      style={{ backgroundColor: CREAM }}
    >
      <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-10 lg:px-12">
        <div className="flex flex-col gap-8 sm:gap-10 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-xl"
          >
            <p className="lab">How we teach</p>
            <h2
              className="mt-3 font-display text-[clamp(1.7rem,5vw,3rem)] font-medium leading-[1.05] tracking-[-0.04em]"
              style={{ color: INK }}
            >
              Quality skills for <Em>every age</Em>
            </h2>
            <p
              className="mt-4 text-[14px] leading-relaxed sm:text-[15px]"
              style={{ color: TXT }}
            >
              Extensive structured curriculum, professionally trained mentors,
              and a pedigree of educators from institutions like IIT, IIM-B &
              ICAI.
            </p>
          </motion.div>

          <ul className="grid grid-cols-2 gap-3 sm:gap-6 lg:min-w-[280px]">
            {aboutStats.map((s, i) => (
              <motion.li
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <p
                  className="font-display text-[clamp(1.55rem,4vw,2.35rem)] font-medium tracking-[-0.04em] text-ink"
                >
                  {s.value}
                </p>
                <p className="lab mt-1 !text-[10px] sm:!text-[11px]" style={{ color: MUTE }}>
                  {s.label}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-5">
          {aboutPillars.map((p, i) => (
            <motion.li
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="rounded-[1.25rem] border bg-white/70 p-5 sm:rounded-[1.5rem] sm:p-7"
              style={{ borderColor: LINE }}
            >
              <h3 className="font-display text-[1.1rem] font-medium tracking-[-0.03em] text-ink sm:text-[1.2rem]">
                {p.title}
              </h3>
              <p
                className="mt-2.5 text-[14px] leading-relaxed"
                style={{ color: TXT }}
              >
                {p.body}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Em from "@/components/ui/Em";
import { CREAM, LINE } from "@/lib/tokens";

const MILESTONES = [
  {
    year: "2014",
    title: "First classroom",
    body: "CodingZen opens its doors — small batches, live mentors, kids shipping their first games.",
  },
  {
    year: "2017",
    title: "City centers",
    body: "Expanding across Delhi NCR so more families can learn in person, not just online.",
  },
  {
    year: "2020",
    title: "Live from anywhere",
    body: "Mentor-led online studios keep the energy of a room — even when the room is a screen.",
  },
  {
    year: "2023",
    title: "5,000+ builders",
    body: "Thousands of students, portfolios that open doors, and parents who stay for the long run.",
  },
  {
    year: "Now",
    title: "Still shipping",
    body: "Four age tracks, AI-ready curricula, and the same promise: think, create, apply.",
  },
];

export default function StudentProcess() {
  const rootRef = useRef(null);
  const quoteInView = useInView(rootRef, { once: true, amount: 0.25 });
  const { scrollYProgress } = useScroll({
    target: rootRef,
    offset: ["start end", "end start"],
  });
  const lineScale = useTransform(scrollYProgress, [0.15, 0.75], [0, 1]);

  return (
    <section
      id="parents"
      ref={rootRef}
      className="relative scroll-mt-28 overflow-x-clip text-ink"
      style={{ backgroundColor: CREAM }}
      aria-label="CodingZen journey"
    >
      {/* Soft atmosphere — no pin, no scrub */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 15% 20%, rgba(232,68,56,0.1), transparent 55%), radial-gradient(ellipse 50% 40% at 90% 80%, rgba(201,164,108,0.08), transparent 60%)",
        }}
      />

      <div className="relative mx-auto w-full px-4 py-7 sm:px-6 sm:py-9 lg:px-12 lg:py-12">
        {/* Inspiring quote */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={quoteInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="font-display text-[11px] font-medium uppercase tracking-[0.2em] text-mute">
            Why we build
          </p>
          <blockquote className="mt-5 sm:mt-6">
            <p className="font-display text-[clamp(1.45rem,6.5vw,3.15rem)] font-medium leading-[1.25] tracking-[-0.03em] text-ink break-words">
              &ldquo;We don&apos;t raise kids who memorize code — we raise kids who{" "}
              <Em>build</Em> what they imagine.&rdquo;
            </p>
          </blockquote>
          <p className="mt-5 font-display text-[13px] font-medium tracking-[0.04em] text-mute sm:mt-6">
            — CodingZen
          </p>
        </motion.div>

        {/* Progress highlights */}
        <div className="relative mx-auto mt-8 max-w-6xl sm:mt-10 lg:mt-12">
          <div className="mb-5 flex flex-col gap-2 sm:mb-7 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between">
            <div className="min-w-0">
              <p className="font-display text-[11px] font-medium uppercase tracking-[0.18em] text-mute">
                Over the years
              </p>
              <h2 className="mt-2 font-display text-[clamp(1.45rem,6vw,2.35rem)] font-medium tracking-[-0.03em] text-ink">
                Progress, not <Em>pause</Em>
              </h2>
            </div>
            <p className="max-w-xs text-[13px] leading-relaxed text-mute sm:text-sm">
              A decade of classrooms, centers, and kids who ship.
            </p>
          </div>

          {/* Desktop timeline */}
          <div className="relative hidden md:block">
            <div
              className="absolute left-0 right-0 top-[1.15rem] h-px"
              style={{ backgroundColor: LINE }}
            />
            <motion.div
              className="absolute left-0 top-[1.15rem] h-px origin-left bg-ember"
              style={{ scaleX: lineScale }}
            />

            <ol className="relative grid grid-cols-5 gap-4">
              {MILESTONES.map((m, i) => (
                <motion.li
                  key={m.year}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="pt-0"
                >
                  <span
                    className="mb-5 flex h-9 w-9 items-center justify-center rounded-full border bg-white shadow-[0_0_0_6px_var(--cream)]"
                    style={{ borderColor: LINE }}
                  >
                    <span className="h-2 w-2 rounded-full bg-ember" />
                  </span>
                  <p className="font-display text-[12px] font-medium uppercase tracking-[0.16em] text-ember">
                    {m.year}
                  </p>
                  <h3 className="mt-2 font-display text-[1.05rem] font-medium tracking-[-0.03em] text-ink">
                    {m.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-mute">
                    {m.body}
                  </p>
                </motion.li>
              ))}
            </ol>
          </div>

          {/* Mobile stacked timeline */}
          <ol className="relative space-y-0 md:hidden">
            <div
              aria-hidden
              className="absolute bottom-2 left-[11px] top-2 w-px"
              style={{ backgroundColor: LINE }}
            />
            {MILESTONES.map((m, i) => (
              <motion.li
                key={m.year}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: 0.45,
                  delay: i * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative flex gap-4 pb-8 last:pb-0"
              >
                <span
                  className="relative z-[1] mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border bg-white"
                  style={{ borderColor: LINE }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-ember" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-display text-[11px] font-medium uppercase tracking-[0.16em] text-ember">
                    {m.year}
                  </p>
                  <h3 className="mt-1 font-display text-[1.1rem] font-medium tracking-[-0.03em] text-ink">
                    {m.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-mute">
                    {m.body}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { audiences } from "@/data/site";
import Em from "@/components/ui/Em";

export default function AudiencePaths() {
  const [active, setActive] = useState(audiences[0].id);
  const current = audiences.find((a) => a.id === active) ?? audiences[0];

  return (
    <section className="relative bg-cream py-20 sm:py-28">
      <div className="container-zen section-pad">
        <div className="max-w-2xl">
          <p className="font-display text-xs font-medium uppercase tracking-[0.18em] text-zen">Who it&apos;s for</p>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-[-0.03em] text-ink sm:text-5xl">
            One dojo. <Em>Three journeys.</Em>
          </h2>
          <p className="mt-4 text-muted-foreground sm:text-lg">
            Pick a path — the experience flexes for kids, teens, and parents without losing the zen.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col gap-3">
            {audiences.map((item) => {
              const isActive = item.id === active;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActive(item.id)}
                  className={`rounded-2xl border px-5 py-4 text-left transition ${
                    isActive
                      ? "border-ember bg-ember text-white shadow-[0_18px_40px_-24px_rgba(232,68,56,0.9)]"
                      : "border-line bg-white/80 text-ink hover:border-zen/40"
                  }`}
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="font-display text-xl font-medium">{item.title}</span>
                    <span className={`font-display text-xs font-medium ${isActive ? "text-white/70" : "text-muted-foreground"}`}>
                      {item.ages}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-line bg-black p-6 text-white sm:p-8">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-ember/20 blur-3xl" />
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.28 }}
              >
                <p className="lab">
                  path.{current.id}
                </p>
                <h3 className="mt-3 font-display text-3xl font-medium sm:text-4xl">{current.title}</h3>
                <p className="mt-4 max-w-lg text-base leading-relaxed text-white/60 sm:text-lg">
                  {current.blurb}
                </p>
                <pre className="mt-8 overflow-x-auto rounded-2xl border border-white/10 bg-white/5 p-4 font-mono text-sm text-ember">
                  <code>{current.code}</code>
                </pre>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

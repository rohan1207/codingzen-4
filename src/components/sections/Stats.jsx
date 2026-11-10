"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "@/components/CountUp";
import { stats } from "@/data/site";
import Em from "@/components/ui/Em";
import { CREAM } from "@/lib/tokens";

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.35, margin: "0px 0px -8% 0px" });

  return (
    <section
      ref={ref}
      className="relative scroll-mt-24 overflow-x-clip py-7 text-ink sm:py-9 lg:py-12"
      style={{ backgroundColor: CREAM }}
    >
      <div className="relative mx-auto w-full px-4 sm:px-6 lg:px-12">
        <div className="mb-5 flex flex-col gap-2 sm:mb-7 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between">
          <div className="min-w-0">
            <p className="font-display text-[11px] font-medium uppercase tracking-[0.18em] text-mute">
              By the numbers
            </p>
            <h2 className="mt-2 font-display text-[clamp(1.5rem,7vw,3rem)] font-medium tracking-[-0.03em] text-ink">
              Proof in the <Em>progress</Em>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-mute">
            Live mentoring metrics families actually care about.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-5 xl:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
              transition={{
                duration: 0.55,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative min-w-0"
            >
              {/* roll-up number mask */}
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: "110%" }}
                  animate={inView ? { y: "0%" } : { y: "110%" }}
                  transition={{
                    duration: 0.7,
                    delay: 0.08 + i * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="font-display text-[clamp(2.15rem,11vw,4.25rem)] font-medium leading-none tracking-[-0.04em] text-ink"
                >
                  {inView ? (
                    <CountUp
                      to={stat.value}
                      duration={1.8 + i * 0.15}
                      delay={0.15 + i * 0.1}
                      separator=","
                      className="inline"
                    />
                  ) : (
                    <span>0</span>
                  )}
                  <span className="text-ember">{stat.suffix}</span>
                </motion.div>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                transition={{ duration: 0.4, delay: 0.35 + i * 0.1 }}
                className="mt-3 font-display text-sm font-medium tracking-[-0.02em] text-txt sm:text-[15px]"
              >
                {stat.label}
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.45 + i * 0.1 }}
                className="mt-1 text-sm leading-snug text-mute"
              >
                {stat.detail}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

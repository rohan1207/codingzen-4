"use client";

import { motion, useReducedMotion } from "framer-motion";
import Em from "@/components/ui/Em";
import { CREAM, INK, MUTE } from "@/lib/tokens";

const EASE = [0.22, 1, 0.36, 1];

export default function Philosophy() {
  const reduce = useReducedMotion();

  return (
    <section
      id="philosophy"
      className="relative w-full scroll-mt-28 overflow-x-clip"
      style={{ backgroundColor: CREAM }}
      aria-label="Our philosophy"
    >
      <div className="mx-auto w-full max-w-[1180px] px-4 py-7 sm:px-8 sm:py-9 lg:px-12 lg:py-12">
        <div className="max-w-[52rem]">
          <p className="lab mb-3 sm:mb-4">Our philosophy</p>

          <motion.h2
            className="font-display text-[clamp(1.5rem,7vw,3.15rem)] font-medium leading-[1.2] tracking-[-0.03em] break-words"
            style={{ color: INK }}
            initial={reduce ? false : { opacity: 0.35, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <span className="block">
              We don&apos;t teach kids to{" "}
              <span className="max-sm:whitespace-normal whitespace-nowrap">
                memorise syntax.
              </span>
            </span>
            <span className="block">
              We teach them to <Em>think</Em> in systems,
            </span>
            <span className="block">
              <Em>create</Em> with curiosity, and <Em>apply</Em> it
            </span>
            <span className="block">
              to things they{" "}
              <span style={{ color: MUTE }}>actually care about.</span>
            </span>
          </motion.h2>

          <a
            href="/about"
            className="mt-5 inline-flex min-h-[44px] items-center gap-1.5 font-display text-[15px] font-medium text-ember transition hover:opacity-80"
          >
            Our full story
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

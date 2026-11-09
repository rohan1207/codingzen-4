"use client";

import { motion, useReducedMotion } from "framer-motion";
import Em from "@/components/ui/Em";
import { CREAM, INK, MUTE } from "@/lib/tokens";

const EASE = [0.22, 1, 0.36, 1];

/** Soft mask + rise for one line of the philosophy headline */
function RevealLine({ children, delay = 0, reduce = false }) {
  if (reduce) {
    return <div className="block">{children}</div>;
  }

  return (
    <div className="block overflow-hidden py-[0.06em]">
      <motion.div
        initial={{ y: "110%", opacity: 0 }}
        whileInView={{ y: "0%", opacity: 1 }}
        viewport={{ once: true, amount: 0.55 }}
        transition={{ duration: 0.85, delay, ease: EASE }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default function Philosophy() {
  const reduce = useReducedMotion();

  return (
    <section
      id="philosophy"
      className="relative w-full scroll-mt-28 overflow-x-clip"
      style={{ backgroundColor: CREAM }}
    >
      <div className="mx-auto w-full max-w-[1180px] px-4 py-7 sm:px-8 sm:py-9 lg:px-12 lg:py-12">
        <div className="max-w-[52rem]">
          <motion.p
            className="lab mb-3 sm:mb-4"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.55, ease: EASE }}
          >
            Our philosophy
          </motion.p>

          <h2
            className="font-display text-[clamp(1.5rem,7vw,3.15rem)] font-medium leading-[1.2] tracking-[-0.03em] break-words"
            style={{ color: INK }}
          >
            <RevealLine delay={0.08} reduce={reduce}>
              We don&apos;t teach kids to memorise syntax.
            </RevealLine>
            <RevealLine delay={0.2} reduce={reduce}>
              We teach them to <Em>think</Em> in systems,
            </RevealLine>
            <RevealLine delay={0.32} reduce={reduce}>
              <Em>create</Em> with curiosity, and <Em>apply</Em> it
            </RevealLine>
            <RevealLine delay={0.44} reduce={reduce}>
              to things they{" "}
              <span style={{ color: MUTE }}>actually care about.</span>
            </RevealLine>
          </h2>

          <motion.a
            href="/about"
            className="mt-5 inline-flex min-h-[44px] items-center gap-1.5 font-display text-[15px] font-medium text-ember transition hover:opacity-80"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.65, delay: reduce ? 0 : 0.58, ease: EASE }}
          >
            Our full story
            <motion.span
              aria-hidden
              initial={reduce ? false : { x: -4, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: reduce ? 0 : 0.72,
                ease: EASE,
              }}
            >
              →
            </motion.span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}

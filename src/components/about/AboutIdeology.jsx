"use client";

import { motion } from "framer-motion";
import Em from "@/components/ui/Em";
import { aboutIdeology } from "@/data/about";
import { CREAM, LINE, RED } from "@/lib/tokens";

export default function AboutIdeology() {
  return (
    <section
      className="relative overflow-hidden py-12 text-ink sm:py-20 lg:py-24"
      style={{ backgroundColor: CREAM }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(ellipse 50% 40% at 10% 20%, ${RED}1a, transparent 55%)`,
        }}
      />

      <div className="relative mx-auto w-full max-w-[1180px] px-4 sm:px-10 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
          className="max-w-2xl"
        >
          <p className="lab">Our ideology</p>
          <h2 className="mt-3 font-display text-[clamp(1.7rem,5vw,3rem)] font-medium leading-[1.1] tracking-[-0.03em] text-ink">
            Build the next generation of coding <Em>leaders</Em>
          </h2>
          <p className="mt-4 max-w-lg text-[14px] leading-relaxed text-txt sm:text-[15px]">
            Through CodingZen we encourage young minds to think, create, and
            build key technical and soft skills — Think · Create · Apply.
          </p>
        </motion.div>

        <ul className="mt-10 grid grid-cols-1 gap-3 sm:mt-12 sm:grid-cols-3 sm:gap-5">
          {aboutIdeology.map((item, i) => (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="rounded-[1.25rem] border bg-white p-5 sm:rounded-[1.35rem] sm:p-7"
              style={{ borderColor: LINE }}
            >
              <span className="lab !text-ember">0{i + 1}</span>
              <h3 className="mt-3 font-display text-[1.15rem] font-medium tracking-[-0.03em] text-ink sm:text-[1.25rem]">
                {item.title}
              </h3>
              <p className="mt-2.5 text-[14px] leading-relaxed text-mute">
                {item.body}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

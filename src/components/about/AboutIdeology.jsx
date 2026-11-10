"use client";

import { motion } from "framer-motion";
import { Brain, Rocket, Sparkles } from "lucide-react";
import Em from "@/components/ui/Em";
import { aboutIdeology } from "@/data/about";
import { CREAM, TXT } from "@/lib/tokens";

const icons = {
  brain: Brain,
  rocket: Rocket,
  sparkles: Sparkles,
};

export default function AboutIdeology() {
  return (
    <section
      className="relative overflow-x-clip py-6 sm:py-7 lg:py-8"
      style={{ backgroundColor: CREAM }}
    >
      <div className="mx-auto grid w-full max-w-[1360px] grid-cols-1 items-stretch gap-5 px-4 sm:gap-6 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-7 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45 }}
          className="flex flex-col justify-center lg:pr-2"
        >
          <p className="inline-flex items-center gap-2.5 font-display text-[11px] font-medium uppercase tracking-[0.16em] text-ink">
            Our ideology
            <span
              aria-hidden
              className="inline-block h-px w-8 bg-ink/35 sm:w-10"
            />
          </p>
          <h2 className="mt-3 max-w-[18ch] font-display text-[clamp(1.7rem,3.8vw,2.65rem)] font-medium leading-[1.12] tracking-[-0.03em] text-ink">
            Nurture the next generation of <Em>coding leaders.</Em>
          </h2>
          <p
            className="mt-3 max-w-md text-[14px] leading-relaxed sm:mt-4 sm:text-[15px]"
            style={{ color: TXT }}
          >
            Through CodingZen we encourage young minds to think, create, and
            build key technical and soft skills — Think · Create · Apply.
          </p>
        </motion.div>

        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-3.5 lg:gap-4">
          {aboutIdeology.map((item, i) => {
            const Icon = icons[item.icon] ?? Sparkles;
            return (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex min-h-[190px] flex-col rounded-[1.35rem] p-5 sm:min-h-[220px] sm:rounded-[1.5rem] sm:p-5 lg:min-h-[240px] lg:p-6"
                style={{ backgroundColor: item.tint }}
              >
                <span
                  className="grid h-11 w-11 place-items-center rounded-2xl bg-white/80 shadow-sm"
                  style={{ color: item.iconColor }}
                >
                  <Icon size={22} strokeWidth={1.85} />
                </span>
                <h3 className="mt-auto pt-10 font-display text-[1.05rem] font-medium leading-snug tracking-[-0.03em] text-ink sm:text-[1.12rem]">
                  {item.title}.
                </h3>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

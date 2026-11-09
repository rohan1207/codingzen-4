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
      className="relative overflow-x-clip py-8 sm:py-10 lg:py-12"
      style={{ backgroundColor: CREAM }}
    >
      <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 items-start gap-7 px-4 sm:gap-8 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl lg:pt-2"
        >
          <p className="font-display text-[11px] font-medium uppercase tracking-[0.18em] text-mute">
            Our ideology ——
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.65rem,4.5vw,2.85rem)] font-medium leading-[1.12] tracking-[-0.03em] text-ink">
            Nurture the next generation of <Em>coding leaders.</Em>
          </h2>
          <p
            className="mt-4 max-w-md text-[14px] leading-relaxed sm:text-[15px]"
            style={{ color: TXT }}
          >
            Through CodingZen we encourage young minds to think, create, and
            build key technical and soft skills — Think · Create · Apply.
          </p>
        </motion.div>

        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
          {aboutIdeology.map((item, i) => {
            const Icon = icons[item.icon] ?? Sparkles;
            return (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="flex min-h-[200px] flex-col rounded-[1.35rem] p-5 sm:min-h-[240px] sm:rounded-[1.5rem] sm:p-6"
                style={{ backgroundColor: item.tint }}
              >
                <span
                  className="grid h-11 w-11 place-items-center rounded-2xl bg-white/70"
                  style={{ color: item.iconColor }}
                >
                  <Icon size={22} strokeWidth={1.9} />
                </span>
                <h3 className="mt-auto pt-8 font-display text-[1.05rem] font-medium leading-snug tracking-[-0.03em] text-ink sm:text-[1.15rem]">
                  {item.title}
                </h3>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

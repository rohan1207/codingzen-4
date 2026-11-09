"use client";

import { motion } from "framer-motion";
import { Brain, Code2, Layers, UserRound } from "lucide-react";
import Em from "@/components/ui/Em";
import { programBenefits } from "@/data/programsPage";
import { CREAM, TXT } from "@/lib/tokens";

const icons = {
  brain: Brain,
  user: UserRound,
  code: Code2,
  layers: Layers,
};

export default function ProgramsBenefits() {
  return (
    <section
      className="relative overflow-x-clip py-7 sm:py-9 lg:py-10"
      style={{ backgroundColor: CREAM }}
    >
      <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-8 lg:px-12">
        <div className="overflow-hidden rounded-[1.5rem] bg-[#F7F2EA] px-5 py-7 sm:rounded-[1.85rem] sm:px-8 sm:py-9 lg:px-10">
          <div className="grid grid-cols-1 items-center gap-7 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="max-w-md"
            >
              <h2 className="font-display text-[clamp(1.55rem,4vw,2.45rem)] font-medium leading-[1.12] tracking-[-0.03em] text-ink">
                How Do We Benefit <Em>Your Child?</Em>
              </h2>
              <p
                className="mt-3 text-[14px] leading-relaxed sm:text-[15px]"
                style={{ color: TXT }}
              >
                Every track is built so kids understand concepts deeply, practice
                with mentors, and leave with work they can show.
              </p>
            </motion.div>

            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3.5">
              {programBenefits.map((item, i) => {
                const Icon = icons[item.icon] ?? Brain;
                return (
                  <motion.li
                    key={item.title}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="flex items-center gap-3 rounded-[1.15rem] bg-white/80 px-4 py-3.5 shadow-[0_10px_28px_-22px_rgba(0,0,0,0.25)] sm:rounded-[1.25rem] sm:px-4 sm:py-4"
                  >
                    <span
                      className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl"
                      style={{
                        backgroundColor: item.tint,
                        color: item.iconColor,
                      }}
                    >
                      <Icon size={18} strokeWidth={2} />
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-display text-[14px] font-medium tracking-[-0.02em] text-ink sm:text-[15px]">
                        {item.title}
                      </h3>
                      <p className="mt-0.5 text-[12px] leading-snug text-mute sm:text-[13px]">
                        {item.body}
                      </p>
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

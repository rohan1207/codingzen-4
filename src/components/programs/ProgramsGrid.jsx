"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Boxes,
  Code2,
  FileCode2,
  Sparkles,
} from "lucide-react";
import Em from "@/components/ui/Em";
import { learningPrograms } from "@/data/programsPage";
import { CREAM, LINE, TXT } from "@/lib/tokens";

const badgeIcons = {
  scratch: Sparkles,
  code: Code2,
  python: FileCode2,
  blocks: Boxes,
};

const ageTints = {
  junior: { bg: "#FFF3D0", text: "#A16207" },
  learner: { bg: "#EDE4FB", text: "#6D28D9" },
  explorer: { bg: "#D8EEDF", text: "#15803D" },
  creator: { bg: "#FCE4EC", text: "#C0392B" },
};

const float = (delay = 0) => ({
  y: [0, -6, 0],
  transition: { duration: 3.4, repeat: Infinity, ease: "easeInOut", delay },
});

export default function ProgramsGrid() {
  return (
    <section
      id="learning-programs"
      className="relative scroll-mt-28 overflow-x-clip py-8 sm:py-10 lg:py-12"
      style={{ backgroundColor: CREAM }}
    >
      <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-black/15 sm:w-16" />
            <p className="font-display text-[11px] font-medium uppercase tracking-[0.18em] text-mute">
              Our learning programs
            </p>
            <span className="h-px w-10 bg-black/15 sm:w-16" />
          </div>
          <h2 className="font-display text-[clamp(1.65rem,4.5vw,2.85rem)] font-medium leading-[1.12] tracking-[-0.03em] text-ink">
            A learning path for every <Em>young coder.</Em>
          </h2>
          <p
            className="mx-auto mt-3 max-w-lg text-[14px] leading-relaxed sm:text-[15px]"
            style={{ color: TXT }}
          >
            Four age-banded tracks — from first Scratch sprites to portfolio-ready
            apps and games.
          </p>
        </motion.div>

        <ul className="mt-8 grid grid-cols-1 gap-4 sm:mt-9 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {learningPrograms.map((program, i) => {
            const BadgeIcon = badgeIcons[program.badge] ?? Code2;
            return (
              <motion.li
                key={program.id}
                id={program.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="flex flex-col overflow-hidden rounded-[1.4rem] border bg-white shadow-[0_18px_40px_-28px_rgba(0,0,0,0.22)] sm:rounded-[1.55rem]"
                style={{ borderColor: LINE }}
              >
                <div
                  className="relative aspect-[4/3.2] overflow-hidden"
                  style={{ backgroundColor: program.tint }}
                >
                  <Image
                    src={program.image}
                    alt={program.name}
                    fill
                    unoptimized
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 50vw, 280px"
                  />
                  <motion.span
                    animate={float(i * 0.25)}
                    className="absolute right-3 top-3 z-[2] grid h-10 w-10 place-items-center rounded-full bg-white text-ink shadow-md"
                  >
                    <BadgeIcon size={16} strokeWidth={2.1} />
                  </motion.span>
                </div>

                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-[1.15rem] font-medium tracking-[-0.03em] text-ink">
                      {program.name}
                    </h3>
                    <span
                      className="rounded-full px-2.5 py-1 font-display text-[11px] font-medium"
                      style={{
                        backgroundColor: ageTints[program.id]?.bg,
                        color: ageTints[program.id]?.text,
                      }}
                    >
                      {program.ages}
                    </span>
                  </div>
                  <p className="mt-2 font-display text-[14px] font-medium leading-snug tracking-[-0.02em] text-ink">
                    {program.tagline}
                  </p>
                  <p
                    className="mt-2 flex-1 text-[13px] leading-relaxed sm:text-[14px]"
                    style={{ color: TXT }}
                  >
                    {program.body}
                  </p>
                  <a
                    href={program.href}
                    className="mt-4 inline-flex min-h-[42px] w-full items-center justify-center gap-1.5 rounded-full border px-4 py-2.5 font-display text-[13px] font-medium text-ink transition hover:bg-ink hover:text-white"
                    style={{ borderColor: LINE }}
                  >
                    View Modules
                    <ArrowUpRight size={14} strokeWidth={2.4} />
                  </a>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  CalendarDays,
  GraduationCap,
  Laptop,
  Play,
  Users,
} from "lucide-react";
import Em from "@/components/ui/Em";
import { aboutStats, aboutWho } from "@/data/about";
import { CREAM, INK, TXT } from "@/lib/tokens";

const icons = {
  calendar: CalendarDays,
  users: Users,
  grad: GraduationCap,
  laptop: Laptop,
};

export default function AboutWho() {
  return (
    <section
      className="relative overflow-x-clip py-6 sm:py-7 lg:py-8"
      style={{ backgroundColor: CREAM }}
    >
      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8">
          {/* Media */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <span
              aria-hidden
              className="absolute -left-1 -top-3 z-[2] flex gap-1 sm:-left-2 sm:-top-4"
            >
              <span className="h-5 w-[2px] rotate-[-18deg] rounded-full bg-ember" />
              <span className="h-4 w-[2px] rotate-[-8deg] rounded-full bg-ember" />
              <span className="h-6 w-[2px] rotate-[10deg] rounded-full bg-ember" />
            </span>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] sm:rounded-[1.75rem]">
              <Image
                src="/images/about/classroom-boy.jpg"
                alt="Student smiling in a CodingZen classroom"
                fill
                unoptimized
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 520px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
              <a
                href="/#classroom"
                aria-label="Watch classroom glimpse"
                className="absolute bottom-4 left-1/2 grid h-12 w-12 -translate-x-1/2 place-items-center rounded-full bg-white text-ink shadow-[0_14px_30px_-12px_rgba(0,0,0,0.45)] transition hover:scale-105 sm:bottom-5 sm:h-14 sm:w-14"
              >
                <Play size={18} fill="currentColor" className="ml-0.5" />
              </a>
            </div>
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="min-w-0"
          >
            <p className="font-display text-[11px] font-medium uppercase tracking-[0.18em] text-mute">
              {aboutWho.eyebrow} ——
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.65rem,4.5vw,2.85rem)] font-medium leading-[1.12] tracking-[-0.03em] text-ink">
              {aboutWho.headline} <Em>{aboutWho.accent}</Em>
            </h2>
            <div className="mt-4 space-y-3.5 sm:mt-5">
              {aboutWho.body.map((para) => (
                <p
                  key={para.slice(0, 24)}
                  className="max-w-xl text-[14px] leading-relaxed sm:text-[15px]"
                  style={{ color: TXT }}
                >
                  {para}
                </p>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <ul className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {aboutStats.map((stat, i) => {
            const Icon = icons[stat.icon] ?? CalendarDays;
            return (
              <motion.li
                key={stat.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-center gap-3 rounded-[1.15rem] px-4 py-3.5 sm:rounded-[1.25rem] sm:px-5 sm:py-4"
                style={{ backgroundColor: stat.tint }}
              >
                <span
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-white shadow-sm"
                  style={{ backgroundColor: stat.iconBg }}
                >
                  <Icon size={18} strokeWidth={2.1} />
                </span>
                <p
                  className="font-display text-[14px] font-medium tracking-[-0.02em] sm:text-[15px]"
                  style={{ color: INK }}
                >
                  {stat.label}
                </p>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

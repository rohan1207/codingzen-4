"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  Boxes,
  Code2,
  FileCode2,
  Gamepad2,
  Joystick,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";
import Em from "@/components/ui/Em";
import {
  learningPrograms,
  programTrackFeatures,
} from "@/data/programsPage";
import { CREAM, LINE, TXT } from "@/lib/tokens";

const badgeIcons = {
  scratch: Sparkles,
  code: Code2,
  python: FileCode2,
  blocks: Boxes,
};

const floatIcons = {
  game: Joystick,
  gamepad: Gamepad2,
  chart: BarChart3,
  cube: Boxes,
};

const featureIcons = {
  code: Code2,
  trophy: Trophy,
  users: Users,
  shield: ShieldCheck,
};

const float = (delay = 0) => ({
  y: [0, -7, 0],
  transition: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay },
});

export default function ProgramsGrid() {
  const [active, setActive] = useState(learningPrograms[0].id);
  const cardRefs = useRef({});

  useEffect(() => {
    const nodes = learningPrograms
      .map((p) => cardRefs.current[p.id])
      .filter(Boolean);
    if (!nodes.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const id = visible[0]?.target?.id;
        if (id) setActive(id);
      },
      { rootMargin: "-25% 0px -45% 0px", threshold: [0.2, 0.45, 0.7] },
    );

    nodes.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    setActive(id);
    cardRefs.current[id]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <section
      id="learning-programs"
      className="relative scroll-mt-28 overflow-x-clip py-7 sm:py-8 lg:py-10"
      style={{ backgroundColor: CREAM }}
    >
      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
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
          <h2 className="font-display text-[clamp(1.65rem,4.2vw,2.75rem)] font-medium leading-[1.12] tracking-[-0.03em] text-ink">
            A learning path for every <Em>young coder.</Em>
          </h2>
        </motion.div>

        {/* Timeline + cards */}
        <div className="relative mt-8 sm:mt-10 lg:mt-11">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-[7.5rem_1fr] lg:gap-6 xl:grid-cols-[8.5rem_1fr]">
            {/* Timeline rail (desktop) */}
            <aside className="relative hidden lg:block" aria-label="Program ages">
              <div
                aria-hidden
                className="absolute left-1/2 top-6 bottom-6 w-[3px] -translate-x-1/2 rounded-full"
                style={{
                  background:
                    "linear-gradient(180deg, #E8A317 0%, #7C5CBF 35%, #3F9B6A 68%, #E84438 100%)",
                }}
              />
              <ul className="relative flex h-full flex-col justify-between py-4">
                {learningPrograms.map((program) => {
                  const on = active === program.id;
                  return (
                    <li key={program.id} className="relative flex justify-center py-8">
                      <button
                        type="button"
                        onClick={() => scrollTo(program.id)}
                        aria-current={on ? "true" : undefined}
                        className={`relative z-[1] grid h-[4.5rem] w-[4.5rem] place-items-center rounded-full font-display text-[13px] font-medium leading-tight tracking-[-0.02em] text-white shadow-[0_12px_28px_-12px_rgba(0,0,0,0.35)] transition ${
                          on ? "scale-110" : "scale-100 opacity-90 hover:opacity-100"
                        }`}
                        style={{ backgroundColor: program.accent }}
                      >
                        <span className="px-1 text-center">
                          {program.ageShort}
                          <span className="block text-[10px] font-medium opacity-90">
                            Years
                          </span>
                        </span>
                      </button>
                      <span
                        aria-hidden
                        className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white ring-2"
                        style={{
                          boxShadow: `0 0 0 3px ${program.accent}`,
                        }}
                      />
                    </li>
                  );
                })}
              </ul>
            </aside>

            {/* Cards */}
            <ul className="space-y-4 sm:space-y-5">
              {learningPrograms.map((program, i) => {
                const BadgeIcon = badgeIcons[program.badge] ?? Code2;
                const FloatIcon = floatIcons[program.floatIcon] ?? Sparkles;
                const on = active === program.id;

                return (
                  <motion.li
                    key={program.id}
                    id={program.id}
                    ref={(el) => {
                      if (el) cardRefs.current[program.id] = el;
                    }}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.45, delay: i * 0.05 }}
                    onMouseEnter={() => setActive(program.id)}
                    className={`scroll-mt-28 overflow-hidden rounded-[1.45rem] border transition duration-300 sm:rounded-[1.65rem] ${
                      on
                        ? "shadow-[0_22px_50px_-28px_rgba(0,0,0,0.28)]"
                        : "shadow-[0_14px_36px_-28px_rgba(0,0,0,0.18)]"
                    }`}
                    style={{
                      backgroundColor: program.tint,
                      borderColor: on ? `${program.accent}55` : LINE,
                    }}
                  >
                    <div className="grid grid-cols-1 items-center gap-4 p-4 sm:gap-5 sm:p-5 lg:grid-cols-[1.15fr_0.85fr] lg:gap-6 lg:p-6 xl:p-7">
                      <div className="min-w-0">
                        {/* Mobile age chip */}
                        <span
                          className="mb-3 inline-flex rounded-full px-3 py-1 font-display text-[11px] font-medium text-white lg:hidden"
                          style={{ backgroundColor: program.accent }}
                        >
                          {program.ages}
                        </span>

                        <h3 className="font-display text-[clamp(1.25rem,2.5vw,1.7rem)] font-medium tracking-[-0.03em] text-ink">
                          {program.name}{" "}
                          <span className="text-[0.85em] font-medium text-mute">
                            ({program.ages.replace(" Years", " Year")})
                          </span>
                        </h3>

                        <span
                          className="mt-3 inline-flex rounded-full px-3 py-1.5 font-display text-[12px] font-medium sm:text-[13px]"
                          style={{
                            backgroundColor: `${program.accent}22`,
                            color: program.accent,
                          }}
                        >
                          {program.tagline}
                        </span>

                        <p
                          className="mt-3 max-w-xl text-[14px] leading-relaxed sm:mt-4 sm:text-[15px]"
                          style={{ color: TXT }}
                        >
                          {program.body}
                        </p>

                        <a
                          href={program.href}
                          className="mt-5 inline-flex min-h-[44px] items-center gap-2 rounded-2xl border bg-white px-4 py-2.5 font-display text-[13px] font-medium text-ink shadow-sm transition hover:bg-ink hover:text-white sm:mt-6"
                          style={{ borderColor: LINE }}
                        >
                          View Modules
                          <ArrowUpRight size={14} strokeWidth={2.5} />
                        </a>
                      </div>

                      <div className="relative mx-auto aspect-[5/4] w-full max-w-[320px] lg:max-w-none">
                        <div
                          aria-hidden
                          className="absolute inset-[8%] rounded-[42%_58%_48%_52%/50%_44%_56%_50%] opacity-70"
                          style={{ backgroundColor: `${program.accent}33` }}
                        />
                        <Image
                          src={program.image}
                          alt={program.name}
                          fill
                          unoptimized
                          className="object-contain object-bottom drop-shadow-[0_16px_28px_rgba(0,0,0,0.16)]"
                          sizes="(max-width: 1024px) 70vw, 340px"
                        />

                        <motion.span
                          animate={float(i * 0.2)}
                          className="absolute right-2 top-3 z-[2] grid h-10 w-10 place-items-center rounded-2xl bg-white text-ink shadow-md sm:right-3 sm:top-4"
                          style={{ color: program.accent }}
                        >
                          <BadgeIcon size={16} strokeWidth={2.1} />
                        </motion.span>

                        <motion.span
                          animate={float(0.5 + i * 0.15)}
                          className="absolute bottom-[18%] left-1 z-[2] grid h-9 w-9 place-items-center rounded-full bg-white/95 text-ink shadow-md sm:left-2"
                          style={{ color: program.accent }}
                        >
                          <FloatIcon size={15} strokeWidth={2.1} />
                        </motion.span>
                      </div>
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom features */}
        <ul
          className="mt-8 grid grid-cols-2 gap-3 rounded-[1.35rem] border bg-white p-3 sm:mt-10 sm:grid-cols-4 sm:gap-2 sm:rounded-[1.5rem] sm:p-4"
          style={{ borderColor: LINE }}
        >
          {programTrackFeatures.map((item, i) => {
            const Icon = featureIcons[item.icon] ?? Code2;
            return (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`flex flex-col items-center gap-2.5 px-2 py-4 text-center sm:py-5 ${
                  i > 0 ? "sm:border-l" : ""
                }`}
                style={{ borderColor: LINE }}
              >
                <span
                  className="grid h-11 w-11 place-items-center rounded-2xl text-white"
                  style={{ backgroundColor: item.color }}
                >
                  <Icon size={18} strokeWidth={2} />
                </span>
                <p className="font-display text-[13px] font-medium tracking-[-0.02em] text-ink sm:text-[14px]">
                  {item.title}
                </p>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

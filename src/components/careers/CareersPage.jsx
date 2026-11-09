"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  FileText,
  GraduationCap,
  Heart,
  HelpCircle,
  Layers,
  Play,
  Rocket,
  Send,
  Trophy,
  Users,
  Globe2,
} from "lucide-react";
import Em from "@/components/ui/Em";
import {
  careersCtas,
  careersHero,
  facultyLookingFor,
  howJoin,
  whyJoin,
} from "@/data/careers";
import { CREAM, INK, LINE, RED, TXT } from "@/lib/tokens";

const whyIcons = {
  layers: Layers,
  trophy: Trophy,
  globe: Globe2,
  heart: Heart,
  users: Users,
};

const stepIcons = {
  file: FileText,
  users: Users,
  grad: GraduationCap,
  rocket: Rocket,
  play: Play,
};

const ctaIcons = {
  help: HelpCircle,
  plane: Send,
};

const float = (delay = 0) => ({
  y: [0, -7, 0],
  transition: { duration: 3.6, repeat: Infinity, ease: "easeInOut", delay },
});

export default function CareersPage() {
  return (
    <div style={{ backgroundColor: CREAM }}>
      {/* Hero */}
      <section className="relative overflow-x-clip pt-24 pb-8 sm:pt-28 sm:pb-10 lg:pt-32 lg:pb-12">
        <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 items-center gap-8 px-4 sm:gap-10 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-xl"
          >
            <span className="inline-flex rounded-full bg-[#F9D3CF] px-3 py-1 font-display text-[10px] font-medium uppercase tracking-[0.14em] text-[#C0392B]">
              {careersHero.eyebrow}
            </span>
            <h1 className="mt-4 font-display text-[clamp(2.05rem,5.8vw,3.5rem)] font-medium leading-[1.08] tracking-[-0.04em] text-ink">
              <span className="block">{careersHero.titleLine}</span>
              <span className="mt-1 block">
                {careersHero.titleBefore} <Em>{careersHero.accent}</Em>
              </span>
            </h1>
            <p
              className="mt-4 max-w-md text-[14px] leading-relaxed sm:text-[15px]"
              style={{ color: TXT }}
            >
              {careersHero.lead}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href={careersHero.primaryCta.href}
                className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full px-5 py-3 font-display text-[14px] font-medium text-white transition hover:brightness-110"
                style={{ backgroundColor: INK }}
              >
                {careersHero.primaryCta.label}
                <ArrowUpRight size={15} strokeWidth={2.5} />
              </a>
              <a
                href={careersHero.secondaryCta.href}
                className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full border bg-white px-5 py-3 font-display text-[14px] font-medium text-ink transition hover:bg-[#f7f4ee]"
                style={{ borderColor: LINE }}
              >
                {careersHero.secondaryCta.label}
                <ArrowUpRight size={15} strokeWidth={2.5} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="relative mx-auto aspect-[5/4] w-full max-w-[480px] lg:max-w-none"
          >
            <div
              aria-hidden
              className="absolute left-[6%] top-[4%] h-[90%] w-[88%] rounded-[48%_52%_45%_55%/52%_42%_58%_48%] bg-[#D9CBF5]"
            />
            <div className="absolute inset-x-[8%] bottom-0 top-[6%] overflow-hidden">
              <Image
                src="/images/careers/faculty.jpg"
                alt="CodingZen teaching team"
                fill
                unoptimized
                priority
                className="object-contain object-bottom"
                sizes="(max-width: 1024px) 90vw, 480px"
              />
            </div>

            <motion.div
              animate={float(0.15)}
              className="absolute left-0 top-[22%] z-[2] inline-flex items-center gap-2 rounded-full border border-white/80 bg-white px-3 py-2 shadow-[0_12px_28px_-14px_rgba(0,0,0,0.3)] sm:-left-1"
            >
              <span className="grid h-7 w-7 place-items-center rounded-full bg-[#EDE4FB] text-[#7C5CBF]">
                <Users size={13} strokeWidth={2.3} />
              </span>
              <span className="pr-1 font-display text-[12px] font-medium text-ink">
                Join our Teaching Team
              </span>
            </motion.div>

            <motion.div
              animate={float(0.55)}
              className="absolute bottom-[18%] left-1 z-[2] inline-flex items-center gap-2 rounded-full border border-white/80 bg-white px-3 py-2 shadow-[0_12px_28px_-14px_rgba(0,0,0,0.3)] sm:left-2"
            >
              <span className="grid h-7 w-7 place-items-center rounded-full bg-[#FFF0C8] text-[#D4A017]">
                <GraduationCap size={13} strokeWidth={2.3} />
              </span>
              <span className="pr-1 font-display text-[12px] font-medium text-ink">
                Mentor Young Coders
              </span>
            </motion.div>

            <motion.span
              animate={float(0.9)}
              className="absolute right-1 top-[12%] z-[2] grid h-10 w-10 place-items-center rounded-xl text-white shadow-md sm:right-3"
              style={{ backgroundColor: "#7C5CBF" }}
            >
              <span className="font-mono text-[11px] font-semibold tracking-tight">
                {"</>"}
              </span>
            </motion.span>
          </motion.div>
        </div>
      </section>

      {/* Looking for */}
      <section className="relative overflow-x-clip pb-8 sm:pb-10">
        <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 items-center gap-6 overflow-hidden rounded-[1.5rem] border bg-white p-5 sm:gap-8 sm:rounded-[1.75rem] sm:p-7 lg:grid-cols-[0.9fr_1.1fr] lg:p-8"
            style={{ borderColor: LINE }}
          >
            <div className="relative mx-auto aspect-square w-full max-w-[320px]">
              <div
                aria-hidden
                className="absolute inset-[8%] rounded-[42%_58%_48%_52%/50%_44%_56%_50%] bg-[#E4D9F5]"
              />
              <Image
                src="/images/careers/laptop.jpg"
                alt="Teaching toolkit"
                fill
                unoptimized
                className="object-contain p-4"
                sizes="320px"
              />
            </div>
            <div>
              <h2 className="font-display text-[clamp(1.45rem,3.5vw,2.2rem)] font-medium leading-[1.15] tracking-[-0.03em] text-ink">
                {facultyLookingFor.titleBefore}{" "}
                <Em>{facultyLookingFor.accent}</Em>
              </h2>
              <ul className="mt-5 space-y-3.5">
                {facultyLookingFor.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#E4D9F5] text-[#7C5CBF]">
                      <Check size={13} strokeWidth={2.8} />
                    </span>
                    <p
                      className="text-[14px] leading-relaxed sm:text-[15px]"
                      style={{ color: TXT }}
                    >
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why join */}
      <section className="relative overflow-x-clip pb-8 sm:pb-10 lg:pb-12">
        <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-8 lg:px-12">
          <div className="max-w-2xl">
            <h2 className="font-display text-[clamp(1.55rem,4vw,2.45rem)] font-medium leading-[1.12] tracking-[-0.03em] text-ink">
              {whyJoin.titleBefore} <Em>{whyJoin.accent}</Em>
            </h2>
            <span
              aria-hidden
              className="mt-2 block h-[3px] w-12 rounded-full"
              style={{ backgroundColor: RED }}
            />
            <p
              className="mt-3 max-w-xl text-[14px] leading-relaxed sm:text-[15px]"
              style={{ color: TXT }}
            >
              {whyJoin.lead}
            </p>
          </div>

          <ul className="mt-6 grid grid-cols-1 gap-3 sm:mt-7 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {whyJoin.items.map((item, i) => {
              const Icon = whyIcons[item.icon] ?? Layers;
              return (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="rounded-[1.25rem] p-5 sm:rounded-[1.4rem] sm:p-6"
                  style={{ backgroundColor: item.tint }}
                >
                  <span
                    className="grid h-11 w-11 place-items-center rounded-2xl text-white"
                    style={{ backgroundColor: item.iconBg }}
                  >
                    <Icon size={18} strokeWidth={2} />
                  </span>
                  <h3 className="mt-4 font-display text-[1.05rem] font-medium tracking-[-0.02em] text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-mute sm:text-[14px]">
                    {item.body}
                  </p>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* How join */}
      <section
        id="apply"
        className="relative scroll-mt-28 overflow-x-clip pb-8 sm:pb-10 lg:pb-12"
      >
        <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-8 lg:px-12">
          <div className="flex items-center justify-center gap-4">
            <span
              aria-hidden
              className="hidden h-px flex-1 sm:block"
              style={{ backgroundColor: LINE }}
            />
            <h2 className="shrink-0 text-center font-display text-[clamp(1.55rem,4vw,2.45rem)] font-medium leading-[1.12] tracking-[-0.03em] text-ink">
              {howJoin.titleBefore} <Em>{howJoin.accent}</Em>
            </h2>
            <span
              aria-hidden
              className="hidden h-px flex-1 sm:block"
              style={{ backgroundColor: LINE }}
            />
          </div>

          <ol className="relative mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-3">
            <div
              aria-hidden
              className="pointer-events-none absolute left-[10%] right-[10%] top-8 hidden border-t border-dashed lg:block"
              style={{ borderColor: "#C9B8E8" }}
            />
            {howJoin.steps.map((step, i) => {
              const Icon = stepIcons[step.icon] ?? FileText;
              return (
                <motion.li
                  key={step.id}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="relative text-center lg:px-1"
                >
                  <div className="relative mx-auto inline-flex">
                    <span
                      className="grid h-16 w-16 place-items-center rounded-full text-white shadow-md"
                      style={{ backgroundColor: step.color }}
                    >
                      <Icon size={22} strokeWidth={2} />
                    </span>
                    <span
                      className="absolute -right-1 -top-1 grid h-6 min-w-6 place-items-center rounded-full px-1.5 font-display text-[10px] font-medium text-white"
                      style={{ backgroundColor: INK }}
                    >
                      {step.number}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-[14px] font-medium leading-snug tracking-[-0.02em] text-ink sm:text-[15px]">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-[12px] leading-relaxed text-mute sm:text-[13px]">
                    {step.body}
                  </p>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* Bottom CTAs */}
      <section className="relative overflow-x-clip pb-10 sm:pb-12 lg:pb-14">
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 right-0 h-40 w-56 rounded-tl-[100%] bg-[#F6C9A8]/55 sm:h-52 sm:w-72"
        />
        <div className="relative mx-auto grid w-full max-w-[1180px] grid-cols-1 gap-4 px-4 sm:grid-cols-2 sm:gap-5 sm:px-8 lg:px-12">
          {careersCtas.map((card, i) => {
            const Icon = ctaIcons[card.icon] ?? HelpCircle;
            return (
              <motion.article
                key={card.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-[1.4rem] border bg-white p-5 shadow-[0_14px_36px_-28px_rgba(0,0,0,0.28)] sm:rounded-[1.6rem] sm:p-7"
                style={{ borderColor: LINE }}
              >
                <span
                  className="grid h-12 w-12 place-items-center rounded-2xl text-white"
                  style={{ backgroundColor: card.iconBg }}
                >
                  <Icon size={20} strokeWidth={2} />
                </span>
                <h3 className="mt-4 font-display text-[clamp(1.2rem,2.5vw,1.55rem)] font-medium tracking-[-0.02em] text-ink">
                  {card.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-mute">
                  {card.body}
                </p>
                <a
                  href={card.cta.href}
                  className={`mt-5 inline-flex min-h-[44px] items-center gap-2 rounded-full px-5 py-2.5 font-display text-[14px] font-medium transition ${
                    card.solid
                      ? "text-white hover:brightness-110"
                      : "border bg-white text-ink hover:bg-[#f7f4ee]"
                  }`}
                  style={
                    card.solid
                      ? { backgroundColor: INK }
                      : { borderColor: LINE }
                  }
                >
                  {card.cta.label}
                  <ArrowUpRight size={15} strokeWidth={2.5} />
                </a>
              </motion.article>
            );
          })}
        </div>
      </section>
    </div>
  );
}

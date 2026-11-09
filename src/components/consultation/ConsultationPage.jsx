"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  Building2,
  CalendarDays,
  Code2,
  Handshake,
  HelpCircle,
  Sparkles,
  Target,
  Users,
  Video,
} from "lucide-react";
import Em from "@/components/ui/Em";
import {
  bookingHref,
  consultBenefits,
  consultCta,
  consultHero,
  discussItems,
  experts,
} from "@/data/consultation";
import { CREAM, INK, LINE, RED, TXT } from "@/lib/tokens";

const benefitIcons = {
  users: Users,
  target: Target,
  handshake: Handshake,
};

const discussIcons = {
  code: Code2,
  target: Target,
  chart: BarChart3,
  sparkles: Sparkles,
  building: Building2,
  help: HelpCircle,
};

const float = (delay = 0) => ({
  y: [0, -7, 0],
  transition: { duration: 3.6, repeat: Infinity, ease: "easeInOut", delay },
});

function ScheduleBtn({
  href = bookingHref,
  className = "",
  icon = "calendar",
  compact = false,
}) {
  const Icon = icon === "video" ? Video : CalendarDays;
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 rounded-full font-display font-medium text-white transition hover:brightness-110 ${
        compact
          ? "min-h-[42px] px-4 py-2.5 text-[13px]"
          : "min-h-[46px] px-5 py-3 text-[14px]"
      } ${className}`}
      style={{ backgroundColor: INK }}
    >
      <Icon size={compact ? 14 : 15} strokeWidth={2.2} />
      Schedule a consultation
      <ArrowUpRight size={compact ? 14 : 15} strokeWidth={2.5} />
    </a>
  );
}

export default function ConsultationPage() {
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
              {consultHero.eyebrow}
            </span>
            <h1 className="mt-4 font-display text-[clamp(1.95rem,5.5vw,3.35rem)] font-medium leading-[1.1] tracking-[-0.04em] text-ink">
              {consultHero.titleBefore} <Em>{consultHero.accent}</Em>
            </h1>
            <p
              className="mt-4 max-w-md text-[14px] leading-relaxed sm:text-[15px]"
              style={{ color: TXT }}
            >
              {consultHero.lead}
            </p>
            <div className="mt-6">
              <ScheduleBtn href="#book" />
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
              className="absolute left-[6%] top-[4%] h-[90%] w-[88%] rounded-[48%_52%_45%_55%/52%_42%_58%_48%] bg-[#E4C9E8]"
            />
            <div className="absolute inset-x-[8%] bottom-0 top-[6%] overflow-hidden">
              <Image
                src="/images/consultation/hero.jpg"
                alt="Video consultation with a CodingZen expert"
                fill
                unoptimized
                priority
                className="object-contain object-bottom"
                sizes="(max-width: 1024px) 90vw, 480px"
              />
            </div>

            <motion.span
              animate={float(0.25)}
              className="absolute left-1 top-[28%] z-[2] grid h-10 w-10 place-items-center rounded-full text-white shadow-md sm:left-0"
              style={{ backgroundColor: RED }}
            >
              <Video size={16} strokeWidth={2.3} />
            </motion.span>
          </motion.div>
        </div>
      </section>

      {/* Benefits strip */}
      <section className="relative overflow-x-clip pb-8 sm:pb-10">
        <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-8 lg:px-12">
          <ul
            className="grid grid-cols-1 overflow-hidden rounded-[1.35rem] border bg-white sm:grid-cols-3 sm:rounded-[1.5rem]"
            style={{ borderColor: LINE }}
          >
            {consultBenefits.map((item, i) => {
              const Icon = benefitIcons[item.icon] ?? Users;
              return (
                <li
                  key={item.id}
                  className={`flex items-start gap-3.5 px-5 py-5 sm:px-6 sm:py-6 ${
                    i > 0 ? "border-t sm:border-t-0 sm:border-l" : ""
                  }`}
                  style={{ borderColor: LINE }}
                >
                  <span
                    className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-2xl text-white"
                    style={{ backgroundColor: item.color }}
                  >
                    <Icon size={17} strokeWidth={2.1} />
                  </span>
                  <div>
                    <h3 className="font-display text-[14px] font-medium tracking-[-0.02em] text-ink sm:text-[15px]">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 text-[13px] text-mute">{item.body}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* What you can discuss */}
      <section className="relative overflow-x-clip pb-8 sm:pb-10 lg:pb-12">
        <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 items-start gap-6 px-4 sm:gap-8 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10 lg:px-12">
          <div className="max-w-sm lg:pt-2">
            <h2 className="font-display text-[clamp(1.55rem,4vw,2.45rem)] font-medium leading-[1.12] tracking-[-0.03em] text-ink">
              What You Can Discuss in the <Em>Consultation?</Em>
            </h2>
            <span
              aria-hidden
              className="mt-3 block h-[3px] w-12 rounded-full"
              style={{ backgroundColor: RED }}
            />
          </div>

          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {discussItems.map((item, i) => {
              const Icon = discussIcons[item.icon] ?? Code2;
              return (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="flex items-center gap-3 rounded-[1.2rem] border bg-white p-4 shadow-[0_10px_28px_-24px_rgba(0,0,0,0.28)] sm:rounded-[1.35rem] sm:p-5"
                  style={{ borderColor: LINE }}
                >
                  <span
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl text-white"
                    style={{ backgroundColor: item.iconBg }}
                  >
                    <Icon size={18} strokeWidth={2} />
                  </span>
                  <h3 className="font-display text-[14px] font-medium leading-snug tracking-[-0.02em] text-ink">
                    {item.title}
                  </h3>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Experts */}
      <section className="relative overflow-x-clip pb-8 sm:pb-10 lg:pb-12">
        <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-8 lg:px-12">
          <div className="flex items-center justify-center gap-4">
            <span
              aria-hidden
              className="hidden h-px flex-1 sm:block"
              style={{ backgroundColor: LINE }}
            />
            <h2 className="shrink-0 text-center font-display text-[clamp(1.55rem,4vw,2.45rem)] font-medium leading-[1.12] tracking-[-0.03em] text-ink">
              Meet Our <Em>Consultation Experts</Em>
            </h2>
            <span
              aria-hidden
              className="hidden h-px flex-1 sm:block"
              style={{ backgroundColor: LINE }}
            />
          </div>
          <p
            className="mx-auto mt-3 max-w-xl text-center text-[14px] leading-relaxed sm:text-[15px]"
            style={{ color: TXT }}
          >
            Our team is here to guide you with the right information and help
            you take the next step with confidence.
          </p>

          <ul className="mt-7 grid grid-cols-1 gap-5 sm:mt-8 sm:grid-cols-2 sm:gap-6">
            {experts.map((expert, i) => (
              <motion.li
                key={expert.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="overflow-hidden rounded-[1.5rem] border bg-white shadow-[0_14px_36px_-28px_rgba(0,0,0,0.3)] sm:rounded-[1.75rem]"
                style={{ borderColor: LINE }}
              >
                <div
                  className="relative mx-auto aspect-[5/4] w-full max-w-[340px]"
                  style={{ backgroundColor: expert.blob }}
                >
                  <div
                    aria-hidden
                    className="absolute left-[10%] top-[8%] h-[84%] w-[80%] rounded-full opacity-90"
                    style={{ backgroundColor: expert.blob }}
                  />
                  <Image
                    src={expert.image}
                    alt={expert.name}
                    fill
                    unoptimized
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 90vw, 340px"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="font-display text-[1.25rem] font-medium tracking-[-0.02em] text-ink">
                    {expert.name}
                  </h3>
                  <span
                    className="mt-2 inline-flex rounded-full px-2.5 py-1 font-display text-[11px] font-medium"
                    style={{
                      backgroundColor: expert.roleTint,
                      color: expert.roleText,
                    }}
                  >
                    {expert.role}
                  </span>
                  <p className="mt-3 text-[13px] leading-relaxed text-mute sm:text-[14px]">
                    {expert.body}
                  </p>
                  <div className="mt-5">
                    <ScheduleBtn href="#book" icon="video" compact />
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        id="book"
        className="relative scroll-mt-28 overflow-x-clip pb-10 sm:pb-12 lg:pb-14"
      >
        <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-start gap-5 rounded-[1.5rem] bg-[#E6D9F7] px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:rounded-[1.75rem] sm:px-8 sm:py-7"
          >
            <div className="flex items-start gap-4 sm:items-center">
              <span className="relative grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white/85 text-[#7C5CBF] shadow-sm">
                <CalendarDays size={26} strokeWidth={1.9} />
                <span
                  className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full text-[10px] font-bold text-white"
                  style={{ backgroundColor: RED }}
                >
                  ✓
                </span>
              </span>
              <div>
                <h2 className="font-display text-[clamp(1.25rem,3vw,1.75rem)] font-medium tracking-[-0.02em] text-ink">
                  {consultCta.title}
                </h2>
                <p className="mt-1 max-w-md text-[13px] leading-relaxed text-mute sm:text-[14px]">
                  {consultCta.body}
                </p>
              </div>
            </div>
            <ScheduleBtn href={bookingHref} />
          </motion.div>
        </div>
      </section>
    </div>
  );
}

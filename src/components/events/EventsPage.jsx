"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Award,
  CalendarDays,
  Check,
  Radio,
  Users,
} from "lucide-react";
import Em from "@/components/ui/Em";
import {
  eventCategories,
  eventsCta,
  eventsHero,
  highlightEvent,
  pastEvents,
  upcomingEvents,
} from "@/data/eventsPage";
import { CREAM, LINE, MUTE, TXT } from "@/lib/tokens";

const categoryIcons = {
  calendar: CalendarDays,
  users: Users,
  award: Award,
  radio: Radio,
};

function CircleArrow({ className = "" }) {
  return (
    <span
      className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-white transition group-hover:bg-ember ${className}`}
    >
      <ArrowRight size={15} strokeWidth={2.25} />
    </span>
  );
}

export default function EventsPage() {
  const [slide, setSlide] = useState(0);
  const maxSlide = Math.max(0, upcomingEvents.length - 3);

  const visibleUpcoming = upcomingEvents.slice(
    slide,
    slide + 3,
  ).length
    ? upcomingEvents.slice(slide, slide + 3)
    : upcomingEvents;

  return (
    <div style={{ backgroundColor: CREAM }}>
      {/* Hero */}
      <section className="relative overflow-x-clip pt-24 pb-8 sm:pt-28 sm:pb-10 lg:pt-32 lg:pb-12">
        <div
          aria-hidden
          className="pointer-events-none absolute right-[-8%] top-[12%] hidden h-[420px] w-[520px] rounded-[45%] bg-[#E9DDF8]/70 blur-2xl lg:block"
        />

        <div className="relative mx-auto grid w-full max-w-[1180px] grid-cols-1 items-center gap-8 px-4 sm:gap-10 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-xl"
          >
            <span className="inline-flex rounded-full bg-[#F9D3CF] px-3.5 py-1.5 font-display text-[10px] font-medium uppercase tracking-[0.14em] text-[#C0392B]">
              {eventsHero.eyebrow}
            </span>
            <h1 className="mt-4 font-display text-[clamp(2.1rem,6vw,3.55rem)] font-medium leading-[1.08] tracking-[-0.04em] text-ink">
              {eventsHero.titleBefore} <Em>{eventsHero.titleAccent}</Em>
            </h1>
            <p
              className="mt-4 max-w-md text-[14px] leading-relaxed sm:text-[15px]"
              style={{ color: TXT }}
            >
              {eventsHero.blurb}
            </p>
            <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:items-center">
              <a
                href="#upcoming"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-ink px-5 text-sm font-medium text-white transition hover:bg-[#222]"
              >
                Upcoming Events
                <ArrowUpRight size={15} />
              </a>
              <a
                href="#past"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border bg-white px-5 text-sm font-medium text-ink transition hover:text-ember"
                style={{ borderColor: LINE }}
              >
                Past Events
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="relative mx-auto w-full max-w-[520px] lg:max-w-none"
          >
            <div className="relative aspect-[4/3.3] overflow-hidden rounded-[1.75rem] bg-[#EDE8DC] shadow-[0_24px_50px_-28px_rgba(0,0,0,0.35)] sm:rounded-[2rem]">
              <Image
                src={eventsHero.image}
                alt="Students at a CodingZen event"
                fill
                unoptimized
                priority
                className="object-cover object-center"
              />
            </div>

            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-2 top-10 z-[2] hidden h-14 w-14 overflow-hidden rounded-2xl shadow-lg sm:block sm:-left-4"
            >
              <Image
                src="/images/events/float-calendar.svg"
                alt=""
                width={56}
                height={56}
                unoptimized
                className="h-full w-full object-cover"
              />
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 3.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.35,
              }}
              className="absolute -right-1 top-6 z-[2] hidden h-14 w-14 overflow-hidden rounded-2xl shadow-lg sm:block sm:-right-3"
            >
              <Image
                src="/images/events/float-code.svg"
                alt=""
                width={56}
                height={56}
                unoptimized
                className="h-full w-full object-cover"
              />
            </motion.div>

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.2,
              }}
              className="absolute bottom-6 right-4 z-[2] hidden h-12 w-12 items-center justify-center rounded-full bg-[#FBBF24] text-xl shadow-lg sm:flex"
              aria-hidden
            >
              🏆
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="relative overflow-x-clip pb-8 sm:pb-10 lg:pb-12">
        <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 gap-3 rounded-[1.5rem] bg-white p-4 shadow-[0_16px_40px_-28px_rgba(0,0,0,0.28)] sm:grid-cols-4 sm:gap-2 sm:rounded-[1.75rem] sm:p-5">
            {eventCategories.map((c) => {
              const Icon = categoryIcons[c.icon] ?? CalendarDays;
              return (
                <div
                  key={c.id}
                  className="flex items-start gap-3 rounded-[1.15rem] px-2 py-2 sm:px-3 sm:py-2.5"
                >
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl"
                    style={{ backgroundColor: c.tint, color: c.ink }}
                  >
                    <Icon size={18} />
                  </span>
                  <div className="min-w-0">
                    <p className="font-display text-[14px] font-medium tracking-[-0.02em] text-ink">
                      {c.title}
                    </p>
                    <p className="mt-0.5 text-[12px] leading-snug" style={{ color: MUTE }}>
                      {c.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Upcoming */}
      <section
        id="upcoming"
        className="relative scroll-mt-28 overflow-x-clip pb-8 sm:pb-10 lg:pb-12"
      >
        <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-8 lg:px-12">
          <div className="mb-5 flex items-end justify-between gap-3">
            <h2 className="font-display text-[clamp(1.55rem,4vw,2.35rem)] font-medium leading-[1.15] tracking-[-0.03em] text-ink">
              Upcoming <Em>Events</Em>
            </h2>
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Previous events"
                disabled={slide <= 0}
                onClick={() => setSlide((s) => Math.max(0, s - 1))}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border bg-white text-ink transition hover:text-ember disabled:opacity-35"
                style={{ borderColor: LINE }}
              >
                <ArrowLeft size={15} />
              </button>
              <button
                type="button"
                aria-label="Next events"
                disabled={slide >= maxSlide}
                onClick={() => setSlide((s) => Math.min(maxSlide, s + 1))}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border bg-white text-ink transition hover:text-ember disabled:opacity-35"
                style={{ borderColor: LINE }}
              >
                <ArrowRight size={15} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {visibleUpcoming.map((ev) => (
              <a
                key={ev.id}
                href={ev.href}
                className="group flex flex-col overflow-hidden rounded-[1.5rem] bg-white shadow-[0_16px_40px_-28px_rgba(0,0,0,0.28)] transition hover:-translate-y-0.5 sm:rounded-[1.65rem]"
              >
                <div
                  className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${ev.tint}`}
                >
                  {ev.featured ? (
                    <span className="absolute left-3 top-3 z-[2] rounded-full bg-white/90 px-2.5 py-1 font-display text-[10px] font-medium uppercase tracking-[0.12em] text-ink">
                      Featured
                    </span>
                  ) : null}
                  <Image
                    src={ev.art}
                    alt=""
                    fill
                    unoptimized
                    className="object-cover object-center transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  <h3 className="font-display text-[clamp(1.05rem,2.5vw,1.2rem)] font-medium tracking-[-0.03em] text-ink">
                    {ev.title}
                  </h3>
                  <p
                    className="mt-2 flex-1 text-[13px] leading-relaxed sm:text-[14px]"
                    style={{ color: TXT }}
                  >
                    {ev.blurb}
                  </p>
                  <div className="mt-4 flex items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] sm:text-[13px]">
                      <span className="inline-flex items-center gap-1.5 text-ember">
                        <CalendarDays size={13} />
                        <span style={{ color: MUTE }}>{ev.date}</span>
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-ember">
                        <Users size={13} />
                        <span style={{ color: MUTE }}>{ev.ages}</span>
                      </span>
                    </div>
                    <CircleArrow />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Highlight */}
      <section className="relative overflow-x-clip pb-8 sm:pb-10 lg:pb-12">
        <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-6 overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-[#4C1D95] via-[#6D28D9] to-[#9B4DCA] p-5 text-white shadow-[0_22px_48px_-24px_rgba(76,29,149,0.5)] sm:rounded-[1.85rem] sm:p-7 lg:grid-cols-[0.7fr_1.1fr_0.95fr] lg:gap-8">
            <div className="relative mx-auto h-[160px] w-[140px] sm:h-[190px] sm:w-[165px] lg:mx-0">
              <Image
                src={highlightEvent.art}
                alt=""
                fill
                unoptimized
                className="object-contain"
              />
            </div>

            <div>
              <p className="font-display text-[10px] font-medium uppercase tracking-[0.16em] text-white/70">
                {highlightEvent.eyebrow}
              </p>
              <h3 className="mt-2 font-display text-[clamp(1.4rem,3.5vw,2rem)] font-medium leading-[1.15] tracking-[-0.035em]">
                {highlightEvent.title}
              </h3>
              <p className="mt-2.5 max-w-md text-[14px] leading-relaxed text-white/80 sm:text-[15px]">
                {highlightEvent.blurb}
              </p>
            </div>

            <div className="flex flex-col gap-4 lg:items-end">
              <ul className="w-full space-y-2.5">
                {highlightEvent.points.map((p) => (
                  <li key={p} className="flex items-center gap-2.5 text-[14px]">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/20">
                      <Check size={13} strokeWidth={2.5} />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              <a
                href={highlightEvent.href}
                className="inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-medium text-ink transition hover:bg-[#F5F2EB] sm:w-auto"
              >
                View Details
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Past */}
      <section
        id="past"
        className="relative scroll-mt-28 overflow-x-clip pb-8 sm:pb-10 lg:pb-12"
      >
        <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-8 lg:px-12">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <h2 className="font-display text-[clamp(1.55rem,4vw,2.35rem)] font-medium leading-[1.15] tracking-[-0.03em] text-ink">
              Past <Em>Events</Em>
            </h2>
            <a
              href="/hackathon"
              className="inline-flex min-h-[40px] items-center gap-1.5 rounded-full border bg-white px-4 text-sm font-medium text-ink transition hover:text-ember"
              style={{ borderColor: LINE }}
            >
              View All Events
              <ArrowUpRight size={15} />
            </a>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
            {pastEvents.map((ev) => (
              <a
                key={ev.id}
                href={ev.href}
                className="group flex flex-col overflow-hidden rounded-[1.35rem] bg-white shadow-[0_14px_32px_-24px_rgba(0,0,0,0.28)] transition hover:-translate-y-0.5 sm:rounded-[1.5rem]"
              >
                <div className="relative aspect-[16/11] overflow-hidden bg-[#EDE8DC]">
                  <Image
                    src={ev.image}
                    alt=""
                    fill
                    unoptimized
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 items-start justify-between gap-2 p-3.5 sm:p-4">
                  <div className="min-w-0">
                    <h3 className="font-display text-[14px] font-medium tracking-[-0.02em] text-ink sm:text-[15px]">
                      {ev.title}
                    </h3>
                    <p
                      className="mt-1 text-[12px] leading-snug sm:text-[13px]"
                      style={{ color: MUTE }}
                    >
                      {ev.blurb}
                    </p>
                  </div>
                  <CircleArrow className="mt-0.5 h-8 w-8" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-x-clip pb-12 sm:pb-14 lg:pb-16">
        <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-8 lg:px-12">
          <div className="flex flex-col items-center gap-5 overflow-hidden rounded-[1.6rem] bg-gradient-to-r from-[#F3E8FF] via-[#F9D3CF] to-[#F3E8FF] px-5 py-6 sm:flex-row sm:rounded-[1.85rem] sm:px-7 sm:py-7">
            <div className="relative h-16 w-20 shrink-0 sm:h-20 sm:w-24">
              <Image
                src={eventsCta.art}
                alt=""
                fill
                unoptimized
                className="object-contain"
              />
            </div>
            <div className="min-w-0 flex-1 text-center sm:text-left">
              <h3 className="font-display text-[clamp(1.25rem,3vw,1.7rem)] font-medium tracking-[-0.03em] text-ink">
                {eventsCta.title}
              </h3>
              <p
                className="mt-1.5 text-[13px] leading-relaxed sm:text-[14px]"
                style={{ color: TXT }}
              >
                {eventsCta.blurb}
              </p>
            </div>
            <a
              href={eventsCta.href}
              className="inline-flex min-h-[48px] w-full shrink-0 items-center justify-center gap-2 rounded-full bg-ink px-6 text-sm font-medium text-white transition hover:bg-[#222] sm:w-auto"
            >
              {eventsCta.cta}
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

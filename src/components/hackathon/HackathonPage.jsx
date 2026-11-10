"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Code2,
  Crown,
  Layers,
  Lightbulb,
  Lock,
  Medal,
  Minus,
  Monitor,
  Play,
  Plus,
  ScrollText,
  Sparkles,
  Trophy,
} from "lucide-react";
import Em from "@/components/ui/Em";
import {
  calendarArt,
  codeBadge,
  criteria,
  entries,
  faqs,
  faqArt,
  hackathon,
  heroImage,
  laptopArt,
  participate,
  prizes,
  stacks,
  timeline,
  winners,
} from "@/data/hackathon";
import { CREAM, INK, LINE, MUTE, RED, TXT } from "@/lib/tokens";

const criterionIcons = {
  originality: Lightbulb,
  cleanliness: Code2,
  ui: Monitor,
  uniqueness: Sparkles,
  quality: Layers,
};

const prizeIcons = {
  trophy: Trophy,
  medal: Medal,
  cert: ScrollText,
};

function StackGlyph({ id, ink }) {
  if (id === "scratch") {
    return (
      <span className="font-display text-2xl font-semibold" style={{ color: ink }}>
        🐱
      </span>
    );
  }
  if (id === "web") {
    return (
      <span className="font-mono text-xl font-semibold" style={{ color: ink }}>
        {"</>"}
      </span>
    );
  }
  if (id === "javascript") {
    return (
      <span className="font-display text-lg font-semibold" style={{ color: ink }}>
        JS
      </span>
    );
  }
  if (id === "python") {
    return (
      <span className="font-display text-lg font-semibold" style={{ color: ink }}>
        Py
      </span>
    );
  }
  return (
    <span className="font-display text-lg font-semibold" style={{ color: ink }}>
      U
    </span>
  );
}

export default function HackathonPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [entryIndex, setEntryIndex] = useState(0);

  const visibleEntries = [
    entries[entryIndex % entries.length],
    entries[(entryIndex + 1) % entries.length],
    entries[(entryIndex + 2) % entries.length],
  ];

  return (
    <div style={{ backgroundColor: CREAM }}>
      {/* Hero */}
      <section className="relative overflow-x-clip pt-24 pb-8 sm:pt-28 sm:pb-10 lg:pt-32 lg:pb-12">
        <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 items-center gap-8 px-4 sm:gap-10 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-xl"
          >
            <span className="inline-flex rounded-full bg-[#F9D3CF] px-3.5 py-1.5 font-display text-[10px] font-medium uppercase tracking-[0.14em] text-[#C0392B]">
              {hackathon.eyebrow}
            </span>
            <h1 className="mt-4 font-display text-[clamp(2.1rem,6vw,3.55rem)] font-medium leading-[1.08] tracking-[-0.04em] text-ink">
              {hackathon.title}{" "}
              <span className="text-ember">{hackathon.year}</span>
            </h1>
            <p
              className="mt-4 max-w-md text-[clamp(1.05rem,2.4vw,1.35rem)] font-medium leading-snug tracking-[-0.02em]"
              style={{ color: TXT }}
            >
              {hackathon.taglineBefore} <Em>{hackathon.taglineAccent}</Em>
            </p>
            <p
              className="mt-3 max-w-md text-[14px] leading-relaxed sm:text-[15px]"
              style={{ color: MUTE }}
            >
              {hackathon.blurb}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="relative mx-auto w-full max-w-[520px] lg:max-w-none"
          >
            <div className="relative aspect-[4/3.4] overflow-hidden rounded-[1.75rem] bg-[#EDE8DC] shadow-[0_24px_50px_-28px_rgba(0,0,0,0.35)] sm:rounded-[2rem]">
              <Image
                src={heroImage}
                alt="CodingZen hackathon students"
                fill
                unoptimized
                priority
                className="object-cover object-center"
              />
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-2 top-8 z-[2] hidden h-14 w-14 items-center justify-center rounded-2xl bg-[#7C3AED] shadow-lg sm:flex sm:-left-4"
            >
              <Image
                src={codeBadge}
                alt=""
                width={56}
                height={56}
                unoptimized
                className="h-full w-full rounded-2xl object-cover"
              />
            </motion.div>

            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{
                duration: 3.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.4,
              }}
              className="absolute -right-1 top-4 z-[2] hidden h-14 w-14 items-center justify-center rounded-full bg-[#FBBF24] text-2xl shadow-lg sm:flex sm:-right-3 sm:h-16 sm:w-16"
              aria-hidden
            >
              🏆
            </motion.div>

            {/* Winners strip */}
            <div className="relative z-[3] -mt-10 flex items-end justify-center gap-4 px-2 sm:-mt-12 sm:gap-6">
              {winners.map((w, i) => (
                <div
                  key={w.id}
                  className={`flex flex-col items-center ${i === 0 ? "-translate-y-2 sm:-translate-y-3" : ""}`}
                >
                  <div className="relative">
                    {w.crown ? (
                      <Crown
                        size={18}
                        className="absolute -top-4 left-1/2 z-[2] -translate-x-1/2 text-[#E8A317]"
                        fill="currentColor"
                      />
                    ) : null}
                    <div
                      className={`relative overflow-hidden rounded-full border-[3px] border-white bg-[#EDE8DC] shadow-[0_10px_24px_-12px_rgba(0,0,0,0.35)] ${
                        i === 0
                          ? "h-[72px] w-[72px] sm:h-[84px] sm:w-[84px]"
                          : "h-[60px] w-[60px] sm:h-[70px] sm:w-[70px]"
                      }`}
                    >
                      <Image
                        src={w.image}
                        alt={w.name}
                        fill
                        unoptimized
                        className="object-cover"
                      />
                    </div>
                    {w.crown ? (
                      <span
                        aria-hidden
                        className="pointer-events-none absolute inset-[-6px] rounded-full border-2 border-[#E8A317]/50"
                      />
                    ) : null}
                  </div>
                  <p className="mt-2 font-display text-[12px] font-medium tracking-[-0.02em] text-ink sm:text-[13px]">
                    {w.name}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stacks */}
      <section className="relative overflow-x-clip pb-8 sm:pb-10 lg:pb-12">
        <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 items-center gap-6 px-4 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 lg:px-12">
          <div>
            <h2 className="font-display text-[clamp(1.55rem,4vw,2.35rem)] font-medium leading-[1.15] tracking-[-0.03em] text-ink">
              We&apos;ve got <Em>you covered</Em>
            </h2>
            <p
              className="mt-3 max-w-md text-[14px] leading-relaxed sm:text-[15px]"
              style={{ color: TXT }}
            >
              Participants build projects around themes — pick the stack you
              already love, or try something new with mentor support.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-5 sm:gap-3">
            {stacks.map((s) => (
              <div
                key={s.id}
                className="flex flex-col items-center gap-2 rounded-[1.25rem] bg-white px-2 py-4 shadow-[0_12px_28px_-20px_rgba(0,0,0,0.28)] sm:rounded-[1.4rem] sm:py-5"
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl sm:h-14 sm:w-14"
                  style={{ backgroundColor: s.tint }}
                >
                  <StackGlyph id={s.id} ink={s.ink} />
                </div>
                <span className="font-display text-[12px] font-medium tracking-[-0.02em] text-ink sm:text-[13px]">
                  {s.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prizes + quote */}
      <section className="relative overflow-x-clip pb-8 sm:pb-10 lg:pb-12">
        <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 gap-4 px-4 sm:gap-5 sm:px-8 lg:grid-cols-[1.35fr_0.65fr] lg:px-12">
          <div className="grid grid-cols-1 overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-[#7C3AED] via-[#9B4DCA] to-[#e84438] text-white shadow-[0_22px_48px_-24px_rgba(124,58,237,0.45)] sm:rounded-[1.85rem] md:grid-cols-[0.85fr_1.15fr]">
            <div className="relative flex flex-col justify-between gap-4 p-5 sm:p-7">
              <div className="relative mx-auto h-[140px] w-[120px] sm:mx-0 sm:h-[170px] sm:w-[145px]">
                <Image
                  src={prizes.trophy}
                  alt=""
                  fill
                  unoptimized
                  className="object-contain"
                />
              </div>
              <div>
                <p className="font-display text-[clamp(1.8rem,4vw,2.4rem)] font-medium leading-none tracking-[-0.04em]">
                  {prizes.headline}
                </p>
                <p className="mt-2 text-[14px] text-white/85 sm:text-[15px]">
                  {prizes.sub}
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-3 bg-white/10 p-5 backdrop-blur-[2px] sm:gap-4 sm:p-7">
              {prizes.tiers.map((t) => {
                const Icon = prizeIcons[t.icon] ?? Award;
                return (
                  <div
                    key={t.amount}
                    className="flex items-center gap-3 rounded-2xl bg-white/15 px-3.5 py-3"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/20">
                      <Icon size={18} />
                    </span>
                    <div>
                      <p className="font-display text-[15px] font-medium tracking-[-0.02em]">
                        {t.amount}
                      </p>
                      <p className="text-[13px] text-white/75">{t.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-[1.6rem] bg-white p-6 shadow-[0_16px_40px_-28px_rgba(0,0,0,0.3)] sm:rounded-[1.85rem] sm:p-8">
            <span
              aria-hidden
              className="font-serif text-[4.5rem] leading-none text-[#F7D4D0]"
            >
              “
            </span>
            <p className="-mt-4 font-display text-[clamp(1.2rem,3vw,1.55rem)] font-medium leading-snug tracking-[-0.03em] text-ink">
              Hackathons are where your <Em>crazy ideas</Em> become a reality!
            </p>
          </div>
        </div>
      </section>

      {/* Notable entries */}
      <section className="relative overflow-x-clip pb-8 sm:pb-10 lg:pb-12">
        <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-8 lg:px-12">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <h2 className="font-display text-[clamp(1.55rem,4vw,2.35rem)] font-medium leading-[1.15] tracking-[-0.03em] text-ink">
              Previous <Em>Notable Entries</Em>
            </h2>
            <a
              href="#entries"
              className="inline-flex min-h-[40px] items-center gap-1.5 rounded-full border bg-white px-4 text-sm font-medium text-ink transition hover:text-ember"
              style={{ borderColor: LINE }}
            >
              View All
              <ArrowUpRight size={15} />
            </a>
          </div>

          <div id="entries" className="relative">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
              {visibleEntries.map((e) => (
                <button
                  key={e.id}
                  type="button"
                  className="group relative aspect-[16/10] overflow-hidden rounded-[1.35rem] bg-[#EDE8DC] text-left shadow-[0_14px_32px_-22px_rgba(0,0,0,0.3)] sm:rounded-[1.5rem]"
                >
                  <Image
                    src={e.image}
                    alt={e.title}
                    fill
                    unoptimized
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
                  <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg">
                    <Play size={18} className="translate-x-0.5 text-ink" fill="currentColor" />
                  </span>
                  <span className="absolute bottom-3 left-3 font-display text-[13px] font-medium text-white">
                    {e.title}
                  </span>
                </button>
              ))}
            </div>

            <button
              type="button"
              aria-label="Next entries"
              onClick={() => setEntryIndex((i) => i + 1)}
              className="absolute -right-1 top-1/2 z-[2] hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border bg-white text-ink shadow-md transition hover:text-ember sm:flex lg:-right-3"
              style={{ borderColor: LINE }}
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Dates + judging */}
      <section className="relative overflow-x-clip pb-8 sm:pb-10 lg:pb-12">
        <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 gap-4 px-4 sm:gap-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-12">
          <div className="rounded-[1.6rem] bg-white p-5 shadow-[0_16px_40px_-28px_rgba(0,0,0,0.28)] sm:rounded-[1.85rem] sm:p-7">
            <div className="mb-5 flex items-center gap-3">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl">
                <Image
                  src={calendarArt}
                  alt=""
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
              <h3 className="font-display text-[clamp(1.25rem,3vw,1.55rem)] font-medium tracking-[-0.03em] text-ink">
                Key Event Dates
              </h3>
            </div>

            <ol className="relative space-y-0 pl-1">
              {timeline.map((t, i) => (
                <li key={`${t.date}-${t.label}`} className="relative flex gap-4 pb-5 last:pb-0">
                  {i < timeline.length - 1 ? (
                    <span
                      aria-hidden
                      className="absolute left-[7px] top-3 bottom-0 w-px bg-[#E8DFD4]"
                    />
                  ) : null}
                  <span
                    aria-hidden
                    className="relative z-[1] mt-1.5 h-3.5 w-3.5 shrink-0 rounded-full border-[3px] border-ember bg-white"
                  />
                  <div className="min-w-0">
                    <p className="font-display text-[14px] font-medium tracking-[-0.02em] text-ink">
                      {t.date}
                    </p>
                    <p className="text-[13px]" style={{ color: MUTE }}>
                      {t.label}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-[1.6rem] bg-white p-5 shadow-[0_16px_40px_-28px_rgba(0,0,0,0.28)] sm:rounded-[1.85rem] sm:p-7">
            <h3 className="mb-5 font-display text-[clamp(1.25rem,3vw,1.55rem)] font-medium tracking-[-0.03em] text-ink">
              Judging Criteria
            </h3>
            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3">
              {criteria.map((c) => {
                const Icon = criterionIcons[c.id] ?? Sparkles;
                return (
                  <div
                    key={c.id}
                    className={`flex flex-col items-start gap-2.5 rounded-[1.2rem] px-3.5 py-4 ${
                      c.id === "quality" ? "col-span-2 sm:col-span-1" : ""
                    }`}
                    style={{ backgroundColor: c.tint }}
                  >
                    <span
                      className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/80"
                      style={{ color: c.ink }}
                    >
                      <Icon size={18} />
                    </span>
                    <span className="font-display text-[13px] font-medium leading-snug tracking-[-0.02em] text-ink sm:text-[14px]">
                      {c.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative overflow-x-clip pb-8 sm:pb-10 lg:pb-12">
        <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 gap-6 px-4 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start lg:gap-10 lg:px-12">
          <div className="relative">
            <h2 className="font-display text-[clamp(1.55rem,4vw,2.35rem)] font-medium leading-[1.15] tracking-[-0.03em] text-ink">
              You Ask, <Em>We Answer</Em>
            </h2>
            <div className="relative mt-5 hidden h-[180px] w-[180px] lg:block">
              <Image
                src={faqArt}
                alt=""
                fill
                unoptimized
                className="object-contain"
              />
            </div>
          </div>

          <div className="space-y-2.5">
            {faqs.map((f) => {
              const open = openFaq === f.id;
              return (
                <div
                  key={f.id}
                  className="overflow-hidden rounded-[1.25rem] border bg-white shadow-[0_10px_28px_-22px_rgba(0,0,0,0.25)]"
                  style={{ borderColor: LINE }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : f.id)}
                    className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left sm:px-5"
                  >
                    <span className="font-display text-[14px] font-medium tracking-[-0.02em] text-ink sm:text-[15px]">
                      {f.q}
                    </span>
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                      style={{ backgroundColor: open ? RED : "#F5F2EB", color: open ? "#fff" : INK }}
                    >
                      {open ? <Minus size={14} /> : <Plus size={14} />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28 }}
                      >
                        <p
                          className="px-4 pb-4 text-[14px] leading-relaxed sm:px-5"
                          style={{ color: TXT }}
                        >
                          {f.a}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Participate CTA */}
      <section className="relative overflow-x-clip pb-12 sm:pb-14 lg:pb-16">
        <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-8 lg:px-12">
          <div className="flex flex-col items-center gap-5 overflow-hidden rounded-[1.6rem] bg-gradient-to-r from-[#F9D3CF] via-[#F3E8FF] to-[#F9D3CF] px-5 py-6 sm:flex-row sm:rounded-[1.85rem] sm:px-7 sm:py-7">
            <div className="relative h-16 w-20 shrink-0 sm:h-20 sm:w-24">
              <Image
                src={laptopArt}
                alt=""
                fill
                unoptimized
                className="object-contain"
              />
            </div>
            <div className="min-w-0 flex-1 text-center sm:text-left">
              <h3 className="font-display text-[clamp(1.25rem,3vw,1.7rem)] font-medium tracking-[-0.03em] text-ink">
                {participate.titleBefore} <Em>{participate.titleAccent}</Em>
              </h3>
              <p className="mt-1.5 text-[13px] leading-relaxed sm:text-[14px]" style={{ color: TXT }}>
                {participate.body}
              </p>
            </div>
            <button
              type="button"
              disabled={participate.closed}
              className="inline-flex min-h-[48px] w-full shrink-0 items-center justify-center gap-2 rounded-2xl bg-ember px-6 text-sm font-medium text-white shadow-[0_14px_28px_-14px_rgba(232,68,56,0.55)] disabled:cursor-not-allowed sm:w-auto"
            >
              <Lock size={15} />
              {participate.cta}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

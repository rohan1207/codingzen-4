"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  Code2,
  Laptop,
  Layers,
  Monitor,
  Play,
  Rocket,
  Star,
  TrendingUp,
  User,
  Users,
  X,
} from "lucide-react";
import Em from "@/components/ui/Em";
import {
  familyCta,
  parentStats,
  parentTestimonialsHero,
  textTestimonials,
  trustFeatures,
  videoTestimonials,
} from "@/data/parentTestimonials";
import { CREAM, INK, LINE, RED, TXT } from "@/lib/tokens";

const float = (delay = 0) => ({
  y: [0, -7, 0],
  transition: { duration: 3.8, repeat: Infinity, ease: "easeInOut", delay },
});

const statIcons = {
  users: Users,
  trend: TrendingUp,
  laptop: Laptop,
  star: Star,
};

const featureIcons = {
  code: Code2,
  layers: Layers,
  award: Award,
  rocket: Rocket,
  monitor: Monitor,
};

function QuoteCard({ quote, name, role, accent, media, onPlay }) {
  return (
    <article
      className="flex h-full flex-col overflow-hidden rounded-[1.35rem] border bg-white shadow-[0_18px_40px_-28px_rgba(0,0,0,0.22)] sm:rounded-[1.5rem]"
      style={{ borderColor: LINE }}
    >
      {media ? (
        <button
          type="button"
          onClick={onPlay}
          className="group relative aspect-[16/10] w-full overflow-hidden bg-black text-left"
          aria-label={`Play testimonial from ${name}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://i.ytimg.com/vi/${media}/hqdefault.jpg`}
            alt=""
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
          <span className="absolute inset-0 grid place-items-center">
            <span
              className="grid h-12 w-12 place-items-center rounded-full text-white shadow-lg transition group-hover:scale-105"
              style={{ backgroundColor: RED }}
            >
              <Play size={16} fill="currentColor" className="ml-0.5" />
            </span>
          </span>
          <span className="absolute right-3 top-3 rounded-md bg-black/55 px-2 py-1 font-display text-[10px] font-medium tracking-[-0.02em] text-white backdrop-blur-sm">
            CodingZen
          </span>
        </button>
      ) : null}

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <span
          aria-hidden
          className="font-serif text-[2.75rem] leading-none text-[#F2B5AF]"
        >
          “
        </span>
        <p
          className="-mt-2 text-[14px] leading-relaxed sm:text-[15px]"
          style={{ color: TXT }}
        >
          {quote}
        </p>
        <div className="mt-auto flex items-center gap-3 pt-5">
          <span
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-white"
            style={{ backgroundColor: accent }}
          >
            <User size={16} strokeWidth={2.2} />
          </span>
          <div className="min-w-0">
            <p className="truncate font-display text-[14px] font-medium tracking-[-0.02em] text-ink">
              {name}
            </p>
            <p className="truncate text-[12px] text-mute">{role}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function AboutTestimonials() {
  const [activeVideo, setActiveVideo] = useState(null);

  useEffect(() => {
    if (!activeVideo) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setActiveVideo(null);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [activeVideo]);

  return (
    <section
      id="parent-testimonials"
      className="relative scroll-mt-28 overflow-x-clip py-8 sm:py-10 lg:py-12"
      style={{ backgroundColor: CREAM }}
    >
      <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-8 lg:px-12">
        {/* Hero */}
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5 }}
            className="max-w-xl"
          >
            <span
              className="inline-flex rounded-full px-3 py-1 font-display text-[10px] font-medium uppercase tracking-[0.14em] text-white"
              style={{ backgroundColor: RED }}
            >
              {parentTestimonialsHero.eyebrow}
            </span>
            <h2 className="mt-4 font-display text-[clamp(2rem,5.5vw,3.4rem)] font-medium leading-[1.08] tracking-[-0.04em] text-ink">
              <span className="block">{parentTestimonialsHero.title}</span>
              <span className="mt-1 block">
                Loved by <Em>{parentTestimonialsHero.accent}</Em>
              </span>
            </h2>
            <p
              className="mt-4 max-w-md text-[14px] leading-relaxed sm:text-[15px]"
              style={{ color: TXT }}
            >
              {parentTestimonialsHero.lead}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
            className="relative mx-auto aspect-[5/4] w-full max-w-[460px] lg:max-w-none"
          >
            <div
              aria-hidden
              className="absolute left-[6%] top-[4%] h-[90%] w-[88%] rounded-[48%_52%_45%_55%/52%_42%_58%_48%] bg-[#E6D4F2]"
            />
            <div className="absolute inset-x-[8%] bottom-0 top-[6%] overflow-hidden">
              <Image
                src="/images/testimonials/mom-son.jpg"
                alt="Parent and child learning together at CodingZen"
                fill
                unoptimized
                className="object-contain object-bottom"
                sizes="(max-width: 1024px) 90vw, 480px"
              />
            </div>

            <span
              aria-hidden
              className="absolute left-[12%] top-[8%] z-[2] flex gap-1"
            >
              <span className="h-4 w-[2px] rotate-[-16deg] rounded-full bg-ember" />
              <span className="h-3 w-[2px] rotate-[4deg] rounded-full bg-ember" />
              <span className="h-5 w-[2px] rotate-[16deg] rounded-full bg-ember" />
            </span>

            <motion.div
              animate={float(0.2)}
              className="absolute -right-1 top-[36%] z-[3] inline-flex items-center gap-2 rounded-full border border-white/80 bg-white px-3 py-2 shadow-[0_12px_28px_-14px_rgba(0,0,0,0.35)] sm:right-0"
            >
              <span className="grid h-7 w-7 place-items-center rounded-full bg-[#EDE4FB] text-[#7C5CBF]">
                <Users size={13} strokeWidth={2.4} />
              </span>
              <span className="font-display text-[12px] font-medium tracking-[-0.02em] text-ink">
                10,000+ Happy Families
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Video testimonials */}
        <ul className="mt-9 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {videoTestimonials.map((item, i) => (
            <motion.li
              key={item.youtubeId}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
            >
              <QuoteCard
                quote={item.quote}
                name={item.name}
                role={item.role}
                accent={item.accent}
                media={item.youtubeId}
                onPlay={() => setActiveVideo(item)}
              />
            </motion.li>
          ))}
        </ul>

        {/* Text testimonials */}
        <ul className="mt-4 grid grid-cols-1 gap-4 sm:mt-5 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {textTestimonials.map((item, i) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
            >
              <QuoteCard
                quote={item.quote}
                name={item.name}
                role={item.role}
                accent={item.accent}
              />
            </motion.li>
          ))}
        </ul>

        {/* Stats */}
        <ul className="mt-8 grid grid-cols-1 gap-3 sm:mt-9 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {parentStats.map((stat, i) => {
            const Icon = statIcons[stat.icon] ?? Users;
            return (
              <motion.li
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-center gap-3 rounded-[1.15rem] px-4 py-3.5 sm:rounded-[1.25rem] sm:px-5 sm:py-4"
                style={{ backgroundColor: stat.tint }}
              >
                <span
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-white"
                  style={{ backgroundColor: stat.iconBg }}
                >
                  <Icon size={17} strokeWidth={2.1} />
                </span>
                <p className="font-display text-[14px] font-medium tracking-[-0.02em] text-ink sm:text-[15px]">
                  {stat.label}
                </p>
              </motion.li>
            );
          })}
        </ul>

        {/* Family CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="relative mt-9 overflow-hidden rounded-[1.5rem] sm:mt-10 sm:rounded-[1.85rem]"
          style={{
            background:
              "linear-gradient(135deg, #E9DFF8 0%, #D9ECF8 48%, #E6D9F7 100%)",
          }}
        >
          <div className="relative grid grid-cols-1 items-center gap-6 px-5 py-7 sm:gap-8 sm:px-8 sm:py-9 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
            <div className="relative mx-auto aspect-square w-full max-w-[280px] sm:max-w-[320px]">
              <div
                aria-hidden
                className="absolute inset-[4%] rounded-[46%_54%_50%_50%/52%_44%_56%_48%] bg-[#C9B6F0]/55"
              />
              <Image
                src="/images/testimonials/girl-headphones.jpg"
                alt="Student coding with headphones"
                fill
                unoptimized
                className="object-contain object-bottom drop-shadow-[0_18px_30px_rgba(0,0,0,0.18)]"
                sizes="320px"
              />
            </div>

            <div className="relative z-[1] max-w-xl">
              <span className="inline-flex rounded-full bg-[#F9D3CF] px-3 py-1 font-display text-[10px] font-medium uppercase tracking-[0.14em] text-[#C0392B]">
                {familyCta.eyebrow}
              </span>
              <h3 className="mt-3 font-display text-[clamp(1.55rem,4vw,2.45rem)] font-medium leading-[1.12] tracking-[-0.03em] text-ink">
                {familyCta.titleBefore} <Em>{familyCta.accent}</Em>{" "}
                {familyCta.titleAfter}
              </h3>
              <p
                className="mt-3 max-w-md text-[14px] leading-relaxed sm:text-[15px]"
                style={{ color: TXT }}
              >
                {familyCta.body}
              </p>
              <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3">
                <a
                  href="/#trial"
                  className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full px-5 py-3 font-display text-[14px] font-medium text-white transition hover:brightness-110"
                  style={{ backgroundColor: INK }}
                >
                  Schedule a consultation
                  <ArrowUpRight size={15} strokeWidth={2.5} />
                </a>
                <a
                  href="/#programs"
                  className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full border bg-white px-5 py-3 font-display text-[14px] font-medium text-ink transition hover:border-black/20"
                  style={{ borderColor: LINE }}
                >
                  Browse courses
                  <ArrowUpRight size={15} strokeWidth={2.5} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust features */}
        <ul
          className="mt-6 grid grid-cols-1 gap-3 rounded-[1.25rem] border bg-[#F3EEE6]/70 px-4 py-4 sm:mt-7 sm:grid-cols-2 sm:gap-2 sm:rounded-[1.4rem] sm:px-3 sm:py-3 lg:grid-cols-5"
          style={{ borderColor: LINE }}
        >
          {trustFeatures.map((item) => {
            const Icon = featureIcons[item.icon] ?? Code2;
            return (
              <li
                key={item.label}
                className="flex items-center gap-2.5 rounded-xl px-2 py-2 sm:justify-center sm:px-1"
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-ink shadow-sm">
                  <Icon size={14} strokeWidth={2.2} />
                </span>
                <span className="font-display text-[12px] font-medium tracking-[-0.02em] text-ink sm:text-[13px]">
                  {item.label}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      <AnimatePresence>
        {activeVideo && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-end justify-center p-4 sm:items-center sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={activeVideo.name}
          >
            <button
              type="button"
              aria-label="Close"
              className="absolute inset-0 bg-black/75"
              onClick={() => setActiveVideo(null)}
            />
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.22 }}
              className="relative z-[1] w-full max-w-4xl overflow-hidden rounded-[1.5rem] bg-black"
            >
              <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3 sm:px-5">
                <div className="min-w-0">
                  <p className="truncate font-display text-sm font-medium text-white sm:text-base">
                    {activeVideo.name}
                  </p>
                  <p className="truncate text-[12px] text-white/45">
                    {activeVideo.role}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveVideo(null)}
                  aria-label="Close popup"
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition hover:bg-ember"
                >
                  <X size={18} strokeWidth={2.25} />
                </button>
              </div>
              <div className="relative aspect-video w-full bg-black">
                <iframe
                  title={activeVideo.name}
                  src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0`}
                  className="absolute inset-0 h-full w-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

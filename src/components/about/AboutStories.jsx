"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Bus,
  Code2,
  MessageCircle,
  Newspaper,
  Play,
  Rocket,
  Trophy,
  X,
} from "lucide-react";
import Em from "@/components/ui/Em";
import {
  featuredStory,
  portfoliosPageUrl,
  storiesHero,
  storyCards,
  storyProjects,
} from "@/data/stories";
import { CREAM, INK, LINE, RED, TXT } from "@/lib/tokens";

const float = (delay = 0) => ({
  y: [0, -7, 0],
  transition: { duration: 3.8, repeat: Infinity, ease: "easeInOut", delay },
});

function FloatPill({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      animate={float(delay)}
      className={`pointer-events-none absolute z-[3] inline-flex items-center gap-1.5 rounded-full border border-white/80 bg-white px-3 py-1.5 shadow-[0_12px_28px_-14px_rgba(0,0,0,0.35)] ${className}`}
    >
      {children}
    </motion.div>
  );
}

const badgeIcons = {
  trophy: Trophy,
  rocket: Rocket,
  code: Code2,
};

const tagIcons = {
  message: MessageCircle,
  bus: Bus,
  media: Newspaper,
};

export default function AboutStories() {
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    if (!videoOpen) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setVideoOpen(false);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [videoOpen]);

  return (
    <section
      id="student-stories"
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
            <span className="inline-flex rounded-full bg-[#F9D3CF] px-3 py-1 font-display text-[10px] font-medium uppercase tracking-[0.14em] text-[#C0392B]">
              {storiesHero.eyebrow}
            </span>
            <h2 className="mt-4 font-display text-[clamp(2.1rem,6vw,3.75rem)] font-medium leading-[1.05] tracking-[-0.04em] text-ink">
              <span className="block">{storiesHero.title}</span>
              <span className="mt-1 block">
                <Em>Real impact.</Em>
              </span>
            </h2>
            <p
              className="mt-4 max-w-md text-[14px] leading-relaxed sm:text-[15px]"
              style={{ color: TXT }}
            >
              {storiesHero.lead}
            </p>
            <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3">
              <a
                href="#featured-story"
                className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full px-5 py-3 font-display text-[14px] font-medium text-white transition hover:brightness-110"
                style={{ backgroundColor: INK }}
              >
                Explore all stories
                <ArrowUpRight size={15} strokeWidth={2.5} />
              </a>
              <a
                href="#student-projects"
                className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full border bg-white px-5 py-3 font-display text-[14px] font-medium text-ink transition hover:border-black/20"
                style={{ borderColor: LINE }}
              >
                View student projects
                <ArrowRight size={15} strokeWidth={2.5} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
            className="relative mx-auto aspect-square w-full max-w-[420px] lg:max-w-[460px]"
          >
            <div
              aria-hidden
              className="absolute left-[8%] top-[6%] h-[86%] w-[86%] rounded-[46%_54%_48%_52%/52%_44%_56%_48%] bg-[#D9C8F0]"
            />
            <div className="absolute inset-[10%] overflow-hidden rounded-full bg-[#EFE6FA]">
              <Image
                src="/images/stories/hero-boy.jpg"
                alt="CodingZen student success story"
                fill
                unoptimized
                className="object-cover object-top"
                sizes="420px"
              />
            </div>

            <span
              aria-hidden
              className="absolute right-[18%] top-[4%] z-[2] flex gap-1"
            >
              <span className="h-4 w-[2px] rotate-[-16deg] rounded-full bg-ember" />
              <span className="h-3 w-[2px] rotate-[6deg] rounded-full bg-ember" />
              <span className="h-5 w-[2px] rotate-[18deg] rounded-full bg-ember" />
            </span>

            <FloatPill delay={0} className="left-0 top-[38%] sm:-left-2">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-[#EDE4FB] text-[#7C5CBF]">
                <Code2 size={12} strokeWidth={2.4} />
              </span>
              <span className="font-display text-[12px] font-medium tracking-[-0.02em] text-ink">
                App Builders
              </span>
            </FloatPill>

            <FloatPill delay={0.4} className="right-0 top-[14%] sm:-right-1">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-[#FFE8D6] text-[#EA580C]">
                <Trophy size={12} strokeWidth={2.4} />
              </span>
              <span className="font-display text-[12px] font-medium tracking-[-0.02em] text-ink">
                Award Winners
              </span>
            </FloatPill>

            <FloatPill delay={0.85} className="bottom-[8%] right-0 sm:-right-2">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-[#FCE4EC] text-[#E84438]">
                <Rocket size={12} strokeWidth={2.4} />
              </span>
              <span className="font-display text-[12px] font-medium tracking-[-0.02em] text-ink">
                Young Entrepreneurs
              </span>
            </FloatPill>
          </motion.div>
        </div>

        {/* Featured story */}
        <motion.article
          id="featured-story"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="relative mt-10 scroll-mt-28 overflow-hidden rounded-[1.5rem] border bg-white sm:mt-12 sm:rounded-[1.85rem]"
          style={{ borderColor: LINE }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[320px]">
              <Image
                src={featuredStory.image}
                alt={featuredStory.name}
                fill
                unoptimized
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 520px"
              />
              <button
                type="button"
                onClick={() => setVideoOpen(true)}
                aria-label="Play featured story"
                className="absolute bottom-4 right-4 grid h-12 w-12 place-items-center rounded-full text-white shadow-lg transition hover:scale-105 sm:bottom-5 sm:right-5 sm:h-14 sm:w-14"
                style={{ backgroundColor: RED }}
              >
                <Play size={18} fill="currentColor" className="ml-0.5" />
              </button>
            </div>

            <div className="relative flex flex-col justify-center p-5 sm:p-8 lg:p-10">
              <span
                aria-hidden
                className="pointer-events-none absolute right-5 top-3 font-serif text-[5.5rem] leading-none text-[#F7D4D0] sm:right-8 sm:top-4 sm:text-[7rem]"
              >
                “
              </span>
              <span className="relative z-[1] inline-flex w-fit rounded-full bg-[#F9D3CF] px-3 py-1 font-display text-[10px] font-medium uppercase tracking-[0.14em] text-[#C0392B]">
                Featured story
              </span>
              <h3 className="relative z-[1] mt-3 font-display text-[clamp(1.45rem,3.5vw,2rem)] font-medium tracking-[-0.03em] text-ink">
                {featuredStory.name}
              </h3>
              <p className="relative z-[1] mt-1 text-[13px] font-medium text-mute sm:text-[14px]">
                {featuredStory.role}
              </p>
              <p
                className="relative z-[1] mt-3 max-w-lg text-[14px] leading-relaxed sm:text-[15px]"
                style={{ color: TXT }}
              >
                {featuredStory.body}
              </p>

              <ul className="relative z-[1] mt-5 flex flex-col gap-2 sm:mt-6 sm:flex-row sm:flex-wrap sm:gap-2.5">
                {featuredStory.tags.map((tag) => {
                  const Icon = tagIcons[tag.icon] ?? MessageCircle;
                  return (
                    <li
                      key={tag.label}
                      className="inline-flex items-center gap-2 rounded-xl bg-[#FAF6F1] px-3 py-2"
                    >
                      <Icon size={14} className="shrink-0 text-ember" strokeWidth={2.2} />
                      <span className="font-display text-[12px] font-medium tracking-[-0.02em] text-ink">
                        {tag.label}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </motion.article>

        {/* Story cards */}
        <ul className="mt-6 grid grid-cols-1 gap-4 sm:mt-7 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {storyCards.map((card, i) => {
            const BadgeIcon = badgeIcons[card.badge] ?? Trophy;
            return (
              <motion.li
                key={card.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="flex flex-col overflow-hidden rounded-[1.35rem] border bg-white shadow-[0_18px_40px_-28px_rgba(0,0,0,0.25)] sm:rounded-[1.5rem]"
                style={{ borderColor: LINE }}
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.name}
                    fill
                    unoptimized
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 360px"
                  />
                  <motion.span
                    animate={float(i * 0.3)}
                    className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-white text-ink shadow-md"
                  >
                    <BadgeIcon size={16} strokeWidth={2.2} />
                  </motion.span>
                </div>
                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  <h3 className="font-display text-[1.1rem] font-medium tracking-[-0.03em] text-ink">
                    {card.name}
                  </h3>
                  <p className="mt-0.5 text-[13px] text-mute">{card.role}</p>
                  <p
                    className="mt-2.5 flex-1 text-[13px] leading-relaxed sm:text-[14px]"
                    style={{ color: TXT }}
                  >
                    {card.body}
                  </p>
                  <div className="mt-4 flex justify-end">
                    <a
                      href={card.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Read more about ${card.name}`}
                      className="grid h-10 w-10 place-items-center rounded-full border bg-white text-ink transition hover:bg-ink hover:text-white"
                      style={{ borderColor: LINE }}
                    >
                      <ArrowRight size={16} strokeWidth={2.4} />
                    </a>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ul>

        {/* Projects */}
        <div
          id="student-projects"
          className="mt-10 scroll-mt-28 grid grid-cols-1 items-start gap-6 sm:mt-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="max-w-md lg:pt-2"
          >
            <p className="font-display text-[11px] font-medium uppercase tracking-[0.18em] text-mute">
              Student projects
            </p>
            <h3 className="mt-3 font-display text-[clamp(1.55rem,4vw,2.35rem)] font-medium leading-[1.12] tracking-[-0.03em] text-ink">
              What our students build at <Em>CodingZen.</Em>
            </h3>
            <p
              className="mt-3 text-[14px] leading-relaxed sm:text-[15px]"
              style={{ color: TXT }}
            >
              Games, apps, sites, and tools — portfolio pieces kids can demo
              with pride.
            </p>
            <a
              href={portfoliosPageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex min-h-[44px] items-center gap-2 rounded-full px-5 py-2.5 font-display text-[13px] font-medium text-white transition hover:brightness-110"
              style={{ backgroundColor: INK }}
            >
              View all portfolios
              <ArrowUpRight size={15} strokeWidth={2.5} />
            </a>
          </motion.div>

          <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {storyProjects.map((project, i) => (
              <motion.li
                key={project.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <a
                  href={portfoliosPageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="relative aspect-square overflow-hidden rounded-[1.15rem] bg-white sm:rounded-[1.35rem]">
                    <Image
                      src={project.thumb}
                      alt=""
                      fill
                      unoptimized
                      className="object-cover transition duration-500 group-hover:scale-[1.04]"
                      sizes="180px"
                    />
                  </div>
                  <p className="mt-2.5 font-display text-[13px] font-medium tracking-[-0.02em] text-ink sm:text-[14px]">
                    {project.title}
                  </p>
                  <p className="mt-0.5 text-[12px] text-mute">
                    {project.student} · Age {project.age}
                  </p>
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="relative mt-10 overflow-hidden rounded-[1.5rem] bg-[#E6D9F7] px-5 py-6 sm:mt-12 sm:rounded-[1.75rem] sm:px-8 sm:py-7 lg:px-10"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(circle at 12% 40%, rgba(255,255,255,0.55), transparent 40%), radial-gradient(circle at 88% 60%, rgba(255,255,255,0.35), transparent 35%)",
            }}
          />
          <div className="relative z-[1] flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            <div className="flex items-start gap-4 sm:items-center">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white/80 text-[#7C5CBF] shadow-sm">
                <Award size={26} strokeWidth={1.8} />
              </span>
              <p className="max-w-xl font-display text-[1.05rem] font-medium leading-snug tracking-[-0.02em] text-ink sm:text-[1.2rem]">
                Be our next success story. Join CodingZen and turn your ideas
                into real projects, apps and achievements.
              </p>
            </div>
            <a
              href="/#trial"
              className="relative inline-flex min-h-[46px] shrink-0 items-center gap-2 rounded-full px-5 py-3 font-display text-[14px] font-medium text-white transition hover:brightness-110"
              style={{ backgroundColor: INK }}
            >
              Book a free trial
              <ArrowUpRight size={15} strokeWidth={2.5} />
              <span
                aria-hidden
                className="absolute -right-2 -top-3 font-serif text-ember"
              >
                ✦
              </span>
            </a>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {videoOpen && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-end justify-center p-4 sm:items-center sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={featuredStory.name}
          >
            <button
              type="button"
              aria-label="Close"
              className="absolute inset-0 bg-black/75"
              onClick={() => setVideoOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.22 }}
              className="relative z-[1] w-full max-w-4xl overflow-hidden rounded-[1.5rem] bg-black"
            >
              <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3 sm:px-5">
                <p className="truncate font-display text-sm font-medium text-white sm:text-base">
                  {featuredStory.name}
                </p>
                <button
                  type="button"
                  onClick={() => setVideoOpen(false)}
                  aria-label="Close popup"
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition hover:bg-ember"
                >
                  <X size={18} strokeWidth={2.25} />
                </button>
              </div>
              <div className="relative aspect-video w-full bg-black">
                <iframe
                  title={featuredStory.name}
                  src={featuredStory.videoUrl}
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

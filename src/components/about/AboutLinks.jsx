"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import Em from "@/components/ui/Em";
import { portfolio, parentVideos } from "@/data/site";
import { CREAM, INK, RED, TXT } from "@/lib/tokens";

const quotes = [
  {
    text: "We don’t teach kids to memorise syntax. We teach them to think, create, and apply.",
    cue: "Since 2016",
  },
  {
    text: "Mentors who code beside students — foundations first, real projects always.",
    cue: "Live classrooms",
  },
  {
    text: "From Scratch sprites to AI models — a ladder that grows with every child.",
    cue: "Ages 6–16",
  },
];

export default function AboutExplore() {
  const [quoteI, setQuoteI] = useState(0);
  const [hoverPort, setHoverPort] = useState(0);
  const ports = portfolio.slice(0, 4);
  const stories = parentVideos.slice(0, 3);

  return (
    <section
      className="relative overflow-hidden border-t border-black/5 py-12 sm:py-20 lg:py-24"
      style={{ backgroundColor: CREAM }}
    >
      <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-12 px-4 sm:gap-20 sm:px-10 lg:gap-24 lg:px-12">
        {/* 1 — Story: interactive quote rail */}
        <div className="grid grid-cols-1 items-center gap-6 sm:gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="lab">Our story</p>
            <h2 className="mt-3 font-display text-[clamp(1.6rem,4.5vw,2.75rem)] font-medium leading-[1.1] tracking-[-0.03em] text-ink">
              Why we started <Em>CodingZen</Em>
            </h2>
            <p
              className="mt-4 max-w-md text-[14px] leading-relaxed sm:text-[15px]"
              style={{ color: TXT }}
            >
              A decade of classrooms in Delhi NCR and online — built so kids
              ship work they&apos;re proud to show.
            </p>
            <a
              href="/#our-story"
              className="mt-6 inline-flex items-center gap-2 rounded-full px-5 py-3 font-display text-[13px] font-medium text-white transition hover:brightness-110 sm:mt-7"
              style={{ backgroundColor: INK }}
            >
              Read the story
              <ArrowUpRight size={15} strokeWidth={2.5} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[1.35rem] p-5 text-white sm:rounded-[1.75rem] sm:p-9"
            style={{ backgroundColor: INK }}
          >
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={quoteI}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
              >
                <p className="font-serif text-[clamp(1.2rem,3.2vw,1.85rem)] italic leading-[1.3] tracking-[-0.02em]">
                  &ldquo;{quotes[quoteI].text}&rdquo;
                </p>
                <p className="mt-5 lab !text-ember">{quotes[quoteI].cue}</p>
              </motion.blockquote>
            </AnimatePresence>
            <div className="mt-8 flex gap-2">
              {quotes.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Show quote ${i + 1}`}
                  onClick={() => setQuoteI(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    quoteI === i ? "w-8 bg-ember" : "w-1.5 bg-white/25 hover:bg-white/45"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* 2 — Portfolios: hoverable strip (not cards) */}
        <div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between sm:gap-4">
            <div className="max-w-lg">
              <p className="lab">Student work</p>
              <h2 className="mt-3 font-display text-[clamp(1.6rem,4.5vw,2.75rem)] font-medium leading-[1.1] tracking-[-0.03em] text-ink">
                Projects with <Em>real users</Em>
              </h2>
            </div>
            <a
              href="/#portfolio"
              className="inline-flex items-center gap-1.5 font-display text-[14px] font-medium text-ember transition hover:opacity-80"
            >
              Browse the gallery
              <ArrowUpRight size={15} />
            </a>
          </div>

          <div
            className="mt-6 flex gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:mt-8 sm:gap-4 [&::-webkit-scrollbar]:hidden"
            onMouseLeave={() => setHoverPort(0)}
          >
            {ports.map((item, i) => {
              const wide = hoverPort === i;
              return (
                <a
                  key={item.title}
                  href="/#portfolio"
                  onMouseEnter={() => setHoverPort(i)}
                  className={`relative h-[200px] shrink-0 overflow-hidden rounded-[1.25rem] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:h-[260px] sm:rounded-[1.35rem] ${
                    wide ? "w-[min(70vw,320px)]" : "w-[min(48vw,160px)] sm:w-[140px]"
                  }`}
                >
                  <Image
                    src={item.thumb}
                    alt=""
                    fill
                    unoptimized
                    className="object-cover transition duration-500"
                    sizes="320px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />
                  <span className="absolute left-3 top-3 rounded-md bg-white px-2 py-1 font-display text-[10px] font-medium uppercase tracking-[0.1em] text-ink">
                    {item.tag}
                  </span>
                  <div
                    className={`absolute inset-x-0 bottom-0 p-3.5 transition sm:p-4 ${
                      wide ? "opacity-100" : "opacity-0 sm:opacity-100"
                    }`}
                  >
                    <p className="font-display text-[14px] font-medium tracking-[-0.02em] text-white sm:text-[15px]">
                      {item.title}
                    </p>
                    <p className="mt-0.5 text-[12px] text-white/65">
                      {item.student}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* 3 — Testimonials: playable parent strip */}
        <div
          className="overflow-hidden rounded-[1.35rem] px-4 py-7 text-white sm:rounded-[1.75rem] sm:px-8 sm:py-10 lg:px-10"
          style={{ backgroundColor: INK }}
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between sm:gap-4">
            <div className="max-w-lg">
              <p className="lab !text-white/40">Families</p>
              <h2 className="mt-3 font-display text-[clamp(1.5rem,4vw,2.5rem)] font-medium leading-[1.1] tracking-[-0.03em]">
                Parents who <Em>stayed</Em>
              </h2>
            </div>
            <a
              href="/#stories"
              className="inline-flex items-center gap-1.5 font-display text-[14px] font-medium text-ember transition hover:opacity-90"
            >
              Watch more stories
              <ArrowUpRight size={15} />
            </a>
          </div>

          <ul className="mt-7 grid grid-cols-1 gap-3 sm:mt-8 sm:grid-cols-3 sm:gap-4">
            {stories.map((item, i) => (
              <motion.li
                key={item.youtubeId}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <a
                  href="/#stories"
                  className="group relative block overflow-hidden rounded-[1.25rem] bg-white/[0.06]"
                >
                  <div className="relative aspect-[16/10]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://i.ytimg.com/vi/${item.youtubeId}/hqdefault.jpg`}
                      alt=""
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                    <span className="absolute inset-0 grid place-items-center">
                      <span
                        className="grid h-11 w-11 place-items-center rounded-full text-white shadow-lg transition group-hover:scale-105"
                        style={{ backgroundColor: RED }}
                      >
                        <Play size={15} fill="currentColor" className="ml-0.5" />
                      </span>
                    </span>
                  </div>
                  <div className="p-3.5 sm:p-4">
                    <p className="font-display text-[14px] font-medium tracking-[-0.02em]">
                      {item.name}
                    </p>
                    <p className="mt-0.5 text-[12px] text-white/45">{item.role}</p>
                  </div>
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

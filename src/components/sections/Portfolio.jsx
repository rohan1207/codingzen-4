"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, X } from "lucide-react";
import { portfolio, portfoliosPageUrl } from "@/data/site";
import Em from "@/components/ui/Em";
import { CREAM, INK, MUTE, TXT } from "@/lib/tokens";

const HOME_COUNT = 6;
/** Match section header inset; scroll-pl keeps snap from flushing the first card */
const RAIL_PAD =
  "pl-5 pr-5 scroll-pl-5 sm:pl-8 sm:pr-8 sm:scroll-pl-8 lg:pl-12 lg:pr-12 lg:scroll-pl-12";

export default function Portfolio() {
  const items = portfolio.slice(0, HOME_COUNT);
  const [active, setActive] = useState(null);
  const scrollerRef = useRef(null);

  useEffect(() => {
    if (!active) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setActive(null);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <section
      id="portfolio"
      className="relative scroll-mt-28 overflow-hidden py-10 sm:py-14 lg:py-20"
      style={{ backgroundColor: CREAM }}
    >
      <div className={`relative mx-auto w-full ${RAIL_PAD}`}>
        <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between">
          <h2
            className="max-w-2xl font-display text-[clamp(1.65rem,4.5vw,3.1rem)] font-medium leading-[1.1] tracking-[-0.03em]"
            style={{ color: INK }}
          >
            Real projects. <Em>Real users.</Em>
          </h2>

          <a
            href={portfoliosPageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2.5 rounded-full border bg-transparent px-4 py-2.5 font-display text-[13px] font-medium tracking-[-0.02em] transition hover:bg-black hover:text-white sm:w-auto"
            style={{ color: INK, borderColor: "rgba(0,0,0,0.9)" }}
          >
            All student portfolios
            <span className="grid h-7 w-7 place-items-center rounded-full bg-ember text-white">
              <ArrowUpRight size={14} strokeWidth={2.5} />
            </span>
          </a>
        </div>
      </div>

      {/* Swipe rail — spacers beat scroll-snap eating padding */}
      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-5 lg:gap-6 [&::-webkit-scrollbar]:hidden"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <div
          aria-hidden
          className="w-5 shrink-0 sm:w-8 lg:w-12"
        />
        {items.map((item, index) => (
          <motion.button
            key={`${item.title}-${item.student}`}
            type="button"
            onClick={() => setActive(item)}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="group flex w-[min(72vw,260px)] shrink-0 snap-start flex-col text-left outline-none transition focus-visible:ring-2 focus-visible:ring-ember/40 sm:w-[min(46vw,280px)] lg:w-[min(26vw,300px)]"
            aria-label={`${item.title} by ${item.student}`}
          >
            {/* Colored media panel */}
            <div
              className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] p-4 sm:rounded-[1.85rem] sm:p-[1.125rem]"
              style={{ backgroundColor: item.tint || "#DBC4A5" }}
            >
              <span className="relative z-[2] inline-flex rounded-full bg-white px-3 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-ink shadow-sm">
                {item.tag}
              </span>
              <div className="absolute inset-3 top-12 overflow-hidden rounded-[1.25rem] sm:inset-4 sm:top-14 sm:rounded-[1.35rem]">
                <Image
                  src={item.thumb}
                  alt=""
                  fill
                  unoptimized
                  sizes="300px"
                  className="object-cover transition duration-500 group-hover:scale-[1.04]"
                />
              </div>
            </div>

            {/* Caption — part of the same clickable card */}
            <div className="mt-3.5 px-0.5 sm:mt-4">
              <h3 className="font-display text-[1.05rem] font-medium tracking-[-0.02em] text-ink sm:text-[1.15rem]">
                {item.title}
              </h3>
              <p
                className="mt-1 text-[12px] font-medium uppercase tracking-[0.06em]"
                style={{ color: MUTE }}
              >
                {item.student} · Age {item.age}
              </p>
              <p
                className="mt-2 text-[13px] leading-relaxed sm:text-[14px]"
                style={{ color: TXT }}
              >
                {item.blurb}
              </p>
            </div>
          </motion.button>
        ))}

        <a
          href={portfoliosPageUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-[min(56vw,220px)] shrink-0 snap-start flex-col sm:w-[200px]"
        >
          <div className="flex aspect-[4/5] flex-col items-start justify-between rounded-[1.75rem] border border-dashed border-black/20 bg-white/60 p-5 transition hover:border-ember/40 hover:bg-white sm:rounded-[1.85rem]">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-ember text-white">
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </span>
            <div>
              <p className="font-display text-[15px] font-medium tracking-[-0.02em] text-ink">
                View more
              </p>
              <p className="mt-1 text-[12px] leading-relaxed" style={{ color: TXT }}>
                Full student portfolios and stories
              </p>
            </div>
          </div>
        </a>
        <div
          aria-hidden
          className="w-5 shrink-0 sm:w-8 lg:w-12"
        />
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
          >
            <button
              type="button"
              aria-label="Close"
              className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"
              onClick={() => setActive(null)}
            />

            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="relative z-[1] w-full max-w-4xl overflow-hidden rounded-[1.5rem] bg-black shadow-[0_40px_100px_-30px_rgba(0,0,0,0.7)]"
            >
              <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3 sm:px-5">
                <div className="min-w-0">
                  <p className="truncate font-display text-sm font-medium text-white sm:text-base">
                    {active.title}
                  </p>
                  <p className="truncate text-[12px] text-white/45">
                    {active.student} · {active.tag}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  {active.mediaType === "site" && (
                    <a
                      href={active.mediaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-[11px] font-medium text-white transition hover:bg-white/15"
                    >
                      Open site
                      <ExternalLink size={12} />
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => setActive(null)}
                    aria-label="Close popup"
                    className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white transition hover:bg-ember"
                  >
                    <X size={18} strokeWidth={2.25} />
                  </button>
                </div>
              </div>

              <div
                className={`relative w-full bg-black ${
                  active.mediaType === "site"
                    ? "h-[min(72vh,640px)]"
                    : "aspect-video"
                }`}
              >
                <iframe
                  key={active.mediaUrl}
                  title={active.title}
                  src={active.mediaUrl}
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

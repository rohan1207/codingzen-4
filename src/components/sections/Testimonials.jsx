"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Play, Star, X } from "lucide-react";
import { parentVideos } from "@/data/site";
import Em from "@/components/ui/Em";
import { CREAM } from "@/lib/tokens";

function VideoCard({ item, onOpen }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(item)}
      className="group w-full shrink-0 cursor-pointer rounded-[1.25rem] bg-black p-3 text-left transition hover:bg-[#222] sm:p-3.5"
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-[#0c0c0c]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://i.ytimg.com/vi/${item.youtubeId}/hqdefault.jpg`}
          alt=""
          className="h-full w-full object-cover"
          loading="lazy"
          draggable={false}
        />
        <span className="absolute inset-0 grid place-items-center">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-ember text-white shadow-[0_12px_28px_-10px_rgba(232,68,56,0.75)] transition group-hover:scale-105 sm:h-12 sm:w-12">
            <Play size={16} fill="currentColor" className="ml-0.5" />
          </span>
        </span>
      </div>
      <p className="mt-3 font-display text-[15px] font-medium tracking-[-0.03em] text-white">
        {item.name}
      </p>
      <p className="mt-0.5 text-[12px] leading-snug text-white/45">{item.role}</p>
    </button>
  );
}

function MarqueeColumn({ items, direction = "up", onOpen }) {
  const loop = [...items, ...items];

  return (
    <div className="relative h-[min(78vh,620px)] overflow-hidden">
      <div
        className={`flex w-full flex-col gap-3 ${
          direction === "down" ? "cz-marquee-down" : "cz-marquee-up"
        }`}
      >
        {loop.map((item, i) => (
          <VideoCard key={`${item.youtubeId}-${i}`} item={item} onOpen={onOpen} />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(null);

  const mid = Math.ceil(parentVideos.length / 2);
  const leftCol = parentVideos.slice(0, mid);
  const rightCol = parentVideos.slice(mid);

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
      id="stories"
      className="relative scroll-mt-28 overflow-hidden py-14 text-ink sm:py-16 lg:py-20"
      style={{ backgroundColor: CREAM }}
    >
      <div className="relative mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-12">
        <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.15fr] lg:gap-12 xl:gap-16">
          {/* Static copy */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="font-display text-[clamp(1.65rem,4.5vw,3.1rem)] font-medium leading-[1.1] tracking-[-0.03em] text-ink">
              Notes we never asked anyone to <Em>write</Em>
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-txt sm:text-base">
              We take pride in the trust parents and students place in CodingZen.
              These stories arrived from families who stayed — not just signed
              up.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              <div className="flex gap-0.5 text-ember">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="text-sm text-mute">
                Loved by families across Delhi NCR & online
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="/about"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-medium text-ink transition hover:border-ember hover:text-ember sm:w-auto"
              >
                About CodingZen
                <ArrowRight size={15} strokeWidth={2.25} />
              </a>
              <a
                href="https://codingzen.in/parents-and-kids-trust-us-too/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-ink sm:w-auto"
              >
                Read every review
                <ArrowRight size={15} strokeWidth={2.25} />
              </a>
            </div>
          </div>

          {/* Dual marquee strips — no overlays */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
            <MarqueeColumn items={leftCol} direction="down" onOpen={setActive} />
            <MarqueeColumn items={rightCol} direction="up" onOpen={setActive} />
          </div>
        </div>
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
            aria-label={active.name}
          >
            <button
              type="button"
              aria-label="Close"
              className="absolute inset-0 bg-black/75"
              onClick={() => setActive(null)}
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
                    {active.name}
                  </p>
                  <p className="truncate text-[12px] text-white/45">{active.role}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setActive(null)}
                  aria-label="Close popup"
                  className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white transition hover:bg-ember"
                >
                  <X size={18} strokeWidth={2.25} />
                </button>
              </div>
              <div className="relative aspect-video w-full bg-black">
                <iframe
                  key={active.youtubeId}
                  title={active.name}
                  src={`https://www.youtube.com/embed/${active.youtubeId}?autoplay=1&rel=0`}
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

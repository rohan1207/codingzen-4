"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Em from "@/components/ui/Em";

const YT_ID = "FhAcYXs6V5E";

export default function ClassroomGlimpse() {
  return (
    <section
      id="classroom"
      className="section-band surface-zen surface-grid scroll-mt-28 overflow-x-clip"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 top-24 hidden h-40 w-40 rotate-12 rounded-3xl bg-ember/10 sm:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-20 right-10 hidden h-24 w-24 -rotate-6 rounded-2xl border border-line sm:block"
      />

      <div className="container-zen section-pad relative grid grid-cols-1 items-center gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8">
        <div className="min-w-0">
          <p className="lab">
            Inside the dojo
          </p>
          <h2 className="mt-2 font-display text-[clamp(1.5rem,7vw,3rem)] font-medium tracking-[-0.03em] text-ink">
            A glimpse of our <Em>classroom</Em>
          </h2>
          <p className="mt-2 font-display text-base font-medium tracking-[-0.03em] text-txt sm:text-lg">
            Through the lens of the team —
          </p>
          <p className="mt-3 max-w-md text-[15px] leading-relaxed text-mute sm:text-base">
            Seeing is believing. Live moments from workshops — the atmosphere where kids learn, ship, and grow at the same time.
          </p>
          <div className="mt-5 inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-line bg-cream px-3 py-1.5 font-display text-[10px] font-medium uppercase tracking-[0.12em] text-mute">
            <Sparkles size={12} className="shrink-0 text-ember" />
            <span className="min-w-0">workshops · live builds · demos</span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative w-full min-w-0"
        >
          <div
            aria-hidden
            className="absolute -right-3 -top-3 hidden h-16 w-10 rotate-12 bg-ember/80 sm:block sm:-right-4 sm:-top-4"
          />
          <div
            aria-hidden
            className="absolute -bottom-3 -left-3 hidden h-12 w-16 -rotate-6 bg-black sm:block sm:-bottom-4 sm:-left-4"
          />

          <div className="relative overflow-hidden rounded-[1.35rem] border border-line bg-cream-2 p-2.5 shadow-[0_32px_80px_-48px_rgba(0,0,0,0.4)] sm:rounded-[1.75rem] sm:p-4">
            <div className="relative aspect-video w-full max-w-full overflow-hidden rounded-xl bg-black sm:rounded-2xl">
              <iframe
                title="CodingZen classroom glimpse"
                src={`https://www.youtube.com/embed/${YT_ID}?rel=0&modestbranding=1`}
                className="absolute inset-0 h-full w-full max-w-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

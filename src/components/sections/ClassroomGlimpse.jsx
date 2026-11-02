"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Em from "@/components/ui/Em";

const YT_ID = "FhAcYXs6V5E";

export default function ClassroomGlimpse() {
  return (
    <section id="classroom" className="section-band surface-zen surface-grid scroll-mt-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 top-24 h-40 w-40 rotate-12 rounded-3xl bg-ember/10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-20 right-10 h-24 w-24 -rotate-6 rounded-2xl border border-line"
      />

      <div className="container-zen section-pad relative grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
        <div>
          <p className="lab">
            Inside the dojo
          </p>
          <h2 className="mt-2 font-display text-[clamp(1.85rem,3.8vw,3rem)] font-medium tracking-[-0.03em] text-ink">
            A glimpse of our <Em>classroom</Em>
          </h2>
          <p className="mt-2 font-display text-lg font-medium tracking-[-0.03em] text-txt">
            Through the lens of the team —
          </p>
          <p className="mt-3 max-w-md text-[15px] leading-relaxed text-mute sm:text-base">
            Seeing is believing. Live moments from workshops — the atmosphere where kids learn, ship, and grow at the same time.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-line bg-cream px-3 py-1.5 font-display text-[10px] font-medium uppercase tracking-[0.12em] text-mute">
            <Sparkles size={12} className="text-ember" />
            workshops · live builds · demos
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div
            aria-hidden
            className="absolute -right-3 -top-3 h-16 w-10 rotate-12 bg-ember/80 sm:-right-4 sm:-top-4"
          />
          <div
            aria-hidden
            className="absolute -bottom-3 -left-3 h-12 w-16 -rotate-6 bg-black sm:-bottom-4 sm:-left-4"
          />

          <div className="relative overflow-hidden rounded-[1.75rem] border border-line bg-cream-2 p-3 shadow-[0_32px_80px_-48px_rgba(0,0,0,0.4)] sm:p-4">
            <div className="relative aspect-video overflow-hidden rounded-2xl bg-black">
              <iframe
                title="CodingZen classroom glimpse"
                src={`https://www.youtube.com/embed/${YT_ID}?rel=0&modestbranding=1`}
                className="absolute inset-0 h-full w-full border-0"
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

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Em from "@/components/ui/Em";

export default function StandOutCTA() {
  return (
    <section className="section-band-tight surface-mist scroll-mt-28">
      <div className="container-zen section-pad relative">
        <div className="relative overflow-hidden rounded-[2rem] bg-black shadow-[0_40px_90px_-48px_rgba(0,0,0,0.55)]">
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-r from-ember via-[#c92f2f] to-black"
          />
          <div
            aria-hidden
            className="absolute -right-10 top-1/2 h-[140%] w-[55%] -translate-y-1/2 rounded-full bg-white/10 blur-0"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-25"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.2), transparent 40%), repeating-linear-gradient(115deg, transparent, transparent 22px, rgba(255,255,255,0.06) 22px, rgba(255,255,255,0.06) 23px)",
            }}
          />

          <div className="relative grid items-center gap-6 px-6 py-10 sm:px-10 sm:py-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:px-14 lg:py-6">
            <div className="max-w-xl text-white">
              <p className="font-display text-[11px] font-medium uppercase tracking-[0.18em] text-white/70">
                Help your child stand out
              </p>
              <h2 className="mt-3 font-display text-3xl font-medium leading-[1.05] tracking-[-0.03em] sm:text-4xl lg:text-5xl">
                The new world demands <Em>new skills</Em>
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/75 sm:text-base">
                Mentors who code beside them. Projects they can show. Confidence that sticks.
              </p>
              <a
                href="#trial"
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3.5 text-sm font-medium text-ember shadow-lg transition hover:brightness-95 sm:w-auto"
              >
                Request a trial class
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="relative mx-auto h-[280px] w-full max-w-[320px] sm:h-[320px] lg:h-[360px]">
              <motion.div
                aria-hidden
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-1/2 top-1/2 h-[85%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/15"
              />
              <div className="absolute inset-0 flex items-end justify-center">
                <Image
                  src="/images/benefit-founder.png"
                  alt="CodingZen student presenting a project"
                  width={420}
                  height={560}
                  unoptimized
                  className="h-[108%] w-auto max-w-[95%] object-contain object-bottom drop-shadow-[0_24px_40px_rgba(0,0,0,0.35)]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Award, Check } from "lucide-react";
import { classPacks, learnWays } from "@/data/site";
import { formatPlanPrice, useGeoPricing } from "@/lib/pricing";
import Em from "@/components/ui/Em";
import { CREAM, INK, TXT } from "@/lib/tokens";


function packMath(way, packSize) {
  const perClass = way.packRates[packSize] ?? way.listPerClass;
  const total = perClass * packSize;
  const listTotal = way.listPerClass * packSize;
  const save = Math.max(0, listTotal - total);
  return { perClass, total, listTotal, save };
}

export default function Pricing() {
  const { isIndia, ready } = useGeoPricing();
  const [region, setRegion] = useState(null);
  const [pack, setPack] = useState(24);
  const showIndia = region === null ? isIndia : region === "in";

  const cards = useMemo(
    () =>
      learnWays.map((way) => ({
        way,
        ...packMath(way, pack),
      })),
    [pack],
  );

  return (
    <section
      id="pricing"
      className="relative scroll-mt-28 overflow-x-clip py-7 sm:py-9 lg:py-12"
      style={{ backgroundColor: CREAM }}
    >
      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <h2
              className="font-display text-[clamp(1.55rem,6.5vw,3.1rem)] font-medium leading-[1.1] tracking-[-0.03em]"
              style={{ color: INK }}
            >
              Two ways <Em>to learn.</Em>
            </h2>
            <p
              className="mt-2.5 max-w-md text-[14px] leading-relaxed sm:text-[15px]"
              style={{ color: TXT }}
            >
              Pick a class pack — prices update live. Every completed track
              includes a CodingZen certificate.
            </p>
          </div>

          <div className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:items-end">
            <div
              className={`inline-flex w-full max-w-full flex-wrap rounded-full border border-black/8 bg-white/70 p-1 transition sm:w-auto ${
                ready ? "opacity-100" : "opacity-70"
              }`}
              role="group"
              aria-label="Pricing region"
            >
              <button
                type="button"
                onClick={() => setRegion("in")}
                className={`min-h-[40px] flex-1 rounded-full px-3.5 py-2 font-display text-[12px] font-medium transition sm:min-h-0 sm:flex-none sm:py-1.5 ${
                  showIndia
                    ? "bg-black text-white"
                    : "text-[#666] hover:text-ink"
                }`}
              >
                India · INR
              </button>
              <button
                type="button"
                onClick={() => setRegion("intl")}
                className={`min-h-[40px] flex-1 rounded-full px-3.5 py-2 font-display text-[12px] font-medium transition sm:min-h-0 sm:flex-none sm:py-1.5 ${
                  !showIndia
                    ? "bg-black text-white"
                    : "text-[#666] hover:text-ink"
                }`}
              >
                Intl · USD
              </button>
            </div>

            <div className="w-full sm:w-auto">
              <p className="mb-2 font-display text-[11px] font-medium uppercase tracking-[0.16em] text-[#999]">
                Choose a class pack
              </p>
              <div
                className="flex w-full flex-wrap gap-1 rounded-2xl border border-black/8 bg-[#efebe3] p-1 sm:inline-flex sm:w-auto sm:flex-nowrap sm:rounded-full"
                role="group"
                aria-label="Class pack size"
              >
                {classPacks.map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setPack(n)}
                    className={`min-h-[44px] flex-1 rounded-xl px-3 py-2.5 font-display text-[13px] font-medium transition sm:min-h-0 sm:flex-none sm:rounded-full sm:px-5 sm:py-2 ${
                      pack === n
                        ? "bg-black text-white shadow-sm"
                        : "text-[#555] hover:text-ink"
                    }`}
                  >
                    {n} classes
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 lg:mt-7 lg:grid-cols-2 lg:gap-5">
          {cards.map(({ way, perClass, total, save }, i) => {
            const per = formatPlanPrice(perClass, showIndia);
            const tot = formatPlanPrice(total, showIndia);
            const sav = formatPlanPrice(save, showIndia);
            const dark = way.highlight;

            return (
              <motion.article
                key={way.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className={`relative flex flex-col overflow-hidden rounded-[1.75rem] p-5 sm:p-7 lg:p-8 ${
                  dark
                    ? "bg-black text-white"
                    : "border border-black/6 bg-white text-ink"
                }`}
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-[1.25rem] font-medium tracking-[-0.03em] sm:text-[1.5rem]">
                      {way.name}
                    </h3>
                    <p
                      className={`mt-1 text-[14px] leading-snug ${
                        dark ? "text-white/50" : "text-[#777]"
                      }`}
                    >
                      {way.blurb}
                    </p>
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-3 py-1.5 font-display text-[10px] font-medium uppercase tracking-[0.12em] ${
                      dark
                        ? "bg-ember text-white"
                        : "bg-[#efebe3] text-[#555]"
                    }`}
                  >
                    {way.badge}
                  </span>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between sm:gap-4">
                  <p className="font-display text-[clamp(2.1rem,9vw,3.25rem)] font-medium leading-none tracking-[-0.045em]">
                    {per.symbol}
                    {per.amount}
                    <span
                      className={`ml-1.5 text-[1rem] font-medium tracking-normal ${
                        dark ? "text-white/45" : "text-[#999]"
                      }`}
                    >
                      / class
                    </span>
                  </p>
                  <div className="sm:text-right">
                    <p
                      className={`font-display text-[15px] font-medium tabular-nums ${
                        dark ? "text-white/85" : "text-ink"
                      }`}
                    >
                      {tot.symbol}
                      {tot.amount} total
                    </p>
                    {save > 0 && (
                      <p className="mt-0.5 font-display text-[13px] font-medium text-ember">
                        You save {sav.symbol}
                        {sav.amount}
                      </p>
                    )}
                  </div>
                </div>

                <ul className="mt-6 grid grid-cols-1 gap-x-4 gap-y-3 sm:mt-7 sm:grid-cols-2">
                  {way.features.map((feature) => {
                    const isCert = /certificate/i.test(feature);
                    return (
                      <li
                        key={feature}
                        className={`flex items-start gap-2.5 text-[13px] leading-snug sm:text-[14px] ${
                          dark ? "text-white/70" : "text-[#444]"
                        } ${isCert ? (dark ? "text-white" : "text-ink") : ""}`}
                      >
                        <span
                          className={`mt-0.5 grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full ${
                            dark
                              ? isCert
                                ? "bg-ember text-white"
                                : "bg-ember/25 text-ember"
                              : isCert
                                ? "bg-ember text-white"
                                : "bg-black text-white"
                          }`}
                        >
                          {isCert ? (
                            <Award size={10} strokeWidth={2.5} />
                          ) : (
                            <Check size={11} strokeWidth={3} />
                          )}
                        </span>
                        <span className="min-w-0">{feature}</span>
                      </li>
                    );
                  })}
                </ul>

                <a
                  href="#trial"
                  className={`mt-7 inline-flex min-h-[48px] w-full items-center justify-center rounded-2xl px-4 py-3.5 font-display text-sm font-medium transition sm:mt-8 ${
                    dark
                      ? "bg-white text-ink hover:bg-[#f3f3f3]"
                      : "bg-black text-white hover:bg-[#2a2a2a]"
                  }`}
                >
                  Start with a free trial
                </a>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45, delay: 0.12 }}
          className="mt-5 flex flex-col items-start gap-3 rounded-[1.25rem] border border-black/6 bg-white/70 px-4 py-4 sm:mt-6 sm:flex-row sm:items-center sm:gap-4 sm:px-6"
        >
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ember/10 text-ember">
            <Award size={18} strokeWidth={2.25} />
          </span>
          <div className="min-w-0">
            <p className="font-display text-[14px] font-medium tracking-[-0.02em] text-ink">
              Certificates on every completed track
            </p>
            <p className="mt-0.5 text-[13px] leading-relaxed text-[#666]">
              Kids finish with a CodingZen certificate they can share with school
              — and a portfolio of real projects to back it up.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

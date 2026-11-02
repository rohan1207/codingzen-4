"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import Em from "@/components/ui/Em";
import { CREAM, INK, LINE, RED } from "@/lib/tokens";


const PERKS = [
  "A 45-minute live class, 1:1 with a mentor",
  "A fitment assessment of logic and level",
  "A personal roadmap for your child",
];

const INTERESTS = [
  "Scratch",
  "Web",
  "Python",
  "AI & ML",
  "Game Dev / Unity",
  "Consultation",
  "Not sure yet but wants to consult",
];

const fieldLabel =
  "font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-mute";
const fieldInput =
  "mt-2 w-full rounded-2xl border border-line bg-white px-4 py-3.5 font-display text-[15px] text-ink outline-none transition placeholder:text-mute focus:border-ember/45 focus:ring-2 focus:ring-ember/15";

export default function TrialCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [interest, setInterest] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="trial"
      className="relative scroll-mt-28 overflow-hidden py-10 sm:py-12 lg:py-14"
      style={{ backgroundColor: CREAM }}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-12">
        <div
          id="contact"
          className="relative overflow-hidden rounded-[1.75rem] border bg-white sm:rounded-[2rem]"
          style={{ borderColor: LINE }}
        >
          <div className="relative grid lg:grid-cols-[0.92fr_1.08fr]">
            {/* Left — value prop */}
            <div className="flex flex-col justify-between gap-10 px-6 py-8 text-ink sm:px-8 sm:py-10 lg:px-10 lg:py-12">
              <div>
                <h2 className="font-display text-[clamp(1.75rem,5vw,3.35rem)] font-medium leading-[1.1] tracking-[-0.03em] text-ink">
                  See it for <Em>yourself.</Em>
                </h2>

                <ul className="mt-8 space-y-3.5 sm:mt-10">
                  {PERKS.map((perk) => (
                    <li
                      key={perk}
                      className="flex items-start gap-3 text-[14px] leading-snug text-txt sm:text-[15px]"
                    >
                      <span
                        className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border"
                        style={{ borderColor: "rgba(232,68,56,0.65)" }}
                      >
                        <Check
                          size={11}
                          strokeWidth={3}
                          style={{ color: RED }}
                        />
                      </span>
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>

              <figure
                className="flex max-w-md items-center gap-3 rounded-2xl border bg-cream p-3.5 sm:p-4"
                style={{ borderColor: LINE }}
              >
                <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-white ring-1 ring-black/10">
                  <Image
                    src="/avatars/p1.jpg"
                    alt=""
                    fill
                    unoptimized
                    className="object-cover"
                    sizes="44px"
                  />
                </div>
                <figcaption className="min-w-0">
                  <p className="font-display text-[13px] font-medium leading-snug tracking-[-0.02em] text-ink sm:text-[14px]">
                    &ldquo;After one trial, my son asked when the next class
                    was.&rdquo;
                  </p>
                  <p className="mt-1 text-[11px] text-mute sm:text-[12px]">
                    Sunita Kapoor — Parent of Arjun, 10
                  </p>
                </figcaption>
              </figure>
            </div>

            {/* Right — form */}
            <div className="p-3 sm:p-4 lg:p-5">
              <div
                className="h-full rounded-[1.35rem] border p-5 sm:rounded-[1.5rem] sm:p-7 lg:p-8"
                style={{ backgroundColor: CREAM, borderColor: LINE }}
              >
                {submitted ? (
                  <div className="flex h-full min-h-[280px] flex-col items-center justify-center py-10 text-center">
                    <p className="font-display text-2xl font-medium tracking-[-0.03em] text-ink">
                      You&apos;re booked in
                    </p>
                    <p className="mt-2 max-w-sm text-[15px] leading-relaxed text-mute">
                      We&apos;ll WhatsApp you within a day to pick a slot that
                      works for your family.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="flex h-full flex-col">
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
                      <div>
                        <label htmlFor="parent-name" className={fieldLabel}>
                          Parent&apos;s name
                        </label>
                        <input
                          id="parent-name"
                          name="name"
                          required
                          autoComplete="name"
                          className={fieldInput}
                          placeholder="Anjali Mehra"
                        />
                      </div>
                      <div>
                        <label htmlFor="whatsapp" className={fieldLabel}>
                          WhatsApp number
                        </label>
                        <input
                          id="whatsapp"
                          name="phone"
                          type="tel"
                          required
                          autoComplete="tel"
                          className={fieldInput}
                          placeholder="+91 98xxx xxxxx"
                        />
                      </div>
                    </div>

                    <div className="mt-4 sm:mt-5">
                      <label htmlFor="child-age" className={fieldLabel}>
                        Child&apos;s age
                      </label>
                      <input
                        id="child-age"
                        name="age"
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]{1,2}"
                        required
                        className={fieldInput}
                        placeholder="e.g. 10"
                      />
                    </div>

                    <div className="mt-4 sm:mt-5">
                      <label htmlFor="interest-area" className={fieldLabel}>
                        Areas interested in
                      </label>
                      <div className="relative mt-2">
                        <select
                          id="interest-area"
                          name="interest"
                          required
                          value={interest}
                          onChange={(e) => setInterest(e.target.value)}
                          className={`${fieldInput} mt-0 appearance-none pr-11 ${
                            interest ? "text-ink" : "text-mute"
                          }`}
                        >
                          <option value="" disabled>
                            Select a course or consult
                          </option>
                          {INTERESTS.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                        <span
                          aria-hidden
                          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-mute"
                        >
                          ▾
                        </span>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="mt-6 inline-flex w-full items-center justify-between gap-3 rounded-full px-5 py-3.5 font-display text-[15px] font-medium text-white transition hover:brightness-110 sm:mt-8 sm:py-4"
                      style={{ backgroundColor: INK }}
                    >
                      Book a free class
                      <span className="grid h-9 w-9 place-items-center rounded-full bg-white/20">
                        <ArrowUpRight size={16} strokeWidth={2.5} />
                      </span>
                    </button>

                    <p className="mt-3 text-center text-[12px] text-mute sm:mt-4">
                      We&apos;ll WhatsApp you within a day to pick a slot.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

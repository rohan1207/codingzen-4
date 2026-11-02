"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, X } from "lucide-react";
import Em from "@/components/ui/Em";
import { CREAM, INK, RED, TXT } from "@/lib/tokens";

const ANSWER = TXT;

const FAQS = [
  {
    q: "What happens in the free trial?",
    a: "A 45-minute live class with a mentor. Your child builds a small project, and you get a short note on their level and the track we recommend. No payment details needed.",
  },
  {
    q: "Does my child need any experience?",
    a: "No. We place every child with a short fitment check — beginners start with Scratch or block logic; kids with some coding jump into the right track without repeating basics.",
  },
  {
    q: "What device do they need?",
    a: "A laptop or desktop with a stable internet connection works best. Webcam and mic help mentors teach live. Tablets work for younger Scratch classes — we'll confirm during the trial.",
  },
  {
    q: "1:1 or group — which is better?",
    a: "1:1 is fully personalised pace and schedule. Group (max 6) adds peer energy at a lower per-class rate. Many families start with a trial, then pick the format that fits their child.",
  },
  {
    q: "How will I know they're progressing?",
    a: "Private students get weekly parent updates; group batches get a monthly report. You'll also see real projects — games, sites, apps — not just completed worksheets.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section
      id="faq"
      className="relative scroll-mt-28 overflow-hidden py-12 sm:py-16 lg:py-24"
      style={{ backgroundColor: CREAM }}
      aria-label="Frequently asked questions"
    >
      <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:gap-24">
          {/* Left — heading */}
          <div className="lg:pt-1">
            <p className="lab mb-5 sm:mb-6">FAQ</p>

            <h2
              className="max-w-[14ch] font-display text-[clamp(1.75rem,5vw,3.35rem)] font-medium leading-[1.1] tracking-[-0.03em]"
              style={{ color: INK }}
            >
              Questions parents <Em>actually</Em> ask.
            </h2>
          </div>

          {/* Right — accordion */}
          <div className="min-w-0">
            <ul>
              {FAQS.map((item, i) => {
                const isOpen = open === i;
                return (
                  <li
                    key={item.q}
                    className="border-b border-[#e5e2da]"
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      className="flex w-full items-start justify-between gap-5 py-5 text-left sm:py-6"
                    >
                      <span
                        className="min-w-0 flex-1 font-display text-[1.05rem] font-medium tracking-[-0.03em] sm:text-[1.2rem]"
                        style={{ color: INK }}
                      >
                        {item.q}
                      </span>
                      <span
                        className={`mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full transition ${
                          isOpen
                            ? "text-white"
                            : "bg-transparent text-[#bbb] ring-1 ring-[#ddd]"
                        }`}
                        style={isOpen ? { backgroundColor: RED } : undefined}
                        aria-hidden
                      >
                        {isOpen ? (
                          <X size={15} strokeWidth={2.75} />
                        ) : (
                          <Plus size={16} strokeWidth={2.25} />
                        )}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="answer"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p
                            className="max-w-[36rem] pb-5 pr-12 text-[15px] leading-[1.65] sm:pb-6 sm:text-[16px]"
                            style={{ color: ANSWER }}
                          >
                            {item.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

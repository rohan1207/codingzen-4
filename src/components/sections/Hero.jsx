"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  CREAM,
  INK,
  META,
  MUTE,
  RED,
  TXT,
  DISPLAY,
  SERIF,
  MONO,
  LINE,
} from "@/lib/tokens";

const TAUPE = MUTE;
const BODY = TXT;

const BUILD_WORDS = [
  "apps",
  "games",
  "websites",
  "robots",
  "AI tools",
  "projects",
];

function RotatingWord() {
  const [index, setIndex] = useState(0);
  const longest = BUILD_WORDS.reduce((a, b) => (a.length >= b.length ? a : b));

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % BUILD_WORDS.length);
    }, 2200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span className="relative inline-block align-baseline whitespace-nowrap">
      <span
        aria-hidden
        className="inline-block select-none"
        style={{
          fontFamily: SERIF,
          fontStyle: "italic",
          fontWeight: 400,
          letterSpacing: "-0.02em",
          opacity: 0,
          pointerEvents: "none",
        }}
      >
        {longest}
      </span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.em
          key={BUILD_WORDS[index]}
          className="absolute left-0 top-0 whitespace-nowrap"
          style={{
            color: RED,
            fontFamily: SERIF,
            fontStyle: "italic",
            fontWeight: 400,
            letterSpacing: "-0.02em",
          }}
          initial={{ y: 14, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -14, opacity: 0 }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        >
          {BUILD_WORDS[index]}
        </motion.em>
      </AnimatePresence>
    </span>
  );
}

function TrialButton({ className = "" }) {
  return (
    <a
      href="#trial"
      className={`inline-flex min-h-12 items-center gap-2.5 rounded-full py-2 pl-5 pr-2 text-[14px] font-medium text-white transition hover:brightness-110 sm:min-h-0 sm:py-[7px] sm:pr-[7px] sm:text-[14px] ${className}`}
      style={{ backgroundColor: "#1c1c1c", fontFamily: DISPLAY }}
    >
      Book a free trial class
      <span
        className="grid h-9 w-9 place-items-center rounded-full text-white"
        style={{ backgroundColor: RED }}
        aria-hidden
      >
        <ArrowUpRight size={15} strokeWidth={2.5} />
      </span>
    </a>
  );
}

function ExploreButton({ className = "" }) {
  return (
    <a
      href="#programs"
      className={`inline-flex min-h-12 items-center justify-center rounded-full border bg-white px-5 py-3 text-[14px] font-medium transition hover:border-[#cfc8bf] sm:min-h-0 sm:py-[13px] ${className}`}
      style={{ color: INK, fontFamily: DISPLAY, borderColor: LINE }}
    >
      Explore programs
    </a>
  );
}

export default function Hero() {
  return (
    <section
      className="relative overflow-x-clip"
      style={{ backgroundColor: CREAM }}
    >
      <div className="relative z-[1] mx-auto flex w-full max-w-[1360px] flex-col px-4 pb-8 pt-[5.25rem] sm:px-8 sm:pb-10 sm:pt-24 lg:px-12 lg:pb-14 lg:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="flex min-h-0 flex-col"
        >
          {/* Badge — wraps cleanly on narrow phones */}
          <div className="inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-[#e4dfd8] bg-white py-[7px] pl-[7px] pr-3 sm:gap-2.5 sm:pr-4">
            <span
              className="inline-flex shrink-0 items-center rounded-full px-2.5 py-[5px] text-[10px] font-medium uppercase leading-none tracking-[0.12em] text-white"
              style={{ backgroundColor: RED, fontFamily: MONO }}
            >
              Live
            </span>
            <span
              className="min-w-0 flex-1 text-[8px] font-medium uppercase leading-snug tracking-[0.1em] xs:text-[9px] sm:text-[10px] sm:tracking-[0.18em] md:text-[11px]"
              style={{ color: META, fontFamily: MONO }}
            >
              <span className="sm:hidden">Online · Ages 6–16 · Delhi</span>
              <span className="hidden sm:inline">
                Online classes · Ages 6–16 · From New Delhi
              </span>
            </span>
          </div>

          <h1
            className="mt-5 font-display text-[clamp(2.15rem,10vw,5.85rem)] leading-[1.08] tracking-[-0.04em] sm:mt-7 sm:text-[clamp(3.15rem,7.4vw,5.85rem)] sm:leading-[1.05]"
            style={{
              fontFamily: DISPLAY,
              fontWeight: 500,
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
            }}
          >
            <span className="block" style={{ color: INK }}>
              Raise a kid who
            </span>
            <span className="block">
              <span style={{ color: INK }}>builds </span>
              <RotatingWord />
            </span>
            <span className="block" style={{ color: TAUPE }}>
              not just uses them.
            </span>
          </h1>

          <div className="mt-6 flex flex-col gap-5 sm:mt-8 sm:gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
            <p
              className="max-w-[34rem] text-[14px] leading-[1.6] sm:text-[14px] md:text-[15px]"
              style={{ color: BODY, fontFamily: DISPLAY, fontWeight: 400 }}
            >
              Live, mentor-led classes in AI, Python, web and Scratch. Small
              screens, big ideas — and a project to show for every month.
            </p>

            <div className="flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
              <TrialButton className="w-full justify-between sm:w-auto sm:justify-start" />
              <ExploreButton className="w-full sm:w-auto" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

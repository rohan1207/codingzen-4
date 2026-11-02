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
      {/* Width reserve — opacity 0 so it never paints as a ghost */}
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
      className={`inline-flex items-center gap-2.5 rounded-full py-[7px] pl-5 pr-[7px] text-[13px] font-medium text-white transition hover:brightness-110 sm:text-[14px] ${className}`}
      style={{ backgroundColor: "#1c1c1c", fontFamily: DISPLAY }}
    >
      Book a free trial class
      <span
        className="grid h-8 w-8 place-items-center rounded-full text-white sm:h-9 sm:w-9"
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
      className={`inline-flex items-center rounded-full border bg-white px-5 py-[13px] text-[13px] font-medium transition hover:border-[#cfc8bf] sm:text-[14px] ${className}`}
      style={{ color: INK, fontFamily: DISPLAY, borderColor: LINE }}
    >
      Explore programs
    </a>
  );
}

export default function Hero() {
  return (
    <section
      className="relative min-h-[100svh] overflow-x-clip"
      style={{ backgroundColor: CREAM }}
    >
      <div className="relative z-[1] mx-auto flex min-h-[100svh] w-full max-w-[1360px] flex-col px-5 pb-8 pt-24 sm:px-8 sm:pb-12 sm:pt-28 lg:px-12 lg:pb-20 lg:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="flex min-h-0 flex-1 flex-col"
        >
          <div className="inline-flex w-fit max-w-full items-center gap-2.5 rounded-full border border-[#e4dfd8] bg-white py-[7px] pl-[7px] pr-3.5 sm:pr-4">
            <span
              className="inline-flex shrink-0 items-center rounded-full px-2.5 py-[5px] text-[10px] font-medium uppercase leading-none tracking-[0.12em] text-white"
              style={{ backgroundColor: RED, fontFamily: MONO }}
            >
              Live
            </span>
            <span
              className="truncate text-[9px] font-medium uppercase tracking-[0.14em] sm:text-[10px] sm:tracking-[0.18em] md:text-[11px]"
              style={{ color: META, fontFamily: MONO }}
            >
              Online classes · Ages 6–16 · From New Delhi
            </span>
          </div>

          <h1
            className="mt-7 max-w-[18ch] text-[clamp(2.35rem,9.2vw,5.85rem)] leading-[1.05] tracking-[-0.04em] sm:mt-10 sm:max-w-none sm:text-[clamp(3.15rem,7.4vw,5.85rem)]"
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
            <span
              className="block sm:whitespace-nowrap"
              style={{ color: TAUPE }}
            >
              not just uses them.
            </span>
          </h1>

          <div className="mt-auto flex flex-col gap-8 pt-10 sm:gap-10 sm:pt-14 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <p
              className="max-w-[34rem] text-[13px] leading-[1.65] sm:text-[14px] md:text-[15px]"
              style={{ color: BODY, fontFamily: DISPLAY, fontWeight: 400 }}
            >
              <span className="block">
                Live, mentor-led classes in AI, Python, web and Scratch.
              </span>
              <span className="block">
                Small screens, big ideas — and a project to show for every
                month.
              </span>
            </p>

            <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center">
              <TrialButton className="w-full justify-between sm:w-auto sm:justify-start" />
              <ExploreButton className="w-full justify-center sm:w-auto" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

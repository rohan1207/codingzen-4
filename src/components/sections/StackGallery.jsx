"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import Em from "@/components/ui/Em";
import { CREAM, CARD as CARD_WHITE, LINE, MUTE, TXT } from "@/lib/tokens";

const BG = CREAM;
const CARD = CARD_WHITE;

const alsoTeaching = [
  "Unity game dev · C#",
  "Java",
  "Android apps",
  "MERN stack",
  "Blockchain · Solidity",
  "Animation & motion",
];

const tracks = [
  {
    id: "scratch",
    num: "01",
    ages: "Ages 8–10",
    title: "Scratch",
    tagline: "Logic through play",
    body: "Drag, drop, debug. Kids build animations and games while learning loops, events and conditions — the grammar behind every language they'll meet next.",
    chips: ["Sprites", "Loops", "Events", "Games"],
    glow: "rgba(245, 158, 11, 0.35)",
    art: "/images/stack-scratch.png",
    artAlt: "Scratch blocks and playful coding art",
  },
  {
    id: "web",
    num: "02",
    ages: "Ages 10–14",
    title: "Web",
    tagline: "HTML, CSS & JavaScript",
    body: "From first pages to interactive sites — layout, style, and real browser logic students can open, share, and show their families.",
    chips: ["HTML", "CSS", "JS", "Deploy"],
    glow: "rgba(59, 130, 246, 0.3)",
    art: "/images/stack-web.png",
    artAlt: "Web development browser mockup",
  },
  {
    id: "python",
    num: "03",
    ages: "Ages 11–14",
    title: "Python",
    tagline: "Think like an engineer",
    body: "The language of science and startups. Kids automate chores, crunch data and build text adventures that actually make sense.",
    chips: ["Functions", "Data", "Automation", "Projects"],
    glow: "rgba(34, 197, 94, 0.3)",
    art: "/images/stack-python.png",
    artAlt: "Python coding illustration",
  },
  {
    id: "ai-ml",
    num: "04",
    ages: "Ages 12–14",
    title: "AI & ML",
    tagline: "Train your own models",
    body: "Teach machines to see, chat, and decide — playful projects that demystify AI while kids train models they can actually run.",
    chips: ["Vision", "Chatbots", "Models", "Prompt"],
    glow: "rgba(239, 68, 68, 0.3)",
    art: "/images/ai-robot.png",
    artAlt: "Friendly robot exploring AI ideas",
  },
];

export default function StackGallery() {
  const [active, setActive] = useState(2);
  const rootRef = useRef(null);
  const panelRefs = useRef([]);
  const detailRefs = useRef([]);
  const tlRef = useRef(null);
  const firstRun = useRef(true);

  const applyLayout = useCallback(
    (animate) => {
      const panels = panelRefs.current;
      if (!panels.length) return;

      const count = tracks.length;
      const expandRatio = 0.42;
      const grow = count > 1 ? (expandRatio * (count - 1)) / (1 - expandRatio) : 1;
      const prefersReduced =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      tlRef.current?.kill();
      const dur = animate && !prefersReduced ? 0.55 : 0;
      const ease = "power3.out";
      const tl = gsap.timeline();

      panels.forEach((panel, i) => {
        if (!panel) return;
        const isActive = i === active;
        const detail = detailRefs.current[i];

        tl.to(
          panel,
          { flexGrow: isActive ? grow : 1, duration: dur, ease },
          0,
        );

        if (detail) {
          if (isActive) {
            tl.fromTo(
              detail,
              { opacity: 0, y: 10, height: 0 },
              {
                opacity: 1,
                y: 0,
                height: "auto",
                duration: dur,
                ease,
                delay: prefersReduced ? 0 : 0.04,
              },
              0,
            );
          } else {
            tl.to(
              detail,
              { opacity: 0, y: 6, height: 0, duration: dur * 0.4, ease },
              0,
            );
          }
        }
      });

      tlRef.current = tl;
    },
    [active],
  );

  useEffect(() => {
    applyLayout(!firstRun.current);
    firstRun.current = false;
  }, [applyLayout]);

  useEffect(
    () => () => {
      tlRef.current?.kill();
    },
    [],
  );

  return (
    <section
      id="stack"
      className="relative scroll-mt-28 overflow-x-clip overflow-y-visible py-7 sm:py-9 lg:py-12"
      style={{ backgroundColor: BG }}
    >
      <div className="relative z-[1] mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-12">
        <div className="mb-5 flex flex-col gap-3 sm:mb-7 sm:gap-4 lg:mb-8 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <h2 className="max-w-[16ch] font-display text-[clamp(1.5rem,7vw,3.6rem)] font-medium leading-[1.12] tracking-[-0.03em] text-ink">
            <span className="block">Four tracks.</span>
            <span className="block">
              <Em>One direction:</Em> <span>forward.</span>
            </span>
          </h2>
          <p
            className="max-w-md font-display text-[15px] leading-relaxed lg:pb-1 lg:text-right"
            style={{ color: MUTE }}
          >
            Every child starts where they are. We move them up the ladder — from
            blocks to real code to training their own models.
          </p>
        </div>

        <div className="flex flex-col gap-4 lg:hidden">
          {tracks.map((track) => (
            <MobileCard key={track.id} track={track} />
          ))}
        </div>

        <div
          ref={rootRef}
          className="hidden h-[480px] gap-3.5 lg:flex"
          onMouseLeave={() => setActive(2)}
        >
          {tracks.map((track, i) => {
            const isActive = i === active;
            return (
              <article
                key={track.id}
                ref={(el) => {
                  panelRefs.current[i] = el;
                }}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                tabIndex={0}
                className="relative flex min-w-0 flex-col overflow-hidden rounded-[1.75rem] border p-5 outline-none sm:p-6"
                style={{
                  backgroundColor: CARD,
                  borderColor: LINE,
                  flex: "1 1 0",
                  boxShadow: isActive
                    ? `0 24px 60px -28px ${track.glow}`
                    : "none",
                }}
              >
                {/* Meta always top */}
                <div className="relative z-[2] flex shrink-0 items-start justify-between gap-3">
                  <span className="font-display text-[12px] font-medium tracking-[0.08em] text-mute">
                    {track.num}
                  </span>
                  <span className="rounded-full border border-line px-2.5 py-1 font-display text-[10px] font-medium uppercase tracking-[0.14em] text-mute">
                    {track.ages}
                  </span>
                </div>

                {/* Art — capped height so bottom copy/chips never crop */}
                <div
                  className={`relative z-[1] mx-auto flex min-h-0 w-full flex-1 items-center justify-center transition-all duration-500 ${
                    isActive ? "max-h-[160px] py-3" : "max-h-[220px] py-4"
                  }`}
                >
                  <div
                    className={`relative flex h-full w-full items-center justify-center transition-all duration-500 ${
                      isActive
                        ? "max-w-[140px] sm:max-w-[155px]"
                        : "max-w-[150px] sm:max-w-[170px]"
                    }`}
                  >
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-[4%] rounded-full blur-2xl transition duration-500"
                      style={{
                        background: `radial-gradient(circle, ${track.glow} 0%, transparent 70%)`,
                        opacity: isActive ? 0.9 : 0.7,
                      }}
                    />
                    <Image
                      src={track.art}
                      alt={track.artAlt}
                      width={200}
                      height={200}
                      unoptimized
                      className="relative z-[1] h-full max-h-full w-full object-contain drop-shadow-[0_16px_36px_rgba(0,0,0,0.2)] transition duration-500"
                    />
                  </div>
                </div>

                {/* Title + details — always pinned to bottom, never clipped */}
                <div className="relative z-[2] mt-auto shrink-0 pb-0.5">
                  <h3
                    className={`font-display font-medium tracking-[-0.035em] text-ink transition-all duration-300 ${
                      isActive
                        ? "text-[clamp(1.55rem,2.1vw,2rem)]"
                        : "text-center text-[clamp(1.35rem,1.9vw,1.7rem)]"
                    }`}
                  >
                    {track.title}
                  </h3>
                  <p
                    className={`mt-1 font-display text-[13px] font-medium text-mute sm:text-[14px] ${
                      isActive ? "" : "text-center"
                    }`}
                  >
                    {track.tagline}
                  </p>

                  <div
                    ref={(el) => {
                      detailRefs.current[i] = el;
                    }}
                    className="overflow-hidden"
                    style={{ opacity: 0, height: 0 }}
                    aria-hidden={!isActive}
                  >
                    <p
                      className="mt-3 max-w-[36ch] text-[13px] leading-relaxed sm:text-[14px]"
                      style={{ color: TXT }}
                    >
                      {track.body}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2 pb-0.5">
                      {track.chips.map((chip) => (
                        <span
                          key={chip}
                          className="rounded-full border border-line bg-cream px-3 py-1.5 font-display text-[11px] font-medium tracking-[-0.01em] text-txt"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Also teaching — outline pills */}
        <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-4 lg:mt-9">
          <p className="shrink-0 font-display text-[13px] font-medium tracking-[-0.01em] text-mute sm:text-[14px]">
            Also teaching
          </p>
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            {alsoTeaching.map((label) => (
              <a
                key={label}
                href="#programs"
                className="inline-flex min-h-[40px] items-center rounded-full border border-line bg-white px-3.5 py-2 font-display text-[12px] font-medium tracking-[-0.01em] text-txt transition hover:border-black/25 hover:text-ink sm:min-h-0 sm:px-4 sm:text-[13px]"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MobileCard({ track }) {
  return (
    <article
      className="flex flex-col rounded-[1.35rem] border bg-white p-4 sm:rounded-[1.5rem] sm:p-5"
      style={{
        borderColor: LINE,
        boxShadow: `0 18px 40px -24px ${track.glow}`,
      }}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="font-display text-[12px] font-medium tracking-[0.08em] text-mute">
          {track.num}
        </span>
        <span className="rounded-full border border-line px-2.5 py-1 font-display text-[10px] font-medium uppercase tracking-[0.14em] text-mute">
          {track.ages}
        </span>
      </div>

      <div className="relative mx-auto mt-5 mb-4 h-[120px] w-full max-w-[160px] sm:mt-6 sm:mb-5 sm:h-[140px] sm:max-w-[180px]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-[6%] rounded-full blur-2xl"
          style={{
            background: `radial-gradient(circle, ${track.glow} 0%, transparent 70%)`,
          }}
        />
        <Image
          src={track.art}
          alt={track.artAlt}
          width={200}
          height={200}
          unoptimized
          className="relative z-[1] h-full w-full max-w-full object-contain"
        />
      </div>

      <h3 className="text-center font-display text-[clamp(1.35rem,6vw,1.65rem)] font-medium tracking-[-0.035em] text-ink">
        {track.title}
      </h3>
      <p className="mt-1.5 text-center font-display text-[13px] font-medium text-mute sm:text-[14px]">
        {track.tagline}
      </p>
      <p className="mt-3 text-[13px] leading-relaxed text-txt sm:mt-4 sm:text-[14px]">
        {track.body}
      </p>
      <div className="mt-3 flex flex-wrap gap-2 sm:mt-4">
        {track.chips.map((chip) => (
          <span
            key={chip}
            className="rounded-full border border-line bg-cream px-3 py-1.5 font-display text-[11px] font-medium text-txt"
          >
            {chip}
          </span>
        ))}
      </div>
    </article>
  );
}

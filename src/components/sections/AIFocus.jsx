"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Brain, MessageSquare, Sparkles } from "lucide-react";
import Em from "@/components/ui/Em";
import { CREAM, LINE } from "@/lib/tokens";

const pillars = [
  { label: "Prompt craft", hint: "Talk to AI clearly" },
  { label: "Generative builds", hint: "Apps, art & agents" },
  { label: "Safe AI habits", hint: "Think before you ship" },
];

const courses = [
  {
    id: "foundations",
    title: "AI Foundations",
    ages: "Ages 10+",
    blurb: "How models think — first projects with real tools.",
    Icon: Brain,
    span: "col-span-2",
    thumb: "/images/ai-courses/foundations.jpg",
  },
  {
    id: "prompt",
    title: "Prompt Lab",
    ages: "Ages 11+",
    blurb: "Clear asks. Better answers.",
    Icon: MessageSquare,
    span: "col-span-1",
    thumb: "/images/ai-courses/prompt.jpg",
  },
  {
    id: "gen",
    title: "GenAI Studio",
    ages: "Ages 12+",
    blurb: "Art, apps & agents kids ship.",
    Icon: Sparkles,
    span: "col-span-1",
    thumb: "/images/ai-courses/genai.jpg",
  },
];

export default function AIFocus() {
  const robotRef = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const springX = useSpring(mx, { stiffness: 90, damping: 18, mass: 0.4 });
  const springY = useSpring(my, { stiffness: 90, damping: 18, mass: 0.4 });

  const rotateY = useTransform(springX, [-1, 1], [-24, 24]);
  const rotateX = useTransform(springY, [-1, 1], [18, -18]);
  const shiftX = useTransform(springX, [-1, 1], [-12, 12]);
  const shiftY = useTransform(springY, [-1, 1], [-8, 8]);

  const onMove = (e) => {
    const el = robotRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const nx = Math.max(-1, Math.min(1, (e.clientX - cx) / (window.innerWidth * 0.45)));
    const ny = Math.max(-1, Math.min(1, (e.clientY - cy) / (window.innerHeight * 0.4)));
    mx.set(nx);
    my.set(ny);
  };

  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section
      id="ai"
      className="relative flex min-h-0 scroll-mt-24 items-center overflow-hidden py-12 text-ink sm:py-16 md:h-[100svh] md:max-h-[100svh] md:py-0"
      style={{ backgroundColor: CREAM }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 42% at 50% 50%, rgba(232,68,56,0.12), transparent 60%), radial-gradient(ellipse 70% 50% at 50% 100%, rgba(0,0,0,0.03), transparent 50%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(ellipse at 50% 50%, black 12%, transparent 68%)",
        }}
      />

      <div className="relative z-[1] mx-auto grid h-full w-full max-w-[1320px] grid-cols-1 items-center gap-6 px-4 py-10 sm:gap-8 sm:px-8 sm:py-14 lg:grid-cols-[1.05fr_minmax(0,0.9fr)_1.05fr] lg:gap-5 lg:px-10 lg:py-24 xl:gap-8">
        {/* Left — copy + pillars */}
        <div className="order-1 flex flex-col justify-center lg:order-none lg:pr-1 xl:pr-3">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-ember">
            CodingZen · AI tracks
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.55rem,4vw,2.85rem)] font-medium leading-[1.1] tracking-[-0.03em] normal-case text-ink">
            <span className="block sm:whitespace-nowrap">
              Learn with <Em>AI</Em>
            </span>
            <span className="block text-mute sm:whitespace-nowrap">
              Build with <Em>AI</Em>
            </span>
          </h2>
          <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-txt sm:text-base">
            AI-first courses for kids & teens — prompting, generative tools, and
            real projects where mentors and models work side by side.
          </p>

          <ul className="mt-6 flex w-full max-w-sm flex-col gap-2">
            {pillars.map((p) => (
              <li
                key={p.label}
                className="rounded-2xl border bg-white px-4 py-2.5 text-left sm:py-3"
                style={{ borderColor: LINE }}
              >
                <span className="block font-display text-sm font-medium tracking-[-0.02em] text-ink sm:text-[15px]">
                  {p.label}
                </span>
                <span className="mt-0.5 block text-[12px] text-mute">
                  {p.hint}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Center — robot */}
        <div className="order-2 flex h-full min-h-[240px] items-center justify-center lg:order-none">
          <div ref={robotRef} className="relative" style={{ perspective: 900 }}>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div
                className="relative flex items-center justify-center"
                style={{
                  rotateX,
                  rotateY,
                  x: shiftX,
                  y: shiftY,
                  transformStyle: "preserve-3d",
                  transformOrigin: "50% 45%",
                }}
              >
                <div
                  aria-hidden
                  className="absolute h-48 w-48 rounded-full bg-ember/25 blur-3xl sm:h-64 sm:w-64"
                />
                <Image
                  src="/images/ai-robot.png"
                  alt="CodingZen AI companion"
                  width={520}
                  height={520}
                  unoptimized
                  priority
                  className="relative z-[1] h-auto w-[min(52vw,280px)] object-contain drop-shadow-[0_28px_55px_rgba(232,68,56,0.35)] sm:w-[min(34vw,340px)] lg:w-[min(26vw,360px)]"
                  draggable={false}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Right — course bento + CTA */}
        <div className="order-3 flex flex-col justify-center lg:order-none lg:pl-1 xl:pl-3">
          <div className="grid w-full max-w-sm grid-cols-2 gap-2.5 sm:gap-3 lg:ml-auto">
            {courses.map((c) => {
              const Icon = c.Icon;
              const featured = c.span === "col-span-2";
              return (
                <a
                  key={c.id}
                  href="#programs"
                  className={`${c.span} group relative overflow-hidden rounded-2xl border bg-white transition hover:border-black/20 ${
                    featured
                      ? "flex min-h-[8.5rem] items-stretch gap-3 p-3 sm:p-3.5"
                      : "flex min-h-[11.5rem] flex-col p-3 sm:p-3.5"
                  }`}
                  style={{ borderColor: LINE }}
                >
                  {featured ? (
                    <>
                      <span className="flex min-w-0 flex-1 flex-col justify-between py-0.5">
                        <span className="flex items-start justify-between gap-2">
                          <span className="grid h-8 w-8 place-items-center rounded-xl bg-cream text-ember">
                            <Icon size={16} strokeWidth={1.75} />
                          </span>
                          <span className="rounded-full border border-line bg-cream px-2 py-0.5 font-display text-[10px] font-medium uppercase tracking-[0.08em] text-mute">
                            {c.ages}
                          </span>
                        </span>
                        <span>
                          <span className="mt-2 block font-display text-[15px] font-medium tracking-[-0.03em] text-ink sm:text-base">
                            {c.title}
                          </span>
                          <span className="mt-1 block text-[12px] leading-snug text-mute">
                            {c.blurb}
                          </span>
                        </span>
                      </span>
                      <span className="relative h-auto w-[42%] shrink-0 overflow-hidden rounded-xl bg-[#0a0a0a]">
                        <Image
                          src={c.thumb}
                          alt=""
                          fill
                          unoptimized
                          sizes="140px"
                          className="object-cover object-center transition duration-400 group-hover:scale-105"
                        />
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="relative mb-2.5 aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#0a0a0a]">
                        <Image
                          src={c.thumb}
                          alt=""
                          fill
                          unoptimized
                          sizes="160px"
                          className="object-cover object-center transition duration-400 group-hover:scale-105"
                        />
                        <span className="absolute left-2 top-2 grid h-7 w-7 place-items-center rounded-lg bg-black/45 text-ember backdrop-blur-sm">
                          <Icon size={14} strokeWidth={1.75} />
                        </span>
                        <span className="absolute right-2 top-2 rounded-full border border-white/10 bg-black/45 px-2 py-0.5 font-display text-[9px] font-medium uppercase tracking-[0.08em] text-white/80 backdrop-blur-sm">
                          {c.ages}
                        </span>
                      </span>
                      <span className="mt-auto block font-display text-[14px] font-medium tracking-[-0.03em] text-ink sm:text-[15px]">
                        {c.title}
                      </span>
                      <span className="mt-0.5 block text-[11px] leading-snug text-mute">
                        {c.blurb}
                      </span>
                    </>
                  )}
                </a>
              );
            })}
          </div>

          <a
            href="#trial"
            className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-ember px-6 py-3 text-sm font-medium text-white transition hover:brightness-110 sm:w-fit lg:ml-auto"
          >
            Explore AI courses
          </a>
        </div>
      </div>
    </section>
  );
}

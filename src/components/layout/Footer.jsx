"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
  useMotionTemplate,
} from "framer-motion";
import Logo from "@/components/layout/Logo";
import { CREAM, INK, LINE, MUTE, TXT } from "@/lib/tokens";

const programs = [
  { label: "Scratch", href: "#programs" },
  { label: "Web development", href: "#programs" },
  { label: "Python", href: "#programs" },
  { label: "AI & ML", href: "#programs" },
];

const company = [
  { label: "About", href: "/about" },
  { label: "Our Story", href: "/about" },
  { label: "Portfolios", href: "/#portfolio" },
  { label: "Testimonials", href: "/#stories" },
];

const help = [
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
];

/**
 * Stepped mountain silhouette — heights rise to a center peak, then fall.
 * Each column is a purple→orange stack; blur reads as the rainbow mountain.
 */
const MOUNTAIN_STEPS = [
  18, 24, 30, 38, 46, 54, 62, 70, 78, 86, 94, 100, 94, 86, 78, 70, 62, 54, 46,
  38, 30, 24, 18,
];

const COLUMN_GRADIENT =
  "linear-gradient(180deg, #8b5cf6 0%, #6366f1 18%, #3b82f6 36%, #22c55e 52%, #eab308 70%, #f97316 88%, #ea580c 100%)";

function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="font-display text-[11px] font-medium uppercase tracking-[0.18em] text-ink">
        {title}
      </h3>
      <ul className="mt-3.5 space-y-2.5 sm:mt-4">
        {links.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="inline-flex min-h-[36px] items-center font-display text-[14px] font-medium tracking-[-0.02em] transition hover:text-ember"
              style={{ color: MUTE }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function BrandGlow() {
  const ref = useRef(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.45);
  const sx = useSpring(mx, { stiffness: 90, damping: 20, mass: 0.5 });
  const sy = useSpring(my, { stiffness: 90, damping: 20, mass: 0.5 });

  const shiftX = useTransform(sx, [0, 1], ["-4%", "4%"]);
  const shiftY = useTransform(sy, [0, 1], ["3%", "-3%"]);
  const glowX = useTransform(sx, (v) => `${v * 100}%`);
  const glowY = useTransform(sy, (v) => `${v * 100}%`);
  const glowBg = useMotionTemplate`radial-gradient(circle 260px at ${glowX} ${glowY}, rgba(255,255,255,0.5), transparent 55%)`;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const rise = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const fade = useTransform(scrollYProgress, [0, 0.4, 1], [0.4, 0.9, 1]);

  function onMove(e) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => {
        mx.set(0.5);
        my.set(0.45);
      }}
      style={{ y: rise, opacity: fade }}
      className="relative h-[min(52vw,280px)] w-full overflow-hidden sm:h-[min(42vw,420px)] lg:h-[460px]"
      aria-hidden
    >
      <motion.div
        className="absolute inset-x-[-3%] bottom-[16%] top-[20%]"
        style={{ x: shiftX, y: shiftY }}
      >
        <div
          className="flex h-full w-full items-end justify-center gap-[2px] sm:gap-1"
          style={{ filter: "blur(34px) saturate(1.35)" }}
        >
          {MOUNTAIN_STEPS.map((h, i) => (
            <motion.span
              key={`step-${i}`}
              className="min-w-0 flex-1 rounded-t-[20%] origin-bottom"
              style={{
                height: `${h}%`,
                background: COLUMN_GRADIENT,
              }}
              animate={{
                height: [`${h}%`, `${Math.min(100, h + 6)}%`, `${h}%`],
              }}
              transition={{
                duration: 4.2 + (i % 5) * 0.25,
                repeat: Infinity,
                ease: "easeInOut",
                delay: (i % 7) * 0.12,
              }}
            />
          ))}
        </div>

        <motion.div
          className="pointer-events-none absolute inset-0 mix-blend-overlay"
          style={{ background: glowBg }}
        />
      </motion.div>

      <p
        className="pointer-events-none absolute inset-x-0 bottom-[1.25rem] z-[1] text-center font-display font-medium leading-none tracking-[-0.07em] text-white select-none sm:bottom-[1.75rem] lg:bottom-[2.25rem]"
        style={{ fontSize: "clamp(2.75rem, 16vw, 11.5rem)" }}
      >
        codingzen
      </p>

      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-[3] h-[40%]"
        style={{
          background: `linear-gradient(180deg, ${CREAM} 0%, ${CREAM} 45%, transparent 100%)`,
        }}
      />
    </motion.div>
  );
}

export default function Footer() {
  const [joined, setJoined] = useState(false);

  function onJoin(e) {
    e.preventDefault();
    setJoined(true);
  }

  return (
    <footer
      className="relative overflow-x-clip border-t border-black/5"
      style={{ backgroundColor: CREAM }}
    >
      <div className="mx-auto w-full max-w-6xl px-4 pt-8 sm:px-6 sm:pt-12 lg:px-8 lg:pt-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div className="max-w-md">
            <Logo />
            <p
              className="mt-4 text-[14px] leading-relaxed sm:text-[15px]"
              style={{ color: TXT }}
            >
              Live coding classes for kids aged 6–16. From New Delhi, online
              everywhere.
            </p>

            {joined ? (
              <p className="mt-6 font-display text-[14px] font-medium text-ink">
                You&apos;re on the list — thanks for joining.
              </p>
            ) : (
              <form
                onSubmit={onJoin}
                className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:gap-2"
              >
                <label htmlFor="footer-email" className="sr-only">
                  Parent&apos;s email for updates
                </label>
                <input
                  id="footer-email"
                  name="email"
                  type="email"
                  required
                  placeholder="Parent's email for updates"
                  className="min-h-[48px] w-full flex-1 rounded-full border bg-white px-5 py-3 font-display text-[14px] text-ink outline-none placeholder:text-mute focus:border-ember/40 focus:ring-2 focus:ring-ember/15"
                  style={{ borderColor: LINE }}
                />
                <button
                  type="submit"
                  className="inline-flex min-h-[48px] w-full shrink-0 items-center justify-center rounded-full px-6 py-3 font-display text-[14px] font-medium text-white transition hover:brightness-110 sm:w-auto"
                  style={{ backgroundColor: INK }}
                >
                  Join
                </button>
              </form>
            )}
          </div>

          {/* Phone: 2-col link grid; sm: 2; lg: 3 */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
            <FooterColumn title="Programs" links={programs} />
            <FooterColumn title="Company" links={company} />
            <div className="col-span-2 sm:col-span-1 lg:col-span-1">
              <FooterColumn title="Help" links={help} />
            </div>
          </div>
        </div>

        <div
          className="mt-8 flex flex-col items-center gap-3 border-t border-black/8 py-4 text-center font-mono text-[10px] font-medium uppercase tracking-[0.16em] sm:mt-10 sm:flex-row sm:justify-between sm:pb-5 sm:pt-4 sm:text-left sm:text-[11px]"
          style={{ color: MUTE }}
        >
          <span>© {new Date().getFullYear()} CODINGZEN</span>
          <span className="inline-flex items-center gap-2">
            <span className="relative flex h-2 w-2" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-ember" />
            </span>
            Classes live right now
          </span>
          <span>New Delhi · Online</span>
        </div>
      </div>

      <div className="h-4 sm:h-6 lg:h-8" />
      <BrandGlow />
    </footer>
  );
}

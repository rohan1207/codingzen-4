"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Sparkles, X } from "lucide-react";
import { RED, INK } from "@/lib/tokens";

const QUESTIONS = [
  {
    id: "print",
    topic: "Python basics",
    prompt: "What does print() do in Python?",
    options: [
      { id: "a", label: "It deletes a variable from memory" },
      { id: "b", label: "It shows a message on the screen" },
      { id: "c", label: "It creates a new file on the computer" },
      { id: "d", label: "It pauses the program forever" },
    ],
    correctId: "b",
    explain:
      "Great try! print() simply writes a message to the screen — like saying hello out loud. Keep the text inside quotes, for example: print(\"Hey\").",
  },
  {
    id: "loop",
    topic: "Loops",
    prompt: "Which idea best describes a loop?",
    options: [
      { id: "a", label: "Running the same steps again and again" },
      { id: "b", label: "Stopping the program immediately" },
      { id: "c", label: "Naming a variable once" },
      { id: "d", label: "Drawing only one shape" },
    ],
    correctId: "a",
    explain:
      "Nice effort! A loop repeats instructions — perfect for games, animations, and counting. That's how characters keep moving until you say stop.",
  },
  {
    id: "variable",
    topic: "Variables",
    prompt: "What is a variable best compared to?",
    options: [
      { id: "a", label: "A locked door that never opens" },
      { id: "b", label: "A labeled box that can hold a value" },
      { id: "c", label: "A random error message" },
      { id: "d", label: "A button that only works offline" },
    ],
    correctId: "b",
    explain:
      "Almost there! Think of a variable as a labeled box — you can store a name, a score, or a color inside and use it later in your code.",
  },
  {
    id: "condition",
    topic: "Conditions",
    prompt: "In coding, an if statement is mainly used to…",
    options: [
      { id: "a", label: "Make a choice based on a condition" },
      { id: "b", label: "Install new software" },
      { id: "c", label: "Change the computer's wallpaper" },
      { id: "d", label: "Turn off the screen brightness" },
    ],
    correctId: "a",
    explain:
      "Good thinking! if lets the program decide — for example, if score > 10, show a win message. That's how games react to what players do.",
  },
];

const PALETTE = ["#e84438", "#f6c9c4", "#c9a46c", "#ffffff", INK, "#f0e6d8"];

function CelebrationSplash({ points }) {
  const ribbons = useMemo(
    () =>
      Array.from({ length: 28 }, (_, i) => {
        const angle = (i / 28) * Math.PI * 2 + Math.random() * 0.35;
        const dist = 120 + Math.random() * 220;
        return {
          id: `r${i}`,
          x: Math.cos(angle) * dist,
          y: Math.sin(angle) * dist - 40,
          rot: (Math.random() - 0.5) * 140,
          delay: 0.05 + Math.random() * 0.2,
          color: PALETTE[i % PALETTE.length],
          w: 4 + Math.random() * 5,
          h: 18 + Math.random() * 28,
        };
      }),
    [],
  );

  const sparks = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => {
        const angle = (i / 18) * Math.PI * 2;
        const dist = 90 + Math.random() * 160;
        return {
          id: `s${i}`,
          x: Math.cos(angle) * dist,
          y: Math.sin(angle) * dist,
          delay: 0.12 + Math.random() * 0.25,
          size: 3 + (i % 3),
        };
      }),
    [],
  );

  const petals = useMemo(
    () =>
      Array.from({ length: 16 }, (_, i) => ({
        id: `p${i}`,
        left: `${8 + Math.random() * 84}%`,
        delay: Math.random() * 0.35,
        duration: 2.2 + Math.random() * 1.1,
        sway: (Math.random() - 0.5) * 80,
        rot: Math.random() * 360,
        color: PALETTE[i % PALETTE.length],
        size: 7 + Math.random() * 9,
      })),
    [],
  );

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[95] overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.45 } }}
    >
      {/* Soft elegant veil */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
        style={{
          background:
            "radial-gradient(ellipse 55% 48% at 50% 42%, rgba(232,68,56,0.14), transparent 68%), radial-gradient(ellipse 40% 35% at 50% 48%, rgba(201,164,108,0.12), transparent 70%)",
        }}
      />

      {/* Expanding rings */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={`ring-${i}`}
          className="absolute left-1/2 top-[42%] h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border"
          style={{
            borderColor: i === 1 ? "rgba(201,164,108,0.35)" : "rgba(232,68,56,0.28)",
          }}
          initial={{ scale: 0.4, opacity: 0.55 }}
          animate={{ scale: 4.2 + i * 0.55, opacity: 0 }}
          transition={{
            duration: 1.55 + i * 0.18,
            delay: i * 0.12,
            ease: [0.16, 1, 0.3, 1],
          }}
        />
      ))}

      {/* Soft glow orb behind card */}
      <motion.div
        className="absolute left-1/2 top-[42%] h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.85) 0%, rgba(246,201,196,0.35) 42%, transparent 72%)",
          filter: "blur(8px)",
        }}
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1.15, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Burst ribbons from center */}
      <div className="absolute left-1/2 top-[42%]">
        {ribbons.map((r) => (
          <motion.span
            key={r.id}
            className="absolute rounded-full"
            style={{
              width: r.w,
              height: r.h,
              backgroundColor: r.color,
              boxShadow: "0 0 12px rgba(255,255,255,0.25)",
            }}
            initial={{ x: 0, y: 0, opacity: 0, rotate: 0, scale: 0.4 }}
            animate={{
              x: r.x,
              y: r.y,
              opacity: [0, 1, 0.85, 0],
              rotate: r.rot,
              scale: 1,
            }}
            transition={{
              duration: 1.35,
              delay: r.delay,
              ease: [0.16, 1, 0.3, 1],
            }}
          />
        ))}
        {sparks.map((s) => (
          <motion.span
            key={s.id}
            className="absolute rounded-full bg-white"
            style={{
              width: s.size,
              height: s.size,
              boxShadow: "0 0 10px rgba(255,255,255,0.9)",
            }}
            initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
            animate={{
              x: s.x,
              y: s.y,
              opacity: [0, 1, 0],
              scale: [0, 1.4, 0.4],
            }}
            transition={{
              duration: 1.1,
              delay: s.delay,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Soft falling petals */}
      {petals.map((p) => (
        <motion.span
          key={p.id}
          className="absolute top-[-8%] rounded-[40%]"
          style={{
            left: p.left,
            width: p.size,
            height: p.size * 1.35,
            backgroundColor: p.color,
            opacity: 0.85,
          }}
          initial={{ y: 0, x: 0, rotate: 0, opacity: 0 }}
          animate={{
            y: "115vh",
            x: [0, p.sway, p.sway * -0.4],
            rotate: p.rot + 180,
            opacity: [0, 0.9, 0.75, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            ease: [0.22, 0.8, 0.3, 1],
          }}
        />
      ))}

      {/* Elegant center card */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.88 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -12, scale: 0.96 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-[320px] overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/90 px-7 py-8 text-center shadow-[0_40px_100px_-40px_rgba(0,0,0,0.45)] backdrop-blur-xl"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-80"
            style={{
              background:
                "linear-gradient(165deg, rgba(232,68,56,0.08) 0%, transparent 42%, rgba(201,164,108,0.1) 100%)",
            }}
          />

          <motion.div
            className="relative mx-auto grid h-16 w-16 place-items-center rounded-full"
            style={{
              background:
                "linear-gradient(145deg, #e84438 0%, #c7342f 55%, #a82c28 100%)",
              boxShadow:
                "0 12px 32px -10px rgba(232,68,56,0.65), inset 0 1px 0 rgba(255,255,255,0.28)",
            }}
            initial={{ scale: 0.5, rotate: -12 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 320, damping: 16, delay: 0.08 }}
          >
            <motion.span
              className="absolute inset-[-6px] rounded-full border border-[#e84438]/30"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.15, opacity: [0, 0.7, 0] }}
              transition={{ duration: 1.1, delay: 0.15, ease: "easeOut" }}
            />
            <Check size={28} strokeWidth={2.75} className="relative text-white" />
          </motion.div>

          <motion.p
            className="relative mt-5 font-serif text-[1.85rem] italic leading-none tracking-[-0.02em] text-ink"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.4 }}
          >
            Brilliant
          </motion.p>
          <motion.p
            className="relative mt-2 font-display text-[13px] font-medium tracking-[0.02em] text-[#666]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.28 }}
          >
            That was a sharp answer
          </motion.p>

          <motion.div
            className="relative mt-5 inline-flex items-center gap-2 rounded-full border border-[#f0e6d8] bg-[#faf7f2] px-4 py-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.32, type: "spring", stiffness: 260, damping: 18 }}
          >
            <Sparkles size={14} className="text-[#c9a46c]" />
            <span className="font-display text-[13px] font-medium tracking-[-0.01em] text-ink">
              +{points} points
            </span>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function CodingQuiz() {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const [points, setPoints] = useState(0);
  const [streak, setStreak] = useState(0);
  const [celebrate, setCelebrate] = useState(false);
  const [gained, setGained] = useState(0);
  const [flash, setFlash] = useState(null); // "ok" | "bad" | null

  const q = QUESTIONS[index];
  const isCorrect = selected === q.correctId;
  const done = index >= QUESTIONS.length - 1 && revealed;

  function pick(optionId) {
    if (revealed) return;
    setSelected(optionId);
    setRevealed(true);
    const ok = optionId === q.correctId;
    if (ok) {
      const award = 10 + streak * 2;
      setGained(award);
      setPoints((p) => p + award);
      setStreak((s) => s + 1);
      setCelebrate(true);
      setFlash("ok");
      window.setTimeout(() => setCelebrate(false), 2600);
    } else {
      setStreak(0);
      setFlash("bad");
    }
    window.setTimeout(() => setFlash(null), 700);
  }

  function next() {
    if (index >= QUESTIONS.length - 1) {
      setIndex(0);
      setPoints(0);
      setStreak(0);
    } else {
      setIndex((i) => i + 1);
    }
    setSelected(null);
    setRevealed(false);
    setFlash(null);
  }

  return (
    <div className="relative flex h-full min-h-0 flex-col overflow-hidden rounded-[1.5rem] border border-[#e8e8e8] bg-white shadow-[0_36px_90px_-48px_rgba(0,0,0,0.4)] sm:rounded-[1.75rem]">
      <AnimatePresence>
        {celebrate && <CelebrationSplash points={gained} />}
      </AnimatePresence>

      {/* Header */}
      <div className="flex shrink-0 flex-wrap items-center justify-between gap-2 border-b border-[#eee] bg-[#fafafa] px-4 py-2.5 sm:px-5 sm:py-3">
        <div className="min-w-0">
          <p className="font-display text-[11px] font-medium uppercase tracking-[0.18em] text-ember">
            Mini coding quiz
          </p>
          <p className="truncate text-[13px] text-[#555] sm:text-[14px]">
            Pick an answer — learn something every try.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#ececec] bg-white px-2.5 py-1 font-display text-[12px] font-medium text-[#333]">
            <Sparkles size={13} className="text-ember" />
            {points} pts
          </span>
          <span className="rounded-full bg-black px-2.5 py-1 font-display text-[12px] font-medium text-white">
            {index + 1} / {QUESTIONS.length}
          </span>
        </div>
      </div>

      <div className="grid min-h-0 flex-1 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Question + options */}
        <div className="relative flex min-h-0 flex-col overflow-y-auto border-b border-[#eee] p-4 sm:p-5 lg:border-b-0 lg:border-r">
          <AnimatePresence>
            {flash === "ok" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="pointer-events-none absolute inset-3 z-[2] rounded-[1.1rem] border-2 border-emerald-400/50 bg-emerald-400/10"
              />
            )}
          </AnimatePresence>

          <p className="font-display text-[11px] font-medium uppercase tracking-[0.16em] text-[#999]">
            {q.topic}
          </p>
          <h3 className="mt-1.5 font-display text-[clamp(1.1rem,2vw,1.45rem)] font-medium tracking-[-0.03em] text-ink">
            {q.prompt}
          </h3>

          <ul className="mt-3 flex flex-1 flex-col justify-center gap-2 sm:mt-4 sm:gap-2.5">
            {q.options.map((opt) => {
              const picked = selected === opt.id;
              const showCorrect = revealed && opt.id === q.correctId;
              const showWrong = revealed && picked && opt.id !== q.correctId;

              return (
                <li key={opt.id}>
                  <button
                    type="button"
                    disabled={revealed}
                    onClick={() => pick(opt.id)}
                    className={`flex w-full items-center gap-3 rounded-xl border px-3.5 py-2.5 text-left font-display text-[13px] font-medium tracking-[-0.02em] transition sm:rounded-2xl sm:px-4 sm:py-3 sm:text-[14px] ${
                      showCorrect
                        ? "border-emerald-400 bg-emerald-50 text-emerald-900"
                        : showWrong
                          ? "border-ember/40 bg-ember/5 text-[#7a1f1f]"
                          : picked
                            ? "border-black bg-black text-white"
                            : "border-[#ebebeb] bg-[#fafafa] text-[#222] hover:border-[#ddd] hover:bg-white"
                    } ${revealed ? "cursor-default" : "cursor-pointer"}`}
                  >
                    <span
                      className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-[11px] font-medium sm:h-8 sm:w-8 sm:text-[12px] ${
                        showCorrect
                          ? "bg-emerald-500 text-white"
                          : showWrong
                            ? "bg-ember text-white"
                            : picked
                              ? "bg-white/15 text-white"
                              : "bg-white text-[#888] ring-1 ring-[#e8e8e8]"
                      }`}
                    >
                      {showCorrect ? (
                        <Check size={14} strokeWidth={3} />
                      ) : showWrong ? (
                        <X size={14} strokeWidth={3} />
                      ) : (
                        opt.id.toUpperCase()
                      )}
                    </span>
                    {opt.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Feedback panel */}
        <div className="flex min-h-0 flex-col justify-between gap-4 overflow-y-auto bg-[#0f0f0f] p-4 text-white sm:gap-5 sm:p-5">
          <div className="min-h-0">
            <p className="font-display text-[11px] font-medium uppercase tracking-[0.18em] text-white/40">
              Feedback
            </p>

            <AnimatePresence mode="wait">
              {!revealed ? (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="mt-3"
                >
                  <p className="font-display text-base font-medium tracking-[-0.02em] text-white/85 sm:text-lg">
                    Take a guess
                  </p>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-white/50 sm:text-[14px]">
                    No pressure — every answer teaches something. Streaks earn
                    bonus points.
                  </p>
                </motion.div>
              ) : isCorrect ? (
                <motion.div
                  key="ok"
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="mt-3"
                >
                  <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-3 py-1.5 text-emerald-300">
                    <Sparkles size={15} />
                    <span className="font-display text-[12px] font-medium uppercase tracking-[0.14em]">
                      +{gained} points
                    </span>
                  </div>
                  <p className="mt-2.5 font-display text-lg font-medium tracking-[-0.03em] text-white sm:text-xl">
                    Brilliant
                  </p>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-white/60 sm:text-[14px]">
                    That&apos;s exactly right. Keep this streak going — you&apos;re
                    thinking like a coder.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="bad"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="mt-3"
                >
                  <div
                    className="inline-flex items-center gap-2 rounded-full px-3 py-1.5"
                    style={{ backgroundColor: "rgba(232,68,56,0.18)", color: "#f5a8a0" }}
                  >
                    <span className="font-display text-[12px] font-medium uppercase tracking-[0.14em]">
                      Almost — here&apos;s the idea
                    </span>
                  </div>
                  <p className="mt-2.5 font-display text-lg font-medium tracking-[-0.03em] text-white sm:text-xl">
                    Correct answer
                  </p>
                  <p className="mt-1 text-[14px] font-medium text-white/90 sm:text-[15px]">
                    {
                      q.options.find((o) => o.id === q.correctId)?.label
                    }
                  </p>
                  <p className="mt-2 text-[13px] leading-relaxed text-white/55 sm:text-[14px]">
                    {q.explain}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            type="button"
            onClick={next}
            disabled={!revealed}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl px-4 py-3 font-display text-sm font-medium text-white transition disabled:cursor-not-allowed disabled:opacity-40"
            style={{ backgroundColor: RED }}
          >
            {done ? "Play again" : "Next question"}
          </button>
        </div>
      </div>
    </div>
  );
}

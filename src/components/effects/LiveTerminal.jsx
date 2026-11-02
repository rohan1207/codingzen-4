"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINES = [
  { prefix: ">", text: "boot CodingZen.dojo", tone: "zen" },
  { prefix: "ok", text: "mentor connected · live session", tone: "code" },
  { prefix: ">", text: "think → create → apply", tone: "ember" },
  { prefix: "ok", text: "project shipped · confidence++", tone: "code" },
];

export default function LiveTerminal() {
  const [index, setIndex] = useState(0);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    const line = LINES[index];
    setTyped("");
    let i = 0;
    const type = setInterval(() => {
      i += 1;
      setTyped(line.text.slice(0, i));
      if (i >= line.text.length) clearInterval(type);
    }, 28);
    const next = setTimeout(() => {
      setIndex((v) => (v + 1) % LINES.length);
    }, 2600);
    return () => {
      clearInterval(type);
      clearTimeout(next);
    };
  }, [index]);

  const line = LINES[index];

  return (
    <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-[#121a16] p-4 text-left shadow-[0_30px_80px_-40px_rgba(16,22,18,0.9)]">
      <div className="mb-4 flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">
          classroom.exe
        </span>
      </div>

      <div className="min-h-[7.5rem] space-y-3 font-mono text-sm">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="flex gap-3"
          >
            <span
              className={
                line.tone === "ember"
                  ? "text-ember"
                  : line.tone === "code"
                    ? "text-code"
                    : "text-[#7dd3a0]"
              }
            >
              {line.prefix}
            </span>
            <span className="text-[#d7ebe0]">
              {typed}
              <span className="ml-0.5 inline-block h-4 w-1.5 animate-pulse bg-[#7dd3a0] align-middle" />
            </span>
          </motion.div>
        </AnimatePresence>

        <p className="text-xs leading-relaxed text-white/35">
          Kids & teens build real projects with mentors who code beside them.
        </p>
      </div>
    </div>
  );
}

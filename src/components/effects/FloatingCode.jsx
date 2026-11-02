"use client";

import { motion } from "framer-motion";

/** Soft, faint code glyphs for empty light backgrounds — positions are fixed (SSR-safe). */
const ELEMENTS = [
  { text: "{ }", top: "8%", left: "6%", size: 22, rotate: -8, opacity: 0.11 },
  { text: "</>", top: "14%", left: "72%", size: 18, rotate: 12, opacity: 0.1 },
  { text: "=>", top: "22%", left: "38%", size: 16, rotate: -4, opacity: 0.09 },
  { text: "print()", top: "28%", left: "12%", size: 13, rotate: 6, opacity: 0.1 },
  { text: "fn()", top: "11%", left: "48%", size: 14, rotate: -14, opacity: 0.08 },
  { text: "0x1A", top: "36%", left: "82%", size: 12, rotate: 9, opacity: 0.09 },
  { text: "while (curious)", top: "42%", left: "4%", size: 11, rotate: -3, opacity: 0.1 },
  { text: "===", top: "48%", left: "55%", size: 15, rotate: 18, opacity: 0.08 },
  { text: "<>", top: "55%", left: "28%", size: 20, rotate: -11, opacity: 0.1 },
  { text: "ship(it)", top: "58%", left: "70%", size: 12, rotate: 5, opacity: 0.09 },
  { text: "#code", top: "66%", left: "16%", size: 13, rotate: -7, opacity: 0.08 },
  { text: "&&", top: "18%", left: "88%", size: 17, rotate: 4, opacity: 0.09 },
  { text: "for i in", top: "72%", left: "44%", size: 11, rotate: 8, opacity: 0.1 },
  { text: "[];", top: "78%", left: "78%", size: 16, rotate: -16, opacity: 0.08 },
  { text: "const zen", top: "84%", left: "8%", size: 12, rotate: 3, opacity: 0.09 },
  { text: "return;", top: "32%", left: "62%", size: 12, rotate: -9, opacity: 0.08 },
  { text: "()", top: "64%", left: "90%", size: 19, rotate: 14, opacity: 0.07 },
  { text: "if (idea)", top: "88%", left: "52%", size: 11, rotate: -5, opacity: 0.09 },
  { text: "{}", top: "5%", left: "30%", size: 24, rotate: 10, opacity: 0.07 },
  { text: "// dream", top: "40%", left: "42%", size: 11, rotate: 2, opacity: 0.08 },
  { text: "map(code)", top: "76%", left: "32%", size: 12, rotate: -12, opacity: 0.09 },
  { text: "true", top: "52%", left: "2%", size: 14, rotate: 7, opacity: 0.07 },
  { text: "…", top: "25%", left: "22%", size: 28, rotate: 0, opacity: 0.06 },
  { text: ";", top: "90%", left: "86%", size: 26, rotate: 20, opacity: 0.07 },
];

/**
 * @param {{ className?: string }} props
 */
export default function FloatingCode({ className = "" }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden select-none ${className}`}
    >
      {ELEMENTS.map((el, i) => (
        <motion.span
          key={`${el.text}-${i}`}
          className="absolute font-mono font-medium leading-none text-[#222] whitespace-nowrap"
          style={{
            top: el.top,
            left: el.left,
            fontSize: el.size,
            opacity: el.opacity,
            rotate: el.rotate,
          }}
          animate={{
            y: [0, i % 2 === 0 ? -6 : 5, 0],
            opacity: [el.opacity * 0.7, el.opacity, el.opacity * 0.75],
          }}
          transition={{
            duration: 9 + (i % 5) * 1.4,
            delay: (i % 7) * 0.35,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {el.text}
        </motion.span>
      ))}
    </div>
  );
}

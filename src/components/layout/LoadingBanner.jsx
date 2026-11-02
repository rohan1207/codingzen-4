"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RED } from "@/lib/tokens";

const DURATION_MS = 2600;
const SEEN_KEY = "cz-boot-seen";

/* Boot screen on dark ground — light ink + hero red accents */
const LIGHT = "#f5f5f5";
const META = "rgba(245, 245, 245, 0.42)";
const BG = "#000000";

function padPct(n) {
  return String(Math.min(100, Math.max(0, Math.round(n)))).padStart(3, "0");
}

/** Slashed zeros like the reference counter */
function PctDigits({ value }) {
  return (
    <span className="inline-flex tabular-nums">
      {padPct(value)
        .split("")
        .map((d, i) =>
          d === "0" ? (
            <span key={i} className="relative inline-block">
              0
              <span
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-[18%] h-[68%] w-[0.08em] -translate-x-1/2 rotate-[-22deg] rounded-full"
                style={{ backgroundColor: LIGHT }}
              />
            </span>
          ) : (
            <span key={i}>{d}</span>
          ),
        )}
    </span>
  );
}

export default function LoadingBanner() {
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    try {
      if (window.localStorage.getItem(SEEN_KEY) === "1") {
        document.documentElement.classList.remove("cz-booting");
        return undefined;
      }
    } catch {
      /* private mode — still show once this session */
    }

    setVisible(true);
    document.documentElement.classList.add("cz-booting");

    const start = performance.now();
    let raf = 0;
    let exitTimer = 0;
    let finished = false;

    const finish = () => {
      if (finished) return;
      finished = true;
      setPct(100);
      setExiting(true);
      try {
        window.localStorage.setItem(SEEN_KEY, "1");
      } catch {
        /* ignore */
      }
      exitTimer = window.setTimeout(() => {
        setVisible(false);
        document.documentElement.classList.remove("cz-booting");
      }, 1150);
    };

    const tick = (now) => {
      const t = Math.min(1, (now - start) / DURATION_MS);
      const eased = 1 - Math.pow(1 - t, 2.35);
      setPct(eased * 100);

      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        finish();
      }
    };

    raf = requestAnimationFrame(tick);
    const failsafe = window.setTimeout(finish, DURATION_MS + 2000);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(exitTimer);
      window.clearTimeout(failsafe);
      document.documentElement.classList.remove("cz-booting");
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="cz-boot"
          className="pointer-events-auto fixed inset-0 z-[10050] overflow-hidden"
          initial={{
            y: 0,
            borderBottomLeftRadius: "0% 0%",
            borderBottomRightRadius: "0% 0%",
          }}
          animate={
            exiting
              ? {
                  y: "-118%",
                  borderBottomLeftRadius: "50% 36%",
                  borderBottomRightRadius: "50% 36%",
                }
              : {
                  y: 0,
                  borderBottomLeftRadius: "0% 0%",
                  borderBottomRightRadius: "0% 0%",
                }
          }
          transition={{
            duration: 1.15,
            ease: [0.76, 0, 0.24, 1],
          }}
          style={{
            backgroundColor: BG,
            color: LIGHT,
            willChange: "transform, border-radius",
          }}
          role="status"
          aria-live="polite"
          aria-label={`Loading ${padPct(pct)} percent`}
        >
          {/* Top corners */}
          <div className="absolute inset-x-0 top-0 z-[2] flex items-start justify-between px-[3.5vw] pt-[2.8vh] sm:px-[4.2vw] sm:pt-[3.2vh]">
            <p
              className="font-display text-[10px] font-medium uppercase tracking-[0.28em] sm:text-[11px]"
              style={{ color: META }}
            >
              CodingZen / Booting the lab
            </p>
            <p
              className="font-display text-[10px] font-medium uppercase tracking-[0.28em] sm:text-[11px]"
              style={{ color: META }}
            >
              New Delhi · IN
            </p>
          </div>

          {/* Hero — left, slightly above center */}
          <motion.div
            className="absolute inset-x-0 top-[38%] z-[2] -translate-y-1/2 px-[3.5vw] sm:px-[4.2vw]"
            animate={{ opacity: exiting ? 0 : 1 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <h1
              className="max-w-[20ch] text-left font-display text-[clamp(2.4rem,7.2vw,5.75rem)] font-medium leading-[1.02] tracking-[-0.04em]"
              style={{ color: LIGHT, fontWeight: 500 }}
            >
              <span>Think. </span>
              <span
                className="font-serif italic"
                style={{
                  color: RED,
                  fontWeight: 400,
                  letterSpacing: "-0.02em",
                }}
              >
                Create.
              </span>{" "}
              <span>Apply.</span>
            </h1>
          </motion.div>

          {/* Bottom corners */}
          <div className="absolute inset-x-0 bottom-0 z-[2] flex items-end justify-between px-[3.5vw] pb-[calc(2.8vh+10px)] sm:px-[4.2vw] sm:pb-[calc(3.2vh+12px)]">
            <p
              className="mb-[0.55em] font-display text-[10px] font-medium uppercase tracking-[0.28em] sm:text-[11px]"
              style={{ color: META }}
            >
              Loading curiosity
            </p>
            <p
              className="font-display text-[clamp(2.75rem,9.5vw,6.25rem)] font-medium leading-none tracking-[-0.04em]"
              style={{ color: LIGHT, fontWeight: 500 }}
            >
              <PctDigits value={pct} />
            </p>
          </div>

          {/* Progress hairline */}
          <div className="absolute inset-x-0 bottom-0 z-[3] h-[2px]">
            <motion.div
              className="h-full origin-left"
              style={{ backgroundColor: RED }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: pct / 100 }}
              transition={{ duration: 0.05, ease: "linear" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

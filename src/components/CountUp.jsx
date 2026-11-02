"use client";

import { useInView, useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef, useState } from "react";

export default function CountUp({
  to,
  from = 0,
  direction = "up",
  delay = 0,
  duration = 2,
  className = "",
  startWhen = true,
  separator = "",
}) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(direction === "down" ? to : from);
  const motionValue = useMotionValue(direction === "down" ? to : from);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  const damping = 20 + 40 * (1 / duration);
  const stiffness = 100 * (1 / duration);
  const springValue = useSpring(motionValue, { damping, stiffness });

  const formatValue = (latest) => {
    const formattedNumber = Intl.NumberFormat("en-US", {
      useGrouping: !!separator,
      maximumFractionDigits: 0,
    }).format(latest);
    return separator ? formattedNumber.replace(/,/g, separator) : formattedNumber;
  };

  useEffect(() => {
    if (isInView && startWhen) {
      const timeoutId = setTimeout(() => {
        motionValue.set(direction === "down" ? from : to);
      }, delay * 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [isInView, startWhen, motionValue, direction, from, to, delay]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplay(latest);
    });
    return () => unsubscribe();
  }, [springValue]);

  return (
    <span ref={ref} className={className}>
      {formatValue(display)}
    </span>
  );
}

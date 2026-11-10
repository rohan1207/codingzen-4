"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { gsap } from "gsap";
import "./TargetCursor.css";

const getContainingBlock = (element) => {
  let node = element?.parentElement;
  while (node && node !== document.documentElement) {
    const style = getComputedStyle(node);
    if (
      style.transform !== "none" ||
      style.perspective !== "none" ||
      style.filter !== "none" ||
      style.willChange.includes("transform") ||
      style.willChange.includes("perspective") ||
      style.willChange.includes("filter") ||
      /paint|layout|strict|content/.test(style.contain)
    ) {
      return node;
    }
    node = node.parentElement;
  }
  return null;
};

const getContainingBlockOffset = (block) => {
  if (!block) return { x: 0, y: 0 };
  const rect = block.getBoundingClientRect();
  return { x: rect.left + block.clientLeft, y: rect.top + block.clientTop };
};

/**
 * Minimal red cursor: center dot + circular ring (no chromatic blend).
 * Soft magnetism toward pill CTAs on hover.
 */
const TargetCursor = ({
  targetSelector = "button.rounded-full, a.rounded-full, [role='button'].rounded-full, .magnetic-pill, .cursor-target",
  hideDefaultCursor = true,
  magneticStrength = 0.32,
  cursorColor = "#e84438",
}) => {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const containingBlockRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const activeTargetRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  const isMobile = useMemo(() => {
    if (typeof window === "undefined") return false;
    const hasTouchScreen =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const isSmallScreen = window.innerWidth <= 768;
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const mobileRegex =
      /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;
    return (
      (hasTouchScreen && isSmallScreen) ||
      mobileRegex.test(userAgent.toLowerCase())
    );
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  const resolveTarget = useCallback(
    (node) => {
      let current = node;
      while (current && current !== document.body) {
        if (current.matches?.(targetSelector)) return current;
        current = current.parentElement;
      }
      return null;
    },
    [targetSelector],
  );

  useEffect(() => {
    if (!mounted || isMobile || !cursorRef.current) return;

    const cursor = cursorRef.current;
    const ring = ringRef.current;
    const originalCursor = document.body.style.cursor;
    if (hideDefaultCursor) document.body.style.cursor = "none";

    containingBlockRef.current = getContainingBlock(cursor);
    const getOffset = () =>
      getContainingBlockOffset(containingBlockRef.current);

    const initial = getOffset();
    mouseRef.current = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    gsap.set(cursor, {
      xPercent: -50,
      yPercent: -50,
      x: mouseRef.current.x - initial.x,
      y: mouseRef.current.y - initial.y,
    });
    if (ring) gsap.set(ring, { scale: 1 });

    const xTo = gsap.quickTo(cursor, "x", {
      duration: 0.42,
      ease: "power3.out",
    });
    const yTo = gsap.quickTo(cursor, "y", {
      duration: 0.42,
      ease: "power3.out",
    });

    const tick = () => {
      const { x: mx, y: my } = mouseRef.current;
      let tx = mx;
      let ty = my;
      const target = activeTargetRef.current;

      if (target) {
        const rect = target.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        tx = mx + (cx - mx) * magneticStrength;
        ty = my + (cy - my) * magneticStrength;
      }

      const { x: ox, y: oy } = getOffset();
      xTo(tx - ox);
      yTo(ty - oy);
    };

    gsap.ticker.add(tick);

    const setMagnetic = (el) => {
      if (el === activeTargetRef.current) return;
      activeTargetRef.current = el;
      if (ring) {
        gsap.to(ring, {
          scale: el ? 1.28 : 1,
          duration: 0.36,
          ease: "power2.out",
          overwrite: "auto",
        });
      }
    };

    const onMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      setMagnetic(resolveTarget(e.target));
    };

    const onDown = () => {
      if (!ring) return;
      gsap.to(ring, {
        scale: activeTargetRef.current ? 1.08 : 0.88,
        duration: 0.16,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    const onUp = () => {
      if (!ring) return;
      gsap.to(ring, {
        scale: activeTargetRef.current ? 1.28 : 1,
        duration: 0.28,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    const onLeaveWindow = () => setMagnetic(null);

    const onResize = () => {
      containingBlockRef.current = getContainingBlock(cursor);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("mouseleave", onLeaveWindow);
    document.documentElement.addEventListener("mouseleave", onLeaveWindow);
    window.addEventListener("resize", onResize);

    return () => {
      gsap.ticker.remove(tick);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("mouseleave", onLeaveWindow);
      document.documentElement.removeEventListener("mouseleave", onLeaveWindow);
      window.removeEventListener("resize", onResize);
      document.body.style.cursor = originalCursor;
      activeTargetRef.current = null;
    };
  }, [mounted, isMobile, hideDefaultCursor, magneticStrength, resolveTarget]);

  if (!mounted || isMobile) return null;

  return createPortal(
    <div ref={cursorRef} className="target-cursor-wrapper" aria-hidden>
      <div
        className="target-cursor-ring"
        ref={ringRef}
        style={{ borderColor: cursorColor }}
      />
      <div
        className="target-cursor-dot"
        style={{ backgroundColor: cursorColor }}
      />
    </div>,
    document.body,
  );
};

export default TargetCursor;

"use client";

import { useEffect, useMemo } from "react";
import { gsap } from "gsap";

const PILL_SELECTOR =
  "button.rounded-full, a.rounded-full, [role='button'].rounded-full, .magnetic-pill";

/**
 * Subtle magnetic translate for pill-shaped CTAs sitewide.
 * Soft pull toward the pointer on hover; springs back on leave.
 */
export default function MagneticPills({ strength = 0.22, maxPull = 10 }) {
  const isMobile = useMemo(() => {
    if (typeof window === "undefined") return false;
    const hasTouch =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const small = window.innerWidth <= 768;
    const ua = navigator.userAgent || "";
    const mobileUa =
      /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
        ua.toLowerCase(),
      );
    return (hasTouch && small) || mobileUa;
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const cleanups = new WeakMap();
    const attached = new WeakSet();

    const attach = (el) => {
      if (!(el instanceof HTMLElement) || attached.has(el)) return;
      if (el.dataset.magnetic === "off") return;
      attached.add(el);

      const onMove = (e) => {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        let dx = (e.clientX - cx) * strength;
        let dy = (e.clientY - cy) * strength;
        const dist = Math.hypot(dx, dy) || 1;
        if (dist > maxPull) {
          dx = (dx / dist) * maxPull;
          dy = (dy / dist) * maxPull;
        }
        gsap.to(el, {
          x: dx,
          y: dy,
          duration: 0.35,
          ease: "power3.out",
          overwrite: "auto",
        });
      };

      const onEnter = () => {
        gsap.to(el, {
          scale: 1.02,
          duration: 0.3,
          ease: "power2.out",
          overwrite: false,
        });
      };

      const onLeave = () => {
        gsap.to(el, {
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.55,
          ease: "elastic.out(1, 0.45)",
          overwrite: "auto",
        });
      };

      const onDown = () => {
        gsap.to(el, {
          scale: 0.97,
          duration: 0.15,
          ease: "power2.out",
          overwrite: "auto",
        });
      };

      const onUp = () => {
        gsap.to(el, {
          scale: 1.02,
          duration: 0.25,
          ease: "power2.out",
          overwrite: "auto",
        });
      };

      el.addEventListener("pointerenter", onEnter);
      el.addEventListener("pointermove", onMove);
      el.addEventListener("pointerleave", onLeave);
      el.addEventListener("pointerdown", onDown);
      el.addEventListener("pointerup", onUp);

      cleanups.set(el, () => {
        el.removeEventListener("pointerenter", onEnter);
        el.removeEventListener("pointermove", onMove);
        el.removeEventListener("pointerleave", onLeave);
        el.removeEventListener("pointerdown", onDown);
        el.removeEventListener("pointerup", onUp);
        gsap.set(el, { clearProps: "x,y,scale" });
      });
    };

    const scan = () => {
      document.querySelectorAll(PILL_SELECTOR).forEach(attach);
    };

    scan();
    const mo = new MutationObserver(() => scan());
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      mo.disconnect();
      document.querySelectorAll(PILL_SELECTOR).forEach((el) => {
        cleanups.get(el)?.();
      });
    };
  }, [isMobile, strength, maxPull]);

  return null;
}

"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "@/components/layout/Logo";
import { navLinks } from "@/data/site";
import { INK, LINE, RED } from "@/lib/tokens";

function DesktopItem({ link, activeHref, onNavigate }) {
  const hasChildren = Array.isArray(link.children) && link.children.length > 0;
  const [open, setOpen] = useState(false);
  const closeTimer = useRef(null);

  const active =
    activeHref === link.href ||
    link.children?.some((c) => c.href === activeHref);

  const clearClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
  };

  const scheduleClose = () => {
    clearClose();
    closeTimer.current = window.setTimeout(() => setOpen(false), 120);
  };

  useEffect(() => () => clearClose(), []);

  const itemClass = `relative inline-flex items-center gap-0.5 whitespace-nowrap rounded-full px-2.5 py-2 font-display text-[13px] font-medium tracking-[-0.02em] transition lg:px-3 lg:text-[14px] xl:gap-1 xl:px-4 xl:text-[15px] ${
    active || open ? "text-ink" : "text-txt hover:text-ink"
  }`;

  if (!hasChildren) {
    return (
      <a
        href={link.href}
        onClick={() => onNavigate(link.href)}
        aria-current={active ? "page" : undefined}
        className={itemClass}
      >
        {link.label}
      </a>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        clearClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
      onFocus={() => {
        clearClose();
        setOpen(true);
      }}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false);
      }}
    >
      <div className={itemClass}>
        <a
          href={link.href}
          onClick={() => onNavigate(link.href)}
          aria-current={active ? "page" : undefined}
          className="inline-flex items-center"
        >
          {link.label}
        </a>
        <button
          type="button"
          aria-expanded={open}
          aria-haspopup="menu"
          aria-label={`${link.label} menu`}
          className="inline-flex items-center"
          onClick={() => setOpen((v) => !v)}
        >
          <ChevronDown
            size={13}
            strokeWidth={2.5}
            className={`transition ${open ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            role="menu"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.18 }}
            className="absolute left-1/2 top-full z-50 mt-3 min-w-[220px] -translate-x-1/2 overflow-hidden rounded-2xl border bg-white/95 p-1.5 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.4)] backdrop-blur-xl"
            style={{ borderColor: LINE }}
          >
            {link.children.map((child) => (
              <a
                key={`${link.label}-${child.label}`}
                role="menuitem"
                href={child.href}
                {...(child.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                onClick={() => {
                  if (!child.external) onNavigate(child.href);
                  setOpen(false);
                }}
                className="block rounded-xl px-3.5 py-2.5 font-display text-[13px] font-medium tracking-[-0.02em] text-txt transition hover:bg-[#f3f3f3] hover:text-ink"
              >
                {child.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileItem({ link, activeHref, onNavigate }) {
  const hasChildren = Array.isArray(link.children) && link.children.length > 0;
  const [open, setOpen] = useState(false);
  const active =
    activeHref === link.href ||
    link.children?.some((c) => c.href === activeHref);

  if (!hasChildren) {
    return (
      <a
        href={link.href}
        onClick={() => onNavigate(link.href)}
        className={`rounded-xl px-3 py-3 font-display text-[15px] font-medium tracking-[-0.02em] transition sm:text-base ${
          active ? "bg-ink text-white" : "text-txt hover:bg-[#f3f3f3]"
        }`}
      >
        {link.label}
      </a>
    );
  }

  return (
    <div>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={`flex w-full items-center justify-between rounded-xl px-3 py-3 font-display text-[15px] font-medium tracking-[-0.02em] transition sm:text-base ${
          active ? "bg-ink text-white" : "text-txt hover:bg-[#f3f3f3]"
        }`}
      >
        {link.label}
        <ChevronDown size={16} className={`transition ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-0.5 pb-1 pl-3 pt-1">
              {link.children.map((child) => (
                <a
                  key={`${link.label}-${child.label}`}
                  href={child.href}
                  {...(child.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  onClick={() => {
                    if (!child.external) onNavigate(child.href);
                  }}
                  className="rounded-lg px-3 py-2.5 font-display text-sm font-medium text-meta transition hover:bg-[#f3f3f3] hover:text-ink sm:text-[15px]"
                >
                  {child.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function TrialCta({ className = "" }) {
  return (
    <a
      href="#trial"
      className={`group inline-flex shrink-0 items-center gap-2 rounded-full py-2.5 pl-4 pr-4 font-display text-[13px] font-medium tracking-[-0.02em] text-white transition hover:brightness-110 sm:py-3 sm:pl-5 sm:pr-5 sm:text-[14px] ${className}`}
      style={{ backgroundColor: INK }}
    >
      Book free trial
      <ArrowUpRight size={14} strokeWidth={2.5} />
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState(navLinks[0]?.href ?? "/");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks
      .flatMap((l) => [l.href, ...(l.children?.map((c) => c.href) ?? [])])
      .map((h) => {
        if (typeof h !== "string") return null;
        if (h.startsWith("/#")) return h.slice(2);
        if (h.startsWith("#")) return h.slice(1);
        return null;
      })
      .filter(Boolean);

    const elements = [...new Set(ids)]
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!elements.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActiveHref(`#${visible[0].target.id}`);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const navigate = (href) => {
    setActiveHref(href);
    setOpen(false);
  };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 w-full max-w-[100vw] px-2.5 pt-1.5 sm:px-4 sm:pt-2 lg:px-5 lg:pt-2.5">
      {/* Desktop / tablet floating pill */}
      <div
        className="pointer-events-auto mx-auto hidden w-full max-w-[min(1200px,calc(100vw-2.5rem))] items-center justify-between gap-3 rounded-full border bg-white px-3 py-2.5 shadow-[0_8px_30px_-18px_rgba(0,0,0,0.22)] transition lg:flex xl:gap-6 xl:px-5 xl:py-3"
        style={{ borderColor: LINE }}
      >
        <div className="shrink-0 pl-0.5 xl:pl-1">
          <Logo />
        </div>

        <nav className="flex min-w-0 flex-1 items-center justify-center gap-0.5 xl:gap-2">
          {navLinks.map((link) => (
            <DesktopItem
              key={link.label}
              link={link}
              activeHref={activeHref}
              onNavigate={navigate}
            />
          ))}
        </nav>

        <TrialCta />
      </div>

      {/* Mobile / tablet bar */}
      <div
        className={`pointer-events-auto mx-auto flex w-full max-w-[min(1440px,calc(100vw-1.25rem))] items-center justify-between gap-2 rounded-full border border-white/50 px-2.5 py-1.5 shadow-[0_12px_40px_-18px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:gap-3 sm:px-3 sm:py-2 lg:hidden ${
          scrolled || open ? "bg-white/80" : "bg-white/60"
        }`}
      >
        <Logo />
        <div className="flex items-center gap-1.5 sm:gap-2">
          <TrialCta className="!hidden sm:!inline-flex scale-95" />
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-full border border-black/5 bg-white/80 text-ink sm:h-10 sm:w-10"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="pointer-events-auto mx-auto mt-2 max-h-[min(78vh,560px)] w-full max-w-[min(1440px,calc(100vw-1.25rem))] overflow-y-auto rounded-[1.5rem] border bg-white/95 p-3 shadow-xl backdrop-blur-xl sm:p-4 lg:hidden"
            style={{ borderColor: LINE }}
          >
            <div className="flex flex-col gap-0.5">
              {navLinks.map((link) => (
                <MobileItem
                  key={link.label}
                  link={link}
                  activeHref={activeHref}
                  onNavigate={navigate}
                />
              ))}
              <a
                href="#trial"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full px-4 py-3.5 font-display text-sm font-medium text-white sm:text-[15px]"
                style={{ backgroundColor: INK }}
              >
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: RED }}
                />
                Book free trial
                <ArrowUpRight size={15} strokeWidth={2.5} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

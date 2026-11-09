"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "@/components/layout/Logo";
import { navLinks } from "@/data/site";
import { INK, LINE, RED } from "@/lib/tokens";

function DesktopItem({ link, activeHref, onNavigate }) {
  const hasChildren = Array.isArray(link.children) && link.children.length > 0;
  const [open, setOpen] = useState(false);

  const active =
    activeHref === link.href ||
    link.children?.some((c) => c.href === activeHref);

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
        {active ? (
          <span
            aria-hidden
            className="absolute inset-x-3 -bottom-0.5 h-[2px] rounded-full"
            style={{ backgroundColor: RED }}
          />
        ) : null}
      </a>
    );
  }

  useEffect(() => {
    if (!open) return undefined;
    const onPointerDown = (e) => {
      if (!e.target.closest?.(`[data-nav-menu="${link.label}"]`)) {
        setOpen(false);
      }
    };
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, link.label]);

  return (
    <div className="relative" data-nav-menu={link.label}>
      <div className={itemClass}>
        <a
          href={link.href}
          onClick={() => onNavigate(link.href)}
          aria-current={active ? "page" : undefined}
          className="relative inline-flex items-center"
        >
          {link.label}
          {active ? (
            <span
              aria-hidden
              className="absolute inset-x-0 -bottom-1.5 h-[2px] rounded-full"
              style={{ backgroundColor: RED }}
            />
          ) : null}
        </a>
        <button
          type="button"
          aria-expanded={open}
          aria-haspopup="menu"
          aria-label={`${link.label} menu`}
          className="inline-flex items-center"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setOpen((v) => !v);
          }}
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
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 2 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute left-0 top-full z-50 mt-2 min-w-[240px] overflow-hidden rounded-md border bg-white py-1 shadow-[0_10px_28px_-10px_rgba(0,0,0,0.2)]"
            style={{ borderColor: "#E5DFD6" }}
          >
            {link.children.map((child) => {
              const childActive =
                activeHref === child.href ||
                (typeof child.href === "string" &&
                  child.href !== "/" &&
                  activeHref?.startsWith?.(child.href));
              return (
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
                  className={`flex items-center justify-between gap-3 border-l-2 px-3.5 py-2.5 font-display text-[13px] font-medium tracking-[-0.01em] transition ${
                    childActive
                      ? "border-ember bg-[#F7F4EE] text-ink"
                      : "border-transparent text-[#5c564e] hover:border-[#D8D0C4] hover:bg-[#F7F4EE] hover:text-ink"
                  }`}
                >
                  <span>{child.label}</span>
                  <ArrowUpRight
                    size={12}
                    strokeWidth={2.4}
                    className="shrink-0 opacity-35"
                  />
                </a>
              );
            })}
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
        className={`min-h-[48px] rounded-xl px-3 py-3.5 font-display text-[15px] font-medium tracking-[-0.02em] transition sm:text-base ${
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
        className={`flex min-h-[48px] w-full items-center justify-between rounded-xl px-3 py-3.5 font-display text-[15px] font-medium tracking-[-0.02em] transition sm:text-base ${
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
            <div className="mt-1 flex flex-col border-l-2 border-[#E6E0D6] py-0.5 pl-2 sm:pl-3">
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
                  className="min-h-[42px] px-3 py-2.5 font-display text-sm font-medium text-[#5c564e] transition hover:bg-[#F7F4EE] hover:text-ink sm:text-[15px]"
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
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState(pathname || "/");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pathname && pathname !== "/") {
      setActiveHref(pathname);
      return undefined;
    }

    setActiveHref("/");

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
  }, [pathname]);

  useEffect(() => {
    if (!open) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const navigate = (href) => {
    setActiveHref(href);
    setOpen(false);
  };

  return (
    <header
      className="pointer-events-none fixed inset-x-0 top-0 z-50 w-full max-w-[100vw] overflow-x-clip px-3 pt-[max(0.375rem,env(safe-area-inset-top))] sm:px-4 sm:pt-2 lg:px-5 lg:pt-2.5"
    >
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
        className={`pointer-events-auto mx-auto flex w-full max-w-[min(1440px,calc(100vw-1.5rem))] items-center justify-between gap-2 rounded-full border border-white/50 px-2.5 py-1.5 shadow-[0_12px_40px_-18px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:gap-3 sm:px-3 sm:py-2 lg:hidden ${
          scrolled || open ? "bg-white/90" : "bg-white/70"
        }`}
      >
        <div className="min-w-0 max-w-[58%] shrink overflow-hidden sm:max-w-none">
          <Logo className="[&_img]:h-8 [&_img]:max-w-[140px] sm:[&_img]:h-10 sm:[&_img]:max-w-none" />
        </div>
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <TrialCta className="!hidden sm:!inline-flex scale-95" />
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-black/5 bg-white/90 text-ink sm:h-10 sm:w-10"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
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
            className="pointer-events-auto mx-auto mt-2 max-h-[min(78dvh,560px)] w-full max-w-[min(1440px,calc(100vw-1.5rem))] overflow-y-auto overscroll-contain rounded-[1.35rem] border bg-white/98 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-xl backdrop-blur-xl sm:rounded-[1.5rem] sm:p-4 lg:hidden"
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
                className="mt-2 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full px-4 py-3.5 font-display text-sm font-medium text-white sm:text-[15px]"
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

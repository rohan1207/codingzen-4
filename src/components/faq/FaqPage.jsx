"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Headphones,
  HelpCircle,
  Info,
  Layers,
  Lightbulb,
  MessageCircle,
  Minus,
  Play,
  Plus,
  Search,
} from "lucide-react";
import Em from "@/components/ui/Em";
import {
  countByCategory,
  faqCategories,
  faqHero,
  faqItems,
} from "@/data/faqPage";
import { CREAM, INK, LINE, RED, TXT } from "@/lib/tokens";

const categoryIcons = {
  info: Info,
  layers: Layers,
  headset: Headphones,
  play: Play,
  chat: MessageCircle,
};

const exploreIcons = {
  curriculum: Layers,
  sessions: Headphones,
  classes: CalendarDays,
  other: MessageCircle,
};

const float = (delay = 0) => ({
  y: [0, -7, 0],
  transition: { duration: 3.6, repeat: Infinity, ease: "easeInOut", delay },
});

export default function FaqPage() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("about");
  const [openId, setOpenId] = useState("what-is");

  const counts = useMemo(() => countByCategory(faqItems), []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return faqItems.filter((item) => {
      const inCat = active === "all" || item.category === active;
      if (!inCat) return false;
      if (!q) return true;
      return (
        item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q)
      );
    });
  }, [active, query]);

  const activeCat =
    faqCategories.find((c) => c.id === active) ?? faqCategories[0];

  const selectCategory = (id) => {
    setActive(id);
    const first = faqItems.find((i) =>
      id === "all" ? true : i.category === id,
    );
    setOpenId(first?.id ?? null);
  };

  return (
    <div style={{ backgroundColor: CREAM }}>
      {/* Hero */}
      <section className="relative overflow-x-clip pt-24 pb-8 sm:pt-28 sm:pb-10 lg:pt-32 lg:pb-12">
        <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 items-center gap-8 px-4 sm:gap-10 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-xl"
          >
            <span className="inline-flex rounded-full bg-[#F9D3CF] px-3 py-1 font-display text-[10px] font-medium uppercase tracking-[0.14em] text-[#C0392B]">
              {faqHero.eyebrow}
            </span>
            <h1 className="mt-4 font-display text-[clamp(2.1rem,6vw,3.6rem)] font-medium leading-[1.08] tracking-[-0.04em] text-ink">
              {faqHero.titleBefore} <Em>{faqHero.accent}</Em>
            </h1>
            <p
              className="mt-4 max-w-md text-[14px] leading-relaxed sm:text-[15px]"
              style={{ color: TXT }}
            >
              {faqHero.lead}
            </p>

            <form
              className="mt-6 flex items-center gap-2 rounded-full border bg-white py-1.5 pl-4 pr-1.5 shadow-[0_12px_30px_-22px_rgba(0,0,0,0.28)] sm:gap-3 sm:pl-5"
              style={{ borderColor: LINE }}
              onSubmit={(e) => e.preventDefault()}
            >
              <Search size={16} className="shrink-0 text-mute" strokeWidth={2.2} />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={faqHero.searchPlaceholder}
                aria-label="Search FAQ"
                className="min-w-0 flex-1 bg-transparent py-2.5 font-display text-[14px] text-ink outline-none placeholder:text-mute"
              />
              <button
                type="submit"
                aria-label="Search"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-white transition hover:brightness-110"
                style={{ backgroundColor: INK }}
              >
                <ArrowRight size={16} strokeWidth={2.5} />
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="relative mx-auto aspect-[5/4] w-full max-w-[460px] lg:max-w-none"
          >
            <div
              aria-hidden
              className="absolute left-[8%] top-[6%] h-[88%] w-[84%] rounded-full bg-[#D9CBF5]"
            />
            <div className="absolute inset-x-[12%] bottom-0 top-[8%] overflow-hidden rounded-[42%]">
              <Image
                src="/images/faq/hero-boy.jpg"
                alt="CodingZen student exploring answers"
                fill
                unoptimized
                priority
                className="object-cover object-top"
                sizes="(max-width: 1024px) 90vw, 460px"
              />
            </div>

            <motion.span
              animate={float(0.2)}
              className="absolute left-1 top-[24%] z-[2] grid h-11 w-11 place-items-center rounded-2xl text-white shadow-md sm:left-0"
              style={{ backgroundColor: RED }}
            >
              <HelpCircle size={18} strokeWidth={2.3} />
            </motion.span>

            <motion.span
              animate={float(0.7)}
              className="absolute bottom-[20%] right-2 z-[2] grid h-10 w-10 place-items-center rounded-xl text-white shadow-md sm:right-4"
              style={{ backgroundColor: "#7C5CBF" }}
            >
              <span className="font-mono text-[11px] font-semibold tracking-tight">
                {"</>"}
              </span>
            </motion.span>
          </motion.div>
        </div>
      </section>

      {/* Category pills */}
      <section className="relative overflow-x-clip pb-6 sm:pb-8">
        <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-8 lg:px-12">
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
            {faqCategories.map((cat, i) => {
              const Icon = categoryIcons[cat.icon] ?? Info;
              const isActive = active === cat.id;
              return (
                <motion.li
                  key={cat.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                >
                  <button
                    type="button"
                    onClick={() => selectCategory(cat.id)}
                    className={`flex h-full w-full flex-col items-start gap-3 rounded-[1.25rem] border p-4 text-left transition sm:rounded-[1.4rem] sm:p-5 ${
                      isActive
                        ? "border-transparent shadow-[0_14px_30px_-18px_rgba(0,0,0,0.35)]"
                        : "hover:brightness-[0.98]"
                    }`}
                    style={{
                      backgroundColor: cat.tint,
                      borderColor: isActive ? "transparent" : LINE,
                    }}
                  >
                    <span
                      className="grid h-10 w-10 place-items-center rounded-2xl text-white"
                      style={{ backgroundColor: cat.iconBg }}
                    >
                      <Icon size={17} strokeWidth={2.1} />
                    </span>
                    <span className="font-display text-[13px] font-medium leading-snug tracking-[-0.02em] text-ink sm:text-[14px]">
                      {cat.label}
                    </span>
                  </button>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Sidebar + accordion */}
      <section className="relative overflow-x-clip pb-8 sm:pb-10 lg:pb-12">
        <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 gap-5 px-4 sm:gap-6 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-7 lg:px-12">
          {/* Sidebar */}
          <aside className="space-y-4">
            <nav
              aria-label="FAQ categories"
              className="overflow-hidden rounded-[1.25rem] border bg-white p-2 sm:rounded-[1.4rem]"
              style={{ borderColor: LINE }}
            >
              <button
                type="button"
                onClick={() => selectCategory("all")}
                className={`flex w-full items-center justify-between rounded-xl px-3.5 py-3 font-display text-[13px] font-medium transition sm:text-[14px] ${
                  active === "all"
                    ? "text-white"
                    : "text-ink hover:bg-[#F7F4EE]"
                }`}
                style={
                  active === "all" ? { backgroundColor: RED } : undefined
                }
              >
                <span>All Questions</span>
                <span
                  className={`tabular-nums ${
                    active === "all" ? "text-white/80" : "text-mute"
                  }`}
                >
                  {counts.all}
                </span>
              </button>
              {faqCategories.map((cat) => {
                const Icon = categoryIcons[cat.icon] ?? Info;
                const isActive = active === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => selectCategory(cat.id)}
                    className={`mt-0.5 flex w-full items-center gap-2.5 rounded-xl px-3.5 py-3 text-left font-display text-[13px] font-medium transition sm:text-[14px] ${
                      isActive
                        ? "text-white"
                        : "text-ink hover:bg-[#F7F4EE]"
                    }`}
                    style={isActive ? { backgroundColor: RED } : undefined}
                  >
                    <Icon
                      size={15}
                      strokeWidth={2.2}
                      className={isActive ? "text-white" : "text-mute"}
                    />
                    <span className="min-w-0 flex-1 leading-snug">
                      {cat.label}
                    </span>
                    <span
                      className={`shrink-0 tabular-nums ${
                        isActive ? "text-white/80" : "text-mute"
                      }`}
                    >
                      {counts[cat.id]}
                    </span>
                  </button>
                );
              })}
            </nav>

            <div className="rounded-[1.4rem] bg-[#E6D9F7] p-5 sm:rounded-[1.5rem] sm:p-6">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/80 text-[#7C5CBF]">
                <Lightbulb size={20} strokeWidth={2} />
              </span>
              <h3 className="mt-3 font-display text-[1.05rem] font-medium tracking-[-0.02em] text-ink">
                Can&apos;t find what you&apos;re looking for?
              </h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-mute sm:text-[14px]">
                Our team is here to help you with any specific queries.
              </p>
              <a
                href="/contact"
                className="mt-4 inline-flex min-h-[42px] items-center gap-2 rounded-full px-4 py-2.5 font-display text-[13px] font-medium text-white transition hover:brightness-110"
                style={{ backgroundColor: INK }}
              >
                Contact Us
                <ArrowUpRight size={14} strokeWidth={2.5} />
              </a>
            </div>
          </aside>

          {/* Accordion panel */}
          <div>
            <div className="mb-5 flex items-start justify-between gap-4 sm:mb-6">
              <div>
                <p className="font-display text-[11px] font-medium uppercase tracking-[0.16em] text-ember">
                  {active === "all" ? "All questions" : activeCat.label}
                </p>
                <h2 className="mt-1 font-display text-[clamp(1.45rem,3.2vw,2.1rem)] font-medium tracking-[-0.03em] text-ink">
                  {active === "all" ? "All Questions" : activeCat.label}
                </h2>
              </div>
              <div className="relative hidden h-20 w-24 shrink-0 sm:block">
                <Image
                  src="/images/faq/books.jpg"
                  alt=""
                  fill
                  unoptimized
                  className="object-contain"
                  sizes="96px"
                />
              </div>
            </div>

            {filtered.length === 0 ? (
              <div
                className="rounded-[1.25rem] border bg-white px-5 py-10 text-center"
                style={{ borderColor: LINE }}
              >
                <p className="font-display text-[1.05rem] font-medium text-ink">
                  No matching questions
                </p>
                <p className="mt-1 text-[14px] text-mute">
                  Try another search or pick a different category.
                </p>
              </div>
            ) : (
              <ul className="space-y-2.5 sm:space-y-3">
                {filtered.map((item) => {
                  const isOpen = openId === item.id;
                  return (
                    <li
                      key={item.id}
                      className={`overflow-hidden rounded-[1.15rem] border transition sm:rounded-[1.25rem] ${
                        isOpen ? "bg-[#FCE8E6]" : "bg-white"
                      }`}
                      style={{ borderColor: isOpen ? "#F3C4BE" : LINE }}
                    >
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => setOpenId(isOpen ? null : item.id)}
                        className="flex w-full items-start gap-3 px-4 py-4 text-left sm:gap-4 sm:px-5 sm:py-4.5"
                      >
                        <span
                          className={`mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full transition ${
                            isOpen
                              ? "text-white"
                              : "bg-[#F3EEE6] text-mute"
                          }`}
                          style={
                            isOpen ? { backgroundColor: RED } : undefined
                          }
                          aria-hidden
                        >
                          {isOpen ? (
                            <Minus size={14} strokeWidth={2.6} />
                          ) : (
                            <Plus size={14} strokeWidth={2.4} />
                          )}
                        </span>
                        <span className="min-w-0 flex-1 font-display text-[14px] font-medium leading-snug tracking-[-0.02em] text-ink sm:text-[15px]">
                          {item.q}
                        </span>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen ? (
                          <motion.div
                            key="a"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <p
                              className="px-4 pb-4 pl-[3.25rem] text-[13px] leading-relaxed sm:px-5 sm:pb-5 sm:pl-[4.25rem] sm:text-[14px]"
                              style={{ color: TXT }}
                            >
                              {item.a}
                            </p>
                          </motion.div>
                        ) : null}
                      </AnimatePresence>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </section>

      {/* Explore more */}
      <section className="relative overflow-x-clip pb-8 sm:pb-10">
        <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-8 lg:px-12">
          <div className="flex items-center gap-4">
            <span
              aria-hidden
              className="h-px flex-1"
              style={{ backgroundColor: LINE }}
            />
            <p className="shrink-0 font-display text-[11px] font-medium uppercase tracking-[0.16em] text-mute">
              Explore more topics
            </p>
            <span
              aria-hidden
              className="h-px flex-1"
              style={{ backgroundColor: LINE }}
            />
          </div>

          <ul className="mt-5 grid grid-cols-1 gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
            {faqCategories
              .filter((c) => c.id !== "about")
              .map((cat, i) => {
                const Icon = exploreIcons[cat.id] ?? Layers;
                return (
                  <motion.li
                    key={cat.id}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <button
                      type="button"
                      onClick={() => {
                        selectCategory(cat.id);
                        window.scrollTo({ top: 380, behavior: "smooth" });
                      }}
                      className="relative flex h-full w-full flex-col rounded-[1.35rem] p-5 text-left transition hover:brightness-[0.98] sm:rounded-[1.5rem] sm:p-6"
                      style={{ backgroundColor: cat.exploreTint }}
                    >
                      <span
                        className="grid h-11 w-11 place-items-center rounded-2xl text-white"
                        style={{ backgroundColor: cat.iconBg }}
                      >
                        <Icon size={18} strokeWidth={2} />
                      </span>
                      <h3 className="mt-4 font-display text-[1rem] font-medium tracking-[-0.02em] text-ink">
                        {cat.label}
                      </h3>
                      <p className="mt-1.5 flex-1 text-[13px] leading-relaxed text-mute">
                        {cat.exploreBody}
                      </p>
                      <span
                        className="mt-4 grid h-9 w-9 place-items-center rounded-full border bg-white text-ink"
                        style={{ borderColor: LINE }}
                      >
                        <ArrowRight size={14} strokeWidth={2.4} />
                      </span>
                    </button>
                  </motion.li>
                );
              })}
          </ul>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative overflow-x-clip pb-10 sm:pb-12 lg:pb-14">
        <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-start gap-5 rounded-[1.5rem] bg-[#E6D9F7] px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:rounded-[1.75rem] sm:px-8 sm:py-7"
          >
            <div className="flex items-start gap-4 sm:items-center">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white/85 text-[#7C5CBF] shadow-sm">
                <Headphones size={26} strokeWidth={1.9} />
              </span>
              <div>
                <h2 className="font-display text-[clamp(1.25rem,3vw,1.75rem)] font-medium tracking-[-0.02em] text-ink">
                  Still have <Em>questions?</Em>
                </h2>
                <p className="mt-1 max-w-md text-[13px] leading-relaxed text-mute sm:text-[14px]">
                  Get in touch with our expert team — we&apos;d be happy to
                  help resolve your queries at the earliest.
                </p>
              </div>
            </div>
            <a
              href="/contact"
              className="inline-flex min-h-[46px] shrink-0 items-center gap-2 rounded-full px-5 py-3 font-display text-[14px] font-medium text-white transition hover:brightness-110"
              style={{ backgroundColor: INK }}
            >
              Contact Us
              <ArrowUpRight size={15} strokeWidth={2.5} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

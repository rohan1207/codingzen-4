"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Box,
  Bot,
  CalendarDays,
  Clock3,
  Code2,
  Flame,
  Grid2x2,
  Heart,
  Lightbulb,
  Mail,
  Rocket,
  Search,
  Sparkles,
  Users,
} from "lucide-react";
import Em from "@/components/ui/Em";
import {
  blogHero,
  blogNewsletter,
  blogTopics,
  featuredPost,
  latestPosts,
  popularReads,
} from "@/data/blog";
import { CREAM, INK, LINE, RED, TXT } from "@/lib/tokens";

const topicIcons = {
  grid: Grid2x2,
  code: Code2,
  sparkles: Sparkles,
  box: Box,
  users: Users,
  heart: Heart,
  rocket: Rocket,
};

const categoryColors = {
  Coding: { bg: "#D9ECF8", text: "#0369A1" },
  AI: { bg: "#EDE4FB", text: "#6D28D9" },
  Projects: { bg: "#FFF3D0", text: "#A16207" },
  "Parent Guide": { bg: "#FCE4EC", text: "#C0392B" },
  "Career & Future": { bg: "#F6D7B8", text: "#C2410C" },
  "Student Stories": { bg: "#E4D9F5", text: "#6D28D9" },
};

const float = (delay = 0) => ({
  y: [0, -8, 0],
  transition: { duration: 3.6, repeat: Infinity, ease: "easeInOut", delay },
});

export default function BlogPage() {
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState("all");
  const [sort, setSort] = useState("latest");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const posts = useMemo(() => {
    let list = [...latestPosts];
    if (topic !== "all") {
      list = list.filter((p) => p.categoryId === topic);
    }
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q),
      );
    }
    if (sort === "shortest") {
      list.sort((a, b) => a.readMins - b.readMins);
    }
    return list;
  }, [query, topic, sort]);

  return (
    <div style={{ backgroundColor: CREAM }}>
      {/* Hero */}
      <section className="relative overflow-x-clip pt-24 pb-8 sm:pt-28 sm:pb-10 lg:pt-32 lg:pb-12">
        <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 items-center gap-8 px-4 sm:gap-10 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-xl"
          >
            <h1 className="font-display text-[clamp(2.1rem,6vw,3.75rem)] font-medium leading-[1.08] tracking-[-0.04em] text-ink">
              {blogHero.titleBefore} <Em>{blogHero.accent}</Em>
            </h1>
            <p
              className="mt-4 max-w-md text-[14px] leading-relaxed sm:text-[15px]"
              style={{ color: TXT }}
            >
              {blogHero.lead}
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="mt-6 flex items-center gap-2 rounded-full border bg-white p-1.5 shadow-[0_14px_36px_-24px_rgba(0,0,0,0.35)] sm:mt-7"
              style={{ borderColor: LINE }}
            >
              <Search size={16} className="ml-3 shrink-0 text-mute" />
              <label htmlFor="blog-search" className="sr-only">
                Search blogs
              </label>
              <input
                id="blog-search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search blogs, topics or guides..."
                className="min-w-0 flex-1 bg-transparent py-2.5 font-display text-[14px] text-ink outline-none placeholder:text-mute"
              />
              <button
                type="submit"
                aria-label="Search"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-white"
                style={{ backgroundColor: INK }}
              >
                <ArrowRight size={16} strokeWidth={2.4} />
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="relative mx-auto aspect-[5/4] w-full max-w-[480px] lg:max-w-none"
          >
            <div
              aria-hidden
              className="absolute left-[8%] top-[6%] h-[88%] w-[84%] rounded-[48%_52%_45%_55%/50%_42%_58%_50%] bg-[#D9C8F0]"
            />
            <div className="absolute inset-x-[10%] bottom-0 top-[8%] overflow-hidden">
              <Image
                src="/images/blog/hero-girl.jpg"
                alt="Young coder reading CodingZen blogs"
                fill
                unoptimized
                priority
                className="object-contain object-bottom"
                sizes="(max-width: 1024px) 90vw, 480px"
              />
            </div>

            <motion.span
              animate={float(0)}
              className="absolute left-0 top-[22%] z-[2] grid h-11 w-11 place-items-center rounded-full bg-white text-[#7C5CBF] shadow-md sm:-left-1"
            >
              <Code2 size={18} strokeWidth={2.2} />
            </motion.span>
            <motion.span
              animate={float(0.4)}
              className="absolute right-1 top-[12%] z-[2] grid h-11 w-11 place-items-center rounded-full bg-white text-[#D97706] shadow-md sm:right-0"
            >
              <Lightbulb size={18} strokeWidth={2.2} />
            </motion.span>
            <motion.span
              animate={float(0.85)}
              className="absolute bottom-[14%] right-0 z-[2] grid h-11 w-11 place-items-center rounded-full bg-white text-[#E84438] shadow-md sm:-right-1"
            >
              <Bot size={18} strokeWidth={2.2} />
            </motion.span>
          </motion.div>
        </div>
      </section>

      {/* Topics */}
      <section className="relative overflow-x-clip pb-6 sm:pb-8">
        <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-8 lg:px-12">
          <p className="mb-3 font-display text-[11px] font-medium uppercase tracking-[0.16em] text-mute">
            Explore by topic
          </p>
          <div
            className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {blogTopics.map((item) => {
              const Icon = topicIcons[item.icon] ?? Grid2x2;
              const on = topic === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setTopic(item.id)}
                  className={`inline-flex min-h-[40px] shrink-0 items-center gap-2 rounded-full border px-3.5 py-2 font-display text-[13px] font-medium transition ${
                    on
                      ? "border-transparent text-white"
                      : "border-black/8 bg-white text-ink hover:border-black/15"
                  }`}
                  style={on ? { backgroundColor: RED } : undefined}
                >
                  <Icon size={14} strokeWidth={2.2} />
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured + Popular */}
      <section className="relative overflow-x-clip pb-8 sm:pb-10">
        <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 gap-5 px-4 sm:gap-6 sm:px-8 lg:grid-cols-[1.35fr_0.85fr] lg:px-12">
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[1.5rem] bg-[#E9DFF8] p-5 sm:rounded-[1.75rem] sm:p-7 lg:p-8"
          >
            <div className="relative z-[1] max-w-md">
              <span
                className="inline-flex rounded-full px-2.5 py-1 font-display text-[10px] font-medium uppercase tracking-[0.14em] text-white"
                style={{ backgroundColor: RED }}
              >
                {featuredPost.tag}
              </span>
              <h2 className="mt-3 font-display text-[clamp(1.45rem,3.5vw,2.15rem)] font-medium leading-[1.15] tracking-[-0.03em] text-ink">
                {featuredPost.titleBefore} <Em>{featuredPost.accent}</Em>
              </h2>
              <p
                className="mt-3 text-[14px] leading-relaxed"
                style={{ color: TXT }}
              >
                {featuredPost.excerpt}
              </p>
              <div className="mt-4 flex items-center gap-2.5">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-ember shadow-sm">
                  <Sparkles size={14} />
                </span>
                <div>
                  <p className="font-display text-[13px] font-medium text-ink">
                    {featuredPost.author}
                  </p>
                  <p className="text-[12px] text-mute">
                    {featuredPost.readMins} min read
                  </p>
                </div>
              </div>
              <a
                href={featuredPost.href}
                className="mt-5 inline-flex min-h-[44px] items-center gap-2 rounded-full px-5 py-2.5 font-display text-[13px] font-medium text-white transition hover:brightness-110"
                style={{ backgroundColor: INK }}
              >
                Read full article
                <ArrowUpRight size={14} strokeWidth={2.5} />
              </a>
            </div>

            <motion.div
              aria-hidden
              animate={float(0.2)}
              className="pointer-events-none absolute -right-2 bottom-2 h-[150px] w-[150px] sm:right-4 sm:bottom-4 sm:h-[190px] sm:w-[190px]"
            >
              <Image
                src={featuredPost.image}
                alt=""
                fill
                unoptimized
                className="object-contain drop-shadow-[0_16px_28px_rgba(109,40,217,0.22)]"
                sizes="190px"
              />
            </motion.div>
          </motion.article>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="rounded-[1.5rem] border bg-white p-4 sm:rounded-[1.75rem] sm:p-5"
            style={{ borderColor: LINE }}
          >
            <div className="mb-4 flex items-center gap-2">
              <Flame size={16} className="text-ember" />
              <h3 className="font-display text-[1.05rem] font-medium tracking-[-0.02em] text-ink">
                Popular Reads
              </h3>
            </div>
            <ul className="space-y-3">
              {popularReads.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="group flex items-center gap-3 rounded-2xl p-2 transition hover:bg-[#FAF6F1]"
                  >
                    <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-[#F3EEE6]">
                      <Image
                        src={item.thumb}
                        alt=""
                        fill
                        unoptimized
                        className="object-cover"
                        sizes="56px"
                      />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-display text-[13px] font-medium leading-snug tracking-[-0.02em] text-ink sm:text-[14px]">
                        {item.title}
                      </span>
                      <span className="mt-1 block text-[12px] text-mute">
                        {item.readMins} min read
                      </span>
                    </span>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border text-ink transition group-hover:bg-ink group-hover:text-white"
                      style={{ borderColor: LINE }}
                    >
                      <ArrowRight size={14} strokeWidth={2.4} />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Latest grid */}
      <section className="relative overflow-x-clip pb-8 sm:pb-10 lg:pb-12">
        <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-8 lg:px-12">
          <div className="mb-5 flex flex-col gap-3 sm:mb-6 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-display text-[clamp(1.45rem,3.5vw,2.1rem)] font-medium tracking-[-0.03em] text-ink">
              Latest from CodingZen
            </h2>
            <label className="inline-flex items-center gap-2 font-display text-[13px] text-mute">
              Sort by:
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="rounded-full border bg-white px-3 py-1.5 text-ink outline-none"
                style={{ borderColor: LINE }}
              >
                <option value="latest">Latest</option>
                <option value="shortest">Shortest read</option>
              </select>
            </label>
          </div>

          {posts.length === 0 ? (
            <p className="rounded-[1.25rem] border bg-white px-5 py-8 text-center text-[14px] text-mute"
              style={{ borderColor: LINE }}
            >
              No posts match that search. Try another topic or keyword.
            </p>
          ) : (
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
              {posts.map((post, i) => {
                const chip = categoryColors[post.category] ?? {
                  bg: "#F3EEE6",
                  text: "#555",
                };
                return (
                  <motion.li
                    key={post.id}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                  >
                    <a
                      href={`#${post.id}`}
                      className="group flex h-full flex-col overflow-hidden rounded-[1.35rem] border bg-white shadow-[0_18px_40px_-28px_rgba(0,0,0,0.22)] transition hover:-translate-y-0.5 sm:rounded-[1.5rem]"
                      style={{ borderColor: LINE }}
                    >
                      <div
                        className="relative aspect-[16/10] overflow-hidden"
                        style={{ backgroundColor: post.tint }}
                      >
                        <Image
                          src={post.thumb}
                          alt=""
                          fill
                          unoptimized
                          className="object-cover transition duration-500 group-hover:scale-[1.03]"
                          sizes="(max-width: 1024px) 50vw, 360px"
                        />
                        <span
                          className="absolute bottom-3 left-3 rounded-full px-2.5 py-1 font-display text-[10px] font-medium uppercase tracking-[0.12em]"
                          style={{ backgroundColor: chip.bg, color: chip.text }}
                        >
                          {post.category}
                        </span>
                      </div>
                      <div className="flex flex-1 flex-col p-4 sm:p-5">
                        <h3 className="font-display text-[1.05rem] font-medium leading-snug tracking-[-0.02em] text-ink sm:text-[1.1rem]">
                          {post.title}
                        </h3>
                        <p className="mt-2 line-clamp-2 text-[13px] leading-relaxed text-mute sm:text-[14px]">
                          {post.excerpt}
                        </p>
                        <div className="mt-auto flex items-center justify-between gap-3 pt-4">
                          <div className="flex flex-wrap items-center gap-3 text-[12px] text-mute">
                            <span className="inline-flex items-center gap-1.5">
                              <CalendarDays size={13} />
                              {post.date}
                            </span>
                            <span className="inline-flex items-center gap-1.5">
                              <Clock3 size={13} />
                              {post.readMins} min
                            </span>
                          </div>
                          <span
                            className="grid h-9 w-9 place-items-center rounded-full border text-ink transition group-hover:bg-ink group-hover:text-white"
                            style={{ borderColor: LINE }}
                          >
                            <ArrowRight size={14} strokeWidth={2.4} />
                          </span>
                        </div>
                      </div>
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="relative overflow-x-clip pb-10 sm:pb-12 lg:pb-14">
        <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[1.5rem] bg-[#E6D9F7] px-5 py-7 sm:rounded-[1.85rem] sm:px-8 sm:py-8 lg:px-10"
          >
            <div className="relative z-[1] flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
              <div className="flex items-center gap-4 sm:gap-5">
                <div className="relative h-16 w-16 shrink-0 sm:h-20 sm:w-20">
                  <Image
                    src="/images/blog/newsletter-envelope.jpg"
                    alt=""
                    fill
                    unoptimized
                    className="object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.15)]"
                    sizes="80px"
                  />
                </div>
                <div className="max-w-md">
                  <h2 className="font-display text-[clamp(1.35rem,3.2vw,2rem)] font-medium tracking-[-0.03em] text-ink">
                    {blogNewsletter.titleBefore}{" "}
                    <Em>{blogNewsletter.accent}</Em>
                  </h2>
                  <p
                    className="mt-1.5 text-[14px] leading-relaxed"
                    style={{ color: TXT }}
                  >
                    {blogNewsletter.body}
                  </p>
                </div>
              </div>

              {subscribed ? (
                <p className="font-display text-[14px] font-medium text-ink">
                  You’re on the list — thanks for subscribing.
                </p>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubscribed(true);
                  }}
                  className="flex w-full max-w-md flex-col gap-2.5 sm:flex-row sm:items-center"
                >
                  <label htmlFor="blog-email" className="sr-only">
                    Email address
                  </label>
                  <div
                    className="flex min-h-[48px] flex-1 items-center gap-2 rounded-full border bg-white px-4"
                    style={{ borderColor: LINE }}
                  >
                    <Mail size={15} className="shrink-0 text-mute" />
                    <input
                      id="blog-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full bg-transparent py-3 font-display text-[14px] text-ink outline-none placeholder:text-mute"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex min-h-[48px] shrink-0 items-center justify-center gap-2 rounded-full px-5 py-3 font-display text-[14px] font-medium text-white transition hover:brightness-110"
                    style={{ backgroundColor: INK }}
                  >
                    Subscribe
                    <ArrowUpRight size={15} strokeWidth={2.5} />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Clock3,
  Code2,
  Globe2,
  GraduationCap,
  Handshake,
  Headphones,
  MapPin,
  Users,
} from "lucide-react";
import Em from "@/components/ui/Em";
import {
  centers,
  contactChannels,
  contactHero,
  offices,
  socialLinks,
} from "@/data/contact";
import { CREAM, INK, LINE, RED, TXT } from "@/lib/tokens";

const channelIcons = {
  users: Users,
  grad: GraduationCap,
  handshake: Handshake,
};

const officeIcons = {
  pin: MapPin,
  building: Building2,
};

function SocialGlyph({ name, size = 15 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": true,
  };
  if (name === "facebook") {
    return (
      <svg {...common}>
        <path d="M14 8.2h2.2V5H14c-2.5 0-4.1 1.7-4.1 4.3V11H7.7v3.2h2.2V19h3.3v-4.8h2.5l.5-3.2h-3V9.6c0-.8.3-1.4 1.3-1.4Z" />
      </svg>
    );
  }
  if (name === "instagram") {
    return (
      <svg {...common}>
        <path d="M12 7.2A4.8 4.8 0 1 0 12 16.8 4.8 4.8 0 0 0 12 7.2Zm0 7.9a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2Zm5.1-8.2a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0ZM12 3.5c-2.3 0-2.6 0-3.5.1-2.2.1-4.1 2-4.2 4.2-.1.9-.1 1.2-.1 3.5s0 2.6.1 3.5c.1 2.2 2 4.1 4.2 4.2.9.1 1.2.1 3.5.1s2.6 0 3.5-.1c2.2-.1 4.1-2 4.2-4.2.1-.9.1-1.2.1-3.5s0-2.6-.1-3.5c-.1-2.2-2-4.1-4.2-4.2-.9-.1-1.2-.1-3.5-.1Zm0 1.5c2.2 0 2.5 0 3.4.1 1.6.1 2.9 1.4 3 3 .1.9.1 1.1.1 3.4s0 2.5-.1 3.4c-.1 1.6-1.4 2.9-3 3-.9.1-1.1.1-3.4.1s-2.5 0-3.4-.1c-1.6-.1-2.9-1.4-3-3-.1-.9-.1-1.1-.1-3.4s0-2.5.1-3.4c.1-1.6 1.4-2.9 3-3 .9-.1 1.2-.1 3.4-.1Z" />
      </svg>
    );
  }
  if (name === "twitter") {
    return (
      <svg {...common}>
        <path d="M18.2 3H21l-6.5 7.4L22 21h-5.7l-4.5-5.9L6.4 21H3.6l7-8L2.5 3h5.8l4 5.4L18.2 3Zm-1 16.3h1.6L7 4.6H5.3l11.9 14.7Z" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M21.6 7.2a2.7 2.7 0 0 0-1.9-1.9C18 5 12 5 12 5s-6 0-7.7.3A2.7 2.7 0 0 0 2.4 7.2 28.2 28.2 0 0 0 2 12a28.2 28.2 0 0 0 .4 4.8 2.7 2.7 0 0 0 1.9 1.9C6 19 12 19 12 19s6 0 7.7-.3a2.7 2.7 0 0 0 1.9-1.9A28.2 28.2 0 0 0 22 12a28.2 28.2 0 0 0-.4-4.8ZM10 15.2V8.8L15.5 12 10 15.2Z" />
    </svg>
  );
}

const float = (delay = 0) => ({
  y: [0, -7, 0],
  transition: { duration: 3.6, repeat: Infinity, ease: "easeInOut", delay },
});

const fieldClass =
  "mt-2 w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3.5 font-display text-[14px] text-white outline-none transition placeholder:text-white/35 focus:border-ember/50 focus:ring-2 focus:ring-ember/20";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

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
              {contactHero.eyebrow}
            </span>
            <h1 className="mt-4 font-display text-[clamp(2.1rem,6vw,3.6rem)] font-medium leading-[1.08] tracking-[-0.04em] text-ink">
              {contactHero.titleBefore} <Em>{contactHero.accent}</Em>
            </h1>
            <p
              className="mt-4 max-w-md text-[14px] leading-relaxed sm:text-[15px]"
              style={{ color: TXT }}
            >
              {contactHero.lead}
            </p>

            <div className="mt-6 flex items-center gap-2.5">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="grid h-10 w-10 place-items-center rounded-full bg-ink text-white transition hover:bg-ember"
                >
                  <SocialGlyph name={item.icon} size={15} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="relative mx-auto aspect-[5/4] w-full max-w-[480px] lg:max-w-none"
          >
            <div
              aria-hidden
              className="absolute left-[8%] top-[6%] h-[88%] w-[84%] rounded-[48%_52%_45%_55%/50%_42%_58%_50%] bg-[#CDE7F5]"
            />
            <div className="absolute inset-x-[10%] bottom-0 top-[8%] overflow-hidden">
              <Image
                src="/images/contact/hero-boy.jpg"
                alt="Talk to the CodingZen team"
                fill
                unoptimized
                priority
                className="object-contain object-bottom"
                sizes="(max-width: 1024px) 90vw, 480px"
              />
            </div>

            <motion.div
              animate={float(0.2)}
              className="absolute left-0 top-[28%] z-[2] inline-flex items-center gap-2 rounded-full border border-white/80 bg-white px-3 py-2 shadow-[0_12px_28px_-14px_rgba(0,0,0,0.3)] sm:-left-1"
            >
              <span className="grid h-7 w-7 place-items-center rounded-full bg-[#EDE4FB] text-[#7C5CBF]">
                <Headphones size={13} strokeWidth={2.3} />
              </span>
              <span className="pr-1">
                <span className="block font-display text-[12px] font-medium text-ink">
                  Talk to our team
                </span>
                <span className="mt-0.5 flex items-center gap-1.5 text-[11px] text-mute">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  We&apos;re here to help
                </span>
              </span>
            </motion.div>

            <motion.span
              animate={float(0.7)}
              className="absolute bottom-[16%] right-0 z-[2] grid h-11 w-11 place-items-center rounded-full text-white shadow-md sm:right-2"
              style={{ backgroundColor: RED }}
            >
              <Code2 size={16} strokeWidth={2.4} />
            </motion.span>
          </motion.div>
        </div>
      </section>

      {/* Channels + form */}
      <section className="relative overflow-x-clip pb-8 sm:pb-10">
        <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 gap-5 px-4 sm:gap-6 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-12">
          <div className="space-y-3 sm:space-y-4">
            {contactChannels.map((item, i) => {
              const Icon = channelIcons[item.icon] ?? Users;
              return (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3 rounded-[1.25rem] border bg-white p-4 shadow-[0_14px_36px_-28px_rgba(0,0,0,0.28)] sm:gap-4 sm:rounded-[1.4rem] sm:p-5"
                  style={{ borderColor: LINE }}
                >
                  <span
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl text-white"
                    style={{ backgroundColor: item.iconBg }}
                  >
                    <Icon size={18} strokeWidth={2} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-[1.05rem] font-medium tracking-[-0.02em] text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-mute sm:text-[14px]">
                      {item.body}
                    </p>
                    <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] font-medium text-ink">
                      <a href={item.phoneHref} className="hover:text-ember">
                        {item.phone}
                      </a>
                      <a
                        href={`mailto:${item.email}`}
                        className="hover:text-ember"
                      >
                        {item.email}
                      </a>
                    </div>
                  </div>
                  <a
                    href={`mailto:${item.email}`}
                    aria-label={`Email ${item.title}`}
                    className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full border text-ink transition hover:bg-ink hover:text-white"
                    style={{ borderColor: LINE }}
                  >
                    <ArrowRight size={14} strokeWidth={2.4} />
                  </a>
                </motion.article>
              );
            })}

            <div className="grid grid-cols-1 gap-3 pt-1 sm:grid-cols-2 sm:gap-4">
              {offices.map((office) => {
                const Icon = officeIcons[office.icon] ?? MapPin;
                return (
                  <div
                    key={office.title}
                    className="rounded-[1.25rem] border bg-white p-4 sm:p-5"
                    style={{ borderColor: LINE }}
                  >
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-[#F9D3CF] text-ember">
                      <Icon size={16} strokeWidth={2.2} />
                    </span>
                    <h3 className="mt-3 font-display text-[14px] font-medium tracking-[-0.02em] text-ink">
                      {office.title}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-mute">
                      {office.lines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[1.5rem] bg-[#1A1525] p-5 text-white sm:rounded-[1.75rem] sm:p-7 lg:p-8"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-40 opacity-80"
              style={{
                background:
                  "radial-gradient(120% 90% at 20% 100%, rgba(124,92,191,0.45), transparent 55%), radial-gradient(90% 80% at 90% 100%, rgba(232,68,56,0.28), transparent 50%)",
              }}
            />
            <div className="relative z-[1]">
              <p className="font-display text-[11px] font-medium uppercase tracking-[0.16em] text-white/45">
                Reach out to us
              </p>
              <h2 className="mt-2 font-display text-[clamp(1.45rem,3vw,1.95rem)] font-medium tracking-[-0.03em]">
                Send us a message{" "}
                <span className="text-ember" aria-hidden>
                  ✦
                </span>
              </h2>

              {sent ? (
                <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 px-5 py-10 text-center">
                  <p className="font-display text-xl font-medium">Message sent</p>
                  <p className="mt-2 text-[14px] text-white/55">
                    We&apos;ll get back to you within a day.
                  </p>
                </div>
              ) : (
                <form
                  className="mt-6 space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                >
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-first"
                        className="font-display text-[12px] text-white/55"
                      >
                        First Name <span className="text-ember">*</span>
                      </label>
                      <input
                        id="contact-first"
                        name="firstName"
                        required
                        className={fieldClass}
                        placeholder="Anjali"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-last"
                        className="font-display text-[12px] text-white/55"
                      >
                        Last Name <span className="text-ember">*</span>
                      </label>
                      <input
                        id="contact-last"
                        name="lastName"
                        required
                        className={fieldClass}
                        placeholder="Mehra"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="font-display text-[12px] text-white/55"
                      >
                        Email <span className="text-ember">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        className={fieldClass}
                        placeholder="you@email.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="font-display text-[12px] text-white/55"
                      >
                        Phone <span className="text-ember">*</span>
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        required
                        className={fieldClass}
                        placeholder="+91 98xxx xxxxx"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="font-display text-[12px] text-white/55"
                    >
                      Your Message <span className="text-ember">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={4}
                      className={`${fieldClass} resize-none`}
                      placeholder="Tell us how we can help..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3.5 font-display text-[14px] font-medium text-ink transition hover:bg-[#f3f3f3]"
                  >
                    Send Message
                    <ArrowUpRight size={15} strokeWidth={2.5} />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Centers */}
      <section
        id="centers"
        className="relative scroll-mt-28 overflow-x-clip pb-8 sm:pb-10 lg:pb-12"
      >
        <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-8 lg:px-12">
          <span className="inline-flex rounded-full bg-[#F9D3CF] px-3 py-1 font-display text-[10px] font-medium uppercase tracking-[0.14em] text-[#C0392B]">
            Our centers
          </span>
          <h2 className="mt-3 font-display text-[clamp(1.55rem,4vw,2.55rem)] font-medium leading-[1.12] tracking-[-0.03em] text-ink">
            In-Person Classes : Our Center Locations
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-5 lg:mt-7 lg:grid-cols-[0.95fr_1.05fr] lg:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative min-h-[280px] overflow-hidden rounded-[1.5rem] border bg-white sm:min-h-[340px] sm:rounded-[1.75rem]"
              style={{ borderColor: LINE }}
            >
              <Image
                src="/images/contact/map.jpg"
                alt="CodingZen center locations map"
                fill
                unoptimized
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 520px"
              />
              <div className="absolute left-4 top-4 max-w-[220px] rounded-2xl border bg-white p-3 shadow-lg sm:left-5 sm:top-5"
                style={{ borderColor: LINE }}
              >
                <div className="relative mb-2 h-16 w-full overflow-hidden rounded-xl">
                  <Image
                    src="/images/contact/center-kailash.jpg"
                    alt=""
                    fill
                    unoptimized
                    className="object-cover"
                    sizes="200px"
                  />
                </div>
                <p className="font-display text-[13px] font-medium text-ink">
                  CodingZen Kailash
                </p>
                <p className="mt-0.5 text-[12px] text-mute">
                  Greater Kailash I, New Delhi
                </p>
              </div>
              <span
                className="absolute right-[28%] top-[36%] grid h-8 w-8 place-items-center rounded-full text-white shadow-md"
                style={{ backgroundColor: RED }}
              >
                <MapPin size={14} strokeWidth={2.4} />
              </span>
            </motion.div>

            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
              {centers.map((center, i) => (
                <motion.li
                  key={center.id}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="relative flex gap-3 rounded-[1.25rem] border bg-white p-3.5 shadow-[0_12px_30px_-24px_rgba(0,0,0,0.25)] sm:rounded-[1.4rem] sm:p-4"
                  style={{ borderColor: LINE }}
                >
                  {center.badge ? (
                    <span
                      className="absolute right-3 top-3 rounded-full px-2 py-0.5 font-display text-[10px] font-medium uppercase tracking-[0.08em] text-white"
                      style={{ backgroundColor: RED }}
                    >
                      {center.badge}
                    </span>
                  ) : null}
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-[#F3EEE6]">
                    <Image
                      src={center.image}
                      alt=""
                      fill
                      unoptimized
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div className="min-w-0 flex-1 pr-6">
                    <h3 className="font-display text-[14px] font-medium tracking-[-0.02em] text-ink">
                      {center.name}
                    </h3>
                    <p className="mt-0.5 text-[12px] leading-snug text-mute">
                      {center.address}
                    </p>
                    <p className="mt-1 text-[12px] text-mute">{center.detail}</p>
                  </div>
                  <span
                    className="absolute bottom-3.5 right-3 grid h-8 w-8 place-items-center rounded-full border text-ink"
                    style={{ borderColor: LINE }}
                  >
                    <ArrowRight size={13} strokeWidth={2.4} />
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Online CTA */}
      <section className="relative overflow-x-clip pb-10 sm:pb-12 lg:pb-14">
        <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-start gap-5 rounded-[1.5rem] bg-[#E6D9F7] px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:rounded-[1.75rem] sm:px-8 sm:py-7"
          >
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white/80 text-[#7C5CBF] shadow-sm">
                <Globe2 size={22} strokeWidth={1.9} />
              </span>
              <p className="font-display text-[clamp(1.15rem,2.8vw,1.55rem)] font-medium tracking-[-0.02em] text-ink">
                Online Classes: We cater to <Em>all timezones</Em>
              </p>
            </div>
            <a
              href="/consultation"
              className="inline-flex min-h-[46px] shrink-0 items-center gap-2 rounded-full px-5 py-3 font-display text-[14px] font-medium text-white transition hover:brightness-110"
              style={{ backgroundColor: INK }}
            >
              <Clock3 size={15} strokeWidth={2.2} />
              Schedule a consultation
              <ArrowUpRight size={15} strokeWidth={2.5} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

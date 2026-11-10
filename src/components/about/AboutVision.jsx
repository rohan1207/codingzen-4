"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Crosshair, Layers } from "lucide-react";
import { aboutCurriculum, aboutVision } from "@/data/about";
import { CREAM, INK, LINE } from "@/lib/tokens";

export default function AboutVision() {
  return (
    <section
      className="relative overflow-x-clip py-5 sm:py-6 lg:py-7"
      style={{ backgroundColor: CREAM }}
    >
      <div className="mx-auto grid w-full max-w-[1360px] grid-cols-1 gap-4 px-4 sm:gap-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-5 lg:px-8">
        {/* Vision */}
        <motion.article
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="relative overflow-hidden rounded-[1.4rem] bg-gradient-to-br from-[#EDE4FB] via-[#E4D6F5] to-[#D9C8F0] p-6 sm:rounded-[1.6rem] sm:p-7 lg:p-8"
        >
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/75 text-[#6D28D9]">
            <Crosshair size={20} strokeWidth={2} />
          </span>
          <h3 className="mt-5 font-display text-[1.35rem] font-medium tracking-[-0.03em] text-ink sm:text-[1.5rem]">
            {aboutVision.title}
          </h3>
          <p className="mt-3 max-w-lg text-[14px] leading-relaxed text-[#3f3a45] sm:text-[15px]">
            {aboutVision.body}
          </p>
          <svg
            aria-hidden
            className="pointer-events-none absolute -bottom-1 right-3 h-16 w-28 text-[#b79ae8]/65 sm:right-6 sm:h-20 sm:w-36"
            viewBox="0 0 160 70"
            fill="none"
          >
            <path
              d="M8 42 C 40 8, 70 62, 100 28 S 145 18, 152 34"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="4 6"
            />
            <path
              d="M20 55 C 48 28, 78 58, 110 36"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="3 5"
              opacity="0.7"
            />
          </svg>
        </motion.article>

        {/* Curriculum */}
        <motion.article
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: 0.06 }}
          className="relative overflow-hidden rounded-[1.4rem] border bg-[#F7F4EE] p-6 sm:rounded-[1.6rem] sm:p-7 lg:p-8"
          style={{ borderColor: LINE }}
        >
          <div className="relative z-[1] grid grid-cols-1 items-center gap-5 sm:grid-cols-[1fr_auto] sm:gap-6">
            <div className="max-w-xl">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-[#C2410C] shadow-sm">
                <Layers size={20} strokeWidth={2} />
              </span>
              <h3 className="mt-5 font-display text-[1.2rem] font-medium leading-snug tracking-[-0.03em] text-ink sm:text-[1.4rem]">
                {aboutCurriculum.title}
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-[#4a4540] sm:text-[15px]">
                {aboutCurriculum.body}
              </p>
              <a
                href="/#programs"
                className="mt-6 inline-flex min-h-[44px] items-center gap-2 rounded-full px-5 py-2.5 font-display text-[13px] font-medium text-white transition hover:brightness-110"
                style={{ backgroundColor: INK }}
              >
                Browse courses
                <ArrowUpRight size={15} strokeWidth={2.5} />
              </a>
            </div>

            <motion.div
              aria-hidden
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
              className="relative mx-auto h-[150px] w-[150px] shrink-0 sm:mx-0 sm:h-[170px] sm:w-[170px] lg:h-[190px] lg:w-[190px]"
            >
              <Image
                src="/images/about/code-stack.jpg"
                alt=""
                fill
                unoptimized
                className="object-contain drop-shadow-[0_18px_30px_rgba(109,40,217,0.22)]"
                sizes="190px"
              />
            </motion.div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}

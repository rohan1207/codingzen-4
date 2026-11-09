"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Crosshair, Layers } from "lucide-react";
import { aboutCurriculum, aboutVision } from "@/data/about";
import { CREAM, INK } from "@/lib/tokens";

export default function AboutVision() {
  return (
    <section
      className="relative overflow-x-clip py-8 sm:py-10 lg:py-12"
      style={{ backgroundColor: CREAM }}
    >
      <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 gap-4 px-4 sm:gap-5 sm:px-8 lg:grid-cols-2 lg:px-12">
        {/* Vision */}
        <motion.article
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-[#E9DFF8] via-[#E4D6F5] to-[#D9C8F0] p-6 sm:rounded-[1.75rem] sm:p-8"
        >
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/70 text-[#6D28D9]">
            <Crosshair size={20} strokeWidth={2} />
          </span>
          <h3 className="mt-5 font-display text-[1.35rem] font-medium tracking-[-0.03em] text-ink sm:text-[1.5rem]">
            {aboutVision.title}
          </h3>
          <p className="mt-3 max-w-md text-[14px] leading-relaxed text-[#3f3a45] sm:text-[15px]">
            {aboutVision.body}
          </p>
          <svg
            aria-hidden
            className="pointer-events-none absolute -bottom-2 right-4 h-16 w-28 text-[#c4a8ef]/70 sm:right-8 sm:h-20 sm:w-36"
            viewBox="0 0 160 70"
            fill="none"
          >
            <path
              d="M8 42 C 40 8, 70 62, 100 28 S 145 18, 152 34"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </motion.article>

        {/* Curriculum */}
        <motion.article
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="relative overflow-hidden rounded-[1.5rem] bg-[#F3E0C8] p-6 sm:rounded-[1.75rem] sm:p-8"
        >
          <div className="relative z-[1] max-w-[20rem] sm:max-w-[22rem]">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/70 text-[#C2410C]">
              <Layers size={20} strokeWidth={2} />
            </span>
            <h3 className="mt-5 font-display text-[1.2rem] font-medium leading-snug tracking-[-0.03em] text-ink sm:text-[1.4rem]">
              {aboutCurriculum.title}
            </h3>
            <p className="mt-3 text-[14px] leading-relaxed text-[#4a3f34] sm:text-[15px]">
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
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -right-2 bottom-2 h-[140px] w-[140px] sm:-right-1 sm:bottom-4 sm:h-[180px] sm:w-[180px]"
          >
            <Image
              src="/images/about/code-stack.jpg"
              alt=""
              fill
              unoptimized
              className="object-contain drop-shadow-[0_18px_30px_rgba(109,40,217,0.25)]"
              sizes="180px"
            />
          </motion.div>
        </motion.article>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MessagesSquare } from "lucide-react";
import { programsCta } from "@/data/programsPage";
import { CREAM, INK, TXT } from "@/lib/tokens";

export default function ProgramsCta() {
  return (
    <section
      className="relative overflow-x-clip py-7 sm:py-9 lg:py-10"
      style={{ backgroundColor: CREAM }}
    >
      <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="flex flex-col items-start gap-5 rounded-[1.5rem] bg-[#E6D9F7] px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:rounded-[1.75rem] sm:px-8 sm:py-7"
        >
          <div className="flex items-start gap-4 sm:items-center">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white/80 text-[#7C5CBF] shadow-sm">
              <MessagesSquare size={22} strokeWidth={1.9} />
            </span>
            <div>
              <h2 className="font-display text-[clamp(1.25rem,3vw,1.75rem)] font-medium tracking-[-0.03em] text-ink">
                {programsCta.title}
              </h2>
              <p
                className="mt-1 max-w-xl text-[14px] leading-relaxed"
                style={{ color: TXT }}
              >
                {programsCta.body}
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
  );
}

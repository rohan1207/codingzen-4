"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  GraduationCap,
  Layers,
  Star,
  Users,
} from "lucide-react";
import { aboutPeople } from "@/data/about";
import { CREAM, INK, LINE, TXT } from "@/lib/tokens";

const icons = {
  users: Users,
  star: Star,
  layers: Layers,
  grad: GraduationCap,
};

export default function AboutPeople() {
  const [active, setActive] = useState(0);
  const current = aboutPeople[active];

  return (
    <section
      id="team"
      className="relative scroll-mt-28 overflow-x-clip py-8 sm:py-10 lg:py-12"
      style={{ backgroundColor: CREAM }}
    >
      <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-8 lg:px-12">
        <div
          className="overflow-hidden rounded-[1.35rem] border bg-white sm:rounded-[1.6rem]"
          style={{ borderColor: LINE }}
        >
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {aboutPeople.map((item, i) => {
              const Icon = icons[item.icon] ?? Users;
              const on = active === i;
              return (
                <li
                  key={item.id}
                  className="border-b last:border-b-0 sm:border-b sm:odd:border-r lg:border-b-0 lg:border-r lg:last:border-r-0"
                  style={{ borderColor: LINE }}
                >
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    className={`flex min-h-[72px] w-full items-center gap-3 px-5 py-4 text-left transition sm:min-h-[88px] sm:px-6 ${
                      on ? "bg-[#FAF7F2]" : "bg-white hover:bg-[#FAF7F2]/70"
                    }`}
                  >
                    <span
                      className={`grid h-10 w-10 shrink-0 place-items-center rounded-full ${
                        on
                          ? "bg-ink text-white"
                          : "bg-[#F3EEE6] text-ink"
                      }`}
                    >
                      <Icon size={18} strokeWidth={2} />
                    </span>
                    <span className="font-display text-[13px] font-medium leading-snug tracking-[-0.02em] text-ink sm:text-[14px]">
                      {item.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28 }}
            className="mt-5 rounded-[1.35rem] border bg-white p-5 sm:mt-6 sm:rounded-[1.5rem] sm:p-7"
            style={{ borderColor: LINE }}
          >
            <p className="font-display text-[11px] font-medium uppercase tracking-[0.16em] text-mute">
              {current.label}
            </p>
            <h3
              className="mt-2 font-display text-[clamp(1.25rem,3vw,1.75rem)] font-medium tracking-[-0.03em]"
              style={{ color: INK }}
            >
              {current.title}
            </h3>
            <p
              className="mt-2.5 max-w-2xl text-[14px] leading-relaxed sm:text-[15px]"
              style={{ color: TXT }}
            >
              {current.body}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

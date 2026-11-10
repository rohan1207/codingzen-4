"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GraduationCap, Layers, Star, Users } from "lucide-react";
import { aboutPeople } from "@/data/about";
import { CREAM, INK, LINE, RED, TXT } from "@/lib/tokens";

const icons = {
  users: Users,
  star: Star,
  layers: Layers,
  grad: GraduationCap,
};

const iconColors = ["#E84438", "#E07A3D", "#E84438", "#C0392B"];

export default function AboutPeople() {
  const [active, setActive] = useState(0);
  const current = aboutPeople[active];

  return (
    <section
      id="team"
      className="relative scroll-mt-28 overflow-x-clip py-5 sm:py-6 lg:py-7"
      style={{ backgroundColor: CREAM }}
    >
      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-8">
        <div
          className="overflow-hidden rounded-[1.35rem] border bg-white sm:rounded-[1.5rem]"
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
                    className={`flex min-h-[110px] w-full flex-col items-center justify-center gap-3 px-4 py-6 text-center transition sm:min-h-[120px] sm:px-5 ${
                      on ? "bg-[#FAF7F2]" : "bg-white hover:bg-[#FAF7F2]/70"
                    }`}
                  >
                    <span
                      className="grid h-11 w-11 place-items-center"
                      style={{ color: on ? RED : iconColors[i] }}
                    >
                      <Icon size={26} strokeWidth={1.7} />
                    </span>
                    <span className="max-w-[12ch] font-display text-[13px] font-medium leading-snug tracking-[-0.02em] text-ink sm:text-[14px]">
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
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
            className="mt-4 rounded-[1.25rem] border bg-white p-5 sm:mt-5 sm:rounded-[1.4rem] sm:p-6 lg:px-8"
            style={{ borderColor: LINE }}
          >
            <p className="font-display text-[11px] font-medium uppercase tracking-[0.16em] text-mute">
              {current.label}
            </p>
            <h3
              className="mt-1.5 font-display text-[clamp(1.2rem,2.6vw,1.65rem)] font-medium tracking-[-0.03em]"
              style={{ color: INK }}
            >
              {current.title}
            </h3>
            <p
              className="mt-2 max-w-3xl text-[14px] leading-relaxed sm:text-[15px]"
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

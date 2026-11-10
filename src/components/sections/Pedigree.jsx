"use client";

import Image from "next/image";
import Em from "@/components/ui/Em";
import { CREAM, INK } from "@/lib/tokens";

const pedigree = [
  {
    name: "University of Wisconsin–Madison",
    src: "/images/pedigree/wisconsin-logo.png",
    href: "https://www.wisc.edu/",
    w: 260,
    h: 90,
  },
  {
    name: "ICAI",
    src: "/images/pedigree/icai.jpg",
    href: "https://www.icai.org/",
    w: 120,
    h: 120,
  },
  {
    name: "IIT Bombay",
    src: "/images/pedigree/iitb.svg",
    href: "https://www.iitb.ac.in/",
    w: 120,
    h: 120,
  },
  {
    name: "DTU",
    src: "/images/pedigree/dtu.svg",
    href: "https://dtu.ac.in/",
    w: 240,
    h: 90,
  },
  {
    name: "IIM Bangalore",
    src: "/images/pedigree/iimb.png",
    href: "https://www.iimb.ac.in/",
    w: 240,
    h: 100,
  },
];

export default function Pedigree() {
  return (
    <section
      id="pedigree"
      className="relative w-full scroll-mt-24 overflow-x-clip px-4 py-7 sm:px-6 sm:py-9 lg:px-12 lg:py-12"
      style={{ backgroundColor: CREAM }}
    >
      <h2
        className="text-center font-display text-[clamp(1.45rem,6vw,3rem)] font-medium tracking-[-0.03em]"
        style={{ color: INK }}
      >
        Brought to you by a <Em>team from</Em>
      </h2>

      <ul className="mx-auto mt-6 grid max-w-[1180px] grid-cols-2 items-center justify-items-center gap-x-4 gap-y-5 sm:mt-8 sm:grid-cols-3 sm:gap-x-10 sm:gap-y-8 lg:mt-9 lg:grid-cols-5 lg:gap-x-14 lg:gap-y-0">
        {pedigree.map((item, i) => (
          <li
            key={item.name}
            className={`flex w-full items-center justify-center ${
              i === pedigree.length - 1 ? "col-span-2 sm:col-span-1" : ""
            }`}
          >
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              title={item.name}
              className="flex h-14 w-full max-w-[140px] items-center justify-center transition hover:opacity-75 sm:h-28 sm:max-w-[220px] lg:h-[7.25rem] lg:max-w-[200px]"
            >
              <Image
                src={item.src}
                alt={item.name}
                width={item.w}
                height={item.h}
                unoptimized
                className="h-full w-auto max-h-14 max-w-full object-contain object-center sm:max-h-[7.25rem]"
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

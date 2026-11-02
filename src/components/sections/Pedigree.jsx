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
      className="relative w-full scroll-mt-24 px-4 pb-12 pt-6 sm:px-6 sm:pb-16 lg:px-12"
      style={{ backgroundColor: CREAM }}
    >
      <h2
        className="text-center font-display text-[clamp(1.55rem,4.5vw,3rem)] font-medium tracking-[-0.03em]"
        style={{ color: INK }}
      >
        Brought to you by a <Em>team from</Em>
      </h2>

      <ul className="mx-auto mt-10 grid max-w-[1180px] grid-cols-2 items-center justify-items-center gap-x-10 gap-y-10 sm:mt-12 sm:grid-cols-3 sm:gap-x-12 sm:gap-y-12 lg:mt-14 lg:grid-cols-5 lg:gap-x-14 lg:gap-y-0">
        {pedigree.map((item) => (
          <li key={item.name} className="flex w-full items-center justify-center">
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              title={item.name}
              className="flex h-24 w-full max-w-[200px] items-center justify-center transition hover:opacity-75 sm:h-28 sm:max-w-[220px] lg:h-[7.25rem] lg:max-w-[200px]"
            >
              <Image
                src={item.src}
                alt={item.name}
                width={item.w}
                height={item.h}
                unoptimized
                className="h-full w-auto max-h-[7.25rem] max-w-full object-contain object-center"
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

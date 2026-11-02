"use client";

import { Monitor } from "lucide-react";
import Image from "next/image";

export default function MobileLock() {
  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0c0c0c] px-8 text-center md:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Desktop only"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(232,68,56,0.25), transparent 55%)",
        }}
      />

      <div className="relative z-10 flex max-w-sm flex-col items-center gap-6">
        <Image
          src="/logo.png"
          alt="CodingZen"
          width={72}
          height={72}
          className="h-16 w-16 object-contain"
          unoptimized
        />

        <span className="grid h-14 w-14 place-items-center rounded-2xl border border-white/15 bg-white/5 text-white">
          <Monitor size={28} strokeWidth={1.5} />
        </span>

        <div className="space-y-3">
          <h1 className="font-display text-2xl font-medium tracking-[-0.03em] text-white">
            Phone screen is in progress
          </h1>
          <p className="text-base leading-relaxed text-white/70">
            Visit us on desktop for the full CodingZen experience.
          </p>
        </div>

        <p className="font-display text-[10px] font-medium uppercase tracking-[0.18em] text-white/35">
          codingzen.in
        </p>
      </div>
    </div>
  );
}

"use client";

import { Play, User } from "lucide-react";

const team = {
  featured: {
    id: "lead",
    name: "Aarav Mehta",
    role: "Founder & Lead Mentor",
  },
  left: [
    { id: "l1", name: "Neha", role: "Python mentor" },
    { id: "l2", name: "Kabir", role: "Scratch coach" },
    { id: "l3", name: "Isha", role: "Web mentor" },
    { id: "l4", name: "Rohan", role: "Curriculum" },
  ],
  right: [
    { id: "r1", name: "Ananya", role: "JS mentor" },
    { id: "r2", name: "Vihaan", role: "Unity coach" },
    { id: "r3", name: "Sara", role: "Parent success" },
    { id: "r4", name: "Dev", role: "Projects lead" },
  ],
};

const borderColors = ["#ffffff", "#e84438", "#111111"];

function borderFor(id) {
  let h = 0;
  for (let i = 0; i < id.length; i += 1) h = (h * 31 + id.charCodeAt(i)) >>> 0;
  return borderColors[h % borderColors.length];
}

function PortraitCard({ person, featured = false }) {
  const border = borderFor(person.id);

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-[1.25rem] bg-[#f0f0f0] ${
        featured ? "h-full min-h-[260px] sm:rounded-[1.5rem]" : "aspect-square"
      }`}
      style={{ border: `2.5px solid ${border}` }}
    >
      <span
        className={`grid place-items-center rounded-full bg-[#e4e4e4] text-[#999] ${
          featured ? "h-28 w-28 sm:h-36 sm:w-36" : "h-16 w-16 sm:h-20 sm:w-20"
        }`}
        aria-hidden
      >
        <User
          strokeWidth={1.25}
          className={featured ? "h-14 w-14 sm:h-16 sm:w-16" : "h-8 w-8 sm:h-10 sm:w-10"}
        />
      </span>

      {featured && (
        <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-auto">
          <div className="inline-flex max-w-full items-center rounded-full border border-black/10 bg-black/80 px-3 py-1.5 text-left backdrop-blur-md">
            <p className="truncate font-display text-[11px] font-medium tracking-[-0.02em] text-white sm:text-xs">
              {person.name}
              <span className="font-normal text-white/65">, {person.role}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Team() {
  return (
    <section
      id="team"
      className="relative scroll-mt-28 overflow-hidden bg-cream py-14 sm:py-16 lg:py-20"
    >
      <div className="relative mx-auto w-full px-4 sm:px-6 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.04em] text-ink">
            We are <span className="text-mute">CodingZen.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-txt sm:text-base">
            Mentors who code beside students — across Delhi NCR and online.
            One habit we share: ship real projects, not slide decks.
          </p>
          <a
            href="#trial"
            className="group mt-7 inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-line bg-white px-5 py-3 text-sm font-medium text-ink transition hover:border-black hover:bg-black hover:text-white sm:w-auto"
          >
            <span className="grid h-7 w-7 place-items-center rounded-full bg-black text-white transition group-hover:bg-white group-hover:text-ink">
              <Play size={12} fill="currentColor" className="ml-0.5" />
            </span>
            Hear our story
          </a>
        </div>

        <div className="mt-12 grid gap-3 sm:mt-14 sm:gap-4 lg:grid-cols-[1fr_1.15fr_1fr] lg:items-stretch">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {team.left.map((person) => (
              <PortraitCard key={person.id} person={person} />
            ))}
          </div>

          <PortraitCard person={team.featured} featured />

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {team.right.map((person) => (
              <PortraitCard key={person.id} person={person} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

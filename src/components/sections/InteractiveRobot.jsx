"use client";

import Em from "@/components/ui/Em";

/**
 * GENKUB from Spline Community (no remix / export required).
 * Community scenes embed via the app preview iframe.
 * @see https://app.spline.design/community/file/5b3e7357-c7b4-4150-bbb0-9731e58c7cbd
 */
const COMMUNITY_FILE_ID = "5b3e7357-c7b4-4150-bbb0-9731e58c7cbd";
const PREVIEW_SRC = `https://app.spline.design/file/${COMMUNITY_FILE_ID}?view=preview`;
const COMMUNITY_URL = `https://app.spline.design/community/file/${COMMUNITY_FILE_ID}`;

export default function InteractiveRobot() {
  return (
    <section
      id="mentor-bot"
      className="relative scroll-mt-28 overflow-hidden bg-cream py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1100px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-[11px] font-medium uppercase tracking-[0.18em] text-[#8a8a8a]">
            CodingZen
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.85rem,3.8vw,3rem)] font-medium leading-[1.05] tracking-[-0.03em] text-ink">
            Meet your <Em>coding buddy</Em>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-[#555] sm:text-base">
            Drag to look around — an interactive 3D buddy for kids who love to
            build.
          </p>
        </div>

        <div className="relative mx-auto mt-10 aspect-[4/3] w-full overflow-hidden rounded-[1.75rem] border border-[#ececec] bg-black shadow-[0_24px_50px_-28px_rgba(0,0,0,0.45)] sm:mt-12 sm:aspect-[16/10] sm:rounded-[2rem]">
          <iframe
            title="GENKUB greeting robot — interactive 3D"
            src={PREVIEW_SRC}
            className="absolute inset-0 h-full w-full border-0"
            allow="autoplay; fullscreen"
            loading="lazy"
          />
        </div>

        <p className="mt-4 text-center text-xs text-[#888]">
          <a
            href="https://app.spline.design"
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-2 hover:text-ink hover:underline"
          >
            Open in Spline
          </a>
          {" · "}
          <a
            href="https://spline.design"
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-2 hover:text-ink hover:underline"
          >
            Made with Spline
          </a>
          {" · "}
          <a
            href={COMMUNITY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-2 hover:text-ink hover:underline"
          >
            GENKUB by @medoo1gamal
          </a>
        </p>
      </div>
    </section>
  );
}

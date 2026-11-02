"use client";

import CursorGrid from "@/components/CursorGrid";

/**
 * Full-site hover grid — sits UNDER page content so it only shows
 * through empty / transparent body background, never over cards or sections.
 */
export default function SiteCursorGrid() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0"
    >
      <CursorGrid
        global
        cellSize={70}
        color="#e84438"
        radius={140}
        falloff="smooth"
        holdTime={400}
        fadeDuration={800}
        lineWidth={1.2}
        maxOpacity={0.65}
        fillOpacity={0}
        gridOpacity={0}
        cellRadius={0}
        clickPulse
        pulseSpeed={600}
      />
    </div>
  );
}

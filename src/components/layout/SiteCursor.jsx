"use client";

import TargetCursor from "@/components/TargetCursor";

/** Site-wide target cursor — snaps to every button, link CTA, and .cursor-target */
export default function SiteCursor() {
  return (
    <TargetCursor
      targetSelector="button, a[href], [role='button'], input[type='submit'], input[type='button'], .cursor-target"
      spinDuration={2}
      hideDefaultCursor
      parallaxOn
      hoverDuration={0.2}
      cursorColor="#ffffff"
      cursorColorOnTarget="#e84438"
    />
  );
}

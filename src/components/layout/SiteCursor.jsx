"use client";

import TargetCursor from "@/components/TargetCursor";

/** Minimal red cursor — dot + ring, soft magnetic pull on pill CTAs. */
export default function SiteCursor() {
  return (
    <TargetCursor
      targetSelector="button.rounded-full, a.rounded-full, [role='button'].rounded-full, .magnetic-pill, .cursor-target"
      hideDefaultCursor
      magneticStrength={0.32}
      cursorColor="#e84438"
    />
  );
}

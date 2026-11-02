"use client";

/** Chrome / matte 3D-ish coding forms — CSS only, no heavy assets */

export function ChromeBrace({ className = "" }) {
  return (
    <div
      className={`relative select-none font-mono text-[clamp(3.2rem,7vw,5.5rem)] font-medium leading-none ${className}`}
      style={{
        background:
          "linear-gradient(145deg, #f8f8f8 0%, #c8c8c8 28%, #ffffff 45%, #8a8a8a 62%, #e8e8e8 78%, #555 100%)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
        filter: "drop-shadow(0 14px 22px rgba(0,0,0,0.28))",
      }}
      aria-hidden
    >
      {"{ }"}
    </div>
  );
}

export function MatteBracket({ className = "" }) {
  return (
    <div
      className={`relative select-none font-display text-[clamp(2.4rem,5.5vw,4.2rem)] font-medium leading-none text-[#1a1a1a] ${className}`}
      style={{
        filter: "drop-shadow(0 16px 24px rgba(0,0,0,0.35))",
        transform: "perspective(600px) rotateY(-18deg) rotateX(8deg)",
      }}
      aria-hidden
    >
      {"</>"}
    </div>
  );
}

export function CodeSphere({ className = "", tone = "red" }) {
  const bg =
    tone === "red"
      ? "radial-gradient(circle at 30% 28%, #ff8a80, #e84438 45%, #8f1a1a 78%, #3a0a0a)"
      : tone === "chrome"
        ? "radial-gradient(circle at 30% 28%, #fff, #d0d0d0 40%, #777 70%, #333)"
        : "radial-gradient(circle at 30% 28%, #444, #1a1a1a 55%, #000)";

  return (
    <div
      className={`rounded-full shadow-[0_20px_40px_-12px_rgba(0,0,0,0.45)] ${className}`}
      style={{
        background: bg,
        boxShadow:
          "inset -8px -10px 20px rgba(0,0,0,0.35), inset 6px 8px 16px rgba(255,255,255,0.25), 0 18px 36px rgba(0,0,0,0.3)",
      }}
      aria-hidden
    />
  );
}

export function CodeBlock3D({ className = "" }) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-white/10 bg-[#141414] p-3 font-mono text-[10px] leading-relaxed text-white/70 shadow-[0_24px_50px_-20px_rgba(0,0,0,0.55)] sm:text-xs ${className}`}
      style={{
        transform: "perspective(800px) rotateY(-12deg) rotateX(6deg)",
      }}
      aria-hidden
    >
      <div className="mb-2 flex gap-1">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
        <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
        <span className="h-2 w-2 rounded-full bg-[#28c840]" />
      </div>
      <div>
        <span className="text-ember">const</span> kid ={" "}
        <span className="text-white/90">&quot;creator&quot;</span>;
      </div>
      <div>
        <span className="text-[#aaa]">think</span>()
        <span className="text-white/40">.</span>
        <span className="text-[#ccc]">create</span>()
        <span className="text-white/40">.</span>
        <span className="text-ember">apply</span>();
      </div>
    </div>
  );
}

export function SoftTorus({ className = "" }) {
  return (
    <div className={`relative ${className}`} aria-hidden>
      <div
        className="h-full w-full rounded-full"
        style={{
          background:
            "conic-gradient(from 210deg, #2a2a2a, #111, #555, #1a1a1a, #000, #3a3a3a)",
          boxShadow:
            "0 25px 45px rgba(0,0,0,0.4), inset 0 0 30px rgba(255,255,255,0.08)",
          maskImage: "radial-gradient(transparent 38%, black 40%)",
          WebkitMaskImage: "radial-gradient(transparent 38%, black 40%)",
        }}
      />
    </div>
  );
}

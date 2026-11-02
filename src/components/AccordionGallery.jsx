"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { gsap } from "gsap";
import "./AccordionGallery.css";

const DEFAULT_ITEMS = [
  { label: "Scratch", link: "#", blurb: "" },
];

export default function AccordionGallery({
  items = DEFAULT_ITEMS,
  defaultIndex = 0,
  accentColor = "#e84438",
  overlayColor = "#111111",
  textColor = "#ffffff",
  height = 460,
  gap = 10,
  radius = 16,
  expandRatio = 0.52,
  orientation = "horizontal",
  duration = 0.55,
  ease = "power3.out",
  parallax = 0.35,
  tilt = 5,
  stagger = 0.05,
  trigger = "hover",
  className = "",
}) {
  const rootRef = useRef(null);
  const panelRefs = useRef([]);
  const mediaRefs = useRef([]);
  const spineRefs = useRef([]);
  const detailRefs = useRef([]);
  const tlRef = useRef(null);
  const firstRunRef = useRef(true);
  const mediaSizeRef = useRef(320);

  const vertical = orientation === "vertical";
  const count = items.length;
  const [active, setActive] = useState(
    Math.min(Math.max(defaultIndex, 0), Math.max(count - 1, 0))
  );

  const prefersReduced =
    typeof window !== "undefined" && window.matchMedia
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  const applyLayout = useCallback(
    (animate) => {
      const panels = panelRefs.current;
      if (!panels.length) return;

      const r = Math.min(Math.max(expandRatio, 0.2), 0.9);
      const grow = count > 1 ? (r * (count - 1)) / (1 - r) : 1;
      const mediaSize = mediaSizeRef.current;

      tlRef.current?.kill();
      const dur = animate && !prefersReduced ? duration : 0;
      const tl = gsap.timeline();

      panels.forEach((panel, i) => {
        if (!panel) return;
        const isActive = i === active;
        const media = mediaRefs.current[i];
        const spine = spineRefs.current[i];
        const detail = detailRefs.current[i];

        const rot = isActive ? 0 : i < active ? tilt : -tilt;
        const rotProp = vertical ? { rotateX: -rot } : { rotateY: rot };

        tl.to(
          panel,
          { flexGrow: isActive ? grow : 1, ...rotProp, duration: dur, ease },
          0
        );

        if (media) {
          const drift = Math.max(-1.5, Math.min(1.5, active - i));
          const shift = drift * parallax * mediaSize * 0.06;
          tl.to(
            media,
            {
              xPercent: -50,
              yPercent: -50,
              x: vertical ? 0 : isActive ? 0 : shift,
              y: vertical ? (isActive ? 0 : shift) : 0,
              "--ag-dim": isActive ? 0.05 : 0.18,
              duration: dur,
              ease,
            },
            0
          );
        }

        if (spine) {
          tl.to(
            spine,
            {
              opacity: isActive ? 0 : 1,
              duration: dur * (isActive ? 0.45 : 0.7),
              ease,
            },
            0
          );
        }

        if (detail) {
          if (isActive) {
            tl.fromTo(
              detail,
              { opacity: 0, y: 16 },
              { opacity: 1, y: 0, duration: dur, ease, delay: prefersReduced ? 0 : stagger },
              0
            );
          } else {
            tl.to(
              detail,
              { opacity: 0, y: 10, duration: dur * 0.45, ease },
              0
            );
          }
        }
      });

      tlRef.current = tl;
    },
    [
      active,
      count,
      expandRatio,
      duration,
      ease,
      vertical,
      tilt,
      parallax,
      stagger,
      prefersReduced,
    ]
  );

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return undefined;

    const measure = () => {
      const rect = el.getBoundingClientRect();
      const total = vertical ? rect.height : rect.width;
      const usable = Math.max(total - gap * (count - 1), 120);
      const size = Math.max(
        140,
        usable * Math.min(Math.max(expandRatio, 0.2), 0.9) * 1.22
      );
      mediaSizeRef.current = size;
      el.style.setProperty("--ag-media-size", `${size}px`);
      applyLayout(!firstRunRef.current);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [applyLayout, gap, count, expandRatio, vertical]);

  useEffect(() => {
    applyLayout(!firstRunRef.current);
    firstRunRef.current = false;
  }, [applyLayout]);

  useEffect(
    () => () => {
      tlRef.current?.kill();
    },
    []
  );

  const handleEnter = (i) => {
    if (trigger === "hover") setActive(i);
  };

  const handleClick = (i, e) => {
    if (i !== active) {
      e.preventDefault();
      setActive(i);
    }
  };

  const handleKeyDown = (i, e) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i + 1) % count);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i - 1 + count) % count);
    }
  };

  return (
    <div
      ref={rootRef}
      className={`accordion-gallery${vertical ? " accordion-gallery--vertical" : ""}${className ? ` ${className}` : ""}`}
      style={{
        "--ag-accent": accentColor,
        "--ag-overlay": overlayColor,
        "--ag-text": textColor,
        "--ag-gap": `${gap}px`,
        "--ag-radius": `${radius}px`,
        height: vertical ? `${Math.round(height * 1.6)}px` : `${height}px`,
      }}
      role="list"
      aria-label="Stack accordion gallery"
    >
      {items.map((item, i) => {
        const isActive = i === active;
        const Tag = item.link ? "a" : "div";
        const Icon = item.Icon;
        return (
          <Tag
            key={item.id || item.label || i}
            ref={(el) => {
              panelRefs.current[i] = el;
            }}
            className={`ag-panel ag-panel--${item.scheme || "ink"}${isActive ? " ag-panel--active" : ""}`}
            style={{ borderRadius: `${radius}px` }}
            href={item.link || undefined}
            onClick={(e) => handleClick(i, e)}
            onMouseEnter={() => handleEnter(i)}
            onFocus={() => setActive(i)}
            onKeyDown={(e) => handleKeyDown(i, e)}
            role="listitem"
            tabIndex={0}
            aria-current={isActive ? "true" : undefined}
            aria-label={item.label}
          >
            <span className="ag-panel__frame">
              <span
                className="ag-panel__media"
                ref={(el) => {
                  mediaRefs.current[i] = el;
                }}
              >
                <span
                  className="ag-panel__tone"
                  style={{
                    background:
                      item.tone || "linear-gradient(145deg, #222, #111)",
                  }}
                  aria-hidden
                />
              </span>
              <span className="ag-panel__overlay" aria-hidden="true" />
            </span>

            {/* Closed: horizontal name + icon */}
            <span
              className="ag-panel__spine"
              ref={(el) => {
                spineRefs.current[i] = el;
              }}
              aria-hidden="true"
            >
              <span className="ag-panel__spine-inner">
                {Icon && (
                  <span className="ag-panel__spine-icon">
                    <Icon size={22} strokeWidth={1.75} />
                  </span>
                )}
                <span className="ag-panel__spine-name">{item.label}</span>
                {item.art && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    className="ag-panel__spine-art"
                    src={item.art}
                    alt=""
                    draggable={false}
                  />
                )}
              </span>
            </span>

            {/* Open: rich content */}
            <span
              className="ag-panel__detail"
              ref={(el) => {
                detailRefs.current[i] = el;
              }}
              aria-hidden={!isActive}
            >
              <span className="ag-panel__detail-top">
                {Icon && (
                  <span className="ag-panel__detail-icon">
                    <Icon size={24} strokeWidth={1.6} />
                  </span>
                )}
                <span className="ag-panel__live">
                  <span className="ag-panel__live-dot" />
                  {item.live || "In class"}
                </span>
              </span>

              {item.art && (
                // Decorative corner mascot for the expanded lane
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  className="ag-panel__art"
                  src={item.art}
                  alt=""
                  aria-hidden="true"
                  draggable={false}
                />
              )}

              <span className="ag-panel__detail-main">
                <span className="ag-panel__eyebrow">
                  {item.eyebrow || item.mark || "stack"}
                </span>
                <span className="ag-panel__title">{item.label}</span>
                {item.blurb && (
                  <span className="ag-panel__blurb">{item.blurb}</span>
                )}
                {Array.isArray(item.chips) && item.chips.length > 0 && (
                  <span className="ag-panel__chips">
                    {item.chips.map((chip) => (
                      <span key={chip} className="ag-panel__chip">
                        {chip}
                      </span>
                    ))}
                  </span>
                )}
                {item.code && (
                  <code className="ag-panel__code">
                    <span>&gt;</span> {item.code}
                  </code>
                )}
              </span>
            </span>
          </Tag>
        );
      })}
    </div>
  );
}

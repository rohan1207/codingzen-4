/** Hero-style italic serif accent — Instrument Serif + hero red. */
export default function Em({ children, className = "" }) {
  return (
    <em
      className={`font-serif italic ${className}`.trim()}
      style={{
        fontWeight: 400,
        letterSpacing: "-0.02em",
        color: "#e84438",
      }}
    >
      {children}
    </em>
  );
}

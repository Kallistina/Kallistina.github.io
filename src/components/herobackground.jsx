import React from "react";

// Decorative background for the landing page: hollow points ("data the model can't see")
// split into two groups by a learned decision boundary that draws itself in.

const W = 600;
const H = 600;

// Small seeded random generator so the picture is the same on every visit.
const random = (seed) => () => {
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

const boundary = (x) => 0.5 + 0.17 * Math.sin(2.4 * x + 0.5);

const points = (() => {
  const rand = random(7);
  const result = [];
  while (result.length < 80) {
    const x = rand();
    const y = rand();
    const d = y - boundary(x);
    if (Math.abs(d) < 0.05) continue; // keep a clear margin around the boundary
    result.push({ x: x * W, y: y * H, above: d < 0 });
  }
  return result;
})();

const curve = Array.from({ length: 61 }, (_, i) => {
  const x = i / 60;
  return `${i === 0 ? "M" : "L"}${(x * W).toFixed(1)},${(boundary(x) * H).toFixed(1)}`;
}).join(" ");

const HeroBackground = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-y-0 left-0 hidden [mask-image:linear-gradient(to_right,transparent_40%,black_80%)] md:-right-8 md:block lg:-right-16 xl:-right-24"
  >
    <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMaxYMid slice" className="h-full w-full">
      {points.map((p, i) => (
        <circle
          key={i}
          cx={p.x}
          cy={p.y}
          r="5"
          className={`fill-none ${p.above ? "stroke-accent/40" : "stroke-muted/30"}`}
          strokeWidth="1.25"
        />
      ))}
      <path d={curve} pathLength="1" className="hero-boundary fill-none stroke-accent/60" strokeWidth="1.5" />
    </svg>
  </div>
);

export default HeroBackground;

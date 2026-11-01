import React, { useEffect, useState } from "react";

// Federated learning with privacy-preserving explanations:
// hospitals keep their data, send protected updates + SHAP values through a privacy layer to a server.

const hospitals = ["Hospital A", "Hospital B", "Hospital C"];

// Two hand-tuned layouts: side by side on wide screens, stacked on phones.
const layouts = {
  wide: {
    viewBox: "0 0 640 320",
    clients: [16, 126, 236].map((y) => ({ x: 0, y, w: 190, h: 68 })),
    band: { x: 268, y: 40, w: 84, h: 264 },
    bandLabel: { x: 310, y: 26, anchor: "middle" },
    server: { x: 430, y: 110, w: 210, h: 100 },
    path: (c) => {
      const cy = c.y + c.h / 2;
      return `M${c.x + c.w},${cy} C300,${cy} 320,160 430,160`;
    },
  },
  narrow: {
    viewBox: "0 0 340 430",
    clients: [0, 118, 236].map((x) => ({ x, y: 0, w: 104, h: 76 })),
    band: { x: 0, y: 150, w: 340, h: 70 },
    bandLabel: { x: 332, y: 212, anchor: "end" },
    server: { x: 60, y: 320, w: 220, h: 100 },
    path: (c) => {
      const cx = c.x + c.w / 2;
      return `M${cx},${c.y + c.h} C${cx},200 170,190 170,320`;
    },
  },
};

const usePrefersReducedMotion = () => {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(query.matches);
    const onChange = (e) => setReduced(e.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);
  return reduced;
};

const DataIcon = ({ x, y }) => (
  <g className="fill-none stroke-accent" strokeWidth="1.5">
    <ellipse cx={x + 7} cy={y + 3} rx="7" ry="3" />
    <path d={`M${x},${y + 3} v12 a7,3 0 0 0 14,0 v-12`} />
    <path d={`M${x},${y + 9} a7,3 0 0 0 14,0`} />
  </g>
);

const Client = ({ box, name, narrow }) => (
  <g>
    <rect x={box.x} y={box.y} width={box.w} height={box.h} rx="12" className="fill-surface stroke-line" strokeWidth="1.5" />
    {narrow ? (
      <>
        <DataIcon x={box.x + box.w / 2 - 7} y={box.y + 12} />
        <text x={box.x + box.w / 2} y={box.y + 50} textAnchor="middle" className="fill-ink text-[13px] font-semibold">
          {name}
        </text>
        <text x={box.x + box.w / 2} y={box.y + 66} textAnchor="middle" className="fill-muted text-[11px]">
          data stays local
        </text>
      </>
    ) : (
      <>
        <DataIcon x={box.x + 18} y={box.y + 24} />
        <text x={box.x + 46} y={box.y + 30} className="fill-ink text-[14px] font-semibold">
          {name}
        </text>
        <text x={box.x + 46} y={box.y + 48} className="fill-muted text-[11px]">
          Patient data stays local
        </text>
      </>
    )}
  </g>
);

const Diagram = ({ layout, narrow, animate }) => {
  const { band, bandLabel, server } = layout;
  const sx = server.x + server.w / 2;
  return (
    <svg viewBox={layout.viewBox} className="h-auto w-full" role="img" aria-label="Diagram: three hospitals keep patient data locally and send privacy-protected model updates and SHAP explanations to a central server.">
      <rect x={band.x} y={band.y} width={band.w} height={band.h} rx="14" className="fill-accent-soft stroke-accent/50" strokeWidth="1.5" strokeDasharray="5 5" />
      <text x={bandLabel.x} y={bandLabel.y} textAnchor={bandLabel.anchor} className="fill-accent text-[10px] font-semibold tracking-[0.15em]">
        PRIVACY LAYER
      </text>

      {layout.clients.map((box, i) => (
        <path key={i} id={`flow-${narrow ? "n" : "w"}-${i}`} d={layout.path(box)} className="fill-none stroke-muted/50" strokeWidth="1.5" />
      ))}

      {animate &&
        layout.clients.map((_, i) => (
          <circle key={i} r="4" className="fill-accent" opacity="0">
            <animateMotion dur="3.2s" begin={`${i * 0.7}s`} repeatCount="indefinite">
              <mpath href={`#flow-${narrow ? "n" : "w"}-${i}`} />
            </animateMotion>
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.85;1" dur="3.2s" begin={`${i * 0.7}s`} repeatCount="indefinite" />
          </circle>
        ))}

      {layout.clients.map((box, i) => (
        <Client key={hospitals[i]} box={box} name={hospitals[i]} narrow={narrow} />
      ))}

      <rect x={server.x} y={server.y} width={server.w} height={server.h} rx="12" className="fill-surface stroke-accent" strokeWidth="1.5" />
      <text x={sx} y={server.y + 34} textAnchor="middle" className="fill-ink text-[14px] font-semibold">
        Aggregation server
      </text>
      <text x={sx} y={server.y + 58} textAnchor="middle" className="fill-muted text-[12px]">
        Global model
      </text>
      <text x={sx} y={server.y + 76} textAnchor="middle" className="fill-muted text-[12px]">
        Global SHAP explanations
      </text>
    </svg>
  );
};

const ResearchDiagram = () => {
  const animate = !usePrefersReducedMotion();
  return (
    <figure className="rounded-xl border border-line bg-paper p-5 md:p-8">
      <div className="hidden md:block">
        <Diagram layout={layouts.wide} animate={animate} />
      </div>
      <div className="mx-auto max-w-sm md:hidden">
        <Diagram layout={layouts.narrow} narrow animate={animate} />
      </div>
      <figcaption className="mt-6 flex gap-3 text-sm leading-relaxed text-muted">
        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
        <span>
          Federated learning with private explanations: hospitals train together without sharing patient data. Only
          privacy-protected model updates and SHAP values leave each site.
        </span>
      </figcaption>
    </figure>
  );
};

export default ResearchDiagram;

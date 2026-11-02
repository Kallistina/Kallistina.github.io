import React from "react";

// Shared layout for education and experience entries: dates on the left, details on the right.
const Timeline = ({ items }) => (
  <ol className="space-y-10">
    {items.map((item) => (
      <li key={`${item.title}-${item.period}`} className="group grid gap-1 md:grid-cols-[11rem_1fr] md:gap-8">
        <p className="text-sm tabular-nums text-muted transition-colors group-hover:text-accent md:pt-1">{item.period}</p>
        <div>
          <h3 className="text-lg font-semibold text-ink transition-colors group-hover:text-accent">{item.title}</h3>
          <p className="text-accent">
            {item.subtitle}
            {item.location && <span className="text-muted"> · {item.location}</span>}
          </p>
          {item.meta.filter(Boolean).map((line) => (
            <p key={line} className="mt-1 text-sm text-muted">
              {line}
            </p>
          ))}
          {item.details.length > 0 && (
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[0.95rem] leading-relaxed text-ink/85 marker:text-muted">
              {item.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          )}
        </div>
      </li>
    ))}
  </ol>
);

export default Timeline;

import React from "react";

// Shared layout for education and experience entries: dates on the left, details on the right.
const Timeline = ({ items }) => (
  <ol className="space-y-10">
    {items.map((item) => (
      <li key={`${item.title}-${item.period}`} className="group grid gap-1 md:grid-cols-[11rem_1fr] md:gap-8">
        <p className="text-sm tabular-nums text-muted transition-colors group-hover:text-accent md:pt-1">{item.period}</p>
        <div className="flex gap-4">
          {item.logo && (
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-line bg-white p-1.5 transition-colors group-hover:border-accent">
              <img src={item.logo} alt={item.logoAlt} className="max-h-full max-w-full object-contain" />
            </span>
          )}
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
        </div>
      </li>
    ))}
  </ol>
);

export default Timeline;

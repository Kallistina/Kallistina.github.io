import React from "react";
import { education, experience } from "../data";

const months = { Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5, Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11 };
const now = new Date().getFullYear() + new Date().getMonth() / 12;

// "Nov 2025" -> 2025.83, "Present" -> today. Year-only dates follow the academic year (Oct start, Jul end).
const parseDate = (text, isEnd) => {
  if (text === "Present") return now;
  const [first, second] = text.split(" ");
  if (second) return Number(second) + months[first] / 12 + (isEnd ? 1 / 12 : 0);
  return Number(first) + (isEnd ? 0.5 : 0.75);
};

const toBar = (label, period) => {
  const [start, end] = period.split(" — ");
  return { label, period, start: parseDate(start, false), end: parseDate(end, true), current: end === "Present" };
};

const lanes = [
  { label: "Education", bars: education.map((e) => toBar(e.short, e.period)) },
  { label: "Work", bars: experience.map((e) => toBar(e.short, e.period)) },
];

const all = lanes.flatMap((lane) => lane.bars);
const from = Math.floor(Math.min(...all.map((b) => b.start)));
const to = Math.max(now, ...all.map((b) => b.end)) + 0.2;
const pos = (t) => `${((t - from) / (to - from)) * 100}%`;
const years = Array.from({ length: Math.floor(to) - from + 1 }, (_, i) => from + i);

const Overview = () => (
  <div className="hidden md:block">
    <h3 className="text-xs font-semibold uppercase tracking-widest text-muted">At a glance</h3>
    <div className="mt-5 grid grid-cols-[6rem_1fr] gap-y-3">
      {lanes.map((lane) => (
        <React.Fragment key={lane.label}>
          <span className="self-center text-sm text-muted">{lane.label}</span>
          <div className="relative h-8">
            {years.map((y) => (
              <span key={y} className="absolute inset-y-0 w-px bg-line" style={{ left: pos(y) }} />
            ))}
            {lane.bars.map((bar) => (
              <div
                key={bar.label}
                title={`${bar.label}: ${bar.period}`}
                className={`absolute inset-y-0 flex items-center overflow-hidden rounded-md px-2 text-xs font-medium ${
                  bar.current ? "bg-accent text-paper" : "border border-accent/30 bg-accent-soft text-accent"
                }`}
                style={{ left: pos(bar.start), width: `calc(${pos(bar.end)} - ${pos(bar.start)})` }}
              >
                <span className="truncate">{bar.label}</span>
              </div>
            ))}
          </div>
        </React.Fragment>
      ))}
      <span />
      <div className="relative h-5">
        {years.map((y) => (
          <span key={y} className="absolute -translate-x-1/2 text-xs tabular-nums text-muted" style={{ left: pos(y) }}>
            {y}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default Overview;

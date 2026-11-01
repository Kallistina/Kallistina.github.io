import React from "react";
import Section from "./section";
import { languages, skills } from "../data";

const Row = ({ label, children }) => (
  <div className="grid gap-3 py-4 md:grid-cols-[11rem_1fr] md:gap-8">
    <h3 className="text-sm font-semibold text-ink md:pt-1">{label}</h3>
    {children}
  </div>
);

const Skills = () => (
  <Section id="skills" title="Skills">
    <div className="divide-y divide-line border-y border-line">
      {skills.map((group) => (
        <Row key={group.group} label={group.group}>
          <ul className="flex flex-wrap gap-2">
            {group.items.map((item) => (
              <li key={item} className="rounded-md border border-line bg-surface px-2.5 py-1 text-sm text-ink/90">
                {item}
              </li>
            ))}
          </ul>
        </Row>
      ))}
      {languages.length > 0 && (
        <Row label="Languages">
          <p className="text-ink/90 md:pt-1">
            {languages.map((lang) => `${lang.name} (${lang.level})`).join(" · ")}
          </p>
        </Row>
      )}
    </div>
  </Section>
);

export default Skills;

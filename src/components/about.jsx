import React from "react";
import Section from "./section";
// import ResearchDiagram from "./researchdiagram";
// import Overview from "./overview";
import { about } from "../data";

const About = () => (
  <Section id="about" title="About">
    <div className="grid gap-12 md:grid-cols-[1fr_15rem]">
      <div className="max-w-2xl space-y-4 text-[1.05rem] leading-relaxed text-ink/85">
        {about.bio.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div>
        <h3 className="text-xs font-semibold uppercase tracking-widest text-muted">Research interests</h3>
        <ul className="mt-4 space-y-2">
          {about.interests.map((interest) => (
            <li key={interest} className="flex gap-3 text-ink">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {interest}
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Drawings hidden for now — uncomment to show them again (and their imports above).
    <div className="mt-14">
      <ResearchDiagram />
    </div>

    <div className="mt-14">
      <Overview />
    </div>
    */}
  </Section>
);

export default About;

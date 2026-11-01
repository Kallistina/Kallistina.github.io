import React from "react";
import Section from "./section";
import Timeline from "./timeline";
import { experience } from "../data";

const Experience = () => (
  <Section id="experience" title="Experience">
    <Timeline
      items={experience.map((item) => ({
        title: item.role,
        subtitle: item.org,
        period: item.period,
        location: item.location,
        meta: [],
        details: item.details,
      }))}
    />
  </Section>
);

export default Experience;

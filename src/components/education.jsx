import React from "react";
import Section from "./section";
import Timeline from "./timeline";
import { education } from "../data";

const Education = () => (
  <Section id="education" title="Education">
    <Timeline
      items={education.map((item) => ({
        title: item.degree,
        subtitle: item.institution,
        period: item.period,
        location: item.location,
        meta: [item.focus && `Focus: ${item.focus}`, item.thesis, item.grade],
        details: item.details,
      }))}
    />
  </Section>
);

export default Education;

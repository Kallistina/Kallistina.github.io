import React from "react";

const Section = ({ id, title, children }) => (
  <section id={id} className="border-t border-line py-16 md:py-24">
    <h2 className="font-serif text-3xl font-semibold tracking-tight text-ink md:text-4xl">{title}</h2>
    <div className="mt-8 md:mt-10">{children}</div>
  </section>
);

export default Section;

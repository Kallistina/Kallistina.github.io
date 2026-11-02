import React from "react";
import { LuArrowUp, LuMapPin } from "react-icons/lu";
import Section from "./section";
import SocialLinks from "./sociallinks";
import { profile } from "../data";

const Contact = () => (
  <>
    <Section id="contact" title="Contact">
      <a
        href={`mailto:${profile.email}`}
        className="inline-block break-all font-serif text-2xl font-semibold text-accent underline-offset-8 hover:underline md:text-3xl"
      >
        {profile.email}
      </a>
      <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
        <span className="inline-flex items-center gap-2 text-muted">
          <LuMapPin size={16} /> {profile.location}
        </span>
        <SocialLinks className="-ml-2" />
      </div>
    </Section>

    <footer className="flex items-center justify-between border-t border-line py-8 text-sm text-muted">
      <span>
        © {new Date().getFullYear()} {profile.name}
      </span>
      <a href="#top" className="inline-flex items-center gap-1 transition-colors hover:text-accent">
        Back to top <LuArrowUp size={14} />
      </a>
    </footer>
  </>
);

export default Contact;

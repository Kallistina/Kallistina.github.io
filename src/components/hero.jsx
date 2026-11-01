import React from "react";
import { LuArrowDown, LuDownload } from "react-icons/lu";
import SocialLinks from "./sociallinks";
import { profile } from "../data";

const Hero = () => (
  <section id="top" className="relative flex min-h-[calc(100svh-3.5rem)] flex-col justify-center py-16 lg:min-h-screen">
    {profile.photo && (
      <img
        src={profile.photo}
        alt={profile.name}
        className="mb-8 h-28 w-28 rounded-full border border-line object-cover md:h-32 md:w-32"
      />
    )}

    {profile.eyebrow && (
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">{profile.eyebrow}</p>
    )}

    <h1 className="mt-5 font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl">
      {profile.name}
    </h1>

    <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
      {profile.tagline}
    </p>

    <div className="mt-10 flex flex-wrap items-center gap-3">
      {profile.cv && (
        <a
          href={profile.cv}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-paper transition-opacity hover:opacity-90"
        >
          <LuDownload size={16} /> Download CV
        </a>
      )}
      <SocialLinks className={profile.cv ? "ml-1" : "-ml-2"} />
    </div>

    <a
      href="#about"
      className="absolute bottom-8 left-0 hidden items-center gap-2 text-sm text-muted transition-colors hover:text-ink md:inline-flex"
    >
      <LuArrowDown size={16} className="animate-bounce motion-reduce:animate-none" /> Scroll
    </a>
  </section>
);

export default Hero;

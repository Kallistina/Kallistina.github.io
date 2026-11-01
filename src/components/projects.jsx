import React from "react";
import { LuArrowUpRight } from "react-icons/lu";
import Section from "./section";
import { profile, projects } from "../data";

const Projects = () => (
  <Section id="projects" title="Selected Projects">
    <ul className="grid gap-4 sm:grid-cols-2">
      {projects.map((project) => (
        <li key={project.title}>
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="group flex h-full flex-col rounded-xl border border-line bg-surface p-5 transition-colors hover:border-accent"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-semibold text-ink group-hover:text-accent">{project.title}</h3>
              <LuArrowUpRight
                size={18}
                className="shrink-0 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
              />
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>
            <ul className="mt-auto flex flex-wrap gap-1.5 pt-4">
              {project.tags.map((tag) => (
                <li key={tag} className="rounded-full bg-accent-soft px-2.5 py-0.5 text-xs text-accent">
                  {tag}
                </li>
              ))}
            </ul>
          </a>
        </li>
      ))}
    </ul>
    <p className="mt-6 text-sm text-muted">
      More on{" "}
      <a href={profile.links.github} target="_blank" rel="noreferrer" className="text-accent underline-offset-4 hover:underline">
        GitHub
      </a>
      .
    </p>
  </Section>
);

export default Projects;

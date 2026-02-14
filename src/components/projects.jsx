import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Network Monitoring Dashboard",
      description:
        "Real-time monitoring dashboard for network traffic analytics with alerting, filtering, and performance trends.",
      image: "/logo.png",
      tags: ["React", "Node.js", "WebSockets"],
      demo: "#",
      github: "#",
    },
    {
      title: "ML Research Assistant",
      description:
        "A tool to organize experiments, compare metrics, and track model results for machine learning research workflows.",
      image: "/logo.png",
      tags: ["Python", "ML", "Data Analysis"],
      demo: "#",
      github: "#",
    },
    {
      title: "Cloud Deployment Pipeline",
      description:
        "Automated CI/CD setup for containerized services with validation steps and deployment preview environments.",
      image: "/logo.png",
      tags: ["Docker", "Kubernetes", "CI/CD"],
      demo: "#",
      github: "#",
    },
    {
      title: "Secure Systems Toolkit",
      description:
        "Security-focused scripts and utilities for system checks, policy verification, and operational hardening.",
      image: "/logo.png",
      tags: ["Linux", "Security", "Automation"],
      demo: "#",
      github: "#",
    },
  ];

  return (
    <div className="md:p-22 md:pt-24 md:pb-22 md:px-40 md:h-full select-none bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] bg-[white] p-8 md:mt-0 mt-6 pt-16">
      <h1 className="md:text-5xl text-4xl font-semibold font-rubix">
        My <span className="bg-gradient-to-r from-[#833be7cb] to-[#5521c5] bg-clip-text text-transparent">Projects</span>
      </h1>
      <hr className="md:w-44 w-32 md:mb-0 mb-4 h-3 mt-3 md:ml-0 lg:mt-4 bg-gradient-to-r from-[#c580f0ed] to-[#c580f0c8]" />

      <div className="mt-6 grid md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group rounded-xl border border-slate-200/80 bg-white/80 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#c580f040] hover:border-[#bc8fea]"
          >
            <div className="relative h-52 md:h-56 overflow-hidden bg-gradient-to-br from-[#efe6fb] to-[#f8f3ff]">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2c12465f] to-transparent opacity-70 group-hover:opacity-80 transition-all duration-300" />
            </div>

            <div className="p-3">
              <h3 className="font-rubix text-base text-slate-900">{project.title}</h3>
              <p className="font-poppins text-[11px] md:text-xs text-slate-600 mt-1 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-1.5 mt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-poppins border border-[#d8c2ef] text-[#6b21a8] bg-[#f8f1ff] rounded-full px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-2 mt-2.5">
                <a
                  href={project.demo}
                  className="text-[11px] font-poppins font-medium rounded-full px-2.5 py-1 border border-black/20 hover:bg-[#f4ebff] transition-all duration-300"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  className="text-[11px] font-poppins font-medium rounded-full px-2.5 py-1 border border-black/20 hover:bg-[#f4ebff] transition-all duration-300"
                >
                  GitHub
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Projects;

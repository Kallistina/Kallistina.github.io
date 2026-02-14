import React from "react";

const Projects = () => {
  const projects = [
    {
      featured: true,
      title: "Quantum Kernel SVM",
      description:
        "Quantum machine learning project focused on kernel-based classification with SVM concepts and quantum-inspired feature mapping.",
      image: "/projects/quantum-kernel-svm.png",
      fallbackImage: "https://opengraph.githubassets.com/1/Kallistina/quantum_kernel_svm",
      tags: ["Quantum ML", "SVM", "Python"],
      github: "https://github.com/Kallistina/quantum_kernel_svm",
    },
    {
      title: "Distributed SQL Query Engine",
      description:
        "Implementation of a distributed SQL query processing approach for scalable analytics workloads across multiple data partitions.",
      image: "/projects/distributed-sql-query-engine.png",
      fallbackImage: "https://opengraph.githubassets.com/1/Kallistina/distributed-SQL-query-engine",
      tags: ["Distributed Systems", "SQL", "Query Processing"],
      github: "https://github.com/Kallistina/distributed-SQL-query-engine",
    },
    {
      title: "LMS Adaptive Filtering",
      description:
        "MATLAB projects analyzing Least Mean Squares adaptive filters, coefficient convergence, and MSE behavior across configurations.",
      image: "/projects/lms-adaptive-filtering.png",
      fallbackImage: "https://opengraph.githubassets.com/1/Kallistina/lms-adaptive-filtering",
      tags: ["MATLAB", "Signal Processing", "LMS"],
      github: "https://github.com/Kallistina/lms-adaptive-filtering",
    },
    {
      title: "Linux Terminal Simulator",
      description:
        "Terminal simulation project for Linux-style command-line behavior, focusing on shell interaction and core command execution flow.",
      image: "/projects/linux-terminal-simulator.png",
      fallbackImage: "https://opengraph.githubassets.com/1/Kallistina/linux-terminal-simulator",
      tags: ["Linux", "Terminal", "Systems"],
      github: "https://github.com/Kallistina/linux-terminal-simulator",
    },
  ];

  return (
    <div className="md:p-22 md:pt-24 md:pb-22 md:px-40 md:h-full select-none bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] bg-[white] p-6 md:mt-0 mt-6 pt-14">
      <h1 className="md:text-5xl text-4xl font-semibold font-rubix">
        My <span className="bg-gradient-to-r from-[#833be7cb] to-[#5521c5] bg-clip-text text-transparent">Projects</span>
      </h1>
      <hr className="md:w-44 w-32 md:mb-0 mb-4 h-3 mt-3 md:ml-0 lg:mt-4 bg-gradient-to-r from-[#c580f0ed] to-[#c580f0c8]" />
      <p className="font-poppins text-sm text-slate-600 mt-3">
        More projects on{" "}
        <a
          href="https://github.com/Kallistina"
          target="_blank"
          rel="noreferrer"
          className="text-[#6b21a8] font-medium hover:underline"
        >
          my GitHub profile
        </a>
        .
      </p>

      <div className="mt-5 grid md:grid-cols-2 gap-3 md:gap-4">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group h-full rounded-xl border border-slate-200/80 bg-white/80 overflow-hidden flex flex-col transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md hover:shadow-[#c580f040] hover:border-[#bc8fea]"
          >
            <div className="relative h-44 md:h-56 overflow-hidden bg-gradient-to-br from-[#efe6fb] to-[#f8f3ff]">
              {project.featured && (
                <span className="absolute left-2 top-2 z-10 rounded-full bg-[#6b21a8] text-white text-[10px] font-poppins font-medium px-2 py-0.5">
                  Featured
                </span>
              )}
              <img
                src={project.image}
                alt={project.title}
                onError={(e) => {
                  e.currentTarget.src = project.fallbackImage;
                }}
                className="h-full w-full object-cover transition-all duration-400 ease-out group-hover:scale-[1.03] group-hover:opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2c12465f] to-transparent opacity-70 group-hover:opacity-80 transition-all duration-200" />
            </div>

            <div className="p-3 flex-1 flex flex-col">
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

              <div className="flex gap-2 mt-auto pt-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
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

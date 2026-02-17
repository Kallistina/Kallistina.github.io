import React from "react";

const Resume = () => {
  const education = [
    {
      title: "National and Kapodistrian University of Athens",
      period: "2024 — Present",
      description: "Master of Science in Network Engineering",
    },
    {
      title: "National and Kapodistrian University of Athens",
      period: "2020 — 2024",
      description: "Bachelor of Science in Computer Science",
    },
    {
      title: "Model High School",
      period: "2014 — 2020",
      description: "High School Diploma",
    },
  ];

  const experience = [
    {
      title: "Athena Research Center",
      period: "Nov 2025 — Present",
      description: "Software Engineer & Researcher",
    },
    {
      title: "Huawei Technologies",
      period: "Apr 2025 — Oct 2025",
      description: "Network Engineer",
    },
    {
      title: "National and Kapodistrian University of Athens",
      period: "Dec 2023 — Feb 2025",
      description: "Research and Lab Assistant",
    },
  ];

  const skillGroups = [
    {
      title: "AI & Research",
      items: ["Machine Learning", "Research", "Data Analysis", "Experiment Design"],
    },
    {
      title: "Networks & Security",
      items: ["Network Engineering", "Telecommunications Networks", "Systems Security", "Troubleshooting"],
    },
    {
      title: "Software Development",
      items: ["Python", "JavaScript", "React", "Node.js"],
    },
    {
      title: "DevOps & Tools",
      items: ["Docker", "Kubernetes", "Linux", "Git/GitHub", "MySQL"],
    },
  ];

  return (
    <div className="md:px-24 md:pt-24 md:pb-12 min-h-[calc(100vh-3rem)] select-none bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] bg-[white] dark:bg-slate-900 p-7 md:mt-0 mt-6 pt-16 transition-colors duration-300">
      <h1 className="md:text-4xl text-3xl font-semibold font-rubix text-slate-900 dark:text-slate-100">
        My <span className="bg-gradient-to-r from-[#833be7cb] to-[#5521c5] bg-clip-text text-transparent">Resume</span>
      </h1>
      <hr className="md:w-44 w-32 h-3 mt-3 bg-gradient-to-r from-[#c580f0ed] to-[#c580f0c8]" />

      <div className="mt-6 grid md:grid-cols-2 gap-4">
        <section className="rounded-xl bg-white/75 dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-600 p-4 md:p-5">
          <h2 className="font-rubix text-xl md:text-2xl font-medium text-slate-900 dark:text-slate-100">Education</h2>
          <ol className="mt-4 pl-4 border-l-2 border-[#c580f088] space-y-4">
            {education.map((item) => (
              <li
                key={`${item.title}-${item.period}`}
                className="relative rounded-lg p-2.5 transition-all duration-300 hover:bg-[#f6efff] dark:hover:bg-slate-700 hover:shadow-sm hover:-translate-y-0.5"
              >
                <span className="absolute -left-[18px] top-1.5 h-3 w-3 rounded-full bg-[#7a2fd1] border-2 border-white dark:border-slate-800 shadow" />
                <h4 className="font-poppins text-sm md:text-base font-semibold text-slate-900 dark:text-slate-100 leading-snug">{item.title}</h4>
                <span className="font-poppins text-xs md:text-sm text-slate-500 dark:text-slate-400">{item.period}</span>
                <p className="font-poppins text-xs md:text-sm text-slate-700 dark:text-slate-300 mt-1">{item.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="rounded-xl bg-white/75 dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-600 p-4 md:p-5">
          <h2 className="font-rubix text-xl md:text-2xl font-medium text-slate-900 dark:text-slate-100">Experience</h2>
          <ol className="mt-4 pl-4 border-l-2 border-[#c580f088] space-y-4">
            {experience.map((item) => (
              <li
                key={`${item.title}-${item.period}`}
                className="relative rounded-lg p-2.5 transition-all duration-300 hover:bg-[#f6efff] dark:hover:bg-slate-700 hover:shadow-sm hover:-translate-y-0.5"
              >
                <span className="absolute -left-[18px] top-1.5 h-3 w-3 rounded-full bg-[#7a2fd1] border-2 border-white dark:border-slate-800 shadow" />
                <h4 className="font-poppins text-sm md:text-base font-semibold text-slate-900 dark:text-slate-100 leading-snug">{item.title}</h4>
                <span className="font-poppins text-xs md:text-sm text-slate-500 dark:text-slate-400">{item.period}</span>
                <p className="font-poppins text-xs md:text-sm text-slate-700 dark:text-slate-300 mt-1">{item.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="md:col-span-2 rounded-xl bg-white/75 dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-600 p-4 md:p-5">
          <h2 className="font-rubix text-xl md:text-2xl font-medium text-slate-900 dark:text-slate-100">My Skills</h2>
          <ul className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {skillGroups.map((group) => (
              <li
                key={group.title}
                className="group rounded-lg border border-slate-200/80 dark:border-slate-600 p-3 bg-white/80 dark:bg-slate-700 transition-all duration-300 hover:bg-[#f6efff] dark:hover:bg-slate-600 hover:border-[#c39bf0] hover:-translate-y-0.5 hover:shadow-sm"
              >
                <h5 className="font-rubix text-sm md:text-base text-[#6b21a8] dark:text-[#d7c0f8]">{group.title}</h5>
                <ul className="mt-2 space-y-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="font-poppins text-xs text-slate-700 dark:text-slate-200 leading-snug">
                      - {item}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Resume;

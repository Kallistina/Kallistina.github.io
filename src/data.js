// All site content lives here. Edit this file to update the website.
// Any optional field left empty ("" or []) is simply not shown.

export const profile = {
  name: "Kalliopi Despotidou",
  shortName: "Kalliopi",
  role: "Privacy & ML Researcher",
  // Small line shown above your name on the landing page.
  eyebrow: "Privacy · Security · Machine Learning",
  tagline:
    "I work on privacy-preserving machine learning, federated learning and explainability.",
  location: "Athens, Greece",
  email: "kdespotidou@di.uoa.gr",
  // Put your CV at public/cv.pdf and set this to "/cv.pdf" to show the "Download CV" buttons.
  cv: "",
  // Optional: add a photo at public/photo.jpg and set this to "/photo.jpg".
  photo: "",
  links: {
    github: "https://github.com/Kallistina",
    linkedin: "https://www.linkedin.com/in/kalliopi-despotidou/",
    scholar: "https://scholar.google.com/citations?user=K9NLgRUAAAAJ",
    orcid: "", // e.g. "https://orcid.org/0000-0000-0000-0000"
  },
};

export const about = {
  bio: [
    "I recently completed my MSc in Computer, Telecommunications and Network Engineering at the National and Kapodistrian University of Athens, where I also studied Informatics and Telecommunications. I work as a Software Engineer & Researcher at the Athena Research Center.",
    "My research focuses on privacy-preserving machine learning. In my MSc thesis I worked on privacy-preserving federated SHAP explanations of clinical prediction models.",
    "Before that, I worked as a Network Engineer at Huawei and as a Research and Lab Assistant at the University of Athens.",
  ],
  interests: [
    "Privacy-Preserving Machine Learning",
    "Federated Learning",
    "Explainable AI",
    "Security",
    "Machine Learning",
  ],
};

export const education = [
  {
    degree: "MSc in Computer, Telecommunications and Network Engineering",
    short: "MSc", // label in the timeline
    institution: "National and Kapodistrian University of Athens",
    period: "2024 — 2026",
    location: "Athens, Greece",
    // Optional extras, shown only when filled in:
    focus: "",
    thesis: "Thesis: Privacy-Preserving Federated SHAP Explanations of Clinical Prediction Models", // e.g. "Thesis: <title> — Advisor: Prof. <name>"
    grade: "", // e.g. "GPA: 9.1 / 10"
    details: [],
  },
  {
    degree: "BSc in Informatics and Telecommunications",
    short: "BSc",
    institution: "National and Kapodistrian University of Athens",
    period: "2020 — 2024",
    location: "Athens, Greece",
    focus: "",
    thesis: "Thesis: Beam Management Strategies for Wireless Communications with Reconfigurable Intelligent Surfaces",
    grade: "",
    details: [],
  },
];

export const experience = [
  {
    role: "Software Engineer & Researcher",
    org: "Athena Research Center",
    short: "Athena RC", // label in the timeline
    period: "Nov 2025 — Present",
    location: "Athens, Greece",
    // 1–3 short bullets about what you did / built / found.
    details: [],
  },
  {
    role: "Network Engineer",
    org: "Huawei Technologies",
    short: "Huawei",
    period: "Apr 2025 — Oct 2025",
    location: "",
    details: [],
  },
  {
    role: "Research and Lab Assistant",
    org: "National and Kapodistrian University of Athens",
    short: "Lab Assistant",
    period: "Dec 2023 — Feb 2025",
    location: "Athens, Greece",
    details: [],
  },
];

// Newest first. Fields: authors, title, venue, year, status (optional), links { pdf, doi, code }.
export const publications = [
  {
    authors:
      "T. Mailis, T. Papamarkou, A. Ktenidis, K. Despotidou, K. Filippopolitis, Y. Foufoulas, T. M. Karampatsis, E. Mailli, Y. Ioannidis",
    title: "A Typed Tensor Language for Shared-State Federated Computation",
    venue: "Advances in Neural Information Processing Systems (NeurIPS)",
    year: "2026",
    status: "",
    links: { arxiv: "https://arxiv.org/abs/2605.21103" },
  },
  {
    authors: "G. Zamzmi, E. P. Anton, K. Despotidou, T. Papamarkou, Y. Ioannidis",
    title: "Rethinking Explainability for Clinical Trust: A Task-Specific Communicative Layer",
    venue: "Joint FAIMI, BRIDGE and EPIMI Workshop at MICCAI",
    year: "2026",
    status: "",
    links: {},
  },
];

// Projects are hidden for now. To show them again, uncomment <Projects /> and its menu entry in src/App.js.
export const projects = [
  {
    title: "Quantum Kernel SVM",
    description:
      "Kernel-based classification with support vector machines using quantum feature maps.",
    tags: ["Quantum ML", "SVM", "Python"],
    link: "https://github.com/Kallistina/quantum_kernel_svm",
  },
  {
    title: "Distributed SQL Query Engine",
    description:
      "Distributed SQL query processing for scalable analytics workloads across multiple data partitions.",
    tags: ["Distributed Systems", "SQL", "Query Processing"],
    link: "https://github.com/Kallistina/distributed-SQL-query-engine",
  },
  {
    title: "LMS Adaptive Filtering",
    description:
      "Analysis of Least Mean Squares adaptive filters: coefficient convergence and MSE behaviour across configurations.",
    tags: ["Signal Processing", "MATLAB"],
    link: "https://github.com/Kallistina/lms-adaptive-filtering",
  },
  {
    title: "Linux Terminal Simulator",
    description:
      "Simulation of Linux-style command-line behaviour, covering shell interaction and core command execution.",
    tags: ["Systems", "Linux", "C"],
    link: "https://github.com/Kallistina/linux-terminal-simulator",
  },
];

export const skills = [
  { group: "Programming", items: ["Python", "C", "C++", "Java", "Go", "JavaScript", "SQL", "MATLAB"] },
  { group: "ML & Research", items: ["Machine Learning", "Federated Learning", "Explainable AI (SHAP)", "Privacy", "Data Analysis"] },
  { group: "Security & Systems", items: ["Systems Security", "Distributed Systems", "Linux"] },
  { group: "Tools", items: ["Docker", "Kubernetes", "Git", "Bash", "MySQL", "React", "Node.js", "Flask"] },
];

// Spoken languages, e.g. { name: "Greek", level: "Native" }
export const languages = [];

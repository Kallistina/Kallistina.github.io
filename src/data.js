// All site content lives here. Edit this file to update the website.
// Any optional field left empty ("" or []) is simply not shown.

export const profile = {
  name: "Kalliopi Despotidou",
  shortName: "Kalliopi",
  role: "Privacy & ML Researcher",
  // Landing page: big greeting, one sentence about you, and where you are now.
  greeting: "Hi, I’m Kalliopi!",
  tagline: "I’m interested in how machines can learn from data they’re not allowed to see.",
  affiliation: "Researcher at Athena Research Center, Athens",
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
    "Before that, I worked as a Software-Defined Network (SDN) Engineer at Huawei, and I am a Teaching and Research Assistant at the University of Athens.",
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
    logo: "/logos/uoa.svg", // image in public/logos/
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
    logo: "/logos/uoa.svg",
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
    logo: "/logos/athena.svg", // image in public/logos/
    period: "Nov 2025 — Present",
    location: "Athens, Greece",
    // 1–3 short bullets about what you did / built / found.
    details: [],
  },
  {
    role: "Software-Defined Network (SDN) Engineer",
    org: "Huawei Technologies",
    short: "Huawei",
    logo: "/logos/huawei.svg",
    period: "Apr 2025 — Oct 2025",
    location: "",
    details: [],
  },
  {
    role: "Teaching and Research Assistant",
    org: "National and Kapodistrian University of Athens",
    short: "Teaching Assistant",
    logo: "/logos/uoa.svg",
    period: "Dec 2023 — Present",
    location: "Athens, Greece",
    details: [],
  },
];

// Newest first. Fields: authors, title, venue, year, status (optional), links { pdf, doi, code }.
export const publications = [
  // Hidden for now — remove the "// " to show these two papers again.
  // {
  //   authors: "K. Despotidou, T. Papamarkou, Y. Ioannidis",
  //   title: "Privacy-Preserving Federated SHAP Explanations of Clinical Prediction Models",
  //   venue: "Privacy Enhancing Technologies Symposium (PETS)",
  //   year: "2027",
  //   status: "Under submission",
  //   links: { thesis: "https://pergamos.lib.uoa.gr/en/item/uoadl:5452272" },
  // },
  // {
  //   authors: "G. Stamatelis, K. Despotidou, I. Koutsopoulos",
  //   title: "Communication Efficient Agreement on State and Uncertainty in Multi-Agent Networks",
  //   venue: "European Control Conference (ECC)",
  //   year: "2027",
  //   status: "Under submission",
  //   links: {},
  // },
  {
    authors:
      "T. Mailis, Y. Foufoulas, K. Filippopolitis, K. Despotidou, T. M. Karampatsis, A. Ktenidis, E. Mailli, T. Papamarkou, Y. Ioannidis",
    title: "FeTA: A Fresh Slice of Federated Tensor Algebra",
    venue: "International Conference on Extending Database Technology (EDBT)",
    year: "",
    status: "Under submission",
    links: {},
  },
  {
    authors:
      "Y. Foufoulas, A. Ktenidis, K. Filippopolitis, K. Despotidou, T. Mailis, T. M. Karampatsis, E. Mailli, T. Papamarkou, Y. Ioannidis",
    title: "Accelerating Federated Learning via Optimized Database UDF Execution",
    venue: "ACM Conference on Management of Data (SIGMOD)",
    year: "2027",
    status: "Under submission",
    links: {},
  },
  {
    authors: "G. Zamzmi, K. Despotidou, E. Puyol Anton, T. Papamarkou, Y. Ioannidis",
    title: "Explainable AI as a Clinical Decision-Support Intervention",
    venue: "BJR | Artificial Intelligence (British Institute of Radiology)",
    year: "2026",
    status: "Under submission",
    links: {},
  },
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
    authors:
      "Y. Foufoulas, T. Mailis, K. Filippopolitis, K. Despotidou, T. M. Karampatsis, A. Ktenidis, E. Mailli, T. Papamarkou, Y. Ioannidis",
    title: "Federated Tensor Algebra: A New Programming Paradigm for Federated Analytics and Learning",
    venue: "ACM AI Leadership Summit",
    year: "2026",
    status: "",
    links: {},
  },
  {
    authors: "G. Zamzmi, E. Puyol Anton, K. Despotidou, T. Papamarkou, Y. Ioannidis",
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
  { group: "Programming", items: ["Python", "C", "C++", "Assembly", "SQL", "MATLAB"] },
  { group: "ML & Research", items: ["Machine Learning", "Federated Learning", "Explainable AI (SHAP)", "Privacy", "Data Analysis"] },
  { group: "Security & Systems", items: ["Systems Security", "Distributed Systems", "Linux"] },
  { group: "Tools", items: ["Docker", "Kubernetes", "Git", "Bash", "MySQL", "React", "Node.js", "Flower"] },
];

// Spoken languages, e.g. { name: "Greek", level: "Native" }
export const languages = [];

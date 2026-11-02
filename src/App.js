import React, { useEffect, useState } from "react";

import Sidebar from "./components/sidebar";
import Hero from "./components/hero";
import About from "./components/about";
import Education from "./components/education";
import Experience from "./components/experience";
import Publications from "./components/publications";
// import Projects from "./components/projects";
import Skills from "./components/skills";
import Contact from "./components/contact";

const sections = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "publications", label: "Publications" },
  // { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

// Tracks which section is currently in the middle of the viewport.
const useActiveSection = (ids) => {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ["top", ...ids].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);

  return active;
};

const sectionIds = sections.map((s) => s.id);

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    try {
      const savedTheme = window.localStorage.getItem("theme");
      if (savedTheme) {
        return savedTheme === "dark";
      }

      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    try {
      window.localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    } catch {
      // Ignore storage errors (e.g. private browsing restrictions).
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const active = useActiveSection(sectionIds);

  return (
    <div className="min-h-screen">
      <Sidebar sections={sections} active={active} isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />
      <main className="overflow-x-clip px-5 sm:px-8 lg:ml-64 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-4xl">
          <Hero />
          <About />
          <Education />
          <Experience />
          <Publications />
          {/* <Projects /> */}
          <Skills />
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;

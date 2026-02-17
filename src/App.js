import React, { useEffect, useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Content from "./components/content";
import Projects from "./components/projects";
import Publications from "./components/publications";
import Contact from "./components/contact";
import Resume from "./components/resume";

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
    document.body.classList.toggle("dark", isDarkMode);
    try {
      window.localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    } catch {
      // Ignore storage errors (e.g. private browsing restrictions).
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <HashRouter>
      <div className="min-h-screen bg-white text-slate-900 transition-colors duration-300 dark:bg-slate-900 dark:text-slate-100">
        <Navbar isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />
        <div className="pt-12"> {/* optional padding so navbar doesn't overlap content */}
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;

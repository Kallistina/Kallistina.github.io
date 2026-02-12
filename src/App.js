import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Content from "./components/content";
import Projects from "./components/projects";
import Publications from "./components/publications";
import Contact from "./components/contact";
import Resume from "./components/resume";

function App() {
  return (
    <HashRouter>
      <div>
        <Navbar />
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

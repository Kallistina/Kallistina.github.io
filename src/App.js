import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Content from "./components/content";
import About from "./components/about";
import Skills from "./components/skills";
import Contact from "./components/contact";

function App() {
  return (
    <HashRouter>
      <div>
        <Navbar />
        <div className="pt-12"> {/* optional padding so navbar doesn't overlap content */}
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;

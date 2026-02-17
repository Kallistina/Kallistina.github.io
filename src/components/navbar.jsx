import React, { useState } from "react";
import { LuHome, LuUser, LuLightbulb, LuPhone, LuFileText, LuMoon, LuSun } from "react-icons/lu";
import { Link } from "react-router-dom";
import { Divide as Hamburger } from "hamburger-react";

const Navbar = ({ isDarkMode, onToggleTheme }) => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <div className="select-none flex justify-end md:justify-center w-full md:h-12 absolute md:mt-8 md:mr-0 mt-6 md:pt-0 md:pr-0 pr-3">
      {/* Desktop Links */}
      <div className="md:h-12 px-2 border hidden md:px-4 md:flex border-black/70 dark:border-slate-300/50 bg-white/75 dark:bg-slate-800/70 backdrop-blur-sm absolute rounded-full justify-evenly md:space-x-8 space-x-4 hover:scale-110 transition-all duration-300 z-20">
        <Link to="/" className="mt-1 w-9 h-9 flex items-center justify-center rounded-full hover:border-spacing-0 hover:scale-110 hover:translate-y-px hover:bg-[#c580f03c] dark:hover:bg-slate-700 transition-all duration-500">
          <LuHome size={24} />
        </Link>
        <Link to="/resume" className="mt-1 w-9 h-9 flex items-center justify-center rounded-full hover:border-spacing-0 hover:scale-110 hover:translate-y-px hover:bg-[#c580f03c] dark:hover:bg-slate-700 transition-all duration-500">
          <LuUser size={24} />
        </Link>
        <Link to="/projects" className="mt-1 w-9 h-9 flex items-center justify-center rounded-full hover:border-spacing-0 hover:scale-110 hover:translate-y-px hover:bg-[#c580f03c] dark:hover:bg-slate-700 transition-all duration-500">
          <LuLightbulb size={24} />
        </Link>
        <Link to="/publications" className="mt-1 w-9 h-9 flex items-center justify-center rounded-full hover:border-spacing-0 hover:scale-110 hover:translate-y-px hover:bg-[#c580f03c] dark:hover:bg-slate-700 transition-all duration-500">
          <LuFileText size={24} />
        </Link>
        <Link to="/contact" className="mt-1 w-9 h-9 flex items-center justify-center rounded-full hover:border-spacing-0 hover:scale-110 hover:translate-y-px hover:bg-[#c580f03c] dark:hover:bg-slate-700 transition-all duration-500">
          <LuPhone size={24} />
        </Link>
      </div>

      <button
        type="button"
        aria-label="Toggle night mode"
        onClick={onToggleTheme}
        className="fixed top-1 right-1 md:top-2 md:right-2 z-40 flex h-8 w-14 md:h-9 md:w-16 items-center p-1 rounded-full border border-[#c9a4f1] dark:border-slate-500/80 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md shadow-[0_6px_20px_rgba(139,92,246,0.25)] dark:shadow-[0_6px_20px_rgba(15,23,42,0.6)] transition-all duration-300 hover:scale-[1.03]"
      >
        <span
          className={`flex h-6 w-6 md:h-7 md:w-7 items-center justify-center rounded-full bg-gradient-to-r from-[#833be7] to-[#5521c5] text-white shadow-sm transition-transform duration-300 ${
            isDarkMode ? "translate-x-6 md:translate-x-7" : "translate-x-0"
          }`}
        >
          {isDarkMode ? <LuSun size={14} /> : <LuMoon size={14} />}
        </span>
      </button>

      {/* Hamburger */}
      <div
        className="md:invisible inline-block absolute -top-6 right-14 rounded-full hover:bg-[#c580f04e] dark:hover:bg-slate-700 active:bg-[#c271f49f] dark:active:bg-slate-600 duration-300 transition-all"
        onClick={handleNav}
      >
        <Hamburger color={isDarkMode ? "#e2e8f0" : "#5521c595"} />
      </div>

      {/* Mobile Menu */}
      <div
        className={
          !nav
            ? "md:hidden font-poppins bg-gradient-to-r from-[#833be7e7] rounded-r-xl to-[#5521c595] dark:from-slate-800 dark:to-slate-900 w-44 h-72 -translate-x-44 absolute mt-10 px-5 text-center text-white transition-all duration-300 z-30"
            : "z-30 md:hidden font-poppins bg-gradient-to-r from-[#833be7e7] rounded-r-xl to-[#5521c595] dark:from-slate-800 dark:to-slate-900 w-44 h-72 absolute mt-10 px-5 text-center text-white transition-all duration-300"
        }
      >
        <ul>
          <li>
            <Link onClick={handleNav} to="/" className="block p-4 font-semibold text-md hover:scale-125 active:scale-75 hover:translate-y-px transition-all duration-300 ease-in-out">
              Home
            </Link>
          </li>
          <hr />
          <li>
            <Link onClick={handleNav} to="/resume" className="block p-4 font-semibold text-md hover:scale-125 active:scale-75 hover:translate-y-px transition-all duration-300 ease-in-out">
              Resume
            </Link>
          </li>
          <hr />
          <li>
            <Link onClick={handleNav} to="/projects" className="block p-4 font-semibold text-md hover:scale-125 active:scale-75 hover:translate-y-px transition-all duration-300 ease-in-out">
              Projects
            </Link>
          </li>
          <hr />
          <li>
            <Link onClick={handleNav} to="/publications" className="block p-4 font-semibold text-md hover:scale-125 active:scale-75 hover:translate-y-px transition-all duration-300 ease-in-out">
              Publications
            </Link>
          </li>
          <hr />
          <li>
            <Link onClick={handleNav} to="/contact" className="block p-4 font-semibold text-md hover:scale-125 active:scale-75 hover:translate-y-px transition-all duration-300 ease-in-out">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

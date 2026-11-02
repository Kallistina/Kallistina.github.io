import React, { useEffect, useState } from "react";
import { LuMenu, LuMoon, LuSun, LuX } from "react-icons/lu";
import SocialLinks from "./sociallinks";
import { profile } from "../data";

const ThemeToggle = ({ isDarkMode, onToggleTheme }) => (
  <button
    type="button"
    onClick={onToggleTheme}
    aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    title={isDarkMode ? "Light mode" : "Dark mode"}
    className="flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-accent-soft hover:text-accent"
  >
    {isDarkMode ? <LuSun size={18} /> : <LuMoon size={18} />}
  </button>
);

const NavLinks = ({ sections, active, onNavigate }) => (
  <ul className="space-y-1">
    {sections.map((section) => {
      const isActive = active === section.id;
      return (
        <li key={section.id}>
          <a
            href={`#${section.id}`}
            onClick={onNavigate}
            aria-current={isActive ? "true" : undefined}
            className={`group flex items-center gap-3 py-1.5 text-sm transition-colors ${
              isActive ? "text-ink font-medium" : "text-muted hover:text-accent"
            }`}
          >
            <span
              className={`h-px transition-all duration-300 ${
                isActive ? "w-8 bg-accent" : "w-4 bg-line group-hover:w-6 group-hover:bg-accent"
              }`}
            />
            {section.label}
          </a>
        </li>
      );
    })}
  </ul>
);

const Sidebar = ({ sections, active, isDarkMode, onToggleTheme }) => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      {/* Desktop */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 flex-col justify-between border-r border-line bg-paper px-8 py-10 lg:flex">
        <div>
          <a href="#top" className="block font-serif text-xl font-semibold leading-tight text-ink transition-colors hover:text-accent">
            {profile.name}
          </a>
          <p className="mt-1 text-sm text-muted">{profile.role}</p>
          <nav aria-label="Sections" className="mt-12">
            <NavLinks sections={sections} active={active} />
          </nav>
        </div>
        <div className="space-y-4">
          {profile.cv && (
            <a
              href={profile.cv}
              target="_blank"
              rel="noreferrer"
              className="block rounded-full border border-line px-4 py-2 text-center text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Download CV
            </a>
          )}
          <div className="flex items-center justify-between">
            <SocialLinks className="-ml-2" />
            <ThemeToggle isDarkMode={isDarkMode} onToggleTheme={onToggleTheme} />
          </div>
        </div>
      </aside>

      {/* Mobile top bar */}
      <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-line bg-paper/90 px-4 backdrop-blur lg:hidden">
        <a href="#top" className="font-serif text-lg font-semibold text-ink transition-colors hover:text-accent">
          {profile.name}
        </a>
        <div className="flex items-center">
          <ThemeToggle isDarkMode={isDarkMode} onToggleTheme={onToggleTheme} />
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-full text-ink transition-colors hover:bg-accent-soft hover:text-accent"
          >
            <LuMenu size={20} />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          onClick={close}
          className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
        />
        <nav
          aria-label="Sections"
          className={`absolute inset-y-0 right-0 flex w-72 max-w-[85vw] flex-col justify-between bg-paper px-8 py-6 shadow-xl transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={close}
                aria-label="Close menu"
                className="-mr-2 flex h-9 w-9 items-center justify-center rounded-full text-ink transition-colors hover:bg-accent-soft hover:text-accent"
              >
                <LuX size={20} />
              </button>
            </div>
            <div className="mt-6 [&_a]:py-2.5 [&_a]:text-base">
              <NavLinks sections={sections} active={active} onNavigate={close} />
            </div>
          </div>
          <SocialLinks className="-ml-2" />
        </nav>
      </div>
    </>
  );
};

export default Sidebar;

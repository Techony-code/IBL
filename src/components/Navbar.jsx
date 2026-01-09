import { useContext, useEffect, useState } from "react";
import DarkModeToggle from "./DarkModeToggle";
import { ThemeContext } from "../context/ThemeContext";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const sections = [ "Home","about", "focus", "services", "contact"];

export default function Navbar() {
  const { theme } = useContext(ThemeContext);
  const [activeSection, setActiveSection] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const bottom = top + element.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand */}
        <h1 className="text-xl font-bold text-emerald-700 dark:text-emerald-400">
          Iyewa Business Lab
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 font-medium text-slate-700 dark:text-slate-200">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`hover:text-emerald-600 dark:hover:text-emerald-300 transition ${
                activeSection === section
                  ? "text-emerald-700 dark:text-emerald-400 font-semibold"
                  : ""
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>

        {/* Right side: Dark mode + Hamburger */}
        <div className="flex items-center gap-2 md:gap-4">
          <DarkModeToggle />
          <button
            className="md:hidden p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <XMarkIcon className="w-6 h-6 text-slate-700 dark:text-slate-200" />
            ) : (
              <Bars3Icon className="w-6 h-6 text-slate-700 dark:text-slate-200" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <ul className="flex flex-col gap-4 p-6">
            {sections.map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  onClick={() => setMenuOpen(false)} // close menu on click
                  className={`block text-lg text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition ${
                    activeSection === section
                      ? "text-emerald-700 dark:text-emerald-400 font-semibold"
                      : ""
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
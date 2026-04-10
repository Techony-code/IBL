// src/components/Navbar.jsx
import { useContext, useEffect, useState } from "react";
import DarkModeToggle from "./DarkModeToggle";
import { ThemeContext } from "../context/ThemeContext";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import logo from "../assets/yewa.png";

const sections = ["home", "about", "focus", "services", "contact"];

export default function Navbar() {
  const { theme } = useContext(ThemeContext);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll tracking for active link
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120; // offset for sticky navbar
      setScrolled(window.scrollY > 10); // small shadow when scrolling

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
    <nav
      className={`sticky top-0 z-50 backdrop-blur transition-all duration-300 border-b ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 shadow-sm"
          : "bg-white/70 dark:bg-gray-900/70"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        
        {/* Brand */}
        <a href="#home" className="flex items-center gap-2">
          <img 
            src={logo} 
            alt="Yewa Business Lab Logo" 
            className="h-10 w-auto sm:h-20"
          />
          <span className="text-xl sm:text-2xl font-bold text-emerald-700 dark:text-emerald-400">
            Yewa Business Lab
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 font-medium text-slate-700 dark:text-slate-200">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`relative hover:text-emerald-600 dark:hover:text-emerald-300 transition ${
                activeSection === section
                  ? "text-emerald-700 dark:text-emerald-400 font-semibold"
                  : ""
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              {/* Active underline */}
              {activeSection === section && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-600 dark:bg-emerald-400 rounded-full"></span>
              )}
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
      <div
        className={`md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-max-height duration-300 overflow-hidden ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
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
    </nav>
  );
}
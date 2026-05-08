import { FC, useContext, useState } from "react";
import { AppContext } from "../../context/appContext";
import { Language } from "../../utils/globals";
import { Option } from "../../interfaces/Global";
import Dropdown from "../Dropdown/Dropdown";
import styles from "./Navbar.module.css";

const languageOptions: Option[] = [
  { label: "EN", value: "english" },
  { label: "ES", value: "spanish" },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
];

export const Header = () => {
  const { changeLanguage } = useContext(AppContext);
  const [activeLang, setActiveLang] = useState<string>("english");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLanguageChange = (value: string) => {
    setActiveLang(value);
    changeLanguage(value as Language);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#f8f8f8] shadow-[0_2px_6px_rgba(0,0,0,0.07)]">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 md:px-6">

        {/* Left — Brand */}
        <a href="#" className="flex items-center gap-2.5 no-underline">
          <span className="text-base font-semibold text-gray-900">GL</span>
        </a>

        {/* Center — Nav links (hidden on mobile) */}
        <nav className="hidden items-center gap-7 md:flex">
          {
          navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-900"
            >
              {label}
            </a>
          ))
          }
        </nav>

        {/* Right — Lang toggle + CTA */}
        <div className="flex items-center gap-2.5">
          {/* Language toggle */}
          <div className="flex items-center gap-0.5 rounded-full bg-gray-100 p-1 ring-1 ring-gray-200">
            {languageOptions.map(({ label, value }) => (
              <button
                key={value}
                onClick={() => handleLanguageChange(value)}
                className={`rounded-full px-3.5 py-1 text-xs font-medium transition-all duration-200 ${activeLang === value
                    ? "bg-white text-gray-800 shadow-sm ring-1 ring-gray-200/80"
                    : "bg-transparent text-gray-400 hover:text-gray-600"
                  }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 rounded p-1 md:hidden"
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-5 bg-gray-800 transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-gray-800 transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-gray-800 transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-gray-100 bg-[#f8f8f8] px-4 pb-4 md:hidden">
          <nav className="flex flex-col gap-3 pt-3">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-gray-600 hover:text-gray-900"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
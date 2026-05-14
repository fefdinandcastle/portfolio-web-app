import React, { useState, useEffect } from "react";
import { useLang } from "../../context/LanguageContext";
import { t } from "../../data/translations";
 
const Header: React.FC = () => {
  const { lang, setLang } = useLang();
  const nav = t[lang].nav;
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
 
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
 
  const links = [
    { label: nav.about, href: "#about" },
    { label: nav.stack, href: "#stack" },
    { label: nav.projects, href: "#projects" },
    { label: nav.contact, href: "#contact" },
  ];
 
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-stone-50/95 backdrop-blur-md shadow-sm border-b border-stone-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-display text-xl font-semibold tracking-tight text-stone-900 hover:text-amber-600 transition-colors"
        >
          YN<span className="text-amber-500">.</span>
        </a>
 
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-amber-500 transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
 
          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === "en" ? "es" : "en")}
            className="flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-full border border-stone-200 text-stone-600 hover:border-amber-400 hover:text-stone-900 transition-all duration-200"
          >
            <span className="text-base leading-none">
              {lang === "en" ? "🇺🇸" : "🇲🇽"}
            </span>
            <span>{lang === "en" ? "EN" : "ES"}</span>
          </button>
        </nav>
 
        {/* Mobile: lang toggle + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setLang(lang === "en" ? "es" : "en")}
            className="flex items-center gap-1 text-sm font-medium px-2.5 py-1.5 rounded-full border border-stone-200 text-stone-600"
          >
            <span>{lang === "en" ? "🇺🇸" : "🇲🇽"}</span>
            <span>{lang === "en" ? "EN" : "ES"}</span>
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-md text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors"
            aria-label="Toggle menu"
          >
            <span className="block w-5 h-px bg-current mb-1" />
            <span className="block w-5 h-px bg-current mb-1" />
            <span className="block w-3 h-px bg-current" />
          </button>
        </div>
      </div>
 
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-stone-50 border-t border-stone-200 px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-stone-700 hover:text-stone-900"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
 
export default Header;
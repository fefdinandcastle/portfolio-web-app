import React, { useState, useEffect } from 'react';
import { FiGlobe, FiSettings } from 'react-icons/fi';
import { Lang } from '../../types';
import { translations } from '../../i18n/translations';
interface NavbarProps {
  lang: Lang;
  setLang: (l: Lang) => void;
}

export function Navbar({ lang, setLang }: NavbarProps) {
  const tr = translations[lang].nav;
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('inicio');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { id: 'inicio',          label: tr.inicio },
    { id: 'trayectoria',     label: tr.trayectoria },
    { id: 'formacion',       label: tr.formacion },
    { id: 'certificaciones', label: tr.certificaciones },
    { id: 'stack',           label: tr.stack },
    { id: 'proyectos',       label: tr.proyectos },
    { id: 'herramientas',    label: tr.herramientas },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-gray-100/50 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm'
          : 'bg-white/70 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo('inicio')}
          className="font-bold text-gray-900 text-sm tracking-tight"
        >
          Gerardo Lerma
        </button>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className={`text-sm transition-colors ${
                active === l.id
                  ? 'text-teal-600 font-medium'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          {/* Language toggle */}
          <button
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-gray-600"
          >
            <FiGlobe size={13} />
            {lang.toUpperCase()}
          </button>

          {/* Settings (decorative) */}
          <button className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-gray-500">
            <FiSettings size={15} />
          </button>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-gray-500 ml-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <>
                  <line x1="3" y1="3" x2="13" y2="13" />
                  <line x1="13" y1="3" x2="3" y2="13" />
                </>
              ) : (
                <>
                  <line x1="2" y1="5" x2="14" y2="5" />
                  <line x1="2" y1="9" x2="14" y2="9" />
                  <line x1="2" y1="13" x2="14" y2="13" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="lg:hidden bg-white/95 border-t border-gray-100 px-6 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className={`text-sm text-left py-1 transition-colors ${
                active === l.id ? 'text-teal-600 font-medium' : 'text-gray-600'
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
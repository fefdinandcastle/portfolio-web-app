import React, { useState, useEffect } from 'react';
import { FiGlobe } from 'react-icons/fi';
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
    const container = document.getElementById('scroll-container') ?? window;
    const onScroll = () => {
      const top = container instanceof Window ? container.scrollY : (container as HTMLElement).scrollTop;
      setScrolled(top > 20);
    };
    container.addEventListener('scroll', onScroll, { passive: true });
    return () => container.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { id: 'inicio',          label: tr.inicio },
    { id: 'trayectoria',     label: tr.trayectoria },
    { id: 'formacion',       label: tr.formacion },
    { id: 'certificaciones', label: tr.certificaciones },
    { id: 'stack',           label: tr.stack },
    { id: 'proyectos',       label: tr.proyectos },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-[250ms]
        ${scrolled
          ? 'bg-cream border-b-2 border-ink'
          : 'bg-cream/85 backdrop-blur border-b border-ink/[0.12]'
        }`}
    >
      <div className="max-w-[1152px] mx-auto px-6 h-[52px] flex items-center justify-between gap-4">

        {/* Logo */}
        <button
          onClick={() => scrollTo('inicio')}
          className="font-bold text-[13px] tracking-[-0.01em] text-ink bg-transparent border-none cursor-pointer p-0 shrink-0"
        >
          Gerardo Lerma
        </button>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className={`text-[12px] px-[10px] py-[5px] border-none cursor-pointer lowercase transition-all duration-150 rounded-none
                ${active === l.id
                  ? 'font-semibold bg-ink text-cream tracking-[0.02em]'
                  : 'font-normal bg-transparent text-[#666] hover:text-ink hover:bg-ink/[0.06]'
                }`}
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-2 shrink-0">

          {/* Language toggle */}
          <button
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            className="inline-flex items-center gap-[5px] py-[5px] px-[10px] text-[11px] font-semibold tracking-[0.06em] text-ink bg-transparent border-[1.5px] border-ink cursor-pointer shadow-brutal-sm rounded-none transition-all duration-150 hover:bg-ink hover:text-cream hover:shadow-brutal-xs hover:translate-x-[1px] hover:translate-y-[1px]"
          >
            <FiGlobe size={12} />
            {lang.toUpperCase()}
          </button>

          {/* Mobile menu toggle */}
          <button
            className={`lg:hidden flex items-center justify-center w-8 h-8 border-[1.5px] border-ink cursor-pointer transition-all duration-150 rounded-none
              ${menuOpen ? 'bg-ink text-cream' : 'bg-transparent text-ink'}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <>
                  <line x1="3" y1="3" x2="12" y2="12" />
                  <line x1="12" y1="3" x2="3" y2="12" />
                </>
              ) : (
                <>
                  <line x1="2" y1="4.5" x2="13" y2="4.5" />
                  <line x1="2" y1="8"   x2="13" y2="8" />
                  <line x1="2" y1="11.5" x2="13" y2="11.5" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="bg-cream border-t-2 border-ink px-6 pt-4 pb-5 flex flex-col gap-0.5">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className={`text-[13px] py-[7px] px-[10px] border-none cursor-pointer lowercase transition-all duration-[120ms] text-left tracking-[0.01em] rounded-none
                ${active === l.id
                  ? 'font-semibold bg-ink text-cream'
                  : 'font-normal bg-transparent text-[#444] hover:bg-ink/[0.07] hover:text-ink'
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

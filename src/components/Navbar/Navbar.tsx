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
    { id: 'herramientas',    label: tr.herramientas },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: scrolled ? '#f5f4f0' : 'rgba(245,244,240,0.85)',
        backdropFilter: scrolled ? 'none' : 'blur(8px)',
        borderBottom: scrolled ? '2px solid #111' : '1px solid rgba(17,17,17,0.12)',
        transition: 'border-color 0.25s, background 0.25s',
      }}
    >
      <div
        style={{
          maxWidth: 1152,
          margin: '0 auto',
          padding: '0 24px',
          height: 52,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
        }}
      >
        {/* ── Logo ──────────────────────────────────────────────────────── */}
        <button
          onClick={() => scrollTo('inicio')}
          style={{
            fontWeight: 700,
            fontSize: 13,
            letterSpacing: '-0.01em',
            color: '#111',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            flexShrink: 0,
            fontFamily: 'inherit',
          }}
        >
          Gerardo Lerma
          <span style={{ color: '#7c6af7', marginLeft: 2 }}>.</span>
        </button>

        {/* ── Desktop links ─────────────────────────────────────────────── */}
        <div className="hidden lg:flex" style={{ alignItems: 'center', gap: 4 }}>
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              style={{
                fontSize: 12,
                fontWeight: active === l.id ? 600 : 400,
                background: active === l.id ? '#111' : 'transparent',
                color: active === l.id ? '#f5f4f0' : '#666',
                border: 'none',
                cursor: 'pointer',
                padding: '5px 10px',
                borderRadius: 0,
                letterSpacing: active === l.id ? '0.02em' : '0',
                fontFamily: 'inherit',
                transition: 'background 0.15s, color 0.15s',
                textTransform: 'lowercase',
              }}
              onMouseEnter={(e) => {
                if (active !== l.id) {
                  (e.currentTarget as HTMLElement).style.color = '#111';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(17,17,17,0.06)';
                }
              }}
              onMouseLeave={(e) => {
                if (active !== l.id) {
                  (e.currentTarget as HTMLElement).style.color = '#666';
                  (e.currentTarget as HTMLElement).style.background = 'transparent';
                }
              }}
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* ── Right controls ────────────────────────────────────────────── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>

          {/* Language toggle */}
          <button
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 5,
              padding: '5px 10px',
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.06em',
              color: '#111',
              background: 'transparent',
              border: '1.5px solid #111',
              borderRadius: 0,
              cursor: 'pointer',
              fontFamily: 'inherit',
              transition: 'background 0.15s, color 0.15s',
              boxShadow: '2px 2px 0 #111',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = '#111';
              (e.currentTarget as HTMLElement).style.color = '#f5f4f0';
              (e.currentTarget as HTMLElement).style.boxShadow = '1px 1px 0 #111';
              (e.currentTarget as HTMLElement).style.transform = 'translate(1px, 1px)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'transparent';
              (e.currentTarget as HTMLElement).style.color = '#111';
              (e.currentTarget as HTMLElement).style.boxShadow = '2px 2px 0 #111';
              (e.currentTarget as HTMLElement).style.transform = 'translate(0, 0)';
            }}
          >
            <FiGlobe size={12} />
            {lang.toUpperCase()}
          </button>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 32,
              height: 32,
              border: '1.5px solid #111',
              borderRadius: 0,
              background: menuOpen ? '#111' : 'transparent',
              cursor: 'pointer',
              transition: 'background 0.15s',
              color: menuOpen ? '#f5f4f0' : '#111',
            }}
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

      {/* ── Mobile drawer ─────────────────────────────────────────────────── */}
      {menuOpen && (
        <div
          style={{
            background: '#f5f4f0',
            borderTop: '2px solid #111',
            padding: '16px 24px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              style={{
                fontSize: 13,
                fontWeight: active === l.id ? 600 : 400,
                color: active === l.id ? '#f5f4f0' : '#444',
                background: active === l.id ? '#111' : 'transparent',
                border: 'none',
                borderRadius: 0,
                cursor: 'pointer',
                padding: '7px 10px',
                textAlign: 'left',
                fontFamily: 'inherit',
                letterSpacing: '0.01em',
                transition: 'background 0.12s, color 0.12s',
                textTransform: 'lowercase',
              }}
              onMouseEnter={(e) => {
                if (active !== l.id) {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(17,17,17,0.07)';
                  (e.currentTarget as HTMLElement).style.color = '#111';
                }
              }}
              onMouseLeave={(e) => {
                if (active !== l.id) {
                  (e.currentTarget as HTMLElement).style.background = 'transparent';
                  (e.currentTarget as HTMLElement).style.color = '#444';
                }
              }}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

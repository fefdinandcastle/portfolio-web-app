import { SiLinkerd, SiGithub } from 'react-icons/si';
import { FiChevronDown } from 'react-icons/fi';
import { Lang } from '../types';
import { translations } from '../i18n/translations';
import { HeroCanvas } from './3D/Canvas/Herocanvas';

const HERO_TAGS = ['Spring Boot', 'Angular', 'React', 'Oracle SQL', 'AWS', 'Git / Jira'];

const HERO_STATS = [
  { label: '3+ yrs', color: '#7c6af7', textColor: '#fff' },
  { label: 'Full Stack', color: '#ffd60a', textColor: '#111' },
  { label: 'Java · React', color: '#e63946', textColor: '#fff' },
];

interface HeroProps {
  lang: Lang;
}

export function Hero({ lang }: HeroProps) {
  const tr = translations[lang].hero;

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{ background: '#f5f4f0' }}
    >

      {/* ── Layer 0 – Three.js WebGL canvas ──────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <HeroCanvas />
      </div>

      {/* ── Layer 1 – Grid overlay (neo brutalism subtle) ─────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          backgroundImage:
            'linear-gradient(#11111112 1px, transparent 1px), linear-gradient(90deg, #11111112 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      {/* ── Corner decorations — colored ────────────────────────────────── */}
      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          zIndex: 2,
          width: 100,
          height: 100,
          borderLeft: '3px solid #ffd60a',
          borderBottom: '3px solid #ffd60a',
          opacity: 0.65,
        }}
      />
      <div
        className="absolute bottom-0 left-0 pointer-events-none"
        style={{
          zIndex: 2,
          width: 72,
          height: 72,
          borderRight: '3px solid #e63946',
          borderTop: '3px solid #e63946',
          opacity: 0.55,
        }}
      />

      {/* ── Extra accent: top-left small square ────────────────────────── */}
      <div
        className="absolute top-0 left-0 pointer-events-none"
        style={{
          zIndex: 2,
          width: 20,
          height: 20,
          background: '#06d6a0',
          opacity: 0.7,
        }}
      />

      <div className="relative max-w-5xl mx-auto px-8 py-32 w-full" style={{ zIndex: 3 }}>
        <div className="flex flex-col md:flex-row md:items-start gap-10">

          {/* ── Text column ──────────────────────────────────────────────── */}
          <div className="flex-1 animate-fade-in">

            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 mb-5"
              style={{
                background: '#111',
                color: '#f5f4f0',
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                padding: '5px 12px',
                borderRadius: 0,
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: '#7c6af7',
                  display: 'inline-block',
                  flexShrink: 0,
                }}
              />
              {tr.badge}
            </div>

            {/* Headline */}
            <h1
              className="font-bold text-gray-900 mb-6"
              style={{ fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.08, letterSpacing: '-0.02em' }}
            >
              {tr.headline1}{' '}
              <span
                className="relative inline-block"
                style={{ color: '#7c6af7' }}
              >
                {tr.highlight}
                {/* Underline accent */}
                <span
                  className="absolute left-0 bottom-[3px] w-full pointer-events-none"
                  style={{ height: 3, background: '#7c6af7', opacity: 0.3 }}
                />
              </span>{' '}
              {tr.headline2}
            </h1>

            {/* Bio */}
            <p
              className="leading-relaxed max-w-xl mb-5"
              style={{ color: '#555', fontSize: 15, lineHeight: 1.65 }}
            >
              {tr.bio}
            </p>

            {/* Stats chips */}
            <div className="flex flex-wrap gap-2 mb-6">
              {HERO_STATS.map((stat) => (
                <span
                  key={stat.label}
                  style={{
                    background: stat.color,
                    color: stat.textColor,
                    border: '2px solid #111',
                    padding: '4px 10px',
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    boxShadow: '2px 2px 0 #111',
                    textTransform: 'uppercase',
                    display: 'inline-block',
                  }}
                >
                  {stat.label}
                </span>
              ))}
            </div>

            {/* Tags – neo brutalism: square border, no radius */}
            <div className="flex flex-wrap gap-2 mb-8">
              {HERO_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="transition-colors duration-150 cursor-default"
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    color: '#111',
                    border: '1.5px solid #111',
                    padding: '4px 10px',
                    borderRadius: 0,
                    background: 'transparent',
                    letterSpacing: '0.02em',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = '#7c6af7';
                    (e.currentTarget as HTMLElement).style.color = '#fff';
                    (e.currentTarget as HTMLElement).style.borderColor = '#7c6af7';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'transparent';
                    (e.currentTarget as HTMLElement).style.color = '#111';
                    (e.currentTarget as HTMLElement).style.borderColor = '#111';
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA buttons – neo brutalism: square + offset shadow */}
            <div className="flex gap-3 flex-wrap">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition-all duration-100"
                style={{
                  padding: '10px 20px',
                  background: '#7c6af7',
                  color: '#fff',
                  fontSize: 13,
                  fontWeight: 500,
                  border: '2px solid #111',
                  borderRadius: 0,
                  textDecoration: 'none',
                  boxShadow: '3px 3px 0 #111',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '1px 1px 0 #111';
                  (e.currentTarget as HTMLElement).style.transform = 'translate(2px, 2px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '3px 3px 0 #111';
                  (e.currentTarget as HTMLElement).style.transform = 'translate(0, 0)';
                }}
              >
                <SiLinkerd size={15} /> {tr.linkedin}
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition-all duration-100"
                style={{
                  padding: '10px 20px',
                  background: '#f5f4f0',
                  color: '#111',
                  fontSize: 13,
                  fontWeight: 500,
                  border: '2px solid #111',
                  borderRadius: 0,
                  textDecoration: 'none',
                  boxShadow: '3px 3px 0 #111',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '1px 1px 0 #111';
                  (e.currentTarget as HTMLElement).style.transform = 'translate(2px, 2px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '3px 3px 0 #111';
                  (e.currentTarget as HTMLElement).style.transform = 'translate(0, 0)';
                }}
              >
                <SiGithub size={15} /> {tr.github}
              </a>
            </div>
          </div>

          {/* ── Photo column ──────────────────────────────────────────────── */}
          <div className="flex-shrink-0 flex justify-center md:justify-end md:pt-8 animate-fade-in-delay order-first md:order-last">
            <div className="relative" style={{ width: 160, height: 160 }}>
              {/* Yellow square offset accent — neo brutalism */}
              <div
                className="absolute pointer-events-none"
                style={{
                  width: 144,
                  height: 144,
                  background: '#ffd60a',
                  border: '2px solid #111',
                  top: 8,
                  left: 8,
                  zIndex: 0,
                }}
              />

              {/* Photo frame – circular, neo brutalism border */}
              <div
                className="overflow-hidden"
                style={{
                  width: 144,
                  height: 144,
                  borderRadius: '50%',
                  border: '2.5px solid #111',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  zIndex: 1,
                }}
              >
                
                  {/* Reemplaza el contenido de este div con: */}
                  <img src="/avatar_real_3.jpg" alt="Tu nombre" className="w-full h-full object-cover bg-purple-400" />
                  {/* y coloca tu foto en la carpeta public/ */}
               
                {/* <div
                  className="w-full h-full flex items-center justify-center text-5xl select-none"
                  style={{ background: 'linear-gradient(135deg, #c4bbff 0%, #a08ef5 100%)' }}
                >
                  👤
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* ── Divider + Scroll indicator ────────────────────────────────── */}
        <div
          className="mt-12 mb-5"
          style={{ width: '100%', height: 1, background: '#111', opacity: 0.1 }}
        />

        <div className="flex items-center gap-3">
          <span
            style={{
              fontSize: 11,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#888',
              fontWeight: 500,
            }}
          >
            Scroll
          </span>
          <button
            onClick={() => document.getElementById('trayectoria')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center justify-center transition-colors duration-150"
            style={{
              width: 32,
              height: 32,
              border: '1.5px solid #111',
              background: 'transparent',
              borderRadius: 0,
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = '#111';
              (e.currentTarget as HTMLElement).querySelector('svg')!.style.color = '#f5f4f0';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'transparent';
              (e.currentTarget as HTMLElement).querySelector('svg')!.style.color = '#111';
            }}
            aria-label="Scroll down"
          >
            <FiChevronDown size={16} color="#111" />
          </button>
        </div>
      </div>
    </section>
  );
}

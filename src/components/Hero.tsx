import React from 'react';
import { SiLinkerd, SiGithub } from 'react-icons/si';
import { FiChevronDown } from 'react-icons/fi';
import { Lang } from '../types';
import { translations } from '../i18n/translations';
import { Tag } from './ui/Tag';
import { SectionBadge } from './ui/SectionBadge';
import { HeroCanvas } from './3D/Canvas/Herocanvas';

const HERO_TAGS = ['Spring Boot', 'Angular', 'React', 'Oracle SQL', 'AWS', 'Git / Jira'];

interface HeroProps {
  lang: Lang;
}

export function Hero({ lang }: HeroProps) {
  const tr = translations[lang].hero;

  return (
    <section id="inicio" className="min-h-screen flex items-center relative overflow-hidden">

      {/* ── Layer 0 – Three.js WebGL canvas (true background) ────────────────
          alpha:true on the Canvas lets the page bg-color (#f5f4f0) show
          through wherever three.js draws nothing.
          pointer-events:none so it never intercepts clicks or scroll.      */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <HeroCanvas />
      </div>

      {/* ── Layer 1 – CSS gradient blobs (kept light so 3D breathes through) */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        <div className="absolute top-0 left-0 w-[50vw] h-[60vh] bg-teal-100/40 rounded-full blur-[120px] -translate-x-1/4 -translate-y-1/4" />
        <div className="absolute top-0 right-0 w-[40vw] h-[50vh] bg-orange-100/40 rounded-full blur-[120px] translate-x-1/4 -translate-y-1/4" />
      </div>

      {/* ── Layer 2 – Grid overlay ───────────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          zIndex: 2,
          backgroundImage:
            'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-5xl mx-auto px-8 py-32 w-full" style={{ zIndex: 3 }}>
        <div className="flex flex-col md:flex-row md:items-start gap-10">
          {/* Text */}
          <div className="flex-1 animate-fade-in">
            <SectionBadge text={tr.badge} />
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-[1.1] mb-6">
              {tr.headline1}{' '}
              <span className="text-teal-600">{tr.highlight}</span>{' '}
              {tr.headline2}
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed max-w-xl mb-6">{tr.bio}</p>

            <div className="flex flex-wrap gap-2 mb-8">
              {HERO_TAGS.map((tag) => (
                <Tag key={tag} label={tag} />
              ))}
            </div>

            <div className="flex gap-3 flex-wrap">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-teal-700 text-white rounded-lg font-medium hover:bg-teal-800 transition-colors text-sm"
              >
                <SiLinkerd size={16} /> {tr.linkedin}
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 border border-gray-300 text-gray-800 rounded-lg font-medium hover:bg-gray-50 transition-colors text-sm bg-white/80"
              >
                <SiGithub size={16} /> {tr.github}
              </a>
            </div>
          </div>

          {/* Circular photo */}
          <div className="flex-shrink-0 flex justify-center md:justify-end md:pt-8 animate-fade-in-delay">
            <div className="relative">
              <div className="w-36 h-36 rounded-full overflow-hidden ring-4 ring-white shadow-xl">
                {/*
                  Reemplaza el contenido de este div con:
                  <img src="/tu-foto.jpg" alt="Tu nombre" className="w-full h-full object-cover" />
                  y coloca tu foto en la carpeta public/
                */}
                <div className="w-full h-full bg-gradient-to-br from-teal-200 to-teal-500 flex items-center justify-center text-5xl select-none">
                  👤
                </div>
              </div>
              <div className="absolute -inset-2 rounded-full border border-teal-200/60 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex justify-center">
          <button
            onClick={() => document.getElementById('trayectoria')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-700 hover:border-gray-400 transition-colors bg-white/60"
            aria-label="Scroll down"
          >
            <FiChevronDown size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
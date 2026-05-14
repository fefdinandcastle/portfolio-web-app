import React from 'react';
import { SiLinkerd, SiGithub } from 'react-icons/si';
import { FiChevronDown } from 'react-icons/fi';
import { Lang } from '../types';
import { translations } from '../i18n/translations';
import { HeroCanvas } from './3D/Canvas/Herocanvas';
 
const HERO_TAGS = ['Spring Boot', 'Angular', 'React', 'Oracle SQL', 'AWS', 'Git / Jira'];
 
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
            'linear-gradient(#11111109 1px, transparent 1px), linear-gradient(90deg, #11111109 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />
 
      {/* ── Corner decorations ───────────────────────────────────────────── */}
      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          zIndex: 2,
          width: 88,
          height: 88,
          borderLeft: '2px solid #111',
          borderBottom: '2px solid #111',
          opacity: 0.07,
        }}
      />
      <div
        className="absolute bottom-0 left-0 pointer-events-none"
        style={{
          zIndex: 2,
          width: 64,
          height: 64,
          borderRight: '2px solid #111',
          borderTop: '2px solid #111',
          opacity: 0.06,
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
              className="leading-relaxed max-w-xl mb-6"
              style={{ color: '#555', fontSize: 15, lineHeight: 1.65 }}
            >
              {tr.bio}
            </p>
 
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
                    (e.currentTarget as HTMLElement).style.background = '#111';
                    (e.currentTarget as HTMLElement).style.color = '#f5f4f0';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'transparent';
                    (e.currentTarget as HTMLElement).style.color = '#111';
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
 
          {/* ── Circular photo ────────────────────────────────────────────── */}
          <div className="flex-shrink-0 flex justify-center md:justify-end md:pt-8 animate-fade-in-delay order-first md:order-last">
            <div className="relative">
              {/* Dashed ring accent */}
              <div
                className="absolute pointer-events-none"
                style={{
                  width: 144,
                  height: 144,
                  borderRadius: '50%',
                  border: '2px dashed #7c6af7',
                  top: 8,
                  left: 8,
                  opacity: 0.45,
                  zIndex: 0,
                }}
              />
 
              {/* Photo frame – circular, neo brutalism border + offset shadow */}
              <div
                className="overflow-hidden"
                style={{
                  width: 144,
                  height: 144,
                  borderRadius: '50%',
                  border: '2.5px solid #111',
                  boxShadow: '5px 5px 0 #111',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                {/*
                  Reemplaza el contenido de este div con:
                  <img src="/tu-foto.jpg" alt="Tu nombre" className="w-full h-full object-cover" />
                  y coloca tu foto en la carpeta public/
                */}
                <div
                  className="w-full h-full flex items-center justify-center text-5xl select-none"
                  style={{ background: 'linear-gradient(135deg, #c4bbff 0%, #a08ef5 100%)' }}
                >
                  👤
                </div>
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

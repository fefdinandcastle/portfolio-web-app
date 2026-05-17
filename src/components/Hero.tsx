import { useState } from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiChevronDown, FiFileText } from 'react-icons/fi';
import { Lang } from '../types';
import { translations } from '../i18n/translations';
import { HeroCanvas } from './3D/Canvas/Herocanvas';
import { PdfModal } from './ui/PdfModal';

const HERO_TAGS = ['React', 'TypeScript', 'Spring Boot', 'PostgreSQL', 'Cloud'];

const HERO_STATS = [
  { label: '4+ yrs',      color: '#7c6af7', textColor: '#fff' },
  { label: 'Full Stack',  color: '#ffd60a', textColor: '#111' },
  { label: 'React · Java', color: '#e63946', textColor: '#fff' },
];

interface HeroProps {
  lang: Lang;
}

export function Hero({ lang }: HeroProps) {
  const tr = translations[lang].hero;
  const [cvOpen, setCvOpen] = useState(false);
  const cvUrl = lang === 'es' ? '/cv-es.pdf' : '/cv-en.pdf';
  const cvFileName = lang === 'es' ? 'CV-Gerardo-Lerma-ES.pdf' : 'CV-Gerardo-Lerma-EN.pdf';

  return (
    <section id="inicio" className="min-h-screen flex items-center relative overflow-hidden bg-cream">

      {/* Layer 0 – Three.js canvas */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <HeroCanvas />
      </div>

      {/* Layer 1 – Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          backgroundImage:
            'linear-gradient(#11111109 1px, transparent 1px), linear-gradient(90deg, #11111109 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      {/* Corner decorations */}
      <div className="absolute top-0 right-0 pointer-events-none z-[2] w-[100px] h-[100px] border-l-[3px] border-b-[3px] border-brand-yellow opacity-65" />
      <div className="absolute bottom-0 left-0 pointer-events-none z-[2] w-[72px] h-[72px] border-r-[3px] border-t-[3px] border-brand-red opacity-55" />
      <div className="absolute top-0 left-0 pointer-events-none z-[2] w-5 h-5 bg-brand-teal opacity-70" />

      <div className="relative max-w-5xl mx-auto px-8 pt-14 pb-14 md:py-32 w-full z-[3]">
        <div className="flex flex-col md:flex-row md:items-start gap-5 md:gap-10">

          {/* Text column */}
          <div className="flex-1 animate-fade-in">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-5 bg-ink text-cream text-[11px] font-medium tracking-[0.08em] uppercase py-[5px] px-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-purple shrink-0 inline-block" />
              {tr.badge}
              <span
                className="inline-block w-0.5 bg-brand-purple ml-0.5 align-text-bottom [animation:blink_1s_step-end_infinite]"
                style={{ height: '0.75em' }}
              />
            </div>

            {/* Headline */}
            <h1
              className="font-bold text-gray-900 mb-4 md:mb-6 tracking-[-0.02em] leading-[1.08]"
              style={{ fontSize: 'clamp(26px,5vw,56px)' }}
            >
              {tr.headline1}{' '}
              <span className="relative inline-block text-brand-purple">
                {tr.highlight}
                <span className="absolute left-0 bottom-[3px] w-full h-[3px] bg-brand-purple opacity-30 pointer-events-none" />
              </span>{' '}
              {tr.headline2}
            </h1>

            {/* Bio */}
            <p className="leading-[1.65] max-w-xl mb-3 md:mb-5 text-[#555] text-[13px] md:text-[15px]">
              {tr.bio}
            </p>

            {/* Stats chips */}
            <div className="flex flex-wrap gap-2 mb-3 md:mb-6">
              {HERO_STATS.map((stat) => (
                <span
                  key={stat.label}
                  className="border-2 border-ink py-1 px-[10px] text-[11px] font-bold tracking-[0.06em] uppercase shadow-brutal-sm inline-block"
                  style={{ background: stat.color, color: stat.textColor }}
                >
                  {stat.label}
                </span>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-5 md:mb-8">
              {HERO_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="text-[12px] font-medium text-ink border-[1.5px] border-ink py-1 px-[10px] rounded-none bg-transparent tracking-[0.02em] cursor-default transition-all duration-150 hover:bg-brand-purple hover:text-white hover:border-brand-purple"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex gap-3 flex-wrap">
              <a
                href="https://www.linkedin.com/in/gerardo-lerma/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 py-[10px] px-5 bg-brand-purple text-white text-[13px] font-medium border-2 border-ink no-underline shadow-brutal transition-all duration-100 hover:shadow-brutal-xs hover:translate-x-[2px] hover:translate-y-[2px]"
              >
                <FaLinkedinIn size={15} /> {tr.linkedin}
              </a>

              <button
                onClick={() => setCvOpen(true)}
                className="inline-flex items-center gap-2 py-[10px] px-5 bg-cream text-ink text-[13px] font-medium border-2 border-ink shadow-brutal transition-all duration-100 hover:shadow-brutal-xs hover:translate-x-[2px] hover:translate-y-[2px] cursor-pointer"
              >
                <FiFileText size={15} /> {tr.cv}
              </button>
            </div>
          </div>

          {/* Photo column */}
          <div className="flex-shrink-0 flex justify-center md:justify-end md:pt-8 animate-fade-in-delay order-first md:order-last">
            <div className="relative w-28 h-28 md:w-40 md:h-40">
              {/* Yellow square offset */}
              <div className="absolute w-24 h-24 md:w-36 md:h-36 bg-brand-yellow border-2 border-ink top-2 left-2 z-0 pointer-events-none" />

              {/* Circular photo */}
              <div className="absolute w-24 h-24 md:w-36 md:h-36 rounded-full border-[2.5px] border-ink top-0 left-0 z-10 overflow-hidden">
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

        {/* Divider */}
        <div className="mt-8 md:mt-12 mb-5 w-full h-px bg-ink opacity-10" />

        {/* Scroll indicator */}
        <div className="flex items-center gap-3">
          <span className="text-[11px] tracking-[0.1em] uppercase text-[#888] font-medium">
            Scroll
          </span>
          <button
            onClick={() => document.getElementById('trayectoria')?.scrollIntoView({ behavior: 'smooth' })}
            className="group flex items-center justify-center w-8 h-8 border-[1.5px] border-ink bg-transparent hover:bg-ink transition-colors duration-150 cursor-pointer rounded-none"
            aria-label="Scroll down"
          >
            <FiChevronDown size={16} className="text-ink group-hover:text-cream" />
          </button>
        </div>
      </div>

      {cvOpen && (
        <PdfModal
          pdfUrl={cvUrl}
          title={cvFileName}
          lang={lang}
          downloadFileName={cvFileName}
          onClose={() => setCvOpen(false)}
        />
      )}
    </section>
  );
}

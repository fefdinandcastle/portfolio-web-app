import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { Lang } from '../types';
import { translations } from '../i18n/translations';
import { tools, homelabTags } from '../data/tools';
import { useInView } from '../hooks/useInView';

interface ToolsProps {
  lang: Lang;
}

export function Tools({ lang }: ToolsProps) {
  const tr = translations[lang].tools;
  const { ref, visible } = useInView();

  return (
    <section id="herramientas" ref={ref} className="bg-white py-24 relative overflow-hidden">
      <span className="absolute -right-3 top-4 text-[220px] font-extrabold text-ink opacity-[0.025] tracking-[-0.06em] leading-none select-none pointer-events-none">06</span>

      <div className={`max-w-5xl mx-auto px-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'}`}>

        {/* Section header */}
        <div className="inline-flex items-center gap-1.5 bg-brand-purple text-white text-[11px] font-medium tracking-[0.08em] uppercase py-[5px] px-3 mb-5 border-2 border-ink shadow-brutal-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0 inline-block" />
          {tr.badge}
        </div>

        <h2
          className="font-bold text-ink tracking-[-0.02em] leading-[1.1] mb-12"
          style={{ fontSize: 'clamp(28px,4vw,40px)' }}
        >
          {tr.title}
        </h2>

        <div className="grid md:grid-cols-3 gap-3 mb-3">
          {tools.map((tool, i) => {
            const Icon = tool.icon as React.ComponentType<{ size?: number }>;
            return (
              <div
                key={i}
                className="bg-cream border-2 border-ink shadow-brutal-md hover:shadow-brutal-sm hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150 flex flex-col overflow-hidden"
              >
                <div className="h-1 w-full" style={{ background: tool.bg }} />
                <div className="p-5 flex flex-col flex-1">
                  <div
                    className="w-11 h-11 flex items-center justify-center mb-4 text-white border-2 border-ink"
                    style={{ background: tool.bg }}
                  >
                    <Icon size={22} />
                  </div>
                  <h3 className="font-bold text-ink mb-1.5">{tool.name}</h3>
                  <p className="text-[#555] text-[13px] mb-4 leading-[1.6]">{tool.desc[lang]}</p>
                  <a
                    href={`https://${tool.url}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto inline-flex items-center gap-1 text-[12px] font-semibold text-brand-purple no-underline hover:underline"
                  >
                    {tool.url} <FiExternalLink size={11} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Homelab */}
        <div className="bg-cream border-2 border-ink shadow-brutal-md p-6">
          <p className="text-[10px] font-semibold tracking-[0.1em] uppercase text-brand-teal mb-1">
            {tr.homelab}
          </p>
          <h3 className="font-bold text-ink text-lg mb-2">{tr.homelabTitle}</h3>
          <p className="text-[#555] text-[13px] mb-4 leading-[1.6]">{tr.homelabDesc}</p>
          <div className="flex flex-wrap gap-2">
            {homelabTags.map((tag) => (
              <span
                key={tag}
                className="text-[12px] font-medium text-ink border-[1.5px] border-ink py-1 px-[10px] bg-white tracking-[0.02em]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

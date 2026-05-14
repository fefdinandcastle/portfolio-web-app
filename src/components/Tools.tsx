import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { Lang } from '../types';
import { translations } from '../i18n/translations';
import { tools, homelabTags } from '../data/tools';
import { useInView } from '../hooks/useInView';
import { Tag } from './ui/Tag';
import { SectionBadge } from './ui/SectionBadge';

interface ToolsProps {
  lang: Lang;
}

export function Tools({ lang }: ToolsProps) {
  const tr = translations[lang].tools;
  const { ref, visible } = useInView();

  return (
    <section id="herramientas" className="py-24 bg-white/50" ref={ref}>
      <div
        className={`max-w-5xl mx-auto px-8 transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <SectionBadge text={tr.badge} />
        <h2 className="text-4xl font-bold text-gray-900 mb-12">{tr.title}</h2>

        <div className="grid md:grid-cols-3 gap-5 mb-5">
          {tools.map((tool, i) => {
            const Icon = tool.icon as React.ComponentType<{ size?: number }>;
            return (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow flex flex-col"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-white"
                  style={{ background: tool.bg }}
                >
                  <Icon size={24} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{tool.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{tool.desc[lang]}</p>
                <a
                  href={`https://${tool.url}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto text-teal-600 text-sm font-medium hover:underline flex items-center gap-1"
                >
                  {tool.url} <FiExternalLink size={12} />
                </a>
              </div>
            );
          })}
        </div>

        {/* Homelab */}
        <div className="bg-gradient-to-r from-teal-50/60 to-blue-50/40 rounded-xl border border-teal-100 p-6">
          <p className="text-xs font-semibold tracking-widest text-teal-600 mb-1">
            {tr.homelab}
          </p>
          <h3 className="font-bold text-gray-900 text-lg mb-2">{tr.homelabTitle}</h3>
          <p className="text-gray-600 text-sm mb-4">{tr.homelabDesc}</p>
          <div className="flex flex-wrap gap-2">
            {homelabTags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
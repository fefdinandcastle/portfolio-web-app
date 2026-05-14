import React from 'react';
import { Lang } from '../types';
import { translations } from '../i18n/translations';
import { stackIcons, learningStack } from '../data/stack';
import { useInView } from '../hooks/useInView';
import { Tag } from './ui/Tag';
import { SectionBadge } from './ui/SectionBadge';

interface StackProps {
  lang: Lang;
}

export function Stack({ lang }: StackProps) {
  const tr = translations[lang].stack;
  const { ref, visible } = useInView();

  return (
    <section id="stack" className="py-24 bg-white/50" ref={ref}>
      <div
        className={`max-w-5xl mx-auto px-8 transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <SectionBadge text={tr.badge} />
        <h2 className="text-4xl font-bold text-gray-900 mb-2">{tr.title}</h2>
        <p className="text-gray-500 mb-10">{tr.subtitle}</p>

        {/* Icon grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-4 mb-10">
          {stackIcons.map(({ name, icon: Icon, color }) => (
            <div
              key={name}
              className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all cursor-default"
            >
              <Icon size={28} color={color} />
              <span className="text-xs text-gray-500 text-center leading-tight">{name}</span>
            </div>
          ))}
        </div>

        {/* Learning stack */}
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-gray-400 mb-3">
            {tr.learning}
          </p>
          <div className="flex flex-wrap gap-2">
            {learningStack.map((item) => (
              <Tag key={item} label={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
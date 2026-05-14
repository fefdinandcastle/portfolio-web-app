import React from 'react';
import { Lang } from '../types';
import { translations } from '../i18n/translations';
import { experiences } from '../data/experiences';
import { useInView } from '../hooks/useInView';
import { SectionBadge } from './ui/SectionBadge';

interface ExperienceProps {
  lang: Lang;
}

export function Experience({ lang }: ExperienceProps) {
  const tr = translations[lang].experience;
  const { ref, visible } = useInView();

  return (
    <section id="trayectoria" className="py-24 bg-white/50" ref={ref}>
      <div
        className={`max-w-5xl mx-auto px-8 transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <SectionBadge text={tr.badge} />
        <h2 className="text-4xl font-bold text-gray-900 mb-2">{tr.title}</h2>
        <p className="text-gray-500 mb-12">{tr.subtitle}</p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200" />

          <div className="space-y-6 pl-12">
            {experiences.map((exp, i) => (
              <div key={i} className="relative">
                {/* Timeline dot */}
                <div className="absolute -left-[2.15rem] top-6 w-3 h-3 rounded-full border-2 border-teal-500 bg-white" />

                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                    <h3 className="font-semibold text-gray-900 text-lg">
                      {exp.role[lang]} —{' '}
                      <span className="font-bold">{exp.company}</span>
                    </h3>
                    <span className="text-sm text-gray-400 whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">{exp.location[lang]}</p>

                  <ul className="space-y-2 mb-4">
                    {exp.bullets[lang].map((bullet, j) => (
                      <li key={j} className="flex gap-2 text-sm text-gray-700">
                        <span className="text-teal-500 mt-1 flex-shrink-0">•</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <p className="text-xs font-semibold tracking-widest text-gray-400">
                    {exp.stack}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
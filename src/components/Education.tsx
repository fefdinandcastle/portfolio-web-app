import React from 'react';
import { Lang } from '../types';
import { translations } from '../i18n/translations';
import { educations, awsCourses } from '../data/educations';
import { useInView } from '../hooks/useInView';
import { Tag } from './ui/Tag';
import { SectionBadge } from './ui/SectionBadge';

interface EducationProps {
  lang: Lang;
}

export function Education({ lang }: EducationProps) {
  const tr = translations[lang].education;
  const { ref, visible } = useInView();

  return (
    <section id="formacion" className="py-24" ref={ref}>
      <div
        className={`max-w-5xl mx-auto px-8 transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <SectionBadge text={tr.badge} />
        <h2 className="text-4xl font-bold text-gray-900 mb-12">{tr.title}</h2>

        <div className="grid md:grid-cols-2 gap-5 mb-5">
          {educations.map((ed, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="font-bold text-gray-900 text-base mb-1">{ed.title[lang]}</h3>
              <p className="text-teal-600 text-sm mb-1">{ed.institution}</p>
              <p className="text-gray-400 text-sm mb-3">{ed.period[lang]}</p>
              <p className="text-gray-600 text-sm mb-4">{ed.desc[lang]}</p>
              <p className="text-xs font-semibold tracking-widest text-gray-400 mb-3">
                {ed.badge}
              </p>
              <div className="flex flex-wrap gap-2">
                {ed.tags.map((tag) => (
                  <Tag key={tag} label={tag} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* AWS complementary block */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <h3 className="font-bold text-gray-900 mb-1">{tr.awsTitle}</h3>
          <p className="text-gray-500 text-sm mb-4">{tr.awsDesc}</p>
          <div className="flex flex-wrap gap-2">
            {awsCourses.map((course) => (
              <Tag key={course} label={course} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
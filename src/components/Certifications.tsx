import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { Lang } from '../types';
import { translations } from '../i18n/translations';
import { certifications } from '../data/certifications';
import { useInView } from '../hooks/useInView';
import { SectionBadge } from './ui/SectionBadge';

interface CertificationsProps {
  lang: Lang;
}

export function Certifications({ lang }: CertificationsProps) {
  const tr = translations[lang].certs;
  const { ref, visible } = useInView();

  return (
    <section
      id="certificaciones"
      className="py-24 bg-gradient-to-br from-teal-50/40 via-white to-orange-50/30"
      ref={ref}
    >
      <div
        className={`max-w-5xl mx-auto px-8 transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <SectionBadge text={tr.badge} />
        <h2 className="text-4xl font-bold text-gray-900 mb-12">{tr.title}</h2>

        <div className="grid md:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow flex flex-col"
            >
              <p className="text-xs font-semibold tracking-widest text-teal-600 mb-2">
                {cert.cat[lang]}
              </p>
              <h3 className="font-bold text-gray-900 text-base mb-1">{cert.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{cert.date[lang]}</p>
              <a
                href={cert.link}
                className="mt-auto text-teal-600 text-sm font-medium hover:underline flex items-center gap-1"
              >
                {cert.linkText[lang]} <FiExternalLink size={12} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { Lang } from '../types';
import { translations } from '../i18n/translations';
import { projects } from '../data/projects';
import { useInView } from '../hooks/useInView';
import { Tag } from './ui/Tag';
import { SectionBadge } from './ui/SectionBadge';

interface ProjectsProps {
  lang: Lang;
}

export function Projects({ lang }: ProjectsProps) {
  const tr = translations[lang].projects;
  const { ref, visible } = useInView();

  return (
    <section id="proyectos" className="py-24" ref={ref}>
      <div
        className={`max-w-5xl mx-auto px-8 transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <SectionBadge text={tr.badge} />
        <h2 className="text-4xl font-bold text-gray-900 mb-2">{tr.title}</h2>
        <p className="text-gray-500 mb-12">{tr.subtitle}</p>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow flex flex-col"
            >
              <h3 className="font-bold text-gray-900 text-base mb-2">{project.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{project.desc[lang]}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <Tag key={tag} label={tag} />
                ))}
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="mt-auto text-teal-600 text-sm font-medium hover:underline flex items-center gap-1"
              >
                {tr.repo} <FiExternalLink size={12} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
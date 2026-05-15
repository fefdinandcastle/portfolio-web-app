import { FiExternalLink } from 'react-icons/fi';
import { Lang } from '../types';
import { translations } from '../i18n/translations';
import { projects } from '../data/projects';
import { useInView } from '../hooks/useInView';

const ACCENT_COLORS = ['#06d6a0', '#7c6af7', '#e63946', '#ffd60a', '#ff9500'];

interface ProjectsProps {
  lang: Lang;
}

export function Projects({ lang }: ProjectsProps) {
  const tr = translations[lang].projects;
  const { ref, visible } = useInView();

  return (
    <section id="proyectos" ref={ref} className="bg-cream py-24 relative overflow-hidden">
      <span className="absolute -right-3 top-4 text-[220px] font-extrabold text-ink opacity-[0.03] tracking-[-0.06em] leading-none select-none pointer-events-none">05</span>

      <div className={`max-w-5xl mx-auto px-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'}`}>

        {/* Section header */}
        <div className="inline-flex items-center gap-1.5 bg-brand-teal text-ink text-[11px] font-medium tracking-[0.08em] uppercase py-[5px] px-3 mb-5 border-2 border-ink shadow-brutal-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-ink shrink-0 inline-block" />
          {tr.badge}
        </div>

        <h2
          className="font-bold text-ink tracking-[-0.02em] leading-[1.1] mb-2"
          style={{ fontSize: 'clamp(28px,4vw,40px)' }}
        >
          {tr.title}
        </h2>
        <p className="text-[#777] text-[15px] mb-12">{tr.subtitle}</p>

        <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
          {projects.map((project, i) => (
            <ProjectCard
              key={i}
              project={project}
              lang={lang}
              repoLabel={tr.repo}
              index={i}
              accentColor={ACCENT_COLORS[i % ACCENT_COLORS.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: (typeof projects)[number];
  lang: Lang;
  repoLabel: string;
  index: number;
  accentColor: string;
}

function ProjectCard({ project, lang, repoLabel, index, accentColor }: ProjectCardProps) {
  return (
    <div className="group flex flex-col bg-white border-2 border-ink shadow-brutal-md hover:shadow-brutal-sm hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150 overflow-hidden">

      {/* Colored header strip */}
      <div
        className="flex items-center justify-between py-[10px] px-[18px] border-b-[1.5px] border-ink transition-colors duration-150 group-hover:bg-ink"
        style={{ background: accentColor }}
      >
        <span className="text-[10px] font-bold tracking-[0.1em] text-ink uppercase transition-colors duration-150 group-hover:text-cream">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span
          className="w-2 h-2 transition-colors duration-150 group-hover:bg-transparent"
          style={{ background: '#111' }}
        />
      </div>

      <div className="flex flex-col flex-1 pt-5 px-5 pb-[22px]">

        <h3 className="text-base font-bold text-ink tracking-[-0.01em] leading-[1.25] mb-2.5">
          {project.name}
        </h3>

        <p className="text-[13px] text-[#555] leading-[1.6] mb-[18px]">{project.desc[lang]}</p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag: string) => (
            <span
              key={tag}
              className="text-[11px] font-medium text-ink border-[1.5px] border-ink py-[3px] px-2 tracking-[0.02em] bg-transparent"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="w-full h-px bg-ink opacity-[0.08] mb-4 mt-auto" />

        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-[5px] text-[12px] font-semibold text-ink border-[1.5px] border-ink py-[5px] px-[10px] no-underline w-fit tracking-[0.02em] shadow-brutal-sm transition-all duration-150 hover:bg-ink hover:text-cream hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
        >
          {repoLabel}
          <FiExternalLink size={11} />
        </a>
      </div>
    </div>
  );
}

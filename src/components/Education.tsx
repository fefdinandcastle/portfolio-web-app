import { Lang } from '../types';
import { translations } from '../i18n/translations';
import { useInView } from '../hooks/useInView';
import { educations } from '../data/educations';

interface EducationProps {
  lang: Lang;
}

export function Education({ lang }: EducationProps) {
  const tr = translations[lang].education;
  const { ref, visible } = useInView();
  const ed = educations[0];

  return (
    <section id="formacion" ref={ref} className="bg-white py-24 relative overflow-hidden">
      <span className="absolute -right-3 top-4 text-[220px] font-extrabold text-ink opacity-[0.025] tracking-[-0.06em] leading-none select-none pointer-events-none">02</span>

      <div className={`max-w-5xl mx-auto px-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'}`}>

        {/* Section header */}
        <div className="inline-flex items-center gap-1.5 bg-brand-yellow text-ink text-[11px] font-medium tracking-[0.08em] uppercase py-[5px] px-3 mb-5 border-2 border-ink shadow-brutal-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-ink shrink-0 inline-block" />
          {tr.badge}
        </div>

        <h2
          className="font-bold text-ink tracking-[-0.02em] leading-[1.1] mb-12"
          style={{ fontSize: 'clamp(28px,4vw,40px)' }}
        >
          {tr.title}
        </h2>

        <EducationCard ed={ed} lang={lang} />
      </div>
    </section>
  );
}

interface CardProps {
  ed: (typeof educations)[number];
  lang: Lang;
}

function EducationCard({ ed, lang }: CardProps) {
  return (
    <div className="grid grid-cols-1 bg-cream border-2 border-ink shadow-brutal-lg hover:shadow-brutal-sm hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-150 overflow-hidden">
      {/* Top accent bar */}
      <div className="h-1 w-full bg-brand-yellow" />

      <div className="pt-7 px-8 pb-8">
        {/* Header */}
        <div className="flex flex-wrap justify-between items-start gap-3 mb-1.5">
          <h3 className="text-xl font-bold text-ink tracking-[-0.015em] leading-[1.2]">
            {ed.title[lang]}
          </h3>
          <span className="text-[11px] font-medium text-[#888] tracking-[0.05em] border-[1.5px] border-ink py-[3px] px-[10px] whitespace-nowrap bg-white">
            {ed.period[lang]}
          </span>
        </div>

        <p className="text-sm font-semibold text-brand-purple tracking-[0.01em] mb-4">
          {ed.institution}
        </p>

        <div className="w-full h-px bg-ink opacity-10 mb-4" />

        <p className="text-sm text-[#555] leading-[1.65] mb-6">{ed.desc[lang]}</p>

        <p className="text-[10px] font-semibold tracking-[0.1em] text-[#aaa] uppercase mb-3.5">
          {ed.badge}
        </p>

        <div className="flex flex-wrap gap-2">
          {ed.tags.map((tag: string) => (
            <TagItem key={tag} label={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}

function TagItem({ label }: { label: string }) {
  return (
    <span className="text-[12px] font-medium text-ink border-[1.5px] border-ink py-1 px-[10px] cursor-default transition-all duration-150 hover:bg-brand-yellow hover:shadow-brutal-sm inline-block">
      {label}
    </span>
  );
}

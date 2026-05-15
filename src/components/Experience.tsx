import { Lang } from '../types';
import { translations } from '../i18n/translations';
import { useInView } from '../hooks/useInView';
import { experiences } from '../data/experiences';

const CARD_COLORS = ['#e63946', '#ff9500', '#ffd60a', '#06d6a0', '#7c6af7'];

interface ExperienceProps {
  lang: Lang;
}

export function Experience({ lang }: ExperienceProps) {
  const tr = translations[lang].experience;
  const { ref, visible } = useInView();

  return (
    <section id="trayectoria" ref={ref} className="bg-cream py-24 relative overflow-hidden">
      <span className="absolute -right-3 top-4 text-[220px] font-extrabold text-ink opacity-[0.03] tracking-[-0.06em] leading-none select-none pointer-events-none">01</span>

      <div className={`max-w-5xl mx-auto px-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'}`}>

        {/* Section header */}
        <div className="inline-flex items-center gap-1.5 bg-brand-red text-white text-[11px] font-medium tracking-[0.08em] uppercase py-[5px] px-3 mb-5 border-2 border-ink shadow-brutal-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0 inline-block" />
          {tr.badge}
        </div>

        <h2
          className="font-bold text-ink tracking-[-0.02em] leading-[1.1] mb-2"
          style={{ fontSize: 'clamp(28px,4vw,40px)' }}
        >
          {tr.title}
        </h2>
        <p className="text-[#777] text-[15px] mb-14">{tr.subtitle}</p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-ink opacity-[0.15]" />

          <div className="flex flex-col gap-5 pl-12">
            {experiences.map((exp, i) => (
              <ExperienceCard key={i} exp={exp} lang={lang} accentColor={CARD_COLORS[i % CARD_COLORS.length]} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface CardProps {
  exp: (typeof experiences)[number];
  lang: Lang;
  accentColor: string;
}

function ExperienceCard({ exp, lang, accentColor }: CardProps) {
  return (
    <div className="relative group">

      {/* Timeline dot */}
      <div
        className="absolute -left-[34px] top-[22px] w-2.5 h-2.5 border-2 border-ink z-[1]"
        style={{ background: accentColor }}
      />

      {/* Card */}
      <div className="bg-white border-2 border-ink shadow-brutal-md hover:shadow-brutal-sm hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150 cursor-default overflow-hidden">
        {/* Accent bar */}
        <div className="h-1 w-full" style={{ background: accentColor }} />

        <div className="py-5 px-6">
          {/* Header */}
          <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
            <h3 className="text-base font-semibold text-ink leading-[1.3] tracking-[-0.01em]">
              {exp.role[lang]}{' '}
              <span
                className="inline-block w-1 h-1 align-middle mx-1.5 mb-0.5"
                style={{ background: accentColor }}
              />
              {exp.company}
            </h3>

            <span className="text-[11px] font-medium text-[#888] tracking-[0.04em] whitespace-nowrap border border-ink/[0.15] py-0.5 px-2">
              {exp.period}
            </span>
          </div>

          <p className="text-[13px] text-[#888] mb-4 tracking-[0.01em]">{exp.location[lang]}</p>

          <div className="w-full h-px bg-ink opacity-[0.07] mb-3.5" />

          <ul className="flex flex-col gap-2 mb-4">
            {exp.bullets[lang].map((bullet: string, j: number) => (
              <li key={j} className="flex gap-2.5 text-[13px] text-[#444] leading-[1.55]">
                <span
                  className="shrink-0 mt-[5px] w-[5px] h-[5px] inline-block opacity-80"
                  style={{ background: accentColor }}
                />
                {bullet}
              </li>
            ))}
          </ul>

          <p className="text-[11px] font-semibold tracking-[0.08em] text-[#aaa] uppercase">
            {exp.stack}
          </p>
        </div>
      </div>
    </div>
  );
}

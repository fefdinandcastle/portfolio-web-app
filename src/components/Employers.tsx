import { useState } from 'react';
import { Lang } from '../types';
import { experiences } from '../data/experiences';

interface EmployersProps {
  lang: Lang;
}

function getInitials(name: string): string {
  const words = name.split(/[\s·\-]+/).filter(Boolean);
  if (words.length === 1) return name.slice(0, 2).toUpperCase();
  return words
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('');
}

interface LogoCardProps {
  company: string;
  period: string;
  logo?: string;
}

function LogoCard({ company, period, logo }: LogoCardProps) {
  const [imgError, setImgError] = useState(false);
  const showInitials = !logo || imgError;

  return (
    <div className="flex flex-col items-center gap-3 group">
      <div className="w-16 h-16 border-2 border-ink bg-white shadow-brutal-sm flex items-center justify-center overflow-hidden transition-all duration-150 group-hover:shadow-brutal-xs group-hover:translate-x-[2px] group-hover:translate-y-[2px]">
        {showInitials ? (
          <span className="text-[15px] font-bold text-ink tracking-tight">
            {getInitials(company)}
          </span>
        ) : (
          <img
            src={logo}
            alt={company}
            className="w-full h-full object-contain p-2"
            onError={() => setImgError(true)}
          />
        )}
      </div>
      <div className="text-center">
        <p className="text-[12px] font-semibold text-ink leading-tight">{company}</p>
        <p className="text-[10px] text-[#999] mt-0.5 tracking-[0.02em]">{period}</p>
      </div>
    </div>
  );
}

export function Employers({ lang }: EmployersProps) {
  const label = lang === 'es' ? 'DÓNDE HE TRABAJADO' : 'WHERE I\'VE WORKED';

  return (
    <section className="bg-cream border-b-2 border-ink py-8">
      <div className="max-w-5xl mx-auto px-8">
        <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#bbb] mb-6 text-center">
          {label}
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-14">
          {experiences.map((exp) => (
            <LogoCard
              key={exp.company}
              company={exp.company}
              period={exp.period}
              logo={exp.logo}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

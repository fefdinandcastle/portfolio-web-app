import React from 'react';
import { Lang } from '../types';
import { translations } from '../i18n/translations';
import { useInView } from '../hooks/useInView';
import { stackIcons } from '../data/stack';

interface StackProps {
  lang: Lang;
}

export function Stack({ lang }: StackProps) {
  const tr = translations[lang].stack;
  const { ref, visible } = useInView();

  return (
    <section id="stack" ref={ref} className="bg-cream py-24 relative overflow-hidden">
      <span className="absolute -right-3 top-4 text-[220px] font-extrabold text-ink opacity-[0.03] tracking-[-0.06em] leading-none select-none pointer-events-none">04</span>

      <div className={`max-w-5xl mx-auto px-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'}`}>

        {/* Section header */}
        <div className="inline-flex items-center gap-1.5 bg-brand-purple text-white text-[11px] font-medium tracking-[0.08em] uppercase py-[5px] px-3 mb-5 border-2 border-ink shadow-brutal-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0 inline-block" />
          {tr.badge}
        </div>

        <h2
          className="font-bold text-ink tracking-[-0.02em] leading-[1.1] mb-2"
          style={{ fontSize: 'clamp(28px,4vw,40px)' }}
        >
          {tr.title}
        </h2>
        <p className="text-[#777] text-[15px] mb-12">{tr.subtitle}</p>

        {/* Icon grid */}
        <div
          className="grid gap-2.5 mb-12"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(88px, 1fr))' }}
        >
          {stackIcons.map(({ name, icon: Icon, color }) => (
            <StackItem key={name} name={name} Icon={Icon} color={color} />
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-ink opacity-10" />

      </div>
    </section>
  );
}

interface StackItemProps {
  name: string;
  Icon: React.ComponentType<{ size?: number; color?: string }>;
  color: string;
}

function StackItem({ name, Icon, color }: StackItemProps) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`flex flex-col items-center justify-center gap-2.5 py-4 px-2 border-2 border-ink shadow-brutal transition-all duration-150 cursor-default
        ${hovered ? 'bg-ink shadow-brutal-xs translate-x-[2px] translate-y-[2px]' : 'bg-white'}`}
    >
      <Icon size={26} color={hovered ? '#f5f4f0' : color} />
      <span className={`text-[11px] font-medium text-center leading-[1.3] tracking-[0.01em] transition-colors duration-150 ${hovered ? 'text-cream' : 'text-[#444]'}`}>
        {name}
      </span>
    </div>
  );
}

function LearningTag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[12px] font-medium text-ink border-[1.5px] border-ink py-1 px-[10px] tracking-[0.02em] cursor-default transition-all duration-150 hover:bg-ink hover:text-cream">
      <span className="w-[5px] h-[5px] rounded-full bg-brand-purple shrink-0 opacity-80 inline-block" />
      {label}
    </span>
  );
}

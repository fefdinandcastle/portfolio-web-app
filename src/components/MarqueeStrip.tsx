const ITEMS = [
  'Spring Boot', 'React', 'TypeScript', 'Tailwind', 'Three.js', 'Jenkins',
  'AWS', 'Java', 'Docker', 'PostgreSQL', 'Git',
  'Full Stack', 'REST APIs', 'GCP', 'Node.js', 'CI / CD',
];

interface MarqueeStripProps {
  direction?: 'left' | 'right';
  accent?: string;
}

export function MarqueeStrip({ direction = 'left', accent = '#ffd60a' }: MarqueeStripProps) {
  const anim = direction === 'right' ? 'marquee-rev' : 'marquee-fwd';

  return (
    <div className="bg-ink border-t-2 border-b-2 border-ink overflow-hidden py-[11px] flex whitespace-nowrap">
      <div
        className="inline-flex"
        style={{ animation: `${anim} 30s linear infinite` }}
      >
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center pr-9 text-[11px] font-bold tracking-[0.13em] uppercase font-mono gap-[10px]"
            style={{ color: i % 4 === 0 ? accent : '#f5f4f0' }}
          >
            <span style={{ color: accent, fontSize: 7, opacity: 0.8 }}>◆</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

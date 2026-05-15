const ITEMS = [
  'Spring Boot', 'Angular', 'React', 'TypeScript', 'Oracle SQL',
  'AWS', 'Java', 'Docker', 'PostgreSQL', 'Git',
  'Full Stack', 'REST APIs', 'Agile', 'Node.js', 'CI / CD',
];

interface MarqueeStripProps {
  direction?: 'left' | 'right';
  accent?: string;
}

export function MarqueeStrip({ direction = 'left', accent = '#ffd60a' }: MarqueeStripProps) {
  const anim = direction === 'right' ? 'marquee-rev' : 'marquee-fwd';

  return (
    <div
      style={{
        background: '#111',
        borderTop: '2px solid #111',
        borderBottom: '2px solid #111',
        overflow: 'hidden',
        padding: '11px 0',
        display: 'flex',
        whiteSpace: 'nowrap',
      }}
    >
      <div style={{ display: 'inline-flex', animation: `${anim} 30s linear infinite` }}>
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span
            key={i}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              paddingRight: 36,
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.13em',
              textTransform: 'uppercase',
              color: i % 4 === 0 ? accent : '#f5f4f0',
              fontFamily: 'monospace',
              gap: 10,
            }}
          >
            <span style={{ color: accent, fontSize: 7, opacity: 0.8 }}>◆</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

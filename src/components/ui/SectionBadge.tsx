interface SectionBadgeProps {
  text: string;
  color?: string;
}

export function SectionBadge({ text, color = '#111' }: SectionBadgeProps) {
  return (
    <div
      className="inline-flex items-center gap-1.5 text-[11px] font-medium tracking-[0.08em] uppercase py-[5px] px-3 mb-5 border-2 border-ink shadow-brutal-sm"
      style={{ background: color, color: color === '#111' ? '#f5f4f0' : '#111' }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full shrink-0 inline-block"
        style={{ background: color === '#111' ? '#f5f4f0' : '#111' }}
      />
      {text}
    </div>
  );
}

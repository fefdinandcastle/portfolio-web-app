import React from 'react';

interface SectionBadgeProps {
  text: string;
}

export function SectionBadge({ text }: SectionBadgeProps) {
  return (
    <p className="bg-gray-900 text-[#f5f4f0] uppercase tracking-widest text-xs px-3 py-1.5 rounded-none">
      {text}
    </p>
  );
}
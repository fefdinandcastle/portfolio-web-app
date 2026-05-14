import React from 'react';

interface SectionBadgeProps {
  text: string;
}

export function SectionBadge({ text }: SectionBadgeProps) {
  return (
    <p className="text-xs font-semibold tracking-[0.18em] text-teal-600 mb-2">
      {text}
    </p>
  );
}
import React from 'react';

interface TagProps {
  label: string;
}

export function Tag({ label }: TagProps) {
  return (
    <span className="px-3 py-1 text-xs border border-gray-200 rounded-full text-gray-600 bg-white/60">
      {label}
    </span>
  );
}
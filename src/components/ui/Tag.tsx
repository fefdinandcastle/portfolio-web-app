interface TagProps {
  label: string;
}

export function Tag({ label }: TagProps) {
  return (
    <span className="text-[12px] font-medium text-ink border-[1.5px] border-ink py-1 px-[10px] bg-white tracking-[0.02em] inline-block">
      {label}
    </span>
  );
}

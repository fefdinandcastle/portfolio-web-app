import React from 'react';
import { Lang } from '../types';
import { translations } from '../i18n/translations';
import { FaLinkedin } from 'react-icons/fa';

const YOUR_NAME = 'Gerardo Lerma';

const SOCIAL_LINKS = [
  { href: 'https://linkedin.com', icon: FaLinkedin, label: 'LinkedIn',    color: '#06d6a0' },
];

interface FooterProps {
  lang: Lang;
}

export function Footer({ lang }: FooterProps) {
  const tr = translations[lang].footer;

  return (
    <footer className="border-t-[3px] border-ink bg-cream pt-10 pb-8">
      <div className="max-w-5xl mx-auto px-8 flex flex-col gap-5">

        {/* Top row */}
        <div className="flex justify-between items-center flex-wrap gap-4">
          <div>
            <p className="font-bold text-ink text-base m-0 tracking-[-0.01em]">{YOUR_NAME}</p>
            <p className="text-[13px] text-[#777] mt-1 tracking-[0.01em]">
              {tr.location} · {tr.role}
            </p>
          </div>

          <div className="flex gap-2">
            {SOCIAL_LINKS.map(({ href, icon: Icon, label, color }) => (
              <SocialButton key={label} href={href} icon={<Icon size={16} />} label={label} color={color} />
            ))}
          </div>
        </div>

        <div className="w-full h-px bg-ink opacity-10" />

        <p className="text-[12px] text-[#999] m-0 text-center tracking-[0.02em]">
          © {new Date().getFullYear()} {YOUR_NAME} · {tr.made}
        </p>
      </div>
    </footer>
  );
}

interface SocialButtonProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  color: string;
}

function SocialButton({ href, icon, label, color }: SocialButtonProps) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`flex items-center justify-center w-9 h-9 border-2 border-ink text-ink no-underline transition-all duration-150
        ${hovered ? 'shadow-brutal-xs translate-x-[2px] translate-y-[2px]' : 'bg-white shadow-brutal'}`}
      style={{ background: hovered ? color : undefined }}
    >
      {icon}
    </a>
  );
}

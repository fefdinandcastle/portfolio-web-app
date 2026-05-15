import React from 'react';
import { SiX, SiGithub, SiLinkerd } from 'react-icons/si';
import { Lang } from '../types';
import { translations } from '../i18n/translations';

const YOUR_NAME = '[Tu Nombre]';

const SOCIAL_LINKS = [
  { href: 'https://x.com', icon: SiX, label: 'X / Twitter', color: '#ffd60a' },
  { href: 'https://github.com', icon: SiGithub, label: 'GitHub', color: '#7c6af7' },
  { href: 'https://linkedin.com', icon: SiLinkerd, label: 'LinkedIn', color: '#06d6a0' },
];

interface FooterProps {
  lang: Lang;
}

export function Footer({ lang }: FooterProps) {
  const tr = translations[lang].footer;

  return (
    <footer
      style={{
        borderTop: '3px solid #111',
        background: '#f5f4f0',
        padding: '40px 0 32px',
      }}
    >
      <div
        style={{
          maxWidth: 1024,
          margin: '0 auto',
          padding: '0 32px',
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          <div>
            <p style={{ fontWeight: 700, color: '#111', fontSize: 16, margin: 0, letterSpacing: '-0.01em' }}>
              {YOUR_NAME}
            </p>
            <p style={{ fontSize: 13, color: '#777', margin: '4px 0 0', letterSpacing: '0.01em' }}>
              {tr.location} · {tr.role}
            </p>
          </div>

          {/* Social buttons — neo brutalism square style */}
          <div style={{ display: 'flex', gap: 8 }}>
            {SOCIAL_LINKS.map(({ href, icon: Icon, label, color }) => (
              <SocialButton key={label} href={href} icon={<Icon size={16} />} label={label} color={color} />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ width: '100%', height: 1, background: '#111', opacity: 0.1 }} />

        {/* Bottom row */}
        <p style={{ fontSize: 12, color: '#999', margin: 0, textAlign: 'center', letterSpacing: '0.02em' }}>
          © {new Date().getFullYear()} {YOUR_NAME} · {tr.made}
        </p>
      </div>
    </footer>
  );
}

// ── Social button ─────────────────────────────────────────────────────────────
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
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 36,
        height: 36,
        background: hovered ? color : '#fff',
        border: '2px solid #111',
        borderRadius: 0,
        color: '#111',
        boxShadow: hovered ? '1px 1px 0 #111' : '3px 3px 0 #111',
        transform: hovered ? 'translate(2px, 2px)' : 'translate(0, 0)',
        transition: 'background 0.15s, box-shadow 0.15s, transform 0.15s',
        textDecoration: 'none',
      }}
    >
      {icon}
    </a>
  );
}

import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { Lang } from '../types';
import { translations } from '../i18n/translations';
import { useInView } from '../hooks/useInView';
import { certifications } from '../data/certifications';

const CERT_COLORS = ['#7c6af7', '#e63946', '#ffd60a', '#06d6a0', '#ff9500'];

interface CertificationsProps {
  lang: Lang;
}

export function Certifications({ lang }: CertificationsProps) {
  const tr = translations[lang].certs;
  const { ref, visible } = useInView();

  return (
    <section
      id="certificaciones"
      ref={ref}
      style={{ background: '#fff', padding: '96px 0' }}
    >
      <div
        style={{
          maxWidth: 1024,
          margin: '0 auto',
          padding: '0 32px',
          transition: 'opacity 0.7s, transform 0.7s',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(28px)',
        }}
      >

        {/* ── Section header ──────────────────────────────────────────────── */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            background: '#ff9500',
            color: '#111',
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            padding: '5px 12px',
            borderRadius: 0,
            marginBottom: 20,
            border: '2px solid #111',
            boxShadow: '2px 2px 0 #111',
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: '#111',
              display: 'inline-block',
              flexShrink: 0,
            }}
          />
          {tr.badge}
        </div>

        <h2
          style={{
            fontSize: 'clamp(28px, 4vw, 40px)',
            fontWeight: 700,
            color: '#111',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            marginBottom: 48,
          }}
        >
          {tr.title}
        </h2>

        {/* ── Grid ─────────────────────────────────────────────────────────── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 12,
          }}
        >
          {certifications.map((cert, i) => (
            <CertCard key={i} cert={cert} lang={lang} index={i} accentColor={CERT_COLORS[i % CERT_COLORS.length]} />
          ))}
        </div>

      </div>
    </section>
  );
}

// ── Card subcomponent ─────────────────────────────────────────────────────────
interface CertCardProps {
  cert: (typeof certifications)[number];
  lang: Lang;
  index: number;
  accentColor: string;
}

function CertCard({ cert, lang, accentColor }: CertCardProps) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        background: '#f5f4f0',
        border: '2px solid #111',
        borderRadius: 0,
        boxShadow: hovered ? '1px 1px 0 #111' : '4px 4px 0 #111',
        transform: hovered ? 'translate(3px, 3px)' : 'translate(0, 0)',
        transition: 'box-shadow 0.15s, transform 0.15s',
        overflow: 'hidden',
      }}
    >
      {/* Colored top accent bar */}
      <div style={{ height: 4, background: accentColor }} />

      <div style={{ padding: '20px 22px 22px', display: 'flex', flexDirection: 'column', flex: 1 }}>

        {/* Category */}
        <p
          style={{
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: accentColor === '#ffd60a' ? '#b38f00' : accentColor,
            marginBottom: 10,
          }}
        >
          {cert.cat[lang]}
        </p>

        {/* Title */}
        <h3
          style={{
            fontSize: 15,
            fontWeight: 700,
            color: '#111',
            lineHeight: 1.3,
            letterSpacing: '-0.01em',
            marginBottom: 6,
          }}
        >
          {cert.title}
        </h3>

        {/* Date */}
        <p
          style={{
            fontSize: 12,
            color: '#999',
            letterSpacing: '0.02em',
            marginBottom: 20,
          }}
        >
          {cert.date[lang]}
        </p>

        {/* Divider */}
        <div
          style={{
            width: '100%',
            height: 1,
            background: '#111',
            opacity: 0.08,
            marginBottom: 16,
            marginTop: 'auto',
          }}
        />

        {/* Link */}
        <a
          href={cert.link}
          target="_blank"
          rel="noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 5,
            fontSize: 12,
            fontWeight: 600,
            color: hovered ? '#f5f4f0' : '#111',
            background: hovered ? '#111' : 'transparent',
            border: '1.5px solid #111',
            padding: '5px 10px',
            borderRadius: 0,
            textDecoration: 'none',
            width: 'fit-content',
            letterSpacing: '0.02em',
            boxShadow: hovered ? 'none' : '2px 2px 0 #111',
            transform: hovered ? 'translate(2px, 2px)' : 'translate(0,0)',
            transition: 'background 0.15s, color 0.15s, box-shadow 0.15s, transform 0.15s',
          }}
        >
          {cert.linkText[lang]}
          <FiExternalLink size={11} />
        </a>
      </div>
    </div>
  );
}

import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { Lang } from '../types';
import { translations } from '../i18n/translations';
import { useInView } from '../hooks/useInView';
import { certifications } from '../data/certifications';

// import { certifications } from '../data/certifications';

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
            background: '#111',
            color: '#f5f4f0',
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            padding: '5px 12px',
            borderRadius: 0,
            marginBottom: 20,
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: '#7c6af7',
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
            <CertCard key={i} cert={cert} lang={lang} index={i} />
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
}

function CertCard({ cert, lang, index }: CertCardProps) {
  const [hovered, setHovered] = React.useState(false);

  // Subtle index-based offset so cards don't all look identical
  const shadowSize = hovered ? '1px 1px' : '4px 4px';
  const translate = hovered ? 'translate(3px, 3px)' : 'translate(0, 0)';

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
        boxShadow: `${shadowSize} 0 #111`,
        transform: translate,
        transition: 'box-shadow 0.15s, transform 0.15s',
        overflow: 'hidden',
      }}
    >
      {/* Top accent — thin violet bar */}
      <div style={{ height: 2, background: '#7c6af7', opacity: index % 2 === 0 ? 1 : 0.45 }} />

      <div style={{ padding: '20px 22px 22px', display: 'flex', flexDirection: 'column', flex: 1 }}>

        {/* Category */}
        <p
          style={{
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#7c6af7',
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
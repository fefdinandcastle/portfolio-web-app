import React from 'react';
import { Lang } from '../types';
import { translations } from '../i18n/translations';
import { useInView } from '../hooks/useInView';
import { educations } from '../data/educations';

interface EducationProps {
  lang: Lang;
}

export function Education({ lang }: EducationProps) {
  const tr = translations[lang].education;
  const { ref, visible } = useInView();

  const ed = educations[0];

  return (
    <section
      id="formacion"
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
            background: '#ffd60a',
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

        {/* ── Single university card ───────────────────────────────────────── */}
        <EducationCard ed={ed} lang={lang} />

      </div>
    </section>
  );
}

// ── Card subcomponent ─────────────────────────────────────────────────────────
interface CardProps {
  ed: (typeof educations)[number];
  lang: Lang;
}

function EducationCard({ ed, lang }: CardProps) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        background: '#f5f4f0',
        border: '2px solid #111',
        borderRadius: 0,
        boxShadow: hovered ? '2px 2px 0 #111' : '5px 5px 0 #111',
        transform: hovered ? 'translate(3px, 3px)' : 'translate(0, 0)',
        transition: 'box-shadow 0.15s, transform 0.15s',
        overflow: 'hidden',
      }}
    >
      {/* Top accent bar — yellow */}
      <div style={{ height: 4, background: '#ffd60a', width: '100%' }} />

      <div style={{ padding: '28px 32px 32px' }}>

        {/* Header row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: 12,
            marginBottom: 6,
          }}
        >
          <h3
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: '#111',
              letterSpacing: '-0.015em',
              lineHeight: 1.2,
            }}
          >
            {ed.title[lang]}
          </h3>

          {/* Period */}
          <span
            style={{
              fontSize: 11,
              fontWeight: 500,
              color: '#888',
              letterSpacing: '0.05em',
              border: '1.5px solid #111',
              padding: '3px 10px',
              borderRadius: 0,
              whiteSpace: 'nowrap',
              background: '#fff',
            }}
          >
            {ed.period[lang]}
          </span>
        </div>

        {/* Institution */}
        <p
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: '#7c6af7',
            letterSpacing: '0.01em',
            marginBottom: 16,
          }}
        >
          {ed.institution}
        </p>

        {/* Divider */}
        <div
          style={{
            width: '100%',
            height: 1,
            background: '#111',
            opacity: 0.1,
            marginBottom: 16,
          }}
        />

        {/* Description */}
        <p
          style={{
            fontSize: 14,
            color: '#555',
            lineHeight: 1.65,
            marginBottom: 24,
          }}
        >
          {ed.desc[lang]}
        </p>

        {/* Badge label */}
        <p
          style={{
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: '0.1em',
            color: '#aaa',
            textTransform: 'uppercase',
            marginBottom: 14,
          }}
        >
          {ed.badge}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {ed.tags.map((tag: string) => (
            <TagItem key={tag} label={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Tag subcomponent ──────────────────────────────────────────────────────────
function TagItem({ label }: { label: string }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontSize: 12,
        fontWeight: 500,
        color: hovered ? '#111' : '#111',
        background: hovered ? '#ffd60a' : 'transparent',
        border: hovered ? '1.5px solid #111' : '1.5px solid #111',
        padding: '4px 10px',
        borderRadius: 0,
        letterSpacing: '0.02em',
        cursor: 'default',
        transition: 'background 0.15s',
        display: 'inline-block',
        boxShadow: hovered ? '2px 2px 0 #111' : 'none',
      }}
    >
      {label}
    </span>
  );
}

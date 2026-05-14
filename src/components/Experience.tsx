import React from 'react';
import { Lang } from '../types';
import { translations } from '../i18n/translations';
import { useInView } from '../hooks/useInView';
import { experiences } from '../data/experiences';

// ── Keep your existing experiences data array as-is ───────────────────────────
// import { experiences } from '../data/experiences';

interface ExperienceProps {
  lang: Lang;
}

export function Experience({ lang }: ExperienceProps) {
  const tr = translations[lang].experience;
  const { ref, visible } = useInView();

  return (
    <section
      id="trayectoria"
      ref={ref}
      style={{ background: '#f5f4f0', padding: '96px 0' }}
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
            marginBottom: 8,
          }}
        >
          {tr.title}
        </h2>
        <p style={{ color: '#777', fontSize: 15, marginBottom: 56 }}>
          {tr.subtitle}
        </p>

        {/* ── Timeline ────────────────────────────────────────────────────── */}
        <div style={{ position: 'relative' }}>

          {/* Vertical line – solid #111 at low opacity */}
          <div
            style={{
              position: 'absolute',
              left: 16,
              top: 0,
              bottom: 0,
              width: 2,
              background: '#111',
              opacity: 0.12,
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, paddingLeft: 48 }}>
            {experiences.map((exp, i) => (
              <ExperienceCard key={i} exp={exp} lang={lang} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Card subcomponent ─────────────────────────────────────────────────────────
interface CardProps {
  exp: (typeof experiences)[number];
  lang: Lang;
  index: number;
}

function ExperienceCard({ exp, lang, index }: CardProps) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div style={{ position: 'relative' }}>

      {/* Timeline dot – square, neo brutalism */}
      <div
        style={{
          position: 'absolute',
          left: -34,
          top: 22,
          width: 10,
          height: 10,
          background: index === 0 ? '#7c6af7' : '#f5f4f0',
          border: '2px solid #111',
          borderRadius: 0,
          zIndex: 1,
        }}
      />

      {/* Card */}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: '#fff',
          border: '2px solid #111',
          borderRadius: 0,
          padding: '20px 24px',
          boxShadow: hovered ? '2px 2px 0 #111' : '4px 4px 0 #111',
          transform: hovered ? 'translate(2px, 2px)' : 'translate(0, 0)',
          transition: 'box-shadow 0.15s, transform 0.15s',
          cursor: 'default',
        }}
      >
        {/* Header row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: 8,
            marginBottom: 4,
          }}
        >
          <h3
            style={{
              fontSize: 16,
              fontWeight: 600,
              color: '#111',
              lineHeight: 1.3,
              letterSpacing: '-0.01em',
            }}
          >
            {exp.role[lang]}{' '}
            <span
              style={{
                display: 'inline-block',
                width: 4,
                height: 4,
                background: '#7c6af7',
                borderRadius: 0,
                verticalAlign: 'middle',
                margin: '0 6px 2px',
              }}
            />
            {exp.company}
          </h3>

          {/* Period badge */}
          <span
            style={{
              fontSize: 11,
              fontWeight: 500,
              color: '#888',
              letterSpacing: '0.04em',
              whiteSpace: 'nowrap',
              border: '1px solid rgba(17,17,17,0.15)',
              padding: '2px 8px',
              borderRadius: 0,
            }}
          >
            {exp.period}
          </span>
        </div>

        {/* Location */}
        <p
          style={{
            fontSize: 13,
            color: '#888',
            marginBottom: 16,
            letterSpacing: '0.01em',
          }}
        >
          {exp.location[lang]}
        </p>

        {/* Divider */}
        <div
          style={{
            width: '100%',
            height: 1,
            background: '#111',
            opacity: 0.07,
            marginBottom: 14,
          }}
        />

        {/* Bullets */}
        <ul style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
          {exp.bullets[lang].map((bullet: string, j: number) => (
            <li
              key={j}
              style={{
                display: 'flex',
                gap: 10,
                fontSize: 13,
                color: '#444',
                lineHeight: 1.55,
              }}
            >
              <span
                style={{
                  flexShrink: 0,
                  marginTop: 5,
                  width: 5,
                  height: 5,
                  background: '#7c6af7',
                  borderRadius: 0,
                  display: 'inline-block',
                  opacity: 0.7,
                }}
              />
              {bullet}
            </li>
          ))}
        </ul>

        {/* Stack */}
        <p
          style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: '0.08em',
            color: '#aaa',
            textTransform: 'uppercase',
          }}
        >
          {exp.stack}
        </p>
      </div>
    </div>
  );
}
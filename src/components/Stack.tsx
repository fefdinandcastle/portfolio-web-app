import React from 'react';
import { Lang } from '../types';
import { translations } from '../i18n/translations';
import { useInView } from '../hooks/useInView';
import { learningStack, stackIcons } from '../data/stack';

// import { stackIcons, learningStack } from '../data/stack';

interface StackProps {
  lang: Lang;
}

export function Stack({ lang }: StackProps) {
  const tr = translations[lang].stack;
  const { ref, visible } = useInView();

  return (
    <section
      id="stack"
      ref={ref}
      style={{ background: '#f5f4f0', padding: '96px 0', position: 'relative', overflow: 'hidden' }}
    >
      <span style={{ position: 'absolute', right: -12, top: 16, fontSize: 220, fontWeight: 800, color: '#111', opacity: 0.03, letterSpacing: '-0.06em', lineHeight: 1, userSelect: 'none', pointerEvents: 'none' }}>04</span>
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
            background: '#7c6af7',
            color: '#fff',
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
              background: '#fff',
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
        <p style={{ color: '#777', fontSize: 15, marginBottom: 48 }}>
          {tr.subtitle}
        </p>

        {/* ── Icon grid ────────────────────────────────────────────────────── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(88px, 1fr))',
            gap: 10,
            marginBottom: 48,
          }}
        >
          {stackIcons.map(({ name, icon: Icon, color }) => (
            <StackItem key={name} name={name} Icon={Icon} color={color} />
          ))}
        </div>

        {/* ── Divider ──────────────────────────────────────────────────────── */}
        <div
          style={{
            width: '100%',
            height: 1,
            background: '#111',
            opacity: 0.1,
            marginBottom: 28,
          }}
        />

        {/* ── Learning stack ───────────────────────────────────────────────── */}
        <div>
          <p
            style={{
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#aaa',
              marginBottom: 14,
            }}
          >
            {tr.learning}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {learningStack.map((item: string) => (
              <LearningTag key={item} label={item} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

// ── Stack icon card ───────────────────────────────────────────────────────────
interface StackItemProps {
  name: string;
  Icon: React.ComponentType<{ size?: number; color?: string }>;
  color: string;
}

function StackItem({ name, Icon, color }: StackItemProps) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        padding: '16px 8px 14px',
        background: hovered ? '#111' : '#fff',
        border: '2px solid #111',
        borderRadius: 0,
        boxShadow: hovered ? '1px 1px 0 #111' : '3px 3px 0 #111',
        transform: hovered ? 'translate(2px, 2px)' : 'translate(0, 0)',
        transition: 'background 0.15s, box-shadow 0.15s, transform 0.15s',
        cursor: 'default',
      }}
    >
      {/* Icon — stays colored on hover for legibility */}
      <Icon size={26} color={hovered ? '#f5f4f0' : color} />

      <span
        style={{
          fontSize: 11,
          fontWeight: 500,
          color: hovered ? '#f5f4f0' : '#444',
          textAlign: 'center',
          lineHeight: 1.3,
          letterSpacing: '0.01em',
          transition: 'color 0.15s',
        }}
      >
        {name}
      </span>
    </div>
  );
}

// ── Learning tag ──────────────────────────────────────────────────────────────
function LearningTag({ label }: { label: string }) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        fontSize: 12,
        fontWeight: 500,
        color: hovered ? '#f5f4f0' : '#111',
        background: hovered ? '#111' : 'transparent',
        border: '1.5px solid #111',
        padding: '4px 10px',
        borderRadius: 0,
        letterSpacing: '0.02em',
        cursor: 'default',
        transition: 'background 0.15s, color 0.15s',
      }}
    >
      {/* Small pulsing dot to suggest "in progress" */}
      <span
        style={{
          width: 5,
          height: 5,
          borderRadius: '50%',
          background: hovered ? '#a08ef5' : '#7c6af7',
          display: 'inline-block',
          flexShrink: 0,
          opacity: 0.8,
        }}
      />
      {label}
    </span>
  );
}
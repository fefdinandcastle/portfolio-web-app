import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { Lang } from '../types';
import { translations } from '../i18n/translations';
import { projects } from '../data/projects';
import { useInView } from '../hooks/useInView';

const ACCENT_COLORS = ['#06d6a0', '#7c6af7', '#e63946', '#ffd60a', '#ff9500'];

interface ProjectsProps {
  lang: Lang;
}

export function Projects({ lang }: ProjectsProps) {
  const tr = translations[lang].projects;
  const { ref, visible } = useInView();

  return (
    <section
      id="proyectos"
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
            background: '#06d6a0',
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
            marginBottom: 8,
          }}
        >
          {tr.title}
        </h2>
        <p style={{ color: '#777', fontSize: 15, marginBottom: 48 }}>
          {tr.subtitle}
        </p>

        {/* ── Grid ─────────────────────────────────────────────────────────── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: 12,
          }}
        >
          {projects.map((project, i) => (
            <ProjectCard
              key={i}
              project={project}
              lang={lang}
              repoLabel={tr.repo}
              index={i}
              accentColor={ACCENT_COLORS[i % ACCENT_COLORS.length]}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

// ── Card subcomponent ─────────────────────────────────────────────────────────
interface ProjectCardProps {
  project: (typeof projects)[number];
  lang: Lang;
  repoLabel: string;
  index: number;
  accentColor: string;
}

function ProjectCard({ project, lang, repoLabel, index, accentColor }: ProjectCardProps) {
  const [hovered, setHovered] = React.useState(false);
  const [linkHovered, setLinkHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        background: '#fff',
        border: '2px solid #111',
        borderRadius: 0,
        boxShadow: hovered ? '2px 2px 0 #111' : '4px 4px 0 #111',
        transform: hovered ? 'translate(2px, 2px)' : 'translate(0, 0)',
        transition: 'box-shadow 0.15s, transform 0.15s',
        overflow: 'hidden',
      }}
    >
      {/* Colored header strip */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px 18px',
          background: hovered ? '#111' : accentColor,
          transition: 'background 0.15s',
          borderBottom: '1.5px solid #111',
        }}
      >
        <span
          style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: '0.1em',
            color: hovered ? '#f5f4f0' : '#111',
            textTransform: 'uppercase',
            transition: 'color 0.15s',
          }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>
        <span
          style={{
            width: 8,
            height: 8,
            borderRadius: 0,
            background: hovered ? accentColor : '#111',
            transition: 'background 0.15s',
          }}
        />
      </div>

      <div style={{ padding: '20px 20px 22px', display: 'flex', flexDirection: 'column', flex: 1 }}>

        {/* Project name */}
        <h3
          style={{
            fontSize: 16,
            fontWeight: 700,
            color: '#111',
            letterSpacing: '-0.01em',
            lineHeight: 1.25,
            marginBottom: 10,
          }}
        >
          {project.name}
        </h3>

        {/* Description */}
        <p
          style={{
            fontSize: 13,
            color: '#555',
            lineHeight: 1.6,
            marginBottom: 18,
          }}
        >
          {project.desc[lang]}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
          {project.tags.map((tag: string) => (
            <span
              key={tag}
              style={{
                fontSize: 11,
                fontWeight: 500,
                color: '#111',
                border: '1.5px solid #111',
                padding: '3px 8px',
                borderRadius: 0,
                letterSpacing: '0.02em',
                background: 'transparent',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

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

        {/* Repo link */}
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          onMouseEnter={() => setLinkHovered(true)}
          onMouseLeave={() => setLinkHovered(false)}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 5,
            fontSize: 12,
            fontWeight: 600,
            color: linkHovered ? '#f5f4f0' : '#111',
            background: linkHovered ? '#111' : 'transparent',
            border: '1.5px solid #111',
            padding: '5px 10px',
            borderRadius: 0,
            textDecoration: 'none',
            width: 'fit-content',
            letterSpacing: '0.02em',
            boxShadow: linkHovered ? 'none' : '2px 2px 0 #111',
            transform: linkHovered ? 'translate(2px, 2px)' : 'translate(0, 0)',
            transition: 'background 0.15s, color 0.15s, box-shadow 0.15s, transform 0.15s',
          }}
        >
          {repoLabel}
          <FiExternalLink size={11} />
        </a>
      </div>
    </div>
  );
}

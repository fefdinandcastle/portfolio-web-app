import React from 'react';
import { SiGithub } from 'react-icons/si';
import { Tool } from '../types';

// Inline icon components for tools without a clean react-icons entry
const NotionIcon = () => (
  <span style={{ fontFamily: 'serif', fontWeight: 700, fontSize: '1.5rem', color: '#fff' }}>N</span>
);

const N8nIcon = () => (
  <span style={{ fontFamily: 'sans-serif', fontWeight: 700, fontSize: '1.3rem', color: '#fff' }}>n8n</span>
);

export const tools: Tool[] = [
  {
    icon: SiGithub,
    name: 'GitHub',
    desc: {
      es: 'Repos, CI, revisiones y colaboración: el centro de gravedad del día a día de código.',
      en: "Repos, CI, reviews and collaboration: the center of gravity of daily coding.",
    },
    url: 'github.com',
    bg: '#1a1a1a',
  },
  {
    icon: NotionIcon,
    name: 'Notion',
    desc: {
      es: 'Notas, tableros y documentación viva: dejo ahí contexto de proyectos y listas que no quiero perder.',
      en: "Notes, boards and live documentation: context for projects and lists I don't want to lose.",
    },
    url: 'notion.so',
    bg: '#1a1a1a',
  },
  {
    icon: N8nIcon,
    name: 'n8n',
    desc: {
      es: 'Automatización low-code: encadenar APIs, webhooks y tareas repetitivas sin reinventar la rueda cada vez.',
      en: 'Low-code automation: chain APIs, webhooks and repetitive tasks without reinventing the wheel.',
    },
    url: 'n8n.io',
    bg: '#e74c3c',
  },
];

export const homelabTags: string[] = [
  'Dockge',
  'Uptime Kuma',
  'Beszel',
  'Nginx Proxy Manager',
  'Docker / Compose',
  'Red local & DNS',
];
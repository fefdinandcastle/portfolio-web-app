import {
  SiTypescript, SiJavascript, SiReact, SiNextdotjs, SiAngular,
  SiSpringboot, SiNodedotjs, SiPython, SiPhp,
  SiPostgresql, SiMysql, SiMongodb, SiDocker, SiGit, SiGithub, SiJira,
  SiTailwindcss, SiFlutter,
} from 'react-icons/si';
import { StackIcon } from '../types';

export const stackIcons: StackIcon[] = [
  { name: 'TypeScript',  icon: SiTypescript,  color: '#3178C6' },
  { name: 'JavaScript',  icon: SiJavascript,  color: '#F7DF1E' },
  { name: 'React',       icon: SiReact,       color: '#61DAFB' },
  { name: 'Angular',     icon: SiAngular,     color: '#DD0031' },
  { name: 'Next.js',     icon: SiNextdotjs,   color: '#000000' },
  { name: 'Spring Boot', icon: SiSpringboot,  color: '#6DB33F' },
  { name: 'Node.js',     icon: SiNodedotjs,   color: '#339933' },
  { name: 'Flutter',     icon: SiFlutter,     color: '#02569B' },
  { name: 'Tailwind',    icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'PostgreSQL',  icon: SiPostgresql,  color: '#336791' },
  { name: 'MySQL',       icon: SiMysql,       color: '#4479A1' },
  { name: 'MongoDB',     icon: SiMongodb,     color: '#47A248' },
  { name: 'Docker',      icon: SiDocker,      color: '#2496ED' },
  { name: 'Git',         icon: SiGit,         color: '#F05032' },
  { name: 'GitHub',      icon: SiGithub,      color: '#181717' },
  { name: 'Jira',        icon: SiJira,        color: '#0052CC' },
  { name: 'PHP',         icon: SiPhp,         color: '#777BB4' },
  { name: 'Python',      icon: SiPython,      color: '#3776AB' },
];

export const learningStack: string[] = [
  'Next.js',
  'Supabase',
  'n8n',
  'Docker',
  'Sistemas agénticos',
];
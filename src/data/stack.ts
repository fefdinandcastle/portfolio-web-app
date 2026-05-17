import {
  SiTypescript, SiJavascript, SiReact, SiNextdotjs, SiAngular,
  SiSpringboot, SiNodedotjs, SiPython, SiPhp,
  SiPostgresql, SiMysql, SiMongodb, SiDocker, SiGit, SiGithub, SiJira,
  SiTailwindcss, SiFlutter,
  SiJenkins,
  SiGooglecloud,
} from 'react-icons/si';
import { StackIcon } from '../types';

export const stackIcons: StackIcon[] = [
  { name: 'TypeScript',  icon: SiTypescript,  color: '#3178C6' },
  { name: 'JavaScript',  icon: SiJavascript,  color: '#F7DF1E' },
  { name: 'React',       icon: SiReact,       color: '#61DAFB' },
  { name: 'Next.js',     icon: SiNextdotjs,   color: '#000000' },
  { name: 'Spring Boot', icon: SiSpringboot,  color: '#6DB33F' },
  { name: 'Node.js',     icon: SiNodedotjs,   color: '#339933' },
  { name: 'Tailwind',    icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'PostgreSQL',  icon: SiPostgresql,  color: '#336791' },
  { name: 'MySQL',       icon: SiMysql,       color: '#4479A1' },
  { name: 'Docker',      icon: SiDocker,      color: '#2496ED' },
  { name: 'Git',         icon: SiGit,         color: '#F05032' },
  { name: 'GitHub',      icon: SiGithub,      color: '#181717' },
  { name: 'Jira',        icon: SiJira,        color: '#0052CC' },
  { name: 'Python',      icon: SiPython,      color: '#3776AB' },
  { name: 'Jenkins',     icon: SiJenkins,     color: '#02569B' },
  { name: 'Google Cloud', icon: SiGooglecloud, color: '#4284F3' },
];
import { Experience } from '../types';

export const experiences: Experience[] = [
  {
    role: { es: 'Desarrollador Frontend', en: 'Frontend Developer' },
    company: 'Liverpool',
    location: { es: 'Cuajimalpa de Morelos · CDMX', en: 'Cuajimalpa de Morelos · CDMX' },
    period: 'May 2024 — May 2026',
    logo: '/assets_2d/logos/liverpool.png',
    bullets: {
      es: [
        'Diseño e implementación de automatizaciones internas con n8n y Odoo Enterprise Online, conectando procesos administrativos y reduciendo fricción operativa.',
        'Impacto medible en eficiencia: en semanas pico, los flujos automatizados registraron hasta 26 horas semanales de ahorro de trabajo manual.',
      ],
      en: [
        'Design and implementation of internal automations with n8n and Odoo Enterprise Online, connecting administrative processes and reducing operational friction.',
        'Measurable efficiency impact: during peak weeks, automated flows saved up to 26 hours of manual work weekly.',
      ],
    },
    stack: 'N8N · ODOO ENTERPRISE ONLINE',
  },
  {
    role: { es: 'Software Developer', en: 'Software Developer' },
    company: 'Sky',
    location: {
      es: 'Benito Juárez · CDMX',
      en: 'Santa Cruz de Tenerife · Management System for Orange',
    },
    period: 'May 2022 — May 2024',
    logo: '/assets_2d/logos/sky.png',
    bullets: {
      es: [
        'Desarrollo e integración de funcionalidades en la aplicación de gestión, optimizando rendimiento y alineando cambios con negocio.',
        'Scripts SQL para poblar bases de datos en entornos no productivos e integración de nuevos productos.',
        'Resolución de incidencias: investigación, depuración y soluciones para continuidad del servicio.',
      ],
      en: [
        'Development and integration of features in the management application, optimizing performance and aligning changes with business.',
        'SQL scripts to populate databases in non-productive environments and integration of new products.',
        'Incident resolution: investigation, debugging and solutions for service continuity.',
      ],
    },
    stack: 'INTEGRACIÓN Y DISEÑO (SUITE CORPORATIVA), ORACLE SQL · JIRA',
  },
];

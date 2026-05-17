import { Education } from '../types';

export const educations: Education[] = [
  {
    title: {
      es: 'Ingeniería en Computación',
      en: 'CFGS — Multiplatform Application Development',
    },
    institution: '(UAM) Universidad Autónoma Metropolitana | Unidad Cuajimalpa',
    period: { es: '2016 — 2022', en: '2016 — 2022' },
    logo: '/assets_2d/logos/uam.png',
    desc: {
      es: 'Formación sólida centrada en el diseño de algoritmos complejos, administración de proyectos de software y aplicación de metodologías ágiles para el ciclo de vida de desarrollo.',
      en: 'Ongoing training to expand multiplatform competencies and development best practices.',
    },
    badge: 'STACK DAM',
    tags: ['Python', 'Java', 'JavaScript', 'C', 'C++'],
  },
];

export const awsCourses: string[] = [
  'AWS Cloud Practitioner Essentials',
  'AWS Foundations — Getting Started',
  'Introduction to AWS CAF',
  'Job Roles in the Cloud',
  'Getting Started with Cloud Acquisition',
];

import { Education } from '../types';

export const educations: Education[] = [
  {
    title: {
      es: 'CFGS — Desarrollo de aplicaciones multiplataforma',
      en: 'CFGS — Multiplatform Application Development',
    },
    institution: 'IES Puerto de la Cruz · Telesforo Bravo',
    period: { es: '2016 — 2022', en: '2016 — 2022' },
    logo: '/assets_2d/logos/uam.png',
    desc: {
      es: 'Formación en curso para ampliar competencias multiplataforma y buenas prácticas de desarrollo.',
      en: 'Ongoing training to expand multiplatform competencies and development best practices.',
    },
    badge: 'STACK DAM',
    tags: ['Angular', 'Spring', 'PHP', 'Java', 'PostgreSQL', 'React Native', 'Flutter', 'Expo', 'Unity', 'Odoo'],
  },
];

export const awsCourses: string[] = [
  'AWS Cloud Practitioner Essentials',
  'AWS Foundations — Getting Started',
  'Introduction to AWS CAF',
  'Job Roles in the Cloud',
  'Getting Started with Cloud Acquisition',
];

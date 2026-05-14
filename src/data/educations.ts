import { Education } from '../types';

export const educations: Education[] = [
  {
    title: {
      es: 'CFGS — Desarrollo de aplicaciones multiplataforma',
      en: 'CFGS — Multiplatform Application Development',
    },
    institution: 'IES Puerto de la Cruz · Telesforo Bravo',
    period: { es: '2025 — en curso', en: '2025 — ongoing' },
    desc: {
      es: 'Formación en curso para ampliar competencias multiplataforma y buenas prácticas de desarrollo.',
      en: 'Ongoing training to expand multiplatform competencies and development best practices.',
    },
    badge: 'STACK DAM',
    tags: ['Angular', 'Spring', 'PHP', 'Java', 'PostgreSQL', 'React Native', 'Flutter', 'Expo', 'Unity', 'Odoo'],
  },
  {
    title: {
      es: 'CFGS — Desarrollo de aplicaciones web',
      en: 'CFGS — Web Application Development',
    },
    institution: 'IES Puerto de la Cruz · Telesforo Bravo',
    period: { es: '2021 — 2023', en: '2021 — 2023' },
    desc: {
      es: 'Base sólida en Java, bases de datos, HTML/CSS/JS, Angular, PHP, metodologías ágiles y pruebas con JUnit.',
      en: 'Solid foundation in Java, databases, HTML/CSS/JS, Angular, PHP, agile methodologies and testing with JUnit.',
    },
    badge: 'STACK DAW',
    tags: ['Angular', 'React', 'Bootstrap', 'PHP', 'MySQL', 'MariaDB', 'Java', 'HTML', 'CSS', 'JavaScript', 'TypeScript'],
  },
];

export const awsCourses: string[] = [
  'AWS Cloud Practitioner Essentials',
  'AWS Foundations — Getting Started',
  'Introduction to AWS CAF',
  'Job Roles in the Cloud',
  'Getting Started with Cloud Acquisition',
];
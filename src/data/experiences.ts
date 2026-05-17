import { Experience } from '../types';

export const experiences: Experience[] = [
  {
    role: { es: 'Líder Técnico de Proyecto', en: 'Technical Project Lead' },
    company: 'Liverpool',
    location: { es: 'Cuajimalpa de Morelos · CDMX', en: 'Cuajimalpa de Morelos · CDMX' },
    period: 'May 2024 — Present',
    logo: '/assets_2d/logos/liverpool.png',
    bullets: {
      es: [
        'Liderazgo técnico de proyecto: coordinación entre equipos de back-end (Java / Spring Boot) y front-end (React), asegurando alineación técnica y calidad del entregable.',
        'Configuración y mantenimiento de pipelines CI/CD en Jenkins y gestión de infraestructura en Google Cloud Platform (GCP).',
        'Planeación y conducción de sprints: refinamiento de backlog, estimaciones y seguimiento de avance con el equipo de desarrollo.',
      ],
      en: [
        'Technical project lead: cross-team coordination between back-end (Java / Spring Boot) and front-end (React), ensuring technical alignment and delivery quality.',
        'Configuration and maintenance of CI/CD pipelines in Jenkins and infrastructure management on Google Cloud Platform (GCP).',
        'Sprint planning and facilitation: backlog refinement, estimations and progress tracking with the development team.',
      ],
    },
    stack: 'JAVA · SPRING BOOT · REACT · GCP · JENKINS · JIRA',
  },
  {
    role: { es: 'Desarrollador Frontend', en: 'Frontend Developer' },
    company: 'Sky',
    location: {
      es: 'Benito Juárez · CDMX',
      en: 'Benito Juárez · CDMX',
    },
    period: 'May 2022 — May 2024',
    logo: '/assets_2d/logos/sky.png',
    bullets: {
      es: [
        'Desarrollo colaborativo de la parrilla de programación de TV en web con React: scroll infinito en ambos ejes, carga dinámica de datos conforme el usuario navega y optimización de rendimiento para equipos de bajos recursos.',
        'Consumo e integración de APIs REST: llamadas eficientes y gestión de estado para mantener la parrilla sincronizada con los servicios de back-end.',
        'Uso de servicios AWS en el entorno del proyecto: Lambda, S3 y EC2 para soporte de la infraestructura de contenido.',
        'Maquetado de interfaces siguiendo lineamientos de diseño en Figma, trasladando componentes con fidelidad al diseño aprobado.',
      ],
      en: [
        'Collaborative development of the TV programming grid on web with React: infinite scroll on both axes, dynamic data loading as the user navigates, and performance optimization for low-resource devices.',
        'REST API consumption and integration: efficient request design and state management to keep the grid in sync with back-end services.',
        'AWS service usage in the project environment: Lambda, S3 and EC2 to support content infrastructure.',
        'UI mockups from Figma following design guidelines, translating components with fidelity to approved designs.',
      ],
    },
    stack: 'REACT · API REST · AWS (LAMBDA · S3 · EC2) · FIGMA · JIRA',
  },
];

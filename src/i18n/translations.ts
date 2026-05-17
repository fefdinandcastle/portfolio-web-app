export const translations = {
  es: {
    nav: {
      inicio: 'Inicio',
      trayectoria: 'Trayectoria',
      formacion: 'Formación',
      certificaciones: 'Certificaciones',
      stack: 'Stack',
      proyectos: 'Proyectos',
      herramientas: 'Herramientas',
    },
    hero: {
      badge: 'PORTAFOLIO',
      headline1: 'Liderazgo técnico con enfoque en',
      highlight: 'entrega',
      headline2: 'y producto.',
      bio: 'Soy Gerardo Lerma, líder técnico de proyecto con perfil full-stack. Coordino equipos de back-end (Java) y front-end (React), gestiono infraestructura en GCP y pipelines en Jenkins, y lidero la planeación de sprints en entornos corporativos.',
      linkedin: 'LinkedIn',
      cv: 'Descargar CV',
    },
    experience: {
      badge: 'EXPERIENCIA',
      title: 'Trayectoria profesional',
      subtitle: 'Resumen de mi historial profesional orientado a resultados.',
    },
    education: {
      badge: 'ESTUDIOS',
      title: 'Formación y especialización técnica',
      awsTitle: 'Formación complementaria (AWS & cloud)',
      awsDesc: 'Bloque compacto de cursos base orientados a fundamentos cloud.',
    },
    certs: {
      badge: 'CREDENCIALES',
      title: 'Certificaciones',
    },
    stack: {
      badge: 'HABILIDADES',
      title: 'Stack y herramientas',
      subtitle: 'Palabras clave de mi perfil: integración, datos, entrega y calidad.',
    },
    projects: {
      badge: 'PROYECTOS',
      title: 'Proyectos destacados',
      subtitle: 'Proyectos profesionales y personales en los que he participado.',
      repo: 'Visitar sitio',
    },
    tools: {
      badge: 'HERRAMIENTAS',
      title: 'Mis herramientas del día a día',
      homelab: 'HOMELAB',
      homelabTitle: 'Autoalojado en marcha',
      homelabDesc: 'Explorando el homelab: contenedores, proxy inverso, uptime y métricas en un entorno controlado.',
    },
    footer: {
      role: 'Líder Técnico · Full Stack',
      location: 'CDMX, México',
      made: 'Hecho con React y Tailwind.',
    },
  },
  en: {
    nav: {
      inicio: 'Home',
      trayectoria: 'Experience',
      formacion: 'Education',
      certificaciones: 'Certifications',
      stack: 'Stack',
      proyectos: 'Projects',
      herramientas: 'Tools',
    },
    hero: {
      badge: 'PORTFOLIO',
      headline1: 'Technical leadership focused on',
      highlight: 'delivery',
      headline2: 'and product.',
      bio: "I'm Gerardo Lerma, a full-stack tech lead. I coordinate back-end (Java) and front-end (React) teams, manage GCP infrastructure and Jenkins pipelines, and lead sprint planning in corporate environments.",
      linkedin: 'LinkedIn',
      cv: 'Download CV',
    },
    experience: {
      badge: 'EXPERIENCE',
      title: 'Professional background',
      subtitle: 'Summary of my results-oriented professional history.',
    },
    education: {
      badge: 'EDUCATION',
      title: 'Training and technical specialization',
      awsTitle: 'Complementary training (AWS & cloud)',
      awsDesc: 'Compact block of foundation courses focused on cloud fundamentals.',
    },
    certs: {
      badge: 'CREDENTIALS',
      title: 'Certifications',
    },
    stack: {
      badge: 'SKILLS',
      title: 'Stack & tools',
      subtitle: 'Keywords from my profile: integration, data, delivery and quality.',
      learning: 'LEARNING STACK',
    },
    projects: {
      badge: 'PROJECTS',
      title: 'Featured projects',
      subtitle: 'Professional and personal projects I have been part of.',
      repo: 'Visit site',
    },
    tools: {
      badge: 'TOOLS',
      title: 'My everyday tools',
      homelab: 'HOMELAB',
      homelabTitle: 'Self-hosted in progress',
      homelabDesc: 'Exploring homelab: containers, reverse proxy, uptime and metrics in a controlled environment.',
    },
    footer: {
      role: 'Technical Project Lead · Full Stack',
      location: 'CDMX, Mexico',
      made: 'Made with React and Tailwind',
    },
  },
} as const;

export type Translations = typeof translations;
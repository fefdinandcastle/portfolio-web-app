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
      headline1: 'Desarrollo full-stack con enfoque en',
      highlight: 'integración',
      headline2: 'y producto.',
      bio: 'Soy Gerardo Lerma, desarrollador de software full-stack. Experiencia en entornos corporativos con React, Spring Boot, Oracle SQL y ciclo completo de entrega: desde scripts y datos hasta incidencias en producción.',
      linkedin: 'LinkedIn',
      github: 'GitHub',
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
      learning: 'STACK EN APRENDIZAJE',
    },
    projects: {
      badge: 'GITHUB',
      title: 'Proyectos destacados',
      subtitle: 'Selección de repositorios públicos en GitHub.',
      repo: 'Ver repositorio',
    },
    tools: {
      badge: 'HERRAMIENTAS',
      title: 'Mis herramientas del día a día',
      homelab: 'HOMELAB',
      homelabTitle: 'Autoalojado en marcha',
      homelabDesc: 'Explorando el homelab: contenedores, proxy inverso, uptime y métricas en un entorno controlado.',
    },
    footer: {
      role: 'Desarrollador full-stack',
      location: 'Localización',
      made: 'Hecho con React, Tailwind y café.',
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
      headline1: 'Full-stack development focused on',
      highlight: 'integration',
      headline2: 'and product.',
      bio: "I'm Gerardo Lerma, a full-stack software developer. Experience in corporate environments with React, Spring Boot, Oracle SQL and complete delivery cycle: from scripts and data to production incidents.",
      linkedin: 'LinkedIn',
      github: 'GitHub',
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
      badge: 'GITHUB',
      title: 'Featured projects',
      subtitle: 'Selection of public repositories on GitHub.',
      repo: 'View repository',
    },
    tools: {
      badge: 'TOOLS',
      title: 'My everyday tools',
      homelab: 'HOMELAB',
      homelabTitle: 'Self-hosted in progress',
      homelabDesc: 'Exploring homelab: containers, reverse proxy, uptime and metrics in a controlled environment.',
    },
    footer: {
      role: 'Full-stack developer',
      location: 'Location',
      made: 'Made with React, Tailwind and coffee.',
    },
  },
} as const;

export type Translations = typeof translations;
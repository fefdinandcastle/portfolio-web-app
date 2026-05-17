import { Project } from '../types';

export const projects: Project[] = [
  {
    name: 'Sky+ / izzi go',
    desc: {
      es: 'Plataforma de streaming de Sky México (ahora izzi go). Desarrollé componentes frontend con React y Next.js, optimizando la UX para dispositivos de TV.',
      en: 'Sky Mexico streaming platform, now izzi go. Developed front-end features with React and Next.js, with a strong focus on UX and user experience on TV devices.',
    },
    tags: ['React', 'Next.js', 'UX Design'],
    url: 'https://www.izzigo.tv/webclient',
  },
  {
    name: 'The Sims Car Mods',
    desc: {
      es: 'Proyecto personal de modelado 3D: creé mods de autos para Los Sims 3 y Los Sims 4. Incluye diseño propio del sitio web donde se publican y distribuyen los mods.',
      en: 'Personal 3D modeling project: created car mods for The Sims 3 and The Sims 4. Includes custom web design for the site where mods are published and distributed.',
    },
    tags: ['3D Modeling', 'The Sims 3', 'The Sims 4', 'Web Design'],
    url: 'https://thesimscars.wixsite.com/mods',
  },
];
import en from '../languages/en.ts';
import es from '../languages/es.ts';
import { Language } from './globals.js';

export const getString = (language: Language, key: string) => {
  switch(language) {
    case "english":
      return en[key];
    case "spanish":
      return es[key];
    default:
      return en[key];
  }
};
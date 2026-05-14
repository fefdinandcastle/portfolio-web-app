import { IconType } from 'react-icons';

export type Lang = 'es' | 'en';

export interface LocalizedString {
  es: string;
  en: string;
}

export interface LocalizedStringArray {
  es: string[];
  en: string[];
}

// ─── Data model types ─────────────────────────────────────────────────────────

export interface Experience {
  role: LocalizedString;
  company: string;
  location: LocalizedString;
  period: string;
  bullets: LocalizedStringArray;
  stack: string;
}

export interface Education {
  title: LocalizedString;
  institution: string;
  period: LocalizedString;
  desc: LocalizedString;
  badge: string;
  tags: string[];
}

export interface Certification {
  cat: LocalizedString;
  title: string;
  date: LocalizedString;
  link: string;
  linkText: LocalizedString;
}

export interface StackIcon {
  name: string;
  icon: IconType;
  color: string;
}

export interface Project {
  name: string;
  desc: LocalizedString;
  tags: string[];
  url: string;
}

export interface Tool {
  icon: IconType | (() => JSX.Element);
  name: string;
  desc: LocalizedString;
  url: string;
  bg: string;
}
import React from 'react';
import { SiX, SiGithub, SiLinkerd } from 'react-icons/si';
import { Lang } from '../types';
import { translations } from '../i18n/translations';

const YOUR_NAME = '[Tu Nombre]';

interface FooterProps {
  lang: Lang;
}

export function Footer({ lang }: FooterProps) {
  const tr = translations[lang].footer;

  return (
    <footer className="border-t border-gray-100 py-10 bg-white/60">
      <div className="max-w-5xl mx-auto px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-bold text-gray-900">{YOUR_NAME}</p>
          <p className="text-sm text-gray-400">
            {tr.location} · {tr.role}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://x.com"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="X / Twitter"
          >
            <SiX size={16} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="GitHub"
          >
            <SiGithub size={16} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="LinkedIn"
          >
            <SiLinkerd size={16} />
          </a>
        </div>
      </div>

      <p className="text-center text-xs text-gray-300 mt-6">
        © {new Date().getFullYear()} {YOUR_NAME} · {tr.made}
      </p>
    </footer>
  );
}
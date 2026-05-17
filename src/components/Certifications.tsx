import { useState } from 'react';
import { FiExternalLink, FiFileText } from 'react-icons/fi';
import { Lang } from '../types';
import { translations } from '../i18n/translations';
import { useInView } from '../hooks/useInView';
import { certifications } from '../data/certifications';
import { PdfModal } from './ui/PdfModal';

const CERT_COLORS = ['#7c6af7', '#e63946', '#ffd60a', '#06d6a0', '#ff9500'];

interface CertificationsProps {
  lang: Lang;
}

export function Certifications({ lang }: CertificationsProps) {
  const tr = translations[lang].certs;
  const { ref, visible } = useInView();
  const [openPdf, setOpenPdf] = useState<{ url: string; title: string } | null>(null);

  return (
    <section id="certificaciones" ref={ref} className="bg-white py-24 relative overflow-hidden">
      <span className="absolute -right-3 top-4 text-[220px] font-extrabold text-ink opacity-[0.025] tracking-[-0.06em] leading-none select-none pointer-events-none">03</span>

      <div className={`max-w-5xl mx-auto px-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'}`}>

        {/* Section header */}
        <div className="inline-flex items-center gap-1.5 bg-brand-orange text-ink text-[11px] font-medium tracking-[0.08em] uppercase py-[5px] px-3 mb-5 border-2 border-ink shadow-brutal-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-ink shrink-0 inline-block" />
          {tr.badge}
        </div>

        <h2
          className="font-bold text-ink tracking-[-0.02em] leading-[1.1] mb-12"
          style={{ fontSize: 'clamp(28px,4vw,40px)' }}
        >
          {tr.title}
        </h2>

        <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          {certifications.map((cert, i) => (
            <CertCard
              key={i}
              cert={cert}
              lang={lang}
              index={i}
              accentColor={CERT_COLORS[i % CERT_COLORS.length]}
              onOpenPdf={(url, title) => setOpenPdf({ url, title })}
            />
          ))}
        </div>
      </div>

      {openPdf && (
        <PdfModal
          pdfUrl={openPdf.url}
          title={openPdf.title}
          lang={lang}
          onClose={() => setOpenPdf(null)}
        />
      )}
    </section>
  );
}

interface CertCardProps {
  cert: (typeof certifications)[number];
  lang: Lang;
  index: number;
  accentColor: string;
  onOpenPdf: (url: string, title: string) => void;
}

function CertCard({ cert, lang, accentColor, onOpenPdf }: CertCardProps) {
  const isYellow = accentColor === '#ffd60a';

  const handleAction = (e: React.MouseEvent) => {
    if (cert.pdf) {
      e.preventDefault();
      onOpenPdf(cert.pdf, cert.title);
    }
  };

  const actionProps = cert.pdf
    ? { as: 'button' as const, onClick: handleAction }
    : { as: 'a' as const, href: cert.link ?? '#', target: '_blank', rel: 'noreferrer' };

  return (
    <div className="group flex flex-col bg-cream border-2 border-ink shadow-brutal-md hover:shadow-brutal-xs hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-150 overflow-hidden">
      {/* Accent bar */}
      <div className="h-1" style={{ background: accentColor }} />

      <div className="flex flex-col flex-1 pt-5 px-[22px] pb-[22px]">

        <p
          className="text-[10px] font-semibold tracking-[0.1em] uppercase mb-2.5"
          style={{ color: isYellow ? '#b38f00' : accentColor }}
        >
          {cert.cat[lang]}
        </p>

        <h3 className="text-[15px] font-bold text-ink leading-[1.3] tracking-[-0.01em] mb-1.5">
          {cert.title}
        </h3>

        <p className="text-[12px] text-[#999] tracking-[0.02em] mb-5">{cert.date[lang]}</p>

        <div className="w-full h-px bg-ink opacity-[0.08] mb-4 mt-auto" />

        {cert.pdf ? (
          <button
            onClick={() => onOpenPdf(cert.pdf!, cert.title)}
            className="inline-flex items-center gap-[5px] text-[12px] font-semibold text-ink border-[1.5px] border-ink py-[5px] px-[10px] w-fit tracking-[0.02em] shadow-brutal-sm transition-all duration-150 group-hover:bg-ink group-hover:text-cream group-hover:shadow-none group-hover:translate-x-[2px] group-hover:translate-y-[2px] bg-transparent cursor-pointer"
          >
            {cert.linkText[lang]}
            <FiFileText size={11} />
          </button>
        ) : (
          <a
            href={cert.link ?? '#'}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-[5px] text-[12px] font-semibold text-ink border-[1.5px] border-ink py-[5px] px-[10px] no-underline w-fit tracking-[0.02em] shadow-brutal-sm transition-all duration-150 group-hover:bg-ink group-hover:text-cream group-hover:shadow-none group-hover:translate-x-[2px] group-hover:translate-y-[2px]"
          >
            {cert.linkText[lang]}
            <FiExternalLink size={11} />
          </a>
        )}
      </div>
    </div>
  );
}

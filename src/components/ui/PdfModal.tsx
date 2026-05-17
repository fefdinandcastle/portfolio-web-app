import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { FiX, FiDownload, FiExternalLink } from 'react-icons/fi';
import { Lang } from '../../types';

interface PdfModalProps {
  pdfUrl: string;
  title: string;
  lang: Lang;
  onClose: () => void;
  downloadFileName?: string;
}

const LABELS = {
  es: { close: 'Cerrar', download: 'Descargar', open: 'Abrir en pestaña', mobileHint: 'Vista previa no disponible en este dispositivo.' },
  en: { close: 'Close', download: 'Download', open: 'Open in tab', mobileHint: 'Preview not available on this device.' },
};

export function PdfModal({ pdfUrl, title, lang, onClose, downloadFileName }: PdfModalProps) {
  const labels = LABELS[lang];

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-end md:items-center justify-center"
      style={{ background: 'rgba(0,0,0,0.72)' }}
      onClick={onClose}
    >
      <div
        className="relative flex flex-col bg-white border-2 border-ink w-full h-[92dvh] md:h-[90vh] md:w-[90vw] md:max-w-5xl"
        style={{ boxShadow: '6px 6px 0 #111' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Header ── */}
        <div className="flex items-center justify-between gap-3 px-4 py-[10px] border-b-2 border-ink bg-cream shrink-0">
          <p className="text-[13px] font-bold text-ink tracking-tight truncate">{title}</p>

          <div className="flex items-center gap-2 shrink-0">
            {downloadFileName && (
              <a
                href={pdfUrl}
                download={downloadFileName}
                className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-semibold text-ink border-[1.5px] border-ink py-[5px] px-[10px] no-underline bg-brand-yellow shadow-brutal-sm hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-100"
              >
                <FiDownload size={11} /> {labels.download}
              </a>
            )}

            <a
              href={pdfUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-ink border-[1.5px] border-ink py-[5px] px-[10px] no-underline shadow-brutal-sm hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-100"
            >
              <FiExternalLink size={11} /> {labels.open}
            </a>

            <button
              onClick={onClose}
              aria-label={labels.close}
              className="w-[30px] h-[30px] flex items-center justify-center border-[1.5px] border-ink bg-transparent hover:bg-ink hover:text-cream transition-colors duration-100 cursor-pointer"
            >
              <FiX size={15} />
            </button>
          </div>
        </div>

        {/* ── PDF iframe (desktop + Android Chrome) ── */}
        <iframe
          src={pdfUrl}
          title={title}
          className="hidden md:block w-full flex-1 border-0"
        />

        {/* ── Mobile: iframe attempt + prominent fallback ── */}
        <div className="flex md:hidden flex-col flex-1 overflow-hidden">
          {/* try to show PDF inline; Android Chrome renders it, iOS shows blank */}
          <iframe
            src={pdfUrl}
            title={title}
            className="w-full flex-1 border-0"
            style={{ minHeight: 0 }}
          />

          {/* Always-visible mobile actions pinned at bottom */}
          <div className="shrink-0 border-t-2 border-ink bg-cream px-4 py-3 flex flex-col gap-2">
            <p className="text-[11px] text-[#888]">{labels.mobileHint}</p>
            <div className="flex gap-2">
              <a
                href={pdfUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-[10px] px-4 bg-ink text-cream text-[13px] font-medium border-2 border-ink no-underline"
              >
                <FiExternalLink size={14} /> {labels.open}
              </a>
              {downloadFileName && (
                <a
                  href={pdfUrl}
                  download={downloadFileName}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-[10px] px-4 bg-brand-yellow text-ink text-[13px] font-medium border-2 border-ink no-underline"
                >
                  <FiDownload size={14} /> {labels.download}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

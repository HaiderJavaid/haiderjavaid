import { useId, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';

const controlClass = 'flex h-11 w-11 shrink-0 items-center justify-center border border-pip/35 text-pip-light transition-colors hover:bg-pip hover:text-pip-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white';

export default function ProjectScreenshots({ project }) {
  const headingId = useId();
  const previewTitleId = useId();
  const railRef = useRef(null);
  const dialogRef = useRef(null);
  const [previewIndex, setPreviewIndex] = useState(null);
  const screenshots = project.screenshots ?? (project.image
    ? [{ src: project.image, alt: project.imageAlt, label: project.assetLabel }]
    : []);
  const preview = screenshots[previewIndex] ?? screenshots[0];

  if (!screenshots.length) return null;

  const scrollScreens = (direction) => {
    const rail = railRef.current;
    rail.scrollBy({
      left: direction * rail.clientWidth * 0.8,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
    });
  };

  const changePreview = (direction) => {
    setPreviewIndex((index) => (index + direction + screenshots.length) % screenshots.length);
  };

  return (
    <section aria-labelledby={headingId}>
      <div className="mb-3 flex items-center justify-between gap-3">
        <div>
          <h3 id={headingId} className="text-sm font-black uppercase tracking-[0.18em] text-white md:text-base">Product Screens</h3>
          <p className="mt-1 text-xs text-pip-light">{screenshots.length} {screenshots.length === 1 ? 'screen' : 'screens'} · Select to explore</p>
        </div>
        {screenshots.length > 1 && (
          <div className="flex gap-2">
            <button type="button" className={controlClass} onClick={() => scrollScreens(-1)} aria-label="Scroll screenshots left"><ArrowLeft size={18} /></button>
            <button type="button" className={controlClass} onClick={() => scrollScreens(1)} aria-label="Scroll screenshots right"><ArrowRight size={18} /></button>
          </div>
        )}
      </div>
      <div ref={railRef} className="project-screen-rail flex snap-x snap-mandatory gap-3 overflow-x-auto pb-3 pip-scrollbar md:gap-4" aria-label={`${project.title} screenshots`}>
        {screenshots.map((screenshot, index) => (
          <button
            key={screenshot.src}
            type="button"
            onClick={() => {
              setPreviewIndex(index);
              dialogRef.current.showModal();
            }}
            className={`group shrink-0 snap-start overflow-hidden border border-pip/35 bg-black text-left transition-colors hover:border-pip focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-pip ${screenshot.format === 'portrait' ? 'w-[145px] md:w-[175px]' : 'w-[min(72vw,340px)] md:w-[390px]'}`}
            aria-label={`Open ${screenshot.label} preview`}
          >
            <div className="h-[210px] md:h-[250px]">
              <img src={screenshot.src} alt={screenshot.alt} loading={index === 0 ? 'eager' : 'lazy'} decoding="async" className="h-full w-full object-contain" />
            </div>
            <span className="block min-h-12 border-t border-pip/20 px-3 py-2 text-xs font-bold text-pip-light">{screenshot.label}</span>
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        className="project-image-dialog fixed inset-0 m-0 h-full max-h-none w-full max-w-none bg-transparent p-3 text-pip-light md:p-6"
        aria-labelledby={previewTitleId}
        onClose={() => setPreviewIndex(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialogRef.current.close();
        }}
        onKeyDown={(event) => {
          if (event.key === 'Tab') {
            const buttons = [...dialogRef.current.querySelectorAll('button')];
            const first = buttons[0];
            const last = buttons[buttons.length - 1];
            if (event.shiftKey && document.activeElement === first) {
              event.preventDefault();
              last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
              event.preventDefault();
              first.focus();
            }
          }
          if (screenshots.length < 2 || event.altKey || event.ctrlKey || event.metaKey) return;
          if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            event.preventDefault();
            changePreview(event.key === 'ArrowLeft' ? -1 : 1);
          }
        }}
      >
        <div className="project-image-panel mx-auto flex h-full max-w-6xl flex-col overflow-hidden border border-pip/45 bg-pip-bg">
          <div className="flex shrink-0 items-center justify-between gap-3 border-b border-pip/25 px-3 py-2 md:px-5">
            <div className="min-w-0">
              <p id={previewTitleId} className="text-xs font-black uppercase tracking-[0.12em] md:text-sm">{project.title}</p>
              <p className="mt-1 text-xs" aria-live="polite" aria-atomic="true">{previewIndex === null ? 1 : previewIndex + 1} / {screenshots.length} · {preview.label}</p>
            </div>
            <button type="button" autoFocus onClick={() => dialogRef.current.close()} className={controlClass} aria-label="Close image preview"><X size={20} /></button>
          </div>
          <div className="flex min-h-0 flex-1 items-center justify-center overflow-auto bg-black p-2 md:p-4 pip-scrollbar">
            <img src={preview.src} alt={preview.alt} className="block h-full w-full object-contain" />
          </div>
          {screenshots.length > 1 && (
            <div className="flex shrink-0 items-center gap-2 border-t border-pip/25 p-2 md:gap-3 md:p-3">
              <button type="button" onClick={() => changePreview(-1)} className={controlClass} aria-label="Previous screenshot"><ArrowLeft size={20} /></button>
              <div className="flex min-w-0 flex-1 gap-2 overflow-x-auto pip-scrollbar" aria-label="Choose screenshot">
                {screenshots.map((screenshot, index) => (
                  <button key={screenshot.src} type="button" onClick={() => setPreviewIndex(index)} aria-label={`View ${screenshot.label}`} aria-pressed={index === previewIndex} className={`h-12 w-16 shrink-0 border-2 bg-black p-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:h-14 md:w-20 ${index === previewIndex ? 'border-pip' : 'border-transparent hover:border-pip/50'}`}>
                    <img src={screenshot.src} alt="" loading="lazy" className="h-full w-full object-contain" />
                  </button>
                ))}
              </div>
              <button type="button" onClick={() => changePreview(1)} className={controlClass} aria-label="Next screenshot"><ArrowRight size={20} /></button>
            </div>
          )}
        </div>
      </dialog>
    </section>
  );
}

import React, { useState, useEffect } from 'react';
import {
  X,
  CheckCircle2,
  Calendar,
  User,
  Briefcase,
  Layers,
  Sparkles,
  ArrowRight,
  Flame,
  MessageSquare,
} from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
  allProjects: Project[];
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onSelectProject,
  allProjects,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Prevent background body scroll while modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      setActiveImageIndex(0);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  const allImages = [project.coverImage, ...(project.additionalImages || [])];

  // Find next project in the list
  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const nextProject =
    currentIndex !== -1 && currentIndex < allProjects.length - 1
      ? allProjects[currentIndex + 1]
      : allProjects[0];

  const handleInquire = () => {
    onClose();
    setTimeout(() => {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 md:p-10 animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="project-modal-container"
        className="relative w-full max-w-5xl bg-zinc-950 border border-zinc-800 shadow-2xl shadow-black overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#050505] border-b border-zinc-900">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-zinc-900 text-[#00FF00] border border-[#00FF00]/40 text-[10px] font-mono uppercase tracking-widest font-bold">
              {project.categoryLabel}
            </span>
            <span className="hidden sm:inline text-xs font-mono text-zinc-500 uppercase">
              {project.client} • {project.year}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="modal-inquire-btn"
              type="button"
              onClick={handleInquire}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-black bg-[#00FF00] hover:bg-[#22c55e] border border-[#00FF00] transition-colors font-bold cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Inquire This Style</span>
            </button>
            <button
              id="modal-close-btn"
              type="button"
              onClick={onClose}
              aria-label="Close project modal"
              className="p-1.5 text-zinc-400 hover:text-[#00FF00] transition-colors focus:outline-none cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="max-h-[82vh] overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Main Visual / High-Res Showcase */}
          <div className="relative overflow-hidden bg-black border border-zinc-800 group">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden">
              <img
                src={allImages[activeImageIndex]}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              {allImages.length > 1 && (
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 bg-black/90 p-1.5 border border-zinc-800">
                    {allImages.map((img, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setActiveImageIndex(idx)}
                        className={`w-12 h-8 overflow-hidden border transition-all cursor-pointer ${
                          activeImageIndex === idx
                            ? 'border-[#00FF00] scale-105'
                            : 'border-transparent opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img src={img} alt="thumb" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                  <span className="text-xs font-mono bg-black/90 px-2.5 py-1 text-zinc-400 border border-zinc-800 uppercase">
                    Asset {activeImageIndex + 1} / {allImages.length}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Title & Subtitle */}
          <div>
            <span className="text-[10px] font-mono text-[#00FF00] uppercase tracking-[0.2em] font-bold block mb-1">
              // PROJECT CASE DOSSIER
            </span>
            <h1 className="font-display font-black text-2xl sm:text-5xl text-white uppercase tracking-tight mb-2">
              {project.title}
            </h1>
            <p className="text-xs sm:text-sm text-zinc-400 font-mono uppercase tracking-wider">
              {project.subtitle}
            </p>
          </div>

          {/* Project Meta Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-zinc-900/60 border border-zinc-900 text-xs font-mono">
            <div>
              <span className="text-zinc-500 uppercase tracking-widest block text-[10px] mb-1">
                // CLIENT
              </span>
              <span className="font-bold text-white uppercase">{project.client}</span>
            </div>
            <div>
              <span className="text-zinc-500 uppercase tracking-widest block text-[10px] mb-1">
                // ROLE
              </span>
              <span className="font-bold text-white uppercase">{project.role}</span>
            </div>
            <div>
              <span className="text-zinc-500 uppercase tracking-widest block text-[10px] mb-1">
                // TIMELINE
              </span>
              <span className="font-bold text-white uppercase">{project.year}</span>
            </div>
            <div>
              <span className="text-zinc-500 uppercase tracking-widest block text-[10px] mb-1">
                // DISCIPLINE
              </span>
              <span className="font-bold text-[#00FF00] uppercase">{project.categoryLabel}</span>
            </div>
          </div>

          {/* Key Impact Metrics if available */}
          {project.metrics && project.metrics.length > 0 && (
            <div>
              <h2 className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#00FF00] mb-3 font-bold flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5" />
                <span>// MEASURABLE OUTCOMES &amp; IMPACT</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono">
                {project.metrics.map((metric, i) => (
                  <div
                    key={i}
                    className="p-4 bg-zinc-900/50 border border-zinc-900 flex flex-col"
                  >
                    <span className="font-display font-black text-2xl sm:text-4xl text-[#00FF00]">
                      {metric.value}
                    </span>
                    <span className="text-xs text-zinc-400 mt-1 uppercase tracking-wider">{metric.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Deep Narrative: Summary, Challenge, Solution */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 font-mono">
            <div className="p-5 bg-zinc-900/30 border border-zinc-900 space-y-3">
              <h2 className="font-display font-black text-base text-white uppercase tracking-tight flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500" />
                <span>The Challenge &amp; Problem Space</span>
              </h2>
              <p className="text-xs text-zinc-300 leading-relaxed uppercase tracking-wider">{project.challenge}</p>
            </div>

            <div className="p-5 bg-zinc-900/30 border border-zinc-900 space-y-3">
              <h2 className="font-display font-black text-base text-white uppercase tracking-tight flex items-center gap-2">
                <span className="w-2 h-2 bg-[#00FF00]" />
                <span>The Strategic Solution</span>
              </h2>
              <p className="text-xs text-zinc-300 leading-relaxed uppercase tracking-wider">{project.solution}</p>
            </div>
          </div>

          {/* Deliverables Checklist */}
          <div>
            <h2 className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#00FF00] mb-3 font-bold flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>// DELIVERABLES &amp; ARTIFACTS</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-mono">
              {project.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 bg-zinc-900/40 border border-zinc-900 text-xs text-zinc-300 uppercase tracking-wider"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#00FF00] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Tech Stack */}
          <div>
            <h2 className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#00FF00] mb-3 font-bold">
              // SOFTWARE &amp; TOOLCHAIN
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 text-xs font-mono uppercase font-bold bg-zinc-900 text-zinc-300 border border-zinc-800"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Next Project Footer Bar */}
          <div className="pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono">
            <div className="text-center sm:text-left">
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest block">
                // NEXT ARCHIVED WORK
              </span>
              <span className="text-sm font-bold text-white uppercase">{nextProject.title}</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => onSelectProject(nextProject)}
                className="px-4 py-2.5 text-xs font-mono uppercase tracking-wider font-bold text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 flex items-center gap-2 cursor-pointer transition-colors"
              >
                <span>Next Project</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#00FF00]" />
              </button>

              <button
                type="button"
                onClick={handleInquire}
                className="px-4 py-2.5 text-xs font-mono uppercase tracking-wider font-bold text-black bg-[#00FF00] hover:bg-[#22c55e] flex items-center gap-1.5 cursor-pointer shadow-[0_0_15px_rgba(0,255,0,0.3)] transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Discuss Project</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

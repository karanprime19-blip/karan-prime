import React, { useEffect, useState } from 'react';
import {
  X,
  Printer,
  Globe,
  Copy,
  Check,
  Phone,
  Mail,
  MessageCircle,
  Linkedin,
  Sparkles,
  Layers,
  Palette,
  Layout,
  Film,
  CheckCircle2,
} from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleCopyWebsite = () => {
    navigator.clipboard.writeText(window.location.origin || window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="resume-modal-container"
        className="relative w-full max-w-4xl bg-zinc-950 border border-zinc-800 shadow-2xl shadow-black overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Action Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#050505] border-b border-zinc-900">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#00FF00] rounded-full animate-pulse" />
            <span className="font-mono font-bold text-xs uppercase tracking-widest text-white">
              CURRICULUM VITAE // KARAN PATEL
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-zinc-300 hover:text-black bg-zinc-900 hover:bg-[#00FF00] border border-zinc-800 hover:border-[#00FF00] flex items-center gap-1.5 transition-colors cursor-pointer font-bold"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>
            <button
              id="resume-modal-close"
              type="button"
              onClick={onClose}
              className="p-1.5 text-zinc-400 hover:text-[#00FF00] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="max-h-[82vh] overflow-y-auto p-6 sm:p-10 space-y-7 print:max-h-none print:p-0">
          {/* Header & Identity */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-zinc-900">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#00FF00]/10 border border-[#00FF00]/40 text-[#00FF00] font-mono text-[10px] uppercase tracking-widest font-bold mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00FF00] animate-ping" />
                <span>OPEN FOR FREELANCE &amp; CONTRACT COMMISSIONS</span>
              </div>
              <h1 className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-tight">
                Karan Patel
              </h1>
              <p className="text-xs font-mono uppercase tracking-widest text-[#00FF00] mt-1 font-bold">
                Graphic Designer, UI/UX Designer &amp; Video Editor
              </p>
              <p className="text-xs text-zinc-400 font-mono uppercase mt-1">
                Available for Freelance Projects • Worldwide Remote
              </p>
            </div>

            {/* Direct Contact Block */}
            <div className="space-y-1.5 text-xs text-zinc-300 font-mono bg-zinc-900/60 p-3.5 border border-zinc-800">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#00FF00]" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-[#00FF00] transition-colors">
                  {CONTACT_INFO.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-[#00FF00]" />
                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00FF00] transition-colors"
                >
                  WhatsApp (+91 93272 34631)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#00FF00]" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-[#00FF00] transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2 pt-1 border-t border-zinc-800">
                <Linkedin className="w-3.5 h-3.5 text-[#00FF00]" />
                <a
                  href={CONTACT_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#00FF00] uppercase tracking-wider"
                >
                  LinkedIn Profile ↗
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3.5 text-center text-[#00FF00] font-mono font-bold text-[10px]">Bē</span>
                <a
                  href={CONTACT_INFO.behance}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#00FF00] uppercase tracking-wider"
                >
                  Behance Portfolio ↗
                </a>
              </div>
            </div>
          </div>

          {/* Prominent Website Link Box */}
          <div className="p-4 sm:p-5 bg-zinc-900/80 border border-[#00FF00]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-black border border-[#00FF00] flex items-center justify-center text-[#00FF00] shrink-0">
                <Globe className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#00FF00] uppercase tracking-widest font-bold block">
                  // OFFICIAL LIVE PORTFOLIO WEBSITE
                </span>
                <span className="font-mono text-xs text-white uppercase font-bold break-all">
                  Showcasing Full Interactive Case Studies &amp; High-Res Assets
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={handleCopyWebsite}
                className="px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-black bg-[#00FF00] hover:bg-[#22c55e] flex items-center gap-1.5 transition-colors font-bold cursor-pointer"
              >
                {copiedLink ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedLink ? 'Link Copied!' : 'Copy Site Link'}</span>
              </button>
            </div>
          </div>

          {/* Professional Statement */}
          <div>
            <h2 className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#00FF00] mb-2 font-bold">
              // PROFILE STATEMENT
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-mono uppercase tracking-wide">
              I am a creative designer who turns ideas into powerful visual experiences that make brands stand out and connect with their audience. From Graphic Design and UI/UX Design to Video Editing, I combine creativity, strategy, and modern design to deliver work that looks exceptional and communicates with purpose. I don’t just create designs—I create experiences that help businesses build their brand, capture attention, and grow. Open for freelance contracts and remote collaborations worldwide.
            </p>
          </div>

          {/* Core Design Specializations */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5 bg-zinc-900/50 border border-zinc-900 font-mono">
            {/* Graphic Design */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Palette className="w-4 h-4 text-[#00FF00]" />
                <h3 className="font-mono font-bold text-xs text-white uppercase tracking-widest">
                  Graphic Design &amp; Brand Systems
                </h3>
              </div>
              <ul className="text-xs text-zinc-400 space-y-1.5 pl-6 list-disc">
                <li>Brand Identity Systems &amp; Logotype Design</li>
                <li>CorelDRAW Vector Art &amp; Technical Drawings</li>
                <li>Canva Pro Marketing Kits &amp; Social Campaign Templates</li>
                <li>Packaging, Labels, Boxes &amp; Print Die-Lines</li>
                <li>Swiss-Grid Typography &amp; Editorial Catalogs</li>
                <li>High-Impact Posters, Banners &amp; Signage</li>
              </ul>
            </div>

            {/* UI/UX Design */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Layout className="w-4 h-4 text-[#00FF00]" />
                <h3 className="font-mono font-bold text-xs text-white uppercase tracking-widest">
                  UI/UX &amp; Digital Product Design
                </h3>
              </div>
              <ul className="text-xs text-zinc-400 space-y-1.5 pl-6 list-disc">
                <li>SaaS Dashboards &amp; Web Application Architecture</li>
                <li>Mobile App UX/UI Flows (iOS &amp; Android)</li>
                <li>Figma Component Libraries &amp; Design Systems</li>
                <li>Wireframing, High-Fidelity Mockups &amp; Prototyping</li>
                <li>Information Architecture &amp; User Journey Mapping</li>
                <li>Developer-Ready Specifications &amp; Design Tokens</li>
              </ul>
            </div>

            {/* Video Editing & Motion */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Film className="w-4 h-4 text-[#00FF00]" />
                <h3 className="font-mono font-bold text-xs text-white uppercase tracking-widest">
                  Video Editing &amp; Motion Post
                </h3>
              </div>
              <ul className="text-xs text-zinc-400 space-y-1.5 pl-6 list-disc">
                <li>Commercial, Brand Story &amp; Promo Video Editing</li>
                <li>High-Retention Viral Reels, TikToks &amp; YouTube Pacing</li>
                <li>Kinetic Typography &amp; Motion Graphics (After Effects)</li>
                <li>Cinematic Color Grading &amp; LUT Tuning (DaVinci Resolve)</li>
                <li>Foley Sound Effects, Beat Syncing &amp; Audio Mastering</li>
                <li>Multi-Cam Editing &amp; Green Screen Compositing</li>
              </ul>
            </div>
          </div>

          {/* Software & Toolchain */}
          <div>
            <h2 className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#00FF00] mb-3 font-bold">
              // SOFTWARE TOOLCHAIN &amp; PRODUCTION STACK
            </h2>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              {[
                'CorelDRAW',
                'Canva Pro',
                'Figma',
                'Adobe Premiere Pro',
                'Adobe After Effects',
                'DaVinci Resolve',
                'Adobe Illustrator',
                'Adobe Photoshop',
                'Adobe Audition',
                'Adobe InDesign',
                'FigJam',
                'Tokens Studio',
              ].map((tool, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-zinc-900 border border-zinc-800 text-zinc-200 uppercase font-bold tracking-wider hover:border-[#00FF00] transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Freelance Terms & Working Model */}
          <div className="p-4 bg-zinc-900/30 border border-zinc-900 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-zinc-400">
            <div>
              <span className="text-white uppercase font-bold block mb-0.5">
                // FREELANCE WORK TERMS
              </span>
              <span>Available for fixed-scope milestones, retainer projects, and brand consultations.</span>
            </div>
            <div className="sm:text-right shrink-0">
              <span className="text-[#00FF00] font-bold uppercase block">Turnaround</span>
              <span>Fast 24-48hr First Draft Sprints</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

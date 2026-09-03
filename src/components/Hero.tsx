import React, { useRef, useState, useEffect } from 'react';
import { ArrowDown, Sparkles, Layout, Palette, Film, ExternalLink, Phone, Mail, CheckCircle2, MessageCircle, Camera, Upload, RotateCcw } from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';
import defaultKaranPhoto from '../assets/images/karan_hero_photo_1788409969539.jpg';

interface HeroProps {
  onExploreCategory: (category: 'ui-ux' | 'graphic-design' | 'video-editing') => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreCategory }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [photoSrc, setPhotoSrc] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('karan_custom_hero_photo');
      if (stored) return stored;
    }
    return defaultKaranPhoto;
  });
  const [hasCustomPhoto, setHasCustomPhoto] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('karan_custom_hero_photo');
      setHasCustomPhoto(Boolean(stored));
    }
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      if (result) {
        setPhotoSrc(result);
        setHasCustomPhoto(true);
        try {
          localStorage.setItem('karan_custom_hero_photo', result);
        } catch {
          // In case quota exceeded
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handleResetPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPhotoSrc(defaultKaranPhoto);
    setHasCustomPhoto(false);
    try {
      localStorage.removeItem('karan_custom_hero_photo');
    } catch {
      // Ignored
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex flex-col justify-center overflow-hidden bg-[#050505]"
    >
      {/* Background ambient accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-[#00FF00]/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[380px] h-[380px] bg-zinc-800/20 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-zinc-950 border border-zinc-800 text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-300 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full bg-[#00FF00] opacity-75" />
            <span className="relative inline-flex h-2 w-2 bg-[#00FF00]" />
          </span>
          <span>Graphic Designer &amp; Video Editor</span>
          <span className="text-zinc-700">/</span>
          <span className="text-[#00FF00] font-bold">Open for All</span>
        </div>

        {/* 2-Column Hero Grid: Left Content + Right Portrait Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-14">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 relative pl-4 sm:pl-6">
            <div className="absolute left-0 top-1 w-1 sm:w-1.5 h-28 sm:h-36 bg-[#00FF00] shadow-[0_0_20px_#00FF00]" />
            
            <h1
              id="hero-main-headline"
              className="text-4xl sm:text-5xl lg:text-[72px] xl:text-[80px] leading-[0.9] sm:leading-[0.88] font-black tracking-tighter uppercase text-white mb-6"
            >
              Crafting Visual{' '}
              <span
                className="outline-text block sm:inline text-zinc-900"
                style={{ WebkitTextStroke: '1.5px #3f3f46' }}
              >
                Stories
              </span>{' '}
              <span className="text-white block sm:inline">&amp; Digital Experiences</span>
            </h1>

            {/* Sub-headline */}
            <p
              id="hero-sub-headline"
              className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-zinc-400 max-w-2xl leading-relaxed mb-6"
            >
              <span className="text-[#00FF00] font-bold">Graphic Designer</span> <span className="text-zinc-600">|</span>{' '}
              <span className="text-[#00FF00] font-bold">Video Editor</span> <span className="text-zinc-600">|</span>{' '}
              <span className="text-[#00FF00] font-bold">UI/UX Designer</span>. Elevating brands through precision visual identity, motion graphics, and cinematic video editing.
            </p>

            <p className="text-sm sm:text-base text-zinc-300 max-w-2xl leading-relaxed mb-8 font-sans">
              Hi, I’m <strong className="text-white font-bold">Karan Patel</strong>. I'm a creative designer who turns ideas into powerful visual experiences that make brands stand out and connect with their audience. From <strong className="text-white font-bold">Graphic Design and UI/UX Design to Video Editing</strong>, I combine creativity, strategy, and modern design to deliver work that looks exceptional and communicates with purpose.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <a
                id="hero-view-work-cta"
                href="#portfolio"
                className="bg-[#00FF00] text-black font-black px-7 py-3.5 sm:px-8 sm:py-4 text-xs uppercase tracking-widest hover:bg-white transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(0,255,0,0.35)] flex items-center gap-3 cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </a>

              <a
                id="hero-contact-cta"
                href="#contact"
                className="px-6 py-3.5 sm:py-4 bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 hover:border-[#00FF00] text-zinc-200 hover:text-[#00FF00] text-xs font-mono uppercase tracking-widest transition-all cursor-pointer"
              >
                <span>Contact Karan</span>
              </a>

              {/* Quick direct social & chat links */}
              <div className="flex items-center gap-2">
                <a
                  id="hero-whatsapp-link"
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with Karan on WhatsApp"
                  className="w-10 h-10 bg-zinc-950 border border-zinc-800 hover:border-[#00FF00] text-zinc-400 hover:text-[#00FF00] transition-colors flex items-center justify-center"
                  title="Chat on WhatsApp"
                >
                  <MessageCircle className="w-4 h-4 text-[#00FF00]" />
                </a>

                <a
                  id="hero-linkedin-link"
                  href={CONTACT_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Karan Patel LinkedIn Profile"
                  className="w-10 h-10 bg-zinc-950 border border-zinc-800 hover:border-[#00FF00] text-zinc-400 hover:text-[#00FF00] transition-colors flex items-center justify-center font-mono font-bold text-xs"
                  title="LinkedIn Profile"
                >
                  <span>in</span>
                </a>

                <a
                  id="hero-behance-link"
                  href={CONTACT_INFO.behance}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Karan Patel Behance Profile"
                  className="w-10 h-10 bg-zinc-950 border border-zinc-800 hover:border-[#00FF00] text-zinc-400 hover:text-[#00FF00] transition-colors flex items-center justify-center font-mono font-bold text-xs"
                  title="Behance Profile"
                >
                  <span>Bē</span>
                </a>

                <a
                  id="hero-phone-quick-link"
                  href={`tel:${CONTACT_INFO.phone}`}
                  aria-label={`Call Karan at ${CONTACT_INFO.phone}`}
                  className="w-10 h-10 bg-zinc-950 border border-zinc-800 hover:border-[#00FF00] text-zinc-400 hover:text-[#00FF00] transition-colors flex items-center justify-center"
                  title={`Call: ${CONTACT_INFO.phone}`}
                >
                  <Phone className="w-4 h-4" />
                </a>

                <a
                  id="hero-email-quick-link"
                  href={`mailto:${CONTACT_INFO.email}`}
                  aria-label={`Email Karan at ${CONTACT_INFO.email}`}
                  className="w-10 h-10 bg-zinc-950 border border-zinc-800 hover:border-[#00FF00] text-zinc-400 hover:text-[#00FF00] transition-colors flex items-center justify-center"
                  title={`Email: ${CONTACT_INFO.email}`}
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: High-Impact Cyberpunk Portrait Showcase */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center">
            <div
              id="hero-portrait-card"
              className="relative w-full max-w-[360px] sm:max-w-[400px] lg:max-w-[420px] bg-zinc-950 border border-zinc-800 p-2.5 sm:p-3 transition-all duration-500 hover:border-[#00FF00]/80 shadow-[0_0_50px_rgba(0,0,0,0.8)] group"
            >
              {/* Cyberpunk corner bracket accents */}
              <div className="absolute -top-1.5 -left-1.5 w-3.5 h-3.5 border-t-2 border-l-2 border-[#00FF00] pointer-events-none" />
              <div className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 border-t-2 border-r-2 border-[#00FF00] pointer-events-none" />
              <div className="absolute -bottom-1.5 -left-1.5 w-3.5 h-3.5 border-b-2 border-l-2 border-[#00FF00] pointer-events-none" />
              <div className="absolute -bottom-1.5 -right-1.5 w-3.5 h-3.5 border-b-2 border-r-2 border-[#00FF00] pointer-events-none" />

              {/* Terminal Header Bar */}
              <div className="flex items-center justify-between px-2.5 py-1.5 mb-2 bg-zinc-900/90 border border-zinc-800 text-[10px] font-mono uppercase tracking-wider text-zinc-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00FF00] animate-pulse" />
                  <span className="text-white font-bold tracking-widest">[SYS_ID // KP-01]</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#00FF00] font-semibold">KARAN PATEL</span>
                </div>
              </div>

              {/* Image Container */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-black border border-zinc-800/80">
                <img
                  id="hero-karan-portrait-img"
                  src={photoSrc}
                  alt="Karan Patel - Graphic Designer & Video Editor"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    if (!target.src.endsWith('/karan-patel.jpg')) {
                      target.src = '/karan-patel.jpg';
                    }
                  }}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />

                {/* Cyberpunk subtle scanline overlay */}
                <div
                  className="absolute inset-0 opacity-[0.06] pointer-events-none mix-blend-overlay"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, #000, #000 2px, transparent 2px, transparent 4px)',
                  }}
                />

                {/* Bottom Shadow Gradient for contrast */}
                <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none" />

                {/* Top Badge: Creative Director */}
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/80 backdrop-blur-md border border-zinc-800 text-[9px] font-mono uppercase tracking-widest text-[#00FF00] flex items-center gap-1.5 shadow-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00FF00] animate-pulse" />
                  <span className="font-bold">CREATIVE DESIGNER</span>
                </div>

                {/* Top-Right Badge: Open for Projects */}
                <div className="absolute top-3 right-3 px-2.5 py-1 bg-zinc-950/80 backdrop-blur-md border border-zinc-800 text-[9px] font-mono uppercase tracking-widest text-zinc-300 shadow-lg">
                  <span>WORLDWIDE 🌐</span>
                </div>

                {/* Interactive Change Photo Hover / Click Overlay */}
                <div className="absolute top-12 right-3 flex flex-col gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    title="Upload or change photo from your device"
                    className="px-2.5 py-1.5 bg-black/90 hover:bg-[#00FF00] text-zinc-300 hover:text-black border border-zinc-700 hover:border-[#00FF00] text-[9px] font-mono uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer shadow-lg backdrop-blur-sm"
                  >
                    <Upload className="w-3 h-3" />
                    <span>Upload Photo</span>
                  </button>

                  {hasCustomPhoto && (
                    <button
                      type="button"
                      onClick={handleResetPhoto}
                      title="Reset to default portrait"
                      className="px-2.5 py-1.5 bg-black/90 hover:bg-red-500 text-zinc-300 hover:text-white border border-zinc-700 hover:border-red-500 text-[9px] font-mono uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer shadow-lg backdrop-blur-sm"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>Reset</span>
                    </button>
                  )}
                </div>

                {/* Hidden input for custom photo uploads */}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                  aria-label="Upload custom portrait photo"
                />

                {/* Bottom Overlay Info Card */}
                <div className="absolute inset-x-0 bottom-0 p-4 z-10 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-black text-xl sm:text-2xl text-white uppercase tracking-tight">
                      Karan Patel<span className="text-[#00FF00]">.</span>
                    </h3>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#00FF00] font-bold">
                      // ACTIVE
                    </span>
                  </div>

                  <p className="text-[11px] font-mono text-zinc-300 uppercase tracking-wider">
                    Graphic Design • Video Editing • UI/UX
                  </p>

                  <div className="pt-2 border-t border-zinc-800/80 flex items-center justify-between text-[10px] font-mono text-zinc-400">
                    <span className="text-white font-bold">65+ DELIVERED PROJECTS</span>
                    <span className="text-[#00FF00]">99% RATING</span>
                  </div>
                </div>
              </div>

              {/* Card Footer Bar */}
              <div className="mt-2.5 pt-2 border-t border-zinc-900 flex items-center justify-between text-[10px] font-mono text-zinc-500 uppercase tracking-widest px-1">
                <span>EST. 2021 // INDIA</span>
                <span className="text-zinc-400 group-hover:text-[#00FF00] transition-colors">
                  PORTFOLIO SHOWCASE ↗
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Creative Pillars Interactive Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-8 border-t border-zinc-900">
          {/* UI/UX Card */}
          <div
            id="hero-pillar-uiux"
            onClick={() => onExploreCategory('ui-ux')}
            className="group p-6 sm:p-7 bg-zinc-950 border border-zinc-900 hover:border-[#00FF00] transition-all duration-300 cursor-pointer relative flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-[#00FF00] tracking-widest uppercase font-bold">
                  // 01
                </span>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500 group-hover:text-[#00FF00] transition-colors">
                  Interactive Systems
                </span>
              </div>
              <h2 className="font-display font-black text-xl sm:text-2xl text-white uppercase tracking-tight group-hover:text-[#00FF00] transition-colors mb-2">
                UI/UX &amp; Product Design
              </h2>
              <p className="text-xs text-zinc-400 leading-relaxed mb-5 font-sans">
                Clean SaaS interfaces, responsive web apps, Figma design systems, and seamless user experiences engineered with psychological clarity and data hierarchy.
              </p>
            </div>
            <div className="flex items-center text-xs font-mono uppercase tracking-widest text-[#00FF00] group-hover:translate-x-1 transition-transform font-bold">
              <span>Explore UI/UX works</span>
              <ArrowDown className="w-3.5 h-3.5 ml-1.5 -rotate-90" />
            </div>
          </div>

          {/* Graphic Design Card */}
          <div
            id="hero-pillar-graphic"
            onClick={() => onExploreCategory('graphic-design')}
            className="group p-6 sm:p-7 bg-zinc-950 border border-zinc-900 hover:border-[#00FF00] transition-all duration-300 cursor-pointer relative flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-zinc-500 group-hover:text-[#00FF00] tracking-widest uppercase font-bold">
                  // 02
                </span>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500 group-hover:text-[#00FF00] transition-colors">
                  Branding &amp; Visuals
                </span>
              </div>
              <h2 className="font-display font-black text-xl sm:text-2xl text-white uppercase tracking-tight group-hover:text-[#00FF00] transition-colors mb-2">
                Graphic Design &amp; Brand Systems
              </h2>
              <p className="text-xs text-zinc-400 leading-relaxed mb-5 font-sans">
                Distinctive logotypes, CorelDRAW vector mastery, Canva marketing kits, packaging die-lines, and Swiss-grid typography that command attention.
              </p>
            </div>
            <div className="flex items-center text-xs font-mono uppercase tracking-widest text-[#00FF00] group-hover:translate-x-1 transition-transform font-bold">
              <span>Explore Graphic works</span>
              <ArrowDown className="w-3.5 h-3.5 ml-1.5 -rotate-90" />
            </div>
          </div>

          {/* Video Editing & Motion Card */}
          <div
            id="hero-pillar-video"
            onClick={() => {
              const el = document.getElementById('services');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group p-6 sm:p-7 bg-zinc-950 border border-zinc-900 hover:border-[#00FF00] transition-all duration-300 cursor-pointer relative flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-zinc-500 group-hover:text-[#00FF00] tracking-widest uppercase font-bold">
                  // 03
                </span>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500 group-hover:text-[#00FF00] transition-colors">
                  Motion &amp; Cinematic Post
                </span>
              </div>
              <h2 className="font-display font-black text-xl sm:text-2xl text-white uppercase tracking-tight group-hover:text-[#00FF00] transition-colors mb-2">
                Video Editing &amp; Motion Graphics
              </h2>
              <p className="text-xs text-zinc-400 leading-relaxed mb-5 font-sans">
                High-retention commercial cuts, viral social reels pacing, kinetic typography in After Effects, DaVinci Resolve color grading, and foley sound design.
              </p>
            </div>
            <div className="flex items-center text-xs font-mono uppercase tracking-widest text-[#00FF00] group-hover:translate-x-1 transition-transform font-bold">
              <span>View Video Services</span>
              <ArrowDown className="w-3.5 h-3.5 ml-1.5 -rotate-90" />
            </div>
          </div>
        </div>

        {/* Quick Credentials / Proof Bar */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 py-4 px-6 bg-zinc-950 border border-zinc-900 text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="text-[#00FF00] font-bold">01/</span>
            <span><strong className="text-white font-bold">Open for Freelance</strong> &amp; Remote Contracts</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#00FF00] font-bold">02/</span>
            <span><strong className="text-white font-bold">65+ Delivered</strong> Brand &amp; Digital Projects</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#00FF00] font-bold">03/</span>
            <span><strong className="text-white font-bold">99% Client Satisfaction</strong> Across Disciplines</span>
          </div>
          <div className="text-zinc-400 flex items-center gap-2">
            <span className="w-2 h-2 bg-[#00FF00] animate-pulse rounded-full" />
            <span className="text-[#00FF00] font-bold">Available Worldwide</span>
          </div>
        </div>
      </div>
    </section>
  );
};

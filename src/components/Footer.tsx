import React, { useState, useEffect } from 'react';
import { ArrowUp, Phone, Mail, ExternalLink, MessageCircle, Zap } from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      // IST is UTC+5:30
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setLocalTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#050505] border-t border-zinc-900 pt-16 pb-12 text-zinc-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-zinc-900">
          {/* Brand & Mission Statement */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-zinc-900 border border-[#00FF00] flex items-center justify-center font-display font-black text-lg text-[#00FF00]">
                KP
              </div>
              <div>
                <span className="font-display font-black text-xl text-white tracking-tight uppercase block">
                  Karan Patel
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#00FF00]">
                  // GRAPHIC &amp; UI/UX DESIGNER
                </span>
              </div>
            </div>

            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed font-mono uppercase tracking-wider">
              Turning ideas into powerful visual experiences that make brands stand out. Specializing in Graphic Design, Brand Systems, and UI/UX Architecture.
            </p>

            {/* Availability Status */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-zinc-950 border border-zinc-800 text-[11px] font-mono text-[#00FF00]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00FF00] animate-ping" />
              <span>STATUS: OPEN FOR FREELANCE &amp; CONTRACT WORK</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3 font-mono">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#00FF00] block font-bold">
              // INDEX NAVIGATION
            </span>
            <ul className="space-y-2 text-xs uppercase tracking-wider">
              <li>
                <a href="#hero" className="hover:text-[#00FF00] transition-colors">
                  01 // Overview
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[#00FF00] transition-colors">
                  02 // Portfolio Works
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#00FF00] transition-colors">
                  03 // About &amp; Stack
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#00FF00] transition-colors">
                  04 // Services &amp; Scope
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#00FF00] transition-colors">
                  05 // Direct Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact Details */}
          <div className="md:col-span-4 space-y-3 font-mono">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#00FF00] block font-bold">
              // TRANSMIT DIRECT
            </span>

            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#00FF00] shrink-0" />
                <a
                  id="footer-phone-link"
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="hover:text-[#00FF00] transition-colors"
                >
                  {CONTACT_INFO.phoneFormatted}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#00FF00] shrink-0" />
                <a
                  id="footer-email-link"
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-[#00FF00] transition-colors break-all"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-2.5">
              <a
                id="footer-whatsapp-link"
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 hover:border-[#00FF00] text-xs uppercase tracking-wider text-zinc-300 hover:text-[#00FF00] flex items-center gap-1.5 transition-all"
              >
                <MessageCircle className="w-3 h-3 text-[#00FF00]" />
                <span>WhatsApp</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <a
                id="footer-linkedin-icon-link"
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 hover:border-[#00FF00] text-xs uppercase tracking-wider text-zinc-300 hover:text-[#00FF00] flex items-center gap-1.5 transition-all"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <a
                id="footer-behance-icon-link"
                href={CONTACT_INFO.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 hover:border-[#00FF00] text-xs uppercase tracking-wider text-zinc-300 hover:text-[#00FF00] flex items-center gap-1.5 transition-all"
              >
                <span>Behance</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Big Stylish "Thank You" Banner */}
        <div className="py-12 sm:py-16 md:py-20 border-b border-zinc-900 relative overflow-hidden text-center select-none">
          {/* Subtle Cyberpunk HUD Grid watermark */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none font-mono text-9xl tracking-[0.5em] text-white select-none whitespace-nowrap">
            KARAN PATEL
          </div>

          <div className="relative z-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-950 border border-zinc-800 text-[10px] font-mono uppercase tracking-[0.25em] text-[#00FF00]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00FF00] animate-pulse" />
              <span>TRANSMISSION COMPLETE // THANK YOU FOR VISITING</span>
            </div>

            <div className="overflow-hidden py-2">
              <h2
                id="footer-thank-you-heading"
                className="font-stylish italic font-black text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] tracking-tight leading-none text-white hover:text-[#00FF00] transition-all duration-700 cursor-default drop-shadow-[0_10px_35px_rgba(0,0,0,0.8)]"
              >
                Thank You<span className="text-[#00FF00] not-italic">.</span>
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 font-mono uppercase tracking-[0.2em] max-w-xl mx-auto px-4">
              Looking forward to creating bold visual identities &amp; elevated digital experiences together.
            </p>
          </div>
        </div>

        {/* Bottom copyright & back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono uppercase tracking-wider">
          <p>© {new Date().getFullYear()} KARAN PATEL // ALL RIGHTS RESERVED</p>

          <div className="flex items-center gap-6">
            <span className="text-[10px] text-zinc-600">
              [SYSTEM: ACTIVE] [OPEN FOR ALL]
            </span>

            <button
              id="footer-back-to-top-btn"
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="px-3 py-1.5 bg-zinc-950 hover:bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800 hover:border-[#00FF00] transition-colors flex items-center gap-1.5 cursor-pointer text-xs uppercase font-mono"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#00FF00]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

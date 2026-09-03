import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, Send } from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'portfolio', 'about', 'services', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#portfolio', id: 'portfolio' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050505]/95 backdrop-blur-md border-b border-zinc-900 shadow-xl py-3.5'
          : 'bg-[#050505]/60 backdrop-blur-sm border-b border-zinc-900/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          id="navbar-brand-logo"
          href="#hero"
          className="group flex items-center gap-3.5 text-left focus:outline-none"
        >
          <div className="w-10 h-10 bg-zinc-950 border border-zinc-800 group-hover:border-[#00FF00] transition-colors flex items-center justify-center font-display font-black text-base text-white relative">
            <span className="tracking-tighter">KP</span>
            <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-[#00FF00]"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-[#00FF00] font-mono text-[10px] sm:text-xs tracking-widest uppercase font-semibold">
              Graphic Designer &amp; Video Editor
            </span>
            <span className="text-lg sm:text-xl font-black tracking-tighter text-white uppercase group-hover:text-zinc-200 transition-colors">
              KARAN PATEL
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-7 text-[11px] font-mono uppercase tracking-widest text-zinc-500">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                id={`nav-link-${link.id}`}
                href={link.href}
                className={`transition-colors py-1 ${
                  isActive
                    ? 'text-white border-b border-[#00FF00] font-bold'
                    : 'hover:text-[#00FF00]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="hidden md:flex items-center gap-3">
          <button
            id="navbar-resume-btn"
            type="button"
            onClick={onOpenResume}
            className="px-4 py-2 text-[11px] font-mono uppercase tracking-widest text-zinc-300 hover:text-[#00FF00] bg-zinc-950 border border-zinc-800 hover:border-[#00FF00] transition-all flex items-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#00FF00]" />
            <span>Resume</span>
          </button>

          <a
            id="navbar-contact-cta"
            href="#contact"
            className="px-5 py-2 text-[11px] font-black uppercase tracking-widest text-black bg-[#00FF00] hover:bg-white transition-all transform hover:-translate-y-0.5 flex items-center gap-2 shadow-[0_0_15px_rgba(0,255,0,0.35)] cursor-pointer"
          >
            <span>Let's Talk</span>
            <Send className="w-3 h-3" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          id="mobile-menu-toggle-btn"
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden p-2 text-zinc-300 hover:text-[#00FF00] bg-zinc-950 border border-zinc-800 focus:outline-none"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="md:hidden bg-[#050505]/98 border-b border-zinc-900 px-5 pt-4 pb-6 mt-3 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                id={`mobile-nav-link-${link.id}`}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 text-xs font-mono uppercase tracking-widest transition-colors ${
                  activeSection === link.id
                    ? 'bg-zinc-900 text-[#00FF00] border-l-2 border-[#00FF00]'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-900/50'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-zinc-900 flex flex-col gap-2.5">
            <button
              id="mobile-resume-btn"
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-2.5 px-4 text-xs font-mono uppercase tracking-widest text-zinc-300 bg-zinc-950 border border-zinc-800 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#00FF00]" />
              <span>Resume & Credentials</span>
            </button>
            <a
              id="mobile-contact-cta"
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 px-4 text-xs font-black uppercase tracking-widest text-black bg-[#00FF00] hover:bg-white flex items-center justify-center gap-2 text-center"
            >
              <span>Get in Touch</span>
              <Send className="w-4 h-4" />
            </a>
          </div>

          <div className="pt-2 text-center text-[10px] text-zinc-600 font-mono">
            {CONTACT_INFO.email}
          </div>
        </div>
      )}
    </header>
  );
};

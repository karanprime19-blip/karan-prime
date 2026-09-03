import React, { useState } from 'react';
import {
  Phone,
  Mail,
  Copy,
  Check,
  Send,
  Sparkles,
  CheckCircle2,
  Terminal,
  Cpu,
  Radio,
  ShieldCheck,
  Zap,
  MessageCircle,
  ExternalLink,
  Linkedin,
} from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';
import { ContactFormData } from '../types';

interface ContactSectionProps {
  selectedService: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ selectedService }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    service: selectedService || 'Graphic Design & Brand Systems',
    message: '',
  });

  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Synchronize when parent passes a new selected service
  React.useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  const copyToClipboard = (text: string, type: 'phone' | 'email') => {
    navigator.clipboard.writeText(text);
    if (type === 'phone') {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } else {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate futuristic transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#040404] border-t border-zinc-900 overflow-hidden">
      {/* Futuristic Background HUD Elements & Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 255, 0, 0.25) 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      {/* Cyberpunk Glow Orbs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#00FF00]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-[#00FF00]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header HUD Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-950/90 border border-[#00FF00]/40 text-[#00FF00] font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] font-bold mb-4 shadow-[0_0_15px_rgba(0,255,0,0.2)]">
            <span className="w-2 h-2 rounded-full bg-[#00FF00] animate-pulse" />
            <span>// TRANSMISSION PROTOCOL: INITIATE FREELANCE UPLINK</span>
          </div>

          <h2
            id="contact-heading"
            className="font-display font-black text-3xl sm:text-6xl text-white uppercase tracking-tighter leading-tight"
          >
            Futuristic Vision? <br className="hidden sm:inline" />
            <span className="text-[#00FF00] drop-shadow-[0_0_25px_rgba(0,255,0,0.4)]">
              Let’s Create The Next Era.
            </span>
          </h2>

          <p className="text-zinc-400 text-xs sm:text-sm mt-3 leading-relaxed font-mono uppercase tracking-wider max-w-2xl">
            I turn ideas into powerful visual experiences that make brands stand out and connect with their audience. Direct communication channels are open worldwide for freelance commissions and design systems.
          </p>
        </div>

        {/* Main Grid: Futuristic Command Center Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Futuristic Comms Station (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            {/* Terminal Status Deck */}
            <div className="p-4 bg-zinc-950/90 border border-zinc-800 text-xs font-mono relative overflow-hidden">
              <div className="absolute top-0 right-0 px-2 py-0.5 bg-[#00FF00] text-black font-bold text-[9px] uppercase tracking-widest">
                SYS ONLINE
              </div>
              <div className="flex items-center gap-2 text-zinc-400 mb-2">
                <Terminal className="w-3.5 h-3.5 text-[#00FF00]" />
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest">
                  COMMUNICATION FREQUENCY // ENCRYPTED
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[11px] pt-1 border-t border-zinc-900">
                <div>
                  <span className="text-zinc-600 block text-[9px]">AVAILABILITY:</span>
                  <span className="text-[#00FF00] font-bold">OPEN FOR FREELANCE</span>
                </div>
                <div>
                  <span className="text-zinc-600 block text-[9px]">RESPONSE TIME:</span>
                  <span className="text-white font-bold">24 HOURS</span>
                </div>
              </div>
            </div>

            {/* Direct Phone & WhatsApp Uplink Card */}
            <div
              id="contact-card-phone"
              className="group p-6 bg-zinc-950 border border-zinc-800 hover:border-[#00FF00] transition-all duration-300 relative shadow-lg hover:shadow-[0_0_30px_rgba(0,255,0,0.15)]"
            >
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-[#00FF00]" />
              <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-[#00FF00]" />

              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#00FF00] group-hover:border-[#00FF00] transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#00FF00] font-bold">
                    // DIRECT VOICE &amp; CALL
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => copyToClipboard(CONTACT_INFO.phone, 'phone')}
                  aria-label="Copy phone number"
                  className="px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider text-zinc-400 hover:text-black hover:bg-[#00FF00] bg-zinc-900 border border-zinc-800 transition-colors flex items-center gap-1 cursor-pointer font-bold"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3 h-3 text-black" />
                      <span className="text-black">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </div>

              <a
                id="contact-phone-link"
                href={`tel:${CONTACT_INFO.phone}`}
                className="font-display font-black text-2xl sm:text-3xl text-white hover:text-[#00FF00] transition-colors block tracking-tight"
              >
                {CONTACT_INFO.phoneFormatted}
              </a>

              {/* Instant WhatsApp Uplink Button */}
              <div className="mt-4 pt-3 border-t border-zinc-900 flex items-center justify-between">
                <a
                  id="contact-whatsapp-link"
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#00FF00]/10 hover:bg-[#00FF00] text-[#00FF00] hover:text-black border border-[#00FF00]/50 transition-all font-mono text-xs uppercase font-bold tracking-wider cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Instant WhatsApp Chat</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <span className="text-[10px] font-mono text-zinc-500 uppercase">
                  +91 93272 34631
                </span>
              </div>
            </div>

            {/* Direct Email Node Card */}
            <div
              id="contact-card-email"
              className="group p-6 bg-zinc-950 border border-zinc-800 hover:border-[#00FF00] transition-all duration-300 relative shadow-lg hover:shadow-[0_0_30px_rgba(0,255,0,0.15)]"
            >
              <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-[#00FF00]" />
              <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-[#00FF00]" />

              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#00FF00] group-hover:border-[#00FF00] transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#00FF00] font-bold">
                    // SECURE DISPATCH EMAIL
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => copyToClipboard(CONTACT_INFO.email, 'email')}
                  aria-label="Copy email address"
                  className="px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider text-zinc-400 hover:text-black hover:bg-[#00FF00] bg-zinc-900 border border-zinc-800 transition-colors flex items-center gap-1 cursor-pointer font-bold"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3 h-3 text-black" />
                      <span className="text-black">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </div>

              <a
                id="contact-email-link"
                href={`mailto:${CONTACT_INFO.email}`}
                className="font-mono font-bold text-sm sm:text-base text-white hover:text-[#00FF00] transition-colors break-all block tracking-wide"
              >
                {CONTACT_INFO.email}
              </a>

              <div className="mt-3 pt-3 border-t border-zinc-900 flex items-center justify-between text-[10px] font-mono uppercase text-zinc-500">
                <span>Inquiries &amp; RFPs</span>
                <span className="text-[#00FF00]">Priority Attention</span>
              </div>
            </div>

            {/* Social & Professional Nodes (LinkedIn & Behance) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-4 bg-zinc-950 border border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#00FF00]">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono uppercase text-xs font-bold text-white block">
                      LinkedIn
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500">
                      karan-patel
                    </span>
                  </div>
                </div>

                <a
                  id="contact-linkedin-link"
                  href={CONTACT_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-zinc-900 hover:bg-[#00FF00] text-zinc-300 hover:text-black border border-zinc-800 text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Connect</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="p-4 bg-zinc-950 border border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#00FF00] font-mono font-bold text-xs">
                    Bē
                  </div>
                  <div>
                    <span className="font-mono uppercase text-xs font-bold text-white block">
                      Behance
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500">
                      karanpatel178
                    </span>
                  </div>
                </div>

                <a
                  id="contact-behance-link"
                  href={CONTACT_INFO.behance}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-zinc-900 hover:bg-[#00FF00] text-zinc-300 hover:text-black border border-zinc-800 text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>View</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Futuristic Telemetry Ribbon (Worldwide Freelance Open) */}
            <div className="p-3.5 bg-gradient-to-r from-zinc-950 via-zinc-900/60 to-zinc-950 border border-zinc-800 flex items-center gap-3 text-xs text-zinc-300 font-mono">
              <Zap className="w-4 h-4 text-[#00FF00] shrink-0" />
              <div className="text-[11px] uppercase">
                <span className="text-white font-bold">STATUS: AVAILABLE</span> // Open for freelance &amp; remote contracts worldwide
              </div>
            </div>
          </div>

          {/* Right Column: Futuristic Terminal Project Brief Console (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 bg-zinc-950/95 border border-zinc-800 relative shadow-2xl">
              {/* Futuristic Corner Brackets */}
              <div className="absolute top-2 left-2 text-[#00FF00] font-mono text-xs select-none opacity-50">[ + ]</div>
              <div className="absolute top-2 right-2 text-[#00FF00] font-mono text-xs select-none opacity-50">[ + ]</div>
              <div className="absolute bottom-2 left-2 text-[#00FF00] font-mono text-xs select-none opacity-50">[ + ]</div>
              <div className="absolute bottom-2 right-2 text-[#00FF00] font-mono text-xs select-none opacity-50">[ + ]</div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-zinc-900 border-2 border-[#00FF00] text-[#00FF00] flex items-center justify-center mx-auto shadow-[0_0_35px_rgba(0,255,0,0.5)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="inline-block px-3 py-1 bg-[#00FF00]/10 border border-[#00FF00] text-[#00FF00] font-mono text-[10px] uppercase tracking-widest font-bold">
                    TRANSMISSION DELIVERED // ACKNOWLEDGED
                  </div>
                  <h3 className="font-display font-black text-3xl text-white uppercase tracking-tight">
                    Payload Dispatched
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto leading-relaxed font-mono uppercase tracking-wider">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Your project brief regarding <strong className="text-[#00FF00]">{formData.service}</strong> is received. Karan will review your requirements and respond within 24 hours.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          service: 'Graphic Design & Brand Systems',
                          message: '',
                        });
                      }}
                      className="px-6 py-3 text-xs font-mono uppercase tracking-widest text-black bg-[#00FF00] hover:bg-[#22c55e] transition-colors cursor-pointer font-bold shadow-[0_0_15px_rgba(0,255,0,0.3)]"
                    >
                      Transmit Another Brief
                    </button>
                  </div>
                </div>
              ) : (
                <form id="project-contact-form" onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-zinc-900 pb-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[#00FF00] font-mono text-[10px] uppercase tracking-[0.25em] font-bold flex items-center gap-1.5">
                        <Radio className="w-3 h-3 text-[#00FF00] animate-pulse" />
                        <span>// PROJECT INTAKE TERMINAL</span>
                      </span>
                      <span className="text-[9px] font-mono text-zinc-500 uppercase">
                        ENCRYPTED PORT: 443
                      </span>
                    </div>
                    <h3 className="font-display font-black text-2xl text-white uppercase tracking-tight">
                      Transmit Your Specifications
                    </h3>
                  </div>

                  {/* Name & Email Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="form-input-name"
                        className="block text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-1.5"
                      >
                        [01] CLIENT / STAKEHOLDER NAME *
                      </label>
                      <input
                        id="form-input-name"
                        type="text"
                        required
                        placeholder="e.g., Alex Vance"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-zinc-900/90 border border-zinc-800 focus:border-[#00FF00] text-white text-xs font-mono placeholder:text-zinc-600 outline-none transition-all focus:shadow-[0_0_15px_rgba(0,255,0,0.2)]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="form-input-email"
                        className="block text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-1.5"
                      >
                        [02] ELECTRONIC MAIL UPLINK *
                      </label>
                      <input
                        id="form-input-email"
                        type="email"
                        required
                        placeholder="e.g., alex@futurecorp.io"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-zinc-900/90 border border-zinc-800 focus:border-[#00FF00] text-white text-xs font-mono placeholder:text-zinc-600 outline-none transition-all focus:shadow-[0_0_15px_rgba(0,255,0,0.2)]"
                      />
                    </div>
                  </div>

                  {/* Service Selector */}
                  <div>
                    <label
                      htmlFor="form-select-service"
                      className="block text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-1.5"
                    >
                      [03] REQUIRED DISCIPLINE *
                    </label>
                    <select
                      id="form-select-service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 bg-zinc-900/90 border border-zinc-800 focus:border-[#00FF00] text-white text-xs font-mono outline-none transition-all focus:shadow-[0_0_15px_rgba(0,255,0,0.2)]"
                    >
                      <option value="Graphic Design & Brand Systems">Graphic Design &amp; Brand Systems</option>
                      <option value="UI/UX & Product Design">UI/UX &amp; Product Design (SaaS / Mobile)</option>
                      <option value="Video Editing & Motion Post-Production">Video Editing &amp; Motion Post-Production</option>
                      <option value="CorelDRAW & Technical Vector Art">CorelDRAW &amp; Vector Art</option>
                      <option value="Canva Pro Campaign Kits">Canva Campaign &amp; Social Kits</option>
                      <option value="Packaging & Editorial Print">Packaging &amp; Editorial Print</option>
                      <option value="Full Comprehensive Suite">Full Comprehensive Suite</option>
                    </select>
                  </div>

                  {/* Message / Scope textarea */}
                  <div>
                    <label
                      htmlFor="form-textarea-message"
                      className="block text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-1.5"
                    >
                      [04] SCOPE SPECIFICATION &amp; PROJECT GOALS *
                    </label>
                    <textarea
                      id="form-textarea-message"
                      required
                      rows={4}
                      placeholder="Outline your brand vision, target audience, deliverables, or current pain points..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-zinc-900/90 border border-zinc-800 focus:border-[#00FF00] text-white text-xs font-mono placeholder:text-zinc-600 outline-none transition-all focus:shadow-[0_0_15px_rgba(0,255,0,0.2)] resize-none"
                    />
                  </div>

                  {/* Submit Button & Futuristic Transmission Feedback */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                    <div className="flex items-center gap-2 text-[10px] text-zinc-500 font-mono uppercase">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#00FF00]" />
                      <span>Encrypted direct dispatch to Karan Patel</span>
                    </div>

                    <button
                      id="form-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-3.5 font-mono text-xs uppercase tracking-widest font-bold text-black bg-[#00FF00] hover:bg-[#22c55e] disabled:opacity-50 transition-all flex items-center justify-center gap-2.5 shadow-[0_0_25px_rgba(0,255,0,0.4)] hover:shadow-[0_0_35px_rgba(0,255,0,0.6)] cursor-pointer active:scale-95"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-3.5 h-3.5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                          <span>TRANSMITTING FREELANCE BRIEF...</span>
                        </>
                      ) : (
                        <>
                          <span>DISPATCH BRIEF</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

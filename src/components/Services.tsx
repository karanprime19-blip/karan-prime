import React from 'react';
import {
  Palette,
  Layout,
  Film,
  CheckCircle2,
  ArrowRight,
  Clock,
  Sparkles,
  Layers,
} from 'lucide-react';
import { SERVICES_DATA } from '../data/portfolioData';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectServiceForContact: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForContact }) => {
  const getIcon = (name: ServiceItem['iconName']) => {
    switch (name) {
      case 'Palette':
        return <Palette className="w-5 h-5 text-[#00FF00]" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-[#00FF00]" />;
      case 'Film':
        return <Film className="w-5 h-5 text-[#00FF00]" />;
      default:
        return <Layers className="w-5 h-5 text-[#00FF00]" />;
    }
  };

  return (
    <section id="services" className="py-24 relative bg-[#050505] border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <span className="text-[#00FF00] font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] mb-3 block font-bold">
            // SPECIALIZED CAPABILITIES
          </span>
          <h2
            id="services-heading"
            className="font-display font-black text-3xl sm:text-6xl text-white uppercase tracking-tighter leading-tight"
          >
            Services Tailored for <br className="hidden sm:inline" />
            <span className="text-[#00FF00]">
              Ambitious Digital Products
            </span>
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm mt-3 leading-relaxed font-mono uppercase tracking-wider">
            Three interconnected disciplines delivered with uncompromising attention to detail, strategic thinking, and production-ready handoffs.
          </p>
        </div>

        {/* 3 Detailed Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, sIndex) => {
            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="group bg-zinc-950 border border-zinc-900 hover:border-[#00FF00] transition-all duration-300 p-7 flex flex-col justify-between hover:shadow-[0_0_25px_rgba(0,255,0,0.15)]"
              >
                <div>
                  {/* Icon & Turnaround Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                      {getIcon(service.iconName)}
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5 px-2.5 py-1 bg-zinc-900 border border-zinc-800 text-[10px] font-mono uppercase tracking-wider text-zinc-400">
                        <Clock className="w-3 h-3 text-[#00FF00]" />
                        <span>{service.typicalTimeline}</span>
                      </div>
                      <span className="text-xs font-mono text-zinc-600 font-bold">
                        0{sIndex + 1}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display font-black text-2xl text-white mb-2 transition-colors group-hover:text-[#00FF00] uppercase tracking-tight">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6 font-sans">
                    {service.shortDesc}
                  </p>

                  {/* What's Included Offerings List */}
                  <div className="space-y-2.5 mb-6">
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#00FF00] block font-bold">
                      // Core Offerings:
                    </span>
                    {service.offerings.map((offering, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00FF00] shrink-0 mt-0.5" />
                        <span>{offering}</span>
                      </div>
                    ))}
                  </div>

                  {/* Deliverables */}
                  <div className="p-4 bg-zinc-900/60 border border-zinc-900 mb-6">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block mb-2 font-bold">
                      Client Deliverables:
                    </span>
                    <ul className="space-y-1.5 text-xs text-zinc-400 list-disc list-inside">
                      {service.deliverables.map((del, dIdx) => (
                        <li key={dIdx} className="leading-snug">
                          {del}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tools Stack Chips */}
                  <div className="mb-6">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block mb-2">
                      Tools:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {service.tools.map((tool, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider bg-zinc-900 text-zinc-400 border border-zinc-800"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Button */}
                <button
                  id={`service-inquire-btn-${service.id}`}
                  type="button"
                  onClick={() => onSelectServiceForContact(service.title)}
                  className="w-full py-3.5 px-4 bg-zinc-900 hover:bg-[#00FF00] text-zinc-300 hover:text-black border border-zinc-800 hover:border-[#00FF00] font-mono text-xs uppercase tracking-widest font-bold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Inquire: {service.title.split('&')[0].trim()}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

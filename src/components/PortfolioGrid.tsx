import React, { useState } from 'react';
import {
  Layout,
  Palette,
  Sparkles,
  ArrowUpRight,
  Layers,
  ChevronRight,
  CheckCircle2,
} from 'lucide-react';
import { Project } from '../types';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

interface PortfolioGridProps {
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
}

export const PortfolioGrid: React.FC<PortfolioGridProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const tabs: { id: string; label: string; icon: React.ReactNode; badge: string; description: string }[] = [
    {
      id: 'all',
      label: 'All Works',
      icon: <Layers className="w-4 h-4" />,
      badge: `${PORTFOLIO_PROJECTS.length} Projects`,
      description: 'Comprehensive showcase of brand identities, graphic design, and UI/UX digital systems',
    },
    {
      id: 'graphic-design',
      label: 'Graphic Design',
      icon: <Palette className="w-4 h-4" />,
      badge: 'Branding & Type',
      description: 'Focused on brand identity, CorelDRAW vector mastery, Canva marketing kits, packaging & editorial collateral',
    },
    {
      id: 'ui-ux',
      label: 'UI/UX Design',
      icon: <Layout className="w-4 h-4" />,
      badge: 'Case Studies',
      description: 'Focused on clean interfaces, user workflows, Figma design systems & responsive mobile architectures',
    },
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === selectedCategory);

  const currentTabInfo = tabs.find((t) => t.id === selectedCategory) || tabs[0];

  return (
    <section id="portfolio" className="py-24 relative bg-[#050505] border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-[#00FF00] font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] mb-3 block font-bold">
              // SELECTED WORKS &amp; CASE STUDIES
            </span>
            <h2
              id="portfolio-heading"
              className="font-display font-black text-3xl sm:text-6xl text-white uppercase tracking-tighter"
            >
              Curated Portfolio
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm mt-2 max-w-xl font-mono uppercase tracking-wider">
              {currentTabInfo.description}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-4 py-2.5 text-xs font-mono uppercase tracking-widest text-zinc-300 bg-zinc-950 border border-zinc-800 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00FF00] animate-pulse" />
              <span>Full Show-Cash On Site // High Res</span>
            </div>
          </div>
        </div>

        {/* Filter Tabs Navigation */}
        <div className="flex flex-wrap gap-2 mb-12">
          {tabs.map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                id={`tab-btn-${tab.id}`}
                type="button"
                onClick={() => onSelectCategory(tab.id)}
                className={`px-4 py-2.5 text-xs font-mono uppercase tracking-widest flex items-center gap-2.5 transition-all cursor-pointer ${
                  isActive
                    ? 'bg-zinc-900 border border-[#00FF00] text-[#00FF00] font-bold shadow-[0_0_15px_rgba(0,255,0,0.25)]'
                    : 'bg-zinc-950 border border-zinc-800 text-zinc-500 hover:text-white hover:border-zinc-700'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
                <span
                  className={`text-[9px] px-1.5 py-0.5 border ${
                    isActive
                      ? 'border-[#00FF00] text-[#00FF00]'
                      : 'border-zinc-800 text-zinc-600'
                  }`}
                >
                  {tab.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              onClick={() => setActiveProject(project)}
              className="group bg-zinc-950 border border-zinc-900 hover:border-[#00FF00] transition-all duration-300 flex flex-col cursor-pointer hover:shadow-[0_0_25px_rgba(0,255,0,0.15)]"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900 border-b border-zinc-900">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 bg-zinc-950/90 border border-[#00FF00] text-[9px] uppercase font-mono font-bold tracking-widest text-[#00FF00]">
                    {project.categoryLabel}
                  </span>
                  {project.featured && (
                    <span className="px-2.5 py-1 bg-zinc-950 border border-zinc-700 text-[9px] font-mono uppercase text-zinc-400">
                      Featured
                    </span>
                  )}
                </div>

                {/* Top Right Action Indicator */}
                <div className="absolute top-4 right-4">
                  <div className="w-9 h-9 bg-zinc-950 border border-zinc-800 group-hover:border-[#00FF00] text-white group-hover:text-[#00FF00] flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                  <span>Client: {project.client}</span>
                  <span>{project.year}</span>
                </div>
              </div>

              {/* Card Information */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-display font-black text-xl sm:text-2xl text-white group-hover:text-[#00FF00] transition-colors uppercase tracking-tight line-clamp-1 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 line-clamp-2 leading-relaxed font-sans">
                    {project.subtitle}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider bg-zinc-900 border border-zinc-800 text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tools.slice(0, 2).map((tool, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider bg-zinc-950 border border-zinc-800 text-[#00FF00]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Action Bar */}
                <div className="pt-4 border-t border-zinc-900 flex items-center justify-between font-mono text-xs uppercase tracking-wider">
                  <span className="text-[#00FF00] flex items-center gap-1 group-hover:translate-x-1 transition-transform font-bold">
                    View Full Project Case
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>

                  <span className="text-zinc-500 text-[10px]">
                    {project.deliverables.length} Key Deliverables
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Case Study / Detail Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onSelectProject={(p) => setActiveProject(p)}
        allProjects={PORTFOLIO_PROJECTS}
      />
    </section>
  );
};

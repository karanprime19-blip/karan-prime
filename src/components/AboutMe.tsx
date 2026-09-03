import React, { useState } from 'react';
import {
  Sparkles,
  Award,
  Layers,
  Code2,
  Compass,
  Cpu,
  ArrowRight,
  CheckCircle2,
  Palette,
  Layout,
  Film,
} from 'lucide-react';
import { SKILL_CATEGORIES, CONTACT_INFO } from '../data/portfolioData';

export const AboutMe: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const journeyPhases = [
    {
      period: 'Phase 01',
      title: 'Static Design & Typographic Foundations',
      subtitle: 'The Craft of Visual Hierarchy & Print Identity',
      icon: <Palette className="w-5 h-5 text-[#38bdf8]" />,
      accent: 'border-[#38bdf8]',
      description:
        'My creative journey began in graphic design, obsessing over grid mathematics, Swiss typography, visual hierarchy, and tactile brand identities. Working with Adobe Illustrator and Photoshop, I learned how color psychology and precise kerning forge emotional connections before a single word is read.',
      highlights: [
        'Mastered vector illustration & brand mark iconography',
        'Deep study of typography, modular scales & packaging die-lines',
        'Built brand identities for 20+ startups & retail ventures',
      ],
    },
    {
      period: 'Phase 02',
      title: 'Interactive Experiences & Product UI/UX',
      subtitle: 'Human-Centered Systems & Digital Fluidity',
      icon: <Layout className="w-5 h-5 text-[#00f59b]" />,
      accent: 'border-[#00f59b]',
      description:
        'As design transitioned to software, I evolved into product design. Static posters gave way to responsive design systems, frictionless mobile flows, and complex SaaS data terminals. Using Figma and design tokens, I focused on reducing cognitive load and transforming convoluted workflows into serene digital products.',
      highlights: [
        'Engineered enterprise design systems with 100+ components',
        'Conducted user research, wireframing & rapid prototyping sprints',
        'Designed accessible, WCAG-compliant applications for fintech & medtech',
      ],
    },
    {
      period: 'Phase 03',
      title: 'Video Post-Production & Motion Storytelling',
      subtitle: 'Cinematic Pacing, Soundscapes & Kinetic Energy',
      icon: <Film className="w-5 h-5 text-cyan-400" />,
      accent: 'border-cyan-400',
      description:
        'Static visuals capture a moment, but video commands time. To complete my creative spectrum, I mastered video post-production, motion graphics, and color grading. Through Adobe Premiere Pro, After Effects, and DaVinci Resolve, I orchestrate dynamic cuts, micro-kinetic typography, and sound design that elevate brands into cinematic narratives.',
      highlights: [
        'Edited commercial spots & showreels with high audience retention',
        'Crafted 3D camera-tracked motion graphics & kinetic titles',
        'Color graded in DaVinci Resolve using filmic LUTs & ACES workflows',
      ],
    },
  ];

  return (
    <section id="about" className="py-24 relative bg-[#050505] border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[#00FF00] font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] mb-3 block font-bold">
            // BACKGROUND &amp; CREATIVE EVOLUTION
          </span>
          <h2
            id="about-heading"
            className="font-display font-black text-3xl sm:text-6xl text-white uppercase tracking-tighter leading-tight"
          >
            From Static Design to <br className="hidden sm:inline" />
            <span className="text-[#00FF00]">
              Interactive Systems &amp; Motion
            </span>
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm mt-4 leading-relaxed font-mono uppercase tracking-wider">
            I am Karan Patel—a multidisciplinary creator bridging the gaps between brand aesthetics, intuitive digital interfaces, and cinematic video storytelling.
          </p>
        </div>

        {/* Narrative Journey Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20">
          {journeyPhases.map((phase, idx) => (
            <div
              key={idx}
              className="p-7 bg-zinc-950 border border-zinc-900 hover:border-[#00FF00] transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#00FF00]">
                    {phase.icon}
                  </div>
                  <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest font-bold">
                    // 0{idx + 1}
                  </span>
                </div>

                <h3 className="font-display font-black text-xl text-white uppercase tracking-tight group-hover:text-[#00FF00] transition-colors mb-1.5">
                  {phase.title}
                </h3>
                <p className="text-[11px] font-mono uppercase tracking-widest text-[#00FF00] mb-4">
                  {phase.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6 font-sans">
                  {phase.description}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-900 space-y-2">
                {phase.highlights.map((item, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2 text-xs text-zinc-400 font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00FF00] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technical Skills & Proficiency Matrix */}
        <div className="p-8 sm:p-10 bg-zinc-950 border border-zinc-900 mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-zinc-900 gap-4">
            <div>
              <span className="text-[#00FF00] font-mono text-[10px] uppercase tracking-[0.3em] block mb-1">
                // SKILLS MATRIX
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
                Technical Stack &amp; Mastery
              </h3>
              <p className="text-xs text-zinc-500 mt-1 font-mono uppercase tracking-wider">
                Battle-tested tools and specialized capabilities deployed across client projects
              </p>
            </div>

            {/* Category Selector Tabs */}
            <div className="flex flex-wrap gap-2">
              {SKILL_CATEGORIES.map((cat, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-2 text-xs font-mono uppercase tracking-widest transition-all cursor-pointer ${
                    activeTab === index
                      ? 'bg-zinc-900 border border-[#00FF00] text-[#00FF00] font-bold shadow-[0_0_15px_rgba(0,255,0,0.25)]'
                      : 'bg-zinc-950 border border-zinc-800 text-zinc-500 hover:text-white'
                  }`}
                >
                  {cat.category}
                </button>
              ))}
            </div>
          </div>

          {/* Current Category Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILL_CATEGORIES[activeTab].skills.map((skill, i) => (
              <div
                key={i}
                className="p-4 bg-zinc-900/60 border border-zinc-900 hover:border-zinc-800 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono uppercase font-bold tracking-wider text-zinc-200">
                    {skill.name}
                  </span>
                  <span className="text-xs font-mono text-[#00FF00] font-bold">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full h-1 bg-zinc-800">
                  <div
                    className="h-full bg-[#00FF00] transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Software Badge Row */}
          <div className="mt-8 pt-6 border-t border-zinc-900 flex flex-wrap items-center justify-center sm:justify-start gap-2.5 text-xs">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#00FF00] mr-2 font-bold">
              Primary Stack:
            </span>
            {['Figma', 'CorelDRAW', 'Canva', 'Adobe Illustrator', 'Adobe Photoshop', 'Adobe Premiere Pro', 'Adobe After Effects', 'DaVinci Resolve', 'InDesign'].map(
              (tool, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-zinc-300 font-mono text-[10px] uppercase tracking-wider"
                >
                  {tool}
                </span>
              )
            )}
          </div>
        </div>

        {/* Creative Philosophy & Working Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-zinc-950 border border-zinc-900 hover:border-[#00FF00] transition-colors">
            <div className="w-10 h-10 bg-zinc-900 border border-zinc-800 text-[#00FF00] flex items-center justify-center mb-4">
              <Compass className="w-5 h-5" />
            </div>
            <h4 className="font-display font-black text-base sm:text-lg text-white uppercase tracking-tight mb-2">
              Clarity Before Decoration
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans">
              Design is problem-solving first. Every layout, typography decision, and animation must serve a clear communicative purpose and eliminate cognitive clutter.
            </p>
          </div>

          <div className="p-6 bg-zinc-950 border border-zinc-900 hover:border-[#00FF00] transition-colors">
            <div className="w-10 h-10 bg-zinc-900 border border-zinc-800 text-[#00FF00] flex items-center justify-center mb-4">
              <Film className="w-5 h-5" />
            </div>
            <h4 className="font-display font-black text-base sm:text-lg text-white uppercase tracking-tight mb-2">
              Story-Driven Motion
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans">
              Video and micro-interactions aren’t just eye candy. Pacing, beat-synchronized cuts, and sound design guide the viewer’s emotional journey and retain attention.
            </p>
          </div>

          <div className="p-6 bg-zinc-950 border border-zinc-900 hover:border-[#00FF00] transition-colors">
            <div className="w-10 h-10 bg-zinc-900 border border-zinc-800 text-[#00FF00] flex items-center justify-center mb-4">
              <Cpu className="w-5 h-5" />
            </div>
            <h4 className="font-display font-black text-base sm:text-lg text-white uppercase tracking-tight mb-2">
              Systematic Scalability
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans">
              From vector die-lines and brand books to tokenized Figma design systems, I build assets engineered to scale seamlessly across teams and platforms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

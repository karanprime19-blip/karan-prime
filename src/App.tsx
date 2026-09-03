import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PortfolioGrid } from './components/PortfolioGrid';
import { AboutMe } from './components/AboutMe';
import { Services } from './components/Services';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string>('UI/UX Design');
  const [isResumeModalOpen, setIsResumeModalOpen] = useState<boolean>(false);

  const handleExploreCategory = (category: 'ui-ux' | 'graphic-design' | 'video-editing') => {
    setSelectedCategory(category);
    const portfolioEl = document.getElementById('portfolio');
    if (portfolioEl) {
      portfolioEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForContact = (serviceTitle: string) => {
    setSelectedServiceForContact(serviceTitle);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="portfolio-app-root" className="min-h-screen bg-[#050505] text-white flex flex-col font-sans selection:bg-[#00FF00] selection:text-black">
      {/* Sticky Glass Navbar */}
      <Navbar onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Main Page Sections */}
      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <Hero onExploreCategory={handleExploreCategory} />

        {/* Categorized Filterable Portfolio Grid */}
        <PortfolioGrid
          selectedCategory={selectedCategory}
          onSelectCategory={(cat) => setSelectedCategory(cat)}
        />

        {/* About Me & Creative Journey */}
        <AboutMe />

        {/* Services & Capabilities Cards */}
        <Services onSelectServiceForContact={handleSelectServiceForContact} />

        {/* Contact & Inquiry Section */}
        <ContactSection selectedService={selectedServiceForContact} />
      </main>

      {/* Global Minimalist Footer */}
      <Footer />

      {/* Resume / Credentials Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}


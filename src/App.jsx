import React, { useState, useEffect } from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProcessSection from './components/ProcessSection';
import FeaturesSection from './components/FeaturesSection';
import ProjectsGallery from './components/ProjectsGallery';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-brand-dark selection:bg-brand-gold selection:text-white">
      {/* Top Banner Ribbon */}
      <TopBar onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* Primary Sticky Header */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenQuote={() => setIsQuoteOpen(true)}
      />

      {/* Main Page Flow */}
      <main className="flex-grow">
        <Hero
          onOpenQuote={() => setIsQuoteOpen(true)}
          onExploreProjects={() => handleNavigate('projects')}
        />
        <AboutSection onOpenQuote={() => setIsQuoteOpen(true)} />
        <ServicesSection onOpenQuote={() => setIsQuoteOpen(true)} />
        <ProcessSection onOpenQuote={() => setIsQuoteOpen(true)} />
        <FeaturesSection />
        <ProjectsGallery onOpenQuote={() => setIsQuoteOpen(true)} />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Global Quote Dialog Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />
    </div>
  );
}

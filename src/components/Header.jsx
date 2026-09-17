import React, { useState } from 'react';
import { Phone, Clock, Menu, X, ArrowRight } from 'lucide-react';
import { siteContent } from '../data/siteContent';

export default function Header({ activeSection, onNavigate, onOpenQuote }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { business } = siteContent;

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm font-sans">
      {/* Desktop Header: Authentic 2-Column Split Structure */}
      <div className="hidden lg:flex w-full">
        {/* Left Column: Dark Slate Brand Block (Matching #192324 & 40px Barlow Condensed text logo) */}
        <div 
          onClick={() => handleNavClick('home')}
          className="w-[28%] xl:w-[25%] bg-brand-dark cursor-pointer flex items-center justify-center px-6 py-5 text-center transition-colors hover:bg-brand-darker"
        >
          <span className="font-heading font-bold text-3xl xl:text-4xl text-white tracking-wide uppercase leading-tight">
            Mean Machine <span className="block text-brand-gold text-2xl xl:text-3xl font-semibold">Construction</span>
          </span>
        </div>

        {/* Right Column: 2-Tier Stack (Top Info Bar + Main Nav with hair-line borders) */}
        <div className="w-[72%] xl:w-[75%] flex flex-col justify-between bg-white">
          {/* Top Tier: Contact & Schedule Info */}
          <div className="flex items-center justify-end gap-10 px-8 py-3 text-sm text-brand-muted">
            <a
              href={business.phoneClean}
              className="flex items-center gap-2 text-brand-dark hover:text-brand-gold transition-colors font-medium font-sans"
            >
              <Phone className="w-4 h-4 text-brand-gold fill-brand-gold/20" />
              <span>{business.phone}</span>
            </a>

            <div className="flex items-center gap-2 text-gray-500 font-sans">
              <Clock className="w-4 h-4 text-brand-gold" />
              <span>{business.hours}</span>
            </div>
          </div>

          {/* Bottom Tier: Main Navigation Menu with border-t and border-b */}
          <div className="border-t border-b border-gray-200 px-8 py-3 flex items-center justify-between">
            <nav className="flex items-center space-x-8">
              {navLinks.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`font-sans font-semibold text-[15px] capitalize tracking-normal transition-colors relative py-1 ${
                      isActive
                        ? 'text-brand-gold font-bold'
                        : 'text-brand-muted hover:text-brand-gold'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute -bottom-3 left-0 right-0 h-[2px] bg-brand-gold" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Right Action Button: Connect With Us (Matching original primary gold button) */}
            <div>
              <button
                onClick={onOpenQuote}
                className="bg-brand-gold hover:bg-brand-goldDark text-brand-dark hover:text-white font-sans font-bold text-sm uppercase px-6 py-2.5 tracking-wider transition-all shadow-sm"
              >
                Connect With Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile / Tablet Header: Solid Dark Slate Header matching meanmachine.ca mobile layout */}
      <div className="lg:hidden bg-brand-dark text-white px-5 py-4 flex items-center justify-between border-b border-neutral-800">
        <div 
          onClick={() => handleNavClick('home')}
          className="cursor-pointer"
        >
          <span className="font-heading font-bold text-2xl uppercase tracking-wide text-white">
            Mean Machine <span className="text-brand-gold">Construction</span>
          </span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={business.phoneClean}
            className="p-2 text-brand-gold hover:text-white"
            aria-label="Call Now"
          >
            <Phone className="w-5 h-5" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:text-brand-gold focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-brand-gold" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-brand-darker border-t border-neutral-800 px-6 py-5 text-white animate-in slide-in-from-top duration-200">
          <div className="pb-4 mb-4 border-b border-neutral-800 flex items-center justify-between text-xs text-gray-400">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-brand-gold" />
              {business.phone}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-brand-gold" />
              {business.hours}
            </span>
          </div>

          <nav className="flex flex-col space-y-3">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left font-sans font-semibold text-base capitalize py-2 border-b border-neutral-800/60 ${
                  activeSection === item.id ? 'text-brand-gold font-bold' : 'text-gray-300 hover:text-brand-gold'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full bg-brand-gold text-brand-dark hover:bg-brand-goldDark hover:text-white font-sans font-bold text-sm uppercase py-3 transition-colors text-center"
              >
                Connect With Us / Request Quote
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

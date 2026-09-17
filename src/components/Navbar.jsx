import React, { useState } from 'react';
import { Menu, X, HardHat, PhoneCall } from 'lucide-react';
import { siteContent } from '../data/siteContent';

export default function Navbar({ activeSection, onNavigate, onOpenQuote }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { business, navigation } = siteContent;

  const handleNavClick = (id) => {
    onNavigate(id);
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <div 
            onClick={() => handleNavClick('home')}
            className="cursor-pointer flex items-center gap-3 group"
          >
            <div className="w-10 h-10 bg-brand-dark flex items-center justify-center border-2 border-brand-gold group-hover:bg-brand-gold transition-colors duration-300">
              <HardHat className="w-6 h-6 text-brand-gold group-hover:text-brand-dark transition-colors duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-2xl sm:text-3xl tracking-tight text-brand-dark uppercase leading-none">
                {business.name.split(' ')[0]} <span className="text-brand-gold">{business.name.split(' ').slice(1).join(' ')}</span>
              </span>
              <span className="text-[10px] tracking-[0.25em] uppercase text-gray-500 font-semibold mt-1">
                Engineering & Construction
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-6">
            {navigation.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`font-heading text-lg uppercase tracking-wider px-3 py-2 transition-colors relative font-semibold ${
                    isActive 
                      ? 'text-brand-gold' 
                      : 'text-brand-dark hover:text-brand-gold'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-brand-gold rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTA & Mobile Trigger */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenQuote}
              className="hidden sm:inline-flex btn-primary !py-2.5 !px-5 text-sm"
            >
              Request a Quote
            </button>
            <a
              href={business.phoneClean}
              className="p-2.5 text-brand-dark hover:text-brand-gold bg-gray-100 rounded-none sm:hidden"
              aria-label="Call Now"
            >
              <PhoneCall className="w-5 h-5 text-brand-gold" />
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-brand-dark hover:text-brand-gold focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-brand-darker border-t border-neutral-800 px-6 py-6 text-white animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left font-heading text-xl uppercase tracking-wider py-2 border-b border-neutral-800 ${
                  activeSection === item.id ? 'text-brand-gold font-bold' : 'text-gray-200 hover:text-brand-gold'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileOpen(false);
                  onOpenQuote();
                }}
                className="btn-primary w-full text-center py-3"
              >
                Request a Quote
              </button>
              <a
                href={business.phoneClean}
                className="text-center font-heading text-lg tracking-wider text-brand-gold py-2 border border-brand-gold/40"
              >
                Call: {business.phone}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

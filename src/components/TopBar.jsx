import React from 'react';
import { Phone, Clock, MapPin, ArrowRight } from 'lucide-react';
import { siteContent } from '../data/siteContent';

export default function TopBar({ onOpenQuote }) {
  const { business } = siteContent;

  return (
    <div className="bg-brand-darker text-gray-300 text-xs py-2 px-4 border-b border-neutral-800 tracking-wide font-sans">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex items-center flex-wrap justify-center gap-4 sm:gap-6">
          <a
            href={business.phoneClean}
            className="flex items-center gap-1.5 hover:text-brand-gold transition-colors font-medium text-white"
          >
            <Phone className="w-3.5 h-3.5 text-brand-gold" />
            <span>{business.phone}</span>
          </a>
          <span className="hidden md:inline-block text-neutral-600">|</span>
          <div className="flex items-center gap-1.5 text-gray-400">
            <Clock className="w-3.5 h-3.5 text-brand-gold" />
            <span>{business.hours}</span>
          </div>
          <span className="hidden md:inline-block text-neutral-600">|</span>
          <div className="hidden lg:flex items-center gap-1.5 text-gray-400">
            <MapPin className="w-3.5 h-3.5 text-brand-gold" />
            <span>Serving Calgary, Okotoks, Edmonton & Alberta</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onOpenQuote}
            className="text-brand-gold hover:text-white font-semibold flex items-center gap-1 transition-colors uppercase tracking-wider text-[11px]"
          >
            <span>Connect With Us</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
}

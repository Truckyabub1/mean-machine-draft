import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { siteContent } from '../data/siteContent';

export default function ProcessSection({ onOpenQuote }) {
  const { processSteps } = siteContent;

  return (
    <section id="process" className="py-20 lg:py-28 bg-brand-darker text-white relative overflow-hidden">
      {/* Background Accent Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#daa14c_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-brand-gold font-heading font-semibold text-sm tracking-widest uppercase mb-2 block">
            Built In Goodness &bull; The Family Journey
          </span>
          <h2 className="font-heading font-extrabold text-4xl sm:text-5xl uppercase tracking-tight text-white mb-4">
            How We Build Your Haven: <span className="text-brand-gold">Step By Step</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg font-sans">
            From initial kitchen table conversations to celebrating under warm timber beams, we guide every family with honesty, gentle care, and peaceful transparency.
          </p>
        </div>

        {/* 4 Illustrated Milestone Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="bg-brand-dark/95 border border-neutral-800 flex flex-col justify-between relative group hover:border-brand-gold transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Card Illustration Thumbnail */}
              <div className="relative h-48 sm:h-52 overflow-hidden border-b border-neutral-800 bg-neutral-900">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60" />
                <div className="absolute top-3 left-3 bg-brand-dark/90 text-brand-gold font-heading font-extrabold text-xs px-2.5 py-1 border-l-2 border-brand-gold uppercase tracking-wider">
                  Step {step.step}
                </div>
                <div className="absolute bottom-3 right-3 bg-neutral-900/90 text-gray-200 text-[10px] font-sans uppercase tracking-widest px-2 py-1 border border-neutral-700">
                  {step.highlight}
                </div>
              </div>

              {/* Title, Subtitle & Description */}
              <div className="p-6 flex-grow flex flex-col">
                <div className="text-brand-gold text-xs font-heading font-semibold uppercase tracking-wider mb-1">
                  {step.subtitle}
                </div>
                <h3 className="font-heading font-extrabold text-xl uppercase tracking-wide text-white mb-3 group-hover:text-brand-gold transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-sans font-light">
                  {step.description}
                </p>
              </div>

              {/* Card Footer */}
              <div className="px-6 py-3 bg-neutral-900/60 border-t border-neutral-800 flex items-center justify-between text-xs font-heading uppercase tracking-wider text-brand-gold">
                <span>Milestone {step.step}</span>
                <CheckCircle className="w-4 h-4 text-brand-gold" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-14 text-center">
          <p className="text-gray-300 text-sm font-sans mb-4">
            Ready to begin your family sanctuary journey with us?
          </p>
          <button
            onClick={onOpenQuote}
            className="btn-primary inline-flex items-center gap-2"
          >
            <span>Begin Your Family Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}

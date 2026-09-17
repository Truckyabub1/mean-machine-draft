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
          <span className="text-brand-gold font-heading font-bold text-sm tracking-widest uppercase mb-2 block">
            Workflow & Methodology
          </span>
          <h2 className="font-heading font-extrabold text-4xl sm:text-5xl uppercase tracking-tight text-white mb-4">
            Streamlined Process Ensuring <span className="text-brand-gold">Efficiency & Quality</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg font-sans">
            Our workflow is designed to facilitate smooth operations, eliminate project delays, and enhance client satisfaction from initial concept to completion.
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="bg-brand-dark/90 border border-neutral-800 p-8 flex flex-col justify-between relative group hover:border-brand-gold transition-all duration-300 hover:-translate-y-1"
            >
              {/* Step Number */}
              <div className="flex items-center justify-between mb-8">
                <span className="font-heading font-black text-5xl text-brand-gold/40 group-hover:text-brand-gold transition-colors">
                  {step.step}
                </span>
                <span className="text-[11px] font-sans uppercase tracking-widest text-gray-500 font-bold px-2 py-1 bg-neutral-900 border border-neutral-800">
                  {step.highlight}
                </span>
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="font-heading font-bold text-2xl uppercase tracking-wide text-white mb-3 group-hover:text-brand-gold transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed font-sans mb-6">
                  {step.description}
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-neutral-800 flex items-center justify-between text-xs font-heading uppercase tracking-wider text-brand-gold">
                <span>Phase {step.step}</span>
                <CheckCircle className="w-4 h-4 text-brand-gold" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-14 text-center">
          <p className="text-gray-400 text-sm font-sans mb-4">
            Ready to initiate Step 01 with our project estimators?
          </p>
          <button
            onClick={onOpenQuote}
            className="btn-primary inline-flex items-center gap-2"
          >
            <span>Book Your Initial Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}

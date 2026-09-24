import React from 'react';
import { CheckCircle2, MapPin, Building, Ruler, Shield } from 'lucide-react';
import { siteContent } from '../data/siteContent';

export default function AboutSection({ onOpenQuote }) {
  const { business } = siteContent;

  return (
    <section id="about" className="py-20 lg:py-28 bg-white text-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Column with layered images and stats badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative bg-gradient-to-br from-neutral-800 to-brand-dark min-h-[420px] overflow-hidden border border-neutral-700">
              <img
                src="/assets/alberta-craftsman.jpg"
                alt="Alberta Trades Craftsman"
                className="w-full h-[450px] object-cover shadow-xl relative z-10"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center pointer-events-none z-0">
                <Building className="w-16 h-16 text-brand-gold/40 mb-3" />
                <span className="font-heading text-2xl uppercase tracking-wider text-white font-bold">Precision Construction</span>
                <span className="text-xs text-gray-400 mt-1 uppercase tracking-widest">Alberta Master Trades</span>
              </div>
              <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-brand-dark text-white p-6 sm:p-8 max-w-[280px] sm:max-w-[320px] border-l-4 border-brand-gold shadow-2xl">
                <span className="font-heading font-extrabold text-4xl text-brand-gold block">
                  100%
                </span>
                <span className="font-heading uppercase text-lg tracking-wider block font-bold text-white mt-1">
                  Commitment to Quality
                </span>
                <p className="text-xs text-gray-300 mt-2 font-sans">
                  Punctual delivery, structural integrity, and dedicated communication on every project.
                </p>
              </div>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-6">
            <div className="inline-block text-brand-gold font-heading font-bold text-sm tracking-widest uppercase mb-2">
              Who We Are &bull; About Us
            </div>
            
            <h2 className="font-heading font-extrabold text-4xl sm:text-5xl uppercase tracking-tight text-brand-dark mb-6 leading-tight">
              Unmatched Expertise in <span className="text-brand-gold">Precision Construction</span>
            </h2>

            <p className="text-brand-muted text-base sm:text-lg leading-relaxed mb-6 font-sans">
              Rooted in genuine Alberta pride, Mean Machine Construction builds welcoming outdoor havens and durable structures with honest blue-collar integrity. Every project is founded on mutual trust, kindness, and meticulous care—providing a secure, beautiful sanctuary for your family to enjoy across all walks of life.
            </p>

            <div className="space-y-3 mb-8 font-sans">
              {[
                "Licensed, insured, and safety-compliant across Alberta",
                "Handcrafted timber joinery, custom decking, and family havens",
                "Engineered structural framing built for harsh prairie climates",
                "Rooted in kindness, respectful communication, and complete transparency"
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 font-medium text-sm sm:text-base">{point}</span>
                </div>
              ))}
            </div>

            {/* Service Area Badge List */}
            <div className="p-5 bg-brand-surface border-l-4 border-brand-gold mb-8">
              <div className="flex items-center gap-2 mb-2 text-brand-dark font-heading uppercase tracking-wider text-base font-bold">
                <MapPin className="w-4 h-4 text-brand-gold" />
                <span>Alberta Service Footprint</span>
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wider">
                {business.locations.map((loc, i) => (
                  <span key={i} className="bg-white px-3 py-1 border border-gray-200 text-brand-dark">
                    {loc}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={onOpenQuote}
              className="btn-primary"
            >
              Start Your Project Consultation
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

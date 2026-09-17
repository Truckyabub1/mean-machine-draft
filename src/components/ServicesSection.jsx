import React from 'react';
import { Check, ArrowUpRight } from 'lucide-react';
import { siteContent } from '../data/siteContent';

export default function ServicesSection({ onOpenQuote }) {
  const { services } = siteContent;

  return (
    <section id="services" className="py-20 lg:py-28 bg-brand-surface text-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-brand-gold font-heading font-bold text-sm tracking-widest uppercase mb-2">
            Specialized Capabilities
          </div>
          <h2 className="font-heading font-extrabold text-4xl sm:text-5xl uppercase tracking-tight text-brand-dark">
            Our Core <span className="text-brand-gold">Construction Services</span>
          </h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto my-4" />
          <p className="text-brand-muted text-base sm:text-lg font-sans">
            Delivering precision engineering and high-durability craftsmanship across residential outdoor living and commercial buildouts.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-gray-200 flex flex-col justify-between group hover:border-brand-gold hover:shadow-xl transition-all duration-300"
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-brand-dark to-neutral-900 flex items-center justify-center">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 relative z-10"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center z-0">
                    <span className="font-heading uppercase text-lg text-brand-gold font-bold">{service.title}</span>
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Mean Machine Spec</span>
                  </div>
                  <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors z-20 pointer-events-none" />
                </div>

                <div className="p-6">
                  <h3 className="font-heading font-bold text-2xl uppercase tracking-wide text-brand-dark mb-3 group-hover:text-brand-gold transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm font-sans mb-6 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-gray-100">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-medium text-gray-700">
                        <Check className="w-3.5 h-3.5 text-brand-gold flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={onOpenQuote}
                  className="w-full mt-4 py-2.5 px-4 bg-gray-50 border border-gray-200 text-brand-dark font-heading uppercase text-sm tracking-wider font-bold flex items-center justify-center gap-2 group-hover:bg-brand-gold group-hover:border-brand-gold group-hover:text-white transition-all"
                >
                  <span>Request Quote</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Project Note Banner */}
        <div className="mt-16 bg-brand-dark text-white p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border-l-8 border-brand-gold">
          <div>
            <h4 className="font-heading font-extrabold text-2xl sm:text-3xl uppercase tracking-wide">
              Have a Custom Architectural or Commercial Project?
            </h4>
            <p className="text-gray-400 text-sm sm:text-base mt-1 font-sans">
              We engineer custom builds to unique client blueprints across Alberta.
            </p>
          </div>
          <button
            onClick={onOpenQuote}
            className="btn-primary flex-shrink-0 !py-3 !px-8 text-base"
          >
            Discuss Your Specs
          </button>
        </div>

      </div>
    </section>
  );
}

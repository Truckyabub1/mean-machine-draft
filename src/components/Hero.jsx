import React from 'react';
import { ArrowRight, ShieldCheck, Award, Hammer, Sparkles } from 'lucide-react';
import { siteContent } from '../data/siteContent';

export default function Hero({ onOpenQuote, onExploreProjects }) {
  const { business } = siteContent;

  return (
    <section className="relative min-h-[85vh] flex items-center bg-brand-dark overflow-hidden text-white">
      {/* Background Graphic & Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity scale-105 transform motion-safe:transition-transform duration-1000"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d0fbb186156a?auto=format&fit=crop&w=1920&q=80')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-darker via-brand-dark/95 to-brand-dark/80" />
      
      {/* Subtle Geometric Industrial Accents */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-brand-gold/5 -skew-x-12 pointer-events-none hidden lg:block" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 z-10">
        <div className="max-w-3xl">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-brand-gold/15 border border-brand-gold/40 text-brand-gold text-xs sm:text-sm font-semibold tracking-widest uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span>{business.tagline}</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading font-extrabold text-5xl sm:text-6xl lg:text-7xl uppercase leading-[0.95] tracking-tight text-white mb-6">
            Mean Machine Construction: <span className="text-brand-gold block mt-2">Crafting Excellence</span>
          </h1>

          {/* Subtitle / Core value statement */}
          <p className="text-gray-300 text-lg sm:text-xl font-light leading-relaxed mb-10 max-w-2xl">
            {business.description}
          </p>

          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:items-center mb-16">
            <button
              onClick={onOpenQuote}
              className="btn-primary flex items-center justify-center gap-2 group text-lg"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onExploreProjects}
              className="btn-outline-light text-lg"
            >
              Explore Projects
            </button>
          </div>

          {/* Trust Badges Bar */}
          <div className="pt-8 border-t border-neutral-800 grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-brand-gold flex-shrink-0" />
              <div>
                <div className="font-heading font-bold text-lg text-white uppercase leading-none">100% Guaranteed</div>
                <div className="text-xs text-gray-400 mt-0.5">Quality Craftsmanship</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Hammer className="w-8 h-8 text-brand-gold flex-shrink-0" />
              <div>
                <div className="font-heading font-bold text-lg text-white uppercase leading-none">Alberta-Wide</div>
                <div className="text-xs text-gray-400 mt-0.5">Calgary, Okotoks & Beyond</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Award className="w-8 h-8 text-brand-gold flex-shrink-0" />
              <div>
                <div className="font-heading font-bold text-lg text-white uppercase leading-none">High-Performance</div>
                <div className="text-xs text-gray-400 mt-0.5">Residential & Commercial</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="font-heading font-black text-2xl text-brand-gold flex-shrink-0">7D</div>
              <div>
                <div className="font-heading font-bold text-lg text-white uppercase leading-none">Reliable Support</div>
                <div className="text-xs text-gray-400 mt-0.5">Available 7 Days a Week</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

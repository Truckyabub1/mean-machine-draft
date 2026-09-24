import React from 'react';
import { ArrowRight, ShieldCheck, Heart, Home } from 'lucide-react';
import { siteContent } from '../data/siteContent';

export default function Hero({ onOpenQuote, onExploreProjects }) {
  const { business } = siteContent;

  return (
    <section className="relative min-h-[640px] lg:min-h-[760px] flex items-center bg-brand-dark overflow-hidden text-white">
      {/* Background Builder Imagery & Warm Prairie Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center md:bg-[center_20%] opacity-55 transform scale-100 transition-transform duration-1000 ease-out"
        style={{
          backgroundImage: `url('/deck-image-church.jpg')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-darker via-brand-dark/85 to-brand-dark/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-transparent to-black/40 opacity-90" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 z-10 w-full">
        <div className="max-w-3xl">
          
          {/* Welcoming Trust Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-brand-gold/15 border border-brand-gold/40 text-brand-gold text-xs sm:text-sm font-heading font-semibold uppercase tracking-widest mb-6">
            <Heart className="w-3.5 h-3.5 text-brand-gold" />
            <span>Alberta Hometown Hero &bull; Rooted In Love & Kindness</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading font-extrabold text-5xl sm:text-6xl lg:text-7xl uppercase leading-[1.05] tracking-tight text-white mb-6">
            Enduring Sanctuaries, <span className="text-brand-gold block sm:inline">Shaped By Hand</span>
          </h1>

          {/* Core Service & Mission Statement */}
          <p className="text-gray-200 text-base sm:text-lg font-sans leading-relaxed mb-8 max-w-2xl font-light">
            Rooted in authentic blue-collar Alberta integrity, Mean Machine Construction builds resilient timber structures, custom decks, and welcoming outdoor havens. Designed with devotion, honesty, and safety so your family and loved ones from every walk of life can gather in peace.
          </p>

          {/* Hometown Trust Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10 text-xs sm:text-sm font-heading uppercase tracking-wider text-gray-200">
            <div className="flex items-center gap-2 bg-neutral-900/70 border border-neutral-800/80 px-3 py-2">
              <ShieldCheck className="w-4 h-4 text-brand-gold flex-shrink-0" />
              <span>Uncompromised Integrity</span>
            </div>
            <div className="flex items-center gap-2 bg-neutral-900/70 border border-neutral-800/80 px-3 py-2">
              <Home className="w-4 h-4 text-brand-gold flex-shrink-0" />
              <span>Safe Family Haven</span>
            </div>
            <div className="flex items-center gap-2 bg-neutral-900/70 border border-neutral-800/80 px-3 py-2">
              <Heart className="w-4 h-4 text-brand-gold flex-shrink-0" />
              <span>For All Walks of Life</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 items-center">
            <button
              onClick={onOpenQuote}
              className="bg-brand-gold hover:bg-brand-goldDark text-brand-dark hover:text-white font-heading uppercase text-xl font-extrabold px-8 py-3.5 tracking-wider transition-all inline-flex items-center gap-2 shadow-lg"
            >
              <span>Request Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={onExploreProjects}
              className="border-2 border-white hover:bg-white hover:text-brand-dark text-white font-heading uppercase text-xl font-extrabold px-8 py-3.5 tracking-wider transition-all"
            >
              Explore Sanctuaries
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

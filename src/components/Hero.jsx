import React from 'react';
import { ArrowRight } from 'lucide-react';
import { siteContent } from '../data/siteContent';

export default function Hero({ onOpenQuote, onExploreProjects }) {
  const { business } = siteContent;

  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center bg-brand-dark overflow-hidden text-white">
      {/* Background Graphic & Dark Overlay - using exact original asset */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/9584819/pexels-photo-9584819.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&pl=m1ve&w=1920&h=1080')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-darker via-brand-dark/90 to-brand-dark/75" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 z-10 w-full">
        <div className="max-w-3xl">
          
          {/* Eyebrow */}
          <div className="text-brand-gold font-heading font-semibold text-lg sm:text-xl uppercase tracking-widest mb-3">
            {business.tagline}
          </div>

          {/* Main Headline */}
          <h1 className="font-heading font-extrabold text-5xl sm:text-6xl lg:text-7xl uppercase leading-[1.05] tracking-normal text-white mb-6">
            Mean Machine Construction: <span className="text-white block sm:inline">Crafting Excellence</span>
          </h1>

          {/* Core Service Statement */}
          <p className="text-gray-200 text-base sm:text-lg font-sans leading-relaxed mb-10 max-w-2xl font-light">
            At Mean Machine Construction, we specialize in delivering top-tier decking, custom carpentry, and architectural framing services for both residential and commercial sectors, ensuring quality and efficiency in every project we undertake.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 items-center">
            <button
              onClick={onOpenQuote}
              className="bg-brand-gold hover:bg-brand-goldDark text-brand-dark hover:text-white font-heading uppercase text-xl font-bold px-8 py-3.5 tracking-wider transition-all inline-flex items-center gap-2"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={onExploreProjects}
              className="border-2 border-white hover:bg-white hover:text-brand-dark text-white font-heading uppercase text-xl font-bold px-8 py-3.5 tracking-wider transition-all"
            >
              Learn More
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

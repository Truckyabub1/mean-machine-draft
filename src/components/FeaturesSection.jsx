import React from 'react';
import { Award, Clock, Users, ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';
import { siteContent } from '../data/siteContent';

export default function FeaturesSection() {
  const { features } = siteContent;

  const iconMap = [
    <Award className="w-8 h-8 text-brand-gold" />,
    <Clock className="w-8 h-8 text-brand-gold" />,
    <Users className="w-8 h-8 text-brand-gold" />,
    <ShieldAlert className="w-8 h-8 text-brand-gold" />
  ];

  return (
    <section className="py-20 lg:py-28 bg-white text-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Header text */}
          <div className="lg:col-span-5">
            <span className="text-brand-gold font-heading font-bold text-sm tracking-widest uppercase mb-2 block">
              The Mean Machine Advantage
            </span>
            <h2 className="font-heading font-extrabold text-4xl sm:text-5xl uppercase tracking-tight text-brand-dark mb-6 leading-tight">
              Features That Separate Us <span className="text-brand-gold">From The Competition</span>
            </h2>
            <p className="text-brand-muted text-base sm:text-lg font-sans leading-relaxed mb-8">
              We merge modern building technologies, master craftsmanship, and client-first communication to deliver projects that endure Alberta's rigorous environmental demands.
            </p>

            <div className="p-6 bg-brand-surface border-l-4 border-brand-gold">
              <div className="flex items-center gap-3 mb-2">
                <Sparkles className="w-5 h-5 text-brand-gold" />
                <span className="font-heading font-bold uppercase tracking-wide text-lg text-brand-dark">
                  Precision Engineering
                </span>
              </div>
              <p className="text-sm text-gray-600 font-sans">
                Every measurement, fastener, and structural cut is completed according to strict provincial building codes and best-in-class architectural specifications.
              </p>
            </div>
          </div>

          {/* 4 Feature Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-brand-surface/60 p-8 border border-gray-200 hover:border-brand-gold hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-5 p-3 bg-white inline-block shadow-sm border border-gray-100">
                  {iconMap[idx % iconMap.length]}
                </div>
                <h3 className="font-heading font-bold text-2xl uppercase tracking-wide text-brand-dark mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm font-sans leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

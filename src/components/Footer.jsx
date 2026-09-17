import React from 'react';
import { Phone, Mail, MapPin, HardHat, ChevronRight } from 'lucide-react';
import { siteContent } from '../data/siteContent';

export default function Footer({ onNavigate }) {
  const { business, navigation, services } = siteContent;

  return (
    <footer className="bg-brand-darker text-gray-300 font-sans border-t border-neutral-800">
      {/* Main Footer Block */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Brand Manifesto Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-brand-dark flex items-center justify-center border-2 border-brand-gold">
                <HardHat className="w-5 h-5 text-brand-gold" />
              </div>
              <span className="font-heading font-extrabold text-2xl uppercase tracking-tight text-white">
                Mean <span className="text-brand-gold">Machine</span>
              </span>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              At Mean Machine, we are dedicated to pushing the limits of construction, blending artistry with efficiency to redefine spaces across Alberta.
            </p>

            <div className="pt-2 text-xs text-brand-gold font-heading uppercase tracking-widest font-semibold">
              Quality Craftsmanship &bull; Precision Builds &bull; Proven Durability
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2">
            <h4 className="font-heading font-bold text-lg uppercase tracking-wider text-white mb-4 border-b border-neutral-800 pb-2">
              Useful Links
            </h4>
            <ul className="space-y-2 text-sm">
              {navigation.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="hover:text-brand-gold transition-colors flex items-center gap-1.5 text-gray-400"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-brand-gold" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Catalog Column */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-bold text-lg uppercase tracking-wider text-white mb-4 border-b border-neutral-800 pb-2">
              Our Services
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {services.map((svc) => (
                <li key={svc.id} className="flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-gold" />
                  <span>{svc.title}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-bold text-lg uppercase tracking-wider text-white mb-4 border-b border-neutral-800 pb-2">
              Direct Contact
            </h4>
            <div className="space-y-3 text-sm">
              <div>
                <span className="text-xs uppercase tracking-wider text-gray-500 block">Phone Number</span>
                <a
                  href={business.phoneClean}
                  className="font-heading text-lg text-white font-bold hover:text-brand-gold transition-colors"
                >
                  {business.phone}
                </a>
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider text-gray-500 block">Email Us</span>
                <a
                  href={`mailto:${business.email}`}
                  className="text-white hover:text-brand-gold transition-colors text-sm break-all"
                >
                  {business.email}
                </a>
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider text-gray-500 block">Service Locations</span>
                <p className="text-gray-400 text-xs mt-0.5">
                  Calgary, Okotoks, Edmonton & Foothills, Alberta
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Sub-Footer Copyright Bar */}
      <div className="bg-black/80 py-6 px-4 border-t border-neutral-900 text-xs text-gray-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            &copy; {new Date().getFullYear()} {business.name}. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>High-Performance Construction Solutions</span>
            <span>&bull;</span>
            <span>Independent Rough Draft Rebuild</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

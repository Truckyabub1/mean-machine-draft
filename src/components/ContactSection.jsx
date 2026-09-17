import React, { useState } from 'react';
import { Phone, Mail, Clock, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { siteContent } from '../data/siteContent';

export default function ContactSection() {
  const { business } = siteContent;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Decking Services',
    location: 'Calgary',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white text-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-brand-gold font-heading font-bold text-sm tracking-widest uppercase mb-2">
            Connect With Us
          </div>
          <h2 className="font-heading font-extrabold text-4xl sm:text-5xl uppercase tracking-tight text-brand-dark">
            Ready To Build? <span className="text-brand-gold">Request A Quote</span>
          </h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto my-4" />
          <p className="text-brand-muted text-base sm:text-lg font-sans">
            Send us a message with your project scope and timelines. We will deliver a comprehensive, transparent estimate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Direct Contact Cards Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="bg-brand-dark text-white p-8 border-l-4 border-brand-gold">
              <h3 className="font-heading font-extrabold text-3xl uppercase tracking-wide mb-6">
                Direct Inquiries
              </h3>
              
              <div className="space-y-6 font-sans">
                {/* Phone */}
                <a 
                  href={business.phoneClean} 
                  className="flex items-start gap-4 group p-3 bg-neutral-900/50 hover:bg-neutral-900 transition-colors"
                >
                  <div className="p-3 bg-brand-gold/10 text-brand-gold border border-brand-gold/30">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-widest text-gray-400 block font-heading">
                      Direct Phone
                    </span>
                    <span className="text-xl font-bold text-white group-hover:text-brand-gold transition-colors font-heading tracking-wider">
                      {business.phone}
                    </span>
                    <span className="text-xs text-brand-gold block mt-0.5">Call or Text Anytime</span>
                  </div>
                </a>

                {/* Email */}
                <a 
                  href={`mailto:${business.email}`} 
                  className="flex items-start gap-4 group p-3 bg-neutral-900/50 hover:bg-neutral-900 transition-colors"
                >
                  <div className="p-3 bg-brand-gold/10 text-brand-gold border border-brand-gold/30">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-widest text-gray-400 block font-heading">
                      Direct Email
                    </span>
                    <span className="text-base font-semibold text-white group-hover:text-brand-gold transition-colors break-all">
                      {business.email}
                    </span>
                    <span className="text-xs text-gray-400 block mt-0.5">Prompt response guaranteed</span>
                  </div>
                </a>

                {/* Hours */}
                <div className="flex items-start gap-4 p-3 bg-neutral-900/50">
                  <div className="p-3 bg-brand-gold/10 text-brand-gold border border-brand-gold/30">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-widest text-gray-400 block font-heading">
                      Service Availability
                    </span>
                    <span className="text-lg font-bold text-white font-heading tracking-wider">
                      {business.hours}
                    </span>
                    <span className="text-xs text-gray-400 block mt-0.5">Residential & Commercial Emergency Scheduling</span>
                  </div>
                </div>

                {/* Regions */}
                <div className="flex items-start gap-4 p-3 bg-neutral-900/50">
                  <div className="p-3 bg-brand-gold/10 text-brand-gold border border-brand-gold/30">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-widest text-gray-400 block font-heading">
                      Service Radius
                    </span>
                    <span className="text-base font-medium text-white">
                      Calgary, Okotoks, Edmonton & Surroundings
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick reassurance */}
            <div className="p-6 bg-brand-surface border border-gray-200">
              <div className="flex items-center gap-2 text-brand-dark font-heading uppercase text-base font-bold mb-1">
                <CheckCircle2 className="w-5 h-5 text-brand-gold" />
                <span>Zero Obligation Estimates</span>
              </div>
              <p className="text-xs text-gray-600 font-sans">
                We review your blueprints, photos, or on-site dimensions and provide structured transparent proposals with clear line-item breakdowns.
              </p>
            </div>
          </div>

          {/* Quote & Message Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-brand-surface p-8 sm:p-10 border border-gray-200 shadow-sm relative">
              
              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 bg-brand-gold/20 text-brand-gold flex items-center justify-center mx-auto border-2 border-brand-gold">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-heading font-extrabold text-3xl uppercase tracking-wide text-brand-dark">
                    Quote Request Received
                  </h3>
                  <p className="text-gray-600 font-sans max-w-md mx-auto">
                    Thank you, <span className="font-bold text-brand-dark">{formData.name}</span>. Our project estimator will review your specifications and contact you at <span className="font-bold text-brand-dark">{formData.phone}</span> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        projectType: 'Decking Services',
                        location: 'Calgary',
                        message: ''
                      });
                    }}
                    className="btn-secondary !py-2 !px-6 text-sm mt-4"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="font-heading font-extrabold text-2xl uppercase tracking-wide text-brand-dark border-b border-gray-200 pb-3">
                    Project Consultation Form
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-2 font-heading">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Travis Vance"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-gray-300 text-brand-dark focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-2 font-heading">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 587-579-6656"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-gray-300 text-brand-dark focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-2 font-heading">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. client@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-gray-300 text-brand-dark focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-2 font-heading">
                        Project Location
                      </label>
                      <select
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-gray-300 text-brand-dark focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none text-sm transition-all"
                      >
                        <option value="Calgary">Calgary & Area</option>
                        <option value="Okotoks">Okotoks & Foothills</option>
                        <option value="Edmonton">Edmonton Metro</option>
                        <option value="Other Alberta">Other Alberta Region</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-2 font-heading">
                      Service / Project Category
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-300 text-brand-dark focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none text-sm transition-all"
                    >
                      <option value="Decking Services">Decking Services (Composite / Cedar / Multi-tier)</option>
                      <option value="Custom Carpentry">Custom Carpentry & Architectural Millwork</option>
                      <option value="Structural & Interior Framing">Structural & Interior Framing</option>
                      <option value="Concrete Solutions">Concrete Solutions & Foundations</option>
                      <option value="Commercial Buildout">Commercial Tenant Improvement</option>
                      <option value="Other Custom Project">Other Custom Project</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-2 font-heading">
                      Project Details & Dimensions
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Describe your project requirements, approximate dimensions, timeline goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-300 text-brand-dark focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none text-sm transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full flex items-center justify-center gap-2 !py-3.5 text-base"
                  >
                    <span>Submit Quote Request</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-gray-500 text-center font-sans">
                    We respect your privacy. Contact information is used solely to provide your requested quote.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

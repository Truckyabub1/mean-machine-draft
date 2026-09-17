import React, { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';
import { siteContent } from '../data/siteContent';

export default function QuoteModal({ isOpen, onClose }) {
  const { business } = siteContent;
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Decking Services',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white max-w-lg w-full border-t-4 border-brand-gold relative shadow-2xl">
        <button
          onClick={handleResetAndClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-brand-dark transition-colors"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-brand-gold/20 text-brand-gold flex items-center justify-center mx-auto border-2 border-brand-gold">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-heading font-extrabold text-3xl uppercase tracking-wide text-brand-dark">
                Quote Request Received
              </h3>
              <p className="text-gray-600 text-sm font-sans">
                Thank you! We will review your project requirements and call or email you shortly.
              </p>
              <button
                onClick={handleResetAndClose}
                className="btn-primary !py-2.5 !px-6 text-sm mt-4"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="mb-4">
                <span className="text-xs uppercase tracking-widest text-brand-gold font-heading font-bold block">
                  Fast Estimate
                </span>
                <h3 className="font-heading font-extrabold text-3xl uppercase tracking-tight text-brand-dark">
                  Request A Free Quote
                </h3>
                <p className="text-xs text-gray-500 font-sans mt-1">
                  Fill out the form below or call directly at{' '}
                  <a href={business.phoneClean} className="font-bold text-brand-dark hover:text-brand-gold">
                    {business.phone}
                  </a>
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-1 font-heading">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-brand-surface border border-gray-300 text-sm focus:border-brand-gold outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-1 font-heading">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-brand-surface border border-gray-300 text-sm focus:border-brand-gold outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-1 font-heading">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-brand-surface border border-gray-300 text-sm focus:border-brand-gold outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-1 font-heading">
                  Desired Service
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-brand-surface border border-gray-300 text-sm focus:border-brand-gold outline-none"
                >
                  <option value="Decking Services">Decking Services</option>
                  <option value="Custom Carpentry">Custom Carpentry</option>
                  <option value="Structural Framing">Structural & Interior Framing</option>
                  <option value="Concrete Solutions">Concrete Solutions</option>
                  <option value="Other Build">Other Custom Build</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-1 font-heading">
                  Project Notes
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about the space, timeline, or rough square footage..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-brand-surface border border-gray-300 text-sm focus:border-brand-gold outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full flex items-center justify-center gap-2 !py-3 text-base"
              >
                <span>Send Estimate Request</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

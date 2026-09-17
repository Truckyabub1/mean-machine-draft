import React, { useState } from 'react';
import { MapPin, ArrowUpRight, X } from 'lucide-react';
import { siteContent } from '../data/siteContent';

export default function ProjectsGallery({ onOpenQuote }) {
  const { projects } = siteContent;
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Decking', 'Commercial', 'Carpentry', 'Concrete', 'Renovation'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="projects" className="py-20 lg:py-28 bg-brand-surface text-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-brand-gold font-heading font-bold text-sm tracking-widest uppercase mb-2 block">
              Proven Track Record
            </span>
            <h2 className="font-heading font-extrabold text-4xl sm:text-5xl uppercase tracking-tight text-brand-dark">
              Our Completed <span className="text-brand-gold">Portfolio</span>
            </h2>
            <div className="w-16 h-1 bg-brand-gold mt-3" />
          </div>
          <p className="text-gray-600 max-w-md text-sm sm:text-base font-sans">
            Explore our real-world builds across residential outdoor living and precision commercial structures throughout Alberta.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-heading uppercase text-sm tracking-wider px-5 py-2 transition-all font-semibold ${
                activeCategory === cat
                  ? 'bg-brand-dark text-brand-gold shadow-sm'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="bg-white border border-gray-200 group cursor-pointer overflow-hidden hover:border-brand-gold hover:shadow-2xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-neutral-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-brand-dark/90 text-brand-gold text-xs font-heading font-bold uppercase tracking-wider px-3 py-1 border-l-2 border-brand-gold">
                  {project.category}
                </div>
                <div className="absolute bottom-4 right-4 bg-white/90 text-brand-dark p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              {/* Card Meta */}
              <div className="p-6">
                <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-2 font-sans">
                  <MapPin className="w-3.5 h-3.5 text-brand-gold" />
                  <span>{project.location}</span>
                </div>

                <h3 className="font-heading font-bold text-2xl uppercase tracking-wide text-brand-dark mb-2 group-hover:text-brand-gold transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm font-sans line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto border-t-4 border-brand-gold relative shadow-2xl">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-brand-dark text-white hover:text-brand-gold"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-72 sm:h-96">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-brand-dark/90 text-brand-gold text-xs font-heading font-bold uppercase tracking-wider px-3 py-1">
                  {selectedProject.category}
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2 font-sans">
                  <MapPin className="w-4 h-4 text-brand-gold" />
                  <span>{selectedProject.location}</span>
                </div>

                <h3 className="font-heading font-extrabold text-3xl uppercase tracking-tight text-brand-dark mb-4">
                  {selectedProject.title}
                </h3>

                <p className="text-gray-700 text-base font-sans leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-100">
                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      onOpenQuote();
                    }}
                    className="btn-primary w-full sm:w-auto"
                  >
                    Request Similar Project Quote
                  </button>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="btn-secondary w-full sm:w-auto"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

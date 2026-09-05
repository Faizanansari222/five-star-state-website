import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CITIES, PROJECTS, PROJECT_FILTERS } from '../data/siteData';
import useReveal from '../hooks/useReveal';
import ProjectCard from '../components/ui/ProjectCard';

export default function CityPage() {
  const { citySlug } = useParams();
  const city = CITIES.find((c) => c.slug === citySlug);
  const cityProjects = PROJECTS.filter((p) => p.city === citySlug);
  const [filter, setFilter] = useState('All');
  const filtersRef = useReveal();

  const filtered = filter === 'All' ? cityProjects : cityProjects.filter((p) => p.type === filter);

  if (!city) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gray-50 pt-32">
        <div className="text-center">
          <h1 className="font-heading text-4xl font-bold text-navy mb-4">City Not Found</h1>
          <p className="text-gray-500 mb-6">The city you're looking for doesn't exist.</p>
          <Link to="/" className="px-6 py-3 bg-gold text-white font-semibold rounded-lg hover:bg-gold-dark transition-colors">Go Home</Link>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0">
          <img src={city.image} alt={city.name} className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/80 to-navy" />
        </div>
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="flex items-center gap-2 text-sm text-white/40 mb-4 anim-fade-up">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gold">Projects</span>
            <span>/</span>
            <span className="text-white/70">{city.name}</span>
          </div>
          <h1 className="font-heading text-[48px] font-bold text-white mb-4 anim-fade-up delay-100">
            Projects in {city.name}
          </h1>
          <p className="text-white/60 max-w-[600px] leading-relaxed anim-fade-up delay-200">
            {city.description}
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <div ref={filtersRef} className="reveal flex justify-center gap-2 mb-12">
            {PROJECT_FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-7 py-2.5 rounded-full text-sm font-medium border transition-all duration-300 ${
                  filter === f
                    ? 'bg-gold text-white border-gold shadow-lg shadow-gold/20'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-gold hover:text-gold'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">No {filter.toLowerCase()} projects found in {city.name}.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {filtered.map((project, i) => (
                <Link key={project.id} to={`/projects/${citySlug}/${project.id}`}>
                  <ProjectCard project={project} index={i} />
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

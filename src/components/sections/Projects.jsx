import { useState } from 'react';
import { PROJECTS, PROJECT_FILTERS } from '../../data/siteData';
import useReveal from '../../hooks/useReveal';
import SectionHeader from '../ui/SectionHeader';
import ProjectCard from '../ui/ProjectCard';

/**
 * Projects section with filterable grid of project cards.
 */
export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filtersRef = useReveal();

  const filtered =
    activeFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.type === activeFilter);

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader
          label="Our Portfolio"
          title="Completed & Ongoing Projects"
          subtitle="Our commitment to excellence is reflected in our projects that redefine the way we live, work, and interact with spaces."
        />

        {/* ── Filter Buttons ── */}
        <div ref={filtersRef} className="reveal flex justify-center gap-2 mb-12">
          {PROJECT_FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-7 py-2.5 rounded-full text-sm font-medium border transition-all duration-300 ${
                activeFilter === f
                  ? 'bg-gold text-navy border-gold shadow-lg shadow-gold/20'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-gold hover:text-gold'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* ── Project Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

import { FiMapPin, FiMaximize2 } from 'react-icons/fi';
import useReveal from '../../hooks/useReveal';

/**
 * Single project card with image, badges, and details.
 */
export default function ProjectCard({ project, index }) {
  const ref = useReveal(0.1);

  return (
    <div
      ref={ref}
      className="reveal bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group"
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
          <span
            className={`px-3.5 py-1 rounded-full text-xs font-bold tracking-wide uppercase ${
              project.type === 'Ongoing'
                ? 'bg-gold text-white'
                : 'bg-emerald-500 text-white'
            }`}
          >
            {project.type}
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs font-medium text-white">
            <FiMaximize2 size={11} /> {project.area}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-6">
        <h3 className="font-heading text-xl font-bold text-navy mb-2 group-hover:text-gold-dark transition-colors">
          {project.title}
        </h3>
        <div className="flex items-center gap-1.5 text-gold-dark text-sm font-medium mb-3">
          <FiMapPin size={13} /> {project.location}
        </div>
        <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-3">
          {project.desc}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.features.map((f) => (
            <span
              key={f}
              className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-navy-mid"
            >
              {f}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

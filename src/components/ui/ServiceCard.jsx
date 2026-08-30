import useReveal from '../../hooks/useReveal';

/**
 * Single service card with icon, title, and description.
 */
export default function ServiceCard({ service, index }) {
  const ref = useReveal(0.1);
  const Icon = service.icon;

  return (
    <div
      ref={ref}
      className="reveal group bg-white p-7 rounded-2xl border border-gray-100 hover:border-gold/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
      style={{ transitionDelay: `${index * 0.07}s` }}
    >
      <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold group-hover:scale-110 transition-all duration-500">
        <Icon
          size={24}
          className="text-gold group-hover:text-white transition-colors duration-500"
        />
      </div>
      <h3 className="font-heading text-lg font-bold text-navy mb-3 group-hover:text-gold-dark transition-colors">
        {service.title}
      </h3>
      <p className="text-sm text-gray-500 leading-relaxed">{service.desc}</p>
    </div>
  );
}

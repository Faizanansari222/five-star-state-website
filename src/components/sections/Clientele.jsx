import { CLIENTS } from '../../data/siteData';
import useReveal from '../../hooks/useReveal';

/**
 * Dark clientele section displaying trusted brand names.
 */
export default function Clientele() {
  const headerRef = useReveal();

  return (
    <section className="py-20 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,76,0.06),transparent_60%)]" />
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div ref={headerRef} className="reveal text-center mb-12">
          <span className="inline-flex items-center gap-3 text-gold text-xs font-semibold tracking-[3px] uppercase mb-4">
            <span className="w-7 h-px bg-gold" /> Our Clientele
          </span>
          <h2 className="font-heading text-[36px] font-bold text-white mb-4">
            Trusted By Leading Brands
          </h2>
          <p className="text-white/50 max-w-[550px] mx-auto text-sm leading-relaxed">
            Our portfolio includes a diverse range of prestigious clients, each with a different vision and set of criteria.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {CLIENTS.map((client, i) => (
            <div
              key={client}
              className="px-8 py-5 bg-white/5 border border-white/10 rounded-xl text-white/70 font-semibold text-lg hover:bg-gold/10 hover:border-gold/30 hover:text-gold transition-all duration-400 cursor-default"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

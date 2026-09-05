import { FiArrowRight } from 'react-icons/fi';
import useReveal from '../../hooks/useReveal';

/**
 * Full-width CTA banner encouraging users to book a plot.
 */
export default function CTABanner() {
  const ref = useReveal();

  return (
    <section className="py-20 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(0,113,187,0.15),transparent_60%)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold/5 rounded-full blur-[100px]" />

      <div ref={ref} className="reveal max-w-[800px] mx-auto px-6 text-center relative z-10">
        <h2 className="font-heading text-[40px] font-bold text-white mb-5">
          Book Your Plot Now
        </h2>
        <p className="text-white/55 mb-8 max-w-[500px] mx-auto leading-relaxed">
          Start your journey from plot to home with Pakistan's most trusted real estate partner.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2.5 px-10 py-4 bg-gold text-white font-bold text-sm rounded hover:bg-gold-dark hover:-translate-y-1 hover:shadow-xl hover:shadow-gold/30 transition-all duration-300"
        >
          Get Started <FiArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}

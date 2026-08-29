import { SERVICES } from '../data/siteData';
import ServiceCard from '../components/ui/ServiceCard';

export default function ServicesPage() {
  return (
    <>
      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-3 text-gold text-xs font-semibold tracking-[3px] uppercase mb-4 anim-fade-up">
            <span className="w-7 h-px bg-gold" /> What We Do
          </span>
          <h1 className="font-heading text-[48px] font-bold text-white mb-5 anim-fade-up delay-100">Our Services</h1>
          <p className="text-white/60 max-w-[600px] mx-auto leading-relaxed anim-fade-up delay-200">
            Five Star Group is your one-stop solution for all your real estate needs. We're here to turn your aspirations into reality.
          </p>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {SERVICES.map((s, i) => <ServiceCard key={s.title} service={s} index={i} />)}
          </div>
        </div>
      </section>
    </>
  );
}

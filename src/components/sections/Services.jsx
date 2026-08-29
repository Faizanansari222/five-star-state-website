import { SERVICES } from '../../data/siteData';
import SectionHeader from '../ui/SectionHeader';
import ServiceCard from '../ui/ServiceCard';

/**
 * Services section with a responsive grid of service cards.
 */
export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader
          label="What We Do"
          title="Our Services"
          subtitle="Five Star Group is your one-stop solution for all your real estate needs. We're here to turn your aspirations into reality."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

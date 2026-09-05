import { FiUsers, FiBriefcase, FiAward } from 'react-icons/fi';
import useCountUp from '../../hooks/useCountUp';

const STATS = [
  { end: 4500, icon: FiUsers, label: 'Active Clients' },
  { end: 50, icon: FiBriefcase, label: 'Projects Done' },
  { end: 15, icon: FiAward, label: 'Glorious Years', accent: true },
];

/**
 * Dark stats counter section with animated count-up numbers.
 */
export default function Stats() {
  return (
    <section className="py-20 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,113,187,0.12),transparent_70%)]" />
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {STATS.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatItem({ end, icon: Icon, label, accent }) {
  const { ref, count } = useCountUp(end);

  return (
    <div ref={ref} className="group">
      <div
        className={`w-20 h-20 mx-auto mb-5 rounded-2xl border flex items-center justify-center group-hover:scale-110 transition-all duration-500 ${
          accent
            ? 'bg-accent/10 border-accent/20 group-hover:bg-accent/20'
            : 'bg-gold/10 border-gold/20 group-hover:bg-gold/20'
        }`}
      >
        <Icon size={32} className={accent ? 'text-accent' : 'text-gold'} />
      </div>
      <div className={`font-heading text-5xl font-bold mb-2 ${accent ? 'text-accent' : 'text-gold'}`}>{count}+</div>
      <div className="text-sm text-white/50 tracking-widest uppercase">{label}</div>
    </div>
  );
}

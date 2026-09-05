import { FiArrowRight } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import useScrollPosition from '../../hooks/useScrollPosition';

/**
 * Full-screen hero with parallax background, gradient overlay,
 * animated badge, headline, CTAs, and stat row.
 */
export default function Hero() {
  const scrollY = useScrollPosition();

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-navy overflow-hidden">
      {/* ── Parallax Background ── */}
      <div className="absolute inset-0" style={{ transform: `translateY(${scrollY * 0.3}px)` }}>
        <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy-mid/85 to-navy/95 z-10" />
        <img
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* ── Glow Accents ── */}
      <div className="absolute bottom-0 left-[20%] w-[500px] h-[500px] bg-gold/8 rounded-full blur-[120px] z-10" />
      <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-gold/5 rounded-full blur-[100px] z-10" />

      {/* ── Content ── */}
      <div className="relative z-20 max-w-[1200px] mx-auto px-6 pt-32 pb-20">
        <div className="inline-flex items-center gap-2 px-5 py-2 bg-gold/15 border border-gold/30 rounded-full text-gold text-xs font-semibold tracking-widest uppercase mb-8 anim-fade-up">
          <FaStar className="text-accent" size={12} />
          Pakistan's #1 Real Estate Platform
        </div>

        <h1 className="font-heading text-[62px] lg:text-[72px] font-bold text-white leading-[1.08] mb-6 anim-fade-up delay-100">
          Pakistan's Top Real Estate
          <br />
          <span className="text-gold relative">
            Investment Platform
            <span className="absolute bottom-1 left-0 right-0 h-[3px] bg-gold/40 rounded" />
          </span>
        </h1>

        <p className="text-lg text-white/65 max-w-[560px] leading-relaxed mb-10 anim-fade-up delay-200">
          Your trusted partner from plot to home. We simplify buying and selling
          property with over 4500+ successful clients and years of excellence.
        </p>

        <div className="flex flex-wrap gap-4 mb-16 anim-fade-up delay-300">
          <a
            href="#projects"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-gold text-white font-semibold text-sm rounded hover:bg-gold-dark hover:-translate-y-1 hover:shadow-xl hover:shadow-gold/30 transition-all duration-300"
          >
            Explore Projects <FiArrowRight size={18} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-8 py-4 border-2 border-white text-white font-semibold text-sm rounded hover:bg-white hover:text-navy transition-all duration-300"
          >
            Book Your Plot
          </a>
        </div>

        {/* ── Stats Row ── */}
        <div className="flex flex-wrap items-center gap-10 anim-fade-up delay-400">
          <HeroStat num="4500+" label="Happy Clients" />
          <div className="w-px h-10 bg-white/15" />
          <HeroStat num="26+" label="Years Experience" />
          <div className="w-px h-10 bg-white/15" />
          <HeroStat num="+250" label="Projects Done" />
        </div>
      </div>

      {/* ── Scroll Indicator ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3">
        <span className="text-[10px] tracking-[2px] uppercase text-white/30">Scroll Down</span>
        <div
          className="w-px h-12 bg-gradient-to-b from-gold to-transparent"
          style={{ animation: 'scroll-line 2s ease-in-out infinite' }}
        />
      </div>
    </section>
  );
}

function HeroStat({ num, label }) {
  return (
    <div className="flex flex-col">
      <span className="font-heading text-4xl font-bold text-gold">{num}</span>
      <span className="text-sm text-white/45 mt-1">{label}</span>
    </div>
  );
}

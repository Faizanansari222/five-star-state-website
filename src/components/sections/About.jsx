import { FiCheckCircle, FiAward } from 'react-icons/fi';
import { CORE_VALUES, CEO_QUOTE } from '../../data/siteData';
import useReveal from '../../hooks/useReveal';

/**
 * About section with split layout: image + text, CEO quote, core values.
 */
export default function About() {
  const imageRef = useReveal();
  const textRef = useReveal();

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* ── Image Side ── */}
          <div ref={imageRef} className="reveal relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=700&q=80"
                alt="About Five Star Estate"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex items-center gap-3 px-5 py-3 bg-gold/90 rounded-lg">
                  <FiCheckCircle size={20} className="text-navy" />
                  <span className="text-navy font-bold text-sm">SBCA Certified & ABAD Licensed</span>
                </div>
              </div>
            </div>

            {/* Floating accent card */}
            <div
              className="absolute -bottom-6 -right-6 bg-navy text-white p-6 rounded-2xl shadow-2xl hidden lg:block"
              style={{ animation: 'float 3s ease-in-out infinite' }}
            >
              <div className="font-heading text-3xl font-bold text-gold">15+</div>
              <div className="text-xs text-white/60 mt-1">Years of Excellence</div>
            </div>
          </div>

          {/* ── Text Side ── */}
          <div ref={textRef} className="reveal">
            <span className="inline-flex items-center gap-3 text-gold text-xs font-semibold tracking-[3px] uppercase mb-4">
              <span className="w-7 h-px bg-gold" /> About Us
            </span>
            <h2 className="font-heading text-[38px] font-bold text-navy mb-6 leading-tight">
              Your Journey From Plot To Home
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Five Star Estate is one of the top property platforms in Pakistan that gives a path to the journey of its clients from plot to home. We aim to simplify buying and selling property in Pakistan's real estate sector.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Our skilled and highly experienced professionals offer long-term companionship to clients in their journey to homes. More than 4500+ clients have used our services and successfully increased their ROI.
            </p>

            {/* CEO Quote */}
            <blockquote className="bg-gray-50 border-l-4 border-gold p-6 rounded-r-xl mb-8">
              <p className="text-sm text-gray-600 italic leading-relaxed mb-3">
                "{CEO_QUOTE.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                  <FiAward size={18} className="text-gold" />
                </div>
                <div>
                  <div className="text-sm font-bold text-navy">{CEO_QUOTE.name}</div>
                  <div className="text-xs text-gray-400">{CEO_QUOTE.title}</div>
                </div>
              </div>
            </blockquote>

            {/* Core Values */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {CORE_VALUES.map((v) => (
                <div
                  key={v.title}
                  className="flex items-center gap-2.5 p-3 bg-gray-50 rounded-xl hover:bg-gold/5 hover:border-gold/20 border border-transparent transition-all duration-300"
                >
                  <v.icon size={18} className="text-gold shrink-0" />
                  <span className="text-sm font-semibold text-navy">{v.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

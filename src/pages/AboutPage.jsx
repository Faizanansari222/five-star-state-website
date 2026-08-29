import { FiCheckCircle, FiAward } from 'react-icons/fi';
import { CORE_VALUES, CEO_QUOTE, CERTIFICATIONS, CSR_ACTIVITIES, TEAM } from '../data/siteData';
import useReveal from '../hooks/useReveal';
import SectionHeader from '../components/ui/SectionHeader';
import TeamCard from '../components/ui/TeamCard';

export default function AboutPage() {
  const imgRef = useReveal();
  const txtRef = useReveal();

  return (
    <>
      {/* Page Hero */}
      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-3 text-gold text-xs font-semibold tracking-[3px] uppercase mb-4 anim-fade-up">
            <span className="w-7 h-px bg-gold" /> About Us
          </span>
          <h1 className="font-heading text-[48px] font-bold text-white mb-5 anim-fade-up delay-100">About Five Star Estate</h1>
          <p className="text-white/60 max-w-[600px] mx-auto leading-relaxed anim-fade-up delay-200">
            Your trusted partner from plot to home — delivering excellence in Pakistan's real estate market for over 15 years.
          </p>
        </div>
      </section>

      {/* Main About Content */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div ref={imgRef} className="reveal relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=700&q=80" alt="About" className="w-full h-[420px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-flex items-center gap-3 px-5 py-3 bg-gold/90 rounded-lg">
                    <FiCheckCircle size={20} className="text-navy" />
                    <span className="text-navy font-bold text-sm">SBCA Certified & ABAD Licensed</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-navy text-white p-6 rounded-2xl shadow-2xl hidden lg:block" style={{ animation: 'float 3s ease-in-out infinite' }}>
                <div className="font-heading text-3xl font-bold text-gold">15+</div>
                <div className="text-xs text-white/60 mt-1">Years of Excellence</div>
              </div>
            </div>

            <div ref={txtRef} className="reveal">
              <h2 className="font-heading text-[38px] font-bold text-navy mb-6 leading-tight">Your Journey From Plot To Home</h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                Five Star Estate is one of the top property platforms in Pakistan that gives a path to the journey of its clients from plot to home. We aim to simplify buying and selling property in Pakistan's real estate sector.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                Our skilled and highly experienced professionals offer long-term companionship to clients in their journey to homes. More than 4500+ clients have used our services and successfully increased their ROI.
              </p>

              <blockquote className="bg-gray-50 border-l-4 border-gold p-6 rounded-r-xl mb-8">
                <p className="text-sm text-gray-600 italic leading-relaxed mb-3">"{CEO_QUOTE.text}"</p>
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

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {CORE_VALUES.map((v) => (
                  <div key={v.title} className="flex items-center gap-2.5 p-3 bg-gray-50 rounded-xl hover:bg-gold/5 border border-transparent hover:border-gold/20 transition-all duration-300">
                    <v.icon size={18} className="text-gold shrink-0" />
                    <span className="text-sm font-semibold text-navy">{v.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeader label="Our People" title="Meet Our Team" subtitle="The driving force behind our success — dedicated professionals committed to excellence." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM.map((m, i) => <TeamCard key={m.name} member={m} index={i} />)}
          </div>
        </div>
      </section>

      {/* Certifications & CSR */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <CertCard />
            <CSRCard />
          </div>
        </div>
      </section>
    </>
  );
}

function CertCard() {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal bg-gray-50 p-10 rounded-2xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center"><FiAward size={22} className="text-gold" /></div>
        <h3 className="font-heading text-2xl font-bold text-navy">Certifications</h3>
      </div>
      <div className="space-y-4">
        {CERTIFICATIONS.map((c) => (
          <div key={c.label} className="flex items-start gap-3 p-4 bg-white rounded-xl">
            <FiCheckCircle size={18} className="text-emerald-500 mt-0.5 shrink-0" />
            <div>
              <div className="text-sm font-bold text-navy">{c.label}</div>
              <div className="text-xs text-gray-400 mt-0.5">{c.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CSRCard() {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal bg-gray-50 p-10 rounded-2xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center"><span className="text-gold text-xl">❤</span></div>
        <h3 className="font-heading text-2xl font-bold text-navy">CSR Activities</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {CSR_ACTIVITIES.map((item) => (
          <div key={item} className="flex items-center gap-2.5 p-3 bg-white rounded-lg">
            <span className="w-2 h-2 rounded-full bg-gold shrink-0" />
            <span className="text-sm text-navy font-medium">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

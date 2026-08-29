import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiMapPin, FiMaximize2, FiCheckCircle, FiArrowRight, FiSend } from 'react-icons/fi';
import { CITIES, PROJECTS, CONTACT } from '../data/siteData';

export default function ProjectDetailPage() {
  const { citySlug, projectId } = useParams();
  const city = CITIES.find((c) => c.slug === citySlug);
  const project = PROJECTS.find((p) => p.id === projectId && p.city === citySlug);
  const [activeImage, setActiveImage] = useState(0);
  const [form, setForm] = useState({ name: '', phone: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  if (!project || !city) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gray-50 pt-32">
        <div className="text-center">
          <h1 className="font-heading text-4xl font-bold text-navy mb-4">Project Not Found</h1>
          <p className="text-gray-500 mb-6">The project you're looking for doesn't exist.</p>
          <Link to="/" className="px-6 py-3 bg-gold text-navy font-semibold rounded-lg hover:bg-gold-dark transition-colors">Go Home</Link>
        </div>
      </section>
    );
  }

  const relatedProjects = PROJECTS.filter((p) => p.city === citySlug && p.id !== projectId).slice(0, 3);

  const handleInquiry = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', phone: '', email: '' });
  };

  return (
    <>
      {/* Breadcrumb */}
      <section className="bg-navy pt-28 pb-6">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-white/40 anim-fade-up">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <Link to={`/projects/${citySlug}`} className="hover:text-gold transition-colors">{city.name}</Link>
            <span>/</span>
            <span className="text-white/70">{project.title}</span>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="bg-navy pb-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="relative rounded-2xl overflow-hidden anim-scale-in">
            <img src={project.gallery[activeImage]} alt={project.title} className="w-full h-[400px] md:h-[500px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-3 mb-3">
                <span className={`px-3.5 py-1 rounded-full text-xs font-bold tracking-wide uppercase ${project.type === 'Ongoing' ? 'bg-gold text-navy' : 'bg-emerald-500 text-white'}`}>{project.type}</span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                  <FiMaximize2 size={11} /> {project.area}
                </span>
              </div>
              <h1 className="font-heading text-[36px] md:text-[44px] font-bold text-white leading-tight">{project.title}</h1>
              <div className="flex items-center gap-2 text-gold mt-2">
                <FiMapPin size={16} /> <span className="text-sm font-medium">{project.location}</span>
              </div>
            </div>
          </div>

          {/* Thumbnail gallery */}
          <div className="flex gap-3 mt-4">
            {project.gallery.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={`relative h-20 flex-1 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                  activeImage === i ? 'border-gold shadow-lg' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Price & Info Bar */}
              <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-gray-400 uppercase tracking-wider">Starting Price</span>
                  <div className="font-heading text-2xl font-bold text-gold-dark mt-1">{project.price}</div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <span className="text-xs text-gray-400 block">Type</span>
                    <span className="text-sm font-bold text-navy">{project.type}</span>
                  </div>
                  <div className="w-px h-8 bg-gray-200" />
                  <div className="text-center">
                    <span className="text-xs text-gray-400 block">Area</span>
                    <span className="text-sm font-bold text-navy">{project.area}</span>
                  </div>
                  <div className="w-px h-8 bg-gray-200" />
                  <div className="text-center">
                    <span className="text-xs text-gray-400 block">Units</span>
                    <span className="text-sm font-bold text-navy">{project.beds}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h2 className="font-heading text-2xl font-bold text-navy mb-4">About This Project</h2>
                <div className="text-gray-500 leading-relaxed space-y-4">
                  {project.longDesc.split('\n\n').map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h2 className="font-heading text-2xl font-bold text-navy mb-5">Key Features</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.features.map((f) => (
                    <div key={f} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                      <FiCheckCircle size={18} className="text-emerald-500 shrink-0" />
                      <span className="text-sm font-medium text-navy">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar - Inquiry Form */}
            <div className="lg:col-span-1">
              <div className="bg-white p-8 rounded-2xl shadow-sm sticky top-28">
                <h3 className="font-heading text-xl font-bold text-navy mb-2">Interested in this project?</h3>
                <p className="text-sm text-gray-500 mb-6">Fill in your details and our team will contact you shortly.</p>

                {submitted && (
                  <div className="mb-4 p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-700 text-sm font-medium">
                    ✓ Inquiry submitted! We'll contact you soon.
                  </div>
                )}

                <form onSubmit={handleInquiry} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Full Name *</label>
                    <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Phone *</label>
                    <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30" placeholder="+92 300 1234567" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Email</label>
                    <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30" placeholder="your@email.com" />
                  </div>
                  <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold text-navy font-semibold text-sm rounded-lg hover:bg-gold-dark hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold/25 transition-all duration-300">
                    <FiSend size={14} /> Send Inquiry
                  </button>
                </form>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="text-xs text-gray-400 mb-2">Or call us directly</div>
                  <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="text-sm font-bold text-navy hover:text-gold-dark transition-colors">{CONTACT.phone}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="font-heading text-2xl font-bold text-navy mb-8">More Projects in {city.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {relatedProjects.map((p, i) => (
                <Link key={p.id} to={`/projects/${citySlug}/${p.id}`}>
                  <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                    <div className="relative h-48 overflow-hidden">
                      <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-5">
                      <h3 className="font-heading text-lg font-bold text-navy group-hover:text-gold-dark transition-colors">{p.title}</h3>
                      <div className="flex items-center gap-1.5 text-gold-dark text-xs font-medium mt-1"><FiMapPin size={11} /> {p.location}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

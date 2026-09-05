import { useState } from 'react';
import { FiMapPin, FiPhone, FiMail, FiSend } from 'react-icons/fi';
import { CONTACT, CITIES } from '../data/siteData';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', city: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', phone: '', city: '', message: '' });
  };

  return (
    <>
      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-3 text-gold text-xs font-semibold tracking-[3px] uppercase mb-4 anim-fade-up">
            <span className="w-7 h-px bg-gold" /> Get In Touch
          </span>
          <h1 className="font-heading text-[48px] font-bold text-white mb-5 anim-fade-up delay-100">Contact Us</h1>
          <p className="text-white/60 max-w-[600px] mx-auto leading-relaxed anim-fade-up delay-200">
            Ready to start your journey from plot to home? Reach out to us and our team will get back to you within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white p-10 rounded-2xl shadow-sm">
                <h2 className="font-heading text-2xl font-bold text-navy mb-6">Send Us a Message</h2>
                {submitted && (
                  <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-700 text-sm font-medium">
                    ✓ Thank you! Your message has been sent. We'll get back to you soon.
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                      <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-colors" placeholder="Enter your name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Email *</label>
                      <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-colors" placeholder="Enter your email" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone *</label>
                      <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-colors" placeholder="+92 300 1234567" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">City</label>
                      <select value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-colors text-gray-600">
                        <option value="">Select a city</option>
                        {CITIES.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Message *</label>
                    <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-colors resize-none" placeholder="Tell us about your requirements..." />
                  </div>
                  <button type="submit" className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-gold text-white font-semibold text-sm rounded-lg hover:bg-gold-dark hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold/25 transition-all duration-300">
                    <FiSend size={16} /> Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="font-heading text-xl font-bold text-navy mb-6">Contact Information</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0"><FiMapPin size={18} className="text-gold" /></div>
                    <div>
                      <div className="text-sm font-bold text-navy mb-0.5">Office Address</div>
                      <div className="text-sm text-gray-500">{CONTACT.address}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0"><FiPhone size={18} className="text-gold" /></div>
                    <div>
                      <div className="text-sm font-bold text-navy mb-0.5">Phone</div>
                      <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="text-sm text-gray-500 hover:text-gold-dark transition-colors">{CONTACT.phone}</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0"><FiMail size={18} className="text-gold" /></div>
                    <div>
                      <div className="text-sm font-bold text-navy mb-0.5">Email</div>
                      <a href={`mailto:${CONTACT.email}`} className="text-sm text-gray-500 hover:text-gold-dark transition-colors">{CONTACT.email}</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">Office Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-gray-500">Monday - Friday</span><span className="font-medium text-navy">9:00 AM - 7:00 PM</span></div>
                  <div className="flex justify-between"><span className="text-gray-500">Saturday</span><span className="font-medium text-navy">10:00 AM - 5:00 PM</span></div>
                  <div className="flex justify-between"><span className="text-gray-500">Sunday</span><span className="font-medium text-gray-400">Closed</span></div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-gray-200 rounded-2xl h-[200px] flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <FiMapPin size={32} className="mx-auto mb-2" />
                  <span className="text-sm">Google Map</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

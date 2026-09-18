import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSend } from 'react-icons/fi';
import { CONTACT, CITIES, PROJECTS } from '../data/siteData';

const HIBA_ICON = PROJECTS.find((p) => p.id === 'hiba-icon');

const SHEET_WEBHOOK_URL = import.meta.env.VITE_CONTACT_SHEET_WEBHOOK_URL;

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', city: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!SHEET_WEBHOOK_URL) {
      console.error('VITE_CONTACT_SHEET_WEBHOOK_URL is not set — form submissions will not reach Google Sheets.');
      setError(true);
      return;
    }

    setSubmitting(true);
    setError(false);

    try {
      // text/plain avoids a CORS preflight (Apps Script doesn't handle OPTIONS),
      // and JSON.parse(e.postData.contents) on the Apps Script side is far more
      // reliable than relying on Apps Script's multipart/form-data parsing.
      await fetch(SHEET_WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(form),
      });
console.log(form)
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setForm({ name: '', email: '', phone: '', city: '', message: '' });
    } catch (err) {
      console.error('Failed to submit contact form:', err);
      setError(true);
    } finally {
      setSubmitting(false);
    }
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
                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm font-medium">
                    Something went wrong sending your message. Please try again or call us directly.
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
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-gold text-white font-semibold text-sm rounded-lg hover:bg-gold-dark hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold/25 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
                  >
                    <FiSend size={16} /> {submitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>

            {/* Ads + Map */}
            <div className="lg:col-span-2 space-y-6">
              {/* Ad */}
              <Link
                to={`/projects/${HIBA_ICON.city}/${HIBA_ICON.id}`}
                className="block rounded-2xl overflow-hidden shadow-sm h-64 hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={HIBA_ICON.img}
                  alt={`${HIBA_ICON.title} advertisement`}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </Link>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden h-[200px] shadow-sm">
                <iframe
                  title="Five Star Estate Office Location"
                  src={CONTACT.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

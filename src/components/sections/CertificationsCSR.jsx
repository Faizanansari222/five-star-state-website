import { FiCheckCircle } from 'react-icons/fi';
import { FaCertificate, FaHeart } from 'react-icons/fa';
import { CERTIFICATIONS, CSR_ACTIVITIES } from '../../data/siteData';
import useReveal from '../../hooks/useReveal';

/**
 * Two-column section: Certifications on left, CSR Activities on right.
 */
export default function CertificationsCSR() {
  const certRef = useReveal();
  const csrRef = useReveal();

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* ── Certifications ── */}
          <div ref={certRef} className="reveal bg-white p-10 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                <FaCertificate size={22} className="text-gold" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-navy">Certifications</h3>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Our dedication to quality, ethics, and professionalism is shown in our track record of certifications, licenses, and approvals.
            </p>
            <div className="space-y-4">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.label} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                  <FiCheckCircle size={18} className="text-emerald-500 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-sm font-bold text-navy">{cert.label}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{cert.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── CSR Activities ── */}
          <div ref={csrRef} className="reveal bg-white p-10 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                <FaHeart size={22} className="text-gold" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-navy">CSR Activities</h3>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              We believe in the power of giving back to society and improving the lives of people in need.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {CSR_ACTIVITIES.map((item) => (
                <div key={item} className="flex items-center gap-2.5 p-3 bg-gray-50 rounded-lg">
                  <span className="w-2 h-2 rounded-full bg-gold shrink-0" />
                  <span className="text-sm text-navy font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

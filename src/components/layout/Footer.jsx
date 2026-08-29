import { Link } from 'react-router-dom';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import { NAV_LINKS, SERVICES, SOCIAL_LINKS, CONTACT, CITIES } from '../../data/siteData';
import logo from '../../assets/LOGO/logo.png';

/**
 * White footer with 4-column grid: brand, quick links, cities, contact.
 */
export default function Footer() {
  return (
    <footer id="contact" className="bg-white border-t border-gray-100 pt-20 pb-8">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* ── Brand ── */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Five Star Estate" className="w-22  rounded-lg object-cover" />
             
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed mb-5">
              Pakistan's top real estate investment platform. Your trusted partner from plot to home.
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-gold hover:text-navy transition-all duration-300"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div>
            <h4 className="text-navy font-semibold text-sm mb-5 tracking-wide uppercase">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-gray-500 hover:text-gold-dark transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Cities ── */}
          <div>
            <h4 className="text-navy font-semibold text-sm mb-5 tracking-wide uppercase">
              Our Cities
            </h4>
            <ul className="space-y-3">
              {CITIES.map((city) => (
                <li key={city.id}>
                  <Link to={`/projects/${city.slug}`} className="text-sm text-gray-500 hover:text-gold-dark transition-colors">
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact ── */}
          <div>
            <h4 className="text-navy font-semibold text-sm mb-5 tracking-wide uppercase">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FiMapPin size={16} className="text-gold-dark mt-1 shrink-0" />
                <span className="text-sm text-gray-500 leading-relaxed">{CONTACT.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <FiPhone size={16} className="text-gold-dark shrink-0" />
                <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="text-sm text-gray-500 hover:text-gold-dark transition-colors">
                  {CONTACT.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FiMail size={16} className="text-gold-dark shrink-0" />
                <a href={`mailto:${CONTACT.email}`} className="text-sm text-gray-500 hover:text-gold-dark transition-colors">
                  {CONTACT.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">© 2024 Five Star Estate. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-gray-400 hover:text-gold-dark transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-gray-400 hover:text-gold-dark transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

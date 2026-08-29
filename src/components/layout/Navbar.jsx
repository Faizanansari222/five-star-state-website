import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiPhone, FiMenu, FiX, FiChevronDown, FiChevronRight } from 'react-icons/fi';
import { NAV_LINKS, CITIES, PROJECTS, CONTACT } from '../../data/siteData';
import logo from '../../assets/LOGO/logo.png';

/**
 * White sticky navbar with multi-level Projects dropdown.
 * Desktop: Projects → Cities → individual projects.
 * Mobile: slide-in menu with expandable sub-menus.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [activeCity, setActiveCity] = useState(null);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setProjectsOpen(false);
        setActiveCity(null);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setProjectsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setProjectsOpen(false);
      setActiveCity(null);
    }, 200);
  };

  const getCityProjects = (citySlug) => PROJECTS.filter((p) => p.city === citySlug);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-black/8 py-3'
          : 'bg-white/80 backdrop-blur-md py-4'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        {/* ── Logo ── */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Five Star Estate" className="w-22 rounded-lg object-cover" />
          
        </Link>

        {/* ── Desktop Nav ── */}
        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-navy hover:bg-gray-100 rounded-lg transition-all duration-300"
              >
                {link.label}
              </Link>
            </li>
          ))}

          {/* ── Projects Dropdown ── */}
          <li className="relative" ref={dropdownRef}>
            <button
              onMouseEnter={handleMouseEnter}
              onClick={() => setProjectsOpen(!projectsOpen)}
              className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-gray-600 hover:text-navy hover:bg-gray-100 rounded-lg transition-all duration-300"
            >
              Projects <FiChevronDown size={14} className={`transition-transform duration-300 ${projectsOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* City dropdown */}
            {projectsOpen && (
              <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-xl border border-gray-100 min-w-[220px] py-2 anim-slide-down"
              >
                {CITIES.map((city) => (
                  <div
                    key={city.id}
                    className="relative"
                    onMouseEnter={() => setActiveCity(city.slug)}
                    onMouseLeave={() => setActiveCity(null)}
                  >
                    <Link
                      to={`/projects/${city.slug}`}
                      onClick={() => { setProjectsOpen(false); setActiveCity(null); }}
                      className="flex items-center justify-between px-5 py-3 text-sm text-gray-700 hover:bg-gold/5 hover:text-gold-dark transition-colors"
                    >
                      {city.name}
                      <FiChevronRight size={14} className="text-gray-400" />
                    </Link>

                    {/* Project sub-dropdown */}
                    {activeCity === city.slug && (
                      <div className="absolute left-full top-0 ml-1 bg-white rounded-xl shadow-xl border border-gray-100 min-w-[260px] py-2 anim-fade-left">
                        {getCityProjects(city.slug).map((project) => (
                          <Link
                            key={project.id}
                            to={`/projects/${city.slug}/${project.id}`}
                            onClick={() => { setProjectsOpen(false); setActiveCity(null); }}
                            className="block px-5 py-3 text-sm text-gray-700 hover:bg-gold/5 hover:text-gold-dark transition-colors border-b border-gray-50 last:border-0"
                          >
                            <span className="font-medium">{project.title}</span>
                            <span className="block text-xs text-gray-400 mt-0.5">{project.location}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </li>
        </ul>

        {/* ── Desktop CTA ── */}
        <div className="hidden lg:flex items-center gap-5">
          <a
            href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-gold-dark transition-colors"
          >
            <FiPhone size={14} /> {CONTACT.phone}
          </a>
          <Link
            to="/contact"
            className="px-6 py-2.5 bg-gold text-navy text-sm font-semibold rounded hover:bg-gold-dark hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold/25 transition-all duration-300"
          >
            Book a Visit
          </Link>
        </div>

        {/* ── Mobile Toggle ── */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-navy p-2"
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* ── Mobile Menu ── */}
      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        getCityProjects={getCityProjects}
      />
    </nav>
  );
}

function MobileMenu({ open, onClose, getCityProjects }) {
  const [expandedCity, setExpandedCity] = useState(null);

  return (
    <div
      className={`lg:hidden fixed inset-0 top-0 bg-white z-50 flex flex-col transition-all duration-500 ${
        open ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex justify-between items-center p-6 border-b border-gray-100">
        <span className="font-heading text-lg font-bold text-navy">Menu</span>
        <button onClick={onClose} className="text-navy p-2" aria-label="Close menu">
          <FiX size={28} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-4">
        <ul className="space-y-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                onClick={onClose}
                className="block py-3.5 text-base font-medium text-gray-700 hover:text-gold-dark border-b border-gray-100 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}

          {/* Projects section */}
          <li className="pt-2">
            <div className="py-3.5 text-base font-bold text-navy">Projects</div>
            <ul className="space-y-0">
              {CITIES.map((city) => (
                <li key={city.id}>
                  <button
                    onClick={() => setExpandedCity(expandedCity === city.slug ? null : city.slug)}
                    className="w-full flex items-center justify-between py-3 text-sm font-medium text-gray-600 hover:text-gold-dark border-b border-gray-50 transition-colors"
                  >
                    {city.name}
                    <FiChevronRight size={14} className={`transition-transform duration-300 ${expandedCity === city.slug ? 'rotate-90' : ''}`} />
                  </button>
                  {expandedCity === city.slug && (
                    <ul className="pl-4 pb-2">
                      <li>
                        <Link
                          to={`/projects/${city.slug}`}
                          onClick={onClose}
                          className="block py-2.5 text-sm text-gold-dark font-medium hover:underline"
                        >
                          View All {city.name} Projects →
                        </Link>
                      </li>
                      {getCityProjects(city.slug).map((project) => (
                        <li key={project.id}>
                          <Link
                            to={`/projects/${city.slug}/${project.id}`}
                            onClick={onClose}
                            className="block py-2.5 text-sm text-gray-500 hover:text-gold-dark transition-colors"
                          >
                            {project.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </li>
        </ul>

        <div className="mt-8">
          <Link
            to="/contact"
            onClick={onClose}
            className="block w-full py-4 bg-gold text-navy text-center text-base font-semibold rounded-lg"
          >
            Book a Visit
          </Link>
        </div>
      </div>
    </div>
  );
}

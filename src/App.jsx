import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import CityPage from './pages/CityPage';
import ProjectDetailPage from './pages/ProjectDetailPage';

/**
 * Scrolls to top on route change.
 */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

/**
 * Layout wrapper — Navbar + page content + Footer.
 */
function Layout({ children }) {
  return (
    <div className="font-body min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects/:citySlug" element={<CityPage />} />
          <Route path="/projects/:citySlug/:projectId" element={<ProjectDetailPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="font-heading text-6xl font-bold text-gold mb-4">404</h1>
        <h2 className="font-heading text-2xl font-bold text-navy mb-4">Page Not Found</h2>
        <p className="text-gray-500 mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <a href="/" className="px-8 py-3 bg-gold text-navy font-semibold rounded-lg hover:bg-gold-dark transition-colors">Go Home</a>
      </div>
    </section>
  );
}

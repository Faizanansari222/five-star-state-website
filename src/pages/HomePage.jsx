import Hero from '../components/sections/Hero';
import Stats from '../components/sections/Stats';
import Projects from '../components/sections/Projects';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Team from '../components/sections/Team';
import Clientele from '../components/sections/Clientele';
import CertificationsCSR from '../components/sections/CertificationsCSR';
import CTABanner from '../components/sections/CTABanner';

/**
 * Home page — full landing experience.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Projects />
      <About />
      <Services />
      <Team />
      <Clientele />
      <CertificationsCSR />
      <CTABanner />
    </>
  );
}

import { useState, useEffect } from 'react';

/**
 * Returns the current vertical scroll position.
 * Updates on scroll with passive listener.
 */
export default function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return scrollY;
}

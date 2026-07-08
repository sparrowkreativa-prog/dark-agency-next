'use client';
import { useEffect, useRef, useState } from 'react';

// Safari fires IntersectionObserver immediately on load for all elements —
// the 150ms delay lets the initial layout settle before we start observing.
export function useInView({ threshold = 0.1, rootMargin = '0px 0px -40px 0px' } = {}) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let io;
    const timer = setTimeout(() => {
      if (!('IntersectionObserver' in window)) { setVis(true); return; }
      io = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) { setVis(true); io.disconnect(); }
      }, { threshold, rootMargin });
      io.observe(el);
    }, 150);
    return () => { clearTimeout(timer); io?.disconnect(); };
  }, []); // eslint-disable-line

  return [ref, vis];
}

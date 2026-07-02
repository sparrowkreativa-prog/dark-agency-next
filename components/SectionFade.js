'use client';
import { useEffect, useRef } from 'react';

export default function SectionFade({ children, className = '', id }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current || !('IntersectionObserver' in window)) {
      ref.current?.classList.add('is-visible');
      return;
    }
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { e.target.classList.add('is-visible'); obs.unobserve(e.target); }
    }, { threshold: 0.08 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} id={id} className={`section-fade ${className}`}>
      {children}
    </div>
  );
}

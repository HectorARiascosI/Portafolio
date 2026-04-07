// hook para detectar cuando un elemento entra en pantalla
'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Hook que detecta cuando un elemento entra en el viewport.
 * Respeta prefers-reduced-motion automáticamente.
 */
export function useReveal(options = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Si el usuario prefiere movimiento reducido, mostrar inmediatamente
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) { setVisible(true); return; }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: options.threshold ?? 0.12, rootMargin: options.rootMargin ?? '0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Hero({ profile = {} }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 40);
    return () => clearTimeout(t);
  }, []);

  const cls = (base, delay = '') =>
    `${base} ${mounted ? 'visible' : ''} ${delay}`.trim();

  const name     = profile.name     ?? 'Hector Alejandro Riascos Insuasty';
  const title    = profile.title    ?? 'Estudiante de Ingeniería de Software';
  const tagline  = profile.tagline  ?? 'Diseño interfaces y construyo soluciones de software a medida.';
  const location = profile.location ?? 'Pasto, Colombia';
  const image    = profile.image    ?? '';
  const resume   = profile.resume   ?? '/resume.pdf';
  const social   = profile.social   ?? {};

  /* ── Foto compartida entre móvil y desktop ── */
  const Photo = ({ size }) => (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <div style={{
        width: size, height: size,
        borderRadius: '50%',           /* círculo moderno */
        overflow: 'hidden',
        border: '3px solid var(--accent)',
        boxShadow: '0 0 0 5px var(--accent-bg), 0 8px 32px rgba(0,0,0,0.35)',
        background: 'var(--surface)',
        flexShrink: 0,
      }}>
        {image ? (
          <Image
            src={image}
            alt={`Foto de ${name}`}
            width={parseInt(size)}
            height={parseInt(size)}
            style={{ objectFit: 'cover', objectPosition: 'center top', width: '100%', height: '100%' }}
            priority
            quality={90}
          />
        ) : (
          /* Sin imagen: gradiente limpio, sin letra */
          <div style={{
            width: '100%', height: '100%',
            background: 'linear-gradient(135deg, var(--surface-2), var(--accent-bg))',
          }} />
        )}
      </div>
      {/* Badge disponibilidad */}
      <div style={{
        position: 'absolute', bottom: '4px', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', alignItems: 'center', gap: '5px',
        background: 'var(--surface-2)', border: '1px solid var(--border-2)',
        borderRadius: '20px', padding: '5px 12px', whiteSpace: 'nowrap',
        boxShadow: 'var(--shadow-sm)',
      }}>
        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--green)', display: 'block', flexShrink: 0 }} />
        <span style={{ fontSize: '0.6875rem', color: 'var(--text-2)', fontWeight: 500 }}>Disponible</span>
      </div>
    </div>
  );

  return (
    <section id="hero" aria-label="Presentación" style={{
      background: 'var(--bg)', paddingTop: '60px',
      position: 'relative', overflow: 'hidden',
    }}>
      <div aria-hidden style={{
        position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)',
        width: '600px', height: '400px',
        background: 'radial-gradient(ellipse, var(--accent-bg) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div className="container-custom" style={{ paddingTop: '3rem', paddingBottom: '4.5rem', position: 'relative', zIndex: 1 }}>

        {/* Móvil: foto centrada arriba */}
        <div className="hero-photo-mobile">
          <div className={cls('reveal-scale', 'delay-1')} style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.5rem' }}>
            <Photo size="180px" />
          </div>
        </div>

        <div className="grid-hero">
          {/* Texto */}
          <div style={{ width: '100%' }}>

            <div className={cls('reveal', 'delay-1')} style={{ marginBottom: '1rem' }}>
              <span className="t-label">Ingeniería de Software</span>
            </div>

            {/* Nombre — más grande y centrado en móvil */}
            <h1 className={cls('reveal', 'delay-2')} style={{
              fontSize: 'clamp(2rem, 6vw, 4rem)',
              fontWeight: 800, letterSpacing: '-0.035em', lineHeight: 1.08,
              color: 'var(--text-1)', marginBottom: '0.75rem',
            }}>
              {name}
            </h1>

            <p className={cls('reveal', 'delay-3')} style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)',
              fontWeight: 400, color: 'var(--text-2)',
              marginBottom: '1rem', lineHeight: 1.5,
            }}>
              {title}
            </p>

            <p className={cls('reveal', 'delay-3')} style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.125rem)',
              lineHeight: 1.75, color: 'var(--text-2)',
              marginBottom: '2rem',
            }}>
              {tagline}
            </p>

            <div className={`hero-ctas ${cls('reveal', 'delay-4')}`}>
              <a href="#proyectos" className="btn btn-primary">
                Ver proyectos
                <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </a>
              <a href={resume} download="HV_Hector_Riascos.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              CV
                <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                </svg>
              </a>
            </div>

            <div className={cls('reveal', 'delay-5')} style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
              {social.github && (
                <a href={social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="icon-link">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              )}
              {social.linkedin && (
                <a href={social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="icon-link">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              )}
              {location && (
                <>
                  <span aria-hidden style={{ width: '1px', height: '14px', background: 'var(--border-2)' }} />
                  <span style={{ fontSize: '0.875rem', color: 'var(--text-3)' }}>{location}</span>
                </>
              )}
            </div>
          </div>

          {/* Desktop: foto a la derecha */}
          <div className="hero-photo-desktop" style={{ justifyContent: 'flex-end', alignItems: 'center' }}>
            <div className={cls('reveal-scale', 'delay-2')}>
              <Photo size="300px" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

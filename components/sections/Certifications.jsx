'use client';

import { useReveal } from '@/lib/useReveal';

function BadgeIcon() {
  return (
    <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"
      style={{ color: 'var(--accent-2)', flexShrink: 0 }}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
    </svg>
  );
}

export default function Certifications({ certifications }) {
  const { ref, visible } = useReveal({ threshold: 0.06 });

  return (
    <section id="certificaciones" aria-label="Certificaciones"
      style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}
      className="section-pad">
      <div className="container-custom" ref={ref}>

        <div className={`reveal ${visible ? 'visible' : ''}`} style={{ marginBottom: '3.5rem', textAlign: 'center' }}>
          <p className="t-label" style={{ marginBottom: '0.75rem' }}>Logros y certificados</p>
          <h2 className="t-heading">Certificaciones</h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--border)', borderRadius: '12px', overflow: 'hidden', maxWidth: '700px', margin: '0 auto' }}>
          {certifications.map((cert, i) => (
            <div key={cert.id}
              className={`reveal ${visible ? 'visible' : ''} delay-${Math.min(i + 1, 5)}`}
              style={{
                background: 'var(--surface)',
                padding: '1.375rem 1.5rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem',
              }}>

              <BadgeIcon />

              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-1)', marginBottom: '4px', letterSpacing: '-0.01em' }}>
                  {cert.title}
                </p>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-2)' }}>
                  {cert.issuer}
                </p>
              </div>

              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <span className="tag-n" style={{ fontSize: '0.8125rem' }}>{cert.date}</span>
                {cert.hours && (
                  <p style={{ fontSize: '0.8125rem', color: 'var(--text-3)', marginTop: '4px' }}>{cert.hours}</p>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

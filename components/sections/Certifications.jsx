'use client';

import { useReveal } from '@/lib/useReveal';
import { useLang } from '@/lib/LangProvider';

function BadgeIcon() {
  return (
    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"
      style={{ color: 'var(--accent-2)', flexShrink: 0, marginTop: '2px' }}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
    </svg>
  );
}

export default function Certifications({ certifications }) {
  const { ref, visible } = useReveal({ threshold: 0.06 });
  const { t } = useLang();

  return (
    <section id="certificaciones" aria-label={t('certifications.heading')}
      style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}
      className="section-pad">
      <div className="container-custom" ref={ref}>

        <div className={`reveal ${visible ? 'visible' : ''}`} style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <h2 className="t-heading">{t('certifications.heading')}</h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--border)', borderRadius: '12px', overflow: 'hidden', maxWidth: '700px', margin: '0 auto' }}>
          {certifications.map((cert, i) => (
            <div key={cert.id}
              className={`reveal ${visible ? 'visible' : ''} delay-${Math.min(i + 1, 5)}`}
              style={{ background: 'var(--surface)', padding: '1.375rem 1.5rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>

              <BadgeIcon />

              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontWeight: 600, color: 'var(--text-1)', marginBottom: '4px', letterSpacing: '-0.01em' }}>
                  {cert.title}
                </p>
                <p style={{ color: 'var(--text-2)' }}>{cert.issuer}</p>
              </div>

              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <span className="tag-n">{cert.date}</span>
                {cert.hours && <p className="t-meta" style={{ marginTop: '4px' }}>{cert.hours}</p>}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

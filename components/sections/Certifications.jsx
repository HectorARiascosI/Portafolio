'use client';

import { useReveal } from '@/lib/useReveal';
import { useLang } from '@/lib/LangProvider';

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
  const { t, lang } = useLang();

  function loc(field) {
    if (!field) return '';
    if (typeof field === 'string') return field;
    return field[lang] ?? field.es ?? '';
  }

  return (
    <section id="certificaciones" aria-label={t('certifications.heading')}
      style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}
      className="section-pad">
      <div className="container-custom" ref={ref}>

        <div className={`reveal ${visible ? 'visible' : ''}`} style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <h2 className="t-heading">{t('certifications.heading')}</h2>
        </div>

        <div style={{
          display: 'flex', flexDirection: 'column',
          gap: '0.75rem',
          maxWidth: '700px', margin: '0 auto',
        }}>
          {certifications.map((cert, i) => (
            <div key={cert.id}
              className={`reveal ${visible ? 'visible' : ''} delay-${Math.min(i + 1, 5)}`}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                padding: '1.125rem 1.25rem',
              }}>

              {/* Fila superior: ícono + título */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <BadgeIcon />
                <p style={{
                  fontWeight: 600, color: 'var(--text-1)',
                  letterSpacing: '-0.01em', lineHeight: 1.4,
                  flex: 1, minWidth: 0,
                }}>
                  {loc(cert.title)}
                </p>
              </div>

              {/* Fila inferior: emisor + fecha */}
              <div style={{
                display: 'flex', alignItems: 'center',
                justifyContent: 'space-between', gap: '0.75rem',
                flexWrap: 'wrap',
                paddingLeft: '1.625rem', /* alinea con el título */
              }}>
                <p style={{ color: 'var(--text-2)', fontSize: '0.875rem', flex: 1, minWidth: 0 }}>
                  {cert.issuer}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
                  <span className="tag-n" style={{ whiteSpace: 'nowrap' }}>{loc(cert.date)}</span>
                  {cert.hours && (
                    <span className="t-meta" style={{ whiteSpace: 'nowrap' }}>{loc(cert.hours)}</span>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

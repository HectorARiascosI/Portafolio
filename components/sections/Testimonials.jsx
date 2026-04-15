'use client';

import { useReveal } from '@/lib/useReveal';
import { useLang } from '@/lib/LangProvider';

function QuoteIcon() {
  return (
    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"
      style={{ color: 'var(--accent)', opacity: 0.4, flexShrink: 0 }}>
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
    </svg>
  );
}

function StarRating() {
  return (
    <div style={{ display: 'flex', gap: '3px' }}>
      {[1,2,3,4,5].map(i => (
        <svg key={i} width="16" height="16" fill="var(--accent)" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials({ testimonials }) {
  const { ref, visible } = useReveal({ threshold: 0.06 });
  const { t, lang } = useLang();

  // Resuelve un campo que puede ser string o { es, en }
  function loc(field) {
    if (!field) return '';
    if (typeof field === 'string') return field;
    return field[lang] ?? field.es ?? '';
  }

  return (
    <section id="testimonios" aria-label={t('testimonials.label')}
      style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}
      className="section-pad">
      <div className="container-custom" ref={ref}>

        <div className={"reveal " + (visible ? 'visible' : '')} style={{ marginBottom: '3.5rem', textAlign: 'center' }}>
          <p className="t-label" style={{ marginBottom: '0.75rem' }}>{t('testimonials.label')}</p>
          <h2 className="t-heading">{t('testimonials.heading')}</h2>
          <p className="t-body" style={{ marginTop: '0.75rem', maxWidth: '420px', margin: '0.75rem auto 0' }}>
            {t('testimonials.sub')}
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: '1.25rem' }}>
          {testimonials.map((item, i) => (
            <div key={item.id}
              className={"reveal " + (visible ? 'visible' : '') + " delay-" + Math.min(i + 1, 5)}
              style={{
                background: 'var(--bg)', border: '1px solid var(--border)',
                borderRadius: '14px', padding: '1.75rem',
                display: 'flex', flexDirection: 'column', gap: '1.25rem',
                transition: 'border-color 200ms ease, box-shadow 200ms ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-2)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none'; }}>

              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                <QuoteIcon />
                <StarRating />
              </div>

              <p style={{ lineHeight: 1.8, color: 'var(--text-2)', flex: 1, fontStyle: 'italic' }}>
                {loc(item.text)}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '50%',
                  background: 'var(--accent-bg)', border: '1px solid var(--accent-border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 700, color: 'var(--accent-2)', flexShrink: 0,
                }}>
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p style={{ fontWeight: 600, color: 'var(--text-1)', marginBottom: '2px' }}>{item.name}</p>
                  <p className="t-meta">{loc(item.role)}{item.company ? ' · ' + item.company : ''}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

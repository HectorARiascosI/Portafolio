'use client';

import { useReveal } from '@/lib/useReveal';

const typeLabel = { work: 'Trabajo', education: 'Educación', volunteer: 'Open Source' };

export default function Experience({ experience }) {
  const { ref, visible } = useReveal({ threshold: 0.08 });

  return (
    <section id="experiencia" aria-label="Trayectoria profesional"
      style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}
      className="section-pad">
      <div className="container-custom" ref={ref}>

        <div className={`reveal ${visible ? 'visible' : ''}`} style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <p className="t-label" style={{ marginBottom: '0.75rem' }}>Experiencia</p>
          <h2 className="t-heading">Trayectoria profesional</h2>
        </div>

        <div style={{ maxWidth: '700px', margin: '0 auto', display: 'flex', flexDirection: 'column' }}>
          {experience.map((item, i) => {
            const isActive = /en curso|presente/i.test(item.period);
            return (
              <div key={i}
                className={`reveal ${visible ? 'visible' : ''} delay-${Math.min(i + 1, 5)}`}
                style={{ display: 'flex', gap: '1.5rem', paddingBottom: i < experience.length - 1 ? '2.5rem' : 0, position: 'relative' }}>

                {/* Línea vertical */}
                {i < experience.length - 1 && (
                  <div aria-hidden style={{ position: 'absolute', left: '11px', top: '28px', bottom: 0, width: '1px', background: 'var(--border)' }} />
                )}

                {/* Dot */}
                <div style={{ flexShrink: 0, marginTop: '2px', zIndex: 1 }}>
                  <div style={{
                    width: '24px', height: '24px', borderRadius: '50%',
                    background: isActive ? 'var(--accent)' : 'var(--surface-2)',
                    border: `2px solid ${isActive ? 'var(--accent)' : 'var(--border-2)'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: isActive ? '0 0 0 4px var(--accent-bg)' : 'none',
                  }}>
                    <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: isActive ? '#fff' : 'var(--text-3)' }} />
                  </div>
                </div>

                {/* Contenido */}
                <div style={{ flex: 1, paddingTop: '1px', minWidth: 0 }}>
                  <div style={{ marginBottom: '0.5rem' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.5rem', marginBottom: '6px' }}>
                      <span className="tag-n" style={{ flexShrink: 0 }}>{typeLabel[item.type] || item.type}</span>
                      <span className="t-meta" style={{ color: isActive ? 'var(--accent-2)' : 'var(--text-3)', fontWeight: isActive ? 600 : 500 }}>
                        {item.period}
                      </span>
                      {isActive && (
                        <span style={{
                          fontSize: '0.722rem', fontWeight: 600, letterSpacing: '0.06em',
                          textTransform: 'uppercase', color: 'var(--accent-2)',
                          background: 'var(--accent-bg)', border: '1px solid var(--accent-border)',
                          borderRadius: '20px', padding: '2px 8px',
                        }}>En curso</span>
                      )}
                    </div>
                    <h3 style={{ fontSize: '1.06rem', fontWeight: 700, color: 'var(--text-1)', letterSpacing: '-0.01em', marginBottom: '3px' }}>
                      {item.role}
                    </h3>
                    <p style={{ color: 'var(--text-2)', fontWeight: 500 }}>
                      {item.company}
                      {item.location && <span style={{ color: 'var(--text-3)', fontWeight: 400 }}> · {item.location}</span>}
                    </p>
                  </div>

                  <p style={{ lineHeight: 1.8, color: 'var(--text-2)', marginBottom: item.technologies?.length ? '0.875rem' : 0 }}>
                    {item.description}
                  </p>

                  {item.technologies?.length > 0 && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
                      {item.technologies.map(tech => (
                        <span key={tech} className="tag-n">{tech}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

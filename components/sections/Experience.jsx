'use client';

import { useReveal } from '@/lib/useReveal';

const typeLabel = { work: 'Trabajo', education: 'Educación', volunteer: 'Open Source' };

export default function Experience({ experience }) {
  const { ref, visible } = useReveal();

  return (
    <section id="experiencia" aria-label="Experiencia y educación"
      style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}
      className="section-pad">
      <div className="container-custom" ref={ref}>

        <div className={`reveal ${visible ? 'visible' : ''}`} style={{ marginBottom: '3.5rem' }}>
          <p className="t-label" style={{ marginBottom: '0.75rem' }}>Trayectoria</p>
          <h2 className="t-heading">Experiencia y educación</h2>
        </div>

        <div style={{ maxWidth: '700px', display: 'flex', flexDirection: 'column' }}>
          {experience.map((item, i) => (
            <div key={i}
              className={`reveal ${visible ? 'visible' : ''} delay-${Math.min(i + 1, 5)}`}
              style={{ display: 'flex', gap: '1.5rem', paddingBottom: i < experience.length - 1 ? '2.25rem' : 0, position: 'relative' }}>

              {/* Línea vertical */}
              {i < experience.length - 1 && (
                <div aria-hidden style={{ position: 'absolute', left: '11px', top: '24px', bottom: 0, width: '1px', background: 'var(--border)' }} />
              )}

              {/* Dot */}
              <div style={{ flexShrink: 0, marginTop: '4px', zIndex: 1 }}>
                <div style={{
                  width: '24px', height: '24px', borderRadius: '50%',
                  background: item.type === 'work' ? 'var(--accent)' : 'var(--surface-2)',
                  border: `1px solid ${item.type === 'work' ? 'var(--accent)' : 'var(--border-2)'}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: item.type === 'work' ? '#fff' : 'var(--text-3)' }} />
                </div>
              </div>

              {/* Contenido */}
              <div style={{ flex: 1, paddingTop: '2px', minWidth: 0 }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.5rem', marginBottom: '4px' }}>
                    <span className="tag-n" style={{ flexShrink: 0 }}>{typeLabel[item.type] || item.type}</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-3)', fontWeight: 500 }}>{item.period}</span>
                  </div>
                  <h3 style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--text-1)', letterSpacing: '-0.01em', marginBottom: '2px' }}>
                    {item.role}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-2)' }}>
                    {item.company}
                    {item.location && <span style={{ color: 'var(--text-3)' }}> · {item.location}</span>}
                  </p>
                </div>

                <p style={{ fontSize: '0.875rem', lineHeight: 1.75, color: 'var(--text-2)', marginBottom: item.technologies?.length ? '0.875rem' : 0 }}>
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
          ))}
        </div>

      </div>
    </section>
  );
}

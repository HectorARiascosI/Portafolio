'use client';

import { useReveal } from '@/lib/useReveal';

export default function Skills({ skills }) {
  const { ref, visible } = useReveal({ threshold: 0.08 });

  return (
    <section id="habilidades" aria-label="Habilidades técnicas"
      style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}
      className="section-pad">
      <div className="container-custom" ref={ref}>

        <div className={`reveal ${visible ? 'visible' : ''}`} style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <p className="t-label" style={{ marginBottom: '0.75rem' }}>Stack técnico</p>
          <h2 className="t-heading">Habilidades</h2>
          <p className="t-body" style={{ marginTop: '0.75rem', maxWidth: '480px', margin: '0.75rem auto 0' }}>
            Herramientas y lenguajes con los que construyo soluciones reales.
          </p>
        </div>

        <div className="grid-skills">
          {skills.map((category, i) => (
            <div key={category.category}
              className={`reveal ${visible ? 'visible' : ''} delay-${Math.min(i + 1, 5)}`}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                padding: '1.75rem',
              }}>

              <h3 style={{
                fontWeight: 700, letterSpacing: '0.06em',
                textTransform: 'uppercase', fontSize: '0.72rem',
                color: 'var(--accent-2)', marginBottom: '1.25rem',
              }}>
                {category.category}
              </h3>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {category.items.map(skill => (
                  <span key={skill.name} className="tag-n"
                    title={`${skill.level} · ${skill.years} año${skill.years !== 1 ? 's' : ''}`}
                    style={{ cursor: 'default' }}>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

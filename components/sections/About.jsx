'use client';

import { useReveal } from '@/lib/useReveal';

const STATS = [
  { value: '2+',  label: 'Años de exp.' },
  { value: '3',   label: 'Proyectos' },
  { value: '5to', label: 'Semestre' },
  { value: '10+', label: 'Tecnologías' },
];

export default function About({ profile = {} }) {
  const { ref, visible } = useReveal({ threshold: 0.08 });

  const infoItems = [
    { label: 'Ubicación', value: profile.location ?? 'Pasto, Nariño — Colombia' },
    { label: 'Email',     value: profile.email ?? 'hectorariascos6.6@gmail.com', href: `mailto:${profile.email ?? 'hectorariascos6.6@gmail.com'}` },
    { label: 'Teléfono',  value: profile.phone ?? '3226679615', href: `tel:${profile.phone ?? '3226679615'}` },
    { label: 'Idiomas',   value: 'Español (nativo) · Inglés B1' },
    { label: 'Estado',    value: 'Disponible para oportunidades', green: true },
    { label: 'Educación', value: 'Ing. de Software — UCC · 2024–Presente (5° semestre)' },
  ];
  const paragraphs = (profile.bio ?? '').split('\n\n').filter(Boolean);

  return (
    <section id="sobre-mi" aria-label="Sobre mí"
      style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}
      className="section-pad">
      <div className="container-custom" ref={ref}>

        <div className={`reveal ${visible ? 'visible' : ''}`} style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <h2 className="t-heading">Sobre mí</h2>
        </div>

        <div className="grid-about">

          {/* Izquierda — stats */}
          <div className={`reveal-left ${visible ? 'visible' : ''} delay-1`}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'var(--border)', borderRadius: '10px', overflow: 'hidden' }}>
              {STATS.map(s => (
                <div key={s.label} style={{ background: 'var(--surface-2)', padding: '1.25rem 1rem' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-1)', letterSpacing: '-0.03em', marginBottom: '4px' }}>
                    {s.value}
                  </div>
                  <div className="t-field-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Derecha — bio + info */}
          <div className={`reveal ${visible ? 'visible' : ''} delay-2`}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.125rem', marginBottom: '2.25rem' }}>
              {paragraphs.map((p, i) => (
                <p key={i} style={{ lineHeight: 1.85, color: 'var(--text-2)', textAlign: 'left' }}>{p}</p>
              ))}
            </div>

            <div className="divider" style={{ marginBottom: '1.75rem' }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {infoItems.map(item => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'baseline', gap: '1.25rem' }}>
                  <span className="t-field-label" style={{ minWidth: '80px', flexShrink: 0 }}>
                    {item.label}
                  </span>
                  {item.href
                    ? <a href={item.href} className="link-muted">{item.value}</a>
                    : <span style={{ color: item.green ? 'var(--green)' : 'var(--text-2)' }}>{item.value}</span>
                  }
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

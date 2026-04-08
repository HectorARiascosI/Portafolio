'use client';

import { useReveal } from '@/lib/useReveal';

const STATS = [
  { value: '3+',  label: 'Años de exp.' },
  { value: '6+',  label: 'Proyectos' },
  { value: '3.8', label: 'GPA' },
  { value: '10+', label: 'Tecnologías' },
];

export default function About({ profile = {} }) {
  const { ref, visible } = useReveal();

  const infoItems = [
    { label: 'Ubicación', value: profile.location ?? 'Pasto, Nariño — Colombia' },
    { label: 'Email',     value: profile.email ?? 'hectorariascos6.6@gmail.com', href: `mailto:${profile.email ?? 'hectorariascos6.6@gmail.com'}` },
    { label: 'Teléfono',  value: profile.phone ?? '3226679615', href: `tel:${profile.phone ?? '3226679615'}` },
    { label: 'Idiomas',   value: (profile.languages ?? [{ name: 'Español', level: 'Nativo' }, { name: 'Inglés', level: 'B1' }]).map(l => `${l.name} (${l.level})`).join(' · ') },
    { label: 'Estado',    value: 'Disponible para oportunidades', green: true },
    { label: 'Educación', value: 'Ing. de Software — UCC · 2024–Presente (5° semestre)' },
  ];
  const paragraphs = (profile.bio ?? '').split('\n\n').filter(Boolean);

  return (
    <section id="sobre-mi" aria-label="Sobre mí"
      style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}
      className="section-pad">
      <div className="container-custom" ref={ref}>

        <div className={`reveal ${visible ? 'visible' : ''}`} style={{ marginBottom: '3.5rem' }}>
          <p className="t-label" style={{ marginBottom: '0.75rem' }}>Sobre mí</p>
          <h2 className="t-heading">Sobre mí</h2>
        </div>

        <div className="grid-about">

          {/* Izquierda — avatar + stats */}
          <div className={`reveal-left ${visible ? 'visible' : ''} delay-1`}>
            <div style={{
              width: '120px', height: '120px', borderRadius: '12px',
              background: 'var(--surface-2)', border: '1px solid var(--border)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '2.5rem', fontWeight: 700, color: 'var(--text-3)',
              marginBottom: '1.5rem', userSelect: 'none',
            }}>
              {(profile.name ?? 'H').charAt(0)}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'var(--border)', borderRadius: '10px', overflow: 'hidden' }}>
              {STATS.map(s => (
                <div key={s.label} style={{ background: 'var(--surface-2)', padding: '1.125rem 1rem' }}>
                  <div style={{ fontSize: '1.375rem', fontWeight: 700, color: 'var(--text-1)', letterSpacing: '-0.03em', marginBottom: '2px' }}>
                    {s.value}
                  </div>
                  <div style={{ fontSize: '0.6875rem', color: 'var(--text-3)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.07em' }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Derecha — bio + info */}
          <div className={`reveal ${visible ? 'visible' : ''} delay-2`}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.125rem', marginBottom: '2.25rem' }}>
              {paragraphs.map((p, i) => (
                <p key={i} className="t-body">{p}</p>
              ))}
            </div>

            <div className="divider" style={{ marginBottom: '1.75rem' }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {infoItems.map(item => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'baseline', gap: '1.25rem' }}>
                  <span style={{ fontSize: '0.6875rem', fontWeight: 600, color: 'var(--text-3)', minWidth: '80px', flexShrink: 0, textTransform: 'uppercase', letterSpacing: '0.07em' }}>
                    {item.label}
                  </span>
                  {item.href
                    ? <a href={item.href} className="link-muted" style={{ fontSize: '0.875rem' }}>{item.value}</a>
                    : <span style={{ fontSize: '0.875rem', color: item.green ? '#4ade80' : 'var(--text-2)' }}>{item.value}</span>
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

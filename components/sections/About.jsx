'use client';

import { useReveal } from '@/lib/useReveal';
import { useLang } from '@/lib/LangProvider';

export default function About({ profile = {} }) {
  const { ref, visible } = useReveal({ threshold: 0.08 });
  const { t } = useLang();

  const STATS = [
    { value: '1+',  label: t('about.stats.exp') },
    { value: '3',   label: t('about.stats.projects') },
    { value: '5to', label: t('about.stats.semester') },
    { value: '10+', label: t('about.stats.tech') },
  ];

  const infoItems = [
    { label: t('about.info.location'),  value: profile.location ?? 'Pasto, Nariño · Colombia' },
    { label: t('about.info.email'),     value: profile.email ?? 'hectorariascos6.6@gmail.com', href: `mailto:${profile.email ?? 'hectorariascos6.6@gmail.com'}` },
    { label: t('about.info.phone'),     value: profile.phone ?? '+57 322 667 9615', href: `tel:${profile.phone ?? '+573226679615'}` },
    { label: t('about.info.languages'), value: t('about.info.langs_val') },
    { label: t('about.info.status'),    value: t('about.info.status_val'), green: true },
    { label: t('about.info.education'), value: t('about.info.edu_val') },
  ];

  // Bio siempre desde el diccionario para que cambie con el idioma
  const bioParagraphs = [
    t('hero.bio_p1'),
    t('hero.bio_p2'),
    t('hero.bio_p3'),
  ];

  return (
    <section id="sobre-mi" aria-label={t('about.section_label')}
      style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}
      className="section-pad">
      <div className="container-custom" ref={ref}>

        <div className={`reveal ${visible ? 'visible' : ''}`} style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <h2 className="t-heading">{t('about.heading')}</h2>
        </div>

        <div className="grid-about">

          {/* Stats */}
          <div className={`reveal-left ${visible ? 'visible' : ''} delay-1`}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              {STATS.map(s => (
                <div key={s.label} style={{
                  background: 'var(--surface-2)',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  padding: '1.25rem 1rem',
                  display: 'flex', flexDirection: 'column', gap: '6px',
                }}>
                  <div style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--text-1)', letterSpacing: '-0.03em', lineHeight: 1 }}>
                    {s.value}
                  </div>
                  <div style={{
                    fontSize: '0.7rem', fontWeight: 600,
                    letterSpacing: '0.07em', textTransform: 'uppercase',
                    color: 'var(--text-3)', lineHeight: 1.3,
                  }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Bio + info */}
          <div className={`reveal ${visible ? 'visible' : ''} delay-2`}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              {bioParagraphs.map((p, i) => (
                <p key={i} style={{ lineHeight: 1.8, color: 'var(--text-2)' }}>{p}</p>
              ))}
            </div>

            <div className="divider" style={{ marginBottom: '1.5rem' }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {infoItems.map(item => (
                <div key={item.label} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', minWidth: 0 }}>
                  <span className="t-field-label" style={{ minWidth: '90px', flexShrink: 0, paddingTop: '2px' }}>
                    {item.label}
                  </span>
                  {item.href
                    ? <a href={item.href} className="link-muted" style={{ overflowWrap: 'anywhere', wordBreak: 'break-all', minWidth: 0, flex: 1, fontSize: '0.9rem' }}>{item.value}</a>
                    : <span style={{ color: item.green ? 'var(--green)' : 'var(--text-2)', overflowWrap: 'break-word', minWidth: 0, flex: 1 }}>{item.value}</span>
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

'use client';

import { useReveal } from '@/lib/useReveal';
import { useLang } from '@/lib/LangProvider';
import TechBadge from '@/components/ui/TechBadge';

export default function Skills({ skills }) {
  const { ref, visible } = useReveal({ threshold: 0.08 });
  const { t } = useLang();

  const allItems = skills.flatMap(cat =>
    cat.items.map(item => ({ ...item, category: cat.category }))
  );

  return (
    <section
      id="habilidades"
      aria-label={t('skills.heading')}
      style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}
      className="section-pad"
    >
      <div className="container-custom" ref={ref}>

        <div
          className={`reveal ${visible ? 'visible' : ''}`}
          style={{ marginBottom: '3rem', textAlign: 'center' }}
        >
          <p className="t-label" style={{ marginBottom: '0.75rem' }}>{t('skills.label')}</p>
          <h2 className="t-heading">{t('skills.heading')}</h2>
          <p className="t-body" style={{ marginTop: '0.75rem', maxWidth: '480px', margin: '0.75rem auto 0' }}>
            {t('skills.sub')}
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
          gap: '1rem',
          maxWidth: '900px',
          margin: '0 auto',
        }}>
          {allItems.map((skill, i) => (
            <div
              key={skill.name}
              className={`reveal ${visible ? 'visible' : ''} delay-${Math.min((i % 5) + 1, 5)}`}
            >
              <TechBadge name={skill.name} size="md" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

'use client';

import { useReveal } from '@/lib/useReveal';
import { useLang } from '@/lib/LangProvider';

/**
 * Slug de Simple Icons para cada tecnología.
 * https://simpleicons.org — los slugs son el nombre en minúsculas sin espacios.
 */
const ICON_SLUG = {
  'JavaScript':       'javascript',
  'TypeScript':       'typescript',
  'HTML / CSS':       'html5',
  'Python':           'python',
  'Java':             'openjdk',
  'SQL':              'postgresql',
  'React':            'react',
  'Next.js':          'nextdotjs',
  'Django':           'django',
  'Tailwind CSS':     'tailwindcss',
  'Node.js':          'nodedotjs',
  'Figma':            'figma',
  'UI/UX Design':     'figma',
  'Wireframing':      'figma',
  'Diseño Responsivo':'css3',
  'Prototipado':      'figma',
  'Git':              'git',
  'GitHub':           'github',
  'Vercel':           'vercel',
  'VS Code':          'visualstudiocode',
  'Postman':          'postman',
  'SQLite':           'sqlite',
  'MySQL':            'mysql',
  'PostgreSQL':       'postgresql',
};

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
          gridTemplateColumns: 'repeat(auto-fill, minmax(90px, 1fr))',
          gap: '0.875rem',
          maxWidth: '900px',
          margin: '0 auto',
        }}>
          {allItems.map((skill, i) => {
            const slug = ICON_SLUG[skill.name];
            return (
              <div
                key={skill.name}
                className={`reveal ${visible ? 'visible' : ''} delay-${Math.min((i % 5) + 1, 5)}`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.625rem',
                  padding: '1.25rem 0.5rem 1rem',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '14px',
                  cursor: 'default',
                  transition: 'border-color 200ms ease, transform 200ms ease, box-shadow 200ms ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--border-2)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {slug ? (
                  <img
                    src={`https://cdn.simpleicons.org/${slug}`}
                    alt={skill.name}
                    width={28}
                    height={28}
                    style={{
                      width: 28,
                      height: 28,
                      objectFit: 'contain',
                      filter: 'var(--icon-filter)',
                    }}
                    loading="lazy"
                  />
                ) : (
                  <div style={{
                    width: 28, height: 28, borderRadius: 6,
                    background: 'var(--accent-bg)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.6rem', fontWeight: 700, color: 'var(--accent-2)',
                  }}>
                    {skill.name.slice(0, 2).toUpperCase()}
                  </div>
                )}
                <span style={{
                  fontSize: '0.7rem',
                  fontWeight: 500,
                  color: 'var(--text-2)',
                  textAlign: 'center',
                  lineHeight: 1.3,
                  wordBreak: 'break-word',
                }}>
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

'use client';

import { useReveal } from '@/lib/useReveal';
import { useLang } from '@/lib/LangProvider';

/* ── Iconos SVG por tecnología ── */
const ICONS = {
  // Lenguajes
  'JavaScript': (
    <svg viewBox="0 0 32 32" width="28" height="28"><rect width="32" height="32" rx="4" fill="#F7DF1E"/><path d="M9.5 25.5l2.3-1.4c.4.8.8 1.4 1.7 1.4.9 0 1.4-.3 1.4-1.7V16h2.8v7.9c0 2.8-1.6 4-4 4-2.1 0-3.4-1.1-4.2-2.4zm8.5-.3l2.3-1.4c.6 1 1.3 1.7 2.7 1.7 1.1 0 1.8-.6 1.8-1.3 0-.9-.7-1.2-1.9-1.8l-.7-.3c-1.9-.8-3.1-1.8-3.1-3.9 0-1.9 1.5-3.4 3.8-3.4 1.6 0 2.8.6 3.6 2l-2.2 1.4c-.4-.8-1-1.1-1.7-1.1-.8 0-1.3.5-1.3 1.1 0 .8.5 1.1 1.6 1.6l.7.3c2.2 1 3.4 1.9 3.4 4.1 0 2.3-1.8 3.6-4.3 3.6-2.4 0-3.9-1.1-4.7-2.6z" fill="#000"/></svg>
  ),
  'TypeScript': (
    <svg viewBox="0 0 32 32" width="28" height="28"><rect width="32" height="32" rx="4" fill="#3178C6"/><path d="M18.6 22.4v2.3c.4.2.9.4 1.4.5.6.1 1.1.2 1.7.2.6 0 1.1-.1 1.6-.2.5-.1 1-.3 1.4-.6.4-.3.7-.6.9-1.1.2-.4.3-1 .3-1.6 0-.5-.1-.9-.2-1.2-.1-.4-.3-.7-.6-1-.3-.3-.6-.5-1-.7-.4-.2-.9-.4-1.4-.6-.4-.1-.7-.3-1-.4-.3-.1-.5-.2-.7-.4-.2-.1-.3-.3-.4-.4-.1-.2-.1-.4-.1-.6 0-.2 0-.4.1-.5.1-.2.2-.3.4-.4.2-.1.4-.2.6-.2.2-.1.5-.1.8-.1.2 0 .5 0 .7.1.3 0 .5.1.8.2.3.1.5.2.7.3.2.1.4.3.6.4v-2.2c-.4-.1-.8-.3-1.2-.3-.5-.1-1-.1-1.5-.1-.6 0-1.1.1-1.6.2-.5.1-.9.3-1.3.6-.4.3-.7.6-.9 1-.2.4-.3.9-.3 1.5 0 .7.2 1.4.6 1.9.4.5 1.1.9 2 1.2.4.1.8.3 1.1.4.3.1.6.3.8.4.2.1.4.3.5.5.1.2.2.4.2.6 0 .2 0 .4-.1.6-.1.2-.2.3-.4.4-.2.1-.4.2-.6.2-.3.1-.5.1-.8.1-.6 0-1.2-.1-1.7-.4-.5-.2-1-.5-1.4-.9zM14 17.3h3.3V15H8v2.3h3.3V27H14V17.3z" fill="#fff"/></svg>
  ),
  'HTML / CSS': (
    <svg viewBox="0 0 32 32" width="28" height="28"><rect width="32" height="32" rx="4" fill="#E34F26"/><path d="M7 5l1.8 20.2L16 27l7.2-1.8L25 5H7zm14.5 6H12l.2 2.5h9.1l-.7 7.4-4.6 1.3-4.6-1.3-.3-3.6h2.4l.2 1.8 2.3.6 2.3-.6.2-2.8H11.3L10.7 11h10.6l-.8 6z" fill="#fff"/></svg>
  ),
  'Python': (
    <svg viewBox="0 0 32 32" width="28" height="28"><rect width="32" height="32" rx="4" fill="#3776AB"/><path d="M16 6c-5 0-4.7 2.2-4.7 2.2v2.3h4.8v.7H9.4S6 10.8 6 16s3 5.7 3 5.7h1.8v-2.4s-.1-3 3-3h5.1s2.9.1 2.9-2.8V9.1S22.2 6 16 6zm-1.6 1.7c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z" fill="#FFD43B"/><path d="M16 26c5 0 4.7-2.2 4.7-2.2v-2.3h-4.8v-.7h6.7S26 21.2 26 16s-3-5.7-3-5.7h-1.8v2.4s.1 3-3 3h-5.1s-2.9-.1-2.9 2.8v4.4S9.8 26 16 26zm1.6-1.7c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z" fill="#fff"/></svg>
  ),
  'Java': (
    <svg viewBox="0 0 32 32" width="28" height="28"><rect width="32" height="32" rx="4" fill="#007396"/><path d="M12.5 20.5s-.9.5.6.7c1.8.2 2.7.2 4.7-.2 0 0 .5.3 1.2.6-4.4 1.9-9.9-.1-6.5-1.1zm-.5-2.3s-1 .7.5.9c1.9.2 3.4.2 6-.3 0 0 .4.3.9.5-5.3 1.5-11.2.1-7.4-1.1zm4.3-4.2c1.1 1.2-.3 2.3-.3 2.3s2.7-1.4 1.5-3.1c-1.2-1.6-2.1-2.4 2.8-5.2 0 0-7.7 1.9-4 6zm4.4 7.5s.7.6-.7.9c-2.6.8-10.8 1-13.1.1-.8-.4.7-.9 1.2-.9.5-.1.8-.1.8-.1-.9-.6-6 1.3-2.6 1.9 9.4 1.5 17.1-.7 14.4-1.9zm-9.5-6.8s-4.1 1-1.5 1.3c1.1.1 3.3.1 5.4-.1 1.7-.1 3.4-.4 3.4-.4s-.6.3-1 .5c-4 1-11.7.5-9.5-.5 1.9-.9 3.2-.8 3.2-.8zm7.3 4.1c4.1-2.1 2.2-4.2 .9-3.9-.3.1-.5.2-.5.2s.1-.2.4-.3c2.9-1 5.1 3-.9 4.6 0 0 .1-.1.1-.6z" fill="#fff"/></svg>
  ),
  'SQL': (
    <svg viewBox="0 0 32 32" width="28" height="28"><rect width="32" height="32" rx="4" fill="#336791"/><ellipse cx="16" cy="10" rx="8" ry="3" fill="#fff" opacity=".9"/><path d="M8 10v4c0 1.7 3.6 3 8 3s8-1.3 8-3v-4c0 1.7-3.6 3-8 3s-8-1.3-8-3z" fill="#fff" opacity=".7"/><path d="M8 14v4c0 1.7 3.6 3 8 3s8-1.3 8-3v-4c0 1.7-3.6 3-8 3s-8-1.3-8-3z" fill="#fff" opacity=".5"/><path d="M8 18v4c0 1.7 3.6 3 8 3s8-1.3 8-3v-4c0 1.7-3.6 3-8 3s-8-1.3-8-3z" fill="#fff" opacity=".3"/></svg>
  ),
  // Frameworks
  'React': (
    <svg viewBox="0 0 32 32" width="28" height="28"><rect width="32" height="32" rx="4" fill="#20232A"/><circle cx="16" cy="16" r="2.5" fill="#61DAFB"/><ellipse cx="16" cy="16" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1.5"/><ellipse cx="16" cy="16" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 16 16)"/><ellipse cx="16" cy="16" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 16 16)"/></svg>
  ),
  'Next.js': (
    <svg viewBox="0 0 32 32" width="28" height="28"><rect width="32" height="32" rx="4" fill="#000"/><path d="M16 6C10.5 6 6 10.5 6 16s4.5 10 10 10c2.7 0 5.1-1 6.9-2.7L13 14.5V22h-2V12h2l9.5 12.2C24.1 22.4 26 19.4 26 16c0-5.5-4.5-10-10-10z" fill="#fff"/></svg>
  ),
  'Django': (
    <svg viewBox="0 0 32 32" width="28" height="28"><rect width="32" height="32" rx="4" fill="#092E20"/><path d="M17.5 7h2.8v13.2c-1.4.3-2.5.4-3.6.4-3.4 0-5.2-1.5-5.2-4.5 0-2.8 1.9-4.6 4.9-4.6.5 0 .8 0 1.1.1V7zm0 7.1c-.3-.1-.5-.1-.9-.1-1.4 0-2.3.9-2.3 2.3 0 1.4.8 2.2 2.2 2.2.3 0 .6 0 1-.1v-4.3zM12.5 12.5H9.7v7.2c0 2.5-.2 3.7-.7 4.7-.5.9-1.1 1.5-2.4 2.2l-2.6-1.2c1.3-.6 1.9-1.2 2.3-2 .4-.8.5-1.8.5-4.4v-6.5h5.7v-.0z" fill="#44B78B"/></svg>
  ),
  'Tailwind CSS': (
    <svg viewBox="0 0 32 32" width="28" height="28"><rect width="32" height="32" rx="4" fill="#0F172A"/><path d="M16 9c-2.7 0-4.4 1.3-5.1 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.7 1.9 1.3.9 1 2 2.2 4.3 2.2 2.7 0 4.4-1.3 5.1-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.7-1.9-1.3C19.4 10.2 18.3 9 16 9zm-5.1 8c-2.7 0-4.4 1.3-5.1 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.7 1.9 1.3.9 1 2 2.2 4.3 2.2 2.7 0 4.4-1.3 5.1-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.7-1.9-1.3-1-.9-2.1-2.2-4.3-2.2z" fill="#38BDF8"/></svg>
  ),
  'Node.js': (
    <svg viewBox="0 0 32 32" width="28" height="28"><rect width="32" height="32" rx="4" fill="#215732"/><path d="M16 5l10 5.8v11.5L16 28 6 22.3V10.8L16 5zm0 2.3L8 11.9v8.2l8 4.6 8-4.6v-8.2L16 7.3zm-1 4.7h2v5.5l4.5 2.6-1 1.7-5.5-3.2V12z" fill="#8CC84B"/></svg>
  ),
  // Diseño
  'Figma': (
    <svg viewBox="0 0 32 32" width="28" height="28"><rect width="32" height="32" rx="4" fill="#1E1E1E"/><path d="M12 26a3 3 0 003-3v-3h-3a3 3 0 000 6z" fill="#0ACF83"/><path d="M9 16a3 3 0 013-3h3v6h-3a3 3 0 01-3-3z" fill="#A259FF"/><path d="M9 10a3 3 0 013-3h3v6h-3a3 3 0 01-3-3z" fill="#F24E1E"/><path d="M15 7h3a3 3 0 010 6h-3V7z" fill="#FF7262"/><path d="M21 16a3 3 0 11-6 0 3 3 0 016 0z" fill="#1ABCFE"/></svg>
  ),
  'UI/UX Design': (
    <svg viewBox="0 0 32 32" width="28" height="28"><rect width="32" height="32" rx="4" fill="#6C63FF"/><rect x="7" y="7" width="18" height="13" rx="2" fill="none" stroke="#fff" strokeWidth="1.5"/><path d="M11 24h10M16 20v4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/><circle cx="16" cy="13" r="3" fill="#fff" opacity=".9"/></svg>
  ),
  'Wireframing': (
    <svg viewBox="0 0 32 32" width="28" height="28"><rect width="32" height="32" rx="4" fill="#64748B"/><rect x="6" y="6" width="20" height="14" rx="2" fill="none" stroke="#fff" strokeWidth="1.5"/><path d="M9 14h14M9 11h6M9 17h10" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" opacity=".7"/><rect x="9" y="22" width="6" height="4" rx="1" fill="#fff" opacity=".5"/><rect x="17" y="22" width="6" height="4" rx="1" fill="#fff" opacity=".5"/></svg>
  ),
  'Diseño Responsivo': (
    <svg viewBox="0 0 32 32" width="28" height="28"><rect width="32" height="32" rx="4" fill="#0EA5E9"/><rect x="4" y="8" width="16" height="11" rx="1.5" fill="none" stroke="#fff" strokeWidth="1.5"/><rect x="22" y="11" width="6" height="9" rx="1.5" fill="none" stroke="#fff" strokeWidth="1.5"/><path d="M7 22h10M24 23h2" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" opacity=".6"/></svg>
  ),
  'Prototipado': (
    <svg viewBox="0 0 32 32" width="28" height="28"><rect width="32" height="32" rx="4" fill="#F59E0B"/><circle cx="10" cy="16" r="3" fill="#fff"/><circle cx="22" cy="10" r="3" fill="#fff"/><circle cx="22" cy="22" r="3" fill="#fff"/><path d="M13 16h3M19 11.5l-3 3M19 20.5l-3-3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/></svg>
  ),
  // Herramientas
  'Git': (
    <svg viewBox="0 0 32 32" width="28" height="28"><rect width="32" height="32" rx="4" fill="#F05032"/><path d="M27.2 14.8L17.2 4.8a1.6 1.6 0 00-2.3 0l-2.3 2.3 2.9 2.9a1.9 1.9 0 012.4 2.4l2.8 2.8a1.9 1.9 0 11-1.1 1.1l-2.6-2.6v6.8a1.9 1.9 0 11-2.2 0v-6.9a1.9 1.9 0 01-1-2.5L11 8.3 4.8 14.5a1.6 1.6 0 000 2.3l10 10a1.6 1.6 0 002.3 0l10.1-10a1.6 1.6 0 000-2z" fill="#fff"/></svg>
  ),
  'GitHub': (
    <svg viewBox="0 0 32 32" width="28" height="28"><rect width="32" height="32" rx="4" fill="#24292E"/><path d="M16 6C10.5 6 6 10.5 6 16c0 4.4 2.9 8.2 6.8 9.5.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-4.9 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.6 0 0 .8-.3 2.8 1 .8-.2 1.7-.3 2.5-.3.8 0 1.7.1 2.5.3 2-1.3 2.8-1 2.8-1 .5 1.3.2 2.3.1 2.6.6.7 1 1.6 1 2.7 0 3.8-2.3 4.6-4.6 4.9.4.3.7 1 .7 2v2.9c0 .3.2.6.7.5C23.1 24.2 26 20.4 26 16c0-5.5-4.5-10-10-10z" fill="#fff"/></svg>
  ),
  'Vercel': (
    <svg viewBox="0 0 32 32" width="28" height="28"><rect width="32" height="32" rx="4" fill="#000"/><path d="M16 7L28 25H4L16 7z" fill="#fff"/></svg>
  ),
  'VS Code': (
    <svg viewBox="0 0 32 32" width="28" height="28"><rect width="32" height="32" rx="4" fill="#007ACC"/><path d="M23.5 6.5l-8.5 8-4-3.5L7 13.5v5l4 2.5 4-3.5 8.5 8 1.5-.8V7.3l-1.5-.8zM11 19.5L8.5 18v-4L11 12.5l3.5 3.5-3.5 3.5z" fill="#fff"/></svg>
  ),
  'Postman': (
    <svg viewBox="0 0 32 32" width="28" height="28"><rect width="32" height="32" rx="4" fill="#FF6C37"/><circle cx="16" cy="16" r="8" fill="#fff" opacity=".15"/><path d="M20.5 11.5a6.5 6.5 0 11-9.2 9.2L20.5 11.5z" fill="#fff" opacity=".3"/><circle cx="16" cy="16" r="4" fill="#fff" opacity=".9"/><path d="M16 14l1.5 1.5-4 4-.5-.5 3-3-1-1 1-1z" fill="#FF6C37"/></svg>
  ),
  // Bases de datos
  'SQLite': (
    <svg viewBox="0 0 32 32" width="28" height="28"><rect width="32" height="32" rx="4" fill="#003B57"/><path d="M22 8c-1.5-1.5-3.5-2-5.5-1.5-3 .7-5 3.5-5 6.5 0 1.5.5 3 1.5 4l-4 8h2.5l1-2h6l1 2H22l-4-8c2.5-.5 4.5-2.5 4.5-5 0-1.5-.5-3-1.5-4zm-8 10l2-4 2 4h-4z" fill="#0F9DCF"/></svg>
  ),
  'MySQL': (
    <svg viewBox="0 0 32 32" width="28" height="28"><rect width="32" height="32" rx="4" fill="#00618A"/><path d="M7 20.5c1.5 0 2.5-.3 3-1 .4-.5.5-1.3.5-2.5v-7h-2v7c0 .7-.1 1.1-.2 1.3-.2.3-.6.4-1.3.4V20.5zm6-10.5v7.5c0 1 .2 1.7.7 2.2.5.5 1.3.8 2.3.8s1.8-.3 2.3-.8c.5-.5.7-1.2.7-2.2V10h-2v7.5c0 .5-.1.8-.2 1-.2.2-.4.3-.8.3s-.6-.1-.8-.3c-.1-.2-.2-.5-.2-1V10h-2zm7 0v10h2v-7l2.5 7h2V10h-2v7l-2.5-7h-2z" fill="#fff"/></svg>
  ),
  'PostgreSQL': (
    <svg viewBox="0 0 32 32" width="28" height="28"><rect width="32" height="32" rx="4" fill="#336791"/><path d="M16 6c-4.4 0-8 2.7-8 6 0 1.5.7 2.9 1.8 4C8.7 17.2 8 18.5 8 20c0 3.3 3.6 6 8 6s8-2.7 8-6c0-1.5-.7-2.8-1.8-4 1.1-1.1 1.8-2.5 1.8-4 0-3.3-3.6-6-8-6zm0 2c3.3 0 6 1.8 6 4s-2.7 4-6 4-6-1.8-6-4 2.7-4 6-4zm0 8c3.3 0 6 1.8 6 4s-2.7 4-6 4-6-1.8-6-4 2.7-4 6-4z" fill="#fff" opacity=".8"/><circle cx="13" cy="12" r="1.5" fill="#fff"/><circle cx="19" cy="12" r="1.5" fill="#fff"/></svg>
  ),
};

const DEFAULT_ICON = (name) => (
  <div style={{
    width: 28, height: 28, borderRadius: 6,
    background: 'var(--accent-bg)', border: '1px solid var(--accent-border)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: '0.65rem', fontWeight: 700, color: 'var(--accent-2)',
  }}>
    {name.slice(0, 2).toUpperCase()}
  </div>
);

function SkillIcon({ name }) {
  return ICONS[name] ?? DEFAULT_ICON(name);
}

export default function Skills({ skills }) {
  const { ref, visible } = useReveal({ threshold: 0.08 });
  const { t } = useLang();

  // Aplanar todas las skills en una sola lista con su categoría
  const allItems = skills.flatMap(cat => cat.items.map(item => ({ ...item, category: cat.category })));

  return (
    <section id="habilidades" aria-label={t('skills.heading')}
      style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}
      className="section-pad">
      <div className="container-custom" ref={ref}>

        <div className={`reveal ${visible ? 'visible' : ''}`} style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <p className="t-label" style={{ marginBottom: '0.75rem' }}>{t('skills.label')}</p>
          <h2 className="t-heading">{t('skills.heading')}</h2>
          <p className="t-body" style={{ marginTop: '0.75rem', maxWidth: '480px', margin: '0.75rem auto 0' }}>
            {t('skills.sub')}
          </p>
        </div>

        {/* Grid de iconos */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
          gap: '1rem',
          maxWidth: '860px',
          margin: '0 auto',
        }}>
          {allItems.map((skill, i) => (
            <div
              key={skill.name}
              className={`reveal ${visible ? 'visible' : ''} delay-${Math.min((i % 5) + 1, 5)}`}
              title={skill.level}
              style={{
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                gap: '0.5rem',
                padding: '1rem 0.5rem',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                cursor: 'default',
                transition: 'border-color 200ms ease, transform 200ms ease, box-shadow 200ms ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--border-2)';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <SkillIcon name={skill.name} />
              <span style={{
                fontSize: '0.72rem',
                fontWeight: 500,
                color: 'var(--text-2)',
                textAlign: 'center',
                lineHeight: 1.3,
                wordBreak: 'break-word',
              }}>
                {skill.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

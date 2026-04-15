'use client';

import { useLang } from '@/lib/LangProvider';

function GitHubIcon() {
  return (
    <svg viewBox="0 0 32 32" width="18" height="18" fill="none" stroke="currentColor"
      strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 4C9.4 4 4 9.4 4 16c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.4 1 .1-.7.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6C24.6 25.8 28 21.3 28 16c0-6.6-5.4-12-12-12z"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 32 32" width="18" height="18" fill="none" stroke="currentColor"
      strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="4" width="24" height="24" rx="4"/>
      <path d="M10 13v9M10 9v1"/>
      <path d="M15 22v-5a3 3 0 016 0v5M15 13v9"/>
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 32 32" width="16" height="16" fill="none" stroke="currentColor"
      strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="7" width="24" height="18" rx="3"/>
      <path d="M4 10l12 8 12-8"/>
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 32 32" width="14" height="14" fill="none" stroke="currentColor"
      strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 3a9 9 0 00-9 9c0 6 9 17 9 17s9-11 9-17a9 9 0 00-9-9z"/>
      <circle cx="16" cy="12" r="3"/>
    </svg>
  );
}

function DotIcon() {
  return (
    <span style={{
      width: 6, height: 6, borderRadius: '50%',
      background: 'var(--green)', display: 'inline-block', flexShrink: 0,
    }} aria-hidden="true" />
  );
}

export default function Footer({ name = 'Hector Riascos' }) {
  const { t } = useLang();
  const year = new Date().getFullYear();

  const navLinks = [
    { href: '#sobre-mi',        key: 'footer.about' },
    { href: '#habilidades',     key: 'footer.skills' },
    { href: '#proyectos',       key: 'footer.projects' },
    { href: '#testimonios',     key: 'footer.testimonials' },
    { href: '#experiencia',     key: 'footer.experience' },
    { href: '#certificaciones', key: 'footer.certifications' },
    { href: '#contacto',        key: 'footer.contact' },
  ];

  return (
    <footer style={{
      background: 'var(--surface)',
      borderTop: '1px solid var(--border)',
    }}>

      {/* Cuerpo principal */}
      <div className="container-custom" style={{
        padding: '3rem 0 2rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '2.5rem',
      }}>

        {/* Columna izquierda — identidad */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: 280 }}>
          {/* Logo */}
          <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
            <span style={{
              width: 32, height: 32, borderRadius: 8,
              background: 'var(--accent)', color: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '0.85rem', fontWeight: 700, letterSpacing: '-0.02em', flexShrink: 0,
            }}>HA</span>
            <span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-1)', letterSpacing: '-0.02em' }}>
              Hector<span style={{ color: 'var(--text-3)', fontWeight: 400 }}> Riascos</span>
            </span>
          </a>

          <p style={{ color: 'var(--text-3)', lineHeight: 1.7, fontSize: '0.875rem' }}>
            {t('footer.tagline')}
          </p>

          {/* Disponibilidad */}
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            fontSize: '0.75rem', fontWeight: 500, color: 'var(--text-2)',
          }}>
            <DotIcon />
            {t('footer.available')}
          </span>

          {/* Ubicación */}
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '5px',
            fontSize: '0.75rem', color: 'var(--text-3)',
          }}>
            <LocationIcon />
            Pasto, Nariño · Colombia
          </span>

          {/* Redes sociales */}
          <div style={{ display: 'flex', gap: '0.625rem', marginTop: '0.25rem' }}>
            <a href="https://github.com/HectorARiascosI" target="_blank" rel="noopener noreferrer"
              aria-label="GitHub"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: 36, height: 36, borderRadius: 8,
                border: '1px solid var(--border)',
                color: 'var(--text-2)',
                transition: 'border-color 150ms, color 150ms',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-2)'; e.currentTarget.style.color = 'var(--text-1)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-2)'; }}>
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/hector-alejandro-riascos-insuasty-1384b038b" target="_blank" rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: 36, height: 36, borderRadius: 8,
                border: '1px solid var(--border)',
                color: 'var(--text-2)',
                transition: 'border-color 150ms, color 150ms',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-2)'; e.currentTarget.style.color = 'var(--text-1)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-2)'; }}>
              <LinkedInIcon />
            </a>
            <a href="mailto:hectorariascos6.6@gmail.com"
              aria-label="Email"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: 36, height: 36, borderRadius: 8,
                border: '1px solid var(--border)',
                color: 'var(--text-2)',
                transition: 'border-color 150ms, color 150ms',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-2)'; e.currentTarget.style.color = 'var(--text-1)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-2)'; }}>
              <EmailIcon />
            </a>
          </div>
        </div>

        {/* Columna derecha — navegación */}
        <nav aria-label="Footer navigation" style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
          {navLinks.map(l => (
            <a key={l.href} href={l.href} style={{
              color: 'var(--text-3)',
              textDecoration: 'none',
              fontSize: '0.875rem',
              transition: 'color 150ms',
              width: 'fit-content',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--text-1)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-3)'}>
              {t(l.key)}
            </a>
          ))}
        </nav>

      </div>

      {/* Barra inferior */}
      <div style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container-custom" style={{
          padding: '1.125rem 0',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '0.5rem',
        }}>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-3)' }}>
            © {year} Hector Riascos · {t('footer.rights')}
          </p>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-3)' }}>
            {t('footer.built_with')}
          </p>
        </div>
      </div>

    </footer>
  );
}

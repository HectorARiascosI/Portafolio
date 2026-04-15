'use client';

/**
 * TechBadge — icono outline + nombre, reutilizable en Projects, Experience, Skills, etc.
 * Usa los mismos SVGs inline del estilo línea fina / outline.
 */

const S = 32;
const sw = 1.7;
const base = { fill: 'none', stroke: 'currentColor', strokeWidth: sw, strokeLinecap: 'round', strokeLinejoin: 'round' };

export const TECH_ICONS = {
  /* ── Lenguajes ── */
  'JavaScript': (
    <svg viewBox={`0 0 ${S} ${S}`} {...base}>
      <rect x="4" y="4" width="24" height="24" rx="3"/>
      <path d="M13 22c0 2-1 3-3 3"/>
      <path d="M19 15v5a3 3 0 006 0v-1"/>
    </svg>
  ),
  'TypeScript': (
    <svg viewBox={`0 0 ${S} ${S}`} {...base}>
      <rect x="4" y="4" width="24" height="24" rx="3"/>
      <path d="M10 13h12M16 13v10"/>
      <path d="M20 18h2a2 2 0 010 4h-2v-4z"/>
    </svg>
  ),
  'HTML': (
    <svg viewBox={`0 0 ${S} ${S}`} {...base}>
      <path d="M5 4l2 20 9 3 9-3 2-20H5z"/>
      <path d="M22 9H10l.5 5h11L20 22l-4 1.5L12 22l-.5-3"/>
    </svg>
  ),
  'HTML / CSS': (
    <svg viewBox={`0 0 ${S} ${S}`} {...base}>
      <path d="M5 4l2 20 9 3 9-3 2-20H5z"/>
      <path d="M22 9H10l.5 5h11L20 22l-4 1.5L12 22l-.5-3"/>
    </svg>
  ),
  'CSS': (
    <svg viewBox={`0 0 ${S} ${S}`} {...base}>
      <path d="M5 4l2 20 9 3 9-3 2-20H5z"/>
      <path d="M21 9H11l.4 4.5h9.2L20 20l-4 1.2-4-1.2-.3-3"/>
    </svg>
  ),
  'Python': (
    <svg viewBox={`0 0 ${S} ${S}`} {...base}>
      <path d="M16 4c-4 0-6 1.5-6 4v3h6"/>
      <path d="M16 28c4 0 6-1.5 6-4v-3h-6"/>
      <path d="M10 11H7a3 3 0 00-3 3v4a3 3 0 003 3h3"/>
      <path d="M22 21h3a3 3 0 003-3v-4a3 3 0 00-3-3h-3"/>
      <circle cx="13" cy="9" r="1" fill="currentColor" stroke="none"/>
      <circle cx="19" cy="23" r="1" fill="currentColor" stroke="none"/>
    </svg>
  ),
  'Java': (
    <svg viewBox={`0 0 ${S} ${S}`} {...base}>
      <path d="M12 20s-2 1 1.5 1.5c4 .6 6 .5 10-1"/>
      <path d="M11 17.5s-2 1.2 1.5 1.7c4.5.6 7 .5 11-1.2"/>
      <path d="M16 14c3-1.5 1.5-3 1.5-3s3 1.5-1 3c-3.5 1.5-1 2.5-1 2.5s-3-1.5.5-2.5z"/>
      <path d="M13 27s1 .8 3 .5c2-.3 3-1.5 3-1.5"/>
      <path d="M10 24s-1 .7 2 1.2c3.5.6 6 .5 8-1"/>
    </svg>
  ),
  'SQL': (
    <svg viewBox={`0 0 ${S} ${S}`} {...base}>
      <ellipse cx="16" cy="9" rx="10" ry="4"/>
      <path d="M6 9v6c0 2.2 4.5 4 10 4s10-1.8 10-4V9"/>
      <path d="M6 15v6c0 2.2 4.5 4 10 4s10-1.8 10-4v-6"/>
    </svg>
  ),
  /* ── Frameworks ── */
  'React': (
    <svg viewBox={`0 0 ${S} ${S}`} {...base}>
      <circle cx="16" cy="16" r="2.5"/>
      <ellipse cx="16" cy="16" rx="12" ry="5"/>
      <ellipse cx="16" cy="16" rx="12" ry="5" transform="rotate(60 16 16)"/>
      <ellipse cx="16" cy="16" rx="12" ry="5" transform="rotate(120 16 16)"/>
    </svg>
  ),
  'Next.js': (
    <svg viewBox={`0 0 ${S} ${S}`} {...base}>
      <circle cx="16" cy="16" r="12"/>
      <path d="M12 21V11l12 13"/>
      <path d="M12 11h6"/>
    </svg>
  ),
  'Django': (
    <svg viewBox={`0 0 ${S} ${S}`} {...base}>
      <rect x="6" y="4" width="5" height="18" rx="1"/>
      <rect x="14" y="4" width="5" height="12" rx="1"/>
      <path d="M14 22c0 2.5-2 4-5 4"/>
      <path d="M19 16c0 3-2.5 6-5 6"/>
    </svg>
  ),
  'Tailwind CSS': (
    <svg viewBox={`0 0 ${S} ${S}`} {...base}>
      <path d="M8 13c1-4 3.5-6 7-5 2.5.7 3.5 2.5 3 5-1 4-3.5 6-7 5-2.5-.7-3.5-2.5-3-5z"/>
      <path d="M15 19c1-4 3.5-6 7-5"/>
      <path d="M4 19c1-4 3.5-6 7-5"/>
    </svg>
  ),
  'Node.js': (
    <svg viewBox={`0 0 ${S} ${S}`} {...base}>
      <path d="M16 4L28 11v10L16 28 4 21V11L16 4z"/>
      <path d="M16 12v8M12 14l4-2 4 2"/>
    </svg>
  ),
  'Bootstrap': (
    <svg viewBox={`0 0 ${S} ${S}`} {...base}>
      <rect x="5" y="4" width="22" height="24" rx="4"/>
      <path d="M11 16h5a3 3 0 000-6h-5v6z"/>
      <path d="M11 16h6a3 3 0 010 6h-6v-6z"/>
    </svg>
  ),
  /* ── Diseño ── */
  'Figma': (
    <svg viewBox={`0 0 ${S} ${S}`} {...base}>
      <rect x="9" y="4" width="7" height="7" rx="3.5"/>
      <rect x="9" y="11" width="7" height="7"/>
      <rect x="9" y="18" width="7" height="7" rx="3.5"/>
      <rect x="16" y="4" width="7" height="7" rx="3.5"/>
      <circle cx="19.5" cy="14.5" r="3.5"/>
    </svg>
  ),
  'UI/UX Design': (
    <svg viewBox={`0 0 ${S} ${S}`} {...base}>
      <rect x="3" y="5" width="26" height="18" rx="2"/>
      <circle cx="16" cy="14" r="4"/>
      <path d="M3 9h26"/>
      <circle cx="6" cy="7" r="0.8" fill="currentColor" stroke="none"/>
      <circle cx="9" cy="7" r="0.8" fill="currentColor" stroke="none"/>
    </svg>
  ),
  'Wireframing': (
    <svg viewBox={`0 0 ${S} ${S}`} {...base}>
      <rect x="3" y="5" width="26" height="18" rx="2"/>
      <rect x="6" y="9" width="8" height="6" rx="1"/>
      <path d="M17 10h8M17 13h6M6 18h20"/>
    </svg>
  ),
  'Diseño Responsivo': (
    <svg viewBox={`0 0 ${S} ${S}`} {...base}>
      <rect x="2" y="7" width="18" height="13" rx="2"/>
      <rect x="22" y="10" width="8" height="10" rx="2"/>
      <path d="M7 24h8M25 23v1"/>
    </svg>
  ),
  'Prototipado': (
    <svg viewBox={`0 0 ${S} ${S}`} {...base}>
      <circle cx="8" cy="16" r="4"/>
      <circle cx="24" cy="8" r="4"/>
      <circle cx="24" cy="24" r="4"/>
      <path d="M12 16h4M20 10l-4 4M20 22l-4-4"/>
    </svg>
  ),
  /* ── Herramientas ── */
  'Git': (
    <svg viewBox={`0 0 ${S} ${S}`} {...base}>
      <circle cx="8" cy="8" r="3"/>
      <circle cx="24" cy="8" r="3"/>
      <circle cx="8" cy="24" r="3"/>
      <path d="M8 11v10M11 8h10M11 21l10-10"/>
    </svg>
  ),
  'GitHub': (
    <svg viewBox={`0 0 ${S} ${S}`} {...base}>
      <path d="M16 4C9.4 4 4 9.4 4 16c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.4 1 .1-.7.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6C24.6 25.8 28 21.3 28 16c0-6.6-5.4-12-12-12z"/>
    </svg>
  ),
  'Vercel': (
    <svg viewBox={`0 0 ${S} ${S}`} {...base}>
      <path d="M16 5L29 27H3L16 5z"/>
    </svg>
  ),
  'VS Code': (
    <svg viewBox={`0 0 ${S} ${S}`} {...base}>
      <path d="M22 4L10 16l-6-4-2 2 8 10 14-8V6l-2-2z"/>
      <path d="M22 4L10 16M4 14l4 2"/>
    </svg>
  ),
  'Postman': (
    <svg viewBox={`0 0 ${S} ${S}`} {...base}>
      <circle cx="16" cy="16" r="12"/>
      <path d="M16 16l6-6"/>
      <circle cx="16" cy="16" r="3"/>
      <path d="M10 22l3-3"/>
    </svg>
  ),
  /* ── Bases de datos ── */
  'SQLite': (
    <svg viewBox={`0 0 ${S} ${S}`} {...base}>
      <ellipse cx="16" cy="9" rx="8" ry="3.5"/>
      <path d="M8 9v14c0 2 3.6 3.5 8 3.5s8-1.5 8-3.5V9"/>
      <path d="M8 16c0 2 3.6 3.5 8 3.5s8-1.5 8-3.5"/>
    </svg>
  ),
  'MySQL': (
    <svg viewBox={`0 0 ${S} ${S}`} {...base}>
      <ellipse cx="16" cy="9" rx="10" ry="4"/>
      <path d="M6 9v14c0 2.2 4.5 4 10 4s10-1.8 10-4V9"/>
      <path d="M6 16c0 2.2 4.5 4 10 4s10-1.8 10-4"/>
    </svg>
  ),
  'PostgreSQL': (
    <svg viewBox={`0 0 ${S} ${S}`} {...base}>
      <ellipse cx="16" cy="10" rx="9" ry="4"/>
      <path d="M7 10v8c0 2 4 4 9 4s9-2 9-4v-8"/>
      <path d="M7 14c0 2 4 4 9 4s9-2 9-4"/>
      <path d="M22 10c1-3 3-5 3-5s-1 4 0 7"/>
    </svg>
  ),
  /* ── Infraestructura / redes ── */
  'Redes': (
    <svg viewBox={`0 0 ${S} ${S}`} {...base}>
      <circle cx="16" cy="6" r="3"/>
      <circle cx="6" cy="26" r="3"/>
      <circle cx="26" cy="26" r="3"/>
      <path d="M16 9v5M16 14l-7 9M16 14l7 9"/>
    </svg>
  ),
  'Hardware': (
    <svg viewBox={`0 0 ${S} ${S}`} {...base}>
      <rect x="4" y="8" width="24" height="16" rx="2"/>
      <path d="M9 8V5M13 8V5M19 8V5M23 8V5"/>
      <path d="M9 24v3M13 24v3M19 24v3M23 24v3"/>
      <rect x="9" y="12" width="14" height="8" rx="1"/>
    </svg>
  ),
  'Soporte Técnico': (
    <svg viewBox={`0 0 ${S} ${S}`} {...base}>
      <circle cx="16" cy="16" r="12"/>
      <path d="M12 12a4 4 0 018 1c0 3-4 4-4 7"/>
      <circle cx="16" cy="24" r="1" fill="currentColor" stroke="none"/>
    </svg>
  ),
};

/** Fallback: cuadrado con iniciales */
function FallbackIcon({ name }) {
  return (
    <svg viewBox={`0 0 ${S} ${S}`} fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="24" height="24" rx="4"/>
      <text x="16" y="21" textAnchor="middle" fontSize="10" fontWeight="700"
        fill="currentColor" stroke="none" style={{ fontFamily: 'inherit' }}>
        {name.slice(0, 2).toUpperCase()}
      </text>
    </svg>
  );
}

/**
 * size: 'sm' (tag inline) | 'md' (grid card)
 */
export default function TechBadge({ name, size = 'sm' }) {
  const icon = TECH_ICONS[name] ?? <FallbackIcon name={name} />;

  if (size === 'sm') {
    return (
      <span style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '5px',
        padding: '3px 9px 3px 6px',
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: '20px',
        fontSize: '0.72rem',
        fontWeight: 500,
        color: 'var(--text-2)',
        whiteSpace: 'nowrap',
        lineHeight: 1,
      }}>
        <span style={{ width: 14, height: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--text-1)' }}>
          {/* Clonar el SVG con tamaño 14×14 */}
          <svg
            viewBox={`0 0 ${S} ${S}`}
            width="14" height="14"
            fill="none"
            stroke="currentColor"
            strokeWidth={sw}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {icon.props.children}
          </svg>
        </span>
        {name}
      </span>
    );
  }

  /* size === 'md' — usado en Skills grid */
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.625rem',
      padding: '1.375rem 0.5rem 1.125rem',
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: '16px',
      cursor: 'default',
      transition: 'border-color 200ms ease, transform 200ms ease, box-shadow 200ms ease',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.borderColor = 'var(--accent)';
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = 'var(--shadow-md)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.borderColor = 'var(--border)';
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'none';
    }}>
      <span style={{ width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-1)' }}>
        <svg
          viewBox={`0 0 ${S} ${S}`}
          width="36" height="36"
          fill="none"
          stroke="currentColor"
          strokeWidth={sw}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {icon.props.children}
        </svg>
      </span>
      <span style={{
        fontSize: '0.7rem',
        fontWeight: 500,
        color: 'var(--text-2)',
        textAlign: 'center',
        lineHeight: 1.3,
      }}>
        {name}
      </span>
    </div>
  );
}

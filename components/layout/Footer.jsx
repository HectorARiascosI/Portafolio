'use client';

import { useLang } from '@/lib/LangProvider';

export default function Footer({ name = 'Hector Alejandro Riascos Insuasty' }) {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', padding: '2rem 0' }}>
      <div className="container-custom" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
        <p style={{ color: 'var(--text-3)' }}>© {year} {name}</p>
        <nav aria-label="Footer">
          <ul style={{ display: 'flex', gap: '1.5rem', listStyle: 'none', margin: 0, padding: 0 }}>
            {[
              { href: '#sobre-mi',    key: 'footer.about' },
              { href: '#proyectos',   key: 'footer.projects' },
              { href: '#testimonios', key: 'footer.testimonials' },
              { href: '#contacto',    key: 'footer.contact' },
            ].map(l => (
              <li key={l.href}>
                <a href={l.href} className="link-dim">{t(l.key)}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}

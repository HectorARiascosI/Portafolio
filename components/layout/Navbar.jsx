'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '@/lib/ThemeProvider';
import { useLang } from '@/lib/LangProvider';

function SunIcon() {
  return (
    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="5"/>
      <path strokeLinecap="round" strokeWidth={2} d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
      <circle cx="12" cy="12" r="10"/>
      <path strokeLinecap="round" d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
    </svg>
  );
}

export default function Navbar({ name = 'Portfolio' }) {
  const { theme, toggle: toggleTheme } = useTheme();
  const { lang, toggle: toggleLang, t } = useLang();

  const navLinks = [
    { href: '#sobre-mi',    label: t('nav.about') },
    { href: '#habilidades', label: t('nav.skills') },
    { href: '#proyectos',   label: t('nav.projects') },
    { href: '#experiencia', label: t('nav.experience') },
    { href: '#contacto',    label: t('nav.contact') },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const [desktop, setDesktop]   = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    setDesktop(mq.matches);
    const onMQ = (e) => { setDesktop(e.matches); if (e.matches) setOpen(false); };
    mq.addEventListener('change', onMQ);
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      mq.removeEventListener('change', onMQ);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const navBg     = scrolled || open ? 'var(--surface)' : 'transparent';
  const navBorder = scrolled || open ? '1px solid var(--border)' : '1px solid transparent';

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      transition: 'background 300ms ease, border-color 300ms ease',
      background: navBg,
      backdropFilter: scrolled || open ? 'blur(16px) saturate(180%)' : 'none',
      WebkitBackdropFilter: scrolled || open ? 'blur(16px) saturate(180%)' : 'none',
      borderBottom: navBorder,
    }}>
      <div className="container-custom" style={{
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', height: '60px', gap: '1rem',
      }}>

        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', flexShrink: 0 }}>
          <span style={{
            width: '30px', height: '30px', borderRadius: '8px',
            background: 'var(--accent)', color: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '0.85rem', fontWeight: 700, letterSpacing: '-0.02em', flexShrink: 0,
          }}>
            {name.split(' ').map(w => w[0]).slice(0, 2).join('')}
          </span>
          <span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-1)', letterSpacing: '-0.02em' }}>
            Hector<span style={{ color: 'var(--text-3)', fontWeight: 400 }}> Riascos</span>
          </span>
        </a>

        {/* Desktop nav */}
        {desktop && (
          <nav aria-label="Navegación principal" style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <ul style={{ display: 'flex', alignItems: 'center', gap: '1.75rem', listStyle: 'none', margin: 0, padding: 0 }}>
              {navLinks.map(l => (
                <li key={l.href}><a href={l.href} className="nav-link">{l.label}</a></li>
              ))}
            </ul>
          </nav>
        )}

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>

          {/* Lang toggle */}
          <button
            onClick={toggleLang}
            className="theme-toggle"
            aria-label={t('lang.toggle_label')}
            title={t('lang.toggle_label')}
            style={{ gap: '4px', width: 'auto', padding: '0 10px', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.04em' }}>
            <GlobeIcon />
            {lang === 'es' ? 'EN' : 'ES'}
          </button>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label={theme === 'dark' ? t('theme.to_light') : t('theme.to_dark')}
            title={theme === 'dark' ? t('theme.light') : t('theme.dark')}>
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>

          {/* Desktop CTA */}
          {desktop && (
            <a href="#contacto" className="btn btn-primary" style={{ padding: '7px 16px' }}>
              {t('nav.cta')}
            </a>
          )}

          {/* Mobile hamburger */}
          {!desktop && (
            <button
              onClick={() => setOpen(o => !o)}
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={open}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                color: 'var(--text-2)', padding: '6px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
              <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {open
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12"/>
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16"/>
                }
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Mobile drawer */}
      {!desktop && open && (
        <nav aria-label="Navegación móvil" style={{
          borderTop: '1px solid var(--border)',
          background: 'var(--surface)',
          padding: '1.25rem 1.5rem 1.5rem',
        }}>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {navLinks.map(l => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} style={{
                  display: 'block', padding: '0.75rem 0',
                  fontSize: '1rem', fontWeight: 400,
                  color: 'var(--text-2)', textDecoration: 'none',
                  borderBottom: '1px solid var(--border)',
                  transition: 'color 150ms ease',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--text-1)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-2)'}>
                  {l.label}
                </a>
              </li>
            ))}
            <li style={{ paddingTop: '1rem' }}>
              <a href="#contacto" onClick={() => setOpen(false)}
                className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                {t('nav.cta')}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

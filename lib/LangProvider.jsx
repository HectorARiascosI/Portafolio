'use client';

import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { translations, resolve } from './i18n';

const LangContext = createContext({ lang: 'es', toggle: () => {}, t: () => '' });

export function LangProvider({ children }) {
  const [lang, setLang] = useState('es');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('lang');
      if (saved === 'en' || saved === 'es') {
        setLang(saved);
        document.documentElement.setAttribute('lang', saved);
      }
    } catch {}
  }, []);

  const toggle = useCallback(() => {
    setLang(prev => {
      const next = prev === 'es' ? 'en' : 'es';
      try { localStorage.setItem('lang', next); } catch {}
      document.documentElement.setAttribute('lang', next);
      return next;
    });
  }, []);

  const t = useCallback((key) => resolve(translations[lang], key), [lang]);

  return (
    <LangContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);

'use client';

import { useState } from 'react';
import { useReveal } from '@/lib/useReveal';

export default function Contact({ contact = {}, profile = {} }) {
  const { ref, visible } = useReveal();
  const email    = profile.email    ?? contact.email    ?? 'hectorariascos6.6@gmail.com';
  const location = profile.location ?? contact.location ?? 'Pasto, Colombia';
  // datos de contacto reales
  const [form, setForm]       = useState({ name: '', email: '', message: '' });
  const [errors, setErrors]   = useState({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus]   = useState(null);

  const onChange = e => {
    const { name, value } = e.target;
    setForm(p => ({ ...p, [name]: value }));
    if (errors[name]) setErrors(p => ({ ...p, [name]: '' }));
  };

  const onSubmit = async e => {
    e.preventDefault();
    setLoading(true); setErrors({}); setStatus(null);
    try {
      const res  = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      const data = await res.json();
      if (res.ok) { setStatus({ ok: true, msg: '¡Mensaje enviado! Te responderé pronto.' }); setForm({ name: '', email: '', message: '' }); }
      else { if (data.errors) setErrors(data.errors); else setStatus({ ok: false, msg: data.message }); }
    } catch { setStatus({ ok: false, msg: 'Error inesperado. Intenta de nuevo.' }); }
    finally { setLoading(false); }
  };

  const inputBase = {
    width: '100%', padding: '10px 14px',
    background: 'var(--surface-2)',
    borderRadius: 'var(--radius-md)',
    color: 'var(--text-1)', fontSize: '0.875rem',
    outline: 'none', fontFamily: 'inherit',
    transition: 'border-color 150ms ease',
  };

  return (
    <section id="contacto" aria-label="Contacto"
      style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}
      className="section-pad">
      <div className="container-custom" ref={ref}>

        <div className={`reveal ${visible ? 'visible' : ''}`} style={{ marginBottom: '3.5rem' }}>
          <p className="t-label" style={{ marginBottom: '0.75rem' }}>Contacto</p>
          <h2 className="t-heading">Hablemos</h2>
          <p className="t-body" style={{ marginTop: '0.75rem', maxWidth: '400px' }}>
            Disponible para prácticas, proyectos y colaboraciones. Te respondo en menos de 24 horas.
          </p>
        </div>

        <div className="grid-contact">

          {/* Info */}
          <div className={`reveal-left ${visible ? 'visible' : ''} delay-1`}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            {[
              { label: 'Email',          value: email, href: `mailto:${email}` },
              { label: 'Teléfono',       value: profile.phone ?? '3226679615', href: `tel:${profile.phone ?? '3226679615'}` },
              { label: 'Ubicación',      value: location },
              { label: 'Disponibilidad', value: 'Abierto a oportunidades' },
            ].map(item => (
              <div key={item.label}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: '4px' }}>
                  {item.label}
                </p>
                {item.href
                  ? <a href={item.href} className="link-muted" style={{ fontSize: '0.9375rem', wordBreak: 'break-all' }}>{item.value}</a>
                  : <p style={{ fontSize: '0.9375rem', color: 'var(--text-2)' }}>{item.value}</p>
                }
              </div>
            ))}
          </div>

          {/* Formulario */}
          <form onSubmit={onSubmit}
            className={`reveal ${visible ? 'visible' : ''} delay-2`}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.125rem' }}>

            {[
              { id: 'name',  label: 'Nombre',  type: 'text',  placeholder: 'Nombre completo' },
              { id: 'email', label: 'Email',   type: 'email', placeholder: 'tu@email.com' },
            ].map(f => (
              <div key={f.id}>
                <label htmlFor={f.id} style={{ display: 'block', fontSize: '0.6875rem', fontWeight: 600, color: 'var(--text-3)', letterSpacing: '0.09em', textTransform: 'uppercase', marginBottom: '6px' }}>
                  {f.label} <span style={{ color: 'var(--red)', opacity: 0.7 }}>*</span>
                </label>
                <input id={f.id} name={f.id} type={f.type} value={form[f.id]}
                  onChange={onChange} required placeholder={f.placeholder}
                  style={{ ...inputBase, border: `1px solid ${errors[f.id] ? 'rgba(239,68,68,0.4)' : 'var(--border-2)'}` }} />
                {errors[f.id] && <p style={{ marginTop: '4px', fontSize: '0.75rem', color: 'var(--red)' }}>{errors[f.id]}</p>}
              </div>
            ))}

            <div>
              <label htmlFor="message" style={{ display: 'block', fontSize: '0.6875rem', fontWeight: 600, color: 'var(--text-3)', letterSpacing: '0.09em', textTransform: 'uppercase', marginBottom: '6px' }}>
              Mensaje <span style={{ color: 'var(--red)', opacity: 0.7 }}>*</span>
              </label>
              <textarea id="message" name="message" value={form.message} onChange={onChange}
                required rows={5} placeholder="Cuéntame sobre tu proyecto o propuesta..."
                style={{ ...inputBase, border: `1px solid ${errors.message ? 'rgba(239,68,68,0.4)' : 'var(--border-2)'}`, resize: 'vertical', minHeight: '120px' }} />
              {errors.message && <p style={{ marginTop: '4px', fontSize: '0.75rem', color: 'var(--red)' }}>{errors.message}</p>}
            </div>

            <button type="submit" disabled={loading} className="btn btn-primary"
              style={{ justifyContent: 'center', padding: '11px 20px', cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.6 : 1 }}>
              {loading ? 'Enviando...' : 'Enviar mensaje'}
              {!loading && (
                <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              )}
            </button>

            {status && (
              <div role="alert" style={{
                padding: '12px 16px', borderRadius: 'var(--radius-md)', fontSize: '0.875rem',
                background: status.ok ? 'rgba(34,197,94,0.08)' : 'rgba(239,68,68,0.08)',
                border: `1px solid ${status.ok ? 'rgba(34,197,94,0.25)' : 'rgba(239,68,68,0.25)'}`,
                color: status.ok ? 'var(--green)' : 'var(--red)',
              }}>
                {status.msg}
              </div>
            )}
          </form>

        </div>
      </div>
    </section>
  );
}

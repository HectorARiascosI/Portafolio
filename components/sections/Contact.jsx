'use client';

import { useState } from 'react';
import { useReveal } from '@/lib/useReveal';
import { useLang } from '@/lib/LangProvider';

export default function Contact({ contact = {}, profile = {} }) {
  const { ref, visible } = useReveal({ threshold: 0.06 });
  const { t } = useLang();

  const email    = profile.email    ?? contact.email    ?? 'hectorariascos6.6@gmail.com';
  const location = profile.location ?? contact.location ?? 'Pasto, Colombia';

  const [form, setForm]       = useState({ name: '', email: '', message: '' });
  const [errors, setErrors]   = useState({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus]   = useState(null);

  const onChange = e => {
    const { name, value } = e.target;
    setForm(p => ({ ...p, [name]: value }));
    if (errors[name]) setErrors(p => ({ ...p, [name]: '' }));
  };

  const validateClient = () => {
    const errs = {};
    const n = form.name.trim();
    const em = form.email.trim();
    const msg = form.message.trim();
    const hasRealLetters = (str) => /[a-záéíóúüñA-ZÁÉÍÓÚÜÑ]{2,}/.test(str);
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!n || n.length < 2)           errs.name = t('contact.errors.name');
    else if (!hasRealLetters(n))      errs.name = t('contact.errors.name_inv');
    if (!em || !emailRe.test(em))     errs.email = t('contact.errors.email');
    if (!msg || msg.length < 20)      errs.message = t('contact.errors.msg_len');
    else if (!hasRealLetters(msg))    errs.message = t('contact.errors.msg_inv');

    return errs;
  };

  const onSubmit = async e => {
    e.preventDefault();
    const clientErrors = validateClient();
    if (Object.keys(clientErrors).length > 0) { setErrors(clientErrors); return; }
    setLoading(true); setErrors({}); setStatus(null);
    try {
      const res  = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      const data = await res.json();
      if (res.ok) {
        setStatus({ ok: true, msg: t('contact.form.success') });
        setForm({ name: '', email: '', message: '' });
      } else {
        if (data.errors) setErrors(data.errors);
        else setStatus({ ok: false, msg: data.message });
      }
    } catch {
      setStatus({ ok: false, msg: t('contact.form.error') });
    } finally {
      setLoading(false);
    }
  };

  const inputBase = {
    width: '100%', padding: '10px 14px',
    background: 'var(--surface-2)',
    borderRadius: 'var(--radius-md)',
    color: 'var(--text-1)', fontSize: '1rem',
    outline: 'none', fontFamily: 'inherit',
    transition: 'border-color 150ms ease',
  };

  const infoItems = [
    { label: t('contact.info.email'),        value: email,                              href: `mailto:${email}` },
    { label: t('contact.info.phone'),        value: profile.phone ?? '+57 322 667 9615', href: `tel:${profile.phone ?? '+573226679615'}` },
    { label: t('contact.info.location'),     value: location },
    { label: t('contact.info.availability'), value: t('contact.info.avail_val') },
  ];

  const formFields = [
    { id: 'name',  label: t('contact.form.name'),  type: 'text',  placeholder: t('contact.form.name_ph') },
    { id: 'email', label: t('contact.form.email'), type: 'email', placeholder: t('contact.form.email_ph') },
  ];

  return (
    <section id="contacto" aria-label={t('contact.label')}
      style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}
      className="section-pad">
      <div className="container-custom" ref={ref}>

        <div className={`reveal ${visible ? 'visible' : ''}`} style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <p className="t-label" style={{ marginBottom: '0.75rem' }}>{t('contact.label')}</p>
          <h2 className="t-heading">{t('contact.heading')}</h2>
          <p className="t-body" style={{ marginTop: '0.75rem', maxWidth: '480px', margin: '0.75rem auto 0' }}>
            {t('contact.sub')}
          </p>
        </div>

        <div className="grid-contact">

          {/* Info */}
          <div className={`reveal-left ${visible ? 'visible' : ''} delay-1`}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            {infoItems.map(item => (
              <div key={item.label} style={{ minWidth: 0 }}>
                <p className="t-field-label" style={{ marginBottom: '4px' }}>{item.label}</p>
                {item.href
                  ? <a href={item.href} className="link-muted" style={{ overflowWrap: 'anywhere', wordBreak: 'break-all', display: 'block', fontSize: '0.9rem' }}>{item.value}</a>
                  : <p style={{ color: 'var(--text-2)' }}>{item.value}</p>
                }
              </div>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={onSubmit}
            className={`reveal ${visible ? 'visible' : ''} delay-2`}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.125rem' }}>

            {formFields.map(f => (
              <div key={f.id}>
                <label htmlFor={f.id} className="t-field-label" style={{ display: 'block', marginBottom: '6px' }}>
                  {f.label} <span style={{ color: 'var(--red)', opacity: 0.7 }}>*</span>
                </label>
                <input id={f.id} name={f.id} type={f.type} value={form[f.id]}
                  onChange={onChange} required placeholder={f.placeholder}
                  style={{ ...inputBase, border: `1px solid ${errors[f.id] ? 'rgba(239,68,68,0.4)' : 'var(--border-2)'}` }} />
                {errors[f.id] && <p style={{ marginTop: '4px', color: 'var(--red)' }}>{errors[f.id]}</p>}
              </div>
            ))}

            <div>
              <label htmlFor="message" className="t-field-label" style={{ display: 'block', marginBottom: '6px' }}>
                {t('contact.form.message')} <span style={{ color: 'var(--red)', opacity: 0.7 }}>*</span>
              </label>
              <textarea id="message" name="message" value={form.message} onChange={onChange}
                required rows={5} placeholder={t('contact.form.message_ph')}
                style={{ ...inputBase, border: `1px solid ${errors.message ? 'rgba(239,68,68,0.4)' : 'var(--border-2)'}`, resize: 'vertical', minHeight: '120px' }} />
              {errors.message && <p style={{ marginTop: '4px', color: 'var(--red)' }}>{errors.message}</p>}
            </div>

            <button type="submit" disabled={loading} className="btn btn-primary"
              style={{ justifyContent: 'center', padding: '11px 20px', cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.6 : 1 }}>
              {loading ? t('contact.form.sending') : t('contact.form.send')}
              {!loading && (
                <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              )}
            </button>

            {status && (
              <div role="alert" style={{
                padding: '12px 16px', borderRadius: 'var(--radius-md)',
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

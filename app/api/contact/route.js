import { NextResponse } from 'next/server';

/* ── Rate limiting en memoria ── */
const rateMap = new Map();
const WINDOW  = 60_000; // 1 minuto
const MAX_REQ = 2; // máximo 2 intentos por minuto

function isRateLimited(ip) {
  const now  = Date.now();
  const hits = (rateMap.get(ip) || []).filter(t => now - t < WINDOW);
  if (hits.length >= MAX_REQ) return true;
  hits.push(now);
  rateMap.set(ip, hits);
  return false;
}

/* ── Validación estricta ── */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SPAM_RE  = /^[\s\W]*$/; // solo espacios o caracteres raros

function validate({ name, email, message }) {
  const errors = {};

  const n = (name || '').trim();
  if (!n || n.length < 2)   errors.name = 'El nombre debe tener al menos 2 caracteres.';
  if (n.length > 100)       errors.name = 'El nombre es demasiado largo.';
  if (SPAM_RE.test(n))      errors.name = 'Por favor ingresa un nombre válido.';

  const e = (email || '').trim();
  if (!e || !EMAIL_RE.test(e)) errors.email = 'Ingresa un correo electrónico válido.';

  const m = (message || '').trim();
  if (!m || m.length < 20)  errors.message = 'El mensaje debe tener al menos 20 caracteres.';
  if (m.length > 2000)      errors.message = 'El mensaje no puede superar los 2000 caracteres.';
  if (SPAM_RE.test(m))      errors.message = 'Por favor escribe un mensaje real.';

  return { ok: Object.keys(errors).length === 0, errors };
}

function sanitize(str) {
  return (str || '').trim().replace(/[<>]/g, '').slice(0, 2000);
}

/* ── Envío de email ── */
async function sendEmail({ name, email, message }) {
  // Si hay RESEND_API_KEY configurada en Vercel, usa Resend
  if (process.env.RESEND_API_KEY) {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from:    'Portafolio <onboarding@resend.dev>',
        to:      ['hectorariascos6.6@gmail.com'],
        subject: `Nuevo mensaje de contacto — ${name}`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px">
            <h2 style="color:#6366f1;margin-bottom:8px">Nuevo mensaje desde tu portafolio</h2>
            <hr style="border:none;border-top:1px solid #e5e7eb;margin-bottom:24px"/>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Mensaje:</strong></p>
            <div style="background:#f9fafb;border-left:4px solid #6366f1;padding:16px;border-radius:4px;margin-top:8px">
              ${message.replace(/\n/g, '<br/>')}
            </div>
            <hr style="border:none;border-top:1px solid #e5e7eb;margin-top:24px"/>
            <p style="color:#9ca3af;font-size:12px">Enviado desde hectorriascos.vercel.app</p>
          </div>
        `,
      }),
    });
    if (!res.ok) throw new Error('Resend error: ' + res.status);
    return;
  }

  // Sin API key: solo log (en desarrollo)
  console.log('📧 Mensaje de contacto recibido:');
  console.log('  Nombre:', name);
  console.log('  Email:', email);
  console.log('  Mensaje:', message);
}

/* ── Handler POST ── */
export async function POST(request) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 'local';
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, message: 'Demasiados intentos. Espera un momento e intenta de nuevo.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { ok, errors } = validate(body);
    if (!ok) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    const data = {
      name:    sanitize(body.name),
      email:   sanitize(body.email),
      message: sanitize(body.message),
    };

    await sendEmail(data);

    return NextResponse.json(
      { success: true, message: '¡Mensaje enviado! Te responderé pronto.' },
      { status: 200 }
    );
  } catch (err) {
    console.error('Contact error:', err);
    return NextResponse.json(
      { success: false, message: 'Error al enviar. Intenta de nuevo o escríbeme directamente.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
}

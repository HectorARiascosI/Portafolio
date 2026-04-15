import { NextResponse } from 'next/server';
import { validateContact } from '@/lib/validateContact';

/* ── Rate limiting en memoria ── */
const rateMap = new Map();
const WINDOW  = 60_000; // 1 minuto
const MAX_REQ = 2;      // máximo 2 envíos por minuto por IP

function isRateLimited(ip) {
  const now  = Date.now();
  const hits = (rateMap.get(ip) || []).filter(t => now - t < WINDOW);
  if (hits.length >= MAX_REQ) return true;
  hits.push(now);
  rateMap.set(ip, hits);
  return false;
}

/* ── Sanitización final antes de enviar ── */
function sanitizeHtml(str) {
  return (str ?? '').replace(/[<>]/g, '').slice(0, 2000);
}

/* ── Envío de email ── */
async function sendEmail({ name, email, message }) {
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
        subject: `Mensaje desde tu portafolio — ${name}`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px">
            <h2 style="color:#6366f1;margin-bottom:8px">Nuevo mensaje desde tu portafolio</h2>
            <hr style="border:none;border-top:1px solid #e5e7eb;margin-bottom:24px"/>
            <p><strong>Nombre:</strong> ${sanitizeHtml(name)}</p>
            <p><strong>Email:</strong> <a href="mailto:${sanitizeHtml(email)}">${sanitizeHtml(email)}</a></p>
            <p><strong>Mensaje:</strong></p>
            <div style="background:#f9fafb;border-left:4px solid #6366f1;padding:16px;border-radius:4px;margin-top:8px;white-space:pre-wrap">
              ${sanitizeHtml(message)}
            </div>
            <hr style="border:none;border-top:1px solid #e5e7eb;margin-top:24px"/>
            <p style="color:#9ca3af;font-size:12px">Enviado desde el portafolio de Hector Riascos</p>
          </div>
        `,
      }),
    });
    if (!res.ok) throw new Error('Resend error: ' + res.status);
    return;
  }

  // Sin API key: log en desarrollo
  console.log('📧 Mensaje de contacto recibido:');
  console.log('  Nombre:', name);
  console.log('  Email:', email);
  console.log('  Mensaje:', message);
}

/* ── Handler POST ── */
export async function POST(request) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'local';

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, message: 'Demasiados intentos. Espera un momento e intenta de nuevo.' },
        { status: 429 }
      );
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ success: false, message: 'Solicitud inválida.' }, { status: 400 });
    }

    // Validación con la misma lógica que el cliente
    const { ok, errors, normalized } = validateContact(body);
    if (!ok) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    await sendEmail(normalized);

    return NextResponse.json(
      { success: true, message: 'Mensaje enviado correctamente.' },
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

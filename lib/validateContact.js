/**
 * Validación de formulario de contacto — compartida entre cliente y servidor.
 * Aplica todas las reglas de sanitización y calidad de contenido para 2026.
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Normaliza un string:
 * - Elimina espacios al inicio y al final
 * - Colapsa múltiples espacios consecutivos en uno solo
 * - Colapsa más de 2 saltos de línea consecutivos en máximo 1
 * - Elimina líneas que solo tienen espacios
 */
export function normalize(str) {
  return (str ?? '')
    .replace(/[^\S\n]+/g, ' ')          // múltiples espacios → 1 espacio (sin tocar \n)
    .replace(/\n{3,}/g, '\n\n')         // más de 2 saltos → máximo 2
    .replace(/^[ \t]+|[ \t]+$/gm, '')   // espacios al inicio/fin de cada línea
    .trim();
}

/**
 * Cuenta palabras reales (secuencias de ≥2 letras).
 * "a b c d" → 0 palabras reales. "hola mundo" → 2 palabras reales.
 */
function countRealWords(str) {
  const matches = str.match(/[a-záéíóúüñA-ZÁÉÍÓÚÜÑA-Za-z]{2,}/g);
  return matches ? matches.length : 0;
}

/**
 * Detecta si el string es básicamente ruido:
 * solo espacios, símbolos, números repetidos o teclas mash.
 */
function isGibberish(str) {
  // Más del 60% del contenido son caracteres no-letra
  const letters = (str.match(/[a-záéíóúüñA-ZÁÉÍÓÚÜÑA-Za-z]/g) || []).length;
  const total   = str.replace(/\s/g, '').length;
  if (total > 0 && letters / total < 0.4) return true;

  // Detecta repetición de un mismo carácter (ej: "aaaaaaa", "........")
  if (/(.)\1{5,}/.test(str)) return true;

  return false;
}

/**
 * Valida los tres campos del formulario.
 * Retorna { ok: boolean, errors: { name?, email?, message? }, normalized: { name, email, message } }
 */
export function validateContact({ name, email, message }) {
  const errors = {};

  /* ── NOMBRE ── */
  const n = normalize(name);

  if (!n || n.length < 2) {
    errors.name = 'Ingresa tu nombre completo.';
  } else if (n.length > 80) {
    errors.name = 'El nombre es demasiado largo.';
  } else if (countRealWords(n) < 1) {
    errors.name = 'El nombre debe contener letras reales.';
  } else if (isGibberish(n)) {
    errors.name = 'Por favor ingresa un nombre válido.';
  }

  /* ── EMAIL ── */
  const em = (email ?? '').trim().toLowerCase();

  if (!em) {
    errors.email = 'El correo electrónico es obligatorio.';
  } else if (!EMAIL_RE.test(em)) {
    errors.email = 'Ingresa un correo electrónico válido.';
  } else if (em.length > 254) {
    errors.email = 'El correo electrónico es demasiado largo.';
  }

  /* ── MENSAJE ── */
  const msg = normalize(message);

  if (!msg || msg.length < 20) {
    errors.message = 'El mensaje debe tener al menos 20 caracteres.';
  } else if (msg.length > 2000) {
    errors.message = 'El mensaje no puede superar los 2000 caracteres.';
  } else if (countRealWords(msg) < 3) {
    errors.message = 'Escribe al menos 3 palabras reales en tu mensaje.';
  } else if (isGibberish(msg)) {
    errors.message = 'Por favor escribe un mensaje con contenido real.';
  }

  return {
    ok: Object.keys(errors).length === 0,
    errors,
    normalized: { name: n, email: em, message: msg },
  };
}

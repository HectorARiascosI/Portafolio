/**
 * Diccionario de traducciones ES / EN
 * Uso: const { t } = useLang();  →  t('nav.about')
 */
export const translations = {
  es: {
    nav: {
      about:       'Sobre mí',
      skills:      'Habilidades',
      projects:    'Proyectos',
      experience:  'Experiencia',
      contact:     'Contacto',
      cta:         'Contactar',
    },
    hero: {
      label:       'Ingeniería de Software',
      available:   'Disponible',
      cta_projects:'Ver proyectos',
      cta_cv:      'CV',
    },
    about: {
      section_label: 'Sobre mí',
      heading:       'Sobre mí',
      stats: {
        exp:         'Años de exp.',
        projects:    'Proyectos',
        semester:    'Semestre',
        tech:        'Tecnologías',
      },
      info: {
        location:    'Ubicación',
        email:       'Email',
        phone:       'Teléfono',
        languages:   'Idiomas',
        status:      'Estado',
        education:   'Educación',
        status_val:  'Disponible para oportunidades',
        langs_val:   'Español (nativo) · Inglés B1',
        edu_val:     'Ing. de Software — UCC · 2024–Presente (5° semestre)',
      },
    },
    skills: {
      label:   'Stack técnico',
      heading: 'Habilidades',
      sub:     'Herramientas y lenguajes con los que construyo soluciones reales.',
    },
    projects: {
      label:    'Proyectos',
      heading:  'Proyectos destacados',
      github:   'Ver repositorios en GitHub',
      others:   'Otros proyectos',
    },
    testimonials: {
      label:   'Testimonios',
      heading: 'Opiniones de quienes me conocen',
      sub:     'Personas con quienes he trabajado y estudiado comparten su experiencia.',
    },
    experience: {
      label:   'Experiencia',
      heading: 'Trayectoria profesional',
      ongoing: 'En curso',
      types: {
        work:      'Trabajo',
        education: 'Educación',
        volunteer: 'Open Source',
      },
    },
    certifications: {
      heading: 'Certificaciones',
    },
    contact: {
      label:        'Contacto',
      heading:      'Hablemos',
      sub:          'Disponible para prácticas, proyectos y colaboraciones. Respondo en menos de 24 horas.',
      info: {
        email:        'Email',
        phone:        'Teléfono',
        location:     'Ubicación',
        availability: 'Disponibilidad',
        avail_val:    'Abierto a oportunidades',
      },
      form: {
        name:         'Nombre',
        name_ph:      'Nombre completo',
        email:        'Email',
        email_ph:     'tu@email.com',
        message:      'Mensaje',
        message_ph:   'Escribe tu mensaje aquí...',
        send:         'Enviar mensaje',
        sending:      'Enviando...',
        success:      '¡Mensaje enviado! Te responderé pronto.',
        error:        'Error inesperado. Intenta de nuevo.',
      },
      errors: {
        name:    'Ingresa tu nombre completo.',
        name_inv:'El nombre debe contener letras reales.',
        email:   'Ingresa un correo electrónico válido.',
        msg_len: 'El mensaje debe tener al menos 20 caracteres.',
        msg_inv: 'Escribe un mensaje con palabras reales.',
      },
    },
    footer: {
      about:        'Sobre mí',
      projects:     'Proyectos',
      testimonials: 'Testimonios',
      contact:      'Contacto',
    },
    theme: {
      to_light: 'Cambiar a tema claro',
      to_dark:  'Cambiar a tema oscuro',
      light:    'Tema claro',
      dark:     'Tema oscuro',
    },
    lang: {
      toggle_label: 'Switch to English',
      current:      'ES',
    },
  },

  en: {
    nav: {
      about:       'About',
      skills:      'Skills',
      projects:    'Projects',
      experience:  'Experience',
      contact:     'Contact',
      cta:         'Contact me',
    },
    hero: {
      label:       'Software Engineering',
      available:   'Available',
      cta_projects:'View projects',
      cta_cv:      'Resume',
    },
    about: {
      section_label: 'About me',
      heading:       'About me',
      stats: {
        exp:         'Years of exp.',
        projects:    'Projects',
        semester:    'Semester',
        tech:        'Technologies',
      },
      info: {
        location:    'Location',
        email:       'Email',
        phone:       'Phone',
        languages:   'Languages',
        status:      'Status',
        education:   'Education',
        status_val:  'Available for opportunities',
        langs_val:   'Spanish (native) · English B1',
        edu_val:     'Software Eng. — UCC · 2024–Present (5th semester)',
      },
    },
    skills: {
      label:   'Tech stack',
      heading: 'Skills',
      sub:     'Tools and languages I use to build real solutions.',
    },
    projects: {
      label:    'Projects',
      heading:  'Featured projects',
      github:   'View repositories on GitHub',
      others:   'Other projects',
    },
    testimonials: {
      label:   'Testimonials',
      heading: 'What people say about me',
      sub:     'People I have worked and studied with share their experience.',
    },
    experience: {
      label:   'Experience',
      heading: 'Professional background',
      ongoing: 'Ongoing',
      types: {
        work:      'Work',
        education: 'Education',
        volunteer: 'Open Source',
      },
    },
    certifications: {
      heading: 'Certifications',
    },
    contact: {
      label:        'Contact',
      heading:      "Let's talk",
      sub:          'Available for internships, projects and collaborations. I reply within 24 hours.',
      info: {
        email:        'Email',
        phone:        'Phone',
        location:     'Location',
        availability: 'Availability',
        avail_val:    'Open to opportunities',
      },
      form: {
        name:         'Name',
        name_ph:      'Full name',
        email:        'Email',
        email_ph:     'you@email.com',
        message:      'Message',
        message_ph:   'Write your message here...',
        send:         'Send message',
        sending:      'Sending...',
        success:      'Message sent! I will get back to you soon.',
        error:        'Unexpected error. Please try again.',
      },
      errors: {
        name:    'Please enter your full name.',
        name_inv:'Name must contain real letters.',
        email:   'Please enter a valid email address.',
        msg_len: 'Message must be at least 20 characters.',
        msg_inv: 'Please write a message with real words.',
      },
    },
    footer: {
      about:        'About',
      projects:     'Projects',
      testimonials: 'Testimonials',
      contact:      'Contact',
    },
    theme: {
      to_light: 'Switch to light theme',
      to_dark:  'Switch to dark theme',
      light:    'Light theme',
      dark:     'Dark theme',
    },
    lang: {
      toggle_label: 'Cambiar a Español',
      current:      'EN',
    },
  },
};

/**
 * Resuelve una clave anidada tipo 'nav.about' en el diccionario
 */
export function resolve(dict, key) {
  return key.split('.').reduce((o, k) => (o ? o[k] : key), dict) ?? key;
}

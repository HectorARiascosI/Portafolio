import Navbar          from '@/components/layout/Navbar';
import Footer          from '@/components/layout/Footer';
import Hero            from '@/components/sections/Hero';
import About           from '@/components/sections/About';
import Skills          from '@/components/sections/Skills';
import Projects        from '@/components/sections/Projects';
import Testimonials    from '@/components/sections/Testimonials';
import Experience      from '@/components/sections/Experience';
import Certifications  from '@/components/sections/Certifications';
import Contact         from '@/components/sections/Contact';
import {
  getProfile,
  getProjects,
  getSkills,
  getExperience,
  getTestimonials,
  getCertifications,
} from '@/lib/content';

export default function HomePage() {
  const profile        = getProfile();
  const projects       = getProjects();
  const skills         = getSkills();
  const experience     = getExperience();
  const testimonials   = getTestimonials();
  const certifications = getCertifications();

  return (
    <>
      <a href="#main-content" className="skip-link">
        Saltar al contenido principal
      </a>

      <Navbar name={profile.name} />

      <main id="main-content" tabIndex="-1">
        {/* 1. Hero / Bienvenida */}
        <Hero profile={profile} />

        {/* 2. Acerca de mí */}
        <About profile={profile} />

        {/* 3. Habilidades */}
        <Skills skills={skills} />

        {/* 4. Proyectos */}
        <Projects projects={projects} />

        {/* 5. Testimonios — requerido por el docente */}
        <Testimonials testimonials={testimonials} />

        {/* 6. Experiencia académica y laboral */}
        <Experience experience={experience} />

        {/* 7. Certificaciones — sección adicional */}
        <Certifications certifications={certifications} />

        {/* 8. Contacto */}
        <Contact profile={profile} />
      </main>

      <Footer name={profile.name} />
    </>
  );
}

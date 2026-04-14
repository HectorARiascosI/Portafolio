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
  getProfile, getProjects, getSkills,
  getExperience, getTestimonials, getCertifications,
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
      {/* skip-link eliminado — causaba barra visible en la parte superior */}
      <Navbar name={profile.name} />
      <main id="main-content">
        <Hero profile={profile} />
        <About profile={profile} />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Testimonials testimonials={testimonials} />
        <Experience experience={experience} />
        <Certifications certifications={certifications} />
        <Contact profile={profile} />
      </main>
      <Footer name={profile.name} />
    </>
  );
}

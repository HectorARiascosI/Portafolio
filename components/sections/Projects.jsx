'use client';

import { useReveal } from '@/lib/useReveal';
import ProjectCard from '@/components/ui/ProjectCard';

export default function Projects({ projects = [] }) {
  const { ref, visible } = useReveal();
  const featured = projects.filter(p => p.featured);
  const others   = projects.filter(p => !p.featured);

  return (
    <section id="proyectos" aria-label="Proyectos"
      style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}
      className="section-pad">
      <div className="container-custom" ref={ref}>

        <div className={`reveal ${visible ? 'visible' : ''}`}
          style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
          <div>
            <p className="t-label" style={{ marginBottom: '0.75rem' }}>Proyectos</p>
            <h2 className="t-heading">Trabajo seleccionado</h2>
          </div>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"
            className="link-dim" style={{ fontSize: '0.875rem', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
            Ver todo en GitHub
            <svg width="13" height="13" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>

        {/* Grid principal */}
        <div className={`grid-projects-featured reveal-scale ${visible ? 'visible' : ''} delay-1`}
          role="list">
          {featured.map((project, i) => (
            <div key={project.id} role="listitem"
              className={i === 0 ? 'featured-span' : ''}
              style={{ background: 'var(--bg)' }}>
              <ProjectCard project={{ ...project, image: project.image || '', link: project.demo || project.link }} featured={i === 0} />
            </div>
          ))}
        </div>

        {/* Más proyectos */}
        {others.length > 0 && (
          <div className={`reveal ${visible ? 'visible' : ''} delay-2`} style={{ marginTop: '2.5rem' }}>
            <p style={{ fontSize: '0.6875rem', fontWeight: 600, color: 'var(--text-3)', letterSpacing: '0.09em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
              Más proyectos
            </p>
            <div className="grid-projects-others" role="list">
              {others.map(project => (
                <div key={project.id} role="listitem" style={{ background: 'var(--bg)' }}>
                  <ProjectCard project={{ ...project, image: project.image || '', link: project.demo || project.link }} />
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function ProjectCard({ project, featured = false }) {
  const { title, description, technologies, image, link, github, category, year } = project;
  const [imgError, setImgError] = useState(false);
  const inDevelopment = !link && !github;

  return (
    <article className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%', borderRadius: '0', border: 'none' }}>

      {/* Imagen */}
      <div style={{
        position: 'relative', width: '100%', aspectRatio: '16/9',
        background: 'var(--surface-2)', overflow: 'hidden', flexShrink: 0,
      }}>
        {!imgError && image ? (
          <Image
            src={image}
            alt={`Captura de ${title}`}
            fill
            style={{ objectFit: 'cover', transition: 'transform 400ms ease' }}
            sizes="(max-width: 768px) 100vw, 50vw"
            onError={() => setImgError(true)}
            unoptimized={process.env.NODE_ENV === 'development'}
          />
        ) : (
          <div style={{
            position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', gap: '8px',
          }}>
            <svg width="22" height="22" fill="none" stroke="var(--text-3)" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
            </svg>
            <span style={{ fontSize: '0.6875rem', color: 'var(--text-3)', fontWeight: 500, letterSpacing: '0.07em', textTransform: 'uppercase' }}>
              {category}
            </span>
          </div>
        )}
        {/* Año + badge en desarrollo */}
        <div style={{
          position: 'absolute', top: '10px', right: '10px',
          display: 'flex', gap: '6px', alignItems: 'center',
        }}>
          {inDevelopment && (
            <div style={{
              background: 'rgba(99,102,241,0.85)', backdropFilter: 'blur(8px)',
              borderRadius: '5px', padding: '2px 8px',
              fontSize: '0.6875rem', fontWeight: 600, color: '#fff',
            }}>
              En desarrollo
            </div>
          )}
          <div style={{
            background: 'rgba(7,7,15,0.75)', backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '5px', padding: '2px 8px',
            fontSize: '0.6875rem', fontWeight: 500, color: 'rgba(255,255,255,0.4)',
          }}>
            {year}
          </div>
        </div>
      </div>

      {/* Contenido */}
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: featured ? '1.5rem' : '1.25rem' }}>
        <p style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: '0.5rem' }}>
          {category}
        </p>

        <h3 style={{
          fontSize: featured ? '1.125rem' : '0.9375rem',
          fontWeight: 600, letterSpacing: '-0.02em',
          color: 'var(--text-1)', marginBottom: '0.625rem', lineHeight: 1.3,
        }}>
          {title}
        </h3>

        <p style={{
          fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--text-2)',
          marginBottom: '1.125rem', flex: 1,
          display: '-webkit-box', WebkitLineClamp: featured ? 4 : 3,
          WebkitBoxOrient: 'vertical', overflow: 'hidden',
        }}>
          {description}
        </p>

        {/* Tecnologías */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', marginBottom: '1.125rem' }}>
          {technologies.slice(0, featured ? 5 : 4).map(tech => (
            <span key={tech} className="tag-n">{tech}</span>
          ))}
          {technologies.length > (featured ? 5 : 4) && (
            <span className="tag-n" style={{ color: 'var(--text-3)' }}>
              +{technologies.length - (featured ? 5 : 4)}
            </span>
          )}
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: 'auto' }}>
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-primary"
              style={{ fontSize: '0.8125rem', padding: '7px 14px' }}>
              <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
              Demo
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost"
              style={{ fontSize: '0.8125rem', padding: '7px 14px' }}>
              <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Código
            </a>
          )}
          {inDevelopment && (
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '5px',
              fontSize: '0.75rem', color: 'var(--text-3)', fontStyle: 'italic',
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', display: 'inline-block', flexShrink: 0 }} />
              En desarrollo
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

import profile        from '@/data/profile.json';
import projects       from '@/data/projects.json';
import skills         from '@/data/skills.json';
import experience     from '@/data/experience.json';
import testimonials   from '@/data/testimonials.json';
import certifications from '@/data/certifications.json';

export const getProfile        = () => profile;
export const getProjects       = () => projects.projects;
export const getSkills         = () => skills.skills;
export const getExperience     = () => experience.experience;
export const getTestimonials   = () => testimonials.testimonials;
export const getCertifications = () => certifications.certifications;

import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

function Projects() {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
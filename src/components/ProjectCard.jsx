import React from 'react';

function ProjectCard({ project }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
      <p className="text-gray-700 mb-4">{project.description}</p>
      {project.link ? (
        <a 
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          View Project →
        </a>
      ) : (
        <span className="text-gray-500">{project.status}</span>
      )}
    </div>
  );
}

export default ProjectCard;
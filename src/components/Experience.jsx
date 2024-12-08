import React from 'react';

function Experience() {
  const experiences = [
    {
      title: "Java / Web Developer",
      company: "Red-i",
      location: "Cape Town, Western Cape",
      period: "August 2021 – Present",
      description: "Developed and optimized multiple SaaS applications in the property sector using Java."
    },
    {
      title: "Web Migrator and QA Tester",
      company: "University of Cape Town (UCT)",
      location: "Cape Town, Western Cape",
      period: "January 2021 – October 2023",
      description: "Conducted extensive QA testing and web migrations for over 300 websites transitioning to Drupal 9."
    }
  ];

  return (
    <section id="experience" className="py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Professional Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
            <p className="text-gray-600">{exp.company} - {exp.location}</p>
            <p className="text-gray-500 text-sm">{exp.period}</p>
            <p className="mt-2 text-gray-700">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
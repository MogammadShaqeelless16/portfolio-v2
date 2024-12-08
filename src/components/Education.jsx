import React from 'react';

function Education() {
  const education = [
    {
      degree: "National Degree in Information Science (NQF Level 7)",
      institution: "University of South Africa (UNISA)",
      status: "Current"
    },
    {
      degree: "National Diploma in Multimedia Software Development (NQF Level 6)",
      institution: "University of Western Cape",
      period: "January 2020 – February 2021"
    }
  ];

  return (
    <section id="education" className="py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Education</h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
            <p className="text-gray-600">{edu.institution}</p>
            <p className="text-gray-500">{edu.period || edu.status}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
import React from 'react';

function DesignIllustration() {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      <rect width="200" height="200" rx="10" fill="#F3F4F6" />
      <circle cx="100" cy="100" r="50" fill="#DBEAFE" />
      <path
        d="M80 100C80 88.954 88.954 80 100 80C111.046 80 120 88.954 120 100C120 111.046 111.046 120 100 120"
        stroke="#3B82F6"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M100 70V130M70 100H130"
        stroke="#3B82F6"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="100" cy="100" r="10" fill="#3B82F6" />
    </svg>
  );
}

export default DesignIllustration;</bortAction>
<boltAction type="file" filePath="src/App.jsx">import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Artwork from './components/Artwork';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <Artwork />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App;
import React from 'react';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-purple-100 font-sans scroll-smooth relative">

      {/* ✅ Top Right Navigation Bar */}
      <nav className="w-full fixed top-0 left-0 z-50 bg-white/70 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-bold text-lg text-gray-800">
            <span className="text-purple-600">KR</span> Portfolio
          </h1>
          <div className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
            {['home', 'about', 'skills', 'projects', 'contact'].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="hover:text-purple-600 transition capitalize"
              >
                {id}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ✅ Padding top to offset nav height */}
      <div className="pt-20">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

import React from 'react';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

export default function App() {
  return (
    <div className="font-sans scroll-smooth">
      <Home />
      <About />
      <Skills /> 
      <Projects /> 
     <Contact /> 
    </div>
  );
}

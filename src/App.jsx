import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import Experience from './sections/Experience';     // <--- Wajib ada
import Achievements from './sections/Achievements'; // <--- Wajib ada
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
  return (
    <main className="bg-gray-950 min-h-screen text-white">
      <Navbar />
      <Hero />
      <Skills />
      
      {/* Panggil Section Baru */}
      <Experience />
      <Achievements />
      
      <Projects />
      <Contact />
    </main>
  )
}

export default App;
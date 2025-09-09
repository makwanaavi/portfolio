import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import useLenis from './components/useLenis';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkMode');
      return saved !== null ? JSON.parse(saved) : false;
    }
    return false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  useLenis()
  return (
    <>
      <div className={`${darkMode ? 'dark' : ''} min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300`}>
        <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Hero />
        <About />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </div>
    </>
  );
}

export default App;
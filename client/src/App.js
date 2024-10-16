import React from 'react';
import './styles.css';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import { useState, useEffect } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
          setActiveSection(section);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section) => {
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
  };

  return (

    <div className="App"> 
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">SHAUN FIGUEIRO</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} onClick={() => handleNavClick('home')} >Home</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} onClick={() => handleNavClick('about')}>About Me</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`} onClick={() => handleNavClick('skills')}>Skills</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`} onClick={() => handleNavClick('projects')}>Projects</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={() => handleNavClick('contact')}>Contact</a>
              </li>
      
            </ul>
          </div>
        </div>
    </nav>

    <Home />
    <About />
    <Skills />
    <Projects />
    <Contact />
    
  </div>

  );
}

export default App;


    // <div className="App">
    //   <nav className="navbar">
    //     <ul>
    //       <li className={activeSection === 'home' ? 'active' : ''}>
    //         <button onClick={() => handleNavClick('home')}>Home</button>
    //       </li>
    //       <li className={activeSection === 'about' ? 'active' : ''}>
    //         <button onClick={() => handleNavClick('about')}>About Me</button>
    //       </li>
    //       <li className={activeSection === 'projects' ? 'active' : ''}>
    //         <button onClick={() => handleNavClick('projects')}>Projects</button>
    //       </li>
    //       <li className={activeSection === 'contact' ? 'active' : ''}>
    //         <button onClick={() => handleNavClick('contact')}>Contact</button>
    //       </li>
    //     </ul>
    //   </nav>
      
    //   <Home />
    //   <About />
    //   <Projects />
    //   <Contact />
    // </div>


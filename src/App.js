import React from 'react';
import NavBar from './scripts/NavBar.js';
import Introduction from './scripts/Intro.js';
import AboutMe from './scripts/About.js';
import Projects from './scripts/Projects.js';
import Contact from './scripts/Contacts.js';
import './App.css';

function App() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="App">
  <NavBar />
  <Introduction />
  <div className="container">
    <section id="about-me">
      <AboutMe />
    </section>
    <section id="projects">
      <Projects />
    </section>
    <section id="contact">
      <Contact />
    </section>
  </div>

  <button className="scroll-to-top" onClick={scrollToTop}>
    &uarr;
  </button>
</div>
  );
}

export default App;

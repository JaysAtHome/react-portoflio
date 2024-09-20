import React from 'react';
import '../styles/NavBar.css';

const NavBar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  
  return (
    <nav>
    <div className="navbar">
      <ul>
        <li><a onClick={() => scrollToSection('about-me')}>About Me</a></li>
        <li><a onClick={() => scrollToSection('projects')}>Projects</a></li>
        <li><a onClick={() => scrollToSection('contact')}>Contact Me</a></li>
      </ul>
    </div>
    </nav>
  );
}

export default NavBar;

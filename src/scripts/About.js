import React, {useState} from 'react';
import '../styles/About.css';
import profilePic from '../website_Objects/ID.jpg';
import hoverPic from '../website_Objects/meh.jpg';

const About = () => {
  const [imageSrc, setImageSrc] = useState(profilePic);

  const handleMouseEnter = () => {
    setImageSrc(hoverPic);
  };

  const handleMouseLeave = () => {
    setImageSrc(profilePic);
  };

  return (
    <section className="about-me" id="about">
      <h2>About Me</h2>
      <hr></hr>    
      <div className="about-container">
        <img
          src={imageSrc}
          alt="my picture"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <p><b>How's it going bro?!</b> What do you think of my portfolio? I'm a DLSL student taking the web development course!, currently studying how to use "React"
          it sure is difficult but I'm doing my best!!!</p>
      </div>
    </section>
  );
}

export default About;

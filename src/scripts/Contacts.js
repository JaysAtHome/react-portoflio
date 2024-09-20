import React, { useState } from 'react';
import '../styles/Contacts.css';
import emailImage from '../website_Objects/email.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      alert('Message sent!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <section className="contact" id="contact">
      <hr />
      <h2>Contact Me</h2>
      <hr />
      <div className="contact-container">
        <form onSubmit={handleSubmit}>
          <label>
            <b>Your Name:</b> 
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>
          <label>
            <b>Your Email:</b>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
          <label>
          <b>Your Message:</b>  
            <textarea name="message" value={formData.message} onChange={handleChange} required />
          </label>
          <button type="submit">Send</button>
        </form>
        <img src={emailImage} alt="Contact Image" />
      </div>
      <footer>
        <hr></hr>
  <div className="copy-container">
      <p>&copy; 2024 JaysPortfolio</p>
  </div>
</footer>
    </section>
  );
}

export default Contact;

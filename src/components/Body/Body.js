import React, { useEffect } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Body.css';

const Body = () => {
  useEffect(() => {
    const handleScroll = () => {
      const h1 = document.querySelector('.overlay h1');
      const p = document.querySelector('.overlay p');
      if (window.scrollY > 50) {
        h1.style.transform = 'translateY(-20px)';
        h1.style.opacity = '1';
        p.style.transform = 'translateY(-10px)';
        p.style.opacity = '1';
      } else {
        h1.style.transform = 'translateY(20px)';
        h1.style.opacity = '0.7';
        p.style.transform = 'translateY(10px)';
        p.style.opacity = '0.7';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="body" id="home">
      <div className="overlay">
        <h1>Hello, I'm Sagar Bisht</h1>
        <p>
          An Aspiring Software Developer
          <br />
          who writes clean, elegant, and efficient code.
        </p>

        <div className="social-links">
          <a href="https://www.linkedin.com/in/sagar-bisht-235b25273/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/sagarbisht1710" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="mailto:Sagarbisht171002@gmail.com">
            <FaEnvelope size={30} />
          </a>
          <a href="tel:+919910347494">
            <FaPhone size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Body;

import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 Sagar Bisht. All rights reserved.</p>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/sagar-bisht-235b25273/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={20} />
        </a>
        <a href="https://github.com/sagarbisht1710" target="_blank" rel="noopener noreferrer">
          <FaGithub size={20} />
        </a>
        <a href="mailto:Sagarbisht171002@gmail.com">
          <FaEnvelope size={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import '../components/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Manoj. All rights reserved.</p>
      <div className="social-links">
        <a href="https://github.com/De-evil" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/manoj-rajagopal/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;

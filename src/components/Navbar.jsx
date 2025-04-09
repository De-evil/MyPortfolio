import React from 'react';
import '../components/Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-logo"></div>
      <nav className="navbar-links">
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact Me</a>
      </nav>
    </header>
  );
};

export default Navbar;

// import React, { useState } from 'react';
// import '../components/Navbar.css';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <nav className="navbar">
//       <div className="logo">Manoj</div>

//       <div className="hamburger" onClick={toggleMenu}>
//         ☰
//       </div>

//       <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
//         <li><a href="#hero">Home</a></li>
//         <li><a href="#about">About</a></li>
//         <li><a href="#projects">Projects</a></li>
//         <li><a href="#contact">Contact</a></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

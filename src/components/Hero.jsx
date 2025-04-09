import React from "react";
import "../components/Hero.css";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* <video src="/Untitled.mp4" autoPlay  muted className="hero-video" /> */}
        <img src="/IMG_0911.JPG" alt="Manoj's profile" className="hero-image" />
        <h1 className="hero-heading">Hey, I'm Manoj</h1>
        <div className="hero-description">
          <p>
            I'm a Fullstack Developer specializing in the MERN stack — MongoDB,
            Express.js, React.js, and Node.js. I build seamless, responsive web
            applications from front to back, combining user-friendly interfaces
            with powerful backend functionality.
          </p>
          <p>
            I also have a foundational understanding of Java and a strong
            interest in problem-solving, which helps me approach challenges
            logically and write efficient, maintainable code. I'm passionate
            about continuous learning and love turning ideas into real-world
            solutions.
          </p>
        </div>

        <div className="hero-buttons">
          <a href="#projects" className="hero-button">
            View Projects
          </a>
          <a href="/resume/resume.pdf" download className="hero-button">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;

import React from "react";
import "../components/About.css";
const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <div className="about-content">
          <p>
            Hey! I'm <strong>Manoj</strong>, a Fullstack Developer working with
            the <strong>MERN stack</strong>. I enjoy building scalable,
            real-time web applications and crafting responsive interfaces using{" "}
            <strong>React</strong>.
          </p>
          <p>
            I'm currently focused on improving my problem-solving skills by
            actively practicing on <strong>HackerRank</strong> and{" "}
            <strong>LeetCode</strong>. I love breaking down complex problems and
            turning them into clean, functional solutions.
          </p>
          <p>
            Outside of coding, you'll find me at the gym or exploring nature — I
            believe a fresh mind fuels great code.
          </p>
          <p>
            I'm always excited to learn, build, and collaborate on meaningful
            tech projects.
          </p>
          <div className="about-tech">
            <h4>Tech Stack I Use</h4>
            <ui>
              <li>React</li>
              <li>Javascript ES6+</li>
              <li>HTML5 & CSS</li>
              <li>Node.js & Express.js</li>
              <li>MongoDB</li>
              <li>Git & GitHub</li>
            </ui>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

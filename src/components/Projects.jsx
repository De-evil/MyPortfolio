import React from "react";
import "../components/Projects.css";

const projects = [
  {
    title: "Portfolio Website",
    description:
       "This very portfolio was built with custom CSS styling. It showcases my projects, skills, and experience in a clean.",
    tech: "HTML, CSS, JavaScript",
    link: "https://incomparable-truffle-22b3af.netlify.app/",
  },
  {
    title: "Event Management System",
    description:
      "A web app to manage events with role-based authentication and real-time updates.",
    tech: "React, Node.js, Express, MongoDB",
    link: "https://musical-nougat-0a464c.netlify.app/",
  },
  {
    title: "Startup Website",
    description: "Responsive static website built for a startup using HTML, CSS, and JavaScript.",
    tech: "HTML, CSS, JavaScript",
    link: "https://celadon-croquembouche-92221d.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>
              <strong>Tech:</strong> {project.tech}
            </p>
            <a href={project.link} target="_blank" rel="noreferrer">
              Live Demo
            </a>
          </div>
        ))};
      </div>
    </section>
  );
};

export default Projects;

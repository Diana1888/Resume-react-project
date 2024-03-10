import React from "react";
import linklogo from '../../public/assets/linklogo.svg';
import '../styles/LatestProject.css';

const LatsestProjectCard = ({ project }) => {

  return (
    <div className="project-card" key={project.id}>
      <div className="project-card-item">
        <div className="project-card-content">
          <img className="project-card-img" src={project.img} alt={project.title} />
          <div className="project-card-description">
            <p className="project-card-title">{project.title}</p>
            <p className="project-card-subtitle">{project.subtitle}</p>
          </div>
        </div>
        <div className="project-link-content">
          <img src={linklogo} alt={project.title} /><a className="project-link" href={project.link}>{project.link}</a>
        </div>
      </div>
    </div>
  );
};

export default LatsestProjectCard;
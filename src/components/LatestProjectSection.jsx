import React from "react";
import '../styles/LatestProject.css';
import LatsestProjectCard from "./LatestProjectCard";
import DividerCircle from "./DividerCircle";
import mockData from "../mocks/mockdata";


const LatestProjectSection = () => {

  return (
    <div className="main-section">
      <DividerCircle />
      <div className="section-content">
        <h2 className="section-title">Latest projects</h2>
        <div className="projects-section-list">
          {mockData.projects.map((project) => {
            return (
              <LatsestProjectCard key={project.id} project={project} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LatestProjectSection;
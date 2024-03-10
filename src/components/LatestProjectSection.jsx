import React from "react";
import portfolio from '../../public/assets/portfolio.svg';
import instastaff from '../../public/assets/instastaff.svg';
import '../styles/LatestProject.css';
import LatsestProjectCard from "./LatestProjectCard";
import DividerCircle from "./DividerCircle";


const LatestProjectSection = () => {

  const projects = [
    {
      id: 1,
      img: portfolio,
      title: 'Portfolio Webpage',
      subtitle: 'Personal Portfolio webpage with resume and blog',
      link: 'https://github.com/Diana1888'
    },
    {
      id: 2,
      img: instastaff,
      title: 'Instastaff',
      subtitle: 'InstaStaff is an app that facilitates the efficient exchange of labor and work in the medical service field.',
      link: 'https://github.com/dialop/instastaff'
    }
  ];

  return (
    <div className="main-section">
      <DividerCircle />
      <div className="section-content">
        <h2 className="section-title">Latest projects</h2>
        <div className="projects-section-list">
          {projects.map((project) => {
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
import React from "react";
import git from '../../public/assets/git.svg';
import google from '../../public/assets/google.svg';
import winter from '../../public/assets/winter.svg';
import '../styles/Experience.css';
import ExperienceCard from "./ExperienceCard";
import DividerCircle from "./DividerCircle";


const ExperienceSection = () => {

  const results = [
    {
      id: 1,
      img: git,
      title: 'Github',
      role: 'Hacktoberfest Contributor',
      year: 'Oct 2021 - Nov 2021',
      description: "Contributed 8 PR's in various open source projects. Great experience and learning alot about working with Github and open-source. Connecting with developers"
    },
    {
      id: 2,
      img: winter,
      title: 'Winter of Code',
      role: 'Contributor',
      year: 'Jan 2021 - March 2021',
      description: "Overwhelming to be a part of DSC NSEC project - DSC NSEC Algorithms for Winter of Code 2020. First introduction to Git and Github. How github is used by most of the programmers in order to manage the projects."
    },
    {
      id: 3,
      img: google,
      title: 'Google',
      role: '30Days of Google Cloud',
      year: 'Oct 2020 - Dec 2020',
      description: "Hands on practice on Google Cloud Platform - the tool that powers apps like Google Search, Gmail and YouTube. As part of the program had learned the concepts like computing, application development, big data & machine learning using cloud."
    },

  ];

  return (
    <div className="main-section">
      <DividerCircle />
      <div className="section-content">
        <h2 className="section-title">Achievements</h2>
        <div className="experience-section-list">
          {results.map((result) => {
            return (
              <ExperienceCard key={result.id} result={result} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
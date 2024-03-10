import React from "react";
import ufa from '../../public/assets/ufa.svg';
import LHL from '../../public/assets/LHL.svg';
import EducationCard from "./EducationCard";
import '../styles/Education.css';
import DividerCircle from "./DividerCircle";


const EducationSection = () => {

  const schools = [
    {
      id: 1,
      img: ufa,
      title: 'Ufa State Aviation Technical University',
      degree: 'Bachelor in Applied Informatics in Economics',
      year: '2005 - 2010',
      score: '80%'
    },

    {
      id: 2,
      img: LHL,
      title: 'LightHouse Labs',
      degree: 'Web development diploma',
      year: '2023 - 2024',
      score: '100%'
    }
  ];


  return (
    <div className="main-section">
      <DividerCircle />
      <div className="section-content">
        <h2 className="section-title">Education</h2>
        <div className="education-section-list">
          {schools.map((school) => {
            return (
              <EducationCard key={school.id} school={school} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
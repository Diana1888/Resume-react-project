import React from "react";
import '../styles/Education.css';

const EducationCard = ({ school }) => {
  return (
    <div className="education-card" key={school.id}>
      <div className="education-card-item">
        <div className="education-img">
          <img className="education-card-img" src={school.img} alt={school.title} />
        </div>
        <p className="education-card-subtitle">{school.title}</p>
      </div>
      <p className="education-card-name">{school.degree}</p>
      <p className="education-card-year">{school.year}</p>
      <p className="education-card-score"><span className="percentage">Percentage</span> - {school.score}</p>
    </div>
  );
};

export default EducationCard;
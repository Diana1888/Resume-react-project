import React from "react";
import freecodecamp from '../../public/assets/freecodecamp.svg';
import canshecode from '../../public/assets/canshecode.svg';
import '../styles/Certificate.css';
import CertificateCard from "./CertificatesCard";
import DividerCircle from "./DividerCircle";


const CertificatesSection = () => {

  const courses = [
    {
      id: 1,
      img: freecodecamp,
      title: 'freeCodeCamp',
      subtitle: 'Responsive Web Design',
      year: 'Dec 2021 - Feb 2022'
    },
    {
      id: 2,
      img: canshecode,
      title: 'CanSheCode',
      subtitle: 'Front-end web development',
      year: 'Jan 2022 - June 2022'
    },

  ];

  return (
    <div className="main-section">
      <DividerCircle />
      <div className="section-content">
        <h2 className="section-title">Certificates & Awards</h2>
        <div className="certificates-section-list">
          {courses.map((course) => {
            return (
              <CertificateCard key={course.id} course={course} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CertificatesSection;
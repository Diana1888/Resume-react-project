import React from "react";
import '../styles/Certificate.css';

const CertificateCard = ({ course }) => {

  return (
    <div className="certificate-card">
      <div key={course.id}>
        <div className="certificate-card-item">
          <div className="certificate-card-content">
            <img className="certificate-card-img" src={course.img} alt={course.title} />
            <div>
              <p className="certificate-card-title">{course.title}</p>
              <p className="certificate-card-subtitle">{course.subtitle}</p>
            </div>
          </div>
          <p className="certificate-card-year">{course.year}</p>
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;
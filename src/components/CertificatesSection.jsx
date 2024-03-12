import React from "react";
import '../styles/Certificate.css';
import CertificateCard from "./CertificatesCard";
import DividerCircle from "./DividerCircle";
import mockData from "../mocks/mockdata";


const CertificatesSection = () => {

  return (
    <div className="main-section">
      <DividerCircle />
      <div className="section-content">
        <h2 className="section-title">Certificates & Awards</h2>
        <div className="certificates-section-list">
          {mockData.courses.map((course) => {
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
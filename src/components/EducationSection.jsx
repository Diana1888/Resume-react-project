import EducationCard from './EducationCard';
import '../styles/Education.css';
import constants from '../constants/constants';

const EducationSection = () => {
  return (
    <div className="main-section">
      <div className="section-content">
        <h2 className="section-title">Education</h2>
        <div className="education-section-list">
          {constants.schools.map((school) => {
            return <EducationCard key={school.id} school={school} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default EducationSection;

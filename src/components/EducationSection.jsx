import EducationCard from './EducationCard';
import '../styles/Education.css';
import DividerCircle from './DividerCircle';
import mockData from '../mocks/mockdata';

const EducationSection = () => {
  return (
    <div className="main-section">
      <DividerCircle />
      <div className="section-content">
        <h2 className="section-title">Education</h2>
        <div className="education-section-list">
          {mockData.schools.map((school) => {
            return <EducationCard key={school.id} school={school} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default EducationSection;

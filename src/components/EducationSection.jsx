import EducationCard from './EducationCard';
import '../styles/Education.css';
import constants from '../constants/constants';
import Section from './Section';

const EducationSection = () => {
  return (
    <Section title="Education">
      <div className="education-section-list">
        {constants.schools.map((school) => (
          <EducationCard key={school.id} school={school} />
        ))}
      </div>
    </Section>
  );
};

export default EducationSection;

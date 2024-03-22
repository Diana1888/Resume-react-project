import '../styles/Experience.css';
import ExperienceCard from './ExperienceCard';
import constants from '../constants/constants';
import Section from './Section';

const ExperienceSection = () => {
  return (
    <Section title="Achievements">
      <div className="experience-section-list">
        {constants.results.map((result) => {
          return <ExperienceCard key={result.id} result={result} />;
        })}
      </div>
    </Section>
  );
};

export default ExperienceSection;

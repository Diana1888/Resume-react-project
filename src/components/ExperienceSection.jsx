import '../styles/Experience.css';
import ExperienceCard from './ExperienceCard';
import mockData from '../mocks/mockdata';

const ExperienceSection = () => {
  return (
    <div className="main-section">
      <div className="section-content">
        <h2 className="section-title">Achievements</h2>
        <div className="experience-section-list">
          {mockData.results.map((result) => {
            return <ExperienceCard key={result.id} result={result} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;

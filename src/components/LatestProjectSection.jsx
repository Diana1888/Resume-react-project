import '../styles/LatestProject.css';
import LatestProjectCard from './LatestProjectCard';
import constants from '../constants/constants';
import Section from './Section';

const LatestProjectSection = () => {
  return (
    <Section title="Latest projects">
      <div className="projects-section-list">
        {constants.projects.map((project) => {
          return <LatestProjectCard key={project.id} project={project} />;
        })}
      </div>
    </Section>
  );
};

export default LatestProjectSection;

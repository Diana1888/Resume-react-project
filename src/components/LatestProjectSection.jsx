import '../styles/LatestProject.css';
import LatestProjectCard from './LatestProjectCard';
import constants from '../constants/constants';

const LatestProjectSection = () => {
  return (
    <div className="main-section">
      <div className="section-content">
        <h2 className="section-title">Latest projects</h2>
        <div className="projects-section-list">
          {constants.projects.map((project) => {
            return <LatestProjectCard key={project.id} project={project} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default LatestProjectSection;

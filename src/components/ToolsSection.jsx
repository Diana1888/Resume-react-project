import '../styles/Tools.css';
import ToolsCard from './ToolsCard';
import constants from '../constants/constants';

const ToolsSection = () => {
  return (
    <div className="main-section">
      <div className="section-content">
        <h2 className="section-title">Tools/Skills</h2>
        <div className="tools-section-list">
          {constants.skills.map((skill, index) => {
            const cardClass =
              index < 3 ? 'tools-card-large' : 'tools-card-small';
            return (
              <ToolsCard key={skill.id} skill={skill} cardClass={cardClass} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ToolsSection;

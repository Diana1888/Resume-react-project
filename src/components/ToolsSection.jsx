import '../styles/Tools.css';
import ToolsCard from './ToolsCard';
import constants from '../constants/constants';
import Section from './Section';

const ToolsSection = () => {
  return (
    <Section title="Tools/Skills">
      <div className="tools-section-list">
        {constants.skills.map((skill, index) => {
          const cardClass = index < 3 ? 'tools-card-large' : 'tools-card-small';
          return (
            <ToolsCard key={skill.id} skill={skill} cardClass={cardClass} />
          );
        })}
      </div>
    </Section>
  );
};

export default ToolsSection;

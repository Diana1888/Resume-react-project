import React from "react";
import '../styles/Tools.css';

const ToolsCard = ({ skill, index }) => {
  const cardClass = index < 3 ? "tools-card-large" : "tools-card-small";

  return (
    <div className="tools-card">
      <div className={cardClass} key={skill.id}>
        <div className="tools-card-item">
          <img className="tools-card-img" src={skill.img} alt={skill.title} />
          <p className="tools-card-title">{skill.title}</p>
          <p className="tools-card-subtitle">{skill.subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default ToolsCard;
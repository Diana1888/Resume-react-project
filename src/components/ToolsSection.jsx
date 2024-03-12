import React from "react";
import '../styles/Tools.css';
import ToolsCard from "./ToolsCard";
import DividerCircle from "./DividerCircle";
import mockData from "../mocks/mockdata";


const ToolsSection = () => {

  return (
    <div className="main-section">
      <DividerCircle />
      <div className="section-content">
        <h2 className="section-title">Tools/Skills</h2>
        <div className="tools-section-list">
          {mockData.skills.map((skill, index) => {
            return (
              <ToolsCard key={skill.id} skill={skill} index={index} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ToolsSection;
import React from "react";
import react from '../../public/assets/react.svg';
import html from '../../public/assets/html.svg';
import css from '../../public/assets/css.svg';
import javascript from '../../public/assets/javascript.svg';
import vscode from '../../public/assets/vscode.svg';
import figma from '../../public/assets/figma.svg';
import '../styles/Tools.css';
import ToolsCard from "./ToolsCard";
import DividerCircle from "./DividerCircle";


const ToolsSection = () => {

  const skills = [
    {
      id: 1,
      img: figma,
      title: 'Figma',
      subtitle: 'Web UI Design, Prototyping',
    },
    {
      id: 2,
      img: javascript,
      title: 'Javascript',
      subtitle: 'ES6',
    },
    {
      id: 3,
      img: react,
      title: 'React',
      subtitle: 'JavaScript framework',
    },
    {
      id: 4,
      img: html,
      title: 'HTML 5',
      subtitle: 'Structural Design',
    },
    {
      id: 5,
      img: css,
      title: 'CSS 3',
      subtitle: 'Style Design',
    },
    {
      id: 6,
      img: vscode,
      title: 'VS Code',
      subtitle: 'Code editor',
    },


  ];

  return (
    <div className="main-section">
      <DividerCircle />
      <div className="section-content">
        <h2 className="section-title">Tools/Skills</h2>
        <div className="tools-section-list">
          {skills.map((skill, index) => {
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
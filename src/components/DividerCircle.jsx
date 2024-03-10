import React from "react";
import circle from '../../public/assets/circle.svg';

const DividerCircle = () => {
  return (
    <div className="divider-circle">
      <img src={circle} alt="Circle" className="circle-img" />
      <div className="main-divider"></div>
    </div>
  );
};

export default DividerCircle;
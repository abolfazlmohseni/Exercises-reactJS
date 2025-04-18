import React from "react";

const Arrow = ({ name ,handler}) => {
  return (
    <div className="arrow-wrapper" onClick={handler}>
      <div className="round">
        <div id="cta">
          <span className={name}></span>
        </div>
      </div>
    </div>
  );
};

export default Arrow;

import React from "react";

const Stats = ({ units }) => {
  const rezalt = units.map((unit, index) => {
    if (index === units.length - 1) {
      return (
        <div className="one-third no-border">
          <div className="stat">{unit.state}</div>
          <div className="stat-value">{unit.value}</div>
        </div>
      );
    } else {
      return (
        <div className="one-third">
          <div className="stat">{unit.state}</div>
          <div className="stat-value">{unit.value}</div>
        </div>
      );
    }
  });
  return <>{rezalt}</>;
};

export default Stats;

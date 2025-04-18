import React from "react";
import CardHeade from "./cardHeade";
import Stats from "./stats";
const Card = ({ hero }) => {
  return (
    <>
      <div className={`clash-card ${hero.name}`}>
        <CardHeade hero={hero}/>

        <div className={`clash-card__level clash-card__level--${hero.name}`}>
          {hero.level}
        </div>
        <div className="clash-card__unit-name">The {hero.name}</div>
        <div className="clash-card__unit-description">{hero.description}</div>

        <div className={`clash-card__unit-stats clash-card__unit-stats--${hero.name} clearfix`}>
          <Stats units={hero.units} />
        </div>
      </div>
    </>
  );
};

export default Card;

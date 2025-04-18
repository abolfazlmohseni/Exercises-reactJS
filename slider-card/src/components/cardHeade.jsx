import React from "react";

const CardHeade = ({ hero }) => {
  return (
    <>
      <div className={`clash-card__image clash-card__image--${hero.name}`}>
        <img src={hero.img} alt={hero.name} />
      </div>
    </>
  );
};

export default CardHeade;

import React, { useState, useEffect } from "react";
import Card from "./card";
import Arrow from "./arrow";
import { preconnect } from "react-dom";
const Slider = () => {
  const [heros, setHeros] = useState([]);
  const [count, setCount] = useState(0);

  function prevHandler() {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(heros.length - 1);
    }
  }
  function nextHandler() {
    if (count < heros.length - 1) {
      setCount(count + 1);
    } else {
      setCount(0);
    }
  }

  useEffect(() => {
    fetch("http://localhost:3001/heroes")
      .then((response) => response.json())
      .then((heros) => setHeros(heros), heros);
  });

  return (
    <div className="slide-container">
      <div className="wrapper">
        {!heros.length ? (
          <div className="loading">Loading...</div>
        ) : (
          <div className="slider">
            <Arrow name="arrow-left" handler={prevHandler} />
            <Card hero={heros[count]} />
            <Arrow name="arrow-right" handler={nextHandler} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Slider;

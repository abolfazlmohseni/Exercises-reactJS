import React from "react";
import world from "./coords.json";
import ImageMapper from "react-img-mapper";
import worldimag from "./map.jpg";
const Map = ({ handelselectcuntry }) => {
  return (
    <ImageMapper
      src={worldimag}
      name="world-map"
      areas={world.areas}
      width={800}
      onClick={(e) => handelselectcuntry(e.name)}
    />
  );
};

export default Map;

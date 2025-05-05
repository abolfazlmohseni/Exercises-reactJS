import React, { useState, useEffect } from "react";
import Map from "./map";
import Info from "./info";
import Sammery from "./sammery";

const App = () => {
  const [selectcuntry, setselectcuntry] = useState("iran");
  const [data, setData] = useState(null);
  const [summary, setSummary] = useState({
    extract: null,
  });
  function handelselectcuntry(name) {
    setselectcuntry(name);
  }
  useEffect(() => {
    fetch(
      `/w/api.php?action=query&format=json&prop=extracts&titles=${selectcuntry}&exintro=true`
    )
      .then((response) => response.json())
      .then((res) => {
        setData(res.query.pages);
        let key = Object.keys(res.query.pages);
        key.forEach((key) => {
          setSummary(res.query.pages[key]);
        });
      })
      .catch((error) => console.error("Error:", error));
  }, [selectcuntry]);

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col col-md-9">
          <Map handelselectcuntry={handelselectcuntry} />
        </div>
        <div className="col-12 col-md-3">
          <Info />
        </div>
      </div>
      <div className="row mt-3">
        <Sammery data={summary} />
      </div>
    </div>
  );
};

export default App;

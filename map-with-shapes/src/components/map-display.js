import React from "react";
import "./map-display.css";
import { ReactBingmaps } from "react-bingmaps";
function MapDisplay() {
  return (
    <div className="mapwrapper">
      <ReactBingmaps bingmapKey={process.env.REACT_APP_API_KEY}></ReactBingmaps>
    </div>
  );
}

export default MapDisplay;

import React from "react";
import "../../Teams.css";
import placeholder from "./Images/placeholder.png";

export default function Comedybar() {
  return (
    <div className="cbar">
      <img src={placeholder} alt="placeholder logo" />
      <h1>Comedy Bar</h1>
      <br />
      <h2>Captians: Gary Rideout & Jen Fitzgerald </h2>
      <p> Team Statistics:</p>
    </div>
  );
}

import React from "react";
import "../../Teams.css";
import placeholder from "./Images/placeholder.png";

export default function Hecklers() {
  return (
    <div className="hecklers">
      <img src={placeholder} alt="placeholder logo" />
      <h1>Hecklers</h1>
      <br />
      <h2>Captians: Micheal Wong & Justin Wong </h2>
      <p> Team Statistics:</p>
    </div>
  );
}

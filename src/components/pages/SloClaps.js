import React from "react";
import "../../Teams.css";
import sloclapslogo from "./Images/sloclapslogo.png";

export default function SloClaps() {
  return (
    <div className="sloclaps">
      <img src={sloclapslogo} alt="Slo Claps logo" />
      <h1>Slo Claps</h1>
      <br />
      <h2>Captians: NAME & NAME </h2>
      <p> Team Statistics:</p>
    </div>
  );
}

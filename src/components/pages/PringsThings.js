import React from "react";
import "../../Teams.css";
import pthingslogo from "./Images/pthingslogo.png";

export default function PringsThings() {
  return (
    <div className="pthings">
      <img src={pthingslogo} alt="placeholder logo" />
      <h1>Pring's Things</h1>
      <br />
      <h2>Captians: Darryl Pring & NAME </h2>
      <p> Team Statistics:</p>
    </div>
  );
}

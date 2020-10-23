import React from "react";
import "../../Teams.css";
import placeholder from "./Images/placeholder.png";

export default function Orphans() {
  return (
    <div className="orphans">
      <img src={placeholder} alt="placeholder logo" />
      <h1>The Orphans</h1>
      <br />
      <h2>Captians: NAME & NAME </h2>
      <p> Team Statistics:</p>
    </div>
  );
}
